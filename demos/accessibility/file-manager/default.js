define(["require", "exports", "../../../src/file-manager/base/file-manager", "../../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, file_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2services/';
    //let hostUrl = 'http://localhost:62869/';
    var feObj = new file_manager_1.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + 'api/FileManager/GetImage'
        }
    });
    feObj.appendTo('#file');
});
