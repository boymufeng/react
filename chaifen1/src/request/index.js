import axios from 'axios'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

const request= axios.create({
    baseURL:'https://api.github.com',
    timeout:5000
})

request.interceptors.request.use(config=>{
    NProgress.start();
    return config;
})

request.interceptors.response.use(response=>{
    NProgress.done();
    return response.data;
})

export default request;