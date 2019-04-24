<template>
  <div>
    <section class="container-fluid no-padding text-center">
      <div class="bg-home">
        <div class="bg-dark-home"></div>
        <CountDownTimer class="set-direction counter" end="June 5, 2019" showDays showHours showMinutes showSeconds></CountDownTimer>

        <!-- <countdown class="counter" ref="countdown" :time="61 * 24 * 60 * 60 * 1000">
          .
          <template
            slot-scope="props"
            class="error-msg"
          >{{ props.seconds }} : {{ props.minutes }} : {{ props.hours }} : {{ props.days }}</template>
        </countdown> -->
        <div class="full-slider">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            :interval="4000"
            indicators
            img-width="100%"
            img-height="100%"
          >
            <b-carousel-slide
              caption="خدمت تنها بزرگراه بدون محدودیت سرعت ایران"
              img-src="https://picsum.photos/id/10/1024/530"
            ></b-carousel-slide>
            <b-carousel-slide caption=" خدمت مکان و زمان ندارد" img-src="https://picsum.photos/id/12/1024/530"></b-carousel-slide>
            <b-carousel-slide caption="خدمت واگیر دارد" img-src="https://picsum.photos/id/22/1024/530"></b-carousel-slide>
          </b-carousel>
        </div>

        <Header/>
      </div>
    </section>

    <!-- Start old landing -->

    <section>
      <div class="container padding-responsive">
        <div class="row mt-5 no-margin">
          <div class="col-md-6 text-justify">
            <h3>
              <span class="highlight">اعتماد</span>
            </h3>
            <p class="sub-title">اعتماد گمشده این روزهای جامعه ما شده است.</p>

            <p>
              واژه ای کمرنگ در دنیای آلوده پیرامونی که تبدیل به ابزاری در جهت برد حداکثری منافع شخصی نمود
              پیدا کرده. راستش تفسیر واژه ها کمکی به ما نخواهد کرد و فقط میشه امیدوار بود به عملکرد ها و
              بازخورد ها. اعتماد متقابل در صورتی اعتبار پیدا خواهد کرد که همچون احترام واقعاً متقابل بوده
              و کسی در این بین سعی در بی اعتبار کردنش نداشته باشه. اعتماد بجز معنای لغوی یک بار جمعی دارد
              چون اگر یک نفر باشیم لازم نیست به کسی اعتماد کنیم، چون فقط خودمون هستیم. تصور ما در دنیای
              امروز از اعتماد با چند دهه پیش تغییر کرده ولی از آنجایی که در قرن حاضر برای هر کاری ابزاری
              هست ما اون ابزار رو برای شما فراهم خواهیم کرد. شما در ادامه خواهید فهمید که اعتماد کردن نه
              سخت هست و نه آسان بلکه ابزار خودش را لازم دارد.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/img/etemad.jpg" class="img-fluid border-radius">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container padding-responsive">
        <div class="row mt-5 no-margin">
          <div class="col-md-6">
            <img src="../assets/img/gharz.jpg" alt="حمایت" class="img-fluid border-radius">
          </div>
          <div class="col-md-6 text-justify">
            <h3>
              <span class="highlight">قرض</span>
            </h3>
            <p class="sub-title">
              وقتی داستان از زندگی های گذشته میخوانیم اولین نکته ای که همه ما را جذب خواهد کرد سادگی و
              مسالمت آمیز زندگی کردن در گذشته بوده که خیلی راحت در ضمن اعتماد به یکدیگر در صورت لزوم
              بین مردم در قالب خیلی ساده و با تضامین و یا بدون تضامین برای یک مدت مشخص شده از هم جنس
              یا پول قرض می کردند. اینکه ادامه این روند به شکل مدنیت بستگی داشته و یا فاکتورهای اخلاقی
              دیگه کار کارشناسان این زمینه هست. ولی ما این واژه را فتح الباب کار خودمان میدانیم و با
              راهکارهای مفید بدنبال کسب بالاترین میزان اعتماد سازی و تغییر فرهنگ قرض یا برگرداندن به
              مسیر سالم گذشته هستیم. چیزی که سالیان سال هست از آن دور شدیم و تمامی متولیان آن در پی
              کسب سود حداکثری از قرض هستند. ما به شما خواهیم آموخت که می شود بدون دریافت سود هم قرض
              داد.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container padding-responsive">
        <div class="row mt-5 no-margin">
          <div class="col-md-6 text-justify">
            <h3>
              <span class="highlight">خدمت</span>
            </h3>
            <p class="sub-title">
              تفسیر این کلید واژه که سر لوحه کار ماست کاری بیهوده بوده و ضمن جلوگیری از اتلاف وقت سعی
              خواهیم کرد به چرایی و چگونگی عملکرد آن در گام های بعدی سخن بگوییم.
              شرط لازم در درک خدمت این است که خدمت در همه جای این کره خاکی قابل دسترس بوده و هیچ نقطه
              کوری ندارد.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/img/khedmat21.jpg" class="img-fluid border-radius">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container padding-responsive">
        <div class="row mt-5">
          <div class="manager-pic col-md-6">
            <img src="../assets/img/khedmat.jpeg" alt="حمایت" class="img-khedmat border-radius">
          </div>
          <div class="col-md-6 text-justify border-speech">
            <div>
              <h3>
                <span>سخن با شما</span>
              </h3>
              <p>
                از سالها پیش به دنبال انجام کار خیر بودم ولی هر بار کمتر از تصوراتم می توانستم کاری انجام
                دهم. به دنبال ایده ای بودم تا بتونم این کمک رسانی رو بیش از پیش انجام بدم. ولی هر بار احساس
                می کردم اون فعالیت رنگ و بوی سیاسی به خودش خواهد گرفت یا بوی ریا می گیره. تا اینکه به فکر
                ایده ای ترکیبی افتادم.با چند نفر از دوستان مشورت کردم و ایده ای پخته تر از ایده ی ابتدایی
                طراحی شد که ایده ای بود فرا حزبی و بدون هیچ جهت گیری سیاسی و طیب و طاهر و فقط و فقط در جهت
                منافع مردم کشورم. معتقدم تا گام در جهت کاری برداشته نشود بدون شک معایب آن مشخص نخواهد شد و
                در صدد رفع آن بر نخواهیم آمد. لازم میدونم از تیم طراحی و راه اندازی این ایده در ابتدایی ترین
                مرحله کار تشکر کنم و امیدوارم روزی در کنار این عزیزان خدمت رسانی همه گیر شود.
              </p>
              <p>آخرین روز زمستان 97</p>
              <p>یار کوچک شما</p>
              <p>حسین خدمتی</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end old landing -->
  </div>
</template>

<script>
import Header from "../components/Header";
import CountDownTimer from "../components/CountDownTimer"

// import MarqueeText from "vue-marquee-text-component";

export default {
  components: {
    Header,
    CountDownTimer

    // MarqueeText
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>
