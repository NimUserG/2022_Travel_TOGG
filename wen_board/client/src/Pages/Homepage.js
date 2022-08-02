/*****
 * main.js
 * : 메인화면
 * 최나경
 * 생성: 2022.07.21
 * 수정: 2022.07.22
 ******/

// import {useEffect, useState} from 'react';
// import Axios from 'axios';
// import Header from '../Components/Header';
// import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
// import Footer from '../Components/Footer';
// import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import


function Main(){
    // const session = require('express-session');

    return(
        <div className='bootstrap-4'>
        <Banner/>
        </div>
    );
}

export default Main;