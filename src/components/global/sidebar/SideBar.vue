<template>
  <div class="side-bar" >
    <h1>{{ top }}</h1>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <nav>
      <SubLink
        v-for="link in links"
        :key="link.id"
        :list="link.list"
        :title="link.title"
      />
      <div class="log-out flex">
        <span>Log Out</span>
        <img src="@/assets/images/logout.png" alt="" />
      </div>
    </nav>
    <div class="pos flex pad-25" onClick="{windowPos}">
      <img src="@/assets/images/windows.png" alt="windows" />
      <p>Kwaidi POS</p>
    </div>
  </div>

  
</template>

<script>
import SubLink from './SubLink.vue';

export default {
  name: "SideBar",
  props: ['top'],
  components: {
    SubLink,
  },
  data() {
    return {
      links: [
        {
          id: 17,
          title: "Dashboard",
          list: [],
        },
        {
          id: 1,
          title: "Branch Management",
          list: [],
        },
        {
          id: 2,
          title: "Roles Management",
          list: ["Emploee List", "Role List", "Emploee Log"],
        },
        {
          id: 3,
          title: "Costumer Management",
          list: ["Customer list", "Reviews", "Customer Sticker"],
        },
        {
          id: 4,
          title: "Supplier Management",
          list: [],
        },
        {
          id: 5,
          title: "Products Management",
          list: ["Products List", "Products Package", "Trash"],
        },
        {
          id: 6,
          title: "Orders Management",
          list: ["Orders List", "Waybill Genrate"],
        },
        {
          id: 7,
          title: "Marketing Management",
          list: [
            "Platform Ads",
            "Pin Ads",
            "Coupons",
            "Special Offers",
            "Affiliate System",
            "Kwaidi Affiliate",
            "Cart overtime",
            "Available Stock",
            "SMS Services",
            "Costumer Points",
            "live streaming",
          ],
        },
        {
          id: 8,
          title: "Store Theme",
          list: ["Store Design", "My APP"],
        },
        {
          id: 9,
          title: "Accounting & Reports ",
          list: [
            "Invoice",
            "Purchase",
            "Supplier Bills",
            "Affiliate Bills",
            "Bills Reports",
          ],
        },
        {
          id: 10,
          title: "System Setting",
          list: [
            "Basic Setting",
            "Store Plan",
            "Seo Setting",
            "Brands Setting",
            "Orders Setting",
            "Footer Custom",
            "Store Options",
            "Domain Setting",
          ],
        },
        {
          id: 11,
          title: "App Market",
          list: ["App market", "Installed apps"],
        },
        {
          id: 12,
          title: "Video Center",
          list: [],
        },
        {
          id: 13,
          title: "Hairing Team",
          list: [],
        },
        {
          id: 14,
          title: "Kwaidi Store",
          list: [],
        },
        {
          id: 15,
          title: "Get a Gift",
          list: [],
        },
        {
          id: 16,
          title: "Cashier",
          list: [],
        },
      ],
    };
  },
};
</script>
<style scoped>
.side-bar {
  flex-basis: 360px;
  min-height: 1778px;
  background-color: var(--first-blue-color);
  padding: 35px 20px;
  flex-shrink: 0;
  position: relative;
  top: 0;
  transition: var(--transition);
}

.side-bar .logo {
  margin-bottom: 55px;
}

nav a {
  color: var(--white-color);
  transition: var(--transition);
}

nav a.router-link-exact-active,
nav a:hover,
.log-out:hover {
  color: var(--second-blue-color);
}

.log-out {
  color: var(--white-color);
  margin-bottom: 57px;
  font-size: 20px;
  cursor: pointer;
  gap: 15px;
}

.pos {
  gap: 25px;
  background-color: var(--middle-blue-color);
  border-radius: 25px;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 13px rgb(58 194 203 / 20%);
  transition: var(--transition);
}

.pos:hover {
  box-shadow: 0 0px 12px rgb(58 194 203 / 70%);
}

.pos p {
  font-size: 20px;
  font-weight: 500;
  color: var(--white-color);
}
</style>
