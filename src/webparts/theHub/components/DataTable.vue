<template>
    <div> Dropdown
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
    </div>

  
</template>


<script lang="ts">

import { Vue, Component,Prop } from "vue-property-decorator";



@Component({

})

export default class DataTableTest extends Vue {

    data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}

</script>