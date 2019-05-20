<template>
  <div class="category">
    <img :src="require(`@/assets/icons/${img}`)" >
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'ImgCategory',
  props: {
    img: String,
    info: String
  }
}
</script>

<style scope>
.category{
  display: -webkit-inline-box;
}

.category > p{
  margin-left: 10px;
}

.category > img {
  border-radius: 6px;
  border: 1px solid #D4D9E3;
  border-radius: 50%;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  max-width: 45px;
}
</style>
