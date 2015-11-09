//helper functions below
function tb_showIframe() {
    jQuery("#TB_load").remove();
    jQuery("#TB_window").css({ 'visibility': 'visible' });
}

function tb_remove() {
    jQuery("#TB_imageOff").unbind("click");
    jQuery("#TB_closeWindowButton").unbind("click");
    jQuery("#TB_window").fadeOut("fast", function () { jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove(); });
    jQuery("#TB_load").remove();
    if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
        jQuery("body", "html").css({ height: "auto", width: "auto" });
        jQuery("html").css("overflow", "");
    }
    jQuery(document).unbind('.thickbox');
    return false;
}

function tb_position() {
    var isIE6 = typeof document.body.style.maxHeight === "undefined";
    jQuery("#TB_window").css({ marginLeft: '-' + parseInt((TB_WIDTH / 2), 10) + 'px', width: TB_WIDTH + 'px' });
    if (!isIE6) { // take away IE6
        jQuery("#TB_window").css({ marginTop: '-' + parseInt((TB_HEIGHT / 2), 10) + 'px' });
    }
}

function tb_parseQuery(query) {
    var Params = {};
    if (!query) { return Params; }// return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) { continue; }
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function tb_getPageSize() {
    var de = document.documentElement;
    var w = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    arrayPageSize = [w, h];
    return arrayPageSize;
}

function tb_detectMacXFF() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox') != -1) {
        return true;
    }
}

function str_replace(search, replace, str) {
    var ra = replace instanceof Array, sa = str instanceof Array, l = (search = [].concat(search)).length, replace = [].concat(replace), i = (str = [].concat(str)).length;
    while (j = 0, i--)
        while (str[i] = str[i].split(search[j]).join(ra ? replace[j] || "" : replace[0]), ++j < l);
    return sa ? str : str[0];
}

function remove_unicode(str) {
    accents_arr = new Array(
		"à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă",
		"ằ", "ắ", "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề",
		"ế", "ệ", "ể", "ễ",
		"ì", "í", "ị", "ỉ", "ĩ",
		"ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ",
		"ờ", "ớ", "ợ", "ở", "ỡ",
		"ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
		"ỳ", "ý", "ỵ", "ỷ", "ỹ",
		"đ",
		"À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă",
		"Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
		"È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
		"Ì", "Í", "Ị", "Ỉ", "Ĩ",
		"Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ",
		"Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
		"Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
		"Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
		"Đ"
	);

    no_accents_arr = new Array(
		"a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a",
		"a", "a", "a", "a", "a", "a",
		"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
		"i", "i", "i", "i", "i",
		"o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",
		"o", "o", "o", "o", "o",
		"u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
		"y", "y", "y", "y", "y",
		"d",
		"A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
		"A", "A", "A", "A", "A",
		"E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
		"I", "I", "I", "I", "I",
		"O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O",
		"O", "O", "O", "O", "O",
		"U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
		"Y", "Y", "Y", "Y", "Y",
		"D"
	);

    return str_replace(accents_arr, no_accents_arr, str).replace(/(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g, "");
}

function urlTitle(text) {
    var characters = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '_', '{', '}', '[', ']', '|', '/', '<', '>', ',', '.', '?', '--'];

    for (var i = 0; i < characters.length; i++) {
        var char = String(characters[i]);
        text = text.replace(new RegExp('\\' + char, 'g'), '-');

    }
    var char = '"';
    text = text.replace(new RegExp('\\' + char, 'g'), '');
    text = text.toLowerCase();
    return text;
}

function ValidateAndFormatNumber(NumberTextBox) {
    var min = 0;
    max = 99999999999;
    if (NumberTextBox.value == "") return;

    UnFormatNumber(NumberTextBox);

    var IsFound = /^-?\d+\.{0,1}\d*$/.test(NumberTextBox.value);
    if (!IsFound) {
        //alert("Not a number");
        //NumberTextBox.value = FormatNumbers(min,min,max);
        NumberTextBox.focus();
        NumberTextBox.select();
        return;
    }

    if (isNaN(parseFloat(NumberTextBox.value))) {
        //alert("Number exceeding float range");
        //NumberTextBox.value = FormatNumbers(max,min,max);
        NumberTextBox.focus();
        NumberTextBox.select();
    }
    NumberTextBox.value = FormatNumbers(NumberTextBox.value, min, max);
    //    NumberTextBox.value = FormatNumbers(NumberTextBox.value,2,',','.','','','-','',min,max);
}

function UnFormatNumber(obj) {
    if (obj.value == "") return;

    obj.value = obj.value.replace(/,/gi, "");
}

function FormatNumbers(fnum, min, max) {
    if (fnum < min)
        fnum = min.toString();
    if (fnum > max)
        fnum = max.toString();
    var orgfnum = fnum;
    var flagneg = false;

    //    if (fnum.charAt(0) == "-") {
    //        flagneg = false;
    //        fnum = fnum.substr(1, fnum.length - 1);
    //    }    
    psplit = fnum.split(".");

    var cnum = psplit[0],
        parr = [],
        j = cnum.length,
        m = Math.floor(j / 3),
        n = cnum.length % 3 || 3;

    // break the number into chunks of 3 digits; first chunk may be less than 3
    for (var i = 0; i < j; i += n) {
        if (i != 0) { n = 3; }
        parr[parr.length] = cnum.substr(i, n);
        m -= 1;
    }

    // put chunks back together, separated by comma
    fnum = parr.join(",");

    // add the precision back in
    //if (psplit[1]) {fnum += "." + psplit[1];}
    if (orgfnum.indexOf(".") != -1) {
        fnum += "." + psplit[1];
    }

    if (flagneg == true) {
        fnum = "-" + fnum;
    }

    return fnum;
}

function onlyNumbers(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validatenewsnew(p) {
    if ($("#title").val() == "") {
        alert("Vui lòng nhập tiêu đề");
        $("#title").focus();
        return false;
    }
    if (jQuery("#wp-content-wrap").hasClass("tmce-active")) {
        if (CKEDITOR.instances["content"].getData() == "") {
            alert("Vui lòng nhập nội dung");
            $("#content").focus();
            return false;
        }
    }
    else {
        alert("Vui lòng nhập nội dung");
        $("#content").focus();
        return false;
    }

    var iCheck = 0;
    var iNews = true;
    $("input[name='NewsCate']").each(function () {
        if (this.checked) {
            iCheck++;
            if ($(this).val() == 1226)
                iNews = false;
        }
    });

    if (iCheck == 0) {
        alert("Vui lòng chọn danh mục tin tức");
        return false;
    }

    if (CKEDITOR.instances["shortdes"].getData().length < 220 || CKEDITOR.instances["shortdes"].getData().length > 400) {
        alert("Mô tả ngắn phải từ 220 đến 400 ký tự");
        $("#shortdes").focus();
        return false;
    }

    if ($("input[name=PostType]:checked").val() == 4)
        iNews = false;
    if (p == 0 && iNews)
        return checkSEO();

    return true;
}

function checkSEO() {
    $.ajax({
        url: rootPath + "/Common/CheckSEO",
        type: "POST",
        data: {
            title: $("#SEOTitle").val(),
            description: $("#SEODescription").val(),
            keyword: $("#SEOKeyword").val(),
            html: CKEDITOR.instances["content"].getData()
        },
        cache: false,
        success: function (e) {
            debugger;
            $("#divGroupHTML").html(e);
            $("#divGroupHTML").modal("show");
        }
    });

    return false;
}

function CancelUpdateNews() {
    $("#divGroupHTML").modal("hide");
}

function AddShortCode() {
    var code = $('#cbShortCode').val();
    var ret = '';
    switch (code) {
        case 'newscompare':
            ret = '[compare catid="ID ngành hàng" listid="id1, id2, id3" type="cao|trung|thap"]';
            break;
        case 'newsgallery':
            ret = '[Gallery id="ID tin tức" albumid="id"]';
            break;
        case 'newsspecs':
            ret = '[specification CatID="ID ngành hàng" ID="ID sản phẩm" type="cao|trung|thap"]';
            break;
        case 'prediction':
            ret = '[prediction id="id"]';
            break;
        case 'oldproduct':
            ret = '[OldProduct_Promotion listIMEI="id1,id2,id3"]';
            break;
        case 'bannerpromote':
            ret = '[Banner_Promotion mobileurl="URL1" mobileimg="IMG1" desktopurl="URL2" desktopimg="IMG2"]';
            break;
        case 'survey':
            ret = '[Survey id="id"]';
            break;
        case 'one_half':
            ret = '[one_half last="no"]Nội dung 1[/one_half]<br/>[one_half last="yes"]Nội dung 2[/one_half]';
            break;
        case 'one_third':
            ret = '[one_third last="no"]Nội dung 1[/one_third]<br/>[one_third last="no"]Nội dung 2[/one_third]<br/>[one_third last="yes"]Nội dung 3[/one_third]';
            break;
        case 'one_fourth':
            ret = '[one_fourth last="no"]Nội dung 1[/one_fourth]<br/>[one_fourth last="no"]Nội dung 2[/one_fourth]<br/>[one_fourth last="no"]Nội dung 3[/one_fourth]<br/>[one_fourth last="yes"]Nội dung 4[/one_fourth]';
            break;
        case 'cameragallery':
            ret = '[cameragallery]';
            break;
        case 'captionnews':
            ret = '[captionnews]text[/captionnews]';
            break;
        case 'dropcap':
            ret = '[dropcap]text[/dropcap]';
            break;
        case 'infobox':
            ret = '[info]text[/info]';
            break;
        case 'successbox':
            ret = '[success]text[/success]';
            break;
        case 'warningbox':
            ret = '[warning]text[/warning]';
            break;
        case 'nextpage':
            ret = '[nextpage]';
            break;
        case 'checklist':
            ret = '[checklist]<ul><li>Item #1</li><li>Item #2</li><li>Item #3</li></ul>[/checklist]';
            break;
        case 'arrowlist':
            ret = '[arrowlist]<ul><li>Item #1</li><li>Item #2</li><li>Item #3</li></ul>[/arrowlist]';
            break;
        case 'polls':
            ret = '[poll id="id"]';
            break;
        case 'gameapp':
            ret = '[Product_GameApp listid="id1,id2,id3"]';
            break;
        case 'gallerycompare':
            ret = '[gallerycompare img1="IMG1" img2="IMG2"]';
            break;
    }
    if (ret != '')
        CKEDITOR.instances["content"].insertHtml(ret);
    $('#cbShortCode').val('none');
}

function CheckExistName(ctrl, type) {
    if ($(ctrl).val() != $("#hfTitle").val()) {
        $.ajax({
            url: rootPath + "/Common/CheckExistName",
            data: { strName: $(ctrl).val(), intType: type },
            type: "POST",
            cache: false,
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (result) {
                $('.loading').hide();
                if (result == 1) {
                    alert("Tên này đã được sử dụng. Vui lòng nhập nội dung khác");
                    $(ctrl).val($("#hfTitle").val());
                }
            },
            error: function () {
                $('.loading').hide();
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
            }
        });
    }
}

$("#title").keypress(function (e) {
    $("#TitleCount").text($("#title").val().length);
    if ($("#title").val().length >= 300)
        e.preventDefault();

});
$('#title').blur(function () {
    $("#url1").css("display", "");
    $("#spanUrl").text(urlTitle(remove_unicode($("#title").val().toLowerCase())));
    $("#EditUrl").text(urlTitle(remove_unicode($("#title").val().toLowerCase())));
    $("#txtUrl").val(urlTitle(remove_unicode($("#title").val().toLowerCase())));
    $("#URLCount").text($("#spanUrl").text().length);
});

$("#txtUrl").keyup(function () {
    $("#URLCount").text($(this).val().length);
});

$('#EditUrl').click(function () {
    $('#url1').css("display", "none");
    $('#url2').css("display", "");
});
$('#UrlCancel').click(function () {
    $('#url1').css("display", "");
    $('#url2').css("display", "none");
});
$('#UrlOK').click(function () {
    $('#url1').css("display", "");
    $('#url2').css("display", "none");
    $("#spanUrl").text($("#txtUrl").val());
});
//Sửa trạng thái đăng tin
$('.edit-post-status').click(function () {
    $('#post-status-select').css("display", "");
    $(this).css("display", "none");
});
$('.save-post-status').click(function () {
    $('#post-status-select').css("display", "none");
    $('.edit-post-status').css("display", "");
    if ($("#post_status").val() == "publish") {
        $("#publishing-action").css("display", "");
        $("#save-post").css("display", "none");
    }
    else {
        $("#publishing-action").css("display", "none");
        $("#save-post").css("display", "");
        $("#save-post").val("Lưu " + $("#post_status option:selected").text().toLowerCase());
        $("#save-post").attr("name", $("#post_status").val());
    }
    $("#post-status-display").text($("#post_status option:selected").text());

});
$('.cancel-post-status').click(function () {
    $('#post-status-select').css("display", "none");
    $('.edit-post-status').css("display", "");
});

//Sửa ngày đăng tin
$('.edit-timestamp').click(function () {
    $('#timestampdiv').css("display", "");
    $(this).css("display", "none");
});
$('.save-timestamp').click(function () {
    $('#timestampdiv').css("display", "none");
    $('.edit-timestamp').css("display", "");
    $("#timestamp").html("Dự kiến: <b>" + $("#mm option:selected").text() + " " + $("#dd").val() + ", " + $("#yy").val() + " @ " + $("#hh").val() + ":" + $("#mn").val() + "</b>");
});
$('.cancel-timestamp').click(function () {
    $('#timestampdiv').css("display", "none");
    $('.edit-timestamp').css("display", "");
    $("#timestamp").html("Xuất bản <b>Ngay lập tức</b>");
});

function LimitWord(id, p) {
    if ($("#" + id).val().length > p)
        return false;
    return true;
}

function CheckNum(p) {
    if ($(p).attr("name") == "SEOTitle")
        $("#TitleNum").val($(p).val().length);
    else
        $("#DesNum").val($(p).val().length);
}

function CreatePagerNews(currPage, totalPage, numButton) {
    var pager = '';
    if (totalPage < 1 || currPage < 1) {
        return;
    }
    if (totalPage < numButton) {
        for (var i = 1; i <= totalPage; i++) {
            if (i != currPage) {
                pager += '<span class="btn">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active">';
                pager += i;
                pager += '</span>'
            }
        }
    }
    else {
        var center = Math.floor((numButton - 2) / 2);
        var left = currPage - center;
        if (left < 1)
            left = 1;
        var right = currPage + center;
        if (right > totalPage)
            right = totalPage;
        if (right - left <= 2 * center) {
            right = left + 2 * center;
        }
        if (currPage - center > 1) {
            pager += '<span class="btn">';
            pager += 1;
            pager += '</span>';
            if (currPage - center > 2) {
                pager += '<span class="btn">...</span>';
            }
        }
        else {
            right++;
        }

        if (right >= totalPage) {
            right = totalPage;
            left = right - (2 * center);
        }
        var temp = '';
        if (currPage + center < totalPage) {
            if (currPage + center < totalPage - 1) {
                temp += '<span class="btn">...</span>';
            }
            temp += '<span class="btn">';
            temp += totalPage;
            temp += '</span>';
        }
        else {
            left--;
        }
        for (var i = left; i <= right; i++) {
            if (i != currPage) {
                pager += '<span class="btn" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
        }
        pager += temp;
    }
    $('#newspg').html(pager);
    $('#newspg span').click(function () {
        CreatePagerNews(parseInt($(this).text()), totalPage, numButton);
        var pIndex = parseInt($(this).text());
        var viewtype = $("#hd-view-type").val();
        LoadListNews(pIndex);

        $('#newspg').css('opactity', '0.5');
        $('#newspg').css('cursor', 'progress');
        $('#news .ld').show();
    });
}

function LoadListNews(page) {
    var txtkw = $.trim($('#txtsearchkey').val());
    $.ajax({
        url: rootPath + "/Common/GetNewsList",
        type: 'GET',
        data: { page: page, key: txtkw },
        cache: false,
        beforeSend: function () {
            $('.loading').show();
        },
        success: function (result) {
            $('.loading').hide();
            $('#wpbody').html(result);
        },
        statusCode: {
            404: function (content) { alert('cannot find resource'); },
            505: function (content) { alert('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    })
}

function DoAction() {
    if ($('#cboAction-news option:selected').val() == 1 || $('#cboAction-news2 option:selected').val() == 1) {
        DeleteNews();
    }
}

function DeleteNews() {
    if (confirm('Bạn thật sự muốn xóa?')) {
        var lstItem = {};
        var i = 0;
        $('input:checkbox[id=chkNewsID]:checked').each(function () {
            lstItem[i] = $(this).val();
            i++;
        });
        if (lstItem.length == 0) {
            alert('Không có phần tử nào được chọn.');
            return;
        }
        $.ajax({
            url: rootPath + "/Common/DeleteNews",
            data: { idNews: lstItem },
            cache: false,
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (result) {
                $('.loading').hide();
                LoadListNews(parseInt($("#hdcurrentpage").val()));
                alert('Tác vụ thực hiện thành công.');
            },
            error: function (result) {
                $('.loading').hide();
                alert(result);
            }
        })
    }
}

function DeleteOneNews(id) {
    if (confirm('Bạn thật sự muốn xóa?')) {
        var lstItem = {};
        lstItem[0] = id;
        $.ajax({
            url: rootPath + "/Common/DeleteNews",
            data: { idNews: lstItem },
            cache: false,
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (result) {
                $('.loading').hide();
                LoadListNews(parseInt($("#hdcurrentpage").val()));
            },
            error: function (result) {
                $('.loading').hide();
                alert(result);
            }
        })
    }
}

function CreatePagerNewsVideo(currPage, totalPage, numButton) {
    var pager = '';
    if (totalPage < 1 || currPage < 1) {
        return;
    }
    if (totalPage < numButton) {
        for (var i = 1; i <= totalPage; i++) {
            if (i != currPage) {
                pager += '<span class="btn">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active">';
                pager += i;
                pager += '</span>'
            }
        }
    }
    else {
        var center = Math.floor((numButton - 2) / 2);
        var left = currPage - center;
        if (left < 1)
            left = 1;
        var right = currPage + center;
        if (right > totalPage)
            right = totalPage;
        if (right - left <= 2 * center) {
            right = left + 2 * center;
        }
        if (currPage - center > 1) {
            pager += '<span class="btn">';
            pager += 1;
            pager += '</span>';
            if (currPage - center > 2) {
                pager += '<span class="btn">...</span>';
            }
        }
        else {
            right++;
        }

        if (right >= totalPage) {
            right = totalPage;
            left = right - (2 * center);
        }
        var temp = '';
        if (currPage + center < totalPage) {
            if (currPage + center < totalPage - 1) {
                temp += '<span class="btn">...</span>';
            }
            temp += '<span class="btn">';
            temp += totalPage;
            temp += '</span>';
        }
        else {
            left--;
        }
        for (var i = left; i <= right; i++) {
            if (i != currPage) {
                pager += '<span class="btn" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
        }
        pager += temp;
    }
    $('#newspg').html(pager);
    $('#newspg span').click(function () {
        CreatePagerNewsVideo(parseInt($(this).text()), totalPage, numButton);
        var pIndex = parseInt($(this).text());
        LoadListNewsVideo(pIndex);

        $('#newspg').css('opactity', '0.5');
        $('#newspg').css('cursor', 'progress');
        $('#news .ld').show();
    });
}

function LoadListNewsVideo(page) {
    var txtkw = $.trim($('#txtsearchkey').val());
    var CatId = $('#cboCategory option:selected').val();
    var date = $("#datetimepicker").val();
    if (date.trim() == "") {
        alert('Bạn chưa chọn thời gian');
        return;
    }
    var dateFrom = date.split(" - ")[0];
    var dateTo = date.split(" - ")[1];
    $('#hddatefrom').val(dateFrom);
    $('#hddateto').val(dateTo);

    $.ajax({
        url: rootPath + "/Common/VideoList",
        type: 'GET',
        data: {
            page: page, strkw: txtkw, intCategoryId: CatId, datefrom: dateFrom, dateto: dateTo
        },
        cache: false,
        beforeSend: function () {
            $("#btnVideoNews").prop("disabled", true);
            $('.loading').show();
        },
        success: function (result) {
            $('.loading').hide();
            $("#btnVideoNews").prop("disabled", false);
            $('#wpbody').html(result);
        },
        statusCode: {
            404: function (content) { alert('cannot find resource'); },
            505: function (content) { alert('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    })
}

function AddVideo() {
    $("#hfVideoID").val(0);
    $('#txtVideoLink').val("");
    $('#spImage').html("");
    $('#txtVideoTitle').val("");
    $('#txtVideoDescription').val("");
    if ($("#NewsID").val() != undefined && $("#NewsID").val() != 0)
        $('#txtVideoNews').val($("#NewsID").val());
    else
        $('#txtVideoNews').val("");
    $('#txtMetaTitle').val("");
    $('#txtMetaKeyword').val("");
    $('#txtMetaDescription').val("");
    $('#txtKeyword').val("");
    $('#txtActivedDate').val("");
    $("#popTitle").html("THÊM MỚI VIDEO");
    $("#divPropValue").modal("show");
    $(".xdsoft_datetimepicker").css("z-index", "100002");
}

function AddVideoNews() {
    $('#txtVideoLink').val("");
    $('#spImage').html("");
    $('#txtVideoTitle').val("");
    $('#txtVideoDescription').val("");
    if ($("#NewsID").val() != undefined && $("#NewsID").val() != 0)
        $('#txtVideoNews').val($("#NewsID").val());
    else
        $('#txtVideoNews').val("");
    $('#txtMetaTitle').val("");
    $('#txtMetaKeyword').val("");
    $('#txtMetaDescription').val("");
    $('#txtKeyword').val("");
    $('#txtActivedDate').val("");
    $("#popTitle").html("THÊM MỚI VIDEO");
    $("#divPropValue").modal("show");
    $(".xdsoft_datetimepicker").css("z-index", "100002");
    if ($("#hfVideoID").val() == 0) {
        $.getScript("/ctv/uploadify/swfobject.js");
        $.getScript("/ctv/uploadify/jquery.uploadify.v2.1.4.min.js", function () {
            $('#fuVideoImage').uploadify({
                'uploader': '/ctv/uploadify/uploadify.swf',
                'script': '/ctv/uploadify/uploadify.ashx',
                'folder': '/ctv/uploadify/Uploads',
                'fileExt': '*.jpg;*.gif;*.png,*.jpeg',
                'width': 130,
                'height': 30,
                'sizeLimit': 1024 * 400,
                'auto': true,
                'onOpen': function (event, ID, fileObj) {
                    $("#hfVideoImage").val(fileObj.name);
                }
            });
        });
        $("#hfVideoID").val(1);
    }
}

function EditVideo(id) {
    $.ajax({
        url: rootPath + "/Common/NewsVideoDetail",
        type: 'GET',
        data: { VideoID: id },
        dataType: 'json',
        cache: false,
        beforeSend: function () {
            $('.loading').show();
        },
        success: function (d) {
            $('.loading').hide();
            if (d == null) {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
                return;
            }
            d = d.i;
            $("#hfVideoID").val(id);
            $('#txtVideoLink').val(d[0]);
            if (d[1] != "") {
                var lstCat = d[1].split(',');
                $("#cboVideoCategory").val(lstCat);
            }
            $('#spImage').html("<img src='" + d[2] + "' style='max-height:30px'/><br/>");
            $('#txtVideoTitle').val($("<div/>").html(d[3]).text());
            $('#txtVideoDescription').val($("<div/>").html(d[4]).text());
            $('#txtVideoNews').val(d[5]);
            $('#txtMetaTitle').val($("<div/>").html(d[6]).text());
            $('#txtMetaKeyword').val($("<div/>").html(d[7]).text());
            $('#txtMetaDescription').val($("<div/>").html(d[8]).text());
            $('#txtKeyword').val($("<div/>").html(d[9]).text());
            $('#txtActivedDate').val(d[10]);
            $("#popTitle").html("CHỈNH SỬA VIDEO");
            $("#divPropValue").modal("show");
            $(".xdsoft_datetimepicker").css("z-index", "100002");
        },
        statusCode: {
            404: function (content) { alert('cannot find resource'); },
            505: function (content) { alert('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    });
}

function validateVideoForm() {
    if ($("#txtVideoLink").val() == "") {
        alert("Chưa nhập link youtube");
        $("#txtVideoLink").focus();
        return false;
    }
}

function AddVideoToNews() {
    if ($("#txtVideoLink").val() == "") {
        alert("Chưa nhập link youtube");
        $("#txtVideoLink").focus();
        return false;
    }

    var strCategory = "";
    $('#cboVideoCategory option').each(function (i) {
        if (this.selected == true) {
            strCategory += this.value + ",";
        }
    });

    if (strCategory == "") {
        alert("Chưa chọn chuyên mục video");
        return false;
    }

    $.ajax({
        url: rootPath + "/Common/AddVideoNews",
        type: 'POST',
        data: {
            VideoLink: $("#txtVideoLink").val(),
            VideoCategory: strCategory,
            VideoTitle: $("#txtVideoTitle").val(),
            VideoImage: $("#hfVideoImage").val(),
            VideoDescription: $("#txtVideoDescription").val(),
            VideoNews: $("#txtVideoNews").val(),
            Keyword: $("#txtKeyword").val(),
            ActivedDate: $("#txtActivedDate").val(),
            MetaTitle: $("#txtMetaTitle").val(),
            MetaKeyword: $("#txtMetaKeyword").val(),
            MetaDescription: $("#txtMetaDescription").val()
        },
        cache: false,
        beforeSend: function () {
            $("#btnVideoNews").prop("disabled", true);
            $('.loading').show();
        },
        success: function (result) {
            $('.loading').hide();
            $("#btnVideoNews").prop("disabled", false);
            if (result != "") {
                $("#divPropValue").modal("hide");
                CKEDITOR.instances["content"].insertHtml(result);
            }
            else
                $("#popMsg").html("Có lỗi xảy ra. Vui lòng thử lại sau");
        },
        statusCode: {
            404: function (content) { $("#popMsg").html('cannot find resource'); },
            505: function (content) { $("#popMsg").html('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            $("#popMsg").html('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    })
}

function DeleteVideo(id) {
    if (confirm("Bạn có chắc muốn xóa video này?")) {
        $.ajax({
            url: rootPath + "/Common/DeleteVideo",
            cache: false,
            data: { VideoID: id },
            type: 'GET',
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (result) {
                $('.loading').hide();
                if (result > 0) {
                    LoadListNewsVideo($("#hdPage").val());
                }
                else
                    alert('Quá trình xóa xảy ra lỗi. Vui lòng thử lại.');
            },
            error: function () {
                $('.loading').hide();
                alert('Quá trình xóa xảy ra lỗi. Vui lòng thử lại.');
            }
        });
    }
}

function AddToCalendar(id) {
    if (confirm("Bạn có chắc muốn thêm từ khóa này vào lịch theo dõi?")) {
        $.ajax({
            url: rootPath + "/Common/AddKewordCalendar",
            cache: false,
            data: { NewsID: id, Keyword: $("#txtKeywordEvent").val(), EventDate: $("#txtKeywordDate").val() },
            type: 'GET',
            beforeSend: function () {
                $('.loading').show();
                $("#btnKeyword").attr("disabled", true);
            },
            success: function (result) {
                $('.loading').hide();
                $("#btnKeyword").attr("disabled", false);
                if (result == "") {
                    $("#txtKeywordEvent").val("");
                    $("#txtKeywordDate").val("");
                }
                else
                    alert(result);
            },
            error: function () {
                $('.loading').hide();
                alert('Quá trình xóa xảy ra lỗi. Vui lòng thử lại.');
            }
        });
    }
}

//Polls
function CreatePagerNewsPoll(currPage, totalPage, numButton) {
    var pager = '';
    if (totalPage < 1 || currPage < 1) {
        return;
    }
    if (totalPage < numButton) {
        for (var i = 1; i <= totalPage; i++) {
            if (i != currPage) {
                pager += '<span class="btn">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active">';
                pager += i;
                pager += '</span>'
            }
        }
    }
    else {
        var center = Math.floor((numButton - 2) / 2);
        var left = currPage - center;
        if (left < 1)
            left = 1;
        var right = currPage + center;
        if (right > totalPage)
            right = totalPage;
        if (right - left <= 2 * center) {
            right = left + 2 * center;
        }
        if (currPage - center > 1) {
            pager += '<span class="btn">';
            pager += 1;
            pager += '</span>';
            if (currPage - center > 2) {
                pager += '<span class="btn">...</span>';
            }
        }
        else {
            right++;
        }

        if (right >= totalPage) {
            right = totalPage;
            left = right - (2 * center);
        }
        var temp = '';
        if (currPage + center < totalPage) {
            if (currPage + center < totalPage - 1) {
                temp += '<span class="btn">...</span>';
            }
            temp += '<span class="btn">';
            temp += totalPage;
            temp += '</span>';
        }
        else {
            left--;
        }
        for (var i = left; i <= right; i++) {
            if (i != currPage) {
                pager += '<span class="btn" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
            else {
                pager += '<span class="btn active" page="' + i + '">';
                pager += i;
                pager += '</span>'
            }
        }
        pager += temp;
    }
    $('#newspg').html(pager);
    $('#newspg span').click(function () {
        CreatePagerNewsPoll(parseInt($(this).text()), totalPage, numButton);
        var pIndex = parseInt($(this).text());
        LoadListNewsPoll(pIndex);

        $('#newspg').css('opactity', '0.5');
        $('#newspg').css('cursor', 'progress');
        $('#news .ld').show();
    });
}

function LoadListNewsPoll(page) {
    var txtkw = $.trim($('#txtsearchkey').val());
    var date = $("#datetimepicker").val();
    if (date.trim() == "") {
        alert('Bạn chưa chọn thời gian');
        return;
    }
    var dateFrom = date.split(" - ")[0];
    var dateTo = date.split(" - ")[1];
    $('#hddatefrom').val(dateFrom);
    $('#hddateto').val(dateTo);

    $.ajax({
        url: rootPath + "/Common/PollsList",
        type: 'GET',
        data: {
            page: page, strkw: txtkw, datefrom: dateFrom, dateto: dateTo
        },
        cache: false,
        beforeSend: function () {
            $("#btnPollNews").prop("disabled", true);
            $('.loading').show();
        },
        success: function (result) {
            $('.loading').hide();
            $("#btnPollNews").prop("disabled", false);
            $('#wpbody').html(result);
        },
        statusCode: {
            404: function (content) { alert('cannot find resource'); },
            505: function (content) { alert('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    })
}

function ChangePollType(p) {
    if (p == 1) {
        $("#spanImage").html("Hình đại diện 1 (390x200 px)");
        $("#spanMImage").html("Hình mobile đại diện 1 (390x390 px)");
        $("#divPoll").show();
    }
    else {
        $("#spanImage").html("Hình đại diện (390x200 px)");
        $("#spanMImage").html("Hình mobile đại diện (390x390 px)");
        $("#divPoll").hide();
    }
}

function AddPolls() {
    $("#hfPollID").val(0);
    $('#txtPollTitle').val("");
    $('input[name="PollType"][value="1"]').prop('checked', true);
    $('#txtImageName1').val("");
    $('#txtImageName2').val("");
    $('#spImage1').html("");
    $('#spImage2').html("");
    $('#spMImage1').html("");
    $('#spMImage2').html("");
    $('#txtVideoDescription').val("");
    $("#popTitle").html("THÊM MỚI POLLS");
    $("#divPropValue").modal("show");
}

function EditPolls(id) {
    $.ajax({
        url: rootPath + "/Common/NewsPollDetail",
        type: 'GET',
        data: { PollID: id },
        dataType: 'json',
        cache: false,
        beforeSend: function () {
            $('.loading').show();
        },
        success: function (d) {
            $('.loading').hide();
            if (d == null) {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau");
                return;
            }
            d = d.i;
            $("#hfPollID").val(id);
            $('#txtPollTitle').val($("<div/>").html(d[0]).text());
            $('input[name="PollType"][value="' + d[1] + '"]').prop('checked', true);
            if (d[1] == 1)
                ChangePollType(1);
            else
                ChangePollType(2);
            $('#txtImageName1').val($("<div/>").html(d[2]).text());
            $('#txtImageName2').val($("<div/>").html(d[3]).text());
            $('#spImage1').html("<img src='" + d[4] + "' style='max-height:30px'/><br/>");
            $('#spImage2').html("<img src='" + d[5] + "' style='max-height:30px'/><br/>");
            $('#spMImage1').html("<img src='" + d[6] + "' style='max-height:30px'/><br/>");
            $('#spMImage2').html("<img src='" + d[7] + "' style='max-height:30px'/><br/>");
            $('#txtPollDescription').val($("<div/>").html(d[8]).text());
            $("#popTitle").html("CHỈNH SỬA POLLS");
            $("#divPropValue").modal("show");
        },
        statusCode: {
            404: function (content) { alert('cannot find resource'); },
            505: function (content) { alert('internal server error'); }
        },
        error: function (e) {
            $('.loading').hide();
            alert('Xảy ra lỗi, vui lòng thử lại sau!');
            return;
        }
    });
}

function validatePollsForm() {
    if ($("#txtPollTitle").val() == "") {
        alert("Chưa nhập tiêu đề");
        $("#txtPollTitle").focus();
        return false;
    }
}

function DeletePolls(id) {
    if (confirm("Bạn có chắc muốn xóa poll này?")) {
        $.ajax({
            url: rootPath + "/Common/DeletePoll",
            cache: false,
            data: { PollID: id },
            type: 'GET',
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (result) {
                $('.loading').hide();
                if (result > 0) {
                    LoadListNewsPoll($("#hdPage").val());
                }
                else
                    alert('Quá trình xóa xảy ra lỗi. Vui lòng thử lại.');
            },
            error: function () {
                $('.loading').hide();
                alert('Quá trình xóa xảy ra lỗi. Vui lòng thử lại.');
            }
        });
    }
}

function CancelMesage() {
    $("#divPropValue").modal("hide");
}