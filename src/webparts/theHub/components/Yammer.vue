<template>
  <div>
    <v-runtime-template :template="title"></v-runtime-template>
  </div>
</template>


<script lang="ts">

import { Vue, Component,Prop } from "vue-property-decorator";
import VRuntimeTemplate from "v-runtime-template";

@Component({
  components: {
    'v-runtime-template': VRuntimeTemplate
  }
})

export default class Banner extends Vue {

}

</script>