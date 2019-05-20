<template>
  <div>
    <p :for=label class="label-input" v-show="label"> {{ label }} </p>
    <input :type=type :placeholder=placeholder  :style="`width:${size}`" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    type: String,
    placeholder: String,
    size: String
  },
  inject: ['$validator']
}
</script>

<style>

input[type=text]{
  border-radius: 3px;
  border: 1px solid #CED2E0;
  padding: 0px 10px;
  color: #555353;
  font-size: 15px;
  line-height: 37px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  resize: vertical;
}
</style>
