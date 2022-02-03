define(["require", "exports", "../../src/file-manager/base/file-manager", "../../src/file-manager/layout/index", "../../src/file-manager/actions/toolbar", "../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, file_manager_1, index_1, toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    file_manager_1.FileManager.Inject(index_1.DetailsView, toolbar_1.Toolbar, index_1.NavigationPane);
    // let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
    var hostUrl = 'http://localhost:62869/';
    var feObj = new file_manager_1.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileAccess/FileOperations',
            uploadUrl: hostUrl + 'api/FileAccess/Upload',
            downloadUrl: hostUrl + 'api/FileAccess/Download',
            getImageUrl: hostUrl + 'api/FileAccess/GetImage'
        }
    });
    feObj.appendTo('#file');
});
