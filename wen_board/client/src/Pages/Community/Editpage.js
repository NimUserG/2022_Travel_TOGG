import { useEffect, useState } from  'react';
import axios from 'axios'
import CustomButton from '../../Components/CustomButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImageEditor from '../../Components/ImageEditor';
import Set from "../../set.js"

const Editpage = () => {
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [communityCon, setCommunityCon] = useState({
      title: '',
      content: '',
      // files: ''
    });

    const onSubmit = () => {
      const formdata = new FormData();
      formdata.append('uploadImage', files);
      const config = {
        Headers: {
          'content-type' : 'multipart/form-data'
        },
      };
      //console.log(title, body);
      axios.post(Set.serverurl + '/api/boardPost', {
          title: communityCon.title,
          content: communityCon.content,
          image: formdata,
      }, config);
      
      document.location.href = '/community'
    };

    const goList = () => {
        window.location.href="/community"
    };

    const getValue = e => {
      const { name, value } = e.target;
    }


    const [files, setFiles] = useState('');

    const onLoadFile = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // setFiles(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          setFiles(reader.result);
          resolve();
        };
      });
    }
    // const encodeFileToBase64 = (fileBlob) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(fileBlob);
    //   return new Promise((resolve) => {
    //     reader.onload = () => {
    //       setFiles(reader.result);
    //       resolve();
    //     };
    //   });
    // };
    
    // const preview = () => {
    //   if (!files) return false;
    //   const imgEl = document.querySelector('.img__box');
    //   const reader = new FileReader();
    //   reader.onload = () =>
    //   (imgEl.style.backgroundImgae = `url(${reader.result})`);
    //   reader.readAsDataURL(files[0]);
    // }

    
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
          <CKEditor className="form-control"
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
          />
          {/* <ImageEditor/><br></br> */}
          <div className='upload_wrap'>
          <div className='custom__img'>
            <div className='img__wrap'>
              <img src={files} alt=''/>
            </div>
          </div>
          <form className="upload__input">
            <input type="file" id="imgae" accept='image/*' onChange={onLoadFile}/>
            <label htmlFor='imgae' />
            <div className='img__box'></div>
          </form>
          </div>
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