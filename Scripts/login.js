
function ValidateInputType() {

    var input = document.getElementById('txtusername');
    if (isNaN(input.value.trim())) {
        ValidateEmailInputValue(input.value.trim());
    }
    else {
        ValidatePhoneInputValue(input.value.trim());
    }
}
ValidateEmailInputValue = function (input) {
    if (input == '') {
        $('#frmLogin .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtusername').focus();
        return false;
    }
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(input)) {
        $('#frmLogin .error').text('Email không đúng định dạng');
        $('#txtusername').focus();
        return false;
    }

    CheckWithEmail(input, 'frmLogin');

}
ValidatePhoneInputValue = function (input) {
    if (input == '') {
        $('#frmLogin .error').text('Email hoặc Số điện thoại không được để trống');
        $('#txtusername').focus();
        return false;

    } else if (!validatePhoneInput(input)) {
        $('#frmLogin .error').text('Số điện thoại không đúng định dạng');
        $("#txtusername").focus();
        return false;
    }

    CheckWithPhone(input, 'frmLogin');
}
var FLAG_CHECK_MAIL = true;
CheckWithEmail = function (input, id) {
    var data = { strEmail: input };
    if (FLAG_CHECK_MAIL) {
        FLAG_CHECK_MAIL = false;
        CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
            if (e == "False" && id == 'frmLogin') {
                $('#' + id + ' .error').text('Email chưa được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else if (e == "True" && id == 'frmRegister') {
                $('#' + id + ' .error').text('Email đã được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else {
                $('#' + id + ' .error').text('');
            }
        }, onFailed, true);
        FLAG_CHECK_MAIL = true;
    }
}
var FLAG_CHECK_PHONE = true;
CheckWithPhone = function (input, id) {
    var data = { strMobile: input };
    if (FLAG_CHECK_PHONE) {
        FLAG_CHECK_PHONE = false;
        CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, function (e) {
            if (e == "False" && id == 'frmLogin') {
                $('#' + id + ' .error').text('Số điện thoại chưa được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else if (e == "True" && id == 'frmRegister') {
                $('#' + id + ' .error').text('Số điện thoại đã được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else {
                $('#' + id + ' .error').text('');
            }
        }, onFailed, true);
        FLAG_CHECK_PHONE = true;
    }
}
onFailed = function () {
    alert('Thao tác thực hiện không thành công.');
    return;
}
OnSuccessValidate = function (e) {
    if (e == "False") {
        return 0;
    }
    return 1;
}
var FLAG_LOGIN_SITE = true;
function ValidateLogin() {
    debugger;
    ValidateInputType();

    var $form = $('#frmLogin');
    var data = GetAllFormData($form);

    if (FLAG_LOGIN_SITE) {
        FLAG_LOGIN_SITE = false;
        POSTAjax('/cong-tac-vien/aj/Common/Login', data, function () {
            $('#submit-login').hide();
            $('.hloading').show();
        }, function (d) {
            if (d != '' && d != undefined && d != null) {
                if (d.indexOf('@') != -1) {
                    var isOk = d.toString().substr(0, d.indexOf("@"));
                    var url = d.toString().substr(d.indexOf("@") + 1);

                    if (isOk == 1) {
                        location.href = url;
                        return false;
                    }

                    if (isOk == -1) {
                        $('#frmLogin .error').text('Nhập email hoặc số điện thoại');
                        $("#txtusername").focus();
                        return false;
                    }

                    if (isOk == -2) {
                        $('#frmLogin .error').text('Vui lòng nhập mật khẩu');
                        $("#txtpassword").focus();
                        return false;
                    }

                    if (isOk == 0) {
                        $('#frmLogin .error').text('Thông tin đăng nhập không chính xác');
                        return false;
                    }
                }
            }
            else {
                $('#frmLogin .error').text('Thông tin đăng nhập không chính xác');
                return false;
            }
        }, ErrorAjax, true);
        FLAG_LOGIN_SITE = true;
    }
    $('#submit-login').show();
    $('.hloading').hide();
}
function ValidateUserName() {
    var username = document.getElementById('txtname');
    if (username.value.trim() == '') {
        $('#frmRegister .error').text('Bạn chưa nhập họ tên.');
        username.focus();
        return false;
    }
    else {
        if (username.value.trim().length < 5) {
            $('#frmRegister .error').text('Họ tên quá ngắn, tối thiểu 5 ký tự');
            username.focus();
            return false;
        }

        if (username.value.trim().length > 50) {
            $('#frmRegister .error').text('Họ tên quá dài.');
            username.focus();
            return false;
        }
    }
    $('#frmRegister .error').text('');
}
function ValidatePhoneUserRegist() {

    var email = document.getElementById('txtemail');
    if (email.value.trim() == '') {
        $('#frmRegister .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtemail').focus();
        return false;
    }

    if (email.value.trim().length > 30) {
        $('#frmRegister .error').text('Số điện thoại không hợp lệ');
        username.focus();
        return false;
    }

    var regphn = /^(((09)[0-9][2-9][0-9]{6})|((012)[0-9][2-9][0-9]{6})|((016)[2-9]{2}[0-9]{6}))$/;
    if (!regphn.test(email.value)) {
        $('#frmRegister .error').text('Số điện thoại không hợp lệ');
        $('#txtemail').focus();
        return false;
    }
    CheckWithPhone(email.value, 'frmRegister');
}
function ValidateEmailUserRegist() {

    var email = document.getElementById('txtemail');
    if (email.value.trim() == '') {
        $('#frmRegister .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtemail').focus();
        return false;
    }

    if (email.value.trim().length > 30) {
        $('#frmRegister .error').text('Email quá dài.');
        username.focus();
        return false;
    }

    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(email.value)) {
        $('#frmRegister .error').text('Email không đúng định dạng');
        $('#txtemail').focus();
        return false;
    }
    CheckWithEmail(email.value, 'frmRegister');
}
function ValidatePasswordUserRegist() {
    var pass = document.getElementById('txtpass');
    if (pass.value.trim() == "") {
        $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmRegister .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmRegister .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpass").focus();
        return false;
    } else {
        $('#frmRegister .error').text('');
    }
}
function ValidateInputForRegister() {

    var input = document.getElementById('txtemail');
    if (isNaN(input.value.trim())) {
        ValidateEmailUserRegist();
    }
    else {
        ValidatePhoneUserRegist();
    }
}
function ValidatePasswordLogin() {
    var pass = document.getElementById('txtpassword');
    if (pass.value.trim() == "") {
        $('#frmLogin .error').text('Vui lòng nhập mật khẩu');
        $("#txtpassword").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmLogin .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpassword").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmLogin .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpassword").focus();
        return false;
    } else {
        $('#frmLogin .error').text('');
    }
}
var FLAG_SUBMIT_REGIST = true;
function SubmitFormRegist() {
    var pass = document.getElementById('txtpass');
    if (pass.value.trim() == "") {
        $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmRegister .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmRegister .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpass").focus();
        return false;
    } else {
        $('#frmRegister .error').text('');
    }

    var $form = $('#frmRegister');
    var data = GetAllFormData($form);

    if (FLAG_SUBMIT_REGIST) {
        FLAG_SUBMIT_REGIST = false;
        POSTAjax('/aj/Common/SubmitRegisterInformation', data, function () {
            $('#submit-register').hide();
            $('.hloading').show();
        }, function (d) {
            FLAG_SUBMIT_REGIST = true;
            if (d != '' && d != undefined && d != null) {
                if (d == '-3') {
                    $('#frmRegister .error').text('Vui lòng nhập họ tên của bạn');
                    $("#txtname").focus();
                } else if (d == '-2') {
                    $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
                    $("#txtpassword").focus();
                }
                else if (d == '0') {
                    $('#frmRegister .error').text('Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.');
                }
                else {
                    alert('Bạn đã đăng ký tài khoản thành công!');
                    var ReturnURL = "";
                    var URL_from_Session = d;
                    if (URL_from_Session != "" && URL_from_Session != undefined)
                        if (URL_from_Session.indexOf('http://') > -1)
                            ReturnURL = URL_from_Session;
                        else
                            ReturnURL = 'http://' + URL_from_Session;
                    else
                        ReturnURL = "/";

                    window.location = ReturnURL;
                }
            }
        }, ErrorAjax, true);
    }

    $('#submit-register').show();
    $('.hloading').hide();
}
function submitRegisterForm() {
    var Email = $("#txtemail").val();
    var $form = $("#frmRegister");

    $form.ajaxSubmit({
        beforeSubmit: function () {
            $("#hloading").css('display', 'block');
            //$("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" src=\"" + cdnpath + "Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == 1) {
                //$("#login-error").css('display', 'block');
                $("#hloading").css("display", "none");
                $("#divcaptcha").css("display", "none");
                $("#confirmcapcha").css("display", "none");
                $("#frmRegister .error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
            }
            else if (e == 0) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Không gửi được email, vui lòng thử lại sau.");
            } else if (e == -3) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
                $("#txtemail").focus();
            } else if (e == -4) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Email không hợp lệ");
                $("#txtemail").focus();
            }
            else if (e == -5) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Vui lòng nhập địa chỉ Email");
                $("#txtemail").focus();
            }
            else if (e == -1) {
                $("#divcaptcha").css("display", "block");
                $("#confirmcapcha").css("display", "block");
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.</p>");
                $("#txtcaptcha").focus();
            } else if (e == -2) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Mã bảo mật không đúng.");
                $("#txtcaptcha").focus();
            }
        }
    });
}
//********************************* END FUNCTION FOR NEW HEADER *********************************//
function CallAjaxPostLogin(url, dat, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

/******************* LOGIN - HOME *****************************/
$(document).ready(function () {
    var cusid = $("#hfCusid").val();
    if (cusid != undefined) {
        //show location alert
        var ProvinceId = getCookie("CK_CHECK_PROVINCE_OF_USER");
        if (ProvinceId != "") {
            if (ProvinceId != $('#cityID').val())
                $("#divshowlocation").css('display', 'block');
            $("#divshowlocation").delay(2000).fadeOut();
        }
    }


    //for upload avatar


    var fileDiv = document.getElementById("upload-img");
    var fileInput = document.getElementById("upload-image");
    if (fileDiv == null || fileInput == null)
        return;

    fileInput.addEventListener("change", function (e) {
        $("#form-avatar").submit();
    }, false)

});

/*validate phone number*/
function validatePhoneInput(strMobile) {
    //check phone
    var regphn = /^(((09)[0-9][2-9][0-9]{6})|((012)[0-9][2-9][0-9]{6})|((016)[2-9]{2}[0-9]{6}))$/;
    if (!regphn.test(strMobile))
        return false;
    return true;
}

function Failed(e) {
    $("#spanmsg").html('Lỗi: ' + e.toString());
}

function ValidatePassword() {

    var pass = $("#txtpassword").val();
    var msg = $("#spanmsg");
    if (pass == "") {
        msg.addClass("error");
        msg.html("Vui lòng nhập mật khẩu");
        return false;
        $("#txtpassword").focus();

    } else if (pass.indexOf(' ') >= 0) {
        msg.addClass("error");
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();

    } else if (pass.length < 6 || pass.length > 20) {
        msg.addClass("error");
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    } else {
        msg.html("");
    }
    return true;
}

/*Main function to validate Login*/
function FormatValidateCharBlur(iduser) {

    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckRegisterFormEmail_Login(iduser);
    }
    else {
        CheckRegisterFormPhone_Login(iduser);
    }
}

function CheckRegisterFormEmail_Login(e) {

    var strEmail = $('#' + e + '').val();
    var msg = $("#spanmsg");
    // check email
    if (strEmail == '') {
        msg.addClass("error");
        msg.html("Vui lòng nhập Email hoặc số điện thoại");
        $("#txtusername").focus();
        return false;
    }
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(strEmail)) {
        msg.addClass("error");
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmail(strEmail);
}

function CheckRegisterFormPhone_Login(m) {

    var msg = $("#spanmsg");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '') {
        msg.addClass("error");
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;

    } else if (!validatePhoneInput(strMobile)) {
        msg.addClass("error");
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    CheckExistPhone(strMobile);
}

function CheckExistPhone(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, CheckPhoneNumberValidSuccessed2, Failed, true);
}

function CheckExistEmail(strEmail) {
   
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, CheckEmailValidSuccessed, Failed, true);
}

function CheckPhoneNumberValidSuccessed2(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Số điện thoại chưa được đăng ký");
        return;
        //  $("#txtusername").focus();
    } else {
        msg.html("");
    }
}

function CheckEmailValidSuccessed(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Email chưa được đăng ký");
        // $("#txtusername").focus();
        return;
    } else {
        msg.html("");
    }
}

function ValidateBeforeSubmit() {
    var username = $("#txtusername").val();
    var pass = $("#txtpassword").val();
    if (username == "") {
        FormatValidateCharBlur('txtusername');
        return false;
    } else if (pass == "") {
        ValidatePassword();
        return false;
    } else { //validate OK
        var $form = $('#form-login');
        $form.ajaxSubmit({
            success: function (e) {
                var vl = "";
                var url = "";
                if (e.toString().indexOf("@") > -1) {
                    vl = e.toString().substr(0, e.indexOf("@"));
                    url = e.toString().substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "-1") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Nhập email hoặc số điện thoại");
                    $("#txtusername").focus();
                } else if (vl == "-2") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Vui lòng nhập mật khẩu");
                    $("#txtpassword").focus();
                }
                else if (vl == "0") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Thông tin đăng nhập không chính xác");
                }
                else { //success
                    window.location = url;
                }
            }
        });
    }
}


/******************* LOGIN - HOME END *****************************/

/*=======================FORGET PASSWORD======================*/

function Validateforgetpass() {
    var strEmail = $("#popupemailforget").val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (strEmail == "") {
        $("#spforget").html("Vui lòng nhập Email của bạn");
        $("#popupemailforget").focus();
        return false;
    }
    else if (!regem.test(strEmail)) {
        $("#spforget").html("Email không đúng định dạng");
        $("#popupemailforget").focus();
        return false;
    } else if (!CheckExistEmailForgetPass(strEmail)) {
        $("#spforget").html("Email không tồn tại trong hệ thống");
        $("#popupemailforget").focus();
        return false;
    }
    return true;
}

function CheckExistEmailForgetPass(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {

        if (e == "False") {
            return false;
        }
    }, function (e) { }, true);
    return true;
}

/*Send link to email to reset password*/
function SendLinkToResetPassword() {
    var Email = $("#popupemailforget").val();
    if (!Validateforgetpass()) {
        return;
    }
    else {
        $("#spforget").html("");
        var data = { strEmail: Email };
        CallAjaxPost("/aj/Common/ResetPasswordFromEmail/", data, function () {
            $("#divwaiting").css("display", "block");
            $("#btnUpdatePassPopup").attr("disabled", "disabled");
        }, function (e) {
            $("#divwaiting").css("display", "none");
            if (e == 1) {
                alert("Vui lòng kiểm tra email của bạn để tạo mật khẩu mới");
                $.fancybox.close();
            } else {
                $("#spforget").html("Lỗi gửi email. Vui lòng thử lại sau.");
            }
        }, function () {
            $("#divwaiting").css("display", "none");
            $("#spforget").html("Lỗi gửi email. Vui lòng thử lại sau.");
        }, true);
    }
}

/*Validate password before process*/
function validatePasswordForgetPassword(ctl1, ctl2) {
    var pass1 = $('#' + ctl1 + '').val();
    var pass2 = $('#' + ctl2 + '').val();
    if (pass1 == "") {
        $("#spanmsgforget").html("Vui lòng nhập mật khẩu");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass2 == "") {
        $("#spanmsgforget").html("Vui lòng xác nhận mật khẩu");
        $('#' + ctl2 + '').focus();
    } else if (pass2.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl2 + '').focus();
    }
    else if (pass2.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl2 + '').focus();
    } else if (pass1 != pass2) {
        $("#spanmsgforget").html("Mật khẩu không giống nhau");
    } else {
        $("#form-pass").submit();
    }
}

/*=======================FORGET PASSWORD END======================*/

/***************************REGISTER******************************/

/*Check validate email*/
function CheckRegisterFormEmail_Register(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // check email
    if (strEmail == '') {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Vui lòng nhập địa chỉ Email");
        $("#txtemail").focus();
        return;
    }
    else if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Email không đúng định dạng");
        $("#txtemail").focus();
        return;
    }
    CheckExistEmail_Register(strEmail);
}

/*Check email to register - If existed, return error*/
function CheckExistEmail_Register(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e.toString() == "True" || e.toString() == "ERR") {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () {
    }, true);
}

/*Send link to email to register account*/
function SendLinkToRegister() {
    var Email = $("#txtemail").val();
    $("#login-error").html("");
    $("#login-error").css("display", "none");
    var data = { strEmail: Email };
    CallAjaxPostLogin("/aj/Common/SendEmailRegister/", data, function (e) {
        if (e == -1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        }
        else if (e == 1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        } else {
            $("#login-error").css('display', 'block');
            // $("#login-error").html("Lỗi trong việc gửi email. Vui lòng thử lại sau.");
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () { alert('Loi') }, true);
}

function submitsendEmail() {
    var Email = $("#txtemail").val();
    var $form = $("#form-register");

    $form.ajaxSubmit({
        beforeSubmit: function () {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" src=\"Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == 1) {
                $("#login-error").css('display', 'block');
                $("#divcaptcha").css("display", "none");
                $("#divconfirmcaptcha").css("display", "none");
                $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
            }
            else if (e == 0) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Không gửi được email, vui lòng thử lại sau.");
            } else if (e == -3) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
                $("#txtemail").focus();
            } else if (e == -4) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email không hợp lệ");
                $("#txtemail").focus();
            }
            else if (e == -5) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập địa chỉ Email");
                $("#txtemail").focus();
            }
            else if (e == -1) {
                $("#divcaptcha").css("display", "block");
                $("#divconfirmcaptcha").css("display", "block");
                $("#login-error").css('display', 'block');
                $("#login-error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                $("#txtcaptcha").focus();
            } else if (e == -2) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Mã bảo mật không đúng.");
                $("#txtcaptcha").focus();
            }
        }
    });
}

/*Validate to show check icon*/
function ValidateRegisterName() {
    var name = $("#txtname").val();
    name = name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    if (name == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập tên của bạn");
        $("#txtname").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#txtname").val(name.trim());
        $("#spcheckname").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }
}

/*Validate to show check icon*/
function ValidateRegisterPassword() {

    var pass1 = $("#txtpassword").val().trim();

    if (pass1 == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập mật khẩu của bạn");
        $("#txtpassword").focus();
    } else if (pass1.length < 6) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu phải có ít nhất 6 kí tự");
        $("#txtpassword").focus();
    } else if (pass1.length > 20) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu tối đa 20 kí tự");
        $("#txtpassword").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#spcheckpass").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }

}

//Get customer Avatar from gravatar.com
function get_gravatar(email, size) {
    var SiteURL = window.location.host;
    var realURL = "";
    if (email != "") {
        var MD5 = function (s) { function L(k, d) { return (k << d) | (k >>> (32 - d)) } function K(G, k) { var I, d, F, H, x; F = (G & 2147483648); H = (k & 2147483648); I = (G & 1073741824); d = (k & 1073741824); x = (G & 1073741823) + (k & 1073741823); if (I & d) { return (x ^ 2147483648 ^ F ^ H) } if (I | d) { if (x & 1073741824) { return (x ^ 3221225472 ^ F ^ H) } else { return (x ^ 1073741824 ^ F ^ H) } } else { return (x ^ F ^ H) } } function r(d, F, k) { return (d & F) | ((~d) & k) } function q(d, F, k) { return (d & k) | (F & (~k)) } function p(d, F, k) { return (d ^ F ^ k) } function n(d, F, k) { return (F ^ (d | (~k))) } function u(G, F, aa, Z, k, H, I) { G = K(G, K(K(r(F, aa, Z), k), I)); return K(L(G, H), F) } function f(G, F, aa, Z, k, H, I) { G = K(G, K(K(q(F, aa, Z), k), I)); return K(L(G, H), F) } function D(G, F, aa, Z, k, H, I) { G = K(G, K(K(p(F, aa, Z), k), I)); return K(L(G, H), F) } function t(G, F, aa, Z, k, H, I) { G = K(G, K(K(n(F, aa, Z), k), I)); return K(L(G, H), F) } function e(G) { var Z; var F = G.length; var x = F + 8; var k = (x - (x % 64)) / 64; var I = (k + 1) * 16; var aa = Array(I - 1); var d = 0; var H = 0; while (H < F) { Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = (aa[Z] | (G.charCodeAt(H) << d)); H++ } Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = aa[Z] | (128 << d); aa[I - 2] = F << 3; aa[I - 1] = F >>> 29; return aa } function B(x) { var k = "", F = "", G, d; for (d = 0; d <= 3; d++) { G = (x >>> (d * 8)) & 255; F = "0" + G.toString(16); k = k + F.substr(F.length - 2, 2) } return k } function J(k) { k = k.replace(/rn/g, "n"); var d = ""; for (var F = 0; F < k.length; F++) { var x = k.charCodeAt(F); if (x < 128) { d += String.fromCharCode(x) } else { if ((x > 127) && (x < 2048)) { d += String.fromCharCode((x >> 6) | 192); d += String.fromCharCode((x & 63) | 128) } else { d += String.fromCharCode((x >> 12) | 224); d += String.fromCharCode(((x >> 6) & 63) | 128); d += String.fromCharCode((x & 63) | 128) } } } return d } var C = Array(); var P, h, E, v, g, Y, X, W, V; var S = 7, Q = 12, N = 17, M = 22; var A = 5, z = 9, y = 14, w = 20; var o = 4, m = 11, l = 16, j = 23; var U = 6, T = 10, R = 15, O = 21; s = J(s); C = e(s); Y = 1732584193; X = 4023233417; W = 2562383102; V = 271733878; for (P = 0; P < C.length; P += 16) { h = Y; E = X; v = W; g = V; Y = u(Y, X, W, V, C[P + 0], S, 3614090360); V = u(V, Y, X, W, C[P + 1], Q, 3905402710); W = u(W, V, Y, X, C[P + 2], N, 606105819); X = u(X, W, V, Y, C[P + 3], M, 3250441966); Y = u(Y, X, W, V, C[P + 4], S, 4118548399); V = u(V, Y, X, W, C[P + 5], Q, 1200080426); W = u(W, V, Y, X, C[P + 6], N, 2821735955); X = u(X, W, V, Y, C[P + 7], M, 4249261313); Y = u(Y, X, W, V, C[P + 8], S, 1770035416); V = u(V, Y, X, W, C[P + 9], Q, 2336552879); W = u(W, V, Y, X, C[P + 10], N, 4294925233); X = u(X, W, V, Y, C[P + 11], M, 2304563134); Y = u(Y, X, W, V, C[P + 12], S, 1804603682); V = u(V, Y, X, W, C[P + 13], Q, 4254626195); W = u(W, V, Y, X, C[P + 14], N, 2792965006); X = u(X, W, V, Y, C[P + 15], M, 1236535329); Y = f(Y, X, W, V, C[P + 1], A, 4129170786); V = f(V, Y, X, W, C[P + 6], z, 3225465664); W = f(W, V, Y, X, C[P + 11], y, 643717713); X = f(X, W, V, Y, C[P + 0], w, 3921069994); Y = f(Y, X, W, V, C[P + 5], A, 3593408605); V = f(V, Y, X, W, C[P + 10], z, 38016083); W = f(W, V, Y, X, C[P + 15], y, 3634488961); X = f(X, W, V, Y, C[P + 4], w, 3889429448); Y = f(Y, X, W, V, C[P + 9], A, 568446438); V = f(V, Y, X, W, C[P + 14], z, 3275163606); W = f(W, V, Y, X, C[P + 3], y, 4107603335); X = f(X, W, V, Y, C[P + 8], w, 1163531501); Y = f(Y, X, W, V, C[P + 13], A, 2850285829); V = f(V, Y, X, W, C[P + 2], z, 4243563512); W = f(W, V, Y, X, C[P + 7], y, 1735328473); X = f(X, W, V, Y, C[P + 12], w, 2368359562); Y = D(Y, X, W, V, C[P + 5], o, 4294588738); V = D(V, Y, X, W, C[P + 8], m, 2272392833); W = D(W, V, Y, X, C[P + 11], l, 1839030562); X = D(X, W, V, Y, C[P + 14], j, 4259657740); Y = D(Y, X, W, V, C[P + 1], o, 2763975236); V = D(V, Y, X, W, C[P + 4], m, 1272893353); W = D(W, V, Y, X, C[P + 7], l, 4139469664); X = D(X, W, V, Y, C[P + 10], j, 3200236656); Y = D(Y, X, W, V, C[P + 13], o, 681279174); V = D(V, Y, X, W, C[P + 0], m, 3936430074); W = D(W, V, Y, X, C[P + 3], l, 3572445317); X = D(X, W, V, Y, C[P + 6], j, 76029189); Y = D(Y, X, W, V, C[P + 9], o, 3654602809); V = D(V, Y, X, W, C[P + 12], m, 3873151461); W = D(W, V, Y, X, C[P + 15], l, 530742520); X = D(X, W, V, Y, C[P + 2], j, 3299628645); Y = t(Y, X, W, V, C[P + 0], U, 4096336452); V = t(V, Y, X, W, C[P + 7], T, 1126891415); W = t(W, V, Y, X, C[P + 14], R, 2878612391); X = t(X, W, V, Y, C[P + 5], O, 4237533241); Y = t(Y, X, W, V, C[P + 12], U, 1700485571); V = t(V, Y, X, W, C[P + 3], T, 2399980690); W = t(W, V, Y, X, C[P + 10], R, 4293915773); X = t(X, W, V, Y, C[P + 1], O, 2240044497); Y = t(Y, X, W, V, C[P + 8], U, 1873313359); V = t(V, Y, X, W, C[P + 15], T, 4264355552); W = t(W, V, Y, X, C[P + 6], R, 2734768916); X = t(X, W, V, Y, C[P + 13], O, 1309151649); Y = t(Y, X, W, V, C[P + 4], U, 4149444226); V = t(V, Y, X, W, C[P + 11], T, 3174756917); W = t(W, V, Y, X, C[P + 2], R, 718787259); X = t(X, W, V, Y, C[P + 9], O, 3951481745); Y = K(Y, h); X = K(X, E); W = K(W, v); V = K(V, g) } var i = B(Y) + B(X) + B(W) + B(V); return i.toLowerCase() };
        var size = size || 80;

        if (MD5(email) != "") {
            realURL = "http://www.gravatar.com/avatar.php?gravatar_id=" + MD5(email) + "&default=" + encodeURI('http://www.thegioididong.com/Content/images/sites/default_avatar_large.png') + "&size=90";
        }
    } else {
        realURL = 'http://www.tgdd.com/Content/images/sites/default_avatar_large.png';
    }
    return realURL;
}


//Set link to Register page, include returnURL.
//ex: www.tgdd.com/dang-ky?returnurl=www.tgdd.com/dtdd/iphone-5
function SetLinkRegister() {
    var param = getQuerystring("returnurl"); //redirect from dang-ky to dang-nhap
    if (param != "")
        window.location = "/dang-ky?returnurl=" + param;
    else {
        var curURL = window.location.href;
        var dataInput = { content: curURL };
        CallAjaxPostLogin("/aj/Common/EncryptQeryString/", dataInput, function (data) {
            if (data != "") {
                window.location = "/dang-ky?returnurl=" + data;
            }

        }, function () { }, true);
    }



}

/*set link to login page with returnURL param*/
function SetLinkLogin() {
    var param = getQuerystring("returnurl"); //redirect from dang-ky to dang-nhap
    if (param != "")
        window.location = "/dang-nhap?returnurl=" + param;
    else {
        var curURL = window.location.href;
        var dataInput = { content: curURL };
        CallAjaxPostLogin("/aj/Common/EncryptQeryString/", dataInput, function (data) {
            if (data != "") {
                window.location = "/dang-nhap?returnurl=" + data;
            }

        }, function () { }, true);
    }

}

/*Change avatar when register Profile*/
function ChangeAvatar() {

    var strFile = $("#upload-image").val();

    var databefore = { strFile: strFile };
    CallAjaxPost("/aj/Common/UploadAvatar/", databefore, BeforeSendAjax, function (e) {
        var data = $.parseJSON(e.currentTarget.response);
        if (data.message == "upload sucessfully") {

            var li = document.createElement("li");
            var image = document.createElement("img");
            image.setAttribute("id", "img-" + data.ImageId);
            image.setAttribute("name", data.ImageName);
            var thumbnail = document.getElementById("thumbnail");
            image.src = data.imageUrl;
            li.appendChild(image);
            thumbnail.appendChild(li);

            //  $("#thumbnail").html("<li><img border=\"0\" alt=\"" + data.ImageName + "\" src=\"" + data.imageUrl + "\"/></li>");
            setInterval(this, 5);
        }
        if (data.message == "maximum size upload") {
            alert("Dung lượng file upload quá lớn. Tối đa 1MB.");
        }
        if (data.message == "maximum file upload") {
            alert("Bạn chỉ được phép thêm tối đa 1 hình.");
        }

        if (data.message == "invalid file upload") {
            alert("Vui lòng chọn hình ảnh đúng định dạng");
        }
    }, ErrorAjax, true);
}

/*Complete create customer and redirect to previous link*/
function CreateCustomer() {
    var $frm = $("#form-register-final");
    $frm.ajaxSubmit({
        beforeSubmit: function () {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Đang xử lý, vui lòng đợi trong giây lát... <img border=\"0\" alt=\"Loading\" src=\"/Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == '-3') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập họ tên của bạn");
                $("#txtname").focus();
            } else if (e == '-2') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập mật khẩu");
                $("#txtpassword").focus();
            }
            else if (e == '0') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.");
            }
            else {
                var ReturnURL = "";
                var URL_from_Session = e;
                if (URL_from_Session != "" && URL_from_Session != undefined)
                    if (URL_from_Session.indexOf('http://') > -1)
                        ReturnURL = URL_from_Session;
                    else
                        ReturnURL = 'http://' + URL_from_Session;
                else
                    ReturnURL = "/";

                window.location = ReturnURL;
            }
        }
    });
}

/***************************REGISTER END******************************/

/********************* LOGIN - MAIN **********************************/

/*get querystring*/
function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}

function Checkdataonblur(iduser) {
    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckEmail_LoginMain(iduser);
    }
    else {
        CheckPhone_LoginMain(iduser);
    }
}

function CheckEmail_LoginMain(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var msg = $("#login-error");
    // check email
    if (strEmail == '' || strEmail == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;
    }
    if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmailMain(strEmail);
}

function CheckPhone_LoginMain(m) {
    var msg = $("#login-error");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '' || strMobile == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;

    } else if (!validatePhoneInput(strMobile)) {
        $("#login-error").css('display', 'block');
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    CheckExistPhoneMain(strMobile);
}

function CheckExistPhoneMain(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}

function CheckExistEmailMain(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}

function ValidatePassMain(e) {
    var pass = $('#' + e + '').val();
    var msg = $("#login-error");
    if (pass == '' || pass == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Vui lòng nhập mật khẩu");
        $("#txtpassword").focus();
        return false;
    } else if (pass.indexOf(' ') >= 0) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();
    } else if (pass.length < 6 || pass.length > 20) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    return true;
}

function ValidateDataBeforeLogin(u, p) {
    var us = $('#' + u + '').val();
    var pa = $('#' + p + '').val();
    if (us == '' || us == undefined) {
        Checkdataonblur(u);
        return false;
    }
    else if (pa == '' || pa == undefined) {
        ValidatePassMain(p);
        return false;
    }
    else {
        var $formMain = $('#form-login-main');
        $formMain.ajaxSubmit({
            beforeSubmit: function () {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" alt=\"Loading\" src=\"Content/images/sites/ajax-loader.gif\"/>");
            },
            success: function (e) {
                var vl = "";
                var url = "";
                if (e.indexOf("@") > -1) {
                    vl = e.substr(0, e.indexOf("@"));
                    url = e.substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "0") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Thông tin đăng nhập không chính xác.");
                } else if (vl == "-1") {
                    $("#divcaptcha").css("display", "block");
                    $("#divconfirmcaptcha").css("display", "block");
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("<p>Bạn đã đăng nhập vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                    $("#txtcaptcha").focus();
                }
                else if (vl == "-2") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Mã bảo mật không đúng.");
                    $("#txtcaptcha").focus();
                }
                else {
                    if (url == "" || url.indexOf("dang-nhap") > -1 || url.indexOf("dang-ky") > -1)
                        url = "/";
                    window.location = url;
                }
            }
        });
    }
}

function SetLinkLogin() {
    var returnURL = getQuerystring("returnurl");
    var curURL = window.location.href;
    if (returnURL != "")
        window.location = "/dang-nhap?returnurl=" + returnURL;
    else
        window.location = "/dang-nhap";
}

/********************* LOGIN - MAIN END **********************************/