<template>
  <!-- <div class="container main-container-form" v-if="mobile !== null"> -->
  <!-- <div class="forms">
    <Header/>
    <div class="container main-container-form">
      <div class="error-msg" v-if="errMsg !== null">{{errMsg}}</div>
      <h6>شماره موبایل وارد شده :</h6>
      <p class="set-direction text-center green">{{mobile}}</p>

      <b-form @submit="sendCodeVerification">
        <countdown
          ref="countdown"
          :time="2 * 60 * 1000"
          @countdownprogress="handleCountdownProgress"
        >
          <template slot-scope="props" class="error-msg">{{ props.seconds }} : {{ props.minutes }}</template>
        </countdown>
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-1"
            v-model="codeVerification"
            type="text"
            placeholder="کد ارسال شده را وارد نمایید."
            @keydown="clearErrMsg"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" v-if="!sendAgainCode" class="btn-form">ارسال کد</b-button>
        <b-button
          variant="primary"
          v-else
          @click="sendMobile"
          class="btn-form"
        >ارسال مجدد کد فعالسازی</b-button>
        <b-button @click="$router.replace({path : '/user/register'})">تصحیح شماره موبایل</b-button>
      </b-form>
    </div>
    <Footer/>
  </div>-->
  <div class="form-page">
    <Header/>
    <div class="forms">
      <div class="container main-container-form">
        <div class="error-msg" v-if="errMsg !== null">{{errMsg}}</div>
        <h6>شماره موبایل وارد شده :</h6>
        <p class="set-direction text-center green">{{mobile}}</p>

        <b-form @submit="sendCodeVerification">
          <countdown
            ref="countdown"
            :time="2 * 60 * 1000"
            @countdownprogress="handleCountdownProgress"
          >
            <template slot-scope="props" class="error-msg">{{ props.seconds }} : {{ props.minutes }}</template>
          </countdown>
          <b-form-group id="input-group-1">
            <b-form-input
              id="input-1"
              v-model="codeVerification"
              type="text"
              placeholder="کد ارسال شده را وارد نمایید."
              @keydown="clearErrMsg"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" v-if="!sendAgainCode" class="btn-form">ارسال کد</b-button>
          <b-button
            variant="primary"
            v-else
            @click="sendMobile"
            class="btn-form"
          >ارسال مجدد کد فعالسازی</b-button>
          <b-button @click="$router.replace({path : '/user/register'})">تصحیح شماره موبایل</b-button>
        </b-form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import validateForm from "../../../store/services/validate-form";
import notifyMsg from "../../../components/notifyMsg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default {
  name: "verify",
  // middleware: 'authenticated',
  components: {
    notifyMsg,
    Header,
    Footer
  },
  data() {
    return {
      hasError: false,
      checkError: false,
      dismissSecs: 2,
      dismissCountDown: 0,
      typeMsg: "danger",
      errMsg: null,
      codeVerification: "",
      sendAgainCode: false,
      mobile: null
    };
  },
  computed: {},
  mounted() {
    this.init();
  },
  watch: {
    items(newParams, oldParams) {
      // console.log('oldParams is:', oldParams)
      // console.log('newParams is:', newParams)
    }
  },
  methods: {
    init() {
      if (this.$route.params.mobile && localStorage.getItem("memberId")) {
        this.mobile = this.$route.params.mobile;
      } else {
        this.$router.push("/user/register");
      }
    },
    handleCountdownProgress(data) {
      if (data.totalSeconds === 0) {
        // alert("finish!!!!");
        this.sendAgainCode = true;
      }
    },
    sendMobile(evt) {
      evt.preventDefault();
      let obj = {
        mobile: this.mobile,
        referralCode: ""
      };
      if (this.$refs.countdown) {
        this.$refs.countdown.stop();
      }
      this.startRegister = false;
      if (this.$refs.countdown) {
        this.sendAgainCode = false;
        this.$refs.countdown.start();
      }
      this.$store.dispatch({
        type: "user/sendMobileForRegister",
        data: obj
      });
    },
    sendCodeVerification(evt) {
      evt.preventDefault();

      var isnum = /^\d+$/.test(this.codeVerification);

      if (this.codeVerification.length !== 5 || !isnum) {
        this.errMsg = "کد وارد شده صحیح نیست!";
      } else {
        let obj = {
          VerificationCode: this.codeVerification,
          MemberId: localStorage.getItem("memberId")
        };
        this.$store.dispatch({
          type: "user/sendCodeMobileForRegister",
          data: obj
        });
      }
    },
    clearErrMsg() {
      this.errMsg = null;
    }
  }
};
</script>