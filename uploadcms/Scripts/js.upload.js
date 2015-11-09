//var tgdd_cms_urlroot = "http://localhost:2499";
//$('head').append('<link rel="stylesheet" type="text/css" media="all" href="' + tgdd_cms_urlroot + '/Content/bootstrap.css" />');
$('head').append('<link rel="stylesheet" type="text/css" media="all" href="' + tgdd_cms_urlroot + '/Content/cmsupload.css" />');
$('head').append('<link rel="stylesheet" type="text/css" media="all" href="' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.css" />');

//$('head').append('<script type="text/javascript" src="' + tgdd_cms_urlroot + '/Scripts/jquery-1.7.1.min.js"></script>');
//$('head').append('<script type="text/javascript" src="' + tgdd_cms_urlroot + '/Scripts/bootstrap.min.js"></script>');
$('head').append('<script type="text/javascript" src="' + tgdd_cms_urlroot + '/Scripts/uploadify/jquery.uploadify-3.1.js"></script>');
$('head').append('<script type="text/javascript" src="' + tgdd_cms_urlroot + '/Scripts/uploadify/swfobject.js"></script>');


var cms_div_contenttext = "";
var username = "administrator";
var siteid = 0, categoryid = 0, productid = 0, module = 0;

$(document).ready(function () {

    cms_uploadimage_load();
});

function cms_uploadimage_load() {
    siteid = $("#cms-uploadimage").attr('siteid');
    categoryid = $("#cms-uploadimage").attr('categoryid');
    productid = $("#cms-uploadimage").attr('productid');
    username = $("#cms-uploadimage").attr('username');
    module = $("#cms-uploadimage").attr('module');
    if (module == "underfined" || module == null || module == 0) {
        module = 0;
        cms_uploadimage_loaddatafirst();

        if (productid == 0) {

        }
        else {
            cms_uploadimage_loadscriptfirstedit();
            $("#cms_uploadimage_li_hinhgoccanh").show();
            $("#cms_uploadimage_li_hinhxoay").show();
            $("#cms_uploadimage_li_video").hide();
            $("#cms_uploadimage_li_feature").show();
            $("#cms_uploadimage_li_hinhcamera").show();
            $("#cms_uploadimage_li_hinhbobanhangchuan").show();
        }
    }
    else if (module == 1) {

        cms_uploadimage_loaddatafirstnews();

        if (productid != 0) {
            cms_uploadimage_loadscriptfirsteditnews();
            $("#cms_uploadimage_li_hinhgoccanh").show();
        }

    }
    else {

        cms_uploadimage_loaddatafirst();
        if (productid != 0) {
            cms_uploadimage_loadscriptfirsteditgame();
            //cms_uploadimage_loadscriptfirstedit();
            $("#cms_uploadimage_li_hinhgoccanh").show();
            $("#cms_uploadimage_li_hinhxoay").show();
            $("#cms_uploadimage_li_video").hide();
            $("#cms_uploadimage_li_feature").show();
        }
    }

    $("object").css("left", "0");
    $("object").css("width", "85px");
    $("object").css("height", "24px");
    $("#feature object").css("width", "126px");
    $("#bobanhangchuan object").css("width", "188px");
}
function cms_uploadimage_loaddatafirstgame() {

    $("#cms-uploadimage").html('');
    var strhtml = '';
    strhtml += '<div class="modal-header" style=" background-color:black; padding-top:4px; height:17px">';
    strhtml += '<label id="cms-uploadimage-aclose"  class="cms-upload-close">×</label>';
    strhtml += '<h4 style="color:#D5D2CB; font-weight:normal">Upload Media</h4>';
    strhtml += '</div>';
    strhtml += '<div class="modal-body">';
    strhtml += '<ul id="tab" class="cms-tab nav nav-tabs">';
    strhtml += '<li class="active"><a href="#hinhanh" data-toggle="tab">Hình ảnh</a></li>';


    strhtml += '</ul>';
    strhtml += '<div id="myTabContent" class="tab-content">';
    strhtml += '<div class="tab-pane fade cms_dv_scroll in active" id="hinhanh">';
    strhtml += '<h4 class="cms-upload-title">Upload hình từ máy tính của bạn</h4>';
    strhtml += '<p style="text-align:center;padding-left:243px;"><input type="file" id="file_upload" name="file_upload" class="cms-upload-btn" value="Chọn file"  /> ';
    strhtml += '</p>';

    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hsp" ></div>';
    strhtml += '<div id="dvtableimage_ha">';

    strhtml += '<p>Kích thước tối đa: 8MB. Sau khi hình ảnh được upload, bạn có thể sửa tiêu đề và mô tả của hình</p>';



    strhtml += '<div id="cms_dvhinh" class="media-items" style="width:620px">';

    strhtml += '</div>';



    strhtml += ' </div>';
    strhtml += '</div>';




    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '<div class="modal-footer">';
    strhtml += '<div style="float:left;"><span>Lưu ý: những ký tự đặc biệt trong tên hình ( :*?|<>&[]{}()\\/~!@#$%^&+,;`\' ) sẽ bị xoá</span></div>';
    strhtml += '<div id="cms_uploadcms_process_ft" style="float:right;width:100px;margin-bottom:0px;display:none" class="progress progress-info progress-striped active"><div class="bar"  style="width: 80%;"></div></div>';
    strhtml += '</div>';
    $("#cms-uploadimage").append(strhtml);


}
function cms_uploadimage_loaddatafirstnews() {

    $("#cms-uploadimage").html('');
    var strhtml = '';
    strhtml += '<div class="modal-header" style=" background-color:black; padding-top:4px; height:17px">';
    strhtml += '<label id="cms-uploadimage-aclose"  class="cms-upload-close">×</label>';
    strhtml += '<h4 style="color:#D5D2CB; font-weight:normal">Upload Media</h4>';
    strhtml += '</div>';
    strhtml += '<div class="modal-body">';
    strhtml += '<ul id="tab" class="cms-tab nav nav-tabs">';
    strhtml += '<li class="active"><a href="#hinhanh" data-toggle="tab">Picture</a></li>';
    strhtml += '<li><a href="#album" data-toggle="tab">Album</a></li>';
    strhtml += '<li><a href="#hinhgoccanh" data-toggle="tab">Gallery</a></li>';
    strhtml += '</ul>';

    strhtml += '<div id="myTabContent" class="tab-content">';

    //Hình ảnh

    strhtml += '<div class="tab-pane fade cms_dv_scroll in active" id="hinhanh">';
    strhtml += '<h4 class="cms-upload-title">Upload hình từ máy tính của bạn</h4>';
    strhtml += '<p style="text-align:center;padding-left:243px;"><input type="file" id="file_upload" name="file_upload" class="cms-upload-btn" value="Chọn file"  /> ';
    strhtml += '</p>';

    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hsp" ></div>';
    strhtml += '<div id="dvtableimage_ha">';
    strhtml += '<p>Kích thước tối đa: 8MB. Sau khi hình ảnh được upload, bạn có thể sửa tiêu đề và mô tả của hình</p>';
    strhtml += '<div id="cms_dvhinh" class="media-items" style="width:620px">';
    strhtml += '</div>';
    strhtml += ' </div>';
    strhtml += '</div>';

    //Album

    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="album">';
    strhtml += '<div style="height:42px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Quản lý Album</h4>';
    strhtml += '<input type="text" id="txtAlbumName" style="margin-top:10px;margin-left:20px">';
    strhtml += '<input type="button" onclick="add_album_news()" class="uploadify-button" value="Tạo mới" style="margin-left:10px;margin-top:10px;padding-top:5px;width:65px"></div>';
    strhtml += '<div class="clr"></div>';
    strhtml += '<div id="cms_content_album" style="display:none">';

    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:71%">';
    strhtml += 'Album';
    strhtml += '</th>';
    strhtml += '<th style="text-align:right;padding-right:22px;">';
    strhtml += 'Delete';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvalbum" class="media-items" style="width:620px">';
    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';

    //hình góc cạnh

    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhgoccanh">';
    strhtml += '<div style="height:42px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Hình gallery</h4>';
    strhtml += '<select id="cbAlbum" style="width:200px;margin-top:10px;margin-left:20px" onchange="ChangeAlbumValue()"><option value="0">--Chọn Album--</option></select>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hgc" ></div></div><div class="clr"></div>';
    strhtml += '<p id="media-search">';

    strhtml += '<div style="float:left;margin-left:266px;text-align:center;" id="cms_dv_btnupload_hinhgoccanh"><input type="file" id="cms_uploadhinhgoccanh_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> </div> ';

    strhtml += '</p>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinhgoccanh" style="display:none">';

    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:61%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:right;padding-right:22px;">';
    strhtml += '&nbsp;';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinhgoccanh" class="media-items" style="width:620px">';


    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';


    strhtml += '</div>';
    //end hình góc cạnh


    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '<div class="modal-footer">';
    strhtml += '<div style="float:left;"><span>Lưu ý: những ký tự đặc biệt trong tên hình ( :*?|<>&[]{}()\\/~!@#$%^&+,;`\' ) sẽ bị xoá</span></div>';
    strhtml += '<div id="cms_uploadcms_process_ft" style="float:right;width:100px;margin-bottom:0px;display:none" class="progress progress-info progress-striped active"><div class="bar"  style="width: 80%;"></div></div>';
    strhtml += '</div>';
    $("#cms-uploadimage").append(strhtml);


}

function cms_uploadimage_loaddatafirst() {

    $("#cms-uploadimage").html('');
    var strhtml = '';
    strhtml += '<div class="modal-header" style=" background-color:black; padding-top:4px; height:17px">';
    strhtml += '<label id="cms-uploadimage-aclose"  class="cms-upload-close">×</label>';
    strhtml += '<h4 style="color:#D5D2CB; font-weight:normal">Upload Media</h4>';
    strhtml += '</div>';
    strhtml += '<div class="modal-body">';

    strhtml += '<ul id="tab" class="cms-tab nav nav-tabs">';
    strhtml += '<li class="active" style="width:81px"><a href="#hinhanh" data-toggle="tab">Hình ảnh</a></li>';
    strhtml += '<li id="cms_uploadimage_li_hinhgoccanh" style="width:141px"><a href="#hinhgoccanh" data-toggle="tab">Hình góc cạnh (<span id="cms_uploadimage_spcounthgc">0</span>) </a></li>';
    strhtml += '<li id="cms_uploadimage_li_hinhxoay"><a href="#hinhxoay" data-toggle="tab">Hình 360 (<span id="cms_uploadimage_spcounth360">0</span>) </a></li>';
    strhtml += '<li id="cms_uploadimage_li_video"><a href="#video" data-toggle="tab">Video (<span id="cms_uploadimage_spcountvideo">0</span>) </a></li>';
    strhtml += '<li id="cms_uploadimage_li_camera"><a href="#hinhcamera" data-toggle="tab">Hình camera (<span id="cms_uploadimage_spcountcamera">0</span>)</a></li>';
    strhtml += '<li id="cms_uploadimage_li_os"><a href="#hinhos" data-toggle="tab">Hình HĐH (<span id="cms_uploadimage_spcountos">0</span>)</a></li>';
    strhtml += '<li id="cms_uploadimage_li_ss"><a href="#hinhsosanh" data-toggle="tab">Hình so sánh (<span id="cms_uploadimage_spcountss">0</span>)</a></li>';
    strhtml += '<li id="cms_uploadimage_li_feature"><a href="#feature" data-toggle="tab">Feature </a></li>';
    strhtml += '<li id="cms_uploadimage_li_bobanhangchuan" style="width:173px"><a href="#bobanhangchuan" data-toggle="tab">Hình bộ bán hàng chuẩn <span id="cms_uploadimage_spcountbobanhangchuan"></span></a></li>';
    strhtml += '</ul>';

    strhtml += '<div id="myTabContent" class="tab-content">';
    strhtml += '<div class="tab-pane fade cms_dv_scroll in active" id="hinhanh">';
    strhtml += '<h4 class="cms-upload-title">Upload hình từ máy tính của bạn</h4>';
    strhtml += '<p style="text-align:center;padding-left:243px;"><input type="file" id="file_upload" name="file_upload" class="cms-upload-btn" value="Chọn file"  /> ';
    strhtml += '</p>';

    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hsp" ></div>';
    strhtml += '<div id="dvtableimage_ha">';

    strhtml += '<p>Kích thước tối đa: 8MB. Sau khi hình ảnh được upload, bạn có thể sửa tiêu đề và mô tả của hình</p>';



    strhtml += '<div id="cms_dvhinh" class="media-items" style="width:620px">';

    strhtml += '</div>';



    strhtml += ' </div>';
    strhtml += '</div>';
    //hinh goc canh
    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhgoccanh">';
    strhtml += '<div style="height:42px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Upload hình góc cạnh</h4>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hgc" ></div></div><div class="clr"></div>';

    strhtml += '<p id="media-search">';
    strhtml += '<select id="cms_dv_selectcolor_hinhgoccanh" onchange="cms_ddcolor_change(\'cms_dv_selectcolor_hinhgoccanh\', \'cms_dv_btnupload_hinhgoccanh\')" style="float:left">';
    strhtml += '<option value="-1">Chọn màu</option>  ';
    strhtml += '<option value="0">Mặc định</option>  ';
    strhtml += '</select><br class="clear"/>';

    strhtml += '<div style="float:left;margin-left:65px;text-align:center;display:none" id="cms_dv_btnupload_hinhgoccanh"><input type="file" id="cms_uploadhinhgoccanh_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> </div> ';
    strhtml += '<div style="float:left;margin-left:35px;display:none" id="cms_dv_video_hgc">Hoặc&nbsp;&nbsp;&nbsp;&nbsp;';
    strhtml += '<input id="cms_hgc_videolink_txt" type="text" placeholder="Nhập link video từ youtube..." style="width:300px"/> ';
    strhtml += '<input type="button" class="button" value="Thêm" onclick="cms_hgc_videolink_click()" /></div>';
    strhtml += '</p>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinhgoccanh" style="display:none">';
    strhtml += '<div id="sort-buttons" class="hide-if-no-js">';
    strhtml += '<span><span style="color:#08C;margin-right:10px;" onclick="cms_update_hinhgoccanh_del_all()">Xóa hết</span><span style="margin-right:1px" onclick="LoadImageHgc(0)">Các màu đang có: </span><span style="color:#08C;margin-right:1px;" id="cms_upload_image_listcolorcurrent"><span style="margin-right:1px;">Vàng</span> | <span style=" margin-right:1px;">';
    strhtml += 'Xanh</span> | <span style="margin-right:1px;">Đỏ</span></span>';
    strhtml += '</div>';
    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:61%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:left;padding-left:80px">';
    strhtml += 'Màu';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinhgoccanh" class="media-items" style="width:620px">';


    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';


    strhtml += '</div>';
    //hinh xoay
    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhxoay">';
    strhtml += '<h4 class="cms-upload-title">Upload hình 360</h4>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_360" ></div>';
    strhtml += '<p id="media-search" class="search-box">';

    strhtml += '<p style="text-align:center;padding-left:243px;">';
    strhtml += '<input type="file" id="cms_uploadhinh360_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> ';
    strhtml += '</p>';

    strhtml += '</p>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinh360" style="display:none">';

    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div style="margin-right:50px" class="toggle describe-toggle-on" onclick="cms_update_h360_del_all()">Xóa hết</div>';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:82%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:left">';
    strhtml += '&nbsp;';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinh360" class="media-items" style="width:620px">';


    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';

    strhtml += '</div>';
    //video

    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="video" >';

    strhtml += '<div class="cms_uploadvideo_link">';
    strhtml += '<div class="cms_uploadvideo_title_left"> <div class="img"></div></div>';
    strhtml += '<div class="cms_uploadvideo_title_right" > <input type="text" class="cms-upload-text-video" id="cms_uploadimage_video_linkyoutube" /> </div>';
    strhtml += '</div>';
    strhtml += '<div class="cms_uploadvideo_title">';
    strhtml += '<div class="cms_uploadvideo_title_left"> Tiêu đề:</div>';
    strhtml += '<div class="cms_uploadvideo_title_right" > <input type="text" id="cms_uploadimage_video_title" class="cms-upload-text-video" /> </div>';
    strhtml += '</div>';
    strhtml += '<div class="cms_uploadvideo_title">';
    strhtml += '<div class="cms_uploadvideo_title_left"> Mã Html:</div>';
    strhtml += '<div class="cms_uploadvideo_title_right" > <textarea cols="50" rows="2" id="cms_uploadimage_video_mahtml"  class="cms-upload-textarea-video" ></textarea> </div>';
    strhtml += '</div>';
    strhtml += '<div>';
    strhtml += '<div class="cms_uploadvideo_title_left">Link hình đại diện:</div>';
    strhtml += '<div class="cms_uploadvideo_title_right" >  <input type="text" id="cms_uploadimage_video_linkimgyoutube" class="cms-upload-text-video" /> </div>';
    strhtml += '</div>';
    strhtml += '<div>';
    strhtml += '<div class="cms_uploadvideo_title_left">Thứ tự hiển thị:</div>';
    strhtml += '<div class="cms_uploadvideo_title_right" >  <input type="text" id="cms_uploadimage_video_orderindex" style="width:23px;height:20px" /> </div>';
    strhtml += '</div>';
    strhtml += '<div class="cms_uploadvideo_button">';
    strhtml += '<input type="button" id="cms_uploadVideo_btn" class="cms-upload-btn_video" onclick="cms_uploadimage_videoclick()" value="Lưu" style="width:74px;" />                   ';

    strhtml += '</div>';
    strhtml += '<br />';
    strhtml += '<div class="clr"></div>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_video" ></div>';
    strhtml += '<div id="cms_dvvideo" style="width:620px">';

    strhtml += '<div class="clr"></div>';

    strhtml += '</div>  ';
    strhtml += '</div>';
    
    //camera
    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhcamera">';
    strhtml += '<div style="height:42px;margin-bottom:10px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Upload hình từ camera</h4>';
    strhtml += '<input type="text" id="cms_camera_title_txt" placeholder="Up hình trước khi nhập tiêu đề cho bộ ảnh này..." style="width:350px;margin-left:20px;margin-top:10px" />';
    strhtml += '<input type="button" class="button" value="Cập nhật" style="margin-left:10px;margin-top:10px" onclick="cms_camera_title_update()" />';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_camera" ></div></div><div class="clr"></div>';
    strhtml += '<div style="float:left;margin-left:90px;text-align:center;" id="cms_dv_btnupload_hinhcamera"><input type="file" id="cms_uploadhinhcamera_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> </div> ';
    strhtml += '<div style="float:left;margin-left:35px">Hoặc&nbsp;&nbsp;&nbsp;&nbsp;';
    strhtml += '<input id="cms_camera_videolink_txt" type="text" placeholder="Nhập link video từ youtube..." style="width:300px"/> ';
    strhtml += '<input type="button" class="button" value="Thêm" onclick="cms_camera_videolink_click()" /></div>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinhcamera" style="display:none">';

    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:61%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:right;padding-right:22px;">';
    strhtml += '&nbsp;';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinhcamera" class="media-items" style="width:620px">';

    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';

    strhtml += '</div>';
    //end camera
    
    //HĐH
    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhos">';
    strhtml += '<div style="height:42px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Upload hình chụp hệ điều hành</h4>';
    strhtml += '<input type="text" id="cms_os_title_txt" placeholder="Up hình trước khi nhập tiêu đề cho bộ ảnh này..." style="width:300px;margin-left:20px;margin-top:10px" />';
    strhtml += '<input type="button" class="button" value="Cập nhật" style="margin-left:10px;margin-top:10px" onclick="cms_os_title_update()" /><br class="clear"/>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_os" ></div></div><div class="clr"></div>';
    strhtml += '<p id="media-search">';

    strhtml += '<div style="float:left;margin-left:266px;text-align:center;" id="cms_dv_btnupload_hinhos"><input type="file" id="cms_uploadhinhos_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> </div> ';

    strhtml += '</p>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinhos" style="display:none">';

    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:61%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:right;padding-right:22px;">';
    strhtml += '&nbsp;';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinhos" class="media-items" style="width:620px">';

    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';

    strhtml += '</div>';
    //end HĐH

    //hinh so sanh
    strhtml += '<div class="tab-pane fade cms_dv_scroll" id="hinhsosanh">';
    strhtml += '<div style="height:42px;display:block;overflow:hidden"><h4 style="float:left" class="cms-upload-title">Upload hình so sánh</h4>';
    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_hss" ></div></div><div class="clr"></div>';

    strhtml += '<p id="media-search">';

    strhtml += '<select id="cms_dv_select_sstype" onchange="cms_sstype_change()" style="float:left">';
    if (siteid == 1) {
        strhtml += '<option value="4">Mặt trước</option>';
        strhtml += '<option value="5">Mặt sau</option>';
        strhtml += '<option value="6">Cạnh trái</option>';
        strhtml += '<option value="7">Cạnh phải</option>';
        strhtml += '<option value="8">Trên</option>';
        strhtml += '<option value="9">Dưới</option>';
        strhtml += '<option value="10">Thiếu sáng</option>';
        strhtml += '<option value="11">Đủ sáng</option>';
        strhtml += '<option value="12">Video Camera</option>';
    }
    strhtml += '</select>';

    strhtml += '<div style="float:left;margin-left:28px;margin-top:-9px;text-align:center" id="cms_dv_btnupload_hinhsosanh"><input type="file" id="cms_uploadhinhsosanh_btn" name="file_upload" class="cms-upload-btn" value="Chọn file" /> </div> ';
    strhtml += '<div style="float:left;margin-left:28px;margin-top:-10px;text-align:center;display:none" id="cms_dv_btnupload_videososanh">';
    strhtml += '<input type="text" style="width:320px" id="cms_uploadvideososanh_txt" placeholder="Nhập URL từ youtube..." /> ';
    strhtml += '<input type="button" id="cms_uploadvideososanh_btn" class="button" class="button" value="Thêm" onclick="cms_sosanh_videolink_click()" /></div> ';
    strhtml += '</p>';

    strhtml += ' <div class="clr"></div>';
    strhtml += '<div id="cms_content_hinhsosanh" style="display:none">';
    strhtml += '<div style="margin-top:20px">';
    strhtml += '<div  class="widefat">';
    strhtml += '<table style="width:618px">';
    strhtml += '<thead>';
    strhtml += '<tr>';
    strhtml += '<th style="text-align:left;padding-left: 10px; width:61%">';
    strhtml += 'Media';
    strhtml += '</th>';

    strhtml += '<th style="text-align:left;padding-left:40px">';
    strhtml += 'Type';
    strhtml += '</th>';
    strhtml += '</tr>';
    strhtml += '</thead>';
    strhtml += '</table>';
    strhtml += '</div>';
    strhtml += '<div id="cms_dvhinhsosanh" class="media-items" style="width:620px">';

    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '</div>';

    strhtml += '</div>';
    //End So sánh

    //feature

    strhtml += '<div class="tab-pane fade cms_dv_scroll in" id="feature">';
    strhtml += '<h4 class="cms-upload-title">Upload hình feature</h4>';

    strhtml += '<div style="display:block;overflow:hidden">';
    if (siteid == 1) {
        strhtml += '<div style="float:left;margin-left: 100px;"><input type="file" id="cms_uploadhinhfeature_btn360x180" name="cms_uploadhinhfeature_btn360x180" class="cms-upload-btn" value="Chọn hình Feature"  /> </div>';
        strhtml += '<div style="float:right;margin-right: 120px;"><input type="file" id="cms_uploadhinhfeature_btn300x300" name="cms_uploadhinhfeature_btn300x300" class="cms-upload-btn" value="Chọn hình Detail"  /> </div>';
    }
    else {
        strhtml += '<div style="float:left;margin-left: 100px;"><input type="file" id="cms_uploadhinhfeature_btn360x180" name="cms_uploadhinhfeature_btn360x180" class="cms-upload-btn" value="Chọn hình Feature"  /> </div>';
        strhtml += '<div style="float:right;margin-right: 120px"><input type="file" id="cms_uploadhinhfeature_btn300x300" name="cms_uploadhinhfeature_btn300x300" class="cms-upload-btn" value="Chọn hình trang chủ"  /> (Dung lượng <= 20KB) </div>';
    }
    strhtml += '</div>';


    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_feature" ></div>';
    strhtml += '<div id="cms_dvhinhfeature" class="media-items" style="width:640px">';

    strhtml += '<div id="cms_dvhinhfeature360" style="float:left;margin-left:29px">';
    strhtml += '</div>';

    
    strhtml += '<div id="cms_dvhinhfeature300"  style="float:right;width:210px;margin-right:41px;display:none">';
    strhtml += '</div>';

    strhtml += ' </div>';
    strhtml += '</div>';

    strhtml += '  <div class="tab-pane fade cms_dv_scroll" id="gallery">';
    strhtml += '<p></p>';
    strhtml += '<div id="cms_dvgallery" class="media-items" style="width:620px">';
    strhtml += '</div>';
    strhtml += '</div>';
    // end feature

    //bobanhangchuan

    strhtml += '<div class="tab-pane fade cms_dv_scroll in" id="bobanhangchuan">';
    strhtml += '<h4 class="cms-upload-title">Upload hình bộ bán hàng chuẩn</h4>';

    strhtml += '<div style="display:block;overflow:hidden">';
    strhtml += '<div style="float:left;margin-left: 29px;"><input  type="file" id="cms_uploadhinhbobanhangchuan-btn" name="cms_uploadhinhbobanhangchuan" class="cms-upload-btn" value="Chọn hình bộ bán hàng chuẩn"  /> </div>';
    strhtml += '<div style="float:right;margin-right: 126px;"><input type="file" id="cms_uploadhinhthongsokithuat-btn" name="cms_uploadhinhthongsokithuat-btn" class="cms-upload-btn" value="Chọn hình thông số kỹ thuật"  /> </div>';
    strhtml += '<div style="display: inline-block;margin-left: 80px;margin-bottom: 5px;"><span>(650x568px)</span><span style="display: inline-block;margin-left: 300px;">(700x600px)</span></div>';
    strhtml += '</div>';


    strhtml += '<div class="cms_upload_status" id="cms_upload_status_dv_bobanhangchuan" ></div>';
    strhtml += '<div id="cms_dvhinhbobanhangchuan-dv" class="media-items" style="width:640px">';

    strhtml += '<div id="cms_dvhinhbobanhangchuan" style="float:left;width:210px;margin-left:29px">';
    strhtml += '</div>';

    strhtml += '<div id="cms_dvhinhthongsokithuat"  style="float:right;width:210px;margin-right:41px">';
    strhtml += '</div>';

    strhtml += ' </div>';
    strhtml += '</div>';
    strhtml += '</div>';
    // end bobanhangchuan
    strhtml += '</div>';
    strhtml += '</div>';
    strhtml += '<div class="modal-footer">';
    strhtml += '<div style="float:left;"><span>Lưu ý: những ký tự đặc biệt trong tên hình ( :*?|<>&[]{}()\\/~!@#$%^&+,;`\' ) sẽ bị xoá</span></div>';
    strhtml += '<div id="cms_uploadcms_process_ft" style="float:right;width:100px;margin-bottom:0px;display:none" class="progress progress-info progress-striped active"><div class="bar"  style="width: 80%;"></div></div>';
    strhtml += '</div>';


    $("#cms-uploadimage").append(strhtml);
    
}
function cms_uploadimage_loadscriptfirsteditgame() {
    cms_uploadimage_loadscriptfirstgame();
    //cms_uploadimage_loadscriptfirst();
    cms_Uploadimage_LoadColordv();
    LoadImageHgc(0);
    LoadImage360();
    $('#cms_uploadhinh360_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=3',
        'onQueueComplete': function (file) {
            LoadImage360();
        }
    });

    LoadVideo();
    //LoadImageHspGallery();
    LoadFeature(0);
    $('#cms_uploadhinhfeature_btn360x180').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn hình Feature',
        'height': 16,
        'width': 108,
        'fileTypeDesc': 'Image Files',
        'uploadLimit': 1,
        'fileSizeLimit': '8192KB',
        'multi': false,
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=5',
        'onQueueComplete': function (file) {
            LoadFeature(360);
            $("#cms_uploadhinhfeature_btn360x180").uploadify('settings', 'ResetUploadsSuccessful', '0');
        }
    });
    $('#cms_uploadhinhfeature_btn300x300').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn hình Detail',
        'height': 16,
        'width': 108,
        'fileTypeDesc': 'Image Files',
        'uploadLimit': 1,
        'fileSizeLimit': '8192KB',
        'removeCompleted': true,
        'multi': false,
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=6',
        'onQueueComplete': function (file) {
            LoadFeature(300);
        }
    });

}
function cms_uploadimage_loadscriptfirsteditnews() {
    cms_uploadimage_loadscriptfirstnews();
    LoadAlbumNews();
    LoadAlbumNewsCombo();
    ChangeAlbumValue();
}

function ChangeAlbumValue() {
    LoadImageHgcNews();
    if ($("#cbAlbum").val() != 0) {
        $("#cms_dv_btnupload_hinhgoccanh").show();
        setTimeout(function () {
            $('#cms_uploadhinhgoccanh_btn').uploadify({
                'buttonClass': 'cms-upload-btn',
                'buttonText': 'Chọn file',
                'height': 16,
                'width': 67,
                'fileTypeDesc': 'Image Files',
                'fileSizeLimit': '8192KB',
                'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
                'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&albumid=' + $("#cbAlbum").val() + '&user=' + username + '&colorid=0&module=' + module + '&flag=2',
                'onQueueComplete': function (file) {
                    LoadImageHgcNews();
                }
            });
        }, 0);
    }
    else
        $("#cms_dv_btnupload_hinhgoccanh").hide();
}

function LoadAlbumNews() {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageAlbumNews";
    var newsId = $("#cms-uploadimage").attr('productid');
    var dataobj = { lNewsId: newsId };
    $("#cms_dvalbum").html('');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg != null && arg.length > 0) {
                $("#cms_content_album").show();
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strhtml = '<div id="media-item-hgc-' + i + '" class="media-item">';
                    strhtml += '<div style="width:572px ; float:left">';
                    strhtml += '<div class="filename new" style="width:20px; float:left">' + item.AlbumID + '</div> ';
                    strhtml += '<div class="filename new" style="width:330px; float:left">' + item.AlbumName + '</div> ';
                    strhtml += '</div>';
                    strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                    strhtml += 'onclick="cms_del_albumnews(' + item.AlbumID + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                    strhtml += '</div>';
                    $("#cms_dvalbum").append(strhtml);

                }
            }
        }
    });

}

function LoadAlbumNewsCombo() {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageAlbumNews";
    var newsId = $("#cms-uploadimage").attr('productid');
    var dataobj = { lNewsId: newsId };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg != null && arg.length > 0) {
                var strCombo = '<option value="0">--Chọn Album--</option>';
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];
                    strCombo += '<option value="' + item.AlbumID + '">' + item.AlbumName + '</option>';
                }
                $("#cbAlbum").html(strCombo);
            }
        }
    });

}

function cms_uploadimage_loadscriptfirstedit() {
    cms_uploadimage_loadscriptfirst();
    cms_Uploadimage_LoadColordv();
    LoadImageHgc(0);
    LoadImage360();
    if (siteid == 2) {
        $.ajax({
            url: tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageTypeCategory",
            type: 'GET',
            dataType: 'json',
            data: { CategoryId: categoryid, SiteId: siteid },
            success: function (result) {
                $("#cms_dv_select_sstype").html(result);
            }
        });
    }
    $('#cms_uploadhinh360_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=3',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadImage360();
        }
    });

    LoadVideo();
    //LoadImageHspGallery();
    LoadFeature(0);
    $('#cms_uploadhinhfeature_btn360x180').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn hình Feature',
        'height': 16,
        'width': 106,
        'fileTypeDesc': 'Image Files',
        'uploadLimit': 1,
        'fileSizeLimit': '8192KB',
        'multi': false,
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=5',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadFeature(360);
            $("#cms_uploadhinhfeature_btn360x180").uploadify('settings', 'ResetUploadsSuccessful', '0');
        }
    });
    if (siteid == 2) {
        $('#cms_uploadhinhfeature_btn300x300').uploadify({
            'buttonClass': 'cms-upload-btn',
            'buttonText': 'Chọn hình trang chủ',
            'height': 16,
            'width': 116,
            'fileTypeDesc': 'Image Files',
            'uploadLimit': 1,
            'fileSizeLimit': '8192KB',
            'multi': false,
            'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
            'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=6',
            'onUploadSuccess': function (file, data, response) {
                if (data != '')
                    alert(data);
                LoadFeature(300);
            }
        });
    }
    else {
        $('#cms_uploadhinhfeature_btn300x300').uploadify({
            'buttonClass': 'cms-upload-btn',
            'buttonText': 'Chọn hình chi tiết',
            'height': 16,
            'width': 106,
            'fileTypeDesc': 'Image Files',
            'uploadLimit': 1,
            'fileSizeLimit': '8192KB',
            'multi': false,
            'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
            'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=6',
            'onUploadSuccess': function (file, data, response) {
                if (data != '')
                    alert(data);
                LoadFeature(300);
            }
        });
    }
    LoadCamera();
    $('#cms_uploadhinhcamera_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=8',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadCamera();
        }
    });

    LoadOS();
    $('#cms_uploadhinhos_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=0&module=' + module + '&flag=11',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadOS();
        }
    });

    LoadCompare(4);
    $('#cms_uploadhinhsosanh_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&imagetype=4&colorid=0&module=' + module + '&flag=12',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadCompare(4);
        }
    });

    LoadBoBanHangChuan(0);
    $('#cms_uploadhinhbobanhangchuan-btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn hình bộ bán hàng chuẩn',
        'height': 16,
        'width': 170,
        'fileTypeDesc': 'Image Files',
        'uploadLimit': 1,
        'fileSizeLimit': '8192KB',
        'multi': false,
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&module=' + module + '&flag=9',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadBoBanHangChuan(0);
            $("#cms_uploadhinhbobanhangchuan-btn").uploadify('settings', 'ResetUploadsSuccessful', '0');
        }
    });
    LoadBoBanHangChuan_thongsokithuat(0);
    $('#cms_uploadhinhthongsokithuat-btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn hình thông số kỹ thuật',
        'height': 16,
        'width': 160,
        'fileTypeDesc': 'Image Files',
        'uploadLimit': 1,
        'fileSizeLimit': '8192KB',
        'multi': false,
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&module=' + module + '&flag=10',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadBoBanHangChuan_thongsokithuat(0);
            $("#cms_uploadhinhthongsokithuat-btn").uploadify('settings', 'ResetUploadsSuccessful', '0');
        }
    });

}
function cms_uploadimage_loadscriptfirstgame() {
    LoadImageHspGame(1);

    var dest = "";
    $('#file_upload').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&module=' + module + '&flag=1',
        'onUploadComplete': function (file) {
            LoadImageHspGame(1);
        }
    });

}
function cms_uploadimage_loadscriptfirstnews() {
    LoadImageHspNews(1);
    var dest = "";
    setTimeout(function () {
        $('#file_upload').uploadify({
            'buttonClass': 'cms-upload-btn',
            'buttonText': 'Chọn file',
            'height': 16,
            'width': 67,
            'fileSizeLimit': '8192KB',
            'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
            'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&module=' + module + '&flag=1',
            'onUploadComplete': function (file) {
                LoadImageHspNews(1);
            }
        });
    }, 0);
}
function cms_uploadimage_loadscriptfirst() {
    LoadImageHsp(1);

    var dest = "";
    if ($('#file_upload') != undefined)
        $('#file_upload').uploadify({
            'buttonClass': 'cms-upload-btn',
            'buttonText': 'Chọn file',
            'height': 16,
            'width': 67,
            'fileSizeLimit': '8192KB',
            'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
            'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&module=' + module + '&flag=1',
            'onUploadSuccess': function (file, data, response) {
                if(data != '')
                    alert(data);
                LoadImageHsp(1);
            }

        });

}
function cmd_uploadimage_setimage_representative(ext, name, tw, th, mw, mh, lw, lh) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/SetImageRepresentative";
    var dataobj = {
        strUserName: username, strExt: ext, strImgName: name, intTw: tw, intTh: th, intMw: mw, intMh: mh, intLw: lw, intLh: lh, intSiteId: siteid,
        intCategoryId: categoryid, lProductId: productid
    };
    $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:block');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:none');
            if (arg == "1") {
                alert("Đã lưu thành công hình đại diện (cả 3 kích thước Thumbnail , Medium , Large )");
            }
            else {
                alert("Có lỗi xảy ra");
            }
        }
    });
}
function cmd_uploadimage_setimage_representativeGame(ext, name, tw, th, mw, mh, lw, lh) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/SetImageRepresentativeGame";
    var dataobj = {
        strUserName: username, strExt: ext, strImgName: name, intTw: tw, intTh: th, intMw: mw, intMh: mh, intLw: lw, intLh: lh, intSiteId: siteid,
        intCategoryId: categoryid, lProductId: productid
    };
    $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:block');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:none');
            if (arg == "1") {
                alert("Đã lưu thành công hình đại diện");
            }
            else {
                alert("Có lỗi xảy ra");
            }
        }
    });
}
function cmd_uploadimage_setimage_representativeGameDetail(ext, name, tw, th, mw, mh, lw, lh) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/SetImageRepresentativeGameDetail";
    var dataobj = {
        strUserName: username, strExt: ext, strImgName: name, intTw: tw, intTh: th, intMw: mw, intMh: mh, intLw: lw, intLh: lh, intSiteId: siteid,
        intCategoryId: categoryid, lProductId: productid
    };
    $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:block');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:none');
            if (arg == "1") {
                alert("Đã lưu thành công hình chi tiết ");
            }
            else {
                alert("Có lỗi xảy ra");
            }
        }
    });
}
function cmd_uploadimage_setimage_representativenews(ext, name, tw, th, mw, mh, lw, lh, mobilew, mobileh) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/SetImageRepresentativeNews";
    var dataobj = {
        strUserName: username, strExt: ext, strImgName: name, intTw: tw, intTh: th, intMw: mw, intMh: mh, intLw: lw, intLh: lh, intMobileW: mobilew, intMobileH: mobileh, intSiteId: siteid,
        intCategoryId: categoryid, lProductId: productid
    };
    $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:block');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:none');
            if (arg == "1") {
                alert("Đã lưu thành công hình đại diện (cả 3 kích thước Thumbnail , Medium , Large, mobile)");
            }
            else {
                alert("Có lỗi xảy ra");
            }
        }
    });
}
function cmd_uploadimage_setimage_fulldetail(ext, name) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/SetImageDetail";
    var dataobj = {strExt: ext, strImgName: name, intSiteId: siteid, intCategoryId: categoryid, lProductId: productid};
    $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:block');
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_uploadcms_process_ft").attr('style', 'float:right;width:100px;margin-bottom:0px;display:none');
            if (arg == "1") {
                alert("Đã lưu thành công hình chi tiết");
            }
            else {
                alert("Có lỗi xảy ra");
            }
        }
    });
}

function cms_uploadimage_hovertooltip() {

    jQuery('a[rel*=tooltip]').tooltip('show');
}
function cms_uploadimage_video_hover(id) {

    $("#cms_uploadvideoitem_buttonfix_" + id).show();
}
function cms_uploadimage_video_out(id) {

    if ($("#dvcontent-uploadimage_" + id).is(':hidden')) {
        $("#cms_uploadvideoitem_buttonfix_" + id).hide();
    }
    else {
        $("#cms_uploadvideoitem_buttonfix_" + id).show();
    }
}
function LoadVideo() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListVideoUpload";

    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid };
    $("#cms_dvvideo").html('');
    $("#cms_upload_status_dv_video").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_video").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_dvvideo").show();
            }
            if (arg != null)
                $("#cms_uploadimage_spcountvideo").html(arg.length);
            else $("#cms_uploadimage_spcountvideo").html('0');
            if (arg != null && arg.length > 0) {

                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];
                    var strhtml = ' <div id="cms_videoitem_' + item.VideoId + '" class="cms_uploadvideoitem" onmouseout="cms_uploadimage_video_out(\'' + item.VideoId + '\')"  onmouseover="cms_uploadimage_video_hover(\'' + item.VideoId + '\')">';

                    strhtml += '           <div class="cms_uploadvideoitem_image">';
                    strhtml += '               <img id="cms_uploadvieo_imgvideo_' + item.VideoId + '" src="' + item.VideoImage + '" alt="' + item.Description + '">';
                    strhtml += '            </div>';
                    strhtml += '            <div class="cms_uploadvideoitem_content">';
                    strhtml += ' <p>' + item.Description + '</p>';
                    strhtml += '<p> <a id="cms_uploadvieo_linkyoutube_' + item.VideoId + '" href="' + item.VideoLink + '">' + item.VideoLink + '</a></p>';
                    strhtml += ' </div>';
                    strhtml += ' <div style="display:none" class="cms_uploadvideoitem_buttonfix" id="cms_uploadvideoitem_buttonfix_' + item.VideoId + '">';


                    strhtml += ' <input type="button" id="cms_videoitem_btndel_' + item.VideoId + '"  class="cms-upload-btn" value="Xoá" onclick="cms_uploadimage_delete_videoclick(\'' + item.VideoId + '\')"/>';
                    strhtml += ' <input type="button" id="cms_videoitem_btnedit_' + item.VideoId + '"  class="cms-upload-btn" value="Sửa" onclick="cms_toggleclickvideo(this,\'cms_uploadvieo_imgvideo_' + item.VideoId + '\',\'dvcontent-uploadimage_' + item.VideoId + '\',\'cms_uploadvieo_linkyoutube_' + item.VideoId + '\')" />';
                    strhtml += ' </div> ';
                    strhtml += ' <div class="clr"></div>';
                    strhtml += ' <div  id="dvcontent-uploadimage_' + item.VideoId + '" style="display:none;">';
                    strhtml += ' <table style="width:94%">';
                    strhtml += ' <tr>';
                    strhtml += ' <td><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/icon_youtube.png" /></td>';
                    strhtml += ' <td><input type="text" class="cms-upload-text-video-detail" id="cms_uploadimage_video_linkyoutube_' + item.VideoId + '" value="' + item.VideoLink + '" /></td>';
                    strhtml += ' </tr>';
                    strhtml += ' <tr>';
                    strhtml += ' <td>Title</td>';
                    strhtml += ' <td><input type="text" class="cms-upload-text-video-detail" id="cms_uploadimage_video_title_' + item.VideoId + '"  value="' + item.Description + '"/></td>';
                    strhtml += ' </tr>';
                    strhtml += ' <tr>';
                    strhtml += ' <td>Mã Html</td>';
                    strhtml += ' <td><textarea  cols="50" rows="6" class="cms-upload-textarea-video-detail" id="cms_uploadimage_video_mahtml_' + item.VideoId + '"  class="cms-upload-textarea-video">' + item.Html + '</textarea></td>';
                    strhtml += ' </tr>';
                    strhtml += ' <tr>';
                    strhtml += ' <td>Link hình đại diện</td>';
                    strhtml += ' <td><input type="text" class="cms-upload-text-video-detail" id="cms_uploadimage_video_linkimgyoutube_' + item.VideoId + '"  value="' + item.VideoImage + '" /></td>';
                    strhtml += ' </tr>';
                    strhtml += ' <tr>';
                    strhtml += ' <td>Thứ tự hiện thị</td>';
                    strhtml += ' <td><input type="text" class="cms-upload-text-video-detail" id="cms_uploadimage_video_orderindex_' + item.VideoId + '" style="width:23px; height:20px"  value="' + item.OrderIndex + '" /></td>';
                    strhtml += ' </tr>';
                    strhtml += ' <tr>';
                    strhtml += ' <td></td>';
                    strhtml += ' <td> <input type="button" id="cms_videoitem_btndel_' + item.VideoId + '"  class="cms-upload-btn" value="Cập nhật" onclick="cms_uploadimage_update_videoclick(\'' + item.VideoId + '\')" /></td>';
                    strhtml += ' </tr>';
                    strhtml += ' </table>';
                    strhtml += ' </div>';
                    strhtml += ' </div>';
                    $("#cms_dvvideo").append(strhtml);
                }
            }
        }
    });
}
function cms_uploadimage_delete_videoclick(videoid) {
    var str = "Bạn chắc chắn là xoá ?";

    if (confirm(str)) {

        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteUploadVideo";
        $.post(previewUrl, {
            intVideoId: videoid, strDeleteUser: username
        },
   function (data) {

       if (data == "1") {
           LoadVideo();
       }
       else {
           alert("Có lỗi xảy ra , vui lòng thử lại lần sau");
       }

   });
    }
}

function cms_uploadimage_update_videoclick(videoid) {
    var linkyoutube = "", title = "", mahtml = "", linkimgdaidien = "";
    var f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;
    linkyoutube = $("#cms_uploadimage_video_linkyoutube_" + videoid).val();
    title = $("#cms_uploadimage_video_title_" + videoid).val();
    mahtml = $("#cms_uploadimage_video_mahtml_" + videoid).val();
    linkimgdaidien = $("#cms_uploadimage_video_linkimgyoutube_" + videoid).val();
    orderindex = $("#cms_uploadimage_video_orderindex_" + videoid).val();

    if ($.trim($("#cms_uploadimage_video_linkyoutube_" + videoid).val()) == '') {
        $("#cms_uploadimage_video_linkyoutube_" + videoid).addClass('cms-upload-text-error-video');
        f1 = 1;
    }
    else {
        $("#cms_uploadimage_video_linkyoutube_" + videoid).removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_title_" + videoid).val()) == '') {
        $("#cms_uploadimage_video_title_" + videoid).addClass('cms-upload-text-error-video');
        f2 = 1;
    }
    else {
        $("#cms_uploadimage_video_title_" + videoid).removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_mahtml_" + videoid).val()) == '') {
        $("#cms_uploadimage_video_mahtml_" + videoid).addClass('cms-upload-text-error-video');
        f3 = 1;
    }
    else {
        $("#cms_uploadimage_video_mahtml_" + videoid).removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_linkimgyoutube_" + videoid).val()) == '') {
        $("#cms_uploadimage_video_linkimgyoutube_" + videoid).addClass('cms-upload-text-error-video');
        f4 = 1;
    }
    else {
        $("#cms_uploadimage_video_linkimgyoutube_" + videoid).removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_orderindex_" + videoid).val()) == '') {
        $("#cms_uploadimage_video_orderindex_" + videoid).addClass('cms-upload-text-error-video');
        f5 = 1;
    }
    else {
        $("#cms_uploadimage_video_orderindex_" + videoid).removeClass('cms-upload-text-error-video');
    }
    if (f1 == 1 || f2 == 1 || f3 == 1 || f4 == 1 || f5 == 1) {
        return;
    }
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateUploadVideo";


    $.post(previewUrl, {
        intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strLinkYouTube: linkyoutube,
        strTitle: title, strHtml: mahtml, strLinkImgDaiDien: linkimgdaidien, strUserName: username, intOrderIndex: orderindex, intVideoId: videoid
    },
   function (data) {

       if (data == "1") {
           LoadVideo();
       }
       else {
           alert("Có lỗi xảy ra , vui lòng thử lại lần sau");
       }
   });
}
function cms_uploadimage_cleartext() {
    $("#cms_uploadimage_video_linkyoutube").val('');
    $("#cms_uploadimage_video_title").val('');
    $("#cms_uploadimage_video_mahtml").val('');
    $("#cms_uploadimage_video_linkimgyoutube").val('');
    $("#cms_uploadimage_video_orderindex").val('');
}
function cms_uploadimage_videoclick() {
    var linkyoutube = "", title = "", mahtml = "", linkimgdaidien = "";
    var f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;
    linkyoutube = $("#cms_uploadimage_video_linkyoutube").val();
    title = $("#cms_uploadimage_video_title").val();
    mahtml = $("#cms_uploadimage_video_mahtml").val();
    linkimgdaidien = $("#cms_uploadimage_video_linkimgyoutube").val();
    orderindex = $("#cms_uploadimage_video_orderindex").val();

    if ($.trim($("#cms_uploadimage_video_linkyoutube").val()) == '') {
        $("#cms_uploadimage_video_linkyoutube").addClass('cms-upload-text-error-video');
        f1 = 1;
    }
    else {
        $("#cms_uploadimage_video_linkyoutube").removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_title").val()) == '') {
        $("#cms_uploadimage_video_title").addClass('cms-upload-text-error-video');
        f2 = 1;
    }
    else {
        $("#cms_uploadimage_video_title").removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_mahtml").val()) == '') {
        $("#cms_uploadimage_video_mahtml").addClass('cms-upload-text-error-video');
        f3 = 1;
    }
    else {
        $("#cms_uploadimage_video_mahtml").removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_linkimgyoutube").val()) == '') {
        $("#cms_uploadimage_video_linkimgyoutube").addClass('cms-upload-text-error-video');
        f4 = 1;
    }
    else {
        $("#cms_uploadimage_video_linkimgyoutube").removeClass('cms-upload-text-error-video');
    }
    if ($.trim($("#cms_uploadimage_video_orderindex").val()) == '') {
        $("#cms_uploadimage_video_orderindex").addClass('cms-upload-text-error-video');
        f5 = 1;
    }
    else {
        $("#cms_uploadimage_video_orderindex").removeClass('cms-upload-text-error-video');
    }
    if (f1 == 1 || f2 == 1 || f3 == 1 || f4 == 1 || f5 == 1) {
        return;
    }
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/InsertUploadVideo";

    var dataobj = {
        intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strLinkYouTube: linkyoutube,
        strTitle: title, strHtml: mahtml, strLinkImgDaiDien: linkimgdaidien, strUserName: username, intOrderIndex: orderindex
    };
    $.post(previewUrl, {
        intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strLinkYouTube: linkyoutube,
        strTitle: title, strHtml: mahtml, strLinkImgDaiDien: linkimgdaidien, strUserName: username, intOrderIndex: orderindex
    },
   function (data) {
       if (parseInt(data) > 0) {
           cms_uploadimage_cleartext();
           LoadVideo();
       }
       else {
           alert("Có lỗi xảy ra , vui lòng thử lại lần sau");
       }
   });

}
function cms_camera_videolink_click() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/InsertVideoCamera";
    var dataobj = { strVideoLink: $("#cms_camera_videolink_txt").val(), siteId: siteid, strCategoryId: categoryid, strProductId: productid, strUserName: username };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi! vui lòng thực hiện lại lần sau");
            }
            else {
                $("#cms_camera_videolink_txt").val("");
                LoadCamera();
            }
        }
    });
}
function cms_sosanh_videolink_click() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/InsertVideoCompare";
    var dataobj = { strVideoLink: $("#cms_uploadvideososanh_txt").val(), siteId: siteid, strCategoryId: categoryid, strProductId: productid, strUserName: username };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi! vui lòng thực hiện lại lần sau");
            }
            else {
                $("#cms_uploadvideososanh_txt").val("");
                LoadCompare(12);
            }
        }
    });
}
function cms_hgc_videolink_click() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/InsertVideoHgc";
    var dataobj = { strVideoLink: $("#cms_hgc_videolink_txt").val(), siteId: siteid, strCategoryId: categoryid, strProductId: productid, strUserName: username, colorId: $("#cms_dv_selectcolor_hinhgoccanh").val() };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi! vui lòng thực hiện lại lần sau");
            }
            else {
                $("#cms_hgc_videolink_txt").val("");
                LoadImageHgc($("#cms_dv_selectcolor_hinhgoccanh").val());
            }
        }
    });
}

function LoadFeature(size) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUploadFeature";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: size, intColorId: 0, strUserName: username };
    if (size == 360) {
        $("#cms_dvhinhfeature360").html('');
        $("#cms_upload_status_dv_feature").show();
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                $("#cms_upload_status_dv_feature").hide();
                if (arg != null && arg.length > 0) {
                    $("#cms_dvhinhfeature360").show();

                    var item = arg[0];
                    var strhtml = '   <div id="media-item-feature360" >';
                    strhtml += '          <div style="float:left;width:250px">';
                    strhtml += ' <img id="img-feature360" style="visibility:visible;" class="toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt=""  >';

                    strhtml += '<div class="filename new" style="clear:both">' + item.Picture;
                    if (item.Picture != '') {
                        strhtml += ' <span style=\"cursor:pointer\"';
                        strhtml += ' onclick="cms_feature_del(' + productid + ',\'360\',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                    }
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhfeature360").append(strhtml);
                }
            }
        });
    }
    else if (size == 300) {
        $("#cms_dvhinhfeature300").html('');
        $("#cms_upload_status_dv_feature").show();
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                $("#cms_upload_status_dv_feature").hide();
                if (arg != null && arg.length > 0) {
                    $("#cms_dvhinhfeature300").show();

                    var item = arg[0];
                    var strhtml = '   <div id="media-item-feature300">';
                    strhtml += '          <div style="width:210px ; float:left">';
                    strhtml += ' <img id="img-feature300" style="visibility:visible;width:180px" class="toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';


                    strhtml += '<div class="filename new" style="width:210px; float:left">' + item.Picture;
                    if (item.Picture != '') {
                        strhtml += ' <span style=\"cursor:pointer\"';
                        strhtml += ' onclick="cms_feature_del(' + productid + ',\'300\',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                    }
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhfeature300").append(strhtml);
                }
            }
        });
    }
    else if (size == 0) {

        $("#cms_dvhinhfeature360").html('');
        $("#cms_upload_status_dv_feature").show();
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                $("#cms_upload_status_dv_feature").hide();
                if (arg != null && arg.length > 0) {
                    $("#cms_dvhinhfeature360").show();

                    var item = arg[0];
                    var strhtml = '   <div id="media-item-feature360" >';
                    strhtml += '          <div style="float:left;width:250px">';
                    strhtml += ' <img id="img-feature360" style="visibility:visible" class="toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="" >';

                    strhtml += '<div class="filename new" style="clear:both">' + item.Picture;
                    if (item.Picture != '') {
                        strhtml += ' <span style=\"cursor:pointer\"';
                        strhtml += ' onclick="cms_feature_del(' + productid + ',\'360\',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                    }
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhfeature360").append(strhtml);
                }
            }
        });


        $("#cms_dvhinhfeature300").html('');

        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                $("#cms_upload_status_dv_feature").hide();
                if (arg != null && arg.length > 0) {
                    $("#cms_dvhinhfeature300").show();

                    var item = arg[1];
                    var strhtml = '   <div id="media-item-feature300">';
                    strhtml += '          <div style="width:210px ; float:left">';
                    strhtml += ' <img id="img-feature300" style="visibility:visible;width:180px" class="toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="" >';

                    strhtml += '<div class="filename new" style="width:210px; float:left">' + item.Picture;
                    if (item.Picture != '') {
                        strhtml += ' <span style=\"cursor:pointer\"';
                        strhtml += ' onclick="cms_feature_del(' + productid + ',\'300\',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                    }
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhfeature300").append(strhtml);
                }
            }
        });
    }
}
function LoadBoBanHangChuan(size) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUploadBoBanHangChuan";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strUserName: username };

    $("#cms_dvhinhbobanhangchuan").html('');
    $("#cms_upload_status_dv_bobanhangchuan").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_bobanhangchuan").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_dvhinhbobanhangchuan").show();

                var item = arg[0];
                var strhtml = '   <div id="media-item-bobanhangchuan" >';
                strhtml += '          <div style="width:210px;float:left">';
                strhtml += ' <img id="img-bobanhangchuan" style="visibility:visible;width:180px" class="toggle" src="' + item.SourceView + '"';
                strhtml += '     alt=""  >';

                strhtml += '<div class="filename new" style="width:210px; float:left">' + item.Picture;
                if (item.Picture != '') {
                    strhtml += ' <span style=\"cursor:pointer\"';
                    strhtml += ' onclick="cms_bobanhangchuan_del(' + productid + ',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                }
                strhtml += '</div>';
                strhtml += '</div>';
                $("#cms_dvhinhbobanhangchuan").append(strhtml);
            }
        }
    });

}
function LoadBoBanHangChuan_thongsokithuat(size) {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUploadBoBanHangChuan_thongsokithuat";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strUserName: username };

    $("#cms_dvhinhthongsokithuat").html('');
    $("#cms_upload_status_dv_bobanhangchuan").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_bobanhangchuan").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_dvhinhthongsokithuat").show();

                var item = arg[0];
                var strhtml = '   <div id="media-item-bobanhangchuan" >';
                strhtml += '          <div style="width:210px ;float:left">';
                strhtml += ' <img id="img-bobanhangchuan" style="visibility:visible;width:180px" class="toggle" src="' + item.SourceView + '"';
                strhtml += '     alt=""  >';

                strhtml += '<div class="filename new" style="width:210px; float:left">' + item.Picture;
                if (item.Picture != '') {
                    strhtml += ' <span style=\"cursor:pointer\"';
                    strhtml += ' onclick="cms_bobanhangchuan_thongsokithuat_del(' + productid + ',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';
                }
                strhtml += '</div>';
                strhtml += '</div>';
                $("#cms_dvhinhthongsokithuat").append(strhtml);
            }
        }
    });

}
function LoadImage360() {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 3, intColorId: 0, strUserName: username };
    $("#cms_dvhinh360").html('');
    $("#cms_upload_status_dv_360").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_360").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_content_hinh360").show();
            }
            if (arg != null)
                $("#cms_uploadimage_spcounth360").html(arg.length);
            else $("#cms_uploadimage_spcounth360").html('0');
            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '   <div id="media-item-h360-' + i + '" class="media-item">';
                    strhtml += '          <div style="width:580px ; float:left">';
                    strhtml += ' <img id="img-h360-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';

                    strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-h360-' + i + '\')">' + item.Picture + '</div> ';
                    strhtml += '</div>';
                    //strhtml += '<div style="float:left;margin-top:8px ; width:205px;">' + item.ColorName + '</div>';
                    //strhtml += '<div class="menu_order" style="margin-right:2px ; margin-top:8px"><input type="text" class="disabled" disabled id="txtdisplayorder_list_h360_' + item.PictureId + '" style="width:23px; height:18px" value="' + item.DisplayOrder + '"/></div>';

                    strhtml += '<span class="toggle describe-toggle-on" style="float:left;margin-right:9px" ';
                    strhtml += 'onclick="cms_update_h360_del_detail(' + item.PictureId + ',\'' + item.Picture + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none"';
                    strhtml += 'onclick="cms_toggleclick(this,\'img-h360-' + i + '\')">Show</span>';


                    strhtml += '<div class="dvcontent-uploadimage"';
                    strhtml += 'data-role="collapsible" style="display: none">';
                    strhtml += '<table width="100%">';
                    strhtml += '<tbody>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<p>';
                    strhtml += 'File name: ' + item.Picture + '</p>';
                    strhtml += '<p>';
                    strhtml += 'File type: ' + item.FileType + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';



                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Description';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_h360_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Thứ tự hiển thị';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text"  id="cms_uploadimage_txtdisplayorder_detail_h360_' + item.PictureId + '" style="width:23px; height:18px;" value="' + item.DisplayOrder + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Kích hoạt';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    var checked = '';
                    if (item.IsActived == true) {
                        checked = 'checked';
                    }

                    strhtml += '<input id="cms_uploadimage_chkisactived_detail_h360_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td>';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<span>';
                    strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_h360_detail(' + item.PictureId + ')"';
                    strhtml += '    style="line-height: 16px"></span>&nbsp;';
                    //                strhtml += '<span>';
                    //                strhtml += '<input type="button" class="cms-upload-btn" value="Xoá" onclick="cms_update_h360_del_detail(' + item.PictureId + ')"';
                    //                strhtml += '    style="line-height: 16px"></span>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '</tbody>';
                    strhtml += '</table>';
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinh360").append(strhtml);

                }
            }
        }
    });

}

function cms_bobanhangchuan_thongsokithuat_del(idproduct, NameImage) {
    var str = "Bạn chắc chắn muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteBoBanHangChuan_thongsokithuat";
        $.post(previewUrl, { intSiteId: siteid, strProductId: productid },
    function (data) {
        if (data == "0") {
            alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
        }
        else {
            LoadBoBanHangChuan_thongsokithuat(0);
        }
    });
    }
}
function cms_bobanhangchuan_del(idproduct, NameImage) {
    var str = "Bạn chắc chắn muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteBoBanHangChuan";
        $.post(previewUrl, { intSiteId: siteid, strProductId: productid },
    function (data) {
        if (data == "0") {
            alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
        }
        else {
            LoadBoBanHangChuan(0);
        }
    });
    }
}
function cms_feature_del(idproduct, flag, NameImage) {
    var str = "Bạn chắc chắn muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteFeature";
        $.post(previewUrl, { intSiteId: siteid, strImage: NameImage, strCate: categoryid, strProductId: productid, intFlag: flag },
    function (data) {
        if (data == "0") {
            alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
        }
        else {
            if (flag == 300)
                LoadFeature(300);
            else if (flag == 360)
                LoadFeature(360);
        }
    });
    }
}
function cms_update_h360_del_detail(idPicture, NameImage) {

    var str = "Bạn chắc chắn muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/Delete360HinhDetail";
        $.post(previewUrl, { lPictureId: idPicture, strUserName: username, strImage: NameImage, strCate: categoryid, strProductId: productid },
    function (data) {
        if (data == "0") {
            alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
        }
        else {
            LoadImage360();
        }
    });
    }
}
function cms_update_h360_del_all() {

    var str = "Bạn chắc chắn muốn xoá tất cả hình?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/Delete360HinhAll";
        $.post(previewUrl, { strUserName: username, strCate: categoryid, strProductId: productid, strSiteId: siteid },
    function (data) {
        if (data == "0") {
            alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
        }
        else {
            LoadImage360();
        }
    });
    }
}
function cms_update_h360_detail(idPicture) {
    var vdisplayorder = 0;
    if ($.trim($("#cms_uploadimage_txtdisplayorder_detail_h360_" + idPicture).val()) == '') {
        $("#cms_uploadimage_txtdisplayorder_detail_h360_" + idPicture).addClass('cms-upload-text-error-video');
        return;
    }
    else {
        $("#cms_uploadimage_txtdisplayorder_detail_h360_" + idPicture).removeClass('cms-upload-text-error-video');
    }
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinh360Detail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_h360_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_h360_" + idPicture).val() == "on" ? 1 : 0,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_h360_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadImage360();
            }
        }
    });


}
function cms_update_hinhgoccanh_del_detail(idPicture) {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelHinhGocCanhDetail";
        $.post(previewUrl,
        { lPictureId: idPicture, strUserName: username },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadImageHgc(0);
            }
        });
    }
}
function cms_update_hinhcamera_del_detail(idPicture) {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelHinhGocCanhDetail";
        $.post(previewUrl,
        { lPictureId: idPicture, strUserName: username },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadCamera();
            }
        });
    }
}
function cms_update_hinhos_del_detail(idPicture) {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelHinhGocCanhDetail";
        $.post(previewUrl,
        { lPictureId: idPicture, strUserName: username },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadOS();
            }
        });
    }
}
function cms_update_hinhss_del_detail(idPicture) {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelHinhGocCanhDetail";
        $.post(previewUrl,
        { lPictureId: idPicture, strUserName: username },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadCompare($("#cms_dv_select_sstype").val());
            }
        });
    }
}
function cms_update_hinhgoccanh_del_all() {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelAllHinhGocCanh";
        $.post(previewUrl,
        { iProductId: productid, strUserName: username, iSiteId: siteid },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadImageHgc(0);
            }
        });
    }
}
function cms_update_hinhgoccanhnews_del_detail(idPicture) {

    var str = "Bạn có chắc muốn xoá ?";
    if (confirm(str)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DelHinhGocCanhNewsDetail";
        $.post(previewUrl,
        { lPictureId: idPicture, strUserName: username },
        function (data) {

            if (data == "0") {
                alert("Có lỗi xảy ra , vui lòng thử lại lần sau");

            }
            else {
                LoadImageHgcNews();
            }
        });
    }
}

function cms_camera_title_update() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateGalleryTitle";
    var dataobj = {
        strTitle: $("#cms_camera_title_txt").val(), siteId: siteid, strProductId: productid, strUserName: username, imageType: 2
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi! vui lòng thực hiện lại lần sau");
            }
            else {
                alert("Cập nhật tiêu đề thành công");
            }
        }
    });
}

function cms_os_title_update() {
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateGalleryTitle";
    var dataobj = {
        strTitle: $("#cms_os_title_txt").val(), siteId: siteid, strProductId: productid, strUserName: username, imageType: 3
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi! vui lòng thực hiện lại lần sau");
            }
            else {
                alert("Cập nhật tiêu đề thành công");
            }
        }
    });
}

function cms_update_hinhgoccanh_detail(idPicture) {
    var vdisplayorder = 0;
    var z = $("#cms_uploadimage_selectcolor_hinhgoccanh_detail_" + idPicture + "").val();
    if (z == 0) {
        $("#cms_uploadimage_selectcolor_hinhgoccanh_detail_" + idPicture).addClass('cms-upload-text-error');
        return;
    }
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinhGocCanhDetail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_" + idPicture).val() == "on" ? 1 : 0, strColorId: z,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadImageHgc(0);
            }
        }
    });


}
function cms_update_hinhcamera_detail(idPicture) {
    var vdisplayorder = 0;
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinhGocCanhDetail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_" + idPicture).val() == "on" ? 1 : 0, strColorId: 0,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadCamera();
            }
        }
    });


}
function cms_update_hinhos_detail(idPicture) {
    var vdisplayorder = 0;
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinhGocCanhDetail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_" + idPicture).val() == "on" ? 1 : 0, strColorId: 0,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadOS();
            }
        }
    });


}
function cms_update_hinhss_detail(idPicture) {
    var vdisplayorder = 0;
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinhGocCanhDetail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_" + idPicture).val() == "on" ? 1 : 0, strColorId: 0,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadCompare($("#cms_dv_select_sstype").val());
            }
        }
    });


}
function cms_update_hinhgoccanhnews_detail(idPicture) {
    var vdisplayorder = 0;

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/UpdateHinhGocCanhNewsDetail";
    var dataobj = {
        lPictureId: idPicture, strDescription: $("#cms_uploadimage_txtdescription_detail_" + idPicture).val(),
        strIsActived: $("#cms_uploadimage_chkisactived_detail_" + idPicture).val() == "on" ? 1 : 0,
        strDisplayOrder: $("#cms_uploadimage_txtdisplayorder_detail_" + idPicture).val(),
        strUserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadImageHgcNews();
            }
        }
    });


}

function LoadImageHgc(colorid) {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";

    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 2, intColorId: colorid, strUserName: username };
    $("#cms_dvhinhgoccanh").html('');
    $("#cms_upload_status_dv_hgc").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_hgc").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_content_hinhgoccanh").show();
            }
            else {
                $("#cms_upload_image_listcolorcurrent").html('');
            }
            if (colorid == 0) {
                if (arg != null)
                    $("#cms_uploadimage_spcounthgc").html(arg.length);
                else $("#cms_uploadimage_spcounthgc").html('0');
            }
            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '   <div id="media-item-hgc-' + i + '" class="media-item">';
                    strhtml += '          <div style="width:460px; float:left">';
                    strhtml += ' <img id="img-hgc-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';

                    strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-hgc-' + i + '\')">' + item.Picture + '</div> ';
                    strhtml += '</div>';
                    strhtml += '<div style="float:left;margin-top:8px ; width:125px;">' + item.ColorName + '</div>';
                    //strhtml += '<div class="menu_order" style="margin-right:2px; margin-top:8px"><input type="text" class="disabled" disabled id="txtdisplayorder_list_' + item.PictureId + '" style="width:23px; height:18px" value="' + item.DisplayOrder + '"/></div>';

                    strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                    strhtml += 'onclick="cms_update_hinhgoccanh_del_detail(' + item.PictureId + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none" ';
                    strhtml += 'onclick="cms_toggleclick(this,\'img-hgc-' + i + '\')">Show</span>';


                    strhtml += '<div class="dvcontent-uploadimage"';
                    strhtml += 'data-role="collapsible" style="display: none">';
                    strhtml += '<table width="100%">';
                    strhtml += '<tbody>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    if (item.VideoLink == '') {
                        strhtml += '<p>';
                        strhtml += 'File name: ' + item.Picture + '</p>';
                        strhtml += '<p>';
                        strhtml += 'File type: ' + item.FileType + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    } else {
                        strhtml += '<p>';
                        strhtml += 'Video URL: <a href="' + item.VideoLink + '" target="_blank">' + item.VideoLink + '</a></p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                    }
                    strhtml += '</td>';
                    strhtml += '</tr>';



                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Description';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Màu';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<select id="cms_uploadimage_selectcolor_hinhgoccanh_detail_' + item.PictureId + '" style="float: left">';
                    strhtml += '<option value="-1">Chọn màu</option>';
                    strhtml += '</select>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Thứ tự hiển thị';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdisplayorder_detail_' + item.PictureId + '" style="width:23px; height:18px;" value="' + item.DisplayOrder + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Kích hoạt';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    var checked = '';
                    if (item.IsActived == true) {
                        checked = 'checked';
                    }

                    strhtml += '<input id="cms_uploadimage_chkisactived_detail_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td>';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<span>';
                    strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_hinhgoccanh_detail(' + item.PictureId + ')"';
                    strhtml += '    style="line-height: 16px"></span>&nbsp;';
                    //strhtml += '<span>';
                    //                strhtml += '<input type="button" class="cms-upload-btn" value="Xoá" onclick="cms_update_hinhgoccanh_del_detail(' + item.PictureId + ')"';
                    //                strhtml += '    style="line-height: 16px"></span>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '</tbody>';
                    strhtml += '</table>';
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhgoccanh").append(strhtml);
                    cms_Uploadimage_LoadColordv_detail('cms_uploadimage_selectcolor_hinhgoccanh_detail_' + item.PictureId + '', '' + item.ColorId + '');
                    if (colorid == 0) {
                        $("#cms_upload_image_listcolorcurrent").html('');
                        $("#cms_upload_image_listcolorcurrent").html(item.ListColorCurrent);
                    }
                }
            }
        }
    });

}
function LoadImageHgcNews() {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUploadHgcNews";
        siteid = $("#cms-uploadimage").attr('siteid');
        var dataobj = { intSiteId: siteid, lNewsId: productid, strUserName: username, intAlbumId: $("#cbAlbum").val() };
        $("#cms_dvhinhgoccanh").html('');
        $("#cms_upload_status_dv_hgc").show();
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                $("#cms_upload_status_dv_hgc").hide();
                if (arg != null && arg.length > 0) {
                    $("#cms_content_hinhgoccanh").show();
                }


                if (arg != null && arg.length > 0) {
                    for (var i = 0; i < arg.length; i++) {
                        var item = arg[i];

                        var strimge = '"' + item.SourceUpload + '"';

                        var strhtml = '   <div id="media-item-hgc-' + i + '" class="media-item">';
                        strhtml += '          <div style="width:412px ; float:left">';
                        strhtml += ' <img id="img-hgc-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                        strhtml += '     alt="">';

                        strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-hgc-' + i + '\')">' + item.Picture + '</div> ';
                        strhtml += '</div>';
                        strhtml += '<div style="float:left;margin-top:8px ; width:205px;"></div>';
                        //strhtml += '<div class="menu_order" style="margin-right:2px; margin-top:8px"><input type="text" class="disabled" disabled id="txtdisplayorder_list_' + item.PictureId + '" style="width:23px; height:18px" value="' + item.DisplayOrder + '"/></div>';

                        strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                        strhtml += 'onclick="cms_update_hinhgoccanhnews_del_detail(' + item.PictureId + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                        strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none" ';
                        strhtml += 'onclick="cms_toggleclick(this,\'img-hgc-' + i + '\')">Show</span>';


                        strhtml += '<div class="dvcontent-uploadimage"';
                        strhtml += 'data-role="collapsible" style="display: none">';
                        strhtml += '<table width="100%">';
                        strhtml += '<tbody>';
                        strhtml += '<tr>';
                        strhtml += '<td class="td-content-uploadimage">';
                        strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                        strhtml += 'alt="">';
                        strhtml += '</td>';
                        strhtml += '<td>';
                        strhtml += '<p>';
                        strhtml += 'File name: ' + item.Picture + '</p>';
                        strhtml += '<p>';
                        strhtml += 'File type: ' + item.FileType + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                        strhtml += '</td>';
                        strhtml += '</tr>';



                        strhtml += '<tr>';
                        strhtml += '<td class="td-content-uploadimage">';
                        strhtml += 'Description';
                        strhtml += '</td>';
                        strhtml += '<td>';
                        strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                        strhtml += '</td>';
                        strhtml += '</tr>';

                        strhtml += '<tr>';
                        strhtml += '<td class="td-content-uploadimage">';
                        strhtml += 'Thứ tự hiển thị';
                        strhtml += '</td>';
                        strhtml += '<td>';
                        strhtml += '<input type="text" id="cms_uploadimage_txtdisplayorder_detail_' + item.PictureId + '" style="width:23px; height:18px;" value="' + item.DisplayOrder + '" />';
                        strhtml += '</td>';
                        strhtml += '</tr>';
                        strhtml += '<tr>';
                        strhtml += '<td class="td-content-uploadimage">';
                        strhtml += 'Kích hoạt';
                        strhtml += '</td>';
                        strhtml += '<td>';
                        var checked = '';
                        if (item.IsActived == true) {
                            checked = 'checked';
                        }

                        strhtml += '<input id="cms_uploadimage_chkisactived_detail_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                        strhtml += '</td>';
                        strhtml += '</tr>';
                        strhtml += '<tr>';
                        strhtml += '<td>';
                        strhtml += '</td>';
                        strhtml += '<td>';
                        strhtml += '<span>';
                        strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_hinhgoccanhnews_detail(' + item.PictureId + ')"';
                        strhtml += '    style="line-height: 16px"></span>&nbsp;';

                        strhtml += '</td>';
                        strhtml += '</tr>';
                        strhtml += '</tbody>';
                        strhtml += '</table>';
                        strhtml += '</div>';
                        strhtml += '</div>';
                        $("#cms_dvhinhgoccanh").append(strhtml);

                    }
                }
            }
        });
}
function LoadCamera() {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 8, intColorId: 0, strUserName: username };
    $("#cms_dvhinhcamera").html('');
    $("#cms_upload_status_dv_camera").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_camera").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_content_hinhcamera").show();
                $("#cms_uploadimage_spcountcamera").html(arg.length);
            }
            else {
                $("#cms_uploadimage_spcountcamera").html('0');
            }

            if (arg != null && arg.length > 0) {
                $("#cms_camera_title_txt").val(arg[0].Title);
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '   <div id="media-item-hgc-' + i + '" class="media-item">';
                    strhtml += '          <div style="width:580px ; float:left">';
                    strhtml += ' <img id="img-hgc-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';

                    strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-hgc-' + i + '\')">' + item.Picture + '</div> ';
                    strhtml += '</div>';
                    //strhtml += '<div class="menu_order" style="margin-right:2px; margin-top:8px"><input type="text" class="disabled" disabled id="txtdisplayorder_list_' + item.PictureId + '" style="width:23px; height:18px" value="' + item.DisplayOrder + '"/></div>';

                    strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                    strhtml += 'onclick="cms_update_hinhcamera_del_detail(' + item.PictureId + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none" ';
                    strhtml += 'onclick="cms_toggleclick(this,\'img-hgc-' + i + '\')">Show</span>';


                    strhtml += '<div class="dvcontent-uploadimage"';
                    strhtml += 'data-role="collapsible" style="display: none">';
                    strhtml += '<table width="100%">';
                    strhtml += '<tbody>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    if (item.VideoLink == '') {
                        strhtml += '<p>';
                        strhtml += 'File name: ' + item.Picture + '</p>';
                        strhtml += '<p>';
                        strhtml += 'File type: ' + item.FileType + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    }
                    else {
                        strhtml += '<p>';
                        strhtml += 'Video URL: ' + item.VideoLink + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                    }
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Description';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Thứ tự hiển thị';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdisplayorder_detail_' + item.PictureId + '" style="width:25px; height:23px;" value="' + item.DisplayOrder + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Kích hoạt';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    var checked = '';
                    if (item.IsActived == true) {
                        checked = 'checked';
                    }

                    strhtml += '<input id="cms_uploadimage_chkisactived_detail_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td>';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<span>';
                    strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_hinhcamera_detail(' + item.PictureId + ')"';
                    strhtml += '    style="line-height: 16px"></span>&nbsp;';

                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '</tbody>';
                    strhtml += '</table>';
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhcamera").append(strhtml);

                }
            }
        }
    });

}
function LoadOS() {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 11, intColorId: 0, strUserName: username };
    $("#cms_dvhinhos").html('');
    $("#cms_upload_status_dv_os").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_os").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_content_hinhos").show();
                $("#cms_uploadimage_spcountos").html(arg.length);
            }
            else {
                $("#cms_uploadimage_spcountos").html('0');
            }

            if (arg != null && arg.length > 0) {
                $("#cms_os_title_txt").val(arg[0].Title);
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '   <div id="media-item-hgc-' + i + '" class="media-item">';
                    strhtml += '          <div style="width:580px ; float:left">';
                    strhtml += ' <img id="img-hgc-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';

                    strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-hgc-' + i + '\')">' + item.Picture + '</div> ';
                    strhtml += '</div>';
                    //strhtml += '<div class="menu_order" style="margin-right:2px; margin-top:8px"><input type="text" class="disabled" disabled id="txtdisplayorder_list_' + item.PictureId + '" style="width:23px; height:18px" value="' + item.DisplayOrder + '"/></div>';

                    strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                    strhtml += 'onclick="cms_update_hinhos_del_detail(' + item.PictureId + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none" ';
                    strhtml += 'onclick="cms_toggleclick(this,\'img-hgc-' + i + '\')">Show</span>';


                    strhtml += '<div class="dvcontent-uploadimage"';
                    strhtml += 'data-role="collapsible" style="display: none">';
                    strhtml += '<table width="100%">';
                    strhtml += '<tbody>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<p>';
                    strhtml += 'File name: ' + item.Picture + '</p>';
                    strhtml += '<p>';
                    strhtml += 'File type: ' + item.FileType + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';



                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Description';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Thứ tự hiển thị';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdisplayorder_detail_' + item.PictureId + '" style="width:25px; height:23px;" value="' + item.DisplayOrder + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Kích hoạt';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    var checked = '';
                    if (item.IsActived == true) {
                        checked = 'checked';
                    }

                    strhtml += '<input id="cms_uploadimage_chkisactived_detail_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td>';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<span>';
                    strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_hinhos_detail(' + item.PictureId + ')"';
                    strhtml += '    style="line-height: 16px"></span>&nbsp;';

                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '</tbody>';
                    strhtml += '</table>';
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhos").append(strhtml);

                }
            }
        }
    });

}
function LoadCompare(imageType) {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 12, intColorId: imageType, strUserName: username };
    $("#cms_dvhinhsosanh").html('');
    $("#cms_upload_status_dv_hss").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_hss").hide();
            if (arg != null && arg.length > 0) {
                $("#cms_content_hinhsosanh").show();
                $("#cms_uploadimage_spcountss").html(arg.length);
            }
            else {
                $("#cms_uploadimage_spcountss").html('0');
            }

            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '   <div id="media-item-hgc-' + i + '" class="media-item">';
                    strhtml += '          <div style="width:412px ; float:left">';
                    strhtml += ' <img id="img-hgc-' + i + '" style="visibility:visible" class="pinkynail toggle" src="' + item.SourceView + '"';
                    strhtml += '     alt="">';

                    strhtml += '<div class="filename new" style="width:330px; float:left" onclick="cms_toggleclickdiv(this,\'img-hgc-' + i + '\')">' + item.Picture + '</div> ';
                    strhtml += '</div>';
                    strhtml += '<div style="float:left;margin-top:8px ; width:205px;"></div>';
                    strhtml += '<div style="float:left;margin-right:2px; width:160px">' + $("#cms_dv_select_sstype option:selected").text() + '</div>';

                    strhtml += '<span class="toggle describe-toggle-on" style="float:left; margin-right:9px" ';
                    strhtml += 'onclick="cms_update_hinhss_del_detail(' + item.PictureId + ')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></span>';

                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" style="margin-right:9px;display:none" ';
                    strhtml += 'onclick="cms_toggleclick(this,\'img-hgc-' + i + '\')">Show</span>';


                    strhtml += '<div class="dvcontent-uploadimage"';
                    strhtml += 'data-role="collapsible" style="display: none">';
                    strhtml += '<table width="100%">';
                    strhtml += '<tbody>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    if (imageType == 12) {
                        strhtml += '<p>';
                        strhtml += 'Video URL: <a href="' + item.VideoLink + '" target="_blank">' + item.VideoLink + '</a></p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                    }
                    else {
                        strhtml += '<p>';
                        strhtml += 'File name: ' + item.Picture + '</p>';
                        strhtml += '<p>';
                        strhtml += 'File type: ' + item.FileType + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Upload date: ' + item.Uploaddatelabel + '</p>';
                        strhtml += '<p>';
                        strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    }
                    strhtml += '</td>';
                    strhtml += '</tr>';



                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Description';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdescription_detail_' + item.PictureId + '"  class="cms-upload-text" value="' + item.Description + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Thứ tự hiển thị';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" id="cms_uploadimage_txtdisplayorder_detail_' + item.PictureId + '" style="width:23px; height:18px;" value="' + item.DisplayOrder + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Kích hoạt';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    var checked = '';
                    if (item.IsActived == true) {
                        checked = 'checked';
                    }

                    strhtml += '<input id="cms_uploadimage_chkisactived_detail_' + item.PictureId + '" type="checkbox" ' + checked + '/>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td>';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<span>';
                    strhtml += '<input type="button" class="cms-upload-btn" value="Cập nhật" onclick="cms_update_hinhss_detail(' + item.PictureId + ')"';
                    strhtml += '    style="line-height: 16px"></span>&nbsp;';

                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '</tbody>';
                    strhtml += '</table>';
                    strhtml += '</div>';
                    strhtml += '</div>';
                    $("#cms_dvhinhsosanh").append(strhtml);

                }
            }
        }
    });

}
function cms_sstype_change() {
    var imageType = $("#cms_dv_select_sstype").val();
    LoadCompare(imageType);
    if (imageType == 12) {
        $("#cms_dv_btnupload_hinhsosanh").hide();
        $("#cms_dv_btnupload_videososanh").show();
    }
    else {
        cms_loadcompareagain(imageType);
        $("#cms_dv_btnupload_hinhsosanh").show();
        $("#cms_dv_btnupload_videososanh").hide();
    }
    $("object").css("left", "0");
    $("object").css("width", "85px");
    $("object").css("height", "24px");
}
function cms_loadcompareagain(imageType) {
    $('#cms_uploadhinhsosanh_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',
        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&imagetype=' + imageType + '&colorid=0&module=' + module + '&flag=12',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadCompare(imageType);
        }
    });
}
var vcolorid_hinhgoccanh = 0;
function cms_ddcolor_change(id_ddcolor, cms_dv_btnupload) {
    //    var x = document.getElementById("" + id_ddcolor + "").selectedIndex;
    //    var y = document.getElementById("" + id_ddcolor + "").options;
    //if (y[x].index == 0) {
    var z = $("#" + id_ddcolor + "").val();

    if (z == 0) {
        $("#" + cms_dv_btnupload).hide();
        $("#cms_dv_video_hgc").hide();
    }
    else {
        $("#" + cms_dv_btnupload).show();
        $("#cms_dv_video_hgc").show();
        vcolorid_hinhgoccanh = z;
    }


    cms_loadagainscript(z);

    $("object").css("left", "0");
    $("object").css("width", "85px");
    $("object").css("height", "24px");
}
function cms_loadagainscript(z) {
    $('#cms_uploadhinhgoccanh_btn').uploadify({
        'buttonClass': 'cms-upload-btn',
        'buttonText': 'Chọn file',
        'height': 16,
        'width': 67,
        'fileTypeDesc': 'Image Files',

        'fileSizeLimit': '8192KB',
        'swf': '' + tgdd_cms_urlroot + '/Scripts/uploadify/uploadify.swf',
        'uploader': '' + tgdd_cms_urlroot + '/uploadify.ashx?siteid=' + siteid + '&categoryid=' + categoryid + '&productid=' + productid + '&user=' + username + '&colorid=' + z + '&module=' + module + '&flag=2',
        'onUploadSuccess': function (file, data, response) {
            if (data != '')
                alert(data);
            LoadImageHgc(0);
        }
    });
}
var listcolor = null;

function cms_Uploadimage_LoadColordv() {
    if (listcolor == null) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListColorFordv";
        $("#cms_dv_selectcolor_hinhgoccanh").html('');
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            success: function (arg) {
                if (arg != null && arg.length > 0) {
                    listcolor = arg;
                    var strhtml = '';
                    for (var i = 0; i < arg.length; i++) {
                        var item = arg[i];
                        strhtml += ' <option value="' + item.Id + '">' + item.Name + '</option>';
                    }
                    strhtml += '';
                    $("#cms_dv_selectcolor_hinhgoccanh").html(strhtml);
                }
            }
        });
    }
    else {
        var strhtml = '';
        for (var i = 0; i < listcolor.length; i++) {
            var item = listcolor[i];
            strhtml += ' <option value="' + item.Id + '">' + item.Name + '</option>';
        }
        strhtml += '';
        $("#cms_dv_selectcolor_hinhgoccanh").html(strhtml);
    }

}
function cms_Uploadimage_LoadColordv_detail(idselect, idcolor) {

    if (listcolor == null) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListColorFordv";
        $("#" + idselect).html('');
        var strselect = '';
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            success: function (arg) {
                if (arg != null && arg.length > 0) {
                    var strhtml = '';
                    for (var i = 0; i < arg.length; i++) {
                        var item = arg[i];

                        if (item.Id == idcolor) {
                            strselect = 'selected';
                        }
                        else {
                            strselect = '';
                        }
                        strhtml += ' <option value="' + item.Id + '" ' + strselect + '>' + item.Name + '</option>';
                    }

                    $("#" + idselect).html(strhtml);
                }
            }
        });
    }
    else {
        var strhtml = '';
        for (var i = 0; i < listcolor.length; i++) {
            var item = listcolor[i];

            if (item.Id == idcolor) {
                strselect = 'selected';
            }
            else {
                strselect = '';
            }
            strhtml += ' <option value="' + item.Id + '" ' + strselect + '>' + item.Name + '</option>';
        }

        $("#" + idselect).html(strhtml);
    }

}
var fncMyCallBack = "";
function cms_Uploadimage_Show(fmyCallBack) {
    if (productid == 0) {
        $("#cms_upload_id_dv_error_detailproduct").addClass("in");
        setTimeout(function () {
            $("#cms_upload_id_dv_error_detailproduct").removeClass("in")
        }, 5000);
    }
    else {
        $("#cms_upload_id_dv_error_detailproduct").removeClass("in");
        fncMyCallBack = fmyCallBack;
        $("body").append('<div class="modal-backdrop fade in"></div>');
        $('#cms-uploadimage').addClass('in');
        $('#cms-uploadimage').attr('style', 'display:block;left:44%');
        $('#cms-uploadimage-aclose').click(function () {
            $('#cms-uploadimage').removeClass(' in');
            $('#cms-uploadimage').attr('style', 'display:none');
            $(".modal-backdrop").remove();

        });
    }
}
var fncMyCallBackNews = "";
function cms_Uploadimage_ShowNews(fmyCallBackNews) {
    if (productid == 0) {
        $("#cms_upload_id_dv_error_detailproduct").addClass("in");
        setTimeout(function () {
            $("#cms_upload_id_dv_error_detailproduct").removeClass("in")
        }, 5000);
    }
    else {
        $("#cms_upload_id_dv_error_detailproduct").removeClass("in");
        fncMyCallBackNews = fmyCallBackNews;
        $("body").append('<div class="modal-backdrop fade in"></div>');
        $('#cms-uploadimage').addClass('in');
        $('#cms-uploadimage').attr('style', 'display:block;left:44%');
        $('#cms-uploadimage-aclose').click(function () {
            $('#cms-uploadimage').removeClass(' in');
            $('#cms-uploadimage').attr('style', 'display:none');
            $(".modal-backdrop").remove();

        });
    }
}

function LoadImageHspNews(flag) {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUploadNews";
    var dataobj = { intSiteId: siteid, lProductId: productid, strUserName: username };

    $("#cms_upload_status_dv_hsp").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_hsp").hide();
            $("#cms_dvhinh").html('');
            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '<div id="media-item-' + i + '" class="media-item">';
                    strhtml += '<img id="img-' + i + '" class="pinkynail toggle" src="' + item.SourceView + '" alt="">   ';
                    strhtml += '   <span class="filename new" onclick="cms_toggleclickdiv2(this,\'img-' + i + '\')">' + item.NamenotExts + '</span> ';
                    strhtml += '<span class="spanbutton" style="display:none" class="toggle describe-toggle-on" onclick="cms_toggleclick(this,\'img-' + i + '\')"  >Show</span>';
                    strhtml += '<div class="dvcontent-uploadimage" data-role="collapsible" style="display:none" >';
                    strhtml += '<table width="100%">';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';

                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<p>';
                    strhtml += 'File name: ' + item.Name + '</p>';
                    strhtml += '<p>';
                    strhtml += 'File type: ' + item.FileType + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Upload date: ' + item.UploadDate + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Title <span style="font-weight:normal;color:Red">(*)</span>';
                    strhtml += '</td>';
                    strhtml += '<td >';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_title_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Alternate Text';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_alt_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Link URL';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_linkurl_text_id_' + item.NamenotExts + '" value="http://" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="None" onclick=RemoveLinkUrl(\'' + item.NamenotExts + '\')  style="line-height:16px"/></span>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Size';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    //                if (item.ThumbnailWidth != "") {
                    //                    strhtml += '<p>';
                    //                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_thumbnail_id_' + item.NamenotExts + '" /> Thumbnail (' + item.ThumbnailWidth + 'x' + item.ThumbnailHeight + ')</p>';

                    //                }
                    //                if (item.MediumWidth != "") {
                    //                    strhtml += '<p>';
                    //                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_medium_id_' + item.NamenotExts + '"  /> Medium (' + item.MediumWidth + 'x' + item.MediumHeight + ')</p>';

                    //                }
                    //                if (item.LargeWidth != "") {
                    //                    strhtml += '<p>';
                    //                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_large_id_' + item.NamenotExts + '"  /> Large (' + item.LargeWidth + 'x' + item.LargeHeight + ')</p>';
                    //                }
                    //                if (item.MobileThumbnailWidth_News != "") {
                    //                    strhtml += '<p>';
                    //                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_thumbnailmobile_id_' + item.NamenotExts + '"  /> Thumbnail Mobile (' + item.MobileThumbnailWidth_News + 'x' + item.MobileThumbnailHeight_News + ')</p>';
                    //                }
                    //if (item.MobileWidth_News != "") {
                    //    strhtml += '<p>';
                    //    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_mobile_id_' + item.NamenotExts + '"  /> Mobile (' + item.MobileWidth_News + 'x' + item.MobileHeight_News + ')</p>';
                    //}
                    if (item.LargeWidth != "") {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_large_id_' + item.NamenotExts + '"  /> Large (' + item.LargeWidth + 'x' + item.LargeHeight + ')</p>';
                    }
                    strhtml += '<p>';
                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" checked="checked" id="cms_upload_rdb_fullsize_id_' + item.NamenotExts + '"  /> Full Size (' + item.FullsizeWidth + 'x' + item.FullsizeHeight + ')</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<div id="cms_upload_id_dv_error_' + item.NamenotExts + '" class="alert alert-error fade" style="display:none">';
                    strhtml += '<p style="margin:2px">Vui lòng nhập Title</p>';
                    strhtml += '</div>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="Chèn vào bài" onclick=InsertPostHinhNews(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.FolderView + '\',\'' + cms_div_contenttext + '\',\'cms_upload_title_text_id_' + item.NamenotExts + '\',\'' + item.FullsizeWidth + '\',\'' + item.FullsizeHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')  style="line-height:16px"/></span>';
                    //strhtml += '<span style="color:#08C; margin-right:20px ; margin-left:20px ; cursor:pointer ; text-decoration:underline">Dùng làm ảnh đại diện</span>';
                    if (item.ThumbnailWidth != "" && item.MediumWidth != "" && item.LargeWidth != "" && item.MobileThumbnailWidth_News) {
                        strhtml += '<span style="color:#08C; margin-right:20px ; margin-left:20px ; cursor:pointer ; text-decoration:underline"   onclick="cmd_uploadimage_setimage_representativenews(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\',\'' + item.MobileThumbnailWidth_News + '\',\'' + item.MobileThumbnailHeight_News + '\')">Dùng làm ảnh đại diện</span>';
                    }

                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '</table>';
                    strhtml += '</div>    ';
                    strhtml += '</div>';
                    $("#cms_dvhinh").append(strhtml);

                }
            }
        }
    });

}

function LoadImageHspGame(flag) {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 7, intColorId: 0, strUserName: username };

    $("#cms_upload_status_dv_hsp").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_hsp").hide();
            $("#cms_dvhinh").html('');
            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '<div id="media-item-' + i + '" class="media-item">';
                    strhtml += '<img id="img-' + i + '" class="pinkynail toggle" src="' + item.SourceView + '" alt="">   ';
                    strhtml += '   <span class="filename new" onclick="cms_toggleclickdiv2(this,\'img-' + i + '\')">' + item.NamenotExts + '</span> ';
                    strhtml += '<span class="spanbutton" class="toggle describe-toggle-on" onclick="cms_toggleclick(this,\'img-' + i + '\')" style="display:none">Show</span>';
                    strhtml += '<div class="dvcontent-uploadimage" data-role="collapsible" style="display:none" >';
                    strhtml += '<table width="100%">';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';

                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<p>';
                    strhtml += 'File name: ' + item.Name + '</p>';
                    strhtml += '<p>';
                    strhtml += 'File type: ' + item.FileType + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Upload date: ' + item.UploadDate + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Title <span style="font-weight:normal;color:Red">(*)</span>';
                    strhtml += '</td>';
                    strhtml += '<td >';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_title_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Alternate Text';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_alt_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Link URL';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_linkurl_text_id_' + item.NamenotExts + '" value="http://" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="None" onclick=RemoveLinkUrl(\'' + item.NamenotExts + '\')  style="line-height:16px"/></span>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Size';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    if (parseInt(item.ThumbnailWidth) != 0) {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_thumbnail_id_' + item.NamenotExts + '" /> Thumbnail (' + item.ThumbnailWidth + 'x' + item.ThumbnailHeight + ')</p>';

                    }
                    if (parseInt(item.MediumWidth) != 0) {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_medium_id_' + item.NamenotExts + '"  /> Medium (' + item.MediumWidth + 'x' + item.MediumHeight + ')</p>';

                    }
                    if (parseInt(item.LargeWidth) != 0) {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_large_id_' + item.NamenotExts + '"  /> Large (' + item.LargeWidth + 'x' + item.LargeHeight + ')</p>';
                    }
                    strhtml += '<p>';
                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" checked="checked" id="cms_upload_rdb_fullsize_id_' + item.NamenotExts + '"  /> Full Size (' + item.FullsizeWidth + 'x' + item.FullsizeHeight + ')</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<div id="cms_upload_id_dv_error_' + item.NamenotExts + '" class="alert alert-error fade" style="display:none">';
                    strhtml += '<p style="margin:2px">Vui lòng nhập Title</p>';
                    strhtml += '</div>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="Chèn vào bài" onclick=InsertPostHinh(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.FolderView + '\',\'' + cms_div_contenttext + '\',\'cms_upload_title_text_id_' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')  style="line-height:16px"/></span>';

                    if (parseInt(item.MediumWidth) >= 120) {

                        strhtml += '<span style="color:#08C; margin-right:20px ; margin-left:20px ; cursor:pointer ; text-decoration:underline"   onclick="cmd_uploadimage_setimage_representativeGame(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')">Dùng làm ảnh đại diện</span>';
                    }

                    if (parseInt(item.LargeWidth) >= 705) {
                        strhtml += '<span style="color:#08C; margin-right:20px ; margin-left:20px ; cursor:pointer ; text-decoration:underline"   onclick="cmd_uploadimage_setimage_representativeGameDetail(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')">Dùng làm ảnh chi tiết</span>';
                    }

                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '</table>';
                    strhtml += '</div>    ';
                    strhtml += '</div>';
                    $("#cms_dvhinh").append(strhtml);

                }
            }
        }
    });

}

function LoadImageHsp(flag) {

    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/GetListImageUpload";
    var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, flag: 1, intColorId: 0, strUserName: username };

    $("#cms_upload_status_dv_hsp").show();
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            $("#cms_upload_status_dv_hsp").hide();
            $("#cms_dvhinh").html('');
            if (arg != null && arg.length > 0) {
                for (var i = 0; i < arg.length; i++) {
                    var item = arg[i];

                    var strimge = '"' + item.SourceUpload + '"';

                    var strhtml = '<div id="media-item-' + i + '" class="media-item">';
                    strhtml += '<img id="img-' + i + '" class="pinkynail toggle" src="' + item.SourceView + '" alt="">   ';
                    strhtml += '   <span class="filename new" onclick="cms_toggleclickdiv2(this,\'img-' + i + '\')">' + item.NamenotExts + '</span> ';
                    //strhtml += '<a href="javascript:void(0);" onclick="cms_deleteimage(\'' + item.Name + '\')"><img src="' + tgdd_cms_urlroot + '/Content/themes/base/images/del.gif" alt="Xoá" style="margin-top:6px"/></a>';
                    strhtml += '<span class="spanbutton toggle describe-toggle-on" onclick="cms_toggleclick(this,\'img-' + i + '\')" style="display:none">Show</span>';
                    strhtml += '<div class="dvcontent-uploadimage" data-role="collapsible" style="display:none" >';
                    strhtml += '<table width="100%">';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';

                    strhtml += '<img class="thumbnail" src="' + item.SourceView + '"';
                    strhtml += 'alt="">';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<p>';
                    strhtml += 'File name: ' + item.Name + '</p>';
                    strhtml += '<p>';
                    strhtml += 'File type: ' + item.FileType + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Upload date: ' + item.UploadDate + '</p>';
                    strhtml += '<p>';
                    strhtml += 'Dimensions: ' + item.Dimension + '</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Title <span style="font-weight:normal;color:Red">(*)</span>';
                    strhtml += '</td>';
                    strhtml += '<td >';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_title_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage ">';
                    strhtml += 'Alternate Text';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_alt_text_id_' + item.NamenotExts + '" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Link URL';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    strhtml += '<input type="text" class="cms-upload-text" id="cms_upload_linkurl_text_id_' + item.NamenotExts + '" value="http://" />';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="None" onclick=RemoveLinkUrl(\'' + item.NamenotExts + '\')  style="line-height:16px"/></span>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td class="td-content-uploadimage">';
                    strhtml += 'Size';
                    strhtml += '</td>';
                    strhtml += '<td>';
                    if (item.ThumbnailWidth != "") {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_thumbnail_id_' + item.NamenotExts + '" /> Thumbnail (' + item.ThumbnailWidth + 'x' + item.ThumbnailHeight + ')</p>';

                    }
                    if (item.MediumWidth != "") {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_medium_id_' + item.NamenotExts + '"  /> Medium (' + item.MediumWidth + 'x' + item.MediumHeight + ')</p>';

                    }
                    if (item.LargeWidth != "") {
                        strhtml += '<p>';
                        strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" id="cms_upload_rdb_large_id_' + item.NamenotExts + '"  /> Large (' + item.LargeWidth + 'x' + item.LargeHeight + ')</p>';
                    }
                    strhtml += '<p>';
                    strhtml += '<input type="radio" name="rdo_' + item.NamenotExts + '" checked="checked" id="cms_upload_rdb_fullsize_id_' + item.NamenotExts + '"  /> Full Size (' + item.FullsizeWidth + 'x' + item.FullsizeHeight + ')</p>';
                    strhtml += '</td>';
                    strhtml += '</tr>';
                    strhtml += '<tr>';
                    strhtml += '<td></td>';
                    strhtml += '<td>';
                    strhtml += '<div id="cms_upload_id_dv_error_' + item.NamenotExts + '" class="alert alert-error fade" style="display:none">';
                    strhtml += '<p style="margin:2px">Vui lòng nhập Title</p>';
                    strhtml += '</div>';
                    strhtml += '<span><input type="button" class="cms-upload-btn" value="Chèn vào bài" onclick=InsertPostHinh(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.FolderView + '\',\'' + cms_div_contenttext + '\',\'cms_upload_title_text_id_' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')  style="line-height:16px"/></span>';
                    //strhtml += '<span style="color:#08C; margin-right:20px ; margin-left:20px ; cursor:pointer ; text-decoration:underline">Dùng làm ảnh đại diện</span>';
                    //if (item.ThumbnailWidth != "" && item.MediumWidth != "" && item.LargeWidth != "") {
                    if (item.MediumWidth != "" && item.LargeWidth != "") {
                        strhtml += '<span style="color:#08C; margin-left:20px ; cursor:pointer ; text-decoration:underline"   onclick="cmd_uploadimage_setimage_representative(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\',\'' + item.ThumbnailWidth + '\',\'' + item.ThumbnailHeight + '\',\'' + item.MediumWidth + '\',\'' + item.MediumHeight + '\',\'' + item.LargeWidth + '\',\'' + item.LargeHeight + '\')">Dùng làm ảnh đại diện</span>';
                        
                    }
                    if (item.MediumWidth != "" && item.FileExt == "png" && siteid == 1)
                        strhtml += '<span style="color:#08C ; margin-left:20px ;cursor:pointer ; text-decoration:underline"   onclick="cmd_uploadimage_setimage_fulldetail(\'' + item.FileExt + '\',\'' + item.NamenotExts + '\')">Dùng làm ảnh chi tiết</span>';
                    //strhtml += '&nbsp;<span style="color:#08C; cursor:pointer; text-decoration:underline" onclick="cms_Delete_Upload_Image(\'' + item.Name + '\')" >Xoá</span>';


                    strhtml += '</td>';
                    strhtml += '</tr>';

                    strhtml += '</table>';
                    strhtml += '</div>    ';
                    strhtml += '</div>';
                    $("#cms_dvhinh").append(strhtml);

                }
            }
        }
    });

}
function RemoveLinkUrl(strimagenoext) {
    $("#cms_upload_linkurl_text_id_" + strimagenoext).val("http://");
}
function GalleryRemoveLinkUrl(strimagenoext) {
    $("#gallery-cms_upload_linkurl_text_id_" + strimagenoext).val("http://");
}

function cms_toggleclickvideo(obj, img, dvcontent, linkyoutube) {

    if ($("#" + dvcontent).is(':hidden')) {
        $("#" + dvcontent).show();

        $(obj).val("Ẩn");

    }
    else {
        $("#" + dvcontent).hide();

        $(obj).val("Sửa");

    }

    jQuery('span[rel*=tooltip]').tooltip('show');
}
function cms_toggleclick(obj, img) {

    jQuery("input[id*=cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=cms_upload_id_dv_error]").hide();
    jQuery("input[id*=gallery-cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=gallery-cms_upload_id_dv_error]").hide();

    $(obj).next(".dvcontent-uploadimage").slideToggle("fast");
    if ($(obj).html() == 'Hide') {
        $(obj).html('Show');
        $("#" + img).show();

    }
    else {
        $(obj).html('Hide');
        $("#" + img).hide();
    }
}

function cms_toggleclickdiv(obj, img) {

    jQuery("input[id*=cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=cms_upload_id_dv_error]").hide();
    jQuery("input[id*=gallery-cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=gallery-cms_upload_id_dv_error]").hide();

    $(obj).parent().parent().find(".spanbutton").next(".dvcontent-uploadimage").slideToggle("fast");
    if ($(obj).parent().parent().find(".spanbutton").html() == 'Hide') {
        $(obj).parent().parent().find(".spanbutton").html('Show');
        $("#" + img).show();

    }
    else {
        $(obj).parent().parent().find(".spanbutton").html('Hide');
        $("#" + img).hide();
    }

}

function cms_toggleclickdiv2(obj, img) {

    jQuery("input[id*=cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=cms_upload_id_dv_error]").hide();
    jQuery("input[id*=gallery-cms_upload_title_text_id]").removeClass("cms-upload-text-error");
    jQuery("div[id*=gallery-cms_upload_id_dv_error]").hide();

    $(obj).parent().find(".spanbutton").next(".dvcontent-uploadimage").slideToggle("fast");
    if ($(obj).parent().find(".spanbutton").html() == 'Hide') {
        $(obj).parent().find(".spanbutton").html('Show');
        $("#" + img).show();

    }
    else {
        $(obj).parent().find(".spanbutton").html('Hide');
        $("#" + img).hide();
    }

}
//function InsertPostHinhNews(strext, strimagenoext, strfolderview, divcontenttext, idtexttitle, fw, fh, mbw, mbh) {

function InsertPostHinhNews(strext, strimagenoext, strfolderview, divcontenttext, idtexttitle, fw, fh, lw, lh) {
    var t = 0, m = 0, l = 0, f = 0, mb;
    var title = "", alt = "", caption = "", desc = "", url = "";
    if ($.trim($("#" + idtexttitle).val()) == '') {
        $("#" + idtexttitle).addClass('cms-upload-text-error');
        $("#" + idtexttitle).addClass('cms-upload-bg-error');
        $("#cms_upload_id_dv_error_" + strimagenoext).attr('style', 'padding-top:0px;display:block;text-align:center');
        $("#cms_upload_id_dv_error_" + strimagenoext).addClass("in");
    }
    else {
        $("#" + idtexttitle).removeClass('cms-upload-text-error');
        $("#" + idtexttitle).removeClass('cms-upload-bg-error');
        $("#cms_upload_id_dv_error_" + strimagenoext).hide();
        $("#cms_upload_id_dv_error_" + strimagenoext).removeClass("in");
        jQuery("div[id*=cms_upload_id_dv_error]").removeClass("in");

        title = $("#" + idtexttitle).val();
        if ($("#cms_upload_alt_text_id_" + strimagenoext).val() != '') {
            alt = $("#cms_upload_alt_text_id_" + strimagenoext).val();
        }
        if ($("#cms_upload_linkurl_text_id_" + strimagenoext).val() != '' && $("#cms_upload_linkurl_text_id_" + strimagenoext).val() != 'http://') {
            url = $("#cms_upload_linkurl_text_id_" + strimagenoext).val();
        }
        //                 if ($("#cms_upload_rdb_thumbnail_id_" + strimagenoext) != null) {
        //                     if ($("#cms_upload_rdb_thumbnail_id_" + strimagenoext).attr("checked") == "checked") {
        //                         t = 1;
        //                     }
        //                 }
        //                 if ($("#cms_upload_rdb_medium_id_" + strimagenoext) != null) {
        //                     if ($("#cms_upload_rdb_medium_id_" + strimagenoext).attr("checked") == "checked") {
        //                         m = 1;
        //                     }
        //                 }
        if ($("#cms_upload_rdb_large_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_large_id_" + strimagenoext).attr("checked") == "checked") {
                l = 1;
            }
        }

        //
        //if ($("#cms_upload_rdb_mobile_id_id_" + strimagenoext) != null) {
        //    if ($("#cms_upload_rdb_mobile_id_" + strimagenoext).attr("checked") == "checked") {
        //        mb = 1;
        //    }
        //}          

        if ($("#cms_upload_rdb_fullsize_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_fullsize_id_" + strimagenoext).attr("checked") == "checked") {
                f = 1;
            }
        }
        var strimage = "";
        //                 if (t == 1) {
        //                     strimage = strimagenoext + "-" + tw + "x" + th + "." + strext;
        //                 }
        //                 else if (m == 1) {
        //                     strimage = strimagenoext + "-" + mw + "x" + mh + "." + strext;
        //                 }
        //                 else if (l == 1) {
        //                     strimage = strimagenoext + "-" + lw + "x" + lh + "." + strext;
        //                 }
        //                 else {
        //strimage = strimagenoext + "." + strext;
        //}
        //if (mb == 1) {
        //    strimage = strimagenoext + "-" + mbw + "x480" + "." + strext;
        //}
        if (l == 1) {
            strimage = strimagenoext + "-" + "600" + "x400" + "." + strext;
        }
        else {
            strimage = strimagenoext + "." + strext;
        }
        var strhtml = "";
        if (url != "") {
            //strhtml = '<a href="' + url + '"><img class="lazy" src="http://cdn.tgdd.vn/loading.gif"  data-original="' + strfolderview + strimage + '" alt="' + alt + '" title="' + title + '"/></a>';
            strhtml = '<a href="' + url + '"><img  src="' + strfolderview + strimage + '"  data-original="' + strfolderview + strimage + '" alt="' + alt + '" title="' + title + '"/></a>';
        }
        else {
            //strhtml = '<img class="lazy" src="http://cdn.tgdd.vn/loading.gif"  data-original="' + strfolderview + strimage + '" alt="' + alt + '"  title="' + title + '"/>';
            strhtml = '<img src="' + strfolderview + strimage + '"  data-original="' + strfolderview + strimage + '" alt="' + alt + '"  title="' + title + '"/>';
        }
        $('#cms-uploadimage').removeClass(' in');
        $('#cms-uploadimage').attr('style', 'display:none');
        $(".modal-backdrop").remove();
        fncMyCallBackNews(strhtml);

    }

}
function InsertPostHinh(strext, strimagenoext, strfolderview, divcontenttext, idtexttitle, tw, th, mw, mh, lw, lh) {


    var t = 0, m = 0, l = 0, f = 0;
    var title = "", alt = "", caption = "", desc = "", url = "";
    if ($.trim($("#" + idtexttitle).val()) == '') {
        $("#" + idtexttitle).addClass('cms-upload-text-error');
        $("#" + idtexttitle).addClass('cms-upload-bg-error');
        $("#cms_upload_id_dv_error_" + strimagenoext).attr('style', 'padding-top:0px;display:block;text-align:center');
        $("#cms_upload_id_dv_error_" + strimagenoext).addClass("in");
    }
    else {
        $("#" + idtexttitle).removeClass('cms-upload-text-error');
        $("#" + idtexttitle).removeClass('cms-upload-bg-error');
        $("#cms_upload_id_dv_error_" + strimagenoext).hide();
        $("#cms_upload_id_dv_error_" + strimagenoext).removeClass("in");
        jQuery("div[id*=cms_upload_id_dv_error]").removeClass("in");

        title = $("#" + idtexttitle).val();
        if ($("#cms_upload_alt_text_id_" + strimagenoext).val() != '') {
            alt = $("#cms_upload_alt_text_id_" + strimagenoext).val();
        }
        if ($("#cms_upload_linkurl_text_id_" + strimagenoext).val() != '' && $("#cms_upload_linkurl_text_id_" + strimagenoext).val() != 'http://') {
            url = $("#cms_upload_linkurl_text_id_" + strimagenoext).val();
        }
        if ($("#cms_upload_rdb_thumbnail_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_thumbnail_id_" + strimagenoext).attr("checked") == "checked") {
                t = 1;
            }
        }
        if ($("#cms_upload_rdb_medium_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_medium_id_" + strimagenoext).attr("checked") == "checked") {
                m = 1;
            }
        }
        if ($("#cms_upload_rdb_large_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_large_id_" + strimagenoext).attr("checked") == "checked") {
                l = 1;
            }
        }
        if ($("#cms_upload_rdb_fullsize_id_" + strimagenoext) != null) {
            if ($("#cms_upload_rdb_fullsize_id_" + strimagenoext).attr("checked") == "checked") {
                f = 1;
            }
        }
        var strimage = "";
        if (t == 1) {
            strimage = strimagenoext + "-" + tw + "x" + th + "." + strext;
        }
        else if (m == 1) {
            strimage = strimagenoext + "-" + mw + "x" + mh + "." + strext;
        }
        else if (l == 1) {
            strimage = strimagenoext + "-" + lw + "x" + lh + "." + strext;
        }
        else {
            strimage = strimagenoext + "." + strext;
        }
        var strhtml = "";
        if (url != "") {
            //strhtml = '<a href="' + url + '"><img class="lazy" src="http://cdn.tgdd.vn/loading.gif"  data-original="' + strfolderview + strimage + '" alt="' + alt + '" title="' + title + '"/></a>';
            strhtml = '<a href="' + url + '"><img src="' + strfolderview + strimage + '"  data-original="' + strfolderview + strimage + '" alt="' + alt + '" title="' + title + '"/></a>';
        }
        else {
            //strhtml = '<img class="lazy" src="http://cdn.tgdd.vn/loading.gif"  data-original="' + strfolderview + strimage + '" alt="' + alt + '"  title="' + title + '"/>';
            strhtml = '<img  src="' + strfolderview + strimage + '"  data-original="' + strfolderview + strimage + '" alt="' + alt + '"  title="' + title + '"/>';
        }
        $('#cms-uploadimage').removeClass(' in');
        $('#cms-uploadimage').attr('style', 'display:none');
        $(".modal-backdrop").remove();
        fncMyCallBack(strhtml);

    }

}
function GalleryInsertPostHinh(strext, strimagenoext, strfolderview, divcontenttext, idtexttitle, tw, th, mw, mh, lw, lh) {
    var t = 0, m = 0, l = 0, f = 0;
    var title = "", alt = "", caption = "", desc = "", url = "";
    if ($.trim($("#" + idtexttitle).val()) == '') {
        $("#" + idtexttitle).addClass('cms-upload-text-error');
        $("#" + idtexttitle).addClass('cms-upload-bg-error');
        $("#gallery-cms_upload_id_dv_error_" + strimagenoext).attr('style', 'padding-top:0px;display:block;text-align:center;');
        $("#gallery-cms_upload_id_dv_error_" + strimagenoext).addClass("in");
    }
    else {
        $("#" + idtexttitle).removeClass('cms-upload-text-error');
        $("#" + idtexttitle).removeClass('cms-upload-bg-error');
        $("#gallery-cms_upload_id_dv_error_" + strimagenoext).hide();
        $("#gallery-cms_upload_id_dv_error_" + strimagenoext).removeClass("in");
        jQuery("div[id*=gallery-cms_upload_id_dv_error]").removeClass("in");
        title = $("#" + idtexttitle).val();
        if ($("#gallery-cms_upload_alt_text_id_" + strimagenoext).val() != '') {
            alt = $("#gallery-cms_upload_alt_text_id_" + strimagenoext).val();
        }
        if ($("#gallery-cms_upload_linkurl_text_id_" + strimagenoext).val() != '' && $("#gallery-cms_upload_linkurl_text_id_" + strimagenoext).val() != 'http://') {
            url = $("#gallery-cms_upload_linkurl_text_id_" + strimagenoext).val();
        }
        if ($("#gallery-cms_upload_rdb_thumbnail_id_" + strimagenoext) != null) {
            if ($("#gallery-cms_upload_rdb_thumbnail_id_" + strimagenoext).attr("checked") == "checked") {
                t = 1;
            }
        }
        if ($("#gallery-cms_upload_rdb_medium_id_" + strimagenoext) != null) {
            if ($("#gallery-cms_upload_rdb_medium_id_" + strimagenoext).attr("checked") == "checked") {
                m = 1;
            }
        }
        if ($("#gallery-cms_upload_rdb_large_id_" + strimagenoext) != null) {
            if ($("#gallery-cms_upload_rdb_large_id_" + strimagenoext).attr("checked") == "checked") {
                l = 1;
            }
        }
        if ($("#gallery-cms_upload_rdb_fullsize_id_" + strimagenoext) != null) {
            if ($("#gallery-cms_upload_rdb_fullsize_id_" + strimagenoext).attr("checked") == "checked") {
                f = 1;
            }
        }
        var strimage = "";
        if (t == 1) {
            strimage = strimagenoext + "-" + tw + "x" + th + "." + strext;
        }
        else if (m == 1) {
            strimage = strimagenoext + "-" + mw + "x" + mh + "." + strext;
        }
        else if (l == 1) {
            strimage = strimagenoext + "-" + lw + "x" + lh + "." + strext;
        }
        else {
            strimage = strimagenoext + "." + strext;
        }
        var strhtml = "";
        if (url != "") {
            strhtml = '<a href="' + url + '"><img src="' + strfolderview + strimage + '" alt="' + alt + '" title="' + title + '"/></a>';
        }
        else {
            strhtml = '<img src="' + strfolderview + strimage + '" alt="' + alt + '"  title="' + title + '"/>';
        }

        $('#cms-uploadimage').removeClass(' in');
        $('#cms-uploadimage').attr('style', 'display:none');
        $(".modal-backdrop").remove();
        fncMyCallBack(strhtml);
    }

}
function cms_Delete_Upload_Image(strImage) {
    siteid = $("#cms-uploadimage").attr('siteid');
    var strcrm = "Bạn chắc muốn xoá ?";
    if (confirm(strcrm)) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteImageUpload";
        var dataobj = { intSiteId: siteid, intCategoryId: categoryid, lProductId: productid, strImg: strImage, flag: 1, strUserName: username };
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                if (arg == "1") {
                    LoadImageHsp();
                }
                else {
                    alert("có lỗi xảy ra");
                }
            }
        });
    }
}

function cms_deleteimage(strImage) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteImageUploadByName";
        var dataobj = { intCategoryId: categoryid, lProductId: productid, strImg: strImage, flag: 1 };
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: dataobj,
            success: function (arg) {
                if (arg == "1") {
                    LoadImageHsp();
                }
                else {
                    alert("có lỗi xảy ra");
                }
            }
        });
    }
}
function cms_del_albumnews(albumId) {
    if (confirm("Toàn bộ ảnh của album sẽ bị xóa khi xóa album. Bạn có chắc muốn xóa?")) {
        var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/DeleteAlbumNews";
        $.ajax({
            url: previewUrl,
            type: 'POST',
            dataType: 'json',
            data: {AlbumID: albumId, UserName: username},
            success: function (arg) {
                if (arg == "0") {
                    alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
                }
                else {
                    LoadAlbumNews();
                }
            }
        });
    }
}
function add_album_news() {
    if ($("#txtAlbumName").val().trim() == "") {
        alert("Chưa nhập tên Album");
        $("#txtAlbumName").focus();
        return;
    }
    var previewUrl = tgdd_cms_urlroot + "/Service/uploadCMSSvc.asmx/InsertAlbumNews";
    var newsId = $("#cms-uploadimage").attr('productid');
    var dataobj = {
        AlbumName: $("#txtAlbumName").val(),
        NewsID: newsId,
        UserName: username
    };
    $.ajax({
        url: previewUrl,
        type: 'POST',
        dataType: 'json',
        data: dataobj,
        success: function (arg) {
            if (arg == "0") {
                alert("Phát sinh lỗi ! vui lòng thực hiện lại lần sau");
            }
            else {
                LoadAlbumNews();
                LoadAlbumNewsCombo();
            }
        }
    });
}



