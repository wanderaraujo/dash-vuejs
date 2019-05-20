<template>
  <div class="col-7 col-s-9 ">
    <div class="box">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <Input label="Company Name" type="text" placeholder="e.g. Your Company Name" size="74%" class="label-input" v-model="companyForm.name" v-validate="'required'" name="name" />
      <span class="error" >{{ errors.first('name') }}</span>
      <Input label="Company Spend" type="text" placeholder="e.g. $150,000" size="74%" class="label-input" v-mask="'$###,###'" v-model="companyForm.spend" />
      <Input label="Company Spend Ability" type="text" placeholder="e.g. $150,000 - $330,000" size="74%" class="label-input" v-mask="'$###,### - $###,###'" v-model="companyForm.spendAbility"  :masked="false" @input="checkValues" />
      <span class="error" v-show="invalidRange">The initial value is higher.</span>
      <TextArea label="Notes" rows="5" cols="500" placeholder="e.g. Good Tech Company" size="50" class="label-input" v-model="companyForm.notes" />
      <TextArea label="Notes" rows="5" cols="500" placeholder="e.g. Good Tech Company" size="50" class="label-input" v-show="false" v-model="companyForm.adNotes" />

    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import TextArea from '@/components/TextArea.vue'

export default {
  name: 'CompanyData',
  data () {
    return {
      companyForm: {
        name: String,
        spend: String,
        spendAbility: String,
        notes: String,
        adNotes: String
      },
      invalidRange: false
    }
  },
  components: {
    Input,
    TextArea
  },
  methods: {
    sendNewData: function (companyForm) {
      this.$store.dispatch('newDataCompany', companyForm)
    },
    checkValues: function () {
      let firstValue = this.companyForm.spendAbility.replace(/\D+/g, '').slice(0, 6)
      let secondValue = this.companyForm.spendAbility.replace(/\D+/g, '').slice(6, 12)

      if (secondValue !== '' && firstValue > secondValue) {
        this.invalidRange = true
      } else {
        this.invalidRange = false
      }
    }
  }
}
</script>

<style scoped>

.error {
  color: red;
}

.box{
  border-radius: 10px;
  border: 1px solid #D4D9E3;
  padding: 30px;
}

.box > p {
  color: #505050;
  padding-bottom: 20px;
  font-size: 17px;
}

.label-input{
  color: #b1b1b1;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
}

</style>
