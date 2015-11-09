var rootnews = "/cong-tac-vien";
function offpreview() {
    $("#btnLoadingNewsPost").hide();
    $("#btnPreviewNewsPost").show();
    $('#news-detail').html('');
    $('#news-detail').hide();
    $('#create-topic').show();
}

function checksetimage(v) {
    if (v == 1) {
        if ($("#chksetimage").is(":checked") == false) {
            $("#chksetimage").attr('checked', true);
            $("#hinhdaidien").hide();
            $("#hoac").hide();
            $("#hoac1").hide();
            $("#btnsetimage").hide();

        }
        else {
            $("#chksetimage").attr('checked', false);
            $("#hinhdaidien").show();
            $("#hoac").show();
            //$("#hoac1").show();
            $("#btnsetimage").show();
        }
    }

    else {
        if ($("#chksetimage").is(":checked")) {
            $("#chksetimage").attr('checked', true);
            $("#hinhdaidien").hide();
            $("#hoac").hide();
            //$("#hoac1").hide();
            $("#btnsetimage").hide();

        }
        else {
            $("#chksetimage").attr('checked', false);
            $("#hinhdaidien").show();
            $("#hoac").show();
            //$("#hoac1").show();
            $("#btnsetimage").show();
        }
    }

}
var arrsetimagedit = [];
var arrsetimage = [];
function detachimgcontent() {

    debugger;
    if ($("#shortdescription").css('display') != 'none') {
        var arr = editor.document.$.getElementsByTagName("img");
        for (var j = 0; j < arr.length; j++) {
            arrsetimage[j] = arr[j].attributes['src'].value;
        }
        if (arrsetimagedit.length > 0) {
            arrsetimage[arrsetimage.length] = arrsetimagedit[0];
        }
        if (arrsetimage.length > 0) {
            var str = "";

            str += "<div id='id-ul-setimagemainpopup' class='ul-setimagemainpopup'>";
            var i = 0;
            var cl = arrsetimage[i];
            //arrsetimage[i].attributes['src'].value;

            str += "<div class=\"li-setimagemainpopup\">";
            str += "<div style=\"float:left\"><img id='img-setimagemain-0' src='" + cl + "'/></div>";
            //str += "<div style=\"float:right\"><input class=\"btn-setimagemainpopup\" onclick='setimagemainpopup(" + i + ")' type=\"button\" value=\"Chọn hình này làm hình đại diện\" /></div>";
            str += "</div>";
            str += "<div class='li-setimagemain-text' style=\"width: 62px;\">";
            if (i > 0)
                str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre_ac.png' onclick='detachimgcontentnext(" + (i - 1) + ")' /></div>";
            else str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre.png' /></div>";
            if ((i + 1) < arrsetimage.length)
                str += "<div><img src='" + rootnews + "/Content/images/sites/next_ac.png'  onclick='detachimgcontentnext(" + (i + 1) + ")'/></div>";
            else str += "<div><img src='" + rootnews + "/Content/images/sites/next.png'/></div>";
            str += "</div>";
            str += "<div  class='li-setimagemain-text'>";
            str += "1 của " + arrsetimage.length;
            str += "</div>";
            //str += "<div class='li-setimagemain-text'>";
            //str += "<span style='padding-left: 6px;font-weight: bold;margin-right:6px;'>hoặc</span>";
            //str += "</div>";
            str += "</div>";

            $("#setimagemainpopup").html(str);

            $("#setimagemainpopup").show();
            $("#hoac1").show();
            if ($("#chksetimage").is(":checked")) {
                $("#hinhdaidien").hide();
                $("#hoac").hide();
                //$("#hoac1").hide();
                $("#btnsetimage").hide();

            }
            else {
                $("#hinhdaidien").show();
                $("#hoac").show();
                // $("#hoac1").show();
                $("#btnsetimage").show();
                //$("#dvcheckhinhdaidien").css('margin-top','84px');
            }
        }
    }
}
function detachimgcontentnext(v) {

    var i = v;
    //var cl = arrsetimage[i].attributes['src'].value;
    var cl = arrsetimage[i];
    var str = "";
    str += "<div id='image-li' class=\"li-setimagemainpopup\">";
    str += "<div style=\"float:left\"><img id='img-setimagemain-0' src='" + cl + "'/></div>";
    //str += "<div style=\"float:right\"><input class=\"btn-setimagemainpopup\" onclick='setimagemainpopup(" + i + ")' type=\"button\" value=\"Chọn hình này làm hình đại diện\" /></div>";
    str += "</div>";
    str += "<div class='li-setimagemain-text' style=\"width: 62px;\">";
    if (i > 0)
        str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre_ac.png' onclick='detachimgcontentnext(" + (i - 1) + ")' /></div>";
    else str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre.png' /></div>";
    if ((i + 1) < arrsetimage.length)
        str += "<div><img src='" + rootnews + "/Content/images/sites/next_ac.png'  onclick='detachimgcontentnext(" + (i + 1) + ")'/></div>";
    else str += "<div><img src='" + rootnews + "/Content/images/sites/next.png'/></div>";
    str += "</div>";
    str += "<div class='li-setimagemain-text'>";
    str += v + 1 + " của " + arrsetimage.length;
    str += "</div>";
    //str += "<div class='li-setimagemain-text'>";
    //str += "<span style='padding-left: 6px;font-weight: bold;margin-right:6px;'>hoặc</span>";
    //str += "</div>";
    $("#id-ul-setimagemainpopup").html(str);

    $("#hoac1").show();

    //var i = v;   
    //var cl = arrsetimage[i];
    //var str = "";
    //str += "<div id='image-li' class=\"li-setimagemainpopup\">";
    //str += "<div><img id='img-setimagemain-0' src='" + cl + "'/></div>";    
    //str += "</div>";
    //str += "<div class='li-setimagemain-text' style=\"width: 62px;\">";
    //if (i > 0)
    //    str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre_ac.png' onclick='detachimgcontentnext(" + (i - 1) + ")' /></div>";
    //else str += "<div style=\"float:left\"><img src='" + rootnews + "/Content/images/sites/pre.png' /></div>";
    //if (i + 1 < arrsetimage.length)
    //    str += "<div><img src='" + rootnews + "/Content/images/sites/next_ac.png'  onclick='detachimgcontentnext(" + (i + 1) + ")'/></div>";
    //else str += "<div><img src='" + rootnews + "/Content/images/sites/next.png'/></div>";
    //str += "</div>";
    //str += "<div class='li-setimagemain-text'>";
    //str += v + 1 + " của " + arrsetimage.length;
    //str += "</div>";
    //str += "<div class='li-setimagemain-text'>";
    //str += "<span style='padding-left: 6px;font-weight: bold;margin-right:6px;'>hoặc</span>";
    //str += "</div>";
    //$("#id-ul-setimagemainpopup").html(str);
}
function cmtattachimagemain() {
    debugger;
    $("#uploadimagemain").html5Uploader({
        name: "uploadimagemain",
        postUrl: rootnews + '/them-tin-moi-suggestion-ajax/PostImageMain',
        onServerProgress: function () { // Called periodically while the data is being posted.

            $("#imageloading").show();
        },
        onSuccess: function (e) { // Called when the read operation is successfully completed.
            var data = $.parseJSON(e.currentTarget.response);


            if (data.message == "upload sucessfully") {

                $("#imageloading").hide();
                arrsetimage[arrsetimage.length] = data.ImageName;
                detachimgcontentnext(arrsetimage.length - 1);
            }
            else if (data.message == "text") {
                alert("Vui lòng chọn file hình");
                $("#imageloading").hide();
            }
            else if (data.message == "Error") {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
                $("#imageloading").hide();
            }
        },
        onServerError: function (e) {
        }
    });

}
//function cmtattachimagemain() {
//    debugger;
//    $("#uploadimagemain").html5Uploader({
//        name: "uploadimagemain",
//        postUrl: rootnews + '/them-tin-moi-suggestion-ajax/PostImageMain',
//        onServerProgress: function () { // Called periodically while the data is being posted.

//            var preloading = "<li class=\"cmt-pre-loading\" style=\"border:none\"><img src='" + rootnews + "/Content/images/sites/loading.gif' style=\"width:16px;height:16px;\"/></li>";
//            $('#ul_imagemain').html(preloading);
//        },
//        onSuccess: function (e) { // Called when the read operation is successfully completed.
//            var data = $.parseJSON(e.currentTarget.response);


//            if (data.message == "upload sucessfully") {

//                var list = $("#ul_imagemain");
//                var strhtml = "<li class='clearfix'><img style=\"cursor:pointer\"   id='rev-" + data.ImageId + "' src='" + data.ImageName + "'\"/></li>";
//                list.html(strhtml);
//                $('li.cmt-pre-loading').remove();
//                arrsetimage[arrsetimage.length] = data.ImageName;
//                detachimgcontentnext(0);
//            }
//            else if (data.message == "text") {
//                alert("Vui lòng chọn file hình");
//                $('li.cmt-pre-loading').remove();
//            }
//            else if (data.message == "Error") {
//                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
//                $('li.cmt-pre-loading').remove();
//            }
//        },
//        onServerError: function (e) {
//        }
//    });

//}
function setimagemainpopup(id) {


    //$.fancybox.close();
    var preloading = "<li class=\"cmt-pre-loading\" style=\"border:none\"><img src='" + rootnews + "/Content/images/sites/loading.gif' style=\"width:16px;height:16px;\"/></li>";
    $('#ul_imagemain').html(preloading);
    var org = "<li><img id=\"idimgmain\" name=\"\" src='" + rootnews + "/Content/images/sites/no-image.png' alt=''></li>";
    //document.getElementById("img-setimagemain-"+).src
    var ct = $("#img-setimagemain-" + id).attr('src');
    model = { name: encodeURI(ct) }
    $.ajax({
        url: rootnews + '/them-tin-moi-load-subcategory-ajax/SetImageMainPopup',
        type: 'Post',
        data: model,
        cache: true,
        success: function (e) {
            var data = e;
            if (data.message == "upload sucessfully") {

                var list = $("#ul_imagemain");
                var strhtml = "<li class='clearfix'><img style=\"cursor:pointer\"   id='rev-" + data.ImageId + "' src='" + data.ImageName + "'\"/></li>";
                list.html(strhtml);
                $('li.cmt-pre-loading').remove();
                $("#setimagemainpopup").hide();
            }
            else if (data.message == "Error") {
                $('li.cmt-pre-loading').remove();
                var list = $("#ul_imagemain");
                list.html(org);
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
            }
            else if (data.message == "LargeSize") {
                $('li.cmt-pre-loading').remove();
                var list = $("#ul_imagemain");
                list.html(org);
                alert("Dung lượng file quá lớn.");
            }
        }
    });

}
function preview() {

    $("#btnLoadingNewsPost").show();
    $("#btnPreviewNewsPost").hide();
    var tt = 0, ct = 0;
    var ttvl = $("#txtNewsPostTitle").val();
    if ($.trim(ttvl) == '') {
        tt = 1;
    }
    if (editor.getData() == "") {
        ct = 1;
    }


    //if (jQuery("#wp-content-wrap").hasClass("tmce-active")) {
    //    if (tinyMCE.get('content').getContent() == "") {
    //        tinyMCE.get('content').focus();
    //        ct = 1;
    //    }
    //}
    //else {
    //    tinyMCE.get('content').focus();
    //    ct = 1;
    //}
    if (tt == 0 && ct == 0) {

        var fr = $("#forum").val();
        var sfr = $("#sub-forum").val();
        var email = document.getElementById("subcribe-to-topic").checked == true ? "1" : "0";
        //model = { Title: encodeURI(ttvl), Content: encodeURI(tinyMCE.get('content').getContent()), Forum: fr, SubForum: sfr, IsMail: email }
        model = { Title: encodeURI(ttvl), Content: encodeURI(editor.getData()), Forum: fr, SubForum: sfr, IsMail: email }
        $.ajax({
            url: rootnews + '/them-tin-moi-load-subcategory-ajax/Preview',
            type: 'Post',
            data: model,
            cache: true,
            success: function (d) {

                $('#news-detail').html(d);
                $('#news-detail').show();
                $('#create-topic').hide();
            },
            error: function (d1) {
                $('#dvNewsPostAlertSub').html('<p>Lỗi hệ thống.</p>');
                $("#dvNewsPostAlert").fadeIn(function () {
                    setTimeout(function () {
                        $("#dvNewsPostAlert").attr("style", "display:none");
                    }, 5000);
                });
                $("#btnLoadingNewsPost").hide();
                $("#btnPreviewNewsPost").show();
            }
        })
    }
    else {
        $("#btnLoadingNewsPost").hide();
        $("#btnPreviewNewsPost").show();
        $('#dvNewsPostAlertSub').html('<p>Nhập thông tin còn thiếu.</p>');
        $("#dvNewsPostAlert").fadeIn(function () {
            setTimeout(function () {
                $("#dvNewsPostAlert").attr("style", "display:none");
            }, 5000);
        });

    }
}
function ReportSupport() {

    var name = document.getElementById("txtName");
    var email = document.getElementById("txtemail");
    var dllsubject = document.getElementById("ct-sub");
    var sub = dllsubject.value;
    var mobile = document.getElementById("txtphonenum");
    var q = document.getElementById("txtQuestion");

    if (name.value == "") {
        alert("Vui lòng nhập họ tên !");
        name.focus();
        return false;
    }
    if (sub == "-1") {
        alert("Vui lòng chọn chủ đề !");
        return false;
    }
    if (email.value == "") {
        alert("Vui lòng nhập email !");
        email.focus();
        return false;
    }
    if (mobile.value == "") {
        alert("Vui lòng nhập Số điện thoại !");
        mobile.focus();
        return false;
    }
    if (q.value == "") {
        alert("Vui lòng nhập câu hỏi của bạn !");
        q.focus();
        return false;
    }

    if (ValidatePhoneNumber('txtphonenum') == 0) {
        alert("Số điện thoại không chính xác !");
        mobile.focus();
        return false;
    }

    var ten = name.value;
    var mail = email.value;
    var context = q.value;
    var strMobile = mobile.value;
    var Title = $('#ct-sub option:selected').text().replace(/\n/gi, '').replace(/\r/gi, '');

    $.ajax({
        url: rootnews + "/ajaxSendMail/SendMailSupport/",
        type: 'POST',
        data: { name: encodeURI(ten), email: encodeURI(mail), _context: encodeURI(context), mobile: strMobile, title: encodeURI(Title) },
        cache: false,
        beforeSend: function () {
            $('#btnLoadingSendSupport').attr('style', 'border:none;width:42px;height:42px;display:block;cursor:pointer');
            $('#btnSend').attr('style', 'display:none; border:none;width:auto;height:auto');
        },
        success: function (data) {
            dllsubject.value = "-1";
            mobile.value = "";
            name.value = "";
            Title = "";
            email.value = "";
            q.value = "";
            alert('Đã gửi thông tin thành công!');
            $('#btnLoadingSendSupport').attr('style', 'display:none');
            $('#btnSend').attr('style', 'display:block; border:none;width:auto;height:auto');
            fadeOutpopup('contact-box');
        },
        error: function (e) {
            $('#btnLoadingSendSupport').attr('style', 'display:none');
            $('#btnSend').attr('style', 'display:block; border:none;width:auto;height:auto');
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    })

    return true;
}
function fadeOutpopup(strID) {

    $('#fade , #' + strID).fadeOut(function () {
        $('#fade').remove();
    });
    $('#btnSend').attr('style', 'display:block; border:none;width:auto;height:auto');
    return false;
}
function ValidatePhoneNumber(ctrl) {
    var control = document.getElementById(ctrl);
    var regEx = new RegExp(/^((09[0-9]{8})|(01[0-9]{9}))$/);

    if (control != null) {
        var str = control.value;

        if (regEx.test(str.trim())) {
            return 1;
        }
    }

    return 0;
}
function fadeinpopupContact(strID) {
    $('#' + strID).fadeIn();
    $('#' + strID).css({
        'display': 'block',
        'position': 'fixed'
    });

    $('body').append('<div id="fade" onclick="fadeOutpopup(\'' + strID.toString() + '\');"></div>');
    $('#btnCancel').attr('onclick', 'fadeOutpopup(\'' + strID.toString() + '\')');
    $('#btnSend').attr('onclick', 'return ReportSupport();');
    $('#fade').css({ 'filter': 'alpha(opacity=80)' }).fadeIn();

    return false;
}
function ShowErrorNewsPost(id, content) {

}
function RemoveAttachFile(id, fn, username) {

    $.ajax({
        url: rootnews + '/them-tin-moi-suggestion-ajax/RemoveFileAttach',
        type: 'POST',
        data: { strFileName: fn, stringUserName: username },
        datatype: 'json',
        success: function (d) {
            if (d == "1") {
                //  LoadFileAttachEdit(fn);

                $('#img-' + id).parent().remove();
                $('#img-' + id).remove();
                $('#rev-' + id).remove();


            }
            else {
                $('#dvNewsPostAlertSub').html('<p>Có lỗi xảy ra, Vui lòng thử lại sau.</p>');
                $("#dvNewsPostAlert").fadeIn(function () {
                    setTimeout(function () {
                        $("#dvNewsPostAlert").attr("style", "display:none");
                    }, 5000);
                });
            }

        }
    });
}
function RemoveAttachFileEdit(fn, date, id, guid, userid) {
    debugger;
    $.ajax({
        url: rootnews + '/them-tin-moi-suggestion-ajax/RemoveFileAttachEdit',
        type: 'POST',
        data: { strFileName: fn, strdate: date, strIdNews: id, strGuid: guid, strUserId: userid },
        datatype: 'json',
        success: function (d) {
            if (d == "1") {
                $('#img-' + guid).parent().remove();
                $('#img-' + guid).remove();
                $('#rev-' + guid).remove();

            }
            else {
                $('#dvNewsPostAlertSub').html('<p>Có lỗi xảy ra, Vui lòng thử lại sau.</p>');
                $("#dvNewsPostAlert").fadeIn(function () {
                    setTimeout(function () {
                        $("#dvNewsPostAlert").attr("style", "display:none");
                    }, 5000);
                });
            }

        }
    });
}
function LoadFileAttach(UserName) {
    $.ajax({
        url: rootnews + '/them-tin-moi-suggestion-ajax/ListFileAttach',
        type: 'POST',
        data: { UserName: UserName },
        cache: true,
        datatype: 'json',
        success: function (d) {
            $("#dv_fileattach").html(d);
        }
    });
}
function LoadFileAttachEdit(id) {

    $("#file-" + id).html('');


}
function cmtattachfile(userid) {

    $("#upload-file").html5Uploader({
        name: "upload-file",
        postUrl: rootnews + '/them-tin-moi-suggestion-ajax/PostImage?userid=' + userid,
        onServerProgress: function () { // Called periodically while the data is being posted.

            var preloading = "<li class=\"cmt-pre-loading\" style=\"border:none\"><img src='" + rootnews + "/Content/images/sites/loading.gif' style=\"width:16px;height:16px;\"/></li>";
            $('#dv_fileattach').append(preloading);
        },
        onSuccess: function (e) { // Called when the read operation is successfully completed.
            var data = $.parseJSON(e.currentTarget.response);

            //c2:<li><span>sss.jpg</span> <a>x</a></li>
            if (data.message == "upload sucessfully") {

                var list = $("#dv_fileattach");
                var strhtml = "<li class='clearfix'><span id='img-" + data.ImageId + "' name='" + data.ImageName + "' style=\"float:left\">" + data.ImageName + "</span><span  style=\"float:left;margin-left:10px;\"><img style=\"cursor:pointer\"   id='rev-" + data.ImageId + "' src='" + rootnews + "/Content/images/sites/icon-unlike.png' onclick=\"RemoveAttachFile('" + data.ImageId + "','" + data.ImageName + "','" + userid + "')\"/><span></li>";

                list.append(strhtml);
                $('li.cmt-pre-loading').remove();
            }
            else if (data.message == "img") {
                alert("Vui lòng chọn file không phải là file hình");
                $('li.cmt-pre-loading').remove();
            }
            else if (data.message == "Error") {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
                $('li.cmt-pre-loading').remove();
            }
        },
        onServerError: function (e) {
        }
    });

}

function SumbitForumPostQuick(f, id, cateid, userid, ischoicecate) {
    $("#btnLoadingNewsPost").show();
    $("#btnCreateNewsPost").hide();
    $("#btnPreviewNewsPost").show();
    var tt = 0, ct = 0;
    var ttvl = editor.getData();//$("#txtNewsPostTitleQuick").val();
    if ($.trim(ttvl) == '') {
        tt = 1;
    }

    if (tt == 0) {

        var fr = $("#forum").val();
        if (ischoicecate == 1) {
            fr = $("#sllistcategory").val();

        }
        if (fr > 0) {
            var sfr = 0;
            var email = document.getElementById("subcribe-to-topic").checked == true ? "1" : "0";

            model = { Title: '', Content: encodeURI(ttvl), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f, Userid: userid }
            var urllink = rootnews + '/them-tin-moi-load-subcategory-ajax/NewsPost';
            if (f == 1) {
                model = { CateId: cateid, Id: id, Title: '', Content: encodeURI(ttvl), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f, Userid: userid }
            }

            $.ajax({
                url: urllink,
                type: 'Post',
                data: model,
                cache: true,
                error: function (d1) {
                    $('#dvNewsPostAlertSub').html('<p>Lỗi hệ thống. Vui lòng thử lại sau</p>');
                    $("#dvNewsPostAlert").fadeIn(function () {
                        setTimeout(function () {
                            $("#dvNewsPostAlert").attr("style", "display:none");
                        }, 5000);
                    });
                    $("#btnLoadingNewsPost").hide();
                    $("#btnCreateNewsPost").show();
                },
                success: function (d) {
                    if (d != "0" && d != "-3" && d != "-2") {
                        var confrm = "Đã tạo chủ đề thành công, Bạn sẽ được chuyển qua trang chủ đề";
                        if (f == 1)
                            confrm = "Đã cập nhật chủ đề thành công, Bạn sẽ được chuyển qua trang chủ đề";
                        alert(confrm);

                        $("#dv_fileattach").html('');
                        //$("#txtNewsPostTitleQuick").val('');
                        editor.setData('');

                        var arrurl = window.location.pathname.split("-");
                        window.location.href = rootnews + "/chude-" + d + "?clear_cache=2";
                    }
                    else if (d == "0") {

                        $('#dvNewsPostAlertSub').html('<p>Có lỗi xảy ra, Vui lòng thử lại sau.</p>');
                        $("#dvNewsPostAlert").fadeIn(function () {
                            setTimeout(function () {
                                $("#dvNewsPostAlert").attr("style", "display:none");
                            }, 5000);
                        });
                        $("#btnLoadingNewsPost").hide();
                        $("#btnCreateNewsPost").show();
                    }
                    else if (d == "-3") {

                        $('#dvNewsPostAlertSub').html('<p>Không thể lưu file đính kèm. Vui lòng thử lại sau</p>');
                        $("#dvNewsPostAlert").fadeIn(function () {
                            setTimeout(function () {
                                $("#dvNewsPostAlert").attr("style", "display:none");
                            }, 5000);
                        });
                        $("#btnLoadingNewsPost").hide();
                        $("#btnCreateNewsPost").show();
                    }
                    else if (d == "-2") {
                        window.location = "/cong-tac-vien";
                    }
                }
            })
        }
        else {
            $('#dvNewsPostAlertSub').html('<p>Vui lòng chọn chủ đề</p>');
            $("#dvNewsPostAlert").fadeIn(function () {
                setTimeout(function () {
                    $("#dvNewsPostAlert").attr("style", "display:none");
                }, 5000);
            });
            $("#btnLoadingNewsPost").hide();
            $("#btnCreateNewsPost").show();
        }
    }
    else {
        $('#dvNewsPostAlertSub').html('<p>Nhập thông tin còn thiếu.</p>');
        $("#dvNewsPostAlert").fadeIn(function () {
            setTimeout(function () {
                $("#dvNewsPostAlert").attr("style", "display:none");
            }, 5000);
        });
        $("#btnLoadingNewsPost").hide();
        $("#btnCreateNewsPost").show();
    }
}
function ValidNewsPost(f, id, cateid, userid, ischoicecate) {
    debugger;
    if ($("#txtNewsPostTitle").css('display') == 'none') {
        SumbitForumPostQuick(f, id, cateid, userid, ischoicecate);
    }
    else {

        $("#btnLoadingNewsPost").show();
        $("#btnCreateNewsPost").hide();
        $("#btnPreviewNewsPost").show();

        var tt = 0, ct = 0, st = 0;
        var ttvl = $("#txtNewsPostTitle").val();
        var stvl = $("#txtNewsPostShortDesc").val();
        var key = $("#txtNewsPostKeyWord").val();
        if ($.trim(ttvl) == '') {
            tt = 1;
        }
        if ($.trim(stvl) == '') {
            st = 1;
        }
        if (editor.getData() == "") {
            ct = 1;
        }

        if (tt == 0 && ct == 0 && st == 0) {

            var fr = $("#forum").val();
            var arrNewsCate = [];
            if (ischoicecate == 1) {
                fr = $("#sllistcategory").val();
                $("input[name='NewsCate[]']:checked").each(function () { arrNewsCate.push($(this).val()); });
            }
            //if (fr > 0) {
            if (arrNewsCate.length > 0) {
                var sfr = 0;
                var email = document.getElementById("subcribe-to-topic").checked == true ? "1" : "0";
                var imageurl = "";
                if ($("#chksetimage").is(":checked") == false)
                    imageurl = $("#img-setimagemain-0").attr('src');
                //model = { imageurl: encodeURI(imageurl), Shortdesc: encodeURI(stvl), Title: encodeURI(ttvl), Content: encodeURI(editor.getData()), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f, Userid: userid, Keyword: encodeURI(key), ListNewsCateID: arrNewsCate.toString() }
                model = { imageurl: encodeURI(imageurl), Shortdesc: (stvl), Title: (ttvl), Content: (editor.getData()), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f, Userid: userid, Keyword: (key), ListNewsCateID: arrNewsCate.toString() }
                var urllink = rootnews + '/them-tin-moi-load-subcategory-ajax/NewsPost';
                if (f == 1) {
                    model = { imageurl: encodeURI(imageurl), CateId: cateid, Id: id, Shortdesc: (stvl), Title: (ttvl), Content: (editor.getData()), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f, Userid: userid, Keyword: (key), ListNewsCateID: arrNewsCate.toString() }

                }
                $.ajax({
                    url: urllink,
                    type: 'Post',
                    data: model,
                    cache: true,
                    error: function (d1) {
                        $('#dvNewsPostAlertSub').html('<p>Lỗi hệ thống.</p>');
                        $("#dvNewsPostAlert").fadeIn(function () {
                            setTimeout(function () {
                                $("#dvNewsPostAlert").attr("style", "display:none");
                            }, 5000);
                        });
                        $("#btnLoadingNewsPost").hide();
                        $("#btnCreateNewsPost").show();
                    },
                    success: function (d) {
                        if (d != "0" && d != "-3" && d != "-2" && d != "-4") {
                            var confrm = "Đã tạo chủ đề thành công, Bạn sẽ được chuyển qua trang chi tiết";
                            alert(confrm);
                            $("#dv_fileattach").html('');
                            $("#txtNewsPostTitle").val('');

                            var arrurl = window.location.pathname.split("-");

                            window.location.href = window.location.pathname + "?clear_cache=1";


                        }
                        else if (d == "0") {

                            $('#dvNewsPostAlertSub').html('<p>Có lỗi xảy ra, Vui lòng thử lại sau.</p>');
                            $("#dvNewsPostAlert").fadeIn(function () {
                                setTimeout(function () {
                                    $("#dvNewsPostAlert").attr("style", "display:none");
                                }, 5000);
                            });
                            $("#btnLoadingNewsPost").hide();
                            $("#btnCreateNewsPost").show();
                        }
                        else if (d == "-3") {

                            $('#dvNewsPostAlertSub').html('<p>Không thể lưu file đính kèm. Vui lòng thử lại sau</p>');
                            $("#dvNewsPostAlert").fadeIn(function () {
                                setTimeout(function () {
                                    $("#dvNewsPostAlert").attr("style", "display:none");
                                }, 5000);
                            });
                            $("#btnLoadingNewsPost").hide();
                            $("#btnCreateNewsPost").show();
                        }
                        else if (d == "-2") {
                            window.location = "/cong-tac-vien";
                        }
                        else if (d == "-4") {
                            $('#dvNewsPostAlertSub').html('<p>Bạn không có quyền hạn chỉnh sửa trên site này.</p>');
                            $("#dvNewsPostAlert").fadeIn(function () {
                                setTimeout(function () {
                                    $("#dvNewsPostAlert").attr("style", "display:none");
                                }, 5000);
                            });
                            $("#btnLoadingNewsPost").hide();
                            $("#btnCreateNewsPost").show();
                        }
                    }
                })
            }
            else {
                //$('#dvNewsPostAlertSub').html('<p>Vui lòng chọn chủ đề</p>');Chuyên mục
                $('#dvNewsPostAlertSub').html('<p>Vui lòng chọn chuyên mục</p>');
                $("#dvNewsPostAlert").fadeIn(function () {
                    setTimeout(function () {
                        $("#dvNewsPostAlert").attr("style", "display:none");
                    }, 5000);
                });
                $("#btnLoadingNewsPost").hide();
                $("#btnCreateNewsPost").show();
            }
        }
        else {
            $('#dvNewsPostAlertSub').html('<p>Nhập thông tin còn thiếu.</p>');
            $("#dvNewsPostAlert").fadeIn(function () {
                setTimeout(function () {
                    $("#dvNewsPostAlert").attr("style", "display:none");
                }, 5000);
            });
            $("#btnLoadingNewsPost").hide();
            $("#btnCreateNewsPost").show();
        }
    }
}
function LoadSubCate(id) {
    $.ajax({
        url: rootnews + '/them-tin-moi-load-subcategory-ajax/BindSubCategory',
        type: 'GET',
        data: { IntIdCate: id.value },
        cache: true,
        success: function (d) {
            if (d == '') {

                document.getElementById("sub-forum").disabled = true;
                $('#sub-forum').html('');
            }
            else {

                document.getElementById("sub-forum").disabled = false;
                $('#sub-forum').html(d);

            }
        }
    })
}
var arrsuggest = {};
function Suggestionkey(id) {
    var objval = $("#" + id).val();
    if (arrsuggest[objval]) {
        var darr = arrsuggest[objval];
        if (darr[0] == "0") {
            $('#spLinkSugestNewsPost').hide();
            $('#Suggestion').hide();
        }
        else {
            $('#spLinkSugestNewsPost').show();
            $('#linkSuggestNewPost').html('Tìm thấy ' + darr[0] + ' chủ đề liên quan, bạn có thể tham khảo(<span class="viewallsuggest">xem tất cả</span>)');
            $('#linkSuggestNewPost').hide();
            $('#aSuggestClose').html('Tìm thấy ' + darr[0] + ' chủ đề liên quan, bạn có thể tham khảo');
            $('#aSuggestClose').show();
            $('#Suggestion').html(darr[1]);
            $('#Suggestion').show();
        }
    }
    else {
        //suggestion
        if (objval.length > 3) {
            $.ajax({
                url: rootnews + '/them-tin-moi-suggestion-ajax/SearchNewsPostSuggest',
                type: 'POST',
                data: { Key: objval },
                cache: true,
                datatype: 'json',
                success: function (d) {
                    if (d == null) {
                        $('#spLinkSugestNewsPost').hide();
                        $('#Suggestion').hide();
                        return;
                    }
                    else {

                        arrsuggest[objval] = d;
                        if (d[0] == "0") {
                            $('#spLinkSugestNewsPost').hide();
                            $('#Suggestion').hide();
                        }
                        else {
                            $('#spLinkSugestNewsPost').show();
                            $('#linkSuggestNewPost').html('Tìm thấy ' + d[0] + ' chủ đề liên quan, bạn có thể tham khảo(<span class="viewallsuggest">xem tất cả</span>)');
                            $('#linkSuggestNewPost').hide();
                            $('#aSuggestClose').html('Tìm thấy ' + d[0] + ' chủ đề liên quan, bạn có thể tham khảo');
                            $('#aSuggestClose').show();
                            $('#Suggestion').html(d[1]);
                            $('#Suggestion').show();
                        }
                    }
                },
                error: function (d1) {

                }
            })
        }
        else {
            $('#aSuggestClose').hide();
            $('#Suggestion').hide();
        }
    }
}
function CountWordNewsPost(id) {
    var objval = $("#" + id).val();
    $('#spnCountWordNewsPost').text(objval.length);
}
function LikeNews(id) {
    $.ajax({
        url: rootnews + '/them-tin-moi-load-subcategory-ajax/LikeNews',
        type: 'Post',
        data: { strNewsid: id },
        datatype: 'json',
        success: function (d) {
            $('#newslike').html(d);
        }
    });
}
//Add by Quang
function StickyInterestedNewsDetail() {
    var scroll_top = $(window).scrollTop();
    var _height = $('#site-body #most-view').height();
    //var _offset_top = $('#site-wrapper .main #news-navigation').offset().top;
    var _offset_top = $('#site-wrapper .user-wrapper').offset().top;
    var _offset_bottom = $('#site-footer').offset().top;

    if (scroll_top < _offset_top) {
        $('#site-body #most-view').removeClass('sticky').removeClass('absolute');
    }
    else {
        if (scroll_top + _height < _offset_bottom) {
            $('#site-body #most-view').addClass('sticky').removeClass('absolute');
        }
        else {
            $('#site-body #most-view').removeClass('sticky').addClass('absolute');
        }
    }
}
function showdivpostforum() {
    debugger;
    $.ajax({
        url: rootnews + '/them-tin-moi-suggestion-ajax/CheckLogin',
        type: 'POST',
        data: '',
        datatype: 'json',
        success: function (d) {

            if (d == "1") {
                $("#sllistcategory").val($("#hfCatIDCurrent").val());
                $("#postforumtext").hide();
                $("#postformum").show();
                showpostforumpro(0);

            }
            else {
                window.location.href = d;
            }

        }
    });



}
$(document).ready(function () {
    //news post
    $('#create-topic .form-wrapper .row-wrapper .input-wrapper .result-count a').click(function (event) {
        event.preventDefault();
        $('#create-topic .form-wrapper .row-wrapper .input-wrapper .result-count a').toggle();
        $('#create-topic .form-wrapper .suggestion').slideToggle();
    });
    $('img.lazy').lazyload({
        effect: "fadeIn"
    });
    //cmtattachimagemain();


});
function showpostforumpro(f) {
    debugger;
    if (f == 0) {
        $("#tilepro").hide();
        $("#suggest_descpro").hide();
        //$("#txtNewsPostTitleQuick").show();
        $("#txtNewsPostTitle").hide();
        $("#transferpostQuick").show();
        $("#transferpost").hide();
        //$("#contentpostforum").hide();
        $("#shortdescription").hide();
        //$("#imgmain").hide();
        $("#hinhdaidien").hide();
        $("#dvcheckhinhdaidien").hide();
        //if ($("#chksetimage").is(":checked") == true) {           
        //    $("#hinhdaidien").hide();
        //    $("#dvcheckhinhdaidien").css('margin-top', '0px');
        //}
        //else {
        //    $("#chksetimage").attr('checked', false);
        //    $("#hinhdaidien").show();
        //    $("#dvcheckhinhdaidien").css('margin-top', '84px');

        //}
    }
    else {
        $("#tilepro").show();
        $("#suggest_descpro").show();
        //$("#txtNewsPostTitleQuick").hide();
        $("#txtNewsPostTitle").show();
        $("#transferpostQuick").hide();
        $("#transferpost").show();
        //$("#contentpostforum").show();
        $("#shortdescription").show();

        $("#hinhdaidien").show();
        $("#imgmain").show();
        $("#dvcheckhinhdaidien").show();
        if ($("#chksetimage").is(":checked") == true) {
            $("#hinhdaidien").hide();
            $("#imgmain").hide();

        }
        else {
            $("#chksetimage").attr('checked', false);
            $("#hinhdaidien").show();
            $("#imgmain").show();

        }
        cmtattachimagemain();
    }


}

function CancelForumPost() {
    $("#dv_fileattach").html('');
    //$("#txtNewsPostTitleQuick").val('');
    $("#txtNewsPostTitle").val('');
    $("#txtNewsPostShortDesc").val('');
    editor.setData('');
    $("#postforumtext").show();
    $("#postformum").hide();

}

function showeditforumpostnewdetail(f, id) {

    if (f == 1) {
        $.ajax({
            url: rootnews + '/them-tin-moi-suggestion-ajax/CheckLoginEdit',
            type: 'POST',
            data: { intNewsId: id },
            datatype: 'json',
            success: function (d) {

                if (d == "1") {
                    $("#forumcontentdetailmain").hide();
                    $("#dvtitle").hide();
                    $("#editforumdetail").show();
                }
                else if (d != "0") {
                    window.location.href = d;
                }

            }
        });

    }
    else {
        $("#dvtitle").show();
        $("#forumcontentdetailmain").show();
        $("#editforumdetail").hide();
    }
}
function BackDetailNews() {
    var arrurl = window.location.pathname;
    window.location.href = arrurl.substring(0, arrurl.length - 2);
}
function newsdetail_delete(id) {
    var str = "Bạn có chắc muốn xóa tin này?";
    if (confirm(str)) {
        $.ajax({
            url: rootnews + '/them-tin-moi-suggestion-ajax/DeleteNewsDetail',
            type: 'POST',
            data: { intNewsId: id },
            datatype: 'json',
            success: function (d) {
                if (d == "1") {
                    var arrurl = window.location.pathname;
                    window.location.href = arrurl + "?clear_cache=1";
                }
                else {
                    alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
                }

            }
        });
    }
}
function previeweditnewforumQuick(f, id, cateid, userid) {
    debugger;
    $("#btnLoadingNewsPost").show();
    $("#btnCreateNewsPost").hide();
    $("#btnPreviewNewsPost").hide();
    var tt = 0, ct = 0;
    var ttvl = editor.getData();//$("#txtNewsPostTitleQuick").val();
    if ($.trim(ttvl) == '') {
        tt = 1;
    }

    if (tt == 0) {

        var fr = $("#sllistcategory").val();

        if (fr > 0) {

            var sfr = 0;
            var email = document.getElementById("subcribe-to-topic").checked == true ? "1" : "0";


            model = { Title: '', Content: encodeURI(ttvl), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f }
            var urllink = rootnews + '/them-tin-moi-load-subcategory-ajax/previeweditnewforum';

            $.ajax({
                url: urllink,
                type: 'Post',
                data: model,
                cache: true,
                success: function (d) {
                    $("#btnLoadingNewsPost").hide();
                    $("#btnCreateNewsPost").show();
                    $("#btnPreviewNewsPost").show();

                    if (f == 1) {
                        $('#previewforumdetail').html(d);
                        $('#previewforumdetail').show();
                        $('#editforumdetail').hide();
                    }
                    else {
                        $('#news-detail').html(d);
                        $('#news-detail').show();
                        $('#create-topic').hide();
                    }

                },
                error: function (d1) {
                    $('#dvNewsPostAlertSub').html('<p>Lỗi hệ thống( sai đường dẫn ).</p>');
                    $("#dvNewsPostAlert").fadeIn(function () {
                        setTimeout(function () {
                            $("#dvNewsPostAlert").attr("style", "display:none");
                        }, 5000);
                    });
                    $("#btnLoadingNewsPost").hide();
                    $("#btnCreateNewsPost").show();
                    $("#btnPreviewNewsPost").show();

                }
            })
        }
        else {
            $("#btnLoadingNewsPost").hide();
            $("#btnCreateNewsPost").show();
            $("#btnPreviewNewsPost").show();
            $('#dvNewsPostAlertSub').html('<p>Vui lòng chọn chủ đề.</p>');

            $("#dvNewsPostAlert").fadeIn(function () {
                setTimeout(function () {
                    $("#dvNewsPostAlert").attr("style", "display:none");
                }, 5000);
            });

        }
    }
    else {
        $("#btnLoadingNewsPost").hide();
        $("#btnCreateNewsPost").show();
        $("#btnPreviewNewsPost").show();

        $('#dvNewsPostAlertSub').html('<p>Nhập thông tin còn thiếu.</p>');
        $("#dvNewsPostAlert").fadeIn(function () {
            setTimeout(function () {
                $("#dvNewsPostAlert").attr("style", "display:none");
            }, 5000);
        });
    }

}
function previeweditnewforum(f, id, cateid, userid) {
    debugger;
   
    if ($("#txtNewsPostTitle").css('display') == 'none') {
        previeweditnewforumQuick(f, id, cateid, userid);
    }
    else {

        $("#btnLoadingNewsPost").show();
        $("#btnCreateNewsPost").hide();
        $("#btnPreviewNewsPost").hide();
        var tt = 0, ct = 0, st = 0;
        var ttvl = $("#txtNewsPostTitle").val();
        if ($.trim(ttvl) == '') {
            tt = 1;
        }
        if (editor.getData() == "") {
            ct = 1;
        }
        var stvl = $("#txtNewsPostShortDesc").val();

        if ($.trim(stvl) == '') {
            st = 1;
        }
        if (tt == 0 && ct == 0 && st == 0) {
            var fr = $("#sllistcategory").val();
            var arrNewsCate = [];
            $("input[name='NewsCate[]']:checked").each(function () { arrNewsCate.push($(this).val()); });

            //if (fr > 0) {
            if (arrNewsCate.length > 0) {
                var sfr = 0;
                var email = document.getElementById("subcribe-to-topic").checked == true ? "1" : "0";
                var imagename = $("#idimgmain").attr("name");
                //model = { Image:imagename, Shortdesc: encodeURI(stvl), Title: encodeURI(ttvl), Content: encodeURI(editor.getData()), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f }
                model = { Title: encodeURI(ttvl), Content: encodeURI(editor.getData()), Forum: fr, SubForum: sfr, IsMail: email, Fcreate: f }
                $.ajax({
                    url: rootnews + '/them-tin-moi-load-subcategory-ajax/previeweditnewforum',
                    type: 'Post',
                    data: model,
                    cache: true,
                    success: function (d) {
                        $("#btnLoadingNewsPost").hide();
                        $("#btnCreateNewsPost").show();
                        $("#btnPreviewNewsPost").show();

                        if (f == 1) {
                            $('#previewforumdetail').html(d);
                            $('#previewforumdetail').show();
                            $('#editforumdetail').hide();
                        }
                        else {
                            $('#news-detail').html(d);
                            $('#news-detail').show();
                            $('#create-topic').hide();
                        }
                    },
                    error: function (d1) {
                        $('#dvNewsPostAlertSub').html('<p>Lỗi hệ thống( sai đường dẫn ).</p>');
                        $("#dvNewsPostAlert").fadeIn(function () {
                            setTimeout(function () {
                                $("#dvNewsPostAlert").attr("style", "display:none");
                            }, 5000);
                        });
                        $("#btnLoadingNewsPost").hide();
                        $("#btnCreateNewsPost").show();
                        $("#btnPreviewNewsPost").show();

                    }
                })
            }
            else {
                $("#btnLoadingNewsPost").hide();
                $("#btnCreateNewsPost").show();
                $("#btnPreviewNewsPost").show();
                $('#dvNewsPostAlertSub').html('<p>Vui lòng chọn chủ đề</p>');

                $("#dvNewsPostAlert").fadeIn(function () {
                    setTimeout(function () {
                        $("#dvNewsPostAlert").attr("style", "display:none");
                    }, 5000);
                });

            }
        }
        else {
            $("#btnLoadingNewsPost").hide();
            $("#btnCreateNewsPost").show();
            $("#btnPreviewNewsPost").show();

            $('#dvNewsPostAlertSub').html('<p>Nhập thông tin còn thiếu.</p>');
            $("#dvNewsPostAlert").fadeIn(function () {
                setTimeout(function () {
                    $("#dvNewsPostAlert").attr("style", "display:none");
                }, 5000);
            });
        }

    }

}

function offprevieweditnewforum(f) {
    if (f == 1) {
        $('#previewforumdetail').hide();
        $('#editforumdetail').show();
    }
    else {
        $('#news-detail').hide();
        $('#create-topic').show();
    }
}
function newsdetail_opentooltip() {
    $(".tooltip").addClass('in');
}
function newsdetail_hidetooltip() {
    $(".tooltip").removeClass('in');
}
function newsdetail_savetrack(newsid, userid) {
    $.ajax({
        url: rootnews + '/them-tin-moi-suggestion-ajax/SaveTrackNewsDetail',
        type: 'POST',
        data: { intNewsId: newsid, strUserId: userid },
        datatype: 'json',
        success: function (d) {

            if (d == "1") {
                alert("Đã lưu thành công tin này vào danh sách theo dõi của bạn.");
            }
            else if (d != "0") {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
            }

        }
    });
}
function PageBoxTrack(totalrecord, currentpage, f) {
    if (f == "track")
        $("#trackloading").show();
    else if (f == "commented")
        $("#commentedloading").show();
    else $("#contributionloading").show();
    $.ajax({
        url: rootnews + '/aj/Member/LoadPageTrack',
        type: 'POST',
        data: { totalrecord: totalrecord, currentpage: currentpage, box: f },
        datatype: 'json',
        success: function (d) {
            if (f == "track") {
                $("#trackloading").hide();
                $("#listtrackofmember-content").html(d[0]);
                $("#listtrackofmember-content").append(d[1]);
            }
            else if (f == "contribution") {
                $("#contributionloading").hide();
                $("#listcontributionofmember-content").html(d[0]);
                $("#listcontributionofmember-content").append(d[1]);
            }
            else if (f == "commented") {
                $("#commentedloading").hide();
                $("#listcommentedofmember-content").html(d[0]);
                $("#listcommentedofmember-content").append(d[1]);
            }
            else if (f == "message") {
                $("#messageloading").hide();
                $("#listmessageofmember-content").html(d[0]);
                $("#listmessageofmember-content").append(d[1]);
            }
        }
    });

}

function PageBoxMessage(totalrecord, currentpage) {
    f = $("#ddlfiltermessage").val();
    $("#messageloading").show();
    $.ajax({
        url: rootnews + '/aj/Member/LoadPageMessage',
        type: 'POST',
        data: { totalrecord: totalrecord, currentpage: currentpage, orderby: f },
        datatype: 'json',
        success: function (d) {

            $("#messageloading").hide();
            $("#listmessageofmember-content").html(d[0]);
            $("#listmessageofmember-content").append(d[1]);

        }
    });

}

function PageBoxMessageAll() {
    f = $("#ddlfiltermessage").val();
    $("#messageloading").show();
    $.ajax({
        url: rootnews + '/aj/Member/LoadPageMessageAll',
        type: 'POST',
        data: { orderby: f },
        datatype: 'json',
        success: function (d) {

            $("#messageloading").hide();
            $("#listmessageofmember-content").html(d[0]);
            $("#listmessageofmember-content").append(d[1]);

        }
    });

}
function member_selectall(status) {
    $('input[name=messagecheck]').each(function () {
        $(this).prop('checked', status);
    });
}

function membermessage_filter() {

    //var v = $("#ddlfiltermessage option:selected").val();
    var t = $("#ddlfiltermessage option:selected").text();
    $("#newsdropdownmessage").html(t);
    PageBoxMessageAll();

}
function member_messageread(totalrecord, f) {
    $("#messageloading").show();

    var arr = "";
    var l = $("input[name=messagecheck]:checked").length;
    if (l > 0) {
        $("input[name=messagecheck]:checked").each(function () {
            var id = $(this).val();

            arr += id + ",";
        });

        if (arr.indexOf(",") > 0)
            arr = arr.substring(0, arr.length - 1);
        $.ajax({
            url: rootnews + '/aj/Member/UpdateIsReadNewsForumUser_Message',
            type: 'POST',
            data: { listmessageid: arr, isread: f },
            datatype: 'json',
            success: function (d) {

                if (d == "1") {
                    $("#messageloading").hide();
                    $("#message-ok").html("Đã cập nhật thành công");
                    $("#message-ok").fadeIn(function () {
                        setTimeout(function () {
                            $("message-ok").hide();
                            $("#message-ok").html('');
                        }, 1000);
                    });
                    PageBoxMessage(totalrecord, 0);

                }
                else if (d != "0") {
                    $("#messageloading").hide();
                    $("#message-error").html("Có lỗi xảy ra. Vui lòng thử lại sau");
                    $("#message-error").fadeIn(function () {
                        setTimeout(function () {
                            $("message-error").hide();
                            $("#message-error").html('');
                        }, 2000);
                    });
                }

            }
        });
    }
    else {
        $("#messageloading").hide();
        $("#message-error").html("Vui lòng check chọn");
        $("#message-error").fadeIn(function () {
            setTimeout(function () {
                $("message-error").hide();
                $("#message-error").html('');
            }, 2000);
        });

    }
}
function member_messagedeleteitem(id) {
    var strconfirm = "Bạn chắc muốn xóa tin nhắn?";
    if (confirm(strconfirm)) {
        $("#messageloading").show();
        $.ajax({
            url: rootnews + '/aj/Member/DelNewsForumUser_Message',
            type: 'POST',
            data: { listmessageid: id },
            datatype: 'json',
            success: function (d) {

                if (d == "1") {
                    $("#messageloading").hide();
                    PageBoxMessageAll();

                }
                else if (d != "0") {
                    $("#messageloading").hide();
                    $("#message-error").html("Có lỗi xảy ra. Vui lòng thử lại sau");
                    $("#message-error").fadeIn(function () {
                        setTimeout(function () {
                            $("message-error").hide();
                            $("#message-error").html('');
                        }, 2000);
                    });
                }

            }
        });
    }
}
function member_messagedelete() {
    var l = $("input[name=messagecheck]:checked").length;
    if (l > 0) {
        var strconfirm = "Bạn chắc muốn xóa tin nhắn?";
        if (confirm(strconfirm)) {
            $("#messageloading").show();

            var arr = "";


            $("input[name=messagecheck]:checked").each(function () {
                var id = $(this).val();

                arr += id + ",";
            });

            if (arr.indexOf(",") > 0)
                arr = arr.substring(0, arr.length - 1);
            $.ajax({
                url: rootnews + '/aj/Member/DelNewsForumUser_Message',
                type: 'POST',
                data: { listmessageid: arr },
                datatype: 'json',
                success: function (d) {

                    if (d == "1") {
                        $("#messageloading").hide();
                        PageBoxMessageAll();

                    }
                    else if (d != "0") {
                        $("#messageloading").hide();
                        $("#message-error").html("Có lỗi xảy ra. Vui lòng thử lại sau");
                        $("#message-error").fadeIn(function () {
                            setTimeout(function () {
                                $("message-error").hide();
                                $("#message-error").html('');
                            }, 2000);
                        });
                    }

                }
            });
        }

    }
    else {
        $("#messageloading").hide();
        $("#message-error").html("Vui lòng check chọn");
        $("#message-error").fadeIn(function () {
            setTimeout(function () {
                $("message-error").hide();
                $("#message-error").html('');
            }, 2000);
        });

    }
}
function member_showdeactiveaccount() {
    if ($("#showdeactiveaccount").css('display') == "none")
        $("#showdeactiveaccount").fadeIn();
    else $("#showdeactiveaccount").fadeOut();
}
function member_deactiveaccount() {
    var v = $("#passdeactive").val();
    if ($.trim(v) != "") {
        var strconfirm = "Bạn chắc chắn muốn hủy tài khoản";
        if (confirm(strconfirm)) {
            var v = $("#passdeactive").val();
            $("#dlding").show();
            $.ajax({
                url: rootnews + '/aj/Member/DeactiveAccount',
                type: 'POST',
                data: { pass: v },
                datatype: 'json',
                success: function (d) {

                    if (d == "1") {
                        $("#dlding").hide();
                        window.location.href = rootnews;

                    }
                    else if (d != "0") {
                        $("#dlding").hide();
                        $("#member_deactive_error").html("Có lỗi xảy ra. Vui lòng thử lại sau");
                        $("#member_deactive_error").fadeIn(function () {
                            setTimeout(function () {
                                $("#member_deactive_error").hide();
                                $("#member_deactive_error").html('');
                            }, 2000);
                        });
                    }

                }
            });
        }
    }
    else {
        $("#member_deactive_error").fadeIn(function () {
            setTimeout(function () {
                $("#member_deactive_error").hide();
            }, 2000);
        });
    }
}
