import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import PostService from '../API/PostServise';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const[comments, setComments] = useState([])
    const[fetchPostById, isLoading, error] = useFetching( async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const[fetchComments, isComLoading, comError] = useFetching( async(id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    // let idParams = params.id;
    return (
        <div  key={params.id}>
            <h1 >Вы открыли страницу с ID = {params.id} </h1>
            {isLoading 

                ? <Loader></Loader>
                : <div>{post.id}. {post.title}</div>
        
            }
            <h1>
                Коментарии
            </h1>
            {isComLoading
                ? <Loader></Loader>
                : <div >{
                    
                    comments.map(comm => 
                         /* console.log(comm.postId)  */
                          <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>

                        </div>
                       
                ) }</div>
            
            }

        </div>
    );
};

export default PostIdPage;