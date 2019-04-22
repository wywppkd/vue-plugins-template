<template lang="html">
  <div class="oil-stations-modal" v-if="applyStations.length">
    <div class="box">
      <div class="header"><span>适用油站</span></div>
      <div class="content">
        <div class="list" v-for="(item,index) in applyStations" :key="index">
          <div class="title">{{item.city}}</div>
          <div class="item" v-for="(value,key) in item.address" :key="key"><span></span>{{value}}</div>
        </div>
      </div>
      <span class="close" @click="hiddenStations"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applyStations',
  props: ['applyStations'],
  methods: {
    hiddenStations () {
      this.$emit('hiddenStations')
    }
  }
}
</script>

<style lang="scss" scoped>
.oil-stations-modal{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background:rgba(0, 0, 0, .6);
  >.box{
    width: 85%;
    margin: 60px auto;
    border-radius: 4px;
    background-color: #fff;
    position: relative;

    >.header{
      background: #f5f5f5;
      text-align: center;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
      color: #000;
      border-radius: 4px 4px 0 0;
      >span{
        position: relative;
        display: inline-block;
        &::after{
          content: '';
          position: absolute;
          width: 20px;
          height: 1px;
          background: #070707;
          right: -24px;
          top: 50%;
        }
        &::before{
          content: '';
          position: absolute;
          width: 20px;
          height: 1px;
          background: #070707;
          left: -24px;
          top: 50%;
        }
      }
    }

    >.content{
      padding: 0 15px;
      font-size: 14px;
      height: 60vh;
      overflow: auto;
      >.list{
        >.title{
          padding: 15px 0;
        }
        >.item{
          color: #999;
          padding-bottom: 15px;
          >span{
            display: inline-block;
            width: 15px;
            height: 15px;
            padding-right: 10px;
            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RDQwQUVEMzc1RjQxMUU4QjcwOUI1RTgxNTNEQzc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RDQwQUVENDc1RjQxMUU4QjcwOUI1RTgxNTNEQzc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhENDBBRUQxNzVGNDExRThCNzA5QjVFODE1M0RDNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhENDBBRUQyNzVGNDExRThCNzA5QjVFODE1M0RDNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HsoH9AAAAZpJREFUeNrslrtKA0EUhmeToEF8gBRiRIkgBLRUYmGw0kosfAPRxtpSfINoY6OFdtpqb6WNKF6iiIWIt4ggSryjyfgNTmCSTJLNrcuBb/bszkz+nXPOHuLIE5GxGIyCA1K4M7U2ASMiLN+tC7SAF35F5RZG4NQ24THe5CFnTgmmLaQsJ/y/jzttsAjBXAGpNys7gx4IlmA+T0CIVpiBS0RCpoBpW3AO93Br4Q5uYC0/UFLti8ATHCMSsQm0uIx7wJ4Nucu4Cn7Y9hXJi5sKyre4s8Q4nVnjEbWxT8NPwjLsq7zaBGQFAl4jRLMwibcCTbYQJV3+6KPhHxGatE7uHgITOgfCJhCFZvguIRA1/Jj+jhagQz/7KSTQD1fwknX07BCqBIeMZ3O8dYpTjOEPm8XiK1KCgTJy0AUXthKvVRUVtIZAQ6Aqk/UQ8Bv+cz0EvnTL7mUcNL/kVIVdVBj7Mz1pAA71fcJTZZvO2Jtu1RuMqlUfwCYMqb8t6zh90F2FwDW8whQiO+aECtG4vn4YRy3X2vW1E7IE/gQYAHLcbLctD1HeAAAAAElFTkSuQmCC') no-repeat;
            background-size: contain;
            vertical-align: center;
          }
        }
      }
    }

    >.close{
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAlo4p7QX28m760bq1k1flLCJrOQhzHtrKwKOFZTAP4iZjwaSdf3pS5zNYFw8GAAABy0lEQVRIx5VWbXvCIAyMQKFva6uzm7Zq69zcdv//B04mjhWwPtynQC+QQsiFXCS8YmVeK1XnJat4QvMY2xITlO04Q1+yWpM2pz7d7dL+tNGjmi0pjORcA3J7bA5kcGiOWwnU52Bg/A1Qp73zLdmfFPDGff6nAIpnCuC5AMSnO7sCZEp3kEogdaaAV7u8v8mr41Fd+JxmwC8e1b+hwNDQLJoB4m/J9QbSjcePSmGzNvYHsKKHWAEfV+tFoCAD/1LtVAFxtRnk3sTGFHP5lykTyV6CmQ3eyeyVAYspfwFkL8Z+h9Bmiqy55QEDsHD4YMntpDKkF1KB7ZTwZIdP0wW2KBIaJXbOkovpwGIHOVKFjJPrEeYTz1ARQ67z3wvDhmdxyMGoREcWlmgcp+hQUo6eAh6MBfjUI6caKYU8QnxqUZPCkTwwzWehfFKxDiI2pCH6p6OPNfriolMjNvl4dHpHP6D4JxpfBGgZUWZiC5ktlSqiVJpizOf5XBfj+HJv0T4WlNaXrNXd/7WSNRXF8jtE/y6tKHqy2/my22nZbcLC/vUr7NwKO/8V9q9z8qB16HTr0PadbR1mmpMCExTtSPNYN7r9GYQYdPvTrMnBD/edRNm8+onIAAAAAElFTkSuQmCC') no-repeat;
      background-size: contain;
    }
  }
}
</style>
