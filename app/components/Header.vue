<template>
  <b-navbar  toggleable="lg" type="dark" class="main-menu" fixed="top">
    <b-navbar-brand href="/">خدمت</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">خانه</b-nav-item>
        <!-- <b-nav-item href="#myFooter">تماس با ما</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item v-if="!user" href="/user/register">ثبت نام</b-nav-item>
        <b-nav-item-dropdown v-else>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>حسین خدمتی</em>
          </template>
          <b-dropdown-item href="#">حساب کاربری</b-dropdown-item>
          <b-dropdown-item @click="logOut">خروج</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "header",
  components: {},
  data() {
    return {
      user: null
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.user = localStorage.getItem("user");

      // console.log("this.user is:", this.user);
      // console.log(
      //   'localStorage.getItem("user") is:',
      //   localStorage.getItem("user")
      // );
    },
    logOut() {
      this.$store.dispatch({
        type: "user/logOutAction"
      });
    }
  }
};
</script>

<style>
</style>
