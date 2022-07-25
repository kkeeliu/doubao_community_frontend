<template>
  <div>
    <el-form
      ref="ruleForm"
      v-loading="loading"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="loginContainer"
    >
      <h3 class="loginTitle">新用户入驻</h3>
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名"/>
      </el-form-item>

      <el-form-item  prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
      </el-form-item>

      <el-form-item  prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
          placeholder="请重新确认密码"
        />
      </el-form-item>

      <el-form-item  prop="email">
        <el-input v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即注册</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postRequest } from "../../utills/api";

export default {
  name: "Register",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          postRequest("/user/register", this.ruleForm)
            .then((resp) => {
              if (resp && resp.code == 200) {
                this.$message({
                  message: "账号注册成功",
                  type: "success",
                });
                setTimeout(() => {
                  this.loading = false;
                  this.$router.push({ path: this.redirect || "/login" });
                }, 0.1 * 1000);
              } else {
                this.$message.error("注册失败，" + resp.msg);
                this.loading = false;
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
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
</style>