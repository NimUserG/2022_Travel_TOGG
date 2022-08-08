import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';
import Set from "../../set.js"

const Listpage = ({history}) => {
    const [posts, setPosts] = useState([]);
    const getPosts = () =>{
        axios.get(Set.serverurl + '/api/boardGet').then((res) => {
            // console.log(res.data);
            setPosts(res.data);
        })
    };
    // const getPosts = () =>{
    //   axios.get('/api/boardGet').then((res) => {
    //       // console.log(res.data);
    //       setPosts(res.data);
    //   })
    // };
    const createPost = () => {
        window.location.href="community/edit"
    };
    function goDetailed(target) {
        // window.location.href=`community/detaile/${target[0]}`;
        // window.location.href={{
        //   pathname: `community/detaile/${target}`,

        // }};
        history.push(`community/detaile`);
        window.location.reload();
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
          <thead>
            <tr className="card-body p-3" >
                <th>번호</th><th>제목</th><th>내용</th><th>생성일</th>
            </tr>
          </thead>
          <tbody>
        {posts.map(post => {
            return(
            <tr className="card-body p-3"  key={post.id} onClick={() => goDetailed([post.id,post.title])}>
                {/* <Link to={{pathname:"community/detaile", state: {
                  idx:"1"
                }}}> */}
                <td>{post.id}</td><td>{post.title}</td><td>{post.content}</td><td>{post.date}</td>
                {/* </Link> */}
            </tr>
            );
          }
        )}
        </tbody>
        </table>
      </div>
    );
};  

export default Listpage;