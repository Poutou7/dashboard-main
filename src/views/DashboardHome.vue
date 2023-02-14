<template>
  <div class="dashboard-home">
    <div class="bar flex-between" :style="{left : left + 'px'}">
      <span class="material-icons-outlined menu rad-10" @click="scaleBar">menu</span>
      <p>rate us in marouf to take a free month</p>
      <span class="material-icons-outlined">close</span>
    </div>
    <SearchHead />
    <div class="boxes grid">
      <BoxInfo
        v-for="box in boxesList"
        :key="box.id"
        :title="box.title"
        :content="box.content"
        :trend="box.trend"
        :valTrend="box.valTrend"
        :icon="box.icon"
        :color="box.color"
      />
    </div>
    <div class="boxes-orders">
      <BoxOrders />
    </div>
    <div class="statistics grid">
      <ChartHome />
      <StatisticsHome
        v-for="stat in statisticsList"
        :key="stat.id"
        :title="stat.title"
        :semiTitle="stat.semiTitle"
        :list="stat.list"
        :valuesStat="stat.valuesStat"
      />
    </div>
    <SellingHome />
    <FooterHome />
  </div>
</template>

<script>
/** Importing Components**/
import SearchHead from "@/components/home/SearchHead.vue";
import BoxInfo from "@/components/home/BoxInfo.vue";
import BoxOrders from "@/components/home/BoxOrders.vue";
import ChartHome from "@/components/home/statistics/ChartHome.vue";
import StatisticsHome from "@/components/home/statistics/StatisticsHome.vue";
import SellingHome from "@/components/home/sellingProducts/SellingHome.vue";
import FooterHome from "@/components/home/FooterHome.vue";

/** Importing Images**/
import dollar from "@/assets/images/dollar-square.png";
import bag from "@/assets/images/bag-2.png";
import coin from "@/assets/images/coin.png";

export default {
  name: "DashboardHome",
  components: {
    SearchHead,
    BoxInfo,
    BoxOrders,
    ChartHome,
    StatisticsHome,
    SellingHome,
    FooterHome
  },
  data() {
    return {
      boxesList: [
        {
          id: 1,
          title: "Total Sales",
          content: "100.00 SR",
          trend: true,
          valTrend: 10,
          icon: dollar,
          color: "var(--second-blue-color)",
        },
        {
          id: 2,
          title: "Total Orders",
          content: "100 Orders",
          trend: true,
          valTrend: 10,
          icon: bag,
          color: "var(--red-color)",
        },
        {
          id: 3,
          title: "Total Income",
          content: "100.00 SR",
          trend: false,
          valTrend: 10,
          icon: coin,
          color: "var(--orange-color)",
        },
      ],
      statisticsList: [
        {
          id: 1,
          title: "the best branch performance",
          list: [
            {
              id: 1,
              title: "Khobar Branch",
            },
            {
              id: 2,
              title: "Dammam branch",
            },
            {
              id: 3,
              title: "Riyadh Branch",
            },
          ],
          valuesStat: [15, 15, 15],
        },
        {
          id: 2,
          semiTitle: "Sales",
          list: [
            {
              id: 1,
              title: "Standad Vat Rate",
              price: "1000 SR",
            },
            {
              id: 2,
              title: "Not Subject To Vat",
              price: "1000 SR",
            },
            {
              id: 3,
              title: "Exempt From Vat",
              price: "1000 SR",
            },
            {
              id: 4,
              title: "Zero vAT rated ",
              price: "1000 SR",
            },
          ],
          valuesStat: [15, 15, 12, 15],
        },
        {
          id: 3,
          semiTitle: "Purchases",
          list: [
            {
              id: 1,
              title: "Standad Vat Rate",
              price: "1000 SR",
            },
            {
              id: 2,
              title: "Not Subject To Vat",
              price: "1000 SR",
            },
            {
              id: 3,
              title: "Exempt From Vat",
              price: "1000 SR",
            },
            {
              id: 4,
              title: "Zero vAT rated ",
              price: "1000 SR",
            },
          ],
          valuesStat: [15, 15, 12, 15],
        },
      ],
      left: 360
    };
  },
  methods: {
    scaleBar() {
      if (this.left === 0) {
        this.$emit('scaleBar', '0');
        return this.left = 360;
      } else {
        this.$emit('scaleBar', '48');
        return this.left = 0;
      }
      
    }
  }
};
</script>

<style scoped>
.dashboard-home {
  padding: 0 15px;
}

.dashboard-home .bar {
  background-color: var(--second-blue-color);
  color: #fafafa;
  padding: 10px;
  height: 48px;
  position: absolute;
  top: 0;
  right: 0;
  transition: var(--transition);
}

.dashboard-home .bar span {
  cursor: pointer;
  margin-right: 15px;
}
.dashboard-home .bar span.menu {
  color: var(--second-blue-color);
  padding: 8px;
  background-color: #fafafa;
  margin-left: 40px;
}
.dashboard-home .boxes {
  margin: 35px 0 80px;
}
.boxes-orders {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 60px;
}
.statistics {
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin: 80px 0;
}
</style>
