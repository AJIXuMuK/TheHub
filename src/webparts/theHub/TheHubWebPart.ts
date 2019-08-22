import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';
import {Button} from 'primevue/button';
import 'jquery';
import 'bootstrap';
import 'primebuton';

import * as strings from 'TheHubWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import TheHubComponent from './components/TheHub.vue';
import QuickLinksComponent from './components/QuickLinks.vue';
import { ThemeChangedEventArgs } from '@microsoft/sp-component-base';
export interface ITheHubWebPartProps {
  description: string;
}

export default class TheHubWebPart extends BaseClientSideWebPart<ITheHubWebPartProps> {

  public render(): void {

    let cssUrl= "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssUrl);

    SPComponentLoader.loadCss("https://unpkg.com/primevue/resources/themes/nova-light/theme.css");
    SPComponentLoader.loadCss("https://unpkg.com/primevue/resources/primevue.min.css");
    SPComponentLoader.loadCss("https://unpkg.com/primeicons/primeicons.css");
    
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      template: `<div>
        <TheHubComponent/>
        <QuickLinksComponent/>
      </div>
      `,
      components: { TheHubComponent,QuickLinksComponent,Button }
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
