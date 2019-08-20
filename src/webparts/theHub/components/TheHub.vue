<template>
<div>
    <!-- <Button label="Secondary" class="p-button-secondary" /> -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      
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
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * Component's properties
 */
export interface ITheHubProps {
    description: string;
}

/**
 * Class-component
 */
@Component
export default class TheHub extends Vue implements ITheHubProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public description: string;

}
</script>

<style lang="scss" module>
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/_SPFabricCore.scss';

.TheHub {
  .container {
    max-width: 700px;
    margin: 0px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .row {
    @include ms-Grid-row;
    @include ms-fontColor-white;
    background-color: $ms-color-themeDark;
    padding: 20px;
  }

  .column {
    @include ms-Grid-col;
    @include ms-lg10;
    @include ms-xl8;
    @include ms-xlPush2;
    @include ms-lgPush1;
  }

  .title {
    @include ms-font-xl;
    @include ms-fontColor-white;
  }

  .subTitle {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .description {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .button {
    // Our button
    text-decoration: none;
    height: 32px;

    // Primary Button
    min-width: 80px;
    background-color: $ms-color-themePrimary;
    border-color: $ms-color-themePrimary;
    color: $ms-color-white;

    // Basic Button
    outline: transparent;
    position: relative;
    font-family: "Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: $ms-font-size-m;
    font-weight: $ms-font-weight-regular;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    padding: 0 16px;

    .label {
      font-weight: $ms-font-weight-semibold;
      font-size: $ms-font-size-m;
      height: 32px;
      line-height: 32px;
      margin: 0 4px;
      vertical-align: top;
      display: inline-block;
    }
  }
}
</style>


