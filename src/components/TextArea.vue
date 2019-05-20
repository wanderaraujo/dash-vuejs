<template>
  <div>
    <p :for=label class="label-input"> {{ label }} </p>
    <textarea :rows=rows :cols=cols :placeholder=placeholder />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    label: String,
    rows: String,
    cols: String,
    placeholder: String
  }
}

</script>

<style>

textarea{
  border-radius: 3px;
  border: 1px solid #CED2E0;
  width: 100%;
  padding: 0px 10px;
  color: #555353;
  font-size: 15px;
  line-height: 34px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #CED2DF;
  opacity: 1; /* Firefox */
}
</style>
