<template>
   


        <div><v-runtime-template :template="title"></v-runtime-template></div>

       
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VRuntimeTemplate from "v-runtime-template"
import * as $ from 'jquery';

@Component
export default class QuickLinks extends Vue {

    title = `
<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <a href="https://www.google.com/">
              <img href="https://www.google.com/" src="https://evocate.sharepoint.com/PublishingImages/Pages/News%20And%20Updates/2019/May/New-Client-Headspace/Headspace-News.jpg.png?RenditionID=6" alt="Los Angeles">
            </a>
          </div>

          <div class="item">
            <img src="https://evocate.sharepoint.com//PublishingImages/Pages/News%20And%20Updates/2019/June/Vinnies-SharePoint-Migration/BannerImage.png?RenditionID=6" alt="Chicago">
          </div>

          <div class="item">
            <img src="https://evocate.sharepoint.com//PublishingImages/Pages/News%20And%20Updates/2019/May/New-Client-GTA/GTA-news.jpg.png?RenditionID=6" alt="New York">
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> 

      
    `

    mounted(){
      $('.bannerPositionDiv').before($(this.title));  
    }

    login(){
        alert("ok");
    }
  
}
</script>