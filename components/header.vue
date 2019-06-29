<template>
    <el-row class="header">
        
        <!-- 中间的内容 -->
        <el-row type="flex" justify="space-between" class="main">

            <!-- logo -->
            <div class="logo">
                <nuxt-link to="/">
                    <img src="/images/logo.jpg" alt="">
                </nuxt-link>
            </div>

            <!-- 菜单 -->
            <el-row type="flex" class="navs">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>
            </el-row>

            <!-- 登录状态 -->
            <el-row>

                <!-- 下拉菜单 -->
                <el-dropdown v-if="true">
                    <el-row type="flex" align="middle" class="el-dropdown-link">
                        <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="">
                        <span>地球发动机</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-row>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <div v-else class="login-link">
                    <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
                </div>
            </el-row>
        </el-row>

    </el-row>
</template>

<script >
export default {

}
</script>

<style lang="less" scoped>
    .header{
        height:60px;
        border-bottom: 1px #ddd solid;
        //阴影透明度
        box-shadow: 0 2px 2px #ddd;

        .main{
            width:1000px;
            margin:0 auto;

            .logo{
                width: 156px;
                height:42px;
                margin-top:9px;

                img{
                    display: block;
                    width:100%;
                }

            }

            .navs{
                height: 60px;
                line-height: 60px;
                flex:1;
                //鼠标移入下边框线高亮
                a{
                    display: block;
                    height:100%;
                    padding:0 20px;
                    box-sizing: border-box;

                    &:hover{
                        border-bottom:5px #409eff solid;
                        color: #409eff;
                    }
                }
                //已被点击的高亮显示
                .nuxt-link-exact-active{
                    background: #409eff;
                    color:white;

                    &:hover{
                        color: #ffffff  ;
                    }
                }
            }
        }
        // 下拉菜单
        .el-dropdown-link{
            height: 60px;
            img{
                width:36px;
                height:36px;
                border-radius: 50%;
                //图片居中
                vertical-align: middle;
                margin-right: 5px;
                &:hover{
                    border: 2px solid #409eff;
                }
            }
        }

        .login-link{
            line-height:60px;

            a:hover{
                color:#409eff;
            }
        }
    }
</style>
