//axios的插件 用来做拦截
// nuxtjs中写插件只需要暴露一个函数
//  Object对象里面解构处理的其中一个属性

import {Message} from "element-ui";

export default function({$axios, redirect}){
    $axios.onError(err => {
        const {statusCode, message} = err.response.data;
        
        // 还未使用
        // if(statusCode === 401 || statusCode === 403){
        //     Message.warning({message: "请先登录"});
        //     redirect("/user/login");
        // }

        if(statusCode === 400){
            Message.warning({message});
        }
    })
}