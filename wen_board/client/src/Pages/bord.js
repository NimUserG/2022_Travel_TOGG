import {useEffect, useState} from 'react';
import './App.css';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import { element } from 'prop-types';
import Set from "../set.js"

function App() {
  const [boardContent, setBoardContent] = useState({
    title: '',
    content: ''
  });

  const [viewContent, setViewContent] = useState([]);
  
  useEffect(() => {
    Axios.get(Set.serveryrl + '/api/get'
    ).then((response)=>{
      setViewContent(response.data);
    })
  },[]);

  const submitBoard = () => {
    setViewContent(viewContent.concat({...boardContent}));
    Axios.post(Set.serverurl + '/api/insert', {
      title: boardContent.title,
      content: boardContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    })
    console.log(boardContent);
  };

  return (
    <div className="App">
      <h1>업로드</h1>
      <div className='board-container'>
        <table>
          <tr className='tit_tr'><th>제목</th><th>내용</th></tr>
          {viewContent.map(element =>
            <tr>
            <th className='cont_th'>
              {element.title}
            </th>
            <td className='cont_td'>
              {element.content}
            </td>
            </tr>
          )}
        </table>
        
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />  
        <textarea className="text-area"
          placeholder='내용'
          onChange={getValue}
          name='content'
        />
      </div>
      <button className="submit-button"
        // onClick={() => {
        //   setViewContent(viewContent.concat({...boardContent}));
        // }} >
        onClick={submitBoard}>
        입력</button>
    </div>
  );
}

export default App;