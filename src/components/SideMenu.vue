<template>
  <div class="col-3 col-s-3 menu">
    <ul>
      <li @click="changeUrl('Company Data')"><router-link to="/">Company Data</router-link></li>
      <li @click="changeUrl('Company Table')"><router-link to="/company-table">Company Table</router-link></li>
      <li @click="changeUrl('Company Page')"><router-link to="/company-page">Company Page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    changeUrl: function (url) {
      this.$store.dispatch('updateUrl', url)
    }
  }
}
</script>

<style>

.menu li {
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 6px;
  border: 1px solid #D4D9E3;
  padding: 25px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  background-color: #FFFFFF;
}

.menu li a {
  font-weight:500;
  text-decoration:none;
  color: #5D699A;
}

.router-link-exact-active {
  color: #505050 !important;
}

</style>
