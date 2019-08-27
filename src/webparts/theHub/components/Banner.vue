<template>
  <div>
    <v-runtime-template :template="title"></v-runtime-template>
  </div>
</template>


<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import VRuntimeTemplate from "v-runtime-template";
import * as $ from "jquery";
import {DataContextBase} from '../../../services';
import {SPHttpClient}  from '@microsoft/sp-http';

@Component({
  components: {
    'v-runtime-template': VRuntimeTemplate
  }
})
export default class Banner extends Vue {

    @Prop(SPHttpClient)
    public propSpHttpClient;

    @Prop(String)
    public propSPAbsUrl;


    private dataContextBase: DataContextBase;
    private newsItems:any;
    private mounted() {
        this.dataContextBase=new DataContextBase(this.propSPAbsUrl, this.propSpHttpClient);
        this.fetchBannerNews();
        
    }



    private fetchBannerNews(){
        var endPoint=this.dataContextBase.returnEndPointForRespectiveSite
            ("https://.sharepoint.com/sites/Intranet/News/Melbourne/");
        this.dataContextBase.getBannerNews(12,"yes","yes",endPoint+" getbytitle('Site Pages')/items?$filter=(IsPromoted eq 'No') &$top=12&$orderby=Created desc").then((news:any) => {
            this.newsItems=news;
            console.log(this.newsItems);
        });
    }
}

</script>