<template>
  <div class="stat custom-box">
    <h2 v-if="title" v-text="title"></h2>
    <div class="flex-between">
      <ul>
        <li
          v-for="list in list"
          :key="list.id"
          :class="colors[list.id - 1]"
        >
          {{ list.title }}
          <span v-if="list.price" v-text="list.price"></span>
        </li>
      </ul>
      <div class="canvas">
        <canvas ref="my-canvas" width="200" height="200"></canvas>
        <span v-if="semiTitle" v-text="semiTitle"></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "StatisticsHome",
  props: ['title','list','semiTitle','valuesStat'],
  data() {
    return {
      colors: ["orange", "green", "blue", "red"],
      segmentColor: ["#fe9518", "#34B53A", "#3ac2cb", "#f12e67"],
      fillColor: '#16263f',
      values: this.valuesStat,
      context: null
    };
  },
  mounted() {
    const canvas = this.$refs['my-canvas'];
    const context = canvas.getContext("2d");

    let total = 0;

    //Reset the canvas
    context.restore();
    context.save();
    context.clearRect(0, 0, 200, 200);

    for (let i = 0; i < this.values.length; i++) {
      total = total + this.values[i];
    }

    let parts = 360 / total;
    let startAngle = 0;

    context.translate(100, 100);
    context.rotate(270 * (Math.PI / 180));

    for (let i = 0; i < this.values.length; i++) {
      context.fillStyle = this.segmentColor[i];
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(
        0,
        0,
        100,
        startAngle * (Math.PI / 180),
        (startAngle + this.values[i] * parts) * (Math.PI / 180),
        false
      );
      context.lineTo(0, 0);
      context.closePath();
      context.fill();

      startAngle = startAngle + this.values[i] * parts;
    }

    
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.arc(0, 0, 70, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  },
};
</script>

<style>
.statistics .stat {
  color: var(--white-color);
}
.statistics .stat h2 {
  margin-bottom: 50px;
}

.statistics .stat ul li {
  position: relative;
  font-size: 20px;
  padding-left: 30px;
}
.statistics .stat ul li:not(:last-child) {
  margin-bottom: 35px;
}
.statistics .stat ul li:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 1px;
  left: 0px;
}
.statistics .stat ul li span {
  margin-top: 15px;
}
.statistics .stat ul .orange:before {
  background-color: var(--orange-color);
}
.statistics .stat ul .green:before {
  background-color: var(--green-color);
}
.statistics .stat ul .blue:before {
  background-color: var(--second-blue-color);
}
.statistics .stat ul .red:before {
  background-color: var(--red-color);
}

.statistics .stat .canvas {
  position: relative;
}
.statistics .stat .canvas span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}
</style>
