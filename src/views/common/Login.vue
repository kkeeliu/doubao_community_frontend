<template>
  <div>
    <el-form
      :rules="rules"
      v-loading="loading"
      element-loading-text="正在登录中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0)"
      ref="loginForm"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">账号登录</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="false"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="false"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          v-model="loginForm.code"
          placeholder="点击更换图片"
          style="width: 250px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin"
        >登录</el-button>
    </el-form>
  </div>
</template>
<script>


import { Message } from "element-ui";
import { postRequest } from "../../utills/api";

export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "/captcha?time=" + new Date(),
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      loading: false,
      checked: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    updateCaptcha() {
      this.captchaUrl = "/captcha?time=" + new Date();
      console.log("date: " + new Date());
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          postRequest("/login", this.loginForm).then((resp) => {
            this.loading = false;
            if (resp) {
              //存储用token
              const tokenStr = resp.data.tokenHead + resp.data.token;
              window.sessionStorage.setItem("tokenStr", tokenStr);
              //页面跳转
              this.$router.replace( "/");
            }
          });
        } else {
          Message.error("请输入所有字段！");
          return false;
        }
      });
    },
  },
};
</script>

<style >
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 80px auto;
  width: 450px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}

.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>