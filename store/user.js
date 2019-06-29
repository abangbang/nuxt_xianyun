//在nuxt中不要创建store的实例，每个jsm模块nuxt都会自动创建实例
//只需关注state，mutations，actions

//export在nuxt中的固定写法
export const state = {
    userInfo:{
        // 采用接口返回的数据结构
        token:"TOEKN 123"
    }
};

export const mutations = {
    //保存用户信息到state
}