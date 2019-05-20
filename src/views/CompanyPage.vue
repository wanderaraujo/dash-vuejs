<template>
  <aside>
    <div class="col-7 col-s-9">
      <div class="company-description">
        <img alt="company-logo" src="@/assets/companys/microsoft.jpeg">
        <p class="name-company">Microsoft</p>
        <p class="locate">Redmond, WA USA</p>
        <p class="description">At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.
         Our mission is grounded in both the world in wich we live and the future we strive to create. <a href="https://www.microsoft.com/en-us/about">View More...</a>
        </p>
      </div>
    </div>

  <div class="row">
    <div class="col-4 col-s-12">
      <Activities />
    </div>
    <div class="col-4 col-s-12">
      <div class="info-boxes">
        <ul>
          <li>Similar Companies</li>
          <li class="aditional-info">
            <img  alt="Logo" src="@/assets/companys/AWS.svg.png"><br>
            <p>Amazon Web Service (AWS)</p>
            <img alt="Logo" src="@/assets/companys/oracle.png">
            <p>Oracle</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </aside>
</template>

<script>
import Activities from '@/components/Activities.vue'

export default {
  name: 'CompanyPage',
  components: {
    Activities
  },
  created () {
    document.querySelector('html').classList.add('companyPage')
  },
  destroyed () {
    document.querySelector('html').classList.remove('companyPage')
  }
}
</script>

<style>

.companyPage {
  background: #E7E9F3;
  font-family: 'Roboto', sans-serif;
  color: #333333;
}

.company-description > img {
  width: 11%;
  border-radius: 8px;
  border: 1px solid #CED2E0;
  padding: 15px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  background-color: #FFFFFF;
  float: left;
  margin-right: 20px;
}

.name-company {
  font-size: 33px;
  display: contents;
}

.description {
  padding-top: 35px;
}

.locate {
  color: #808082;
}

.info-boxes li:first-child {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid #D4D9E3;
  background-color: #FFFFFF;
  padding: 18px;
}

.aditional-info {
  padding: 55px;
  border-radius: 3px;
  border: 1px solid #D4D9E3;
  background-color: #FFFFFF;
}

.last-box {
  border-bottom: 1px solid #D4D9E3;
  background-color: #FFFFFF;
}

.aditional-info > img {
  width: 16%;
  border-radius: 8px;
  border: 1px solid #CED2E0;
  padding: 15px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  background-color: #FFFFFF;
  float: left;
}

.aditional-info > p {
  font-size: 17px;
  font-weight: 500;
  color: #5D699A;
}
</style>
