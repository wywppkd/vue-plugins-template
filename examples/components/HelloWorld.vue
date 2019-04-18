<template>
  <div>
    <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ff0000'
    }
  },
  methods: {
    headleChangeColor () {
      console.log('颜色改变')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
