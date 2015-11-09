var rootnews = "/cong-tac-vien";
$(document).ready(function () {
    ActiveMenu();
    ActiveMenuMember();
    $("#back-top").hide();  
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
                //setbackgroundright();
            } else {
                $('#back-top').fadeOut();
            }
        });

  
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
  
    
    $(".listtophot li").last().addClass("end");
    
    var splash = $('.splash-wrapper');
    if (splash.css('display') == 'block') {
        $('body').css('position', 'relative');
    }
   
    //login
    $('#site-header #user-zone .user-account-wrapper').hover(function (e) {
        var target = $(e.target);
        if (target.is('img') || target.is('div') || target.is('a#atk')) {
            if ($('#site-header #user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display") == "none") {
                $('#site-header #user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "block");
            } else {
                $('#site-header #user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "none");
            }
        }
        else {
            return;
        }
    });
    $('#search-keyword').focus(function () {
        $('#search-submit').addClass('active');
    });

    $('#search-keyword').blur(function () {
        $('#search-submit').removeClass('active');
    });

    //$('#location').click(function () {
    //    $('.list-province').show();
    //});

    $('#location').click(function () {
        if ($('.list-province').is(':visible')) {
            $('.list-province').hide();
            $('#ascrail2000').hide();
            $(this).removeClass('active');
        }
        else {
            $('.list-province').show();
            $('#ascrail2000').show();
            $(this).addClass('active');
        }
    });

    $(".fancypassforget").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'fade',
        'showCloseButton': false,
        'margin': 0,
        'padding': 0,
        'modal': true
    });

    $('#login').click(function (e) {
        var $target = $(e.target);
        if (!$target.is('#txtusername') && !$target.is('#txtpassword') && !$target.is('#submit-login') && !$target.is('#lost-password')) {
            if ($('.wrapp-frmRegis').is(':visible')) {
                $('.wrapp-frmRegis').hide();
            }
            if ($('.wrapp-frmLogin').is(':visible')) {
                $('.wrapp-frmLogin').hide();
            }
            else {
                $('.wrapp-frmLogin').show();
            }
        }
    });

    $('#register').click(function (e) {
        var $target = $(e.target);
        if (!$target.is('#txtemail') && !$target.is('#submit-register')) {
            if ($('.wrapp-frmLogin').is(':visible')) {
                $('.wrapp-frmLogin').hide();
            }
            if ($('.wrapp-frmRegis').is(':visible')) {
                $('.wrapp-frmRegis').hide();
            }
            else {
                $('.wrapp-frmRegis').show();
            }
        }
    });

    // tự động viết hoa txt
    /*$('input[name="txtFullName"]').live('keyup', function (e) {
        if (e.keyCode != 32 && e.keyCode != 8) {
            var string = $(this).val();
            var arr = string.split(" ");
            var arrresult = [];
            var result = "";
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].trim() != "" && arr[i].trim() != " ") {
                        arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                    }
                }
                for (var j = 0; j < arrresult.length; j++) {
                    result += arrresult[j] + " ";
                }
            }
            else {
                result = string.charAt(0).toUpperCase() + string.slice(1);
            }
            $(this).val($.trim(result));
        }
    });*/
    // tự động viết hoa sau khi ket thuc 1 tu
    $('input[name="txtFullName"]').live('keyup', function (e) {
        if (e.keyCode == 32) {
            var string = $(this).val();
            var arr = string.split(" ");
            var arrresult = [];
            var result = "";
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].trim() != "" && arr[i].trim() != " ") {
                        arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                    }
                }
                for (var j = 0; j < arrresult.length; j++) {
                    result += arrresult[j] + " ";
                }
            }
            else {
                result = string.charAt(0).toUpperCase() + string.slice(1);
            }
            $(this).val(result);
        }
    });
    $('input[name="txtFullName"]').live('blur', function (e) {
        debugger;
        var string = $(this).val();
        var arr = string.split(" ");
        var arrresult = [];
        var result = "";
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].trim() != "" && arr[i].trim() != " ") {
                    arrresult.push(arr[i].trim().charAt(0).toUpperCase() + arr[i].trim().slice(1));
                }
            }
            for (var j = 0; j < arrresult.length; j++) {
                result += arrresult[j] + " ";
            }
        }
        else {
            result = string.charAt(0).toUpperCase() + string.slice(1);
        }
        $(this).val(result);
    });
    // Không nhập chữ trong ô nhập số điện thoại
    $('input[name="txtphone"], input[name="txtMobile"], input[name="txtPhoneNumber"], input[name="tel"]').live('keypress', function (e) {
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('input[name="txtphone"], input[name="txtMobile"], input[name="txtPhoneNumber"], input[name="tel"], input[name="txtNumber"]').live("cut copy paste", function (e) {
        e.preventDefault();
    });

    // Location

    //_get_location();
    var splash = $('.splash-wrapper');
    if (splash.css('display') == 'block') {
        $('body').css('position', 'relative');
    }
    //LoadProvince();
    $('#user-zone .user-location a.location').click(function () {
        $('#user-zone .user-location .select-location-wrapper').css('display', 'block');
        $('#localtion-search').focus();
    });

    $('#user-zone .user-location .select-location-wrapper').mouseover(function () {
        $('#user-zone .user-location .select-location-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#user-zone .user-location .select-location-wrapper').css('display', 'none');
    });

    $('#site-search .form .input-wrapper input').click(function () {
        $('#site-search .form .search-suggestion-wrapper').css('display', 'block');
    });

    $('#site-header #site-search .form .search-suggestion-wrapper').mouseover(function () {
        $('#site-header #site-search .form .search-suggestion-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#site-header #site-search .form .search-suggestion-wrapper').css('display', 'none');
    });

    $('#site-header-n #search-site .wrapp-input input').click(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'block');
    });

    $('#site-header-n #search-site .search-suggestion-wrapper').mouseover(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'block');
    }).mouseout(function () {
        $('#site-header-n #search-site .search-suggestion-wrapper').css('display', 'none');
    });

    // Product list item's information slide top on hover		
    $('.product-list-wrapper .product-list li:not(.double-col)').live({
        mouseenter:
            function () {
                $(this).find('.more-detail').animate({
                    'top': 0
                }, {
                    duration: 500,
                    queue: false,
                    complete: function () {
                    }
                });
            },
        mouseleave:
            function () {
                $(this).find('.more-detail').animate({
                    'top': 220
                }, {
                    duration: 500,
                    queue: false,
                    complete: function () {
                    }
                });
            }
    });

    $("#SuggestSearch .search-suggestion ul li.selected a").bind("keypress", function (e) {
        if (e.keyCode == 13) {
            window.location = $('#SuggestSearch div.search-suggestion ul li.selected a').attr('href');
        }
    });

    // Fix double click on navigation on tablet
    $('#site-body .navigation-banner .navigation ul li a').mouseenter(function () {
        $(this).addClass('hover');
    }).mouseleave(function () {
        $(this).removeClass('hover');
    })

    $('#ads-name, #ads-submit').click(function () {
        CreateClassified();
        if ($(window).scrollTop() < 300) {
            var y = $(window).scrollTop();  // current y position on the page
            $('#form-wrapper .ads-form-wrapper').fadeIn(300);
            var formwrapp = $('#form-wrapper .ads-form-wrapper').height();
            $(window).scrollTop(y + formwrapp - $(window).scrollTop()).fadeIn(500);
        }
        else {
            $('#form-wrapper .ads-form-wrapper').fadeIn(300);
        }

        if ($('#select-category :selected').text() == "") {
            $('#select-category').val(-1);
            $("#select-category option[value=-1]").attr("selected", "selected");
        }

        var IdProvince = getCookie('CK_CHECK_PROVINCE_OF_USER');
        if ($('#select-location :selected').text() == "") {
            $('#select-location').val(IdProvince);
            $("#select-location option[value=" + IdProvince + "]").attr("selected", "selected");
        }
    });

    $('#cancel-ads').live("click", function () {
        $('#select-category option[value="-1"]').attr("selected", "selected");
        //$('#title').val('');
        $('#query').val('');
        $('#price').val('');
        $('#content').val('');
        $('#phone').val('');
        $('#email').val('');
        //var liIds = $('#thumbnail li img').map(function (i, n) {
        //    return $(n).attr('id');
        //}).get().join(',');
        var liIds = $('#thumbnail li img').map(function (i, n) {
            RemoveImage($(n).attr('id'));
        });
        $('.ads-form-wrapper').fadeOut();
    });

    $('#price').live('keypress', function (e) {
        //var e = event || evt; // for trans-browser compatibility
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('#phone').live('keypress', function (e) {
        //var e = event || evt; // for trans-browser compatibility
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('#phone').live('blur', function (e) {
        var num = $.trim($('#phone').val());
        if (num == '')
            return;
        //if (num.indexOf(0) == 0 || num.indexOf(0) == 3)
        //num = setCharAt(num, num.indexOf(0), "");

        $('#phone').val(num);
    });

    $('#price').live('blur', function () {
        ValidateAndFormatNumber(this);
        //$('#price').val($('#price').val().replace('₫',''));
        //$('#price').val(ValidateAndFormatNumber(this) + ' ₫');
    });

    $('ul.location-list li a').live("click", function () {
        $('#provinceid').val($(this).attr('data-id'));
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        CreateCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });

    $('ul.l-location li a').live("click", function () {
        $('#provinceid').val($(this).attr('data-id'));
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        CreateCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });

    $('#localtion-search').live('keypress', function (event) {
        if (event.which == '13') {
            var provinceId = $('#location-suggestion-wrapper ul li.selected a').attr('data-id').trim();
            $('#provinceid').val($('#location-suggestion-wrapper ul li.selected a').attr('data-id').trim());
            var c_name = 'CK_CHECK_PROVINCE_OF_USER';
            var expiredays = (30 * 365);
            CreateCookie(c_name, provinceId, expiredays);
            window.location.reload();
        }
    });

    $('#selectArea').live("click", function () {
        if ($('#allprovince option:selected').val() != -1) {
            var iprovince = $('#allprovince option:selected').val();
            var c_name = 'CK_CHECK_PROVINCE_OF_USER';
            $('#provinceid').val(iprovince);
            var expiredays = (30 * 365);
            CreateCookie(c_name, iprovince, expiredays);
            window.location.reload();
        }
        else {
            $('.splash-wrapper').css('display', 'block');
            $('body').css('overflow', 'auto');
        }
    });

    //$('#user-zone .user-account-wrapper').hover(function (e) {
    //    if ($('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display") == "none") {
    //        $('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "block");
    //    }
    //    else {
    //        $('#user-zone .user-account-wrapper .user-avatar .user-menu-wrapper').css("display", "none");
    //    }
    //});


    $(".user-account-wrapper").live('mouseover', function () {
        $(this).find('.user-avatar .user-menu-wrapper').css("display", "block");
    }).live('mouseout', function () {
        $(this).find('.user-avatar .user-menu-wrapper').css("display", "none");
    });

    $(".forgetpass").fancybox({
        'width': 830,
        'height': 535,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'showCloseButton': false,
        'autoScale': false,
        'margin': 0,
        'padding': 0,
        'modal': true
    });
    //CallSuggestPerTimer(1000);

    //LoadLocation();
});
var TGDD_CDN_VERSION = '';
var GET_LOCATION_FLAG = true;
function _get_location() {
    if (GET_LOCATION_FLAG) {
        GET_LOCATION_FLAG = false;
        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
        $.ajax({
            url: rootnews+'/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
            type: 'GET',
            cache: true,
            dataType: 'html',
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (e) {
                GET_LOCATION_FLAG = true;
                if (e != "") {
                    var _pn = $(e)[1].innerHTML;
                    var _d = $(e).find('> li');
                    $('#location-list').html(_d);
                    $('#location-name-p').text(_pn);
                    $('#location-view-info').text(_pn);
                    $('.loader').hide();
                }
            },
            error: function () {
                $('.loader').hide();
            }
        })
    }
}
var GET_LOCATION_FLAG2 = true;
//function LoadLocation() {
//    if (GET_LOCATION_FLAG2) {
//        GET_LOCATION_FLAG2 = false;
//        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
//        $.ajax({
//            url: rootnews + '/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
//            type: 'GET',
//            cache: true,
//            dataType: 'html',
//            beforeSend: function () {
//                $('.hloading').show();
//            },
//            success: function (e) {
//                GET_LOCATION_FLAG2 = true;
//                if (e != "") {
//                    var _pn = $(e)[1].innerHTML;
//                    var _d = $(e).find('> li');
//                    $('.l-location').html(_d);
//                    $('#location span.block').text(_pn);

//                    $('.hloading').hide();
//                }
//                else {
//                    LoadLocation();
//                }
//            },
//            error: function () {
//                $('.hloading').hide();
//            }
//        })
//    }

//    //$('.l-location').getNiceScroll().resize();
//}

function POSTAjax(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

// Calling a AJAX request with 'POST' type and JSON data type
function POSTAjaxJSON(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        complete: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

// BeforeSendAjax
function BeforeSendAjax() {
    $('#dlding').show();
}

// ErrorAjax
function ErrorAjax() {
    // Not implemented yet
}

function CallAjaxPost(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}
function setheightTopMemberNew()
{
    var h = $("#TopMemberNew ul").outerHeight();
    $("#TopMemberNew").attr('style', 'height:' + h+'px');
}
function setbackgroundright() {
    var hrset = $("#dvfromtopcomment_tobottomdivright").outerHeight();
    var hl = $(".main-left-wrapper").outerHeight();

    var hruserinfo = $("#dvuserinfotopright").outerHeight();
    var hrface = $("#dvfacebookright").outerHeight();

    if (hrface < 10) hrface = 271;
    var hrnoset = hruserinfo + hrface;

    var heightsetbackgroundright = hl - hrnoset;

    // $("#dvfromtopcomment_tobottomdivright").attr('style', 'background-color:#F2F2F2;height:' + heightsetbackgroundright + 'px');
    $("#dvfromtopcomment_tobottomdivright").attr('style', 'border-left:1px solid #F9F9F9;height:' + heightsetbackgroundright + 'px');
   


}
function showtopmembercontributions(f) {
    if (f == 1) {
        $("#ulmoretopmembercontributions").show();
        $("#dvtopMemberContributionsShow").hide();
        $("#dvtopMemberContributionsHide").show();
        showscrollbar('dvTopMemberContributions', 1);
    }
    else {
        $("#ulmoretopmembercontributions").hide();
        $("#dvtopMemberContributionsShow").show();
        $("#dvtopMemberContributionsHide").hide();
        showscrollbar('dvTopMemberContributions', 0);
    }
}
function showtopmembernew(f) {
    if (f == 1) {
        $("#ulmoretopmembernew").show();
        $("#dvtopMemberNewShow").hide();
        $("#dvtopMemberNewHide").show();
        showscrollbar('TopMemberNew', 1);
    }
    else {
        $("#ulmoretopmembernew").hide();
        $("#dvtopMemberNewShow").show();
        $("#dvtopMemberNewHide").hide();
        showscrollbar('TopMemberNew', 0);
    }
}

function showscrollbar(id, f) {
    if (f == 1) {
        $("#" + id).mCustomScrollbar({
            mouseWheel: true
        });
    }
    else {
        $("#" + id).mCustomScrollbar("destroy");
    }
}
function ActiveMenu() {
    var CatID = $("#hfCatID").val();
    if (CatID == "p")
        $(".naviation-items li").removeClass("act");
    if (CatID == "") {
        id = getCookie("actmenu");
        if (id == 0 || id == undefined || id == null) {
            $("#firstnews").addClass("act");
            CatID = 0;
        }
        else {
            $("#menuCat_" + id).addClass("act");
            CatID = id;
        }      
        setCookie("actmenu", CatID, 365);
    }
    else if(CatID!="p"){
        if (CatID == 0)
            $("#firstnews").addClass("act");
        else {
            $("#menuCat_" + CatID).addClass("act");
            
        }       
        setCookie("actmenu", CatID, 365);
    }   
}
function ActiveMenuMember()
{
   
    var CatID = $("#hfmemberCatID").val();
    if (CatID != null)
    {
        $(".naviation-items li").removeClass("act");
       
            $("#menumemberCat_" + CatID).addClass("act");
       
    }
}
function setCookie(c_name, valuename, exdays) {
    var array = document.domain.split('.');
    var domaincookie = "thegioididong.com"; //array[array.length - 2] + "." + array[array.length - 1];
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_valuename = escape(valuename) + ((exdays == null) ? "" : "; visited=true; domain=."+domaincookie+"; path=/;expires=" + exdate.toUTCString());    
    document.cookie = c_name + "=" + c_valuename;//+ "; path=/";
}
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            if (unescape(y) != "")
                return unescape(y);
            return "0";
        }
    }
    return "0";
}

// delete cookie
function Delete_Cookie(name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") +
                                        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

function SearchAll(me) {
    $(me).hide();
    searchpage = 1;
    //$('#frmMainSearchForm').css('width', '440px');
    //$(me).parent().css('width', '437px');
    $('#search-keyword').css('width', '302px');
    //$('#search-keyword').keyup(SuggestSearch);
    $("#search-submit").show();
    $("#btnSearch").hide();
}

var beginTime = 0;
var endTime = 0;
function CheckTimer() {
    var d = new Date();
    if (beginTime == 0 && endTime == 0) {
        beginTime = d.getTime();
    }
    return;
}

function SetTimeer(t) {
    CallSuggestPerTimer(t);
}


function CallSuggestPerTimer(t) {
    setTimeout(function () {
        var s = new Date();
        var myTime = s.getTime();
        if (beginTime == endTime) {
            if (myTime - endTime < 750 && myTime - endTime >= 0) {
                SetTimeer(t);
                return;
            }
            else if (myTime - endTime >= 750) {
                CallSuggest();
                return;
            }
        }
        else
            return;
    }, t);
}

function CallSuggest() {
    var kw = $('#search-keyword').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim().toLowerCase();
    if (kwt.length < 2) {
        $('#SuggestSearch').hide();
        return;
    }
    if (kwt.length >= 2) {
        $.ajax({
            url: '/tim-kiem/aj/SuggestSearch',
            type: 'GET',
            data: { Key: kwt, searchtype: searchpage },
            dataType: 'json',
            cache: true,
            success: function (d) {
                if (d == null) {
                    $('#SuggestSearch').hide();
                    return;
                }
                d = d.i;
                var rl = d.length;
                var html = '';
                var lpros = '';
                var lmanu = '';
                var lcat = '';
                var catetrack = {};
                html += '<div class="search-suggestion clearfix">';
                html += '<ul class="suggestion-list with-image nolist clearfix">';
                for (var j = 0; j < rl; j++) {
                    if (d[j][8] == '1') {
                        lpros += '<li class="li-item">';
                        if (d[j][0].trim() == "1783" || d[j][0].trim() == "1784") {
                            lpros += '<a href="/game-ung-dung-nhac' + d[j][7] + '" class="clearfix">';
                        }
                        else {
                            lpros += '<a href="' + d[j][7] + '" class="clearfix">';
                        }
                        lpros += '<div class="img">';
                        lpros += '<img src="' + strPathProImg + d[j][0] + '/' + d[j][3] + '/' + d[j][5] + '" title="' + d[j][4] + '">';
                        lpros += '</div>';
                        lpros += '<div class="content" style="position: relative;">';
                        lpros += '<div class="name">' + d[j][4] + '</div>';
                        if (d[j][10].toString() == "giasoc") {
                            lpros += '<span class=\"badge red\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">GIÁ SỐC</span>';
                        }
                        else if (d[j][10].toString() == "dattruoc") {
                            lpros += '<span class=\"badge green\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">ĐẶT TRƯỚC</span>';
                        }
                        else if (d[j][10].toString() == "dudoangia") {
                            lpros += '<span class=\"badge green\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">DỰ ĐOÁN GIÁ</span>';
                        }
                        else if (d[j][10].toString() == "camkettot") {
                            lpros += '<span class=\"badge commitment\" style="position: absolute; color: #fff; font-size: 10px; height: 59px;"></span>';
                        }
                        else if (d[j][10].toString() == "kmlon") {
                            lpros += '<span class=\"badge orange\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">KM LỚN</span>';
                        }
                        else if (d[j][10].toString() == "hot") {
                            lpros += '<span class=\"badge bestsell\" style="position: absolute; color: #fff; font-size: 10px; height: 59px;">HOT</span>';
                        }
                        else if (d[j][10].toString() == "moi") {
                            lpros += '<span class=\"badge\" style="position: absolute; color: #fff; font-size: 10px; height: 19px;">Mới</span>';
                        }
                        else {

                        }
                        if (d[j][10].toString() == "dattruoc") {
                            lpros += '<div id="' + d[j][3] + '_dattruoc" class="price">' + d[j][6] + '</div>';
                            var ctrlID = d[j][3].toString() + '_dattruoc';
                            LoadHomePreorderInfoSuggest(ctrlID, d[j][3]);
                        }
                        else if (d[j][10].toString() == "giasoc") {
                            lpros += '<div id="' + d[j][3] + '_giasoc" class="price">' + d[j][6] + '</div>';
                            var ctrlID = d[j][3].toString() + '_giasoc';
                            LoadHomeShockPriceInfoSuggest(ctrlID, d[j][3]);
                        }
                        else {
                            if (d[j][6].toString() == "Không kinh doanh") {
                                lpros += '<div class="price" style="color: #C1C1B7;">' + d[j][6] + '</div>';
                            }
                            else {
                                lpros += '<div class="price">' + d[j][6] + '</div>';
                            }
                        }
                        lpros += '<div class="note">' + d[j][9] + '</div>';
                        lpros += '</div>';
                        lpros += '</a>';
                        lpros += '</li>';

                    }
                }
                if (lpros != '')
                    html += lpros;
                html += '</ul>';
                html += '</div>';
                $('#SuggestSearch').html(html);
                $('#SuggestSearch').show();
                hasSearch = 0;
            }
        })
    }
}

// !!!!!! Suggest Search Home page
var strPathCatImg = 'http://cdn.tgdd.vn/category/';
var strPathProImg = 'http://cdn.tgdd.vn/products/images/';
var strPathManuImg = 'http://cdn.tgdd.vn/brand/'
//var strSubmitsuggest = 0;
function SuggestSearch(e) {
    var d = new Date();
    endTime = d.getTime();
    beginTime = endTime;
    if (e.which == 40) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:first').addClass('selected');
            //$('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:first a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').next();
            if (t.hasClass('li-group'))
                t = t.next();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //$('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#SuggestSearch div.search-suggestion ul li.selected').length == 0) {
            $('#SuggestSearch div.search-suggestion ul li.li-item:last').addClass('selected');
            //$('#search-keyword').val($('#SuggestSearch div.search-suggestion ul li.selected:last a.clearfix div.content div.name').text());
        }
        else {
            var t = $('#SuggestSearch div.search-suggestion ul li.selected').prev();
            if (t.hasClass('li-group'))
                t = t.prev();
            $('#SuggestSearch div.search-suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //if (t.find('a.clearfix div.content div.name').text() == '')
            //    $('#search-keyword').val(t.find('a.clearfix').text());
            //else
            //    $('#search-keyword').val(t.find('a.clearfix div.content div.name').text());
        }
        return;
    }
    SetTimeer(1);
}


// !!!!!! Submit Search Form
function submitSearchForm() {
    var strkeydtdd = keydtdd.split(",");
    var strkeylaptop = keylaptop.split(",");
    var strkeymaytinhbang = keymaytinhbang.split(",");
    var strkeymayanhso = keymayanhso.split(",");
    var strkeyphukien = keyphukien.split(",");
    var strgame = game.split(",");
    var strungdung = ungdung.split(",");
    var kw = $('#search-keyword').val().replace(/:|;|!|@|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\?|\/|`|~|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, ' ');
    var kwt = kw.trim();
    if ($('#SuggestSearch div.search-suggestion ul li.selected').length != 0) {
        $('#SuggestSearch div.search-suggestion ul li.selected').each(function () {
            var link = $(this).children('a').attr('href');
            window.location = link;
        });
    }
    else {
        if (kwt != '' & kwt.length >= 2) {
            //Điện thoại di động, DTDD, điện thoại, smartphone, điện thoại 2 sim, giá điện thoại
            for (var i = 0; i < strkeydtdd.length; i++) {
                if (kwt.toLowerCase().trim() == strkeydtdd[i].toLowerCase().trim()) {
                    window.location = '/dtdd';
                    return false;
                }
            }
            for (var i = 0; i < strkeylaptop.length; i++) {
                if (kwt.toLowerCase().trim() == strkeylaptop[i].toLowerCase().trim()) {
                    window.location = '/laptop';
                    return false;
                }
            }
            for (var i = 0; i < strkeymaytinhbang.length; i++) {
                if (kwt.toLowerCase().trim() == strkeymaytinhbang[i].toLowerCase().trim()) {
                    window.location = '/may-tinh-bang';
                    return false;
                }
            }
            for (var i = 0; i < strkeymayanhso.length; i++) {
                if (kwt.toLowerCase().trim() == strkeymayanhso[i].toLowerCase().trim()) {
                    window.location = '/may-anh-so';
                    return false;
                }
            }
            for (var i = 0; i < strkeyphukien.length; i++) {
                if (kwt.toLowerCase().trim() == strkeyphukien[i].toLowerCase().trim()) {
                    window.location = '/phu-kien';
                    return false;
                }
            }
            for (var i = 0; i < strgame.length; i++) {
                if (kwt.toLowerCase().trim() == strgame[i].toLowerCase().trim()) {
                    window.location = '/game-ung-dung-nhac';
                    return false;
                }
            }
            for (var i = 0; i < strungdung.length; i++) {
                if (kwt.toLowerCase().trim() == strungdung[i].toLowerCase().trim()) {
                    window.location = '/game-ung-dung-nhac';
                    return false;
                }
            }
            if (kwt.toLowerCase().indexOf("khuyen mai") == 0 || kwt.toLowerCase().indexOf("khuyến mãi") == 0) {
                window.location = '/tin-tuc-cong-tac-vien/khuyen-mai/31';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi") == 0 || kwt.toLowerCase().indexOf("siêu thị") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }

            if (kwt.toLowerCase().trim() == "điện thoại di động" || kwt.toLowerCase().trim() == "dtdd" || kwt.toLowerCase().trim() == "điện thoại" || kwt.toLowerCase().trim() == "smartphone" || kwt.toLowerCase().trim() == "điện thoại 2 sim" || kwt.toLowerCase().trim() == "giá điện thoại") {
                window.location = '/dtdd';
                return false;
            }
                //Laptop, máy tính xách tay, máy tính, Ultralbook, netbook, Notebook, giá laptop, giá máy tính xách tay, laptop cảm ứng, Laptop Touch
            else if (kwt.toLowerCase().trim() == "laptop" || kwt.toLowerCase().trim() == "máy tính xách tay" || kwt.toLowerCase().trim() == "ultralbook" || kwt.toLowerCase().trim() == "netbook" || kwt.toLowerCase().trim() == "notebook" || kwt.toLowerCase().trim() == "giá laptop" || kwt.toLowerCase().trim() == "giá máy tính xách tay" || kwt.toLowerCase().trim() == "laptop cảm ứng" || kwt.toLowerCase().trim() == "laptop touch") {
                window.location = '/laptop';
                return false;
            }
                //Tablet, máy tính bảng, giá tablet, giá máy tính bảng,
            else if (kwt.toLowerCase().trim() == "tablet" || kwt.toLowerCase().trim() == "máy tính bảng" || kwt.toLowerCase().trim() == "giá tablet" || kwt.toLowerCase().trim() == "giá máy tính bảng") {
                window.location = '/may-tinh-bang';
                return false;
            }
                //Camera, máy ảnh, máy ảnh số, máy chụp hình, may quay phim, giá camera, giá máy chụp ảnh
            else if (kwt.toLowerCase().trim() == "camera" || kwt.toLowerCase().trim() == "máy ảnh" || kwt.toLowerCase().trim() == "máy ảnh số" || kwt.toLowerCase().trim() == "máy chụp hình" || kwt.toLowerCase().trim() == "may quay phim" || kwt.toLowerCase().trim() == "giá camera" || kwt.toLowerCase().trim() == "giá máy chụp ảnh") {
                window.location = '/may-anh-so';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("san pham ") == 0 || kwt.toLowerCase().indexOf("sản phẩm ") == 0) {
                kwt = kwt.replace('san pham ', '');
                kwt = kwt.replace('sản phẩm ', '');
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("tin tuc ") == 0 || kwt.toLowerCase().indexOf("tin tức ") == 0) {
                kwt = kwt.replace('tin tuc ', '');
                kwt = kwt.replace('tin tức ', '');
                window.location = '/tim-kiem-tin-tuc?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("rao vat ") == 0 || kwt.toLowerCase().indexOf("rao vặt ") == 0) {
                kwt = kwt.replace('rao vat ', '');
                kwt = kwt.replace('rao vặt ', '');
                window.location = '/rao-vat-may-cu?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sim so ") == 0 || kwt.toLowerCase().indexOf("sim số ") == 0) {
                window.location = '/sim-so-the-cao-thu-cuoc';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi ") == 0 || kwt.toLowerCase().indexOf("siêu thị ") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("game ") == 0) {
                kwt = kwt.replace('game ', '');
                kwt = kwt.replace('game ', '');
                window.location = '/game-ung-dung-nhac?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("ung dung ") == 0 || kwt.toLowerCase().indexOf("ứng dụng ") == 0) {
                kwt = kwt.replace('ung dung ', '');
                kwt = kwt.replace('ứng dụng ', '');
                window.location = '/game-ung-dung-nhac?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (kwt.toLowerCase().indexOf("khuyen mai") == 0 || kwt.toLowerCase().indexOf("khuyến mãi") == 0) {
                window.location = '/tin-tuc-cong-tac-vien/khuyen-mai/31';
                return false;
            }
            else if (kwt.toLowerCase().indexOf("sieu thi") == 0 || kwt.toLowerCase().indexOf("siêu thị") == 0) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (typeof searchpage == 'undefined') {
                if (typeof FilterValue == 'undefined') {
                    window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                    return false;
                }
                else {
                    if (FilterValue == "42" || FilterValue == "522" || FilterValue == "44" || FilterValue == "49" || FilterValue == "-888888") {
                        //window.location = '/tim-kiem?key=' + encodeURIComponent(kwt) + "&F=c:" + FilterValue;
                        window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                        return false;
                    }
                    else {
                        window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                        return false;
                    }
                }
            }
            else if (searchpage == 1) {
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 2) {
                window.location = '/rao-vat-may-cu?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 3) {
                window.location = '/tim-kiem-tin-tuc?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else if (searchpage == 4) {
                window.location = '/sim-so-the-cao-thu-cuoc';
                return false;
            }
            else if (searchpage == 5) {
                window.location = '/he-thong-sieu-thi-the-gioi-di-dong';
                return false;
            }
            else if (searchpage == 6) {
                window.location = '/game-ung-dung-nhac?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
            else {
                window.location = '/tim-kiem?key=' + encodeURIComponent(kwt).replace(/%20/gi, '+');
                return false;
            }
        }
    }
    return false;
}

function LoadHomePreorderInfoSuggest(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetPreorderInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 && e._totalOrder > 0) {
                html = '<div class="price" style="color: #0876E6; font-size: 11px; font-weight: bold;">(Đã có ' + formatNumberValue(e._totalOrder) + ' người đặt mua)</div>';
                var item = document.getElementById(ctrl);
                if (item != null) {
                    item.outerHTML = html;
                    return;
                }
                else {
                    setTimeout(function () {
                        LoadHomePreorderInfoSuggest(ctrl, id);
                        return;
                    }, 50);
                    return;
                }
            }
        },
        function () { },
        true
        );
}

function LoadHomeShockPriceInfoSuggest(ctrl, id) {
    data = { iProductId: id };
    POSTAjax(
        '/aj/Game/CAT_GetShockPriceInfo/',
        data,
        function () { },
        function (e) {
            if (e._status == 1 || e._status == 4) {
                var html = '<div class="price">';
                html += '<del class="old-price">';
                html += e._oldPrice + '</del>';
                html += '<cite class="price" style="display:block; color: #FF0000; margin-right: 5px;">';
                html += e._newPrice;
                html += '<span style="color: #666666; font-size: 11px; font-weight: bold; line-height: 14px;"> giảm <strong style="color: #FF0000; font-size: 14px; font-weight: bold; line-height: 1em;">';
                html += 100 - e._percent;
                html += '%</strong></span></cite>';
                html += '</div>';
                //var html2 = '<span class="status blue">Chỉ còn ' + e._left + ' sản phẩm</span>';
                var item = document.getElementById(ctrl);
                item.outerHTML = html;
                //$(ctrl).find('.name.clearfix').prepend(html2);
            }
        },
        function () { },
        true
        );
}
//facebook//
function getUserFacebook() {
    try {
        var xmlhttp = new XMLHttpRequest();
        var url = "http://www.facebook.com/thegioididongcom";
        var urldomain1 = "https://graph.facebook.com/?ids=" + encodeURIComponent(url) + "";
        xmlhttp.open("GET", urldomain1, false);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xmlhttp.send();
        var data = xmlhttp.response;
        debugger;

        data = data.toString().replace(url, 'data');
        var obj = JSON.parse(data);
        var link_id = "";
        if (obj.data != null) {
            link_id = obj.data.id;
        }


        if (link_id != "") {
            xmlhttp = new XMLHttpRequest();
            urldomain = "https://graph.facebook.com/oauth/access_token?client_id=1423496261124080&client_secret=96c692c3b825a90135503214ea318d31&grant_type=client_credentials";
            xmlhttp.open("GET", urldomain, false);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send();
            var data2 = xmlhttp.response.toString();
            var access_token = data2.split("access_token=")[1];
            xmlhttp = new XMLHttpRequest();
            var urldomain = "https://graph.facebook.com/search?access_token=" + access_token + "&q=SELECT%20TOP%2010%20uid%20FROM%20page_fan%20WHERE%20page_id='" + link_id + "'";
            xmlhttp.open("GET", urldomain, false);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send();
            var data3 = xmlhttp.response;
            var obj1 = JSON.parse(data3);
        }
        //document.getElementById(item.id + "_count").innerHTML = ConvertIntStringFb(count.toString().trim());
    }
    catch (err) {
        $(item).remove();
    }

}


function countFacebook(item) {
    try {
        var xmlhttp = new XMLHttpRequest();
        var url = $(item).attr("link-data");
        if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
            url = url.replace('http://', '');
            url = url.replace('https://', '');
        }
        //var urldomain = "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url='" + url + "'";
        var urldomain = "https://graph.facebook.com/fql?q=SELECT%20total_count%20FROM%20link_stat%20WHERE%20url='" + url + "'";
        xmlhttp.open("GET", urldomain, false);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xmlhttp.send();
        var data = xmlhttp.response;
        var obj = JSON.parse(data);
        var count;
        if (obj.data.length > 0) {
            count = obj.data[0].total_count;
        } else {
            count = 0;
        }
        var itemcount = document.getElementById(item.id.toString() + "_count");
        itemcount.innerHTML = ConvertIntStringFb(count.toString().trim());
    }
    catch (err) {
        $(item).remove();
    }

}

function countFacebookSV(item, url) {
    if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
        url = url.replace('http://', '');
        url = url.replace('https://', '');
    }
    try {
        $.ajax({
            url: '/aj/Common/SearchValueCount/',
            type: 'GET',
            data: { txtURLs: url },
            beforeSend: function () {
            },
            success: function (result) {
                var itemcount = document.getElementById(item.id.toString() + "_count");
                itemcount.innerHTML = ConvertIntStringFb(result.toString().trim());
            },
            error: function (result) {
            }
        })
    }
    catch (err) {
        $(item).remove();
    }

}

function GenFacebookFinal(id) {

    var item = document.getElementById(id);
    if (item == null)
        return;
    var url = $(item).attr("link-data");
    var style = $(item).attr("style");
    var strAppend = "";
    if (style == undefined)
        strAppend += "<table id=\"" + id + "\" class=\"fbcontent\" link-data=\"" + url + "\" onmouseover=\"countFacebook(this)\">";
    else
        strAppend += "<table id=\"" + id + "\" style=\"" + style + "\" class=\"fbcontent\" link-data=\"" + url + "\" onmouseover=\"countFacebook(this)\">";
    strAppend += "<tbody>";
    strAppend += "<tr>";
    strAppend += "<td style='vertical-align: middle; width: 54px !important; height: 21px !important; float: left;' id=\"" + id + "_contentfb\">";
    strAppend += "<ul id=\"sfb_ul\" class=\"socialcount\" data-url=\"" + url + "\" data-counts=\"true\" style=\" margin-left: 0; margin: 0;left: 0;padding: 0;\">";
    strAppend += "<li class=\"facebook pluginConnectButton\">";
    strAppend += "<a href=\"https://www.facebook.com/sharer/sharer.php?u=" + url + "\" target=\"_blank\" class=\"pluginButton pluginButtonInline pluginConnectButtonDisconnected\" title=\"Share on Facebook\">";
    strAppend += "<div>";
    strAppend += "<button type=\"submit\">";
    strAppend += "<i class=\"pluginButtonIcon img sp_like sx_like_thumb\"></i>";
    strAppend += "<span class=\"accessible_elem\">Thích</span>";
    strAppend += "</button>";
    strAppend += "</div>";
    strAppend += "</a>";
    strAppend += "</li>";
    strAppend += "</ul>";
    strAppend += "</td>";
    strAppend += "<td style=\"vertical-align: top; position: relative;\">";
    strAppend += "<div style=\"float: left; margin-top: 0px; margin-left: -1px;\">";
    strAppend += "<div class=\"pluginCountButton pluginCountNum\"><span id=\"u_0_7\"><span id=\"" + id + "_count\" class=\"pluginCountTextConnected\"></span></span></div>";
    strAppend += "<div class=\"pluginCountButtonNub\"><s></s><i></i></div>";
    strAppend += "</div>";
    strAppend += "</td>";
    strAppend += "</tr>";
    strAppend += "</tbody>";
    strAppend += "</table>";
    item.outerHTML = strAppend;
    countFacebookSV(item, url);
}

function ConvertIntStringFb(strInt) {
    var overstring = "";
    var count = 0;
    for (var i = (strInt.length - 1) ; i >= 0; i--) {
        overstring += strInt[i];
        count++;
        if (count == 3 && i > 0) {
            overstring += ".";
            count = 0;
        }
    }
    var strFinal = "";
    for (var i = (overstring.length - 1) ; i >= 0; i--) {
        strFinal += overstring[i];
    }
    return strFinal;
}


function PopUpHtmlInfo(id) {
    POSTAjax('/aj/Common/PopUpHtmlInfo', { intHtmlInfoID: id }, BeforeSendAjax, function (e) {
        if (e == null || e == '')
            return;
        debugger;
        try {
            $('#pu-popuphtmlinfo').remove();
            $('body').append(e);
        } catch (e) {

        }
        $.fancybox.close();
        $("#of-popuphtmlinfo").fancybox({
            'transitionIn': 'none',
            'transitionOut': 'none',
            'showCloseButton': false,
            'margin': 0,
            'padding': 1,
            'modal': true
        });
        $("#of-popuphtmlinfo").click();
        $('#dlding').fadeOut(500);
    }, ErrorAjax, true);
}
function GetAllFormData($f) {
    var dataElement = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea').each(function () {
        dataElement[$(this).attr('name')] = $(this).val();
    });
    $f.find('input[type=checkbox]').each(function () {
        dataElement[$(this).attr('name')] = $(this).attr('checked') == 'checked' ? true : false;
    });
    $f.find('select').each(function () {
        dataElement[$(this).attr('name')] = $(this).val();
        dataElement[$(this).attr('name') + 'text'] = $(this).find('option:selected').text();
    });
    var dataAttach = {};
    $f.find('input[type=text], input[type=password], input[type=radio]:checked, input[type=hidden], textarea, select option:selected').each(function () {
        dataAttach = $.extend({}, dataAttach, $(this).data());
    });
    var dataReturn = $.extend({}, dataElement, dataAttach);
    return dataReturn;
}
function RedirectToMobile(a) {
    var expiredays = (30 * 365);
    var c_name = 'CK_TGDD_WEB_VERSION';
    CreateCookie(c_name, 'MOBILE', expiredays);
    window.location = $(a).attr('href');
    return false;
}
function CreateCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; visited=true; path=/; domain=.thegioididong.com; expires=" + exdate.toUTCString() + ";");
    Delete_Cookie(c_name, "", ".thegioididong.com");
    Delete_Cookie(c_name, "", ".www.thegioididong.com");
    Delete_Cookie(c_name, "", "www.thegioididong.com");
    document.cookie = c_name + "=" + c_value;
}
// delete cookie
function Delete_Cookie(name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}