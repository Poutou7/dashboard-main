<template>
  <div class="features flex">
    <div class="langs" @click="showLang = !showLang">
      <div class="flex-between">
        <span>{{ language }}</span>
        <img src="@/assets/images/Vector.png" alt="vector" />
      </div>
      <Transition>
        <div class="rad-5" v-show="showLang">
          <button @click="language = 'En'">En</button>
          <button @click="language = 'Ar'">Ar</button>
        </div>
      </Transition>
    </div>

    <slot />

    <div class="moon" @click="changeTheme = !changeTheme">
      <span>
        <img v-if="changeTheme" src="@/assets/images/moon.png" />
        <img v-if="!changeTheme" src="@/assets/images/sun.png" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesNavBar",
  data() {
    return {
      changeTheme: true,
      language: "En",
      showLang: false,
    };
  },
  methodes: {},
};
</script>

<style>
.features {
  gap: 25px;
}
.features > div {
  border-radius: 12px;
  border: 1px solid rgb(164 180 203 / 30%);
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
}
.features .langs {
  position: relative;
  width: 71px;
  color: var(--bluelight-color);
  font-size: 14px;
  line-height: 38px;
}
.features .langs div:first-of-type {
  padding: 0 10px;
}
.features .langs div:last-of-type {
  position: absolute;
  border: 1px solid rgb(164 180 203);
  background-color: var(--middle-blue-color);
  width: 98%;
  overflow: hidden;
  bottom: -63px;
  z-index: 10;
  right: 0;
}

.features .langs button {
  display: block;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  padding: 7px 5px;
  width: 100%;
  text-align: left;
  transition: var(--transition);
}
.langs button:hover {
  background-color: var(--second-blue-color);
}
.features .moon span {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
