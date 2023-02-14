<template>
  <div class="selling-products grid">
    <div class="products custom-box">
      <h2>Best Selling Products</h2>
      <ProductSell />
    </div>
    <div class="names">
      <div className="customers person custom-box">
        <h2>Most Purchased Customers</h2>
        <ol>
          <EmployeeCustomer :list="customers" :showImg="false"/>
        </ol>
      </div>
      <div className="employees person custom-box">
        <h2>Highest performing Employees</h2>
        <ul>
          <EmployeeCustomer :list="employees" :showImg="true"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSell from './ProductSell.vue';
import EmployeeCustomer from './EmployeeCustomer.vue';
import emp from '@/assets/images/person-1.png';

export default {
  name: "SellingHome",
  components: {
    ProductSell,
    EmployeeCustomer,
  },
  data() {
    return {
      customers: [
        {
          id: 1,
          name: "Ahmed Mohammed",
          price: 1000,
        },
        {
          id: 2,
          name: "Ahmed Mohammed",
          price: 1000,
        },
        {
          id: 3,
          name: "Ahmed Mohammed",
          price: 1000,
        },
        {
          id: 4,
          name: "Ahmed Mohammed",
          price: 1000,
        },
        {
          id: 5,
          name: "Ahmed Mohammed",
          price: 1000,
        },
      ],
      employees: [
        {
          id: 1,
          name: "Ahmed Mohammed",
          branch: "Riyadh Branch",
          img: emp,
        },
        {
          id: 2,
          name: "Ahmed Mohammed",
          branch: "Riyadh Branch",
          img: emp,
        },
        {
          id: 3,
          name: "Ahmed Mohammed",
          branch: "Riyadh Branch",
          img: emp,
        },
        {
          id: 4,
          name: "Ahmed Mohammed",
          branch: "Riyadh Branch",
          img: emp,
        },
        {
          id: 5,
          name: "Ahmed Mohammed",
          branch: "Riyadh Branch",
          img: emp,
        },
      ],
    };
  },
};
</script>
<style>
.selling-products {
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  color: var(--white-color);
}

.selling-products .names {
  display: flex;
  gap: 45px;
}

.selling-products .customers li div {
  display: inline;
}
.selling-products .customers li span {
  font-size: 16px;
  color: var(--bluelight-color);
  margin-top: 13px;
  margin-left: 20px;
}


.selling-products .employees li {
  display: flex;
  align-items: center;
  gap: 15px;
}
.selling-products .employees span {
  color: var(--bluelight-color);
  margin-top: 13px;
}

.selling-products .person {
  flex: 1;
  padding: 30px;
}
.selling-products .person h2 {
  font-weight: 500;
  margin-bottom: 40px;
  line-height: 1.5;
}
.selling-products .person ul,
.selling-products .person ol {
  font-weight: 500;
  font-size: 18px;
  list-style-position: inside;
}
.selling-products .person li:not(:last-child) {
  padding-bottom: 25px;
  margin-bottom: 40px;
  border-bottom: var(--border);
}
</style>
