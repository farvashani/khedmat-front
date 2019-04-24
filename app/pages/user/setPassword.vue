<template>
  <div class="form-page">
    <Header/>
    <div class="forms">
      <section class="container main-container-form set-direction">
        <div>
          <h3>تعیین رمز ورود</h3>
          <div class="error-msg" v-if="errMsg !== null">{{errMsg}}</div>

          <b-form @submit="onSubmit" v-if="show">
            <b-input-group class="mt-3">
              <b-form-input
                id="input-1"
                v-model="form.password"
                :type="password_FieldType"
                @keydown="clearErrMsg"
                required
                placeholder="رمز ورود"
              ></b-form-input>
              <b-input-group-append>
                <b-button @click="switchVisibilityPass('pass')">
                  <i :class="password_FieldType === 'password' ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>

            <b-input-group class="mt-3">
              <b-form-input
                id="input-2"
                v-model="form.confirm_password"
                :type="confirm_password_FieldType"
                @keydown="clearErrMsg"
                required
                placeholder="تکرار رمز ورود"
              ></b-form-input>
              <b-input-group-append>
                <b-button @click="switchVisibilityPass()">
                  <i
                    :class="confirm_password_FieldType === 'password' ? 'fa fa-eye' : 'fa fa-eye-slash'"
                  ></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>

            <b-button type="submit" variant="primary" class="mt-3 btn-form">ذخیره</b-button>
          </b-form>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  data() {
    return {
      form: {
        password: "",
        confirm_password: ""
      },
      errMsg: null,
      password_FieldType: "password",
      confirm_password_FieldType: "password",
      show: true
    };
  },
  components: {
    Header,
    Footer
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.password !== this.form.confirm_password) {
        this.errMsg = "رمز ورود با تکرار أن مطابقت ندارد!";
      } else {
        this.errMsg = null;
        let obj = {
          Password: this.form.password,
          Username: localStorage.getItem("mobile")
        };
        this.$store.dispatch({
          type: "user/sendSetPassword",
          data: obj
        });
      }
    },
    switchVisibilityPass(type) {
      if (type) {
        this.password_FieldType =
          this.password_FieldType === "password" ? "text" : "password";
      } else {
        this.confirm_password_FieldType =
          this.confirm_password_FieldType === "password" ? "text" : "password";
      }
    },
    clearErrMsg() {
      this.errMsg = null;
    }
  }
};
</script>

<style>
</style>
