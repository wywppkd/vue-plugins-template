<template>
  <div>
    <applyStations :applyStations="applyStations" v-if="applyStations.length" @hiddenStations = "hiddenStations"></applyStations>
    <button @click="showStations">使用油站</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#ff0000',
      applyStations: []
    }
  },
  methods: {
    hiddenStations () {
      this.applyStations = []
    },
    showStations () {
      this.applyStations = [
        { city: '太原市', address: ['太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号'] },
        { city: '太原市', address: ['太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号'] },
        { city: '太原市', address: ['太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号'] },
        { city: '太原市', address: ['太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号', '太原市杏花岭区建设北路76号'] },
        { city: '北京市', address: ['北京市杏花岭区建设北路76号', '北京市杏花岭区建设北路76号'] }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
