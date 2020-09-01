<template>
  <div id="app">
    <app-Header></app-Header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <app-Footer></app-Footer>
    <side-bar class="sidebar"
              :class="$store.state.isShowPersonInfo?'moveSide':'defaultSide'"></side-bar>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import sidebar from './components/sidebar'
// import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      // isShowPersonInfo:this.$store.state.isShowPersonInfo
    }
  },
  // computed:{
  // 	...mapState({
  //        isShowPersonInfo: state => state.isShowPersonInfo,
  // 	})
  // },
  components: {
    'app-Header': Header,
    'app-Footer': Footer,
    'side-bar': sidebar
  }
}
</script>

<style scoped>
.sidebar {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 80%;
  height: 100%;
  /* background-color: #000000; */
  transition: all 0.5s;
  /* opacity: 0.8; */
}
.moveSide {
  left: 0;
}
.defaultSide {
  left: -80%;
}
</style>
