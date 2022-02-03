import { FileManager } from '../../src/file-manager/base/file-manager';
import { DetailsView, NavigationPane } from '../../src/file-manager/layout/index';
import { Toolbar } from '../../src/file-manager/actions/toolbar';
import '../../node_modules/es6-promise/dist/es6-promise';

FileManager.Inject(DetailsView, Toolbar, NavigationPane);
// let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';

document.getElementById("change").onchange = function(args: any) {
    feObj.navigationPaneSettings = {
        sortOrder: args.target.value
    }
}

let hostUrl =  'https://ej2-aspcore-service.azurewebsites.net/';
let feObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + 'api/FileManager/GetImage'
    },
    navigationPaneSettings: {
        sortOrder: "Ascending"
    }
});
feObj.appendTo('#file');