<template>
  <header class="Header">
    <nav class="navbar navba-expand-lg navbar-light bg-secondary p-0">
      <!-- LOgo信息及名称 -->
      <div class="logoInfo">
        <a class="py-2 pl-3"
           href="#"
           title="Logo">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="d-block mx-auto">
            <circle cx="12"
                    cy="12"
                    r="10"></circle>
            <line x1="14.31"
                  y1="8"
                  x2="20.05"
                  y2="17.94"></line>
            <line x1="9.69"
                  y1="8"
                  x2="21.17"
                  y2="8"></line>
            <line x1="7.38"
                  y1="12"
                  x2="13.12"
                  y2="2.06"></line>
            <line x1="9.69"
                  y1="16"
                  x2="3.95"
                  y2="6.06"></line>
            <line x1="14.31"
                  y1="16"
                  x2="2.83"
                  y2="16"></line>
            <line x1="16.62"
                  y1="12"
                  x2="10.88"
                  y2="21.94"></line>
          </svg>
        </a>
        <a href="/"
           class="navbar-brand ml-2">mosie的BLOG</a>
      </div>
      <!-- 头部导航 -->
      <ul class="navbar-nav d-none d-sm-block d-md-block header-tabar mr-auto clearfix">
        <li class="nav-item float-left ml-3">
          <router-link :to="{name:'Home'}"
                       class="nav-link"
                       title="主页"><i class="fa fa-home"></i><span class="badge">{{messageCount.homeMessage}}</span></router-link>
        </li>
        <li class="nav-item float-left ml-3">
          <router-link :to="{name:'Email'}"
                       class="nav-link mr-1"
                       title="邮箱"><i class="fa fa-envelope"></i><span class="badge">{{messageCount.emailMessage}}</span></router-link>
        </li>
        <li class="nav-item float-left ml-3">
          <router-link :to="{name:'Warn'}"
                       class="nav-link mr-1"
                       title="通告"><i class="fa fa-bell"></i><span class="badge">{{messageCount.warnMessage}}</span></router-link>
        </li>
        <li class="nav-item float-left ml-3"><a href="#"
             class="nav-link mr-1"
             @click="showSearch = !showSearch"
             title="搜索"><i class="fa fa-search"></i></a></li>
        <div class="nav-item float-left ml-1"
             v-show="showSearch">
          <input id="search-content"
                 class="search-content mt-1"
                 type="text"
                 placeholder="搜索你输入的关键字" />
          <button id="search-button">搜索</button>
        </div>
      </ul>
      <img class="menu d-sm-block d-md-none d-lg-none ml-auto mr-3"
           src="../assets/icon/icon_threeline_fill.png"
           alt="目录"
           @click='showPerson'>
      <!-- 用户信息 -->
      <ul class="nav d-none d-sm-block d-md-block clearfix">
        <li class="nav-item float-left"><a href="#"
             class="nav-link pr-1"
             title="头像"><img class="rounded-circle"
                 :src="userImgURL"
                 width="30px"
                 height="30px"
                 alt="头像"></a></li>
        <li class="nav-item user-info float-left px-0">
          <a href="#"
             class="username nav-link mx-0 px-xs-0"
             title="username">{{username}}<span class="caret"></span></a>
          <ul class="navbar-nav usermenu">
            <li>
              <a href="#"
                 class="nav-link pl-2">个人中心</a>
            </li>
            <li>
              <a href="#"
                 class="nav-link pl-2">账号设置</a>
            </li>
            <li>
              <a href="#"
                 class="nav-link pl-2">意见反馈</a>
            </li>
            <li>
              <a href="#"
                 class="nav-link pl-2">分享</a>
            </li>
            <li>
              <a href="#"
                 class="nav-link pl-2">退出</a>
            </li>
          </ul>
        </li>
        <li class="nav-item float-left">
          <router-link :to="{name:'OnlineChat'}"
                       class="nav-link pl-1"
                       title="message"><i class="fa fa-comments"></i><span class="badge">{{messageCount.onlineMessage}}</span></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
// @ is an alias to /src
// 引入mapActions，很重要
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  props: {
  },
  data () {
    return {
      isShowPersonInfo: this.$store.state.isShowPersonInfo,
      'showSearch': false,
      'username': this.$store.state.userName,
      'userImgURL': this.$store.state.userImg,
      'messageCount': {
        'homeMessage': this.$store.state.messageCount.homeMessage,
        'emailMessage': this.$store.state.messageCount.emailMessage,
        'warnMessage': this.$store.state.messageCount.warnMessage,
        'onlineMessage': this.$store.state.messageCount.onlineMessage
      }
    }
  },
  methods: {
    showPerson () {
      console.log('tag', this.isShowPersonInfo)
      this.isShowPersonInfo = !this.$store.state.isShowPersonInfo
      this.$store.commit('ShowPersonInfo')
    }
  },
  components: {

  }
}
</script>
<style scoped>
header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 1;
}
.logoInfo {
  display: flex;
  flex-wrap: nowrap;
}
.navbar {
  display: flex;
  flex-wrap: nowrap;
}
.fa-home {
  font-size: 20px;
}
.fa-envelope,
.fa-bell {
  font-size: 15px;
}

.fa-search {
  font-size: 17px;
}
.menu {
  width: 1.8em;
  height: 1.8em;
}
#search-content {
  outline: none;
  height: 30px;
  border: none;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  font-size: 13px;
  text-indent: 2px;
}

#search-button {
  cursor: pointer;
  height: 30px;
  outline: none;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 15px;
}

#search-button:hover {
  background-color: lightgrey;
}
.user-info {
  height: 44px;
  border: 0px;
}

.user-info:hover {
  background-color: lightgray;
}

.user-info:hover .usermenu {
  display: block;
}

.username {
  display: flex;
  color: #363a3e;
  /* padding-right: 0px; */
}

.caret {
  margin-left: 5px;
  margin-top: 10px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
}

.usermenu {
  display: none;
  position: fixed;
  width: 140px;
  margin-top: 2px;
  font-size: 13px;
  background-color: lightgray;
  border-top: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.usermenu li:hover {
  background-color: gray;
}

.badge {
  position: absolute;
  padding-bottom: 3px;
  width: 12px;
  height: 12px;
  padding-top: 1px;
  padding-left: 3px;
  text-align: center;
  vertical-align: center;
  margin-top: -2px;
  margin-left: -5px;
  background-color: red;
  color: black;
  border-radius: 50%;
}
</style>
