import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';
//import {DataTable} from 'primevue/datatable';
import 'jquery';
import 'bootstrap';
import { sp } from "@pnp/sp";
import * as strings from 'TheHubWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import TheHubComponent from './components/TheHub.vue';
import QuickLinksComponent from './components/QuickLinks.vue';
import BannerComponent from './components/Banner.vue';
import DataTableTestComponent from './components/DataTable.vue';
import { ThemeChangedEventArgs } from '@microsoft/sp-component-base';
import { DataContextBase } from '../../services';


export interface ITheHubWebPartProps {
  description: string;
}

export default class TheHubWebPart extends BaseClientSideWebPart<ITheHubWebPartProps> {

  //To get the context in sharepoint site, below code is must.
  //private bannerComponent=BannerComponent;
  private dataContextBase: DataContextBase;
  private spHttpClient;
  private siteAbsoluteUrl;
  public onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context
    });
    console.log("Super onInit called");
    //this.bannerComponent=new BannerComponent(this.context.spHttpClient);
    this.dataContextBase = new DataContextBase(this.context.pageContext.web.absoluteUrl, this.context.spHttpClient);


    return Promise.resolve();
  }




  public render(): void {

    let cssUrl = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssUrl);

    SPComponentLoader.loadCss("https://unpkg.com/primevue/resources/themes/nova-light/theme.css");
    SPComponentLoader.loadCss("https://unpkg.com/primevue/resources/primevue.min.css");
    SPComponentLoader.loadCss("https://unpkg.com/primeicons/primeicons.css");

    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    this.spHttpClient = this.context.spHttpClient;
    this.siteAbsoluteUrl = this.context.pageContext.web.absoluteUrl;

    /*
    
    */

    let el = new Vue({
      el: `#${id}`,
      template: `<div>
      <TheHubComponent/>
        <QuickLinksComponent/>
        <BannerComponent :propSpHttpClient="spHttpClient" :propSPAbsUrl="siteAbsoluteUrl"></BannerComponent>
        <DataTableTestComponent/>
      </div>
      `,
      components: { TheHubComponent, QuickLinksComponent, BannerComponent, DataTableTestComponent },
      data: () => {
        return {
          spHttpClient: this.spHttpClient,
          siteAbsoluteUrl: this.siteAbsoluteUrl
        };
      }
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
