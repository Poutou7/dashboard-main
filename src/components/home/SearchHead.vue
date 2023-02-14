<template>
  <div class="search-head flex">
    <form>
      <div class="search">
        <div class="input-search">
          <img src="@/assets/images/search-normal.png" />
          <input type="search" class="pad-20" />
        </div>
        <div class="option-search">
          <div class="pad-20" @click="showBranchs = !showBranchs">
            Branch 1
            <img src="@/assets/images/Vector.png" />
          </div>
          <Transition>
            <div class="checkboxes options" v-show="showBranchs">
              <label>
                <input type="checkbox" value="Branch 1" v-model="branch" @change="changeCheckbox">
                Branch 1
              </label>
              <label>
                <input type="checkbox" value="Branch 2" v-model="branch" @change="changeCheckbox">
                Branch 2
              </label>
              <label>
                <input type="checkbox" value="Branch 3" v-model="branch" @change="changeCheckbox" >
                Branch 3
              </label>
            </div>
          </Transition>
        </div>
      </div>
      <input class="pad-20 rad-10" type="submit" value="Search" />
    </form>

    <div class="date-select">
      <div class="custom-select flex-between" @click="showOpts = !showOpts">
        <span>18.Sep.2022</span>
        <img src="@/assets/images/Vector.png" />
      </div>
      <Transition>
        <div class="options" v-show="showOpts">
          <span>18.sep.2022</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>


export default {
  name: "SearchHead",
  emits: ['changeCheckbox'],
  data() {
    return {
      branch: [],
      showBranchs: false,
      showOpts: false,
    };
  },
  methods: {
    changeCheckbox(e) {
      console.log("yes");
      e.target.parentElement.classList.toggle('checked');
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/dashboardHome/search.css";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
