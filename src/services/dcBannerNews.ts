import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
  } from '@microsoft/sp-http';

export class DataContextBannerNews{

    public getBannerNews(query:string, topCount:number ,isBanner:string,isNonPromoted:string,
        endPoint: string, client: SPHttpClient,httpOptions:any):Promise<any>{

        let promise: Promise<any> = new Promise<any>((resolve, reject) => {
                client.get(`${endPoint}`,
              SPHttpClient.configurations.v1,
              httpOptions.getFullMetadata
            ) // get response & parse body as JSON
              .then((response: SPHttpClientResponse): Promise<{ value: any }> => {
                console.log("Final response");
                return response.json();
              }) // get parsed response as array, and return
              .then((response: { value: any }) => {
                resolve(response.value);
              })
              .catch((error: any) => {
                reject(error);
              });
          });
      
          return promise;
    }
}