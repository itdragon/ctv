$(document).ready(function () {
  
});

function ViewPrev(currentpage)
{
    var prevpage = currentpage - 1;
    if (prevpage > 0)
    {
        window.location = "/cong-tac-vien?page=" + prevpage;
    }
}

function ActiveMenu() {
    var CatID = $("#hfCatID").val();
    var item = document.getElementById("menuCat_" + CatID);
    if (CatID == null || CatID == "" || item == null || item == "undefinded") {
        $("#firstnews").addClass("act");
    }
    else {
        $("#menuCat_" + CatID).addClass("act");
    }
}

function GoPage(page)
{
    window.location = "/cong-tac-vien?page=" + page;
}

function ViewNext(currentpage, maxpage) {
    var nextpage = currentpage + 1;
    if (nextpage <= maxpage) {
        window.location = "/cong-tac-vien?page=" + nextpage;
    }
}


function ViewPrevURL(url, id, currentpage) {
    var prevpage = currentpage - 1;
    if (prevpage > 0) {
        window.location = "/cong-tac-vien/" + url + "/" + id + "?page=" + prevpage;
    }
}

function GoPageURL(url, id, page) {
    window.location = "/cong-tac-vien/" + url + "/" + id + "?page=" + page;
}

function ViewNextURL(url, id, currentpage, maxpage) {
    var nextpage = currentpage + 1;
    if (nextpage <= maxpage) {
        window.location = "/cong-tac-vien/" + url + "/" + id + "?page=" + nextpage;
    }
}