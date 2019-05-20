<template>
  <div class="col-7 col-s-9 ">
    <div>
      <Input type="text" placeholder="Search" size="100%" class="input-search" v-model="query" @input="updateInput"/>
      <Table :data="gridData"
      :columns="gridColumns"
      :filter-key="$store.getters.searchQuery"/>
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
      query: '',
      gridColumns: ['company', 'location', 'category', 'spend'],
      gridData: this.$store.getters.companyTable
    }
  },
  methods: {
    updateInput: function () {
      this.$store.dispatch('updateFilter', this.query)
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
