define(["require", "exports", "../../src/file-manager/base/file-manager", "../../src/file-manager/layout/index", "../../src/file-manager/actions/toolbar", "@syncfusion/ej2-popups", "@syncfusion/ej2-base"], function (require, exports, file_manager_1, index_1, toolbar_1, ej2_popups_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    file_manager_1.FileManager.Inject(index_1.DetailsView, toolbar_1.Toolbar, index_1.NavigationPane);
    // let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
    var hostUrl = 'http://localhost:62869/';
    var fileObj = new file_manager_1.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + 'api/FileManager/GetImage'
        },
        created: function () { addTooltip(); },
        fileLoad: function (args) {
            //Native tooltip customization to display additonal information in new line
            var target = args.element;
            if (args.module === 'DetailsView') {
                var ele = ej2_base_1.select('[title]', args.element);
                var title = ej2_base_1.getValue('name', args.fileDetails) +
                    '\n' + ej2_base_1.getValue('dateModified', args.fileDetails);
                ele.setAttribute('title', title);
            }
            else if (args.module === 'LargeIconsView') {
                var title = ej2_base_1.getValue('name', args.fileDetails) +
                    '\n' + ej2_base_1.getValue('dateModified', args.fileDetails);
                target.setAttribute('title', title);
            }
        }
    });
    fileObj.appendTo('#file');
    //Tooltip component to use a custom tooltip
    function addTooltip() {
        var tooltip = new ej2_popups_1.Tooltip({
            target: '#' + fileObj.element.id + '_toolbar [title]',
            beforeRender: onTooltipBeforeRender
        });
        tooltip.appendTo('#' + fileObj.element.id + '_toolbar');
    }
    function onTooltipBeforeRender(args) {
        var buttonId = ej2_base_1.select('button', args.target).id;
        var description = '';
        switch (buttonId) {
            case fileObj.element.id + '_tb_newfolder':
                description = 'Create a new folder';
                break;
            case fileObj.element.id + '_tb_upload':
                description = 'Upload new files';
                break;
            case fileObj.element.id + '_tb_cut':
                description = 'Cut files and folders from the current location';
                break;
            case fileObj.element.id + '_tb_copy':
                description = 'Copy files and folders from the current location';
                break;
            case fileObj.element.id + '_tb_paste':
                description = 'Paste files and folders in the current location';
                break;
            case fileObj.element.id + '_tb_delete':
                description = 'Delete selected files and folders';
                break;
            case fileObj.element.id + '_tb_download':
                description = 'Download selected files and folders';
                break;
            case fileObj.element.id + '_tb_rename':
                description = 'Rename selected file or folder';
                break;
            case fileObj.element.id + '_tb_sortby':
                description = 'Change the file sorting order';
                break;
            case fileObj.element.id + '_tb_refresh':
                description = 'Refresh the current location';
                break;
            case fileObj.element.id + '_tb_selection':
                description = 'Following items are currently selected:';
                for (var i = 0; i < fileObj.selectedItems.length; i++) {
                    description = description + '</br>' + fileObj.selectedItems[i];
                }
                break;
            case fileObj.element.id + '_tb_view':
                description = 'Switch the layout view';
                break;
            case fileObj.element.id + '_tb_details':
                description = 'Get the details of the seletced items';
                break;
            default:
                description = '';
                break;
        }
        this.content = args.target.getAttribute('title') + '</br>' + description;
    }
});
