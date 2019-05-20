<template>
  <div class="info-boxes activities">
    <ul>
      <li>Activities</li>
      <li v-for="(act, index) in $store.getters.activities" :key="index">
        <vcl-code v-show="false"></vcl-code>
        <label for="date-at" class="date-at">{{ act.date | moment("from", "now") }}</label>
        <ImgCategory :img=act.category.img :info=act.category.info class="info-at"/>
        <label class="event"> {{ act.event }}</label>
        <label class="company"> {{ act.company }}</label>on
        <label class="info-at">{{ act.property }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import ImgCategory from './ImgCategory'
import { VclCode } from 'vue-content-loading'

export default {
  name: 'Activities',
  components: {
    VclCode,
    ImgCategory
  }
}
</script>

<style scoped>

.activities li {
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid #D4D9E3;
  background-color: #FFFFFF;
  padding: 25px;
}

.date-at {
  font-size: 16px;
  font-weight: 500;
  padding-right: 15px;
  color: #808082;
}

.info-at {
  font-size: 15px;
  font-weight: 500;
  color: #5D699A;
}

.event {
  font-size: 16px;
  font-weight: 500;
}

.company {
  text-decoration: line-through;
  font-size: 16px;
  font-weight: 500;
  padding-right: 6px;
  padding-left: 138px;
  color: #808082;
}

.activities li a {
  font-weight:500;
  text-decoration:none;
  color: #5D699A;
}
</style>
