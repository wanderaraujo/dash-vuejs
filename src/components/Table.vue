<template>
  <table>
    <thead>
      <tr>
        <th v-for="(key, index) in columns" :key="index"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
          {{ key | capitalize }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody class="data">
      <tr v-for="(entry, index) in filteredData" :key="index">
        <td>
          {{entry.company}}
        </td>
        <td class="font-data">
          {{entry.location}}
        </td>
        <td class="font-data">
          <ImgCategory :img=entry.category.img :info=entry.category.info />
        </td>
        <td class="dots">
          <div>
            <span v-for="(active) in entry.spend" :key=active class="dot-active"></span>
          </div>
          <div>
            <span v-for="(empty) in 6 - entry.spend" :key=empty class="dot-empty"></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ImgCategory from './ImgCategory'
export default {
  name: 'Table',
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },
  components: {
    ImgCategory
  }

}
</script>

<style lang="scss">

table {
  border-radius: 3px;
  border: 1px solid #D4D9E3;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #F1F2F6;
  color: #505050;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 22px !important;
}

th, td {
  text-align: left;
  padding: 20px;
  border-right: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #F6F7F9;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #505050;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #505050;
}

.data tr > td:first-child {
  color: #5D699A;
}

.dots{
  display: flex;
}

.dot-empty {
  height: 11px;
  width: 11px;
  display: inline-block;
  border-radius: 50%;
  background-color: #bbb;
  margin-right: 5px;
}

.dot-active {
  height: 11px;
  width: 11px;
  display: inline-block;
  border-radius: 50%;
  background-color: #20C795;
  margin-right: 5px;
}

.font-data{
  color: #505050;
}

</style>
