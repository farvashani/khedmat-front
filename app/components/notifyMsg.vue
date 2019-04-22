<template>
  <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>dfvbkjdkfjkjnkj</p>
    </b-alert>
</template>
<script>
export default {
    name: "notify-msg",
  data() {
    return {
        dismissSecs: 2,
        dismissCountDown: 0,
        showDismissibleAlert: false
    };
  },
    props: {
            msg: {
                type: String,
                required: false,
                default: '',
            },
            typeNotify: {
                type: String,
                required: false,
                default: '',
            }
        },
    watch: {
    items(newParams, oldParams) {
      // console.log('oldParams is:', oldParams)
      // console.log('newParams is:', newParams)
    }
  },
  methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }

  }
};
</script>