import axios from "axios";
import {Message} from "element-ui";
import router from "../router";



//登录之后的请求拦截器
axios.interceptors.request.use(config=>{
    //如果存在token之后的请求里面就去携带这个token
    if (window.sessionStorage.getItem("tokenStr")){
        config.headers['Authorization']=window.sessionStorage.getItem("tokenStr");
    }
    return config;
},error => {
    console.log("error"+error);
})


//响应拦截器
axios.interceptors.response.use(success=>{
    //接口请求成功但是业务逻辑错误 响应失败 后端可以做友好提示，因为可以访问到后端接口
    if (success.status && success.status =='200'){
        if (success.data.code == '500'||success.data.code=='401'&&success.data.code=='403'){
            Message.error({message:success.data.message});
            return;
        }
        //上面的情况把业务逻辑出错的情况列举出来了，能运行到这一步说明响应成功
        if (success.data.message){
            Message.success({message:success.data.message});
        }
    }
    return success.data;

    //后端做不了友好的提示，因为后端的接口都访问不到 ，前端自己做友好提示
}, error => {
    if (error.response.code=='404'&&error.response.code=='504'){
        Message.error({message:'服务器被吃了( ╯□╰ )'});
    }else if (error.response.code=='403'){
        Message.error({message:'还没有权限，请联系管理员！'});
    }else if (error.response.code='401'){
        Message.error({message:'还未登录，请先登录！'});
        router.replace('/');
    }else {
        if (error.response.data.message){
            Message.error({message:error.response.data.message})
        }else {
            Message.error({message:'未知错误'});
        }
    }
    return;
});

//加一个前置的路径大型项目
let base=''

//封装post请求 传送json格式的post请求 更新操作
export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}

//封装get请求 传送json格式的get请求 查操作
export const getRequest=(url,params)=>{
    return axios({
        method:'get',
        url:`${base}${url}`,
        data:params
    })
}

//封装delete请求 传送json格式的delete请求
export const deleteRequest=(url,params)=>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
        data:params
    })
}

//封装put请求 传送json格式的put请求 增操作
export  const  putRequest=(url,params)=>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params
    })
}