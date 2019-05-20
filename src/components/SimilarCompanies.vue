<template>
  <div class="info-boxes">
    <ul>
      <li>Similar Companies</li>
      <li >
        <div class="similar">
          <img src="@/assets/companies/AWS.svg.png">
          <span style="">Amazon Web Services (AWS)</span>
        </div>
        <div class="similar">
          <img alt="Logo" src="@/assets/companies/oracle.png">
          <span style="">Oracle</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
  background-color: #FFFFFF;
  border: 1px solid #D4D9E3;
  padding: 10px;
}

.similar {
  display: flex;
  align-items:center;
  padding-bottom: 20px;
}

.similar > img {
  width: 16%;
  border-radius: 8px;
  border: 1px solid #CED2E0;
  padding: 7px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  background-color: #FFFFFF;
  text-align: center;
}

.similar > span {
  font-size: 18px;
  font-weight: 500;
  color: #5D699A;
  padding-left: 20px;
}

</style>
