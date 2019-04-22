<template>
  <div class="forms">
    <Header/>
    <div class="container main-container-form">
      <span>
        <h3>ثبت نام</h3>
        <div class="error-msg" v-if="errMsg !== null">{{errMsg}}</div>
        <b-form @submit="sendMobile">
          <b-form-group id="input-group-1">
            <b-form-input
              id="input-1"
              v-model="form.referralCode"
              type="text"
              placeholder="شماره موبایل معرف"
              @keydown="clearErrMsg"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="input-2"
              v-model="form.mobile"
              type="text"
              placeholder="شماره موبایل خود را وارد نمایید."
              @keydown="clearErrMsg"
            ></b-form-input>

            <!-- <vue-tel-input
              inputClasses="form-control"
              v-bind:class="{'error-input' : hasError}"
              id="input-2"
              placeholder="شماره موبایل خود را وارد نمایید."
              v-model="form.mobile"
              @onInput="onInput"
              @keydown="clearErrMsg"
              :preferredCountries="['us', 'fa', 'ua']"
            ></vue-tel-input> -->
          </b-form-group>

          <b-button type="submit" variant="primary" class="btn-form">ارسال</b-button>
        </b-form>
      </span>
    </div>
  </div>
</template>

<script>
import validateForm from "../../store/services/validate-form";
import notifyMsg from "../../components/notifyMsg";
import Header from "../../components/Header";

export default {
  name: "register",
  // middleware: 'authenticated',
  components: {
    notifyMsg,
    Header
  },
  data() {
    return {
      form: {
        mobile: null,
        referralCode: ""
      },
      hasError: false,
      checkError: false,
      dismissSecs: 2,
      dismissCountDown: 0,
      typeMsg: "danger",
      errMsg: null,
      startRegister: true,
      codeVerification: null,
      sendAgainCode: false
    };
  },
  computed: {
    // errMsg() {
    //   return this.$store.getters["user/getErrMsg"];
    // }
  },
  mounted() {},
  watch: {
    items(newParams, oldParams) {
      // console.log('oldParams is:', oldParams)
      // console.log('newParams is:', newParams)
    }
  },
  methods: {
    sendMobile(evt) {
      evt.preventDefault();
      if ( validateForm(this.form).length !== 0) {
        this.errMsg =
          validateForm(this.form).length !== 0
            ? validateForm(this.form)
            : "شماره وارد شده صحیح نیست !";
      } else {
        this.$store.dispatch({
          type: "user/sendMobileForRegister",
          data: this.form
        });
      }
    },
    onInput({ mobile, isValid, country }) {
      this.checkError = !isValid;

      console.log(this.form.mobile, isValid, country);
    },
    clearErrMsg() {
      this.errMsg = null;
    }
  }
};
</script>