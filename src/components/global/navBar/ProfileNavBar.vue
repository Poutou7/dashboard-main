<template>
  <div class="profile flex">
    <img src="@/assets/images/personal-img.png" alt="person-img" />
    <div>
      <span
        class="personal-info flex-between"
        @click="showSettings = !showSettings"
      >
        Hi Dima
        <img src="@/assets/images/Vector.png" alt="vector" />
      </span>

      <div class="profile-settings" :class="{ 'show-setting': showSettings }">
        <span>
          <router-link to="/profile-settings">Profile Settings</router-link>
        </span>
        <form>
          <input type="submit" value="Log Out" />
        </form>
      </div>

      <span>Good Morning!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileNavBar",
  data() {
    return {
      showSettings: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.profile {
  gap: 10px;
}
.profile > div {
  position: relative;
}
.profile .personal-info {
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
}
.profile span:last-child {
  color: var(--bluelight-color);
  font-size: 14px;
}
.profile .profile-settings {
  position: absolute;
  background-color: var(--first-blue-color);
  top: 25px;
  right: 0px;
  z-index: 1;
  opacity: 0;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: var(--transition);
}

.profile .profile-settings form,
.profile .profile-settings span {
  opacity: 0;
  transform: translateX(-130px);
  transition: var(--transition);
}
.profile .profile-settings a {
  color: var(--white-color);
  transition: var(--transition);
}
.profile .profile-settings span {
  font-weight: 500;
  margin-bottom: 30px;
  transition-delay: 0.3s;
}
.profile .profile-settings form {
  cursor: pointer;
  transition-delay: 0.5s;
}
.profile .profile-settings input {
  color: var(--white-color);
  font-weight: 500;
  margin: 0;
  background-color: var(--first-blue-color);
  cursor: pointer;
  transition: var(--transition);
}
.profile .profile-settings span:hover a,
.profile .profile-settings form:hover input {
  color: var(--second-blue-color);
}
.profile .show-setting {
  width: 200px;
  height: 110px;
  padding: 20px;
  opacity: 1;
}
.profile .show-setting form,
.profile .show-setting span {
  transform: translateX(0);
  opacity: 1;
}
</style>
