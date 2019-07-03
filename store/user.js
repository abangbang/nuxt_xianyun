//在nuxt中不要创建store的实例，每个jsm模块nuxt都会自动创建实例
//只需关注state，mutations，actions

//export在nuxt中的固定写法
export const state = {
    userInfo:{
        // 采用接口返回的数据结构
        token:'',
        user:{},
    }
};

export const mutations = {
    //保存用户信息到state
    setUserInfo(state, data){
        state.userInfo = data;
    },
    // 清除用户数据,相当于退出
    cleanUserInfo(state, data){
        state.userInfo = {
            token:'',
            user:{},
        }
    }
}
// export const actions = {
//     //登录
//     login({ commit }, data){
//         return this.$axios({
//             url:'/accounts/login',
//             method:'POST',
//             data
//         }).then(res => {
//             const data = res.data;
//             //保存到state
//             commit('setUserInfo',data);
//             return data;
//         })
//     }
// }

//异步修改state的数据
export const actions = {
    //登录的异步操作
    login({ commit }, data){
        return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
        }).then(res => {
           //调用store下的mutation的方法
           commit("setUserInfo",res.data);
           Promise.resolve();
        })
    }
}