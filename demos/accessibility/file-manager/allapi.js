define(["require", "exports", "../../../src/file-manager/base/file-manager", "../../../src/file-manager/layout/index", "../../../src/file-manager/actions/toolbar", "../../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, file_manager_1, index_1, toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    file_manager_1.FileManager.Inject(index_1.NavigationPane, index_1.DetailsView, toolbar_1.Toolbar);
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2services/';
    //let hostUrl = 'http://localhost:62869/';
    var feObj = new file_manager_1.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + 'api/FileManager/GetImage'
        },
        cssClass: 'custom',
        fileLoad: function (args) {
            if (args.fileDetails.hasChild) {
                var rowDiv = document.createElement('span');
                rowDiv.className += 'new';
                if (args.module === 'TreeView') {
                    args.element.querySelector('.e-list-text').appendChild(rowDiv);
                }
                else if (args.module === 'Grid') {
                    args.element.querySelector('.e-fe-text').appendChild(rowDiv);
                }
                else {
                    args.element.querySelector('.e-list-icon').appendChild(rowDiv);
                }
            }
        },
        fileOpen: function (args) {
            addEventLog('The ' + args.fileDetails["name"] + (args.fileDetails.isFile ? ' file' : ' folder') + ' will be opened.');
        },
        beforeSend: function (args) {
            args.ajaxSettings.success = function () {
                addEventLog("Success");
            };
            addEventLog(args.action + ' beforeSend event is triggered');
        },
        fileSelect: function (args) {
            addEventLog(args.action + 'ed: ' + args.fileDetails["name"]);
        },
        menuClick: function (args) {
            addEventLog('"' + args.item.text + '" menu item is clicked');
        },
        menuOpen: function (args) {
            addEventLog('context menu will be opened');
        },
        success: function (args) {
            addEventLog('Success');
        },
        failure: function (args) {
            addEventLog('Service failure');
        },
        toolbarClick: function (args) {
            if (args.item && args.item.text == "Custom tool") {
                window.alert("Custom tool is clicked");
            }
            addEventLog(args.fileDetails["name"] + 'toolbar item is clicked');
        }
    });
    feObj.appendTo('#file');
    function addEventLog(text) {
        var clog = document.getElementById('events');
        clog.innerHTML = text + '\n' + clog.innerHTML;
    }
});
