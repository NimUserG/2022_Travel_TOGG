import Axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "../../Components";
import Set from "../../set.js"

export default function DetailedPage() {
    // const [contentData,setContentData] = useState({
    //   title: '',
    //   content: ''
    // });   
    
    const [posts, setPosts] = useState();

    const getPosts = () =>{
        Axios.get(Set.serverurl + '/api/boardGet').then((res) => {
            setPosts(res.data);
        })
    };

    useEffect(()=>{
        getPosts();
    }, [])
    
    const goEdit = () => {
        window.location.href="/community/edit"  
    };
    const goList = () => {
        window.location.href="/community"
    };

    // const getValue = e => {
    //     const { name, value } = e.target;
    //     setContentData({
    //       ...contentData,
    //       [name]: value
    //     })
    //   };

  return(
        <div> 
        {/* <td>{post.id}</td><td>{post.title}</td><td>{post.content}</td><td>{post.date}</td>    */}
        <h1> 게시글 작성 </h1>
        <hr></hr>
        {posts.map(post => {
            return(            
                <div key={post.idx}>
                    <div className="mb-3">
                        <label className="form-label">제목</label>
                        <input 
                            className="form-control" 
                            value={post.title}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">내용</label>
                        <textarea 
                            className="form-control"
                            value={post.content}
                            rows="20"
                        />
                    </div>
                </div>
            );
          }
        )}
        <CustomButton value="목록"
          className="btn btn-primary" 
          onClick = { goList }/>&nbsp;
        <CustomButton value="수정"
          className="btn btn-primary" 
          onClick = { goEdit }/>
      </div>
    );
    
}