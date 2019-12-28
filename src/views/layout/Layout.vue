<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
      <Sidebar :collapse="isCollapse" :routes="$router.options.routes[0].children"/>
        
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div
            style="width: 60px; cursor: pointer;"
            @click.prevent="toggleSideBar"
          >
            <i v-show="!isCollapse" class="fa fa-outdent"></i>
            <i v-show="isCollapse" class="fa fa-indent"></i>
          </div>
          <!-- 我是样例菜单 -->
          <breadrumd />
 
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view />
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar";
import breadrumd from '../../components/Breadcrumb'
export default {
  name: "Container",
  components: {
    Sidebar,
    breadrumd
  },
  data() {
    return {
      username: "",
      isCollapse: false
    };
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  }
};
</script>

<style></style>
