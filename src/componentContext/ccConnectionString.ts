
export class ConnectionString {

    public getLibraryEndPoint(selectedCity){
        switch (selectedCity){
            case "Melbourne":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/Melbourne/';
            }
            case "Sydney":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/Sydney/';
            }
            case"Adelaide":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/Adelaide/';
            }
            case "Brisbane":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/Brisbane/';
            }
            case "Research":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/Services/Research/';
            }
            case "National":{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/National/';
            }
            default:{
                return 'https://m3propertyunit.sharepoint.com/sites/Intranet/News/';
            }
        }

    }

}