<template>
  <div class="dashboard">
    <SideBar :style="{ top : topSide + 'px'}"/>
    <div class="content">
      <NavBar />
      <div class="router-view">
        <router-view @scaleBar="scaleBar"/>
      </div>
    </div>
  </div>
</template>


<script>
import SideBar from "@/components/global/sidebar/SideBar.vue";
import NavBar from "@/components/global/navBar/NavBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      topSide: '0',
    }
  },
  methods: {
    scaleBar(val) {
      this.topSide = val;
    }
  }
};
</script>


<style>
@import "./assets/Fonts/css/all.min.css";
@import "./assets/Fonts/css/normalize.css";
@import "./assets/css/global.css";
@import "./assets/css/customFramwork.css";

.dashboard {
  display: flex;
  background-color: var(--dark-blue-color);
  position: relative;
}

.content {
  flex: 1;
}

.router-view {
  padding: 0 25px 25px;
  color: var(--white-color);
}

@media (max-width: 767px) {
  .router-view {
    padding: 25px 15px;
  }
}
</style>
