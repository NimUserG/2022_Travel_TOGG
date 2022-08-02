import { useState } from  'react';
import axios from 'axios'
import CustomButton from '../../Components/CustomButton';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImageEditor from '../../Components/ImageEditor';
import Set from "../../set.js"

const Editpage = () => {
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [communityCon, setCommunityCon] = useState({
      title: '',
      content: ''
    });
    const onSubmit = () => {
        //console.log(title, body);
        axios.post(Set.serverurl + '/api/boardPost', {
            title: communityCon.title,
            content: communityCon.content
        })
        document.location.href = '/community'
    };
    const goList = () => {
        window.location.href="/community"
    };

    const getValue = e => {
      const { name, value } = e.target;
    }

    
  return(
        <div> 
        <h1> 게시글 작성 </h1>
        <hr></hr>
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input 
            className="form-control" 
            value= { communityCon.title }
            onChange={ (event)=> {
              setCommunityCon({
                title: event.target.value ,
                ...communityCon
              });  
            } }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">내용</label>
          {/* <textarea 
            className="form-control"
            value = { content }
            onChange={ (event)=> {
              setContent(event.target.value);
            } }
            rows="20"
          /> */}
          {/* <CKEditor className="form-control"
            editor={ClassicEditor}
            data=""
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            // onChange={this.handleCkeditorState}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setCommunityCon({
                ...communityCon,
                content: data
              });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          /> */}
          <ImageEditor/>
        </div>
        <CustomButton value="목록"
          className="btn btn-primary" 
          onClick = { goList }/>&nbsp;
        <CustomButton value="완료"
          className="btn btn-primary" 
          onClick = { onSubmit }/>
      </div>
    );
};

export default Editpage;