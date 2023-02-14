<template>
  <div class="box custom-box">
    <div class="icon-title flex">
      <img :src="icon" :style="{background: color}" />
      <span>{{title}}</span>
    </div>
    <div class="info flex-between">
      <h1>{{content}}</h1>
      <img :src="trend ? yes : no" />
    </div>
    <div class="val-trend flex">
      <img :src="trend ? up : down" />
      <span>{{valTrend}}%</span>
    </div>
  </div>
</template>

<script>

import yes from '@/assets/images/Yes.png';
import no from '@/assets/images/No.png';
import up from '@/assets/images/trend-up.png';
import down from '@/assets/images/trend-down.png';

export default {
  name: 'BoxInfo',
  props: ['title', 'content', 'trend', 'valTrend', 'icon', 'color'],
  data() {
    return {
      yes,
      no,
      up,
      down
    }
  }
};
</script>

<style scoped>

.box .icon-title {
  gap: 20px;
  margin-bottom: 20px;
}
.box .icon-title img {
  padding: 10px;
  border-radius: 20px;
}
.box .icon-title span {
  font-size: 20px;
  color: var(--bluelight-color);
}
.box .info h1 {
  color: var(--white-color);
  font-weight: 500;
}
.box .val-trend {
  gap: 10px;
  font-size: 18px;
}
</style>
