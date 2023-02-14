<template>
  <div v-for="p in products" :key="p.id" class="product flex-between">
    <img :src="p.img" />

    <div>
      <span class="first-span title" v-text="p.title"></span>
      <span class="first-span">{{ p.price }} SR</span>
    </div>

    <div class="chart">
      <div>
        <img :src="chart"  />
        <span class="first-span total-price">{{p.totalPrice}} SR</span>
      </div>
      <span class="last-span">Total Sales</span>
    </div>

    <div class="trend">
      <div class="flex">
        <img :src="up" />
        <span class="first-span">{{p.trend}}</span>
      </div>
      <span class="last-span">Sales ({{p.trendSales}}%)</span>
    </div>

    <div class="reviews">
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <span class="last-span">{{p.reviews}}(Reviews)</span>
    </div>
  </div>
</template>

<script>
import prdImg1 from '@/assets/images/coffee-1.png';
import prdImg2 from '@/assets/images/coffee-2.png';
import chart from '@/assets/images/chart.png';
import up from '@/assets/images/trend-up.png';

export default {
  name: "ProductSell",
  data() {
    return {
      chart,
      up,
      products: [
        {
          id: 1,
          img: prdImg1,
          title: "Italian Coffee",
          price: 20,
          totalPrice: 1000,
          trend: 50,
          trendSales: 12,
          reviewsStars: 5,
          reviews: 20,
        },
        {
          id: 2,
          img: prdImg2,
          title: "Italian Coffee",
          price: 20,
          totalPrice: 1000,
          trend: 50,
          trendSales: 12,
          reviewsStars: 5,
          reviews: 20,
        },
        {
          id: 3,
          img: prdImg1,
          title: "Italian Coffee",
          price: 20,
          totalPrice: 1000,
          trend: 50,
          trendSales: 12,
          reviewsStars: 5,
          reviews: 20,
        },
        {
          id: 4,
          img: prdImg2,
          title: "Italian Coffee",
          price: 20,
          totalPrice: 1000,
          trend: 50,
          trendSales: 12,
          reviewsStars: 5,
          reviews: 20,
        },
        {
          id: 5,
          img: prdImg1,
          title: "Italian Coffee",
          price: 20,
          totalPrice: 1000,
          trend: 50,
          trendSales: 12,
          reviewsStars: 5,
          reviews: 20,
        },
      ],
    };
  },
};
</script>


<style >
.products h2 {
  margin-bottom: 30px;
  font-weight: 500px;
}

.products .product:not(:last-child) {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(164 180 203 / 50%);
  margin-bottom: 30px;
}

.products .product .first-span {
  font-size: 18px;
  font-weight: 500;
}

.products .product .last-span {
  font-size: 14px;
  color: var(--bluelight-color);
}

.products .product .total-price {
  margin-left: 10px;
  line-height: 15px;
}

.product .chart div {
  display: flex;
  align-items: flex-end;
}

.product .chart div span {
  color: var(--second-blue-color);
}

.product .trend div {
  gap: 10px;
  color: var(--green-color);
}

.product .reviews .stars {
  color: #fe9518;
}

.product .reviews i {
  margin-right: 6px;
  font-size: 21px;
}

.products .product .title,
.product .chart div,
.product .trend div,
.product .reviews .stars {
  margin-bottom: 10px;
}
</style>
