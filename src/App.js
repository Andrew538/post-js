import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";

// import PostList from "./components/PostList";
import './styles/App.css'
// import PostForm from "./components/PostForm";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MyButton from "./components/UI/button/MyButton";
// import { usePosts } from "./hooks/usePost";
// import PostService from "./API/PostServise";
// import Loader from "./components/UI/Loader/Loader";
// import { useFetching } from "./hooks/useFetching";
// import { getPagesCount } from "./utils/pages";
// import Pagination from "./components/UI/pagination/Pagination";



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
      setLoading(false)
    }
  }, []);

    return (
      <AuthContext.Provider
        value={{isAuth, setIsAuth, isLoading}}
      >
        <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
      </AuthContext.Provider>
      
    )
}
export default App;
   
//   const [posts, setPosts] = useState([])
//   const [filter, setFilter] = useState({sort: '', query: ''})
//   const [modal, setModal] = useState(false)
//   const [totalPages, setTotalPage] = useState(0)
//   const [limit, setLimit] = useState(10)
//   const [page, setPage] = useState(1)
 
//   // console.log([pagesArray])

//   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
//   const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
//     const responce = await PostService.getAll(limit, page)
//     setPosts(responce.data)
//     const totalCount = responce.headers['x-total-count']
//     setTotalPage(getPagesCount(totalCount, limit))

    
//   })

  

//   useEffect(() => {
//     fetchPosts(limit, page)
    
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const createRost = (newPost) => {
//     setPosts([...posts, newPost])
//     setModal(false)
//   }

//   const removePost = (post) => {
//     // alert('Вы уверены')
//     setPosts(posts.filter(p => p.id !== post.id))
//   }

//   const changePage = (page) => {
//     setPage(page)
//     fetchPosts(limit, page)

//   }

    
//   return (
//     <div className="App">
//       {/* <MyButton onClick={fetchPosts}>GET POSTS</MyButton> */}
//       <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
//       <MyModal visible={modal} setVisible={setModal}>
//           <PostForm create={createRost}/>
//       </MyModal>
     
//       <hr style={{margin: '15px 0'}}/>
//       <PostFilter filter={filter} setFilter={setFilter}/>
//       {postError && 
//           <h1>Ошибка загрузки ${postError}</h1>
//       }
//       {isPostsLoading
//         ?<Loader></Loader>
      
//         : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
//       }
//       <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
      
      
//     </div>
//   );
// }

