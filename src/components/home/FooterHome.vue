<template>
  <footer class="grid">
    <a
      href="https://www.google.com"
      target="_blank"
      class="google-plus custom-box flex"
    >
      <i class="fa-brands fa-google-plus-g"></i>
      <p>Add Google Analytics Key</p>
    </a>

    <div class="social flex-between">
      <div>
        <span>Instagram</span>
        <span>Followers</span>
        <div>
          <a href="https://instagram.com/" target="_blanck">
            <img src="@/assets/images/instargram.png" />
          </a>
          <span>100K</span>
        </div>
      </div>
      <div>
        <span>Twitter</span>
        <span>Followers</span>
        <div>
          <a href="https://twitter.com/" target="_blanck">
            <img src="@/assets/images/twitter.png" />
          </a>
          <span>100K</span>
        </div>
      </div>
      <div>
        <span>Tiktok</span>
        <span>Followers</span>
        <div>
          <a href="https://tiktok.com/" target="_blanck">
            <img src="@/assets/images/tiktok.png" />
          </a>
          <span class="connect">Connect</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterHome'
}
</script>


<style scoped>
@import '@/assets/css/dashboardHome/footer.css';

footer {
  font-weight: 500;
  margin-top: 80px;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
}
</style>