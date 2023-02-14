<template>
  <div
    v-for="box in boxesOrdersList"
    :key="box.id"
    class="box-orders custom-box"
  >
    <span>{{ box.title }}</span>
    <div :style="{ borderColor: box.color }">
      <span>70</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxOrders",
  props: ["title", "color"],
  data() {
    return {
      boxesOrdersList: [
        {
          id: 1,
          title: "New Orders",
          color: "var(--second-blue-color)",
        },
        {
          id: 2,
          title: "Shipped Orders",
          color: "var(--orange-color)",
        },
        {
          id: 3,
          title: "Completed Orders",
          color: "var(--green-color)",
        },
        {
          id: 4,
          title: "Returned Applications",
          color: "var(--red-color)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.box-orders {
  color: var(--white-color);
  font-weight: 500;
  text-align: center;
}
.box-orders > span {
  font-size: 20px;
}
.box-orders div {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border-style: solid;
  border-width: 30px;
  line-height: 125px;
  margin: 37px auto 0;
}
.box-orders div span {
  font-size: 40px;
}
</style>
