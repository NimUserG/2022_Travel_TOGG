import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';
import Set from "../../set.js"

const Listpage = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () =>{
        axios.get(Set.serverurl + '/api/boardGet').then((res) => {
            // console.log(res.data);
            setPosts(res.data);
        })
    };
    const createPost = () => {
        window.location.href="community/edit"
    };
    const goDetailed = (target) => {
        // console.log(target);
        window.location.href=`community/edit?idx=${target}`;
    };
    useEffect(()=>{
        getPosts();
    }, []); 
    
    return (
      <div>      
        <h1>커뮤니티</h1>
        <div className="container" align="right">     
        <CustomButton value="글쓰기"
          className="btn btn-primary" 
          onClick = { createPost }/>
        </div>
        <table className="card mb-2">
            <tr className="card-body p-3" >
                <td>번호</td><td>제목</td><td>내용</td><td>생성일</td>
            </tr>
        {posts.map(post => {
            return(
            <tr className="card-body p-3"  key={post.id} onClick={goDetailed(post.id)}>
              {/* <td className="card-body p-3"> */}
                <td>{post.id}</td><td>{post.title}</td><td>{post.content}</td><td>{post.date}</td>              
            </tr>
            );
          }
        )}
        </table>
      </div>
    );
};  

export default Listpage;