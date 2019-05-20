<template>
  <div class="col-7 col-s-9 ">
    <div>
      {{searchQuery}}
      <Input type="text" placeholder="Search" v-model="searchQuery" size="100%" class="input-search"/>
      <Table :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"/>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Table from '@/components/Table.vue'

export default {
  name: 'CompanyTable',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['company', 'location', 'category', 'spend'],
      gridData: this.$store.getters.companyTable
    }
  },
  components: {
    Input,
    Table
  }
}
</script>

<style>
.input-search{
  padding-bottom: 20px;
}
</style>
