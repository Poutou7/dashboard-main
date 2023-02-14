<template>
  <div class="sub-link">
    <div
      class="title flex-between"
      @click="showList = !showList"
      v-if="list.length > 0"
    >
      <span>{{ title }}</span>
      <i class="fa-solid fa-angle-down"></i>
    </div>

    <Transition>
      <div v-if="showList" class="sub-links" :class="{ active: showList }">
        <router-link :to="makeLink(l)" v-for="(l, i) in list" :key="i">
          {{ l }}
        </router-link>
      </div>
    </Transition>
    <router-link :to="makeLink(title)" v-if="list.length == 0">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubLink",
  data() {
    return {
      showList: false,
    };
  },
  props: ["list", "title"],
  methods: {
    makeLink(link) {
      if (link === "Dashboard") {
        return "/";
      } else {
        return "/" + link.toLowerCase().replaceAll(" ", "-");
      }
    },
  },
};
</script>

<style scoped>
nav a {
  color: var(--white-color);
  transition: var(--transition);
}

nav a.router-link-exact-active,
nav a:hover {
  color: var(--second-blue-color);
}

.sub-link {
  margin-bottom: 57px;
  font-size: 20px;
  cursor: pointer;
}
.sub-link .title {
  color: var(--white-color);
}

.sub-link .sub-links {
  position: relative;
  top: 20px;
  background: var(--first-blue-alt-color);
  width: calc(100% + 40px);
  left: -20px;
  /* transition: var(--transition); */
}
.sub-link .sub-links.active {
  animation: show 0.4s ease forwards;
}
.sub-link .sub-links a {
  font-size: 18px;
  padding: 20px;
}

@keyframes show {
  0% {
    top: -40px;
  }
  100% {
    top: 20px;
  }
}
</style>
