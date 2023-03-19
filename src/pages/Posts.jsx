import React, { useState, useEffect, useRef} from "react";
import PostList from "../components/PostList";
// import './styles/App.css'
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostServise";
// import Loader from "./components/UI/Loader/Loader";
import Loader from "../components/UI/Loader/Loader";

import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";



function Posts() {
   
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()
 
  console.log(lastElement)
 
  

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const responce = await PostService.getAll(limit, page)
    setPosts([...posts, ...responce.data])
    const totalCount = responce.headers['x-total-count']
    setTotalPage(getPagesCount(totalCount, limit))

    
  })

  
 useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
 })

  useEffect(() => {
    fetchPosts(limit, page)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const createRost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    // alert('Вы уверены')
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    // fetchPosts(limit, page)

  }

    
  return (
    <div className="App">
      {/* <MyButton onClick={fetchPosts}>GET POSTS</MyButton> */}
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createRost}/>
      </MyModal>
     
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Колличество элементов"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать все'}
          
        ]}
      />
      {postError && 
          <h1>Ошибка загрузки ${postError}</h1>
      }

      {isPostsLoading && 
      
        <Loader></Loader>
      
      } 
      
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        <div ref={lastElement} style={{height: 20, background: 'grey'}}/>
      
      <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
      
      
    </div>
  );
}

export default Posts;
