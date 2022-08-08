import Axios from "axios";
import { useState, useEffect } from 'react';
import CustomButton from '../../Components/CustomButton';
import Set from "../../set.js"

export default function DetailedPage(props) {    
    // const [posts, setPosts] = useState([]);
    // const {search} = props;
    // console.log(search);

    const getPosts = () =>{
        console.log("------------");
        Axios.get(Set.serverurl + `/api/onD`,
        // {
        //     params: {
        //         idx: 1
        //     }
        // }
        ).then((res) => {
            alert(res.data);
        }).catch(function(error){
            console.log("     ===========");
            console.log("     " + error);
            console.log("     ===========");
        })
        console.log("++++++++++++");
    };
    // const getPosts = () =>{
    //     console.log("------------");
    //     Axios.get(`/api/detaileGet/${1}`
    //     ).then((res) => {
    //         alert(res.data);
    //     }).catch(function(error){
    //         console.log("     ===========");
    //         console.log("     " + error);
    //         console.log("     ===========");
    //     })
    //     console.log("++++++++++++");
    // };

    useEffect(()=>{
        getPosts();
    }, []); 
    
    const goEdit = () => {
        window.location.href="/community/edit"  
    };
    const goList = () => {
        window.location.href="/community"
    }; 
  return(
    <>
        <hr></hr>
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input 
            className="form-control"
            readOnly="true"
            // value= { communityCon.title }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">내용</label>
          <textarea 
            className="form-control"
            // value = { content }
            readOnly="true"
            rows="20"
          />
        </div>
        <CustomButton value="목록"
            className="btn btn-primary" 
            onClick = { goList }/>&nbsp;
        <CustomButton value="수정"
            className="btn btn-primary" 
            onClick = { goEdit }/>
    </>
    );
    
}