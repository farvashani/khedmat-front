<template>
    <ul class="vuejs-countdown">
        <li v-if="days > 0 && showDays">
            <p class="digit">{{ days | twoDigits }}</p>
            <p class="text">{{ days > 1 ? 'روز' : 'روز' }}</p>
        </li>
        <li v-if="showHours">
            <p class="digit">{{ hours | twoDigits }}</p>
            <p class="text">{{ hours > 1 ? 'ساعت' : 'ساعت' }}</p>
        </li>
        <li v-if="showMinutes">
            <p class="digit">{{ minutes | twoDigits }}</p>
            <p class="text">دقیقه</p>
        </li>
        <li v-if="showSeconds">
            <p class="digit">{{ seconds | twoDigits }}</p>
            <p class="text">ثانیه</p>
        </li>
    </ul>
</template>

<script>
let interval = null;
export default {
    name: 'CountDownTimer',
    props: {
        end: {
            type: String
        },
        stop: {
            type: Boolean
        },
        showDays: {
            type: Boolean
        },
        showHours: {
            type: Boolean
        },
        showMinutes: {
            type: Boolean
        },
        showSeconds: {
            type: Boolean
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0
        }
    },
    created() {
        if (!this.end) {
            throw new Error("Missing props 'endTime'");
        }
        let endTime = this.end;
        this.date = Date.parse(endTime.replace(/-/g, "/")) ? Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000) : Math.trunc(Date.parse(endTime) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'endTime'");
        }
        interval = setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60
        },
        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
    },
    watch: {
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                // Remove interval
                clearInterval(interval);
            }
        }
    },
    filters: {
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    destroyed() {
        clearInterval(interval);
    }
}
</script>
<style>
.vuejs-countdown {
  padding: 0;
  margin: 0;
  text-align: center;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
    margin: 0;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
    top: 20%;
    right: -20px;
    font-size: 35pt;
}
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 42pt;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 15pt;
}
</style>