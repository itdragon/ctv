function GetPasswordByEmail() {
    var item = document.getElementById("txtEmailGetPass");
    var checkitem = 0;
    if (item.value == "") {
        alert("Vui lòng nhập email để lấy password");
        return;
    }
    else {
        checkitem = CheckFormatEmail(item.value);
        if (checkitem == 0)
            return;
    }
    if (checkitem == 1) {
        $.ajax({
            url: "/ctv/ajax/Common/ResetPasswordFromEmail",
            type: "GET",
            cache: false,
            data: { strEmail: item.value },
            beforeSend: function () {
                //$('.loading').show();
            },
            success: function (result) {
                //$('.loading').hide();
                if (result == -2) {
                    alert("Email/số điện thoại chưa đăng ký");
                    return;
                }
                else if (result == -1) {
                    alert("Email không hợp lệ");
                    return;
                }
                else if (result == 0) {
                    alert("Có lỗi trong quá trình lấy mật khẩu");
                    return;
                }
                else if (result == 1) {
                    alert("Hệ thống đã gửi 1 email xác nhận email của quý khách. Xin quý khách vui lòng kiểm tra lại email để lấy lại mật khẩu");
                    return;
                }
            },
            error: function (result) {
                return;
            }
        });
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

function CheckGetPasswordByEmail(e) {
    if (e.which == 13) {
        GetPasswordByEmail();
    }
}

function CheckLogin(e) {
    if (e.which == 13) {
        LoginFunction();
    }
}

function CheckRegister(e) {
    if (e.which == 13) {
        SubmitRegisterInformation();
    }
}

function CheckFormatEmail(email) {
    if (email.indexOf("@") == -1) {
        alert("Email không hợp lệ. Xin quý khách vui lòng kiểm tra lại");
        return 0;
    }
    else {
        if (email.indexOf("+") != -1 || email.indexOf("+") != -1 || email.indexOf("*") != -1 || email.indexOf("/") != -1 || email.indexOf("?") != -1 || email.indexOf(",") != -1 || email.indexOf(";") != -1 || email.indexOf("\"") != -1 || email.indexOf("'") != -1 || email.indexOf("{") != -1 || email.indexOf("}") != -1 || email.indexOf("|") != -1 || email.indexOf("\\") != -1 || email.indexOf("<") != -1 || email.indexOf(">") != -1 || email.indexOf("=") != -1) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

function CheckPhoneNumber(txtphone)
{
    if (txtphone.length > 11 || txtphone.length < 8) {
        alert("Số điện thoại không hợp lệ");
        return 0;
    }
    else {
        checkitem = 1;
        return 1;
    }
}

function LoginFunction() {
    var txtemail = document.getElementById("txtemailpr");
    var txtpassword = document.getElementById("txtpasswordlogin");
    var checkitem = 0;
    if (txtemail.value == "") {
        alert("Vui lòng điền email/số điện thoại");
        $(txtpassword).attr("style", "");
        $(txtemail).attr("style", "border: 1px solid red;");
        txtemail.focus();
        return;
    }
    else {
        if (isNaN(txtemail.value)) {
            checkitem = CheckFormatEmail(txtemail.value);
            if (checkitem == 0)
                return;
        }
        else {
            checkitem = CheckPhoneNumber(txtemail.value);
            if (checkitem == 0)
                return;
        }
    }
    if (txtpassword.value == "") {
        alert("Vui lòng điền mật khẩu");
        $(txtemail).attr("style", "");
        $(txtpassword).attr("style", "border: 1px solid red;");
        txtpassword.focus();
        return;
    }
    $.ajax({
        url: "/ctv/ajax/Common/LoginNew_News",
        type: "GET",
        cache: false,
        data: { email: txtemail.value, password: txtpassword.value },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            if (result == "-1") {
                alert("Email không tồn tại");
                return;
            }
            else if (result == "0") {
                alert("Có lỗi trong quá trình đăng nhập");
                return;
            }
            else if (result == "1") {
                window.location = "/ctv";
                return;
            }
        },
        error: function (result) {
            return;
        }
    });
}

function CheckTrueEmail(checkitem) {
    var checkitem = 0;
    var txtemailpr = document.getElementById("txtemailpr");
    var txtemail2 = document.getElementById("txtemail2");
    if (txtemailpr.value != txtemail2.value) {
        $(txtemailpr).attr("style", "");
        $(txtemail2).attr("style", "border: 1px solid red;");
    }
    else {
        checkitem = 1;
        $(txtemailpr).attr("style", "border: 1px solid green;");
        $(txtemail2).attr("style", "border: 1px solid green;");
    }
}

function SubmitRegisterInformation() {
    var txtname = document.getElementById("txtname");
    var txtemailpr = document.getElementById("txtemailpr");
    var txtemail2 = document.getElementById("txtemail2");
    var txtpassword = document.getElementById("txtpasswordregister");
    var rdmale = document.getElementById("rdmale");
    var rdfemale = document.getElementById("rdfemale");
    var checkitem = 0;
    if (txtname.value == "") {
        alert("Vui lòng điền họ tên");
        $(txtemailpr).attr("style", "");
        $(txtemail2).attr("style", "");
        $(txtpassword).attr("style", "");
        $(txtname).attr("style", "border: 1px solid red;");
        txtname.focus();
        return;
    }
    if (txtemailpr.value == "") {
        alert("Vui lòng điền email");
        $(txtname).attr("style", "");
        $(txtemail2).attr("style", "");
        $(txtpassword).attr("style", "");
        $(txtemailpr).attr("style", "border: 1px solid red;");
        txtemailpr.focus();
        return;
    }
    else {
        checkitem = CheckFormatEmail(txtemailpr.value);
        if (checkitem == 0)
            return;
    }
    if (txtemail2.value == "") {
        alert("Vui lòng điền email");
        $(txtname).attr("style", "");
        $(txtemailpr).attr("style", "");
        $(txtpassword).attr("style", "");
        $(txtemail2).attr("style", "border: 1px solid red;");
        txtemail2.focus();
        return;
    }
    else {
        if (txtemailpr.value != txtemail2.value) {
            alert("Email không trùng khớp");
            $(txtname).attr("style", "");
            $(txtpassword).attr("style", "");
            $(txtemailpr).attr("style", "border: 1px solid red;");
            $(txtemail2).attr("style", "border: 1px solid red;");
            txtemailpr.focus();
            return;
        }
    }
    if (txtpassword.value == "") {
        alert("Vui lòng điền mật khẩu");
        $(txtemailpr).attr("style", "");
        $(txtemail2).attr("style", "");
        $(txtname).attr("style", "");
        $(txtpassword).attr("style", "border: 1px solid red;");
        txtpassword.focus();
        return;
    }
    //if (txtemailpr.value != txtemail2.value) {
    //    alert("Email không trùng khớp");
    //    $(txtname).attr("style", "");
    //    $(txtpassword).attr("style", "");
    //    $(txtemailpr).attr("style", "border: 1px solid red;");
    //    $(txtemail2).attr("style", "border: 1px solid red;");
    //    txtemailpr.focus();
    //    return;
    //}
    var gendr = "1";
    if (rdmale.checked)
        gendr = "1";
    if (rdfemale.checked)
        gendr = "0";
    if (checkitem == 1) {
        $.ajax({
            url: "/ctv/ajax/Common/SubmitRegisterInformationString",
            type: "GET",
            cache: false,
            data: { fullname: txtname.value, email: txtemailpr.value, password: txtpassword.value, gender: gendr },
            beforeSend: function () {
                //$('.loading').show();
            },
            success: function (result) {
                //$('.loading').hide();
                if (result == "-3") {
                    alert("Vui lòng điền họ tên");
                }
                else if (result == "-2") {
                    alert("Vui lòng điền mật khẩu");
                }
                else if (result == "-1") {
                    alert("Email đã đăng ký");
                }
                else if (result == "0") {
                    alert("Lỗi trong quá trình đăng ký");
                }
                else if (result == "1") {
                    //alert("Đăng nhập thành công");
                    window.location = "/ctv";
                }
                return;
            },
            error: function (result) {
                return;
            }
        });
    }
}