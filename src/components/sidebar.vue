<template>
  <div class="personInfo">
    <div class='userHeader'>
      <img class="d-block rounded-circle mt-4 mx-auto"
           :src="$store.state.userImg"
           width="50px"
           height="50px"
           alt="头像" />
      <div class="nav user text-center mt-3 mx-auto px-auto">
        <h2 class="username text-white "
            title="name">{{$store.state.userName}}</h2>
        <label class="text-white ml-1">(前端工程师)</label>
      </div>
      <label class="d-block mx-auto text-white"
             title="签名">
        <small>There's a girl but I let her get away</small>
      </label>
    </div>
    <div class="personDes mt-3">
      <h4>Vue、小程序重度喜爱者</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personInfo',
  props: {},
  // ES6
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style scoped>
.personInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/personBg.jpg");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  color: #ffffff;
}
.user {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.personDes > h4 {
  animation: loading-text-typing 5s steps(56),
    loading-text-caret 1s steps(1) infinite;
  border-right: 1px solid;
}
@keyframes loading-text-typing {
  form {
    width: 0;
  }
}
@keyframes loading-text-caret {
  50% {
    border-color: transparent;
  }
}
</style>
