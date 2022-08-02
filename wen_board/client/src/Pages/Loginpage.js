import Axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import './Loginpage.css';
import Set from "../set.js"

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    // const [loginstate, setLoginstate] = useState('asdf');/
    
    // 페이지 렌더링 후 가장 처음 호출
    useEffect(() => {
        alert(Set.serverurl);
        Axios.get(Set.serverurl + '/api/login'
        ).then((response)=>{
            console.log(response)
        }
        // res => console.log(res)
        ).catch()
    },[]) // [] 덕에 한 번만 호출 됨

    /// input data 변화시 value 값을 변경시 useState 해준다.
    const handleInputId = (e) => {
        setInputId(e.target.value)
    };

    const handleinputPw = (e) => {
        setInputPw(e.target.value)
    }

    /// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        Axios.post(Set.serverurl + '/api/onLogin', null, {
            params: {
                'user_id' : inputId,
                'user_pw' : inputPw
            }
        }).then((response)=>{
            console.log(response)
            console.log('res.data.userId :: ', response.data.userId);
            console.log('res.data.msg :: ', response.data.msg)
            if(response.data.userId === undefined){
                //[id 불일치] userID = undefined, msg = '입력하신 id가 유효하지 않습니다.'
                console.log('=========================', response.data.msg)
                alert('입력하신 id가 일치하지 않습니다.')
            } else if(response.data.userId === null){
                //[id 존재, pw 불일치] userID = null, msg = undefined
                console.log('=========================', '입력하신 pwd가 일치하지 않습니다.')
                alert('입력하신 pwd가 일치하지 않습니다.')
            } else if(response.data.userId === inputId){
                //[id pw 일치] userID = userId1, msg = undefined
                console.log('=========================', '로그인 성공')
                sessionStorage.setItem('user_id', inputId)
                document.location.href = '/'
            }

            // document.location.href = '/'
        }).catch()
    }

    return(
        <div className="Login">
            <div className="form-wrapper">
                <input
                    className="txt-input"
                    type="text"
                    placeholder="ID"
                    name="input_id"
                    onChange={handleInputId}
                /><br></br>
                <input 
                    className="txt-input"
                    type="password"
                    placeholder="PWD"
                    name="input_pw"
                    onChange={handleinputPw}
                /><br></br>
                {/* <label value={loginstate} disabled = {loginstate === false}></label>
                <br></br> */}
                <CustomButton
                    className="submit-button"
                    onClick={onClickLogin}
                    value="로그인"/>
            </div>
        </div>
    )
}

export default Login;