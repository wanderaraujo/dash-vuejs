<template>
    <div class="col-7 col-s-9">
     <p> Home / {{$store.getters.urlActive}} </p>
    </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
p{
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  color: #808082;
}
</style>
