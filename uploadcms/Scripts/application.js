/*
* jQuery File Upload Plugin JS Example 5.0.2
* https://github.com/blueimp/jQuery-File-Upload
* 
* Copyright 2010, Sebastian Tschan
* https://blueimp.net
*
* Licensed under the MIT license:
* http://creativecommons.org/licenses/MIT/
*/
var RootPath = "http://localhost:2499";
/*jslint nomen: true */
/*global $ */
$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({ uploadTemplate: $('#template-upload') }
    );

    // Load existing files:
    //    $.getJSON($('#fileupload form').prop('action'), function(files) {
    //        var fu = $('#fileupload').data('fileupload');
    //       fu._adjustMaxNumberOfFiles(files.length);
    //        fu._renderDownload(files)
    //            .appendTo($('#fileupload .files'))
    //            .fadeIn(function() {
    //                // Fix for IE7 and lower:
    //                $(this).show();
    //            });
    //    });

    // Open download dialogs via iframes,
    // to prevent aborting current uploads:
    $('#fileupload .files a:not([target^=_blank])').live('click', function (e) {
        e.preventDefault();
        $('<iframe style="display:none;"></iframe>')
            .prop('src', this.href)
            .appendTo('body');
    });
});
function GenAttachfile(IDControlContens, IntID, intFileIni, title) {
    var strResult = '<div id="' + IntID + 'fileupload" style="margin-top:5px;">';
    strResult += '<form action="' + RootPath + '/Upload.ashx?Avartar=1" method="post" enctype="multipart/form-data">';
    strResult += '<div class="fileupload-buttonbar" style="border:none; background:none;">';
    strResult += '<div   style="float: left;">';
    strResult += '<input type="file" name="files[]" id="' + IntID + 'addfile" style="opacity: 0; filter:alpha (opacity=0); cursor: pointer; width:0px; position: absolute; float:left;z-index: 2" ';
    strResult += ' multiple="multiple" /><label  for="' + IntID + 'addfile" style="float:left; position: absolute; z-index: 1; margin:0px 5px; color:#36C; font-weight:normal; font-family: Arial,Verdana, sans-serif; font-size: 13px; cursor:pointer;">' + title + '</label> ';

    strResult += '</div><div class="clr"></div>';
    strResult += '<div class="fileupload-progressbar" style=" display:none;">';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</form>';
    strResult += '<div class="clr"></div>';
    strResult += '<div class="fileupload-content" style="border:none; background:none;display:block;">';
    strResult += '<div class="outterTable">';
    strResult += '<table class="files" id="' + IntID + 'fileAttach" style=" display:block;">';
    strResult += '<tbody>';
    if (typeof (IsChuyenTiep) != 'undefined' && IsChuyenTiep == 1 && intFileIni > 0) {
        strResult += GenDownloadFile(IntID);
    }
    strResult += '</tbody>';
    strResult += '</table>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '<div class="clr"></div>';
    strResult += '<script id="' + IntID + 'template-upload" type="text/x-jquery-tmpl" style="width:300px!important; ;display:none;">';
    strResult += '<tr class="template-upload{{if error}} ui-state-error{{/if}}" style="width:300px!important;">';
    strResult += '<td class="preview"></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '{{if error}}';
    strResult += '<td class="error" colspan="2">Lỗi:';
    strResult += '{{if error === \'maxFileSize\'}}File quá dung lượng cho phép';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Chỉ chọn file hình';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép upload file !';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="progress"><div></div></td>';
    strResult += '<td class="start"><button>Start</button></td>';
    strResult += '{{/if}}';
    strResult += '<td class="cancel"><button>Cancel</button></td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<script id="' + IntID + 'template-download" type="text/x-jquery-tmpl" style="width:300px!important; display:none;">';
    strResult += '<tr class="template-download{{if error}} ui-state-error{{/if}}"  style="width:300px!important;">';
    strResult += '{{if error}}';
    strResult += '<td></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td class="error" colspan="2">Error:';
    strResult += '{{if error === 1}}File exceeds upload_max_filesize (php.ini directive)';
    strResult += '{{else error === 2}}File exceeds MAX_FILE_SIZE (HTML form directive)';
    strResult += '{{else error === 3}}File was only partially uploaded';
    strResult += '{{else error === 4}}No File was uploaded';
    strResult += '{{else error === 5}}Missing a temporary folder';
    strResult += '{{else error === 6}}Failed to write file to disk';
    strResult += '{{else error === 7}}File upload stopped by extension';
    strResult += '{{else error === \'maxFileSize\'}}File is too big';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Filetype not allowed';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép đính kèm 5 file !';
    strResult += '{{else error === \'uploadedBytes\'}}Uploaded bytes exceed file size';
    strResult += '{{else error === \'emptyResult\'}}Empty file upload result';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="preview"  ValueReturn="${thumbnail_url}">';
    strResult += '{{if thumbnail_url}}';
    //strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="' + RootPath + '/${thumbnail_url}"></a>';
    strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="${thumbnail_url}"></a>';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '<td class="name">';
    strResult += '<a href="${urlDownloadfile}"{{if thumbnail_url}} target="_blank"{{/if}}>${name}</a>';
    strResult += '</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td colspan="2"></td>';
    strResult += '{{/if}}';
    strResult += '<td class="delete">';
    strResult += '<button data-type="${delete_type}" data-url="/${delete_url}" style="width: 1.8em; height: 1.7em; text-indent:-99999px!important;  cursor:pointer;">Delete</button>';
    strResult += '</td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<div class="clr"></div>';
    $("#" + IDControlContens).html(strResult);
    if (typeof (IsChuyenTiep) != 'undefined' && IsChuyenTiep == 1 && intFileIni > 0) {
        $("#" + IntID + "fileupload").fileupload({ uploadTemplate: $("#" + IntID + "template-upload"), downloadTemplate: $("#" + IntID + "template-download"), maxNumberOfFiles: 100, maxFileSize: 1024000, acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp)$/i });
    }
    else {
        $("#" + IntID + "fileupload").fileupload({ uploadTemplate: $("#" + IntID + "template-upload"), downloadTemplate: $("#" + IntID + "template-download"), maxNumberOfFiles: 100, maxFileSize: 1024000, acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp)$/i });
    }
}
function GenAttachfile_CMS(IDControlContens, IntID, intFileIni, title, intFlag)// intFlag = 1:CreateGroup , 2:EditGroup, 3: CreateUser , 4 :EditUser ,5:ThumbnailPost; 6:EditIDCardUser) 
{

    var strResult = '<div id="' + IntID + 'fileupload" style="margin-top:5px;">';   
    strResult += '<form action="' + RootPath + '/Upload.ashx?Avartar=1&fl=' + intFlag + '" method="post" enctype="multipart/form-data">';
   
    strResult += '<div class="fileupload-buttonbar" style="border:none; background:none;">';
    strResult += '<div   style="float: left;">';
    strResult += '<input type="file" name="files[]" id="' + IntID + 'addfile" style="opacity: 0; filter:alpha (opacity=0); cursor: pointer; width:0px; position: absolute; float:left;z-index: 2" ';   
    strResult += ' /><label  for="' + IntID + 'addfile" style="float:left; position: absolute; z-index: 1; margin:0px 5px; color:#36C; font-weight:normal; font-family: Arial,Verdana, sans-serif; font-size: 13px; cursor:pointer;">' + title + '</label> ';           
    strResult += '</div><div class="clr"></div>';
    strResult += '<div class="fileupload-progressbar" style=" display:block;">';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</form>';
    strResult += '<div class="clr"></div>';
    strResult += '<div class="fileupload-content" style="border:none; background:none;display:none;">';
    strResult += '<div class="outterTable">';
    strResult += '<table class="files" id="' + IntID + 'fileAttach" style=" display:none;">';
    strResult += '<tbody>';
    if (typeof (IsChuyenTiep) != 'undefined' && IsChuyenTiep == 1 && intFileIni > 0) {
        strResult += GenDownloadFile(IntID);
    }
    strResult += '</tbody>';
    strResult += '</table>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '<div class="clr"></div>';
    strResult += '<script id="' + IntID + 'template-upload" type="text/x-jquery-tmpl" style="width:300px!important; ;display:none;">';
    strResult += '<tr class="template-upload{{if error}} ui-state-error{{/if}}" style="width:300px!important;">';
    strResult += '<td class="preview"></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '{{if error}}';
    strResult += '<td class="error" colspan="2">Lỗi:';
    strResult += '{{if error === \'maxFileSize\'}}File quá dung lượng cho phép';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Chỉ chọn file hình';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép upload 1 file !';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="progress"><div></div></td>';
    strResult += '<td class="start"><button>Start</button></td>';
    strResult += '{{/if}}';
    strResult += '<td class="cancel"><button>Cancel</button></td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<script id="' + IntID + 'template-download" type="text/x-jquery-tmpl" style="width:300px!important; display:none;">';
    strResult += '<tr class="template-download{{if error}} ui-state-error{{/if}}"  style="width:300px!important;">';
    strResult += '{{if error}}';
    strResult += '<td></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td class="error" colspan="2">Error:';
    strResult += '{{if error === 1}}File exceeds upload_max_filesize (php.ini directive)';
    strResult += '{{else error === 2}}File exceeds MAX_FILE_SIZE (HTML form directive)';
    strResult += '{{else error === 3}}File was only partially uploaded';
    strResult += '{{else error === 4}}No File was uploaded';
    strResult += '{{else error === 5}}Missing a temporary folder';
    strResult += '{{else error === 6}}Failed to write file to disk';
    strResult += '{{else error === 7}}File upload stopped by extension';
    strResult += '{{else error === \'maxFileSize\'}}File is too big';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Filetype not allowed';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép đính kèm 5 file !';
    strResult += '{{else error === \'uploadedBytes\'}}Uploaded bytes exceed file size';
    strResult += '{{else error === \'emptyResult\'}}Empty file upload result';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="preview"  ValueReturn="${thumbnail_url}">';
    strResult += '{{if thumbnail_url}}';
    //strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="' + RootPath + '/${thumbnail_url}"></a>';
    strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="${thumbnail_url}"></a>';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '<td class="name">';
    strResult += '<a href="${urlDownloadfile}"{{if thumbnail_url}} target="_blank"{{/if}}>${name}</a>';
    strResult += '</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td colspan="2"></td>';
    strResult += '{{/if}}';
    strResult += '<td class="delete">';
    strResult += '<button data-type="${delete_type}" data-url="/${delete_url}" style="width: 1.8em; height: 1.7em; text-indent:-99999px!important;  cursor:pointer;">Delete</button>';
    strResult += '</td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<div class="clr"></div>';
    $("#" + IDControlContens).html(strResult);
    if (typeof (IsChuyenTiep) != 'undefined' && IsChuyenTiep == 1 && intFileIni > 0) {
        $("#" + IntID + "fileupload").fileupload({ uploadTemplate: $("#" + IntID + "template-upload"), downloadTemplate: $("#" + IntID + "template-download"), maxNumberOfFiles: 1000000, maxFileSize: 1024000, acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp)$/i });
        // document.getElementById('dvgroupimageedit').outerHTML = '';
    }
    else {
        $("#" + IntID + "fileupload").fileupload({ uploadTemplate: $("#" + IntID + "template-upload"), downloadTemplate: $("#" + IntID + "template-download"), maxNumberOfFiles: 1000000, maxFileSize: 1024000, acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp)$/i });
        // document.getElementById('dvgroupimageedit').outerHTML = '';
    }

}

function ClearDivOld() {
    debugger;
    document.getElementById('dvgroupimageedit').outerHTML = '';
}

//function GetDataResultASHX(IDControl) {
//    var array = new Array();
//    var int = 0;
//    h("#" + IDControl + " .preview[ValueReturn]").each(function () {
//        var $this = h(this);
//        var strURL = $this.attr("ValueReturn");
//        var arrayTemp = strURL.split('?');
//        arrayTemp = arrayTemp[1].split('&');
//        var arraysend = arrayTemp[0].split('=');
//        var arrayResults = Array();
//        arrayResults[0] = arraysend[1];
//        arraysend = arrayTemp[1].split('=');
//        arrayResults[1] = arraysend[1];
//        array[int] = arrayResults;
//        int++;
//    });
//    return array;
//}

function GetDataResultASHX(IDControl) {
    var array = new Array();
    var int = 0;
    $("#" + IDControl + " .preview[ValueReturn]").each(function () {
        var $this = $(this);
        var strURL = $this.attr("ValueReturn");
        var arrayResults = Array();
        arrayResults[0] = strURL;
        array[int] = arrayResults;
        int++;
    });
    return array;
}

function deleteFileUpload(IDControl) {
    $("#" + IDControl + " table .template-download").remove();
}

function GenDownloadFile(intID) {
    var objDownload = $("#" + intID + "ReportDetail .downloadFile");
    var strRsult = "";
    if (objDownload != undefined) {
        $("#" + intID + "ReportDetail .downloadFile p").each(function () {
            var $this = $(this);
            strRsult += GenItemTemplateDownload($($this).children('a'));
        });
    }
    return strRsult;
}
function GenItemTemplateDownload(objTaga) {
    var arrayFile = new Array();
    var arrayFileTemp = $(objTaga).attr('href').split('&');
    if (arrayFileTemp.length > 1) {
        var j = 0;
        for (var i = 1; i < arrayFileTemp.length; i++) {
            var arrarTemp1 = arrayFileTemp[i].split('=');
            arrayFile[j] = arrarTemp1;
            j++;
        }
    }
    if (arrayFile.length > 0) {
        $('#imgAvatar').html('');
        return '<tr class="template-download" style="width: 470px !important; "> <td class="preview" valuereturn="Thumbnail.ashx? f=' + arrayFile[1][1] + '&Guid=' + arrayFile[0][1] + '"><a href="' + $(objTaga).attr('href') + '" target="_blank"><img  src="/Thumbnail.ashx? f=' + arrayFile[1][1] + '&Guid=' + arrayFile[0][1] + '"></a></td><td class="name"><a href="' + $(objTaga).attr('href') + '" target="_blank">' + arrayFile[1][1] + '</a></td><td class="size"></td><td colspan="2"></td><td class="delete"><button data-type="DELETE" data-url="/Upload.ashx?f=IsOld" style="width: 1.8em; height: 1.7em; text-indent:-99999px!important;  cursor:pointer;" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" role="button" aria-disabled="false" title="Delete"><span class="ui-button-icon-primary ui-icon ui-icon-trash"></span><span class="ui-button-text">Delete</span></button></td></tr>';
    }
    else
        return '';

}
/*----------------------exchange-group---------------------*/
var idCtrlCurrent = '';
var infoPlus = 0;
function GenAttachfileEX(IDControlContens, IntID, fileFiler, numberFileUpload, isUpPu, title, isVideo, isGroupAvatar) {
    var strResult = '';
    if (isUpPu == true) {
        strResult += '<div id="' + IntID + 'fileupload" style="margin-left:25px;">';
    }
    else {
        strResult += '<div id="' + IntID + 'fileupload" >';
    }
    if (isGroupAvatar == true) {
        strResult += '<form action="' + RootPath + '/Upload.ashx?Avartar=1" method="post" enctype="multipart/form-data">';
    }
    else {
        strResult += '<form action="' + RootPath + '/Upload.ashx" method="post" enctype="multipart/form-data">';
    }
    strResult += '<div class="fileupload-buttonbar" style="border:none; background:none;">';
    strResult += '<div   style="float: left;">';
    strResult += '<input type="file" name="files[]" id="' + IntID + 'addfile" style="opacity: 0; filter:alpha (opacity=0); cursor: pointer; width:0px; position: absolute; float:left;z-index: 2" ';
    strResult += ' multiple="multiple" />';
    strResult += '<label  for="' + IntID + 'addfile" style="float:left; position: absolute; z-index: 1; margin:0px 5px; color:#36C; font-weight:normal; font-family: Arial,Verdana, sans-serif; font-size: 13px; cursor:pointer;color: #36C;cursor: pointer;font-weight: bold;">' + title + '</label>';

    strResult += '</div><div class="clr"></div>';
    strResult += '<div class="fileupload-progressbar">';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</form>';
    strResult += '<div class="clr"></div>';
    strResult += '<div class="fileupload-content" style="border:none; background:none;">';
    strResult += '<div class="outterTable">';

    strResult += '<table class="files" id="' + IntID + 'fileAttach" style=" display:none;">';
    strResult += '<tbody>';
    strResult += '</tbody>';
    strResult += '</table>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '<div class="clr"></div>';
    strResult += '<script id="' + IntID + 'template-upload" type="text/x-jquery-tmpl" style="width:470px!important;">';
    strResult += '<tr class="template-upload{{if error}} ui-state-error{{/if}}" style="width:470px!important;">';
    strResult += '<td class="preview"></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '{{if error}}';
    strResult += '<td class="error" colspan="2">Error:';
    strResult += '{{if error === \'maxFileSize\'}}File is too big';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Filetype not allowed';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép đính kèm ' + numberFileUpload + ' file !';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="progress"><div></div></td>';
    strResult += '<td class="start"><button>Start</button></td>';
    strResult += '{{/if}}';
    strResult += '<td class="cancel"><button>Cancel</button></td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<script id="' + IntID + 'template-download" type="text/x-jquery-tmpl" style="width:470px!important;">';
    strResult += '<tr class="template-download{{if error}} ui-state-error{{/if}}"  style="width:470px!important;">';
    strResult += '{{if error}}';
    strResult += '<td></td>';
    strResult += '<td class="name">${name}</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td class="error" colspan="2">Error:';
    strResult += '{{if error === 1}}File exceeds upload_max_filesize (php.ini directive)';
    strResult += '{{else error === 2}}File exceeds MAX_FILE_SIZE (HTML form directive)';
    strResult += '{{else error === 3}}File was only partially uploaded';
    strResult += '{{else error === 4}}No File was uploaded';
    strResult += '{{else error === 5}}Missing a temporary folder';
    strResult += '{{else error === 6}}Failed to write file to disk';
    strResult += '{{else error === 7}}File upload stopped by extension';
    strResult += '{{else error === \'maxFileSize\'}}File is too big';
    strResult += '{{else error === \'minFileSize\'}}File is too small';
    strResult += '{{else error === \'acceptFileTypes\'}}Filetype not allowed';
    strResult += '{{else error === \'maxNumberOfFiles\'}}Bạn chỉ được phép đính kèm ' + numberFileUpload + ' file !';
    strResult += '{{else error === \'uploadedBytes\'}}Uploaded bytes exceed file size';
    strResult += '{{else error === \'emptyResult\'}}Empty file upload result';
    strResult += '{{else}}${error}';
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '{{else}}';
    strResult += '<td class="preview" ValueReturn="${thumbnail_url}">';
    strResult += '{{if thumbnail_url}}';
    if (isVideo == true) {
        // strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="' + RootPath + '/${thumbnail_url}&Video=1&Temp=1"></a>';
        strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="${thumbnail_url}&Video=1&Temp=1"></a>';
    }
    else {
        //strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="' + RootPath + '/${thumbnail_url}&ImgTemp=1"></a>';
        strResult += '<a href="${urlDownloadfile}" target="_blank"><img src="${thumbnail_url}&ImgTemp=1"></a>';
    }
    strResult += '{{/if}}';
    strResult += '</td>';
    strResult += '<td class="name">';
    strResult += '<a href="${urlDownloadfile}"{{if thumbnail_url}} target="_blank"{{/if}}>${name}</a>';
    strResult += '</td>';
    strResult += '<td class="size">${sizef}</td>';
    strResult += '<td colspan="2"></td>';
    strResult += '{{/if}}';
    strResult += '<td class="delete">';
    strResult += '<button data-type="${delete_type}" data-url="${delete_url}" style="width: 1.8em; height: 1.7em; text-indent:-99999px!important;  cursor:pointer;">Delete</button>';
    strResult += '</td>';
    strResult += '</tr>';
    strResult += '</script>';
    strResult += '<div class="clr"></div>';
    $("#" + IDControlContens).html(strResult);
    $("#" + IntID + "fileupload").fileupload({ uploadTemplate: $("#" + IntID + "template-upload"), downloadTemplate: $("#" + IntID + "template-download"), maxNumberOfFiles: numberFileUpload, acceptFileTypes: fileFiler });
}
function GetDataImgASHX(IDControl) {
    var array = new Array();
    var int = 0;
    $("#" + IDControl + " .preview[ValueReturn]").each(function () {
        var $this = $(this).find('img');
        var strURL = $this.attr("src");
        array[int] = strURL;
        int++;
    });
    return array;
}
function monitorFileUpload(idCtrlMonior, idCtrlMonior2, idCtrlDislay) {
    var array = GetDataImgASHX(idCtrlMonior);
    var array2 = new Array();
    if ($('#' + idCtrlMonior2).length > 0) {
        array2 = GetDataImgASHX(idCtrlMonior2);
    }
    array = array.concat(array2);
    if ($('#' + idCtrlDislay + ' img').length < array.length) {
        var strResult = '';
        for (var i = 0; i < array.length; i++) {
            if (i == 0) {
                strResult += '<img class="ex-add-img-img-avar" src ="' + array[i] + '" />';
            }
            else {
                if (i == 1) {
                    strResult += '<div class="ex-add-img-group-img">';
                }
                strResult += '<img src ="' + array[i] + '" />';
                if (i > 0 && i == array.length - 1) {
                    strResult += '</div>';
                }
                if (i == array.length - 1) {

                    strResult += '<div class="c-close" onclick="closeChooseImg(\'' + idCtrlMonior + '\', \'' + idCtrlMonior2 + '\', \'' + idCtrlDislay + '\');"></div ><div class="clr"></div>';
                }
            }
        }
        if (array.length > 0) {
            $('#' + idCtrlDislay).html(strResult);
            noActivedTypeShare();
        }
    }
    if (idCtrlDislay == idCtrlCurrent) {
        $('#' + idCtrlDislay).parent('div').show();
    }
    else {
        $('#' + idCtrlDislay).parent('div').hide();
    }
    setTimeout('monitorFileUpload(\'' + idCtrlMonior + '\', \'' + idCtrlMonior2 + '\', \'' + idCtrlDislay + '\')', 3000);
}
function monitorFileAttach(idCtrlMonior, idCtrlMonior2, idCtrlDislay) {
    var array = GetDataResultASHXFileUpload(idCtrlMonior);
    var array2 = new Array();
    if ($('#' + idCtrlMonior2).length > 0) {
        array2 = GetDataResultASHXFileUpload(idCtrlMonior2);
    }
    array = array.concat(array2);
    if (array.length > 0) {
        var strResult = '';
        for (var i = 0; i < array.length; i++) {
            strResult += '<div data-file="' + array[i][1] + '" data-display="' + array[i][0] + '" class="ex-sh-file"><span class="ic"></span><a target="_blank" href="' + array[i][2] + '" class="lk">' + array[i][0] + '</a></div>';
            if (i == array.length - 1) {
                strResult += '<div class="c-close" onclick="closeChooseVideo(\'' + idCtrlMonior + '\', \'' + idCtrlDislay + '\');"></div ><div class="clr"></div>';
            }
        }
        if (array.length > 0) {
            $('#' + idCtrlDislay).html(strResult);
            noActivedTypeShare();
        }
    }
    if (idCtrlDislay == idCtrlCurrent) {
        $('#' + idCtrlDislay).parent('div').show();
    }
    else {
        $('#' + idCtrlDislay).parent('div').hide();
    }
    setTimeout('monitorFileAttach(\'' + idCtrlMonior + '\',\'' + idCtrlMonior2 + '\', \'' + idCtrlDislay + '\')', 3000);
}
function monitorVideoUpload(idCtrlMonior, idCtrlDislay) {
    var array = GetDataImgASHX(idCtrlMonior);
    if ($('#' + idCtrlDislay + ' object').length < array.length) {
        var strResult = '';
        for (var i = 0; i < array.length; i++) {
            //            strResult += '<embed type="application/x-shockwave-flash" id="player2" name="player2" src="http://forum.thegioididong.com/hoang/VideoPlayerForum.swf" allowscriptaccess="always" quality="best" bgcolor="#ffffff" wmode="window" allowfullscreen="true" flashvars="url=' + array[i] + '" width="320" height="250">';


            if (window.ActiveXObject) {
                strResult += '<div data="' + array[i] + '">';
                strResult += '<OBJECT  classid="CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6" codeBase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715,8,9,10,11" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject" height="300" width="350" name="winMediaPlayer" id="winMediaPlayerID"><PARAM NAME="URL" VALUE="' + array[i] + '"><PARAM NAME="rate" VALUE="1"><PARAM NAME="balance" VALUE="0"><PARAM NAME="currentPosition" VALUE="0"><PARAM NAME="defaultFrame" VALUE="0"><PARAM NAME="playCount" VALUE="1"><PARAM NAME="CursorType" VALUE="-1"><PARAM NAME="autoStart" VALUE="1"><PARAM NAME="currentMarker" VALUE="0"><PARAM NAME="invokeURLs" VALUE="-1"><PARAM NAME="volume" VALUE="50"><PARAM NAME="mute" VALUE="0"><PARAM NAME="stretchToFit" VALUE="-1"><PARAM NAME="windowlessVideo" VALUE="0"><PARAM NAME="enabled" VALUE="1"><PARAM NAME="fullScreen" VALUE="0"><PARAM NAME="enableContextMenu" VALUE="0"><PARAM NAME="enableErrorDialogs" VALUE="0"><EMBED  type="application/x-mplayer2" id="wmpEmbed" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" src="' + array[i] + '" name="MediaPlayerTV" height="300" width="350"  AutoSize="1" AutoStart="0" ClickToPlay="1" DisplaySize="1" EnableContextMenu="0" EnableFullScreenControls="1" EnableTracker="1" Mute="0" PlayCount="1" ShowControls="1" ShowAudioControls="1" ShowDisplay="1" ShowGotoBar="1" ShowPositionControls="1" ShowStatusBar="1" ShowTracker="1"></EMBED></OBJECT>';
                strResult += '</div>';
            }
            else {
                strResult += '<div data="' + array[i] + '">';
                strResult += '<object data="' + array[i] + '" classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715,8,9,10,11" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject" height="300" width="350" viewastext=""> <param name="FileName" value="' + array[i] + '"><param name="TransparentAtStart" value="false"><param name="AutoStart" value="false"><param name="AnimationatStart" value="false"><param name="ShowControls" value="false"><param name="ShowDisplay" value="false"><param name="playCount" value="1"><param name="displaySize" value="0"><param name="Volume" value="100"><embed id="MSWM" type="application/x-mplayer2" height="300" width="350" pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" src="' + array[i] + '" transparentatStart="false" AnimationAtStart="false"  ShowControls=1 ShowDisplay=1 ShowStatusBar=1  AUTOSTART="false" loop="false" AutoSize=0   autoreplay="false"></EMBED></OBJECT>';
                strResult += '</div>';
            }
            if (i == array.length - 1) {

                strResult += '<div class="c-close" onclick="closeChooseVideo(\'' + idCtrlMonior + '\', \'' + idCtrlDislay + '\');"></div ><div class="clr"></div>';
            }
        }
        if (array.length > 0) {
            $('#' + idCtrlDislay).html(strResult);
            noActivedTypeShare();
        }
    }
    if (idCtrlDislay == idCtrlCurrent) {
        $('#' + idCtrlDislay).parent('div').show();
    }
    else {
        $('#' + idCtrlDislay).parent('div').hide();
    }
    setTimeout('monitorVideoUpload(\'' + idCtrlMonior + '\', \'' + idCtrlDislay + '\')', 3000);
}

function loadingUpload(obj, idCtrlDislay) {
    $('#' + idCtrlDislay).show();
    $(obj).parent('div').hide();
    idCtrlCurrent = idCtrlDislay;
    $('#' + idCtrlDislay).html('<div class="ex-loading"></div>');
}
function showPopupAddYoutube(obj, idCtrl) {
    $('#' + idCtrl).css({ 'left': (parseInt($(window).width()) - parseInt($('#' + idCtrl).outerWidth(true))) / 2 });
    $(obj).parent('div').hide();
    $('#' + idCtrl).fadeIn();
    $('body').append('<div id="popup" class="ex-gr-gb-popup"></div>');
}
function closeChooseImg(idCtrlMonior, idCtrlMonior2, idCtrlDislay) {
    deleteFileUpload(idCtrlMonior);
    deleteFileUpload(idCtrlMonior2);
    $('#' + idCtrlDislay).html('');
    $('#' + idCtrlDislay).parent('div').hide();
    idCtrlCurrent = '';
    activedTypeShare();
}
function closeChooseVideo(idCtrlMonior, idCtrlDislay) {
    deleteFileUpload(idCtrlMonior);
    $('#' + idCtrlDislay).html('');
    $('#' + idCtrlDislay).parent('div').hide();
    idCtrlCurrent = '';
    activedTypeShare();
}
function deleteAvaterUpload(IDControl) {
    $("#" + IDControl + " table tr").remove();
}
function GetDataResultASHXFileUpload(IDControl) {
    var array = new Array();
    var int = 0;
    $("#" + IDControl + " .preview[ValueReturn]").each(function () {
        var $this = $(this);
        var strURL = $this.attr("ValueReturn");
        var arrayTemp = strURL.split('?');
        arrayTemp = arrayTemp[1].split('&');
        var arraysend = arrayTemp[0].split('=');
        var arrayResults = Array();
        arrayResults[0] = arraysend[1];
        arraysend = arrayTemp[1].split('=');
        arrayResults[1] = arraysend[1];
        arrayResults[2] = $this.children('a').attr('href');
        array[int] = arrayResults;
        int++;
    });
    return array;
}
function monitorAvatar(idCtrlMonior, idImg) {
    if (checkErrorUpload(idCtrlMonior)) {
        alert('Xảy ra lỗi upload! Bạn kiểm tra lại loại file upload');
        deleteAvaterUpload(idCtrlMonior);
    }
    var array = GetDataImgASHX(idCtrlMonior);
    var arraydata = GetDataResultASHX(idCtrlMonior);
    if (array.length > 0) {
        var a = "<img width='100px' height='100px' src='" + array[0] + "'/>";
        //$('#' + idImg).attr('alt', 'youravatar');
        $('#' + idImg).html(a);
        //window.location.reload();
        //$('#' + idImg).attr('srcImg', array[0]);
        $('#hdfimage').val(arraydata[0][1]);
        deleteAvaterUpload(idCtrlMonior);

    }
    setTimeout('monitorAvatar(\'' + idCtrlMonior + '\', \'' + idImg + '\' )', 1000);
}
function checkErrorUpload(IDControl) {
    if ($("#" + IDControl + ' .ui-state-error').length > 0) {
        return true;
    }
    return false;
}
$(document).ready(function () {
    monitorAvatar('divUpload', 'imgAvatar');
});
