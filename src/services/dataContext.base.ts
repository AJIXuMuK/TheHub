import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
  } from '@microsoft/sp-http';

  import {DataContextBannerNews} from './dcBannerNews';

export class DataContextBase{

    private dataContextBannerNews: DataContextBannerNews;

      /**
   * Setup common headers for different requests.
   */
    private _spHttpOptions: any = {
        getNoMetadata: <ISPHttpClientOptions>{
            headers: { 'ACCEPT': 'application/json; odata.metadata=none' }
            },
        getFullMetadata: <ISPHttpClientOptions>{
            headers: { 'ACCEPT': 'application/json; odata.metadata=full' }
            },
        postNoMetadata: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json',
            }
        },
        updateNoMetadata: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json',
                'X-HTTP-Method': 'MERGE'
            }
        },
        deleteNoMetadata: <ISPHttpClientOptions>{
            headers: {
                'ACCEPT': 'application/json; odata.metadata=none',
                'CONTENT-TYPE': 'application/json',
                'X-HTTP-Method': 'DELETE'
            }
        }
    };

    constructor(private siteAbsoluteUrl: string, private client: SPHttpClient) {
        this.dataContextBannerNews = new DataContextBannerNews();
     }

    public returnEndPointForRespectiveSite(sitePath){
        return sitePath +'_api/web/lists/';
    }

    public returnEndPointForDefaultSite(){
        return this.siteAbsoluteUrl+ '/_api/web/lists/';
    }

    public getBannerNews(topCount,isBanner,isNonPromoted,endPoint){
        return this.dataContextBannerNews.getBannerNews("",topCount,isBanner,isNonPromoted,endPoint,this.client,this._spHttpOptions);
    }

}