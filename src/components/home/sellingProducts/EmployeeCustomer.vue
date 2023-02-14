<template>
  <li v-for="l in list" :key="l.id">
    <img :src="l.img" v-if="showImg" />
    <div>
      {{l.name}}
      <span v-if="l.price">{{ l.price }} SR</span>
      <span v-if="l.branch" v-text="l.branch"></span>
    </div>
  </li>
</template>

<script>
export default {
  name: "EmployeeCustomer",
  props: ['list', 'showImg'],
};
</script>

