<template>
  <div class="chart stat custom-box">
    <h2>Statistics</h2>
    <div class="flex-between">
      <div>
        <ul>
          <li class="blue">Sales</li>
          <li class="red">Returned</li>
          <li class="orange">New Clients</li>
        </ul>
        <p>Total Sales : 1000 SR</p>
      </div>
      <div>
        <canvas width="400px" height="250px"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartHome',
}


</script>


<style scoped>
.statistics .chart h2 {
  margin-bottom: 10px;
  text-transform: capitalize;
}

.statistics .chart p {
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
}
</style>