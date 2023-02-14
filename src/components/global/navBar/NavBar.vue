<template>
  <div class="nav-bar flex-between">
    <p>Welcome To Kwaidi Sellers Dashboard</p>
    <div class="settings flex">
      <ProfileNavBar />

      <FeaturesNavBar>
        <div v-for="info in featuresInfo" :key="info.class" :class="info.class">
          <router-link :to="info.to" :data-info="info.number">
            <img src="@/assets/images/chat.png" v-if="info.src === 'chat'" />
            <img src="@/assets/images/bell.png" v-if="info.src === 'bell'" />
          </router-link>
        </div>
      </FeaturesNavBar>
    </div>
  </div>
</template>

<script>
import ProfileNavBar from "./ProfileNavBar.vue";
import FeaturesNavBar from "./FeaturesNavBar.vue";
export default {
  name: "NavBar",
  components: {
    ProfileNavBar,
    FeaturesNavBar,
  },
  data() {
    return {
      featuresInfo: [
        {
          class: "chat",
          to: "/chat",
          src: "chat",
          number: 3,
        },
        {
          class: "bell",
          to: "/",
          src: "bell",
          number: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-bar {
  color: var(--white-color);
  padding: 50px 40px;
  align-items: flex-end;
  margin-top: 50px;
}
.nav-bar .settings {
  gap: 40px;
}

.settings .chat a {
  position: absolute;
  bottom: 2px;
  left: 7px;
}

.settings .bell a {
  position: absolute;
  bottom: 2px;
  left: 5px;
}
.chat a::after,
.bell a::after {
  content: attr(data-info);
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: var(--red-color);
  top: -7px;
  right: -7px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-size: 11px;
  font-weight: 500;
  color: var(--white-color);
}
</style>
