function d(a) {
    var b = "span.SimpleUploadsTmpWrapper>span { top: 50%; margin-top: -0.5em; width: 100%; text-align: center; color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); font-size: 50px; font-family: Calibri,Arial,Sans-serif; pointer-events: none; position: absolute; display: inline-block;}";
    a.simpleuploads_hideImageProgress && (b = "span.SimpleUploadsTmpWrapper { color:#333; background-color:#fff; padding:4px; border:1px solid #EEE;}");
    return ".SimpleUploadsOverEditor { " + (a.simpleuploads_editorover || "box-shadow: 0 0 10px 1px #999999 inset !important;") + " }a.SimpleUploadsTmpWrapper { color:#333; background-color:#fff; padding:4px; border:1px solid #EEE;}.SimpleUploadsTmpWrapper { display: inline-block; position: relative; pointer-events: none;}" + b + ".uploadRect {display: inline-block;height: 0.9em;vertical-align: middle;width: 20px;}.uploadRect span {background-color: #999;display: inline-block;height: 100%;vertical-align: top;}.SimpleUploadsTmpWrapper .uploadCancel { background-color: #333333;border-radius: 0.5em;color: #FFFFFF;cursor: pointer !important;display: inline-block;height: 1em;line-height: 0.8em;margin-left: 4px;padding-left: 0.18em;pointer-events: auto;position: relative; text-decoration:none; top: -2px;width: 0.7em;}.SimpleUploadsTmpWrapper span uploadCancel { width:1em; padding-left:0}"
}

function u(a) {
    var b = a.listenerData.editor, c = a.listenerData.dialog, d, e;
    if (d = a.data && a.data.$.clipboardData || b.config.forcePasteAsPlainText && window.clipboardData)
        if (CKEDITOR.env.gecko && b.config.forcePasteAsPlainText && d.types.length === 0)
            b.on("beforePaste", function (a) {
                a.removeListener();
                a.data.type =
                "html"
            });
        else {
            var f = d.items || d.files;
            if (f && f.length) {
                if (f[0].kind)
                    for (d = 0; d < f.length; d++) {
                        e = f[d];
                        if (e.kind == "string" && (e.type == "text/html" || e.type == "text/plain")) {
                            return;
                        }
                    }
                for (d = 0; d < f.length; d++) {
                    e = f[d];
                    if (!(e.kind && e.kind != "file")) {
                        a.data.preventDefault();
                        var g = e.getAsFile ? e.getAsFile() : e;
                        CKEDITOR.env.ie || b.config.forcePasteAsPlainText ? setTimeout(function () {
                            p(g, a)
                        }, 100) : p(g, a)
                    }
                }
                c && a.data.$.defaultPrevented && c.hide()
            }
        }
}

function p(a, b) {
    var c = b.listenerData.editor, d = b.listenerData.dialog, e = CKEDITOR.plugins.simpleuploads.getTimeStampId();
    CKEDITOR.plugins.simpleuploads.insertPastedFile(c, { context: b.data.$, name: a.name || e + ".png", file: a, forceLink: false, id: e, mode: { type: "pastedFile", dialog: d } })
}

function n(a, b) {
    if (!b.callback) {
        var c = CKEDITOR.plugins.simpleuploads.isImageExtension(a, b.name), d = !a.config.simpleuploads_hideImageProgress;
        if (!b.forceLink && c && d)
            c = r(b.file, b.id, a);
        else {
            c = c && !b.forceLink ? new CKEDITOR.dom.element("span", a.document) : new CKEDITOR.dom.element("a", a.document);
            c.setAttribute("id", b.id);
            c.setAttribute("class", "SimpleUploadsTmpWrapper");
            c.setHtml("<span class='uploadName'>" + b.name + "</span> <span class='uploadRect'><span id='rect" + b.id + "'></span></span> <span id='text" + b.id + "' class='uploadText'> </span><span class='uploadCancel'>x</span>")
        }
        c.setAttribute("contentEditable", false);
        b.element = c
    }
    c = j(a, b);
    if (!c) {
        b.result =
        b.result || "";
        return false
    }
    b.callback && b.callback.start && b.callback.start(b);
    if (typeof b.file == "string") {
        var e = "-----------------------------1966284435497298061834782736", d = b.name.match(/\.(\w+)$/)[1], e = e + ('\r\nContent-Disposition: form-data; name="upload"; filename="' + b.name + '"'), e = e + ("\r\nContent-type: image/" + d) + ("\r\n\r\n" + window.atob(b.file.split(",")[1])), e = e + "\r\n-----------------------------1966284435497298061834782736";
        if (b.extraFields) {
            var d = b.extraFields, f;
            for (f in d) {
                e = e + ('\r\nContent-Disposition: form-data; name="' +
                unescape(encodeURIComponent(f)).replace(/=/g, "\\=") + '"');
                e = e + ("\r\n\r\n" + unescape(encodeURIComponent(d[f])));
                e = e + "\r\n-----------------------------1966284435497298061834782736"
            }
        }
        e = e + "--";
        c.setRequestHeader("Content-Type", "multipart/form-data; boundary=---------------------------1966284435497298061834782736");
        if (c.sendAsBinary)
            c.sendAsBinary(e);
        else {
            f = new ArrayBuffer(e.length);
            f = new Uint8Array(f, 0);
            for (d = 0; d < e.length; d++)
                f[d] = e.charCodeAt(d) & 255;
            c.send(f)
        }
    } else {
        f = new FormData;
        f.append("upload", b.file,
        b.name);
        if (b.extraFields) {
            d = b.extraFields;
            for (e in d)
                d.hasOwnProperty(e) && f.append(e, d[e])
        }
        c.send(f)
    }
    return true
}

function r(a, b, c) {
    var d = new CKEDITOR.dom.element("span", c.document), e = d.$, f, g = c.document.$, c = g.createElement("span");
    d.setAttribute("id", b);
    d.setAttribute("class", "SimpleUploadsTmpWrapper");
    var h = g.createElement("span");
    h.setAttribute("id", "text" + b);
    h.appendChild(g.createTextNode("0 %"));
    e.appendChild(c);
    c.appendChild(h);
    h = g.createElement("span");
    h.appendChild(g.createTextNode("x"));
    c.appendChild(h);
    if (typeof a != "string") {
        f = window.URL || window.webkitURL;
        if (!f || !f.revokeObjectURL)
            return d
    }
    c = g.createElementNS("http://www.w3.org/2000/svg", "svg");
    c.setAttribute("id", "svg" + b);
    h = g.createElement("img");
    if (f) {
        h.onload = function () {
            if (this.onload) {
                f.revokeObjectURL(this.src);
                this.onload = null
            }
            var a = g.getElementById("svg" + b);
            if (a) {
                a.setAttribute("width", this.width + "px");
                a.setAttribute("height", this.height + "px")
            }
            if (a = g.getElementById(b))
                a.style.width = this.width +
                "px"
        };
        h.src = f.createObjectURL(a)
    } else {
        h.src = a;
        h.onload = function () {
            this.onload = null;
            var a = g.getElementById("svg" + b);
            if (a) {
                a.setAttribute("width", this.width + "px");
                a.setAttribute("height", this.height + "px")
            }
        };
        c.setAttribute("width", h.width + "px");
        c.setAttribute("height", h.height + "px")
    }
    e.appendChild(c);
    e = g.createElementNS("http://www.w3.org/2000/svg", "filter");
    e.setAttribute("id", "SVGdesaturate");
    c.appendChild(e);
    h = g.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
    h.setAttribute("type", "saturate");
    h.setAttribute("values", "0");
    e.appendChild(h);
    e = g.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    e.setAttribute("id", "SVGprogress" + b);
    c.appendChild(e);
    h = g.createElementNS("http://www.w3.org/2000/svg", "rect");
    h.setAttribute("id", "rect" + b);
    h.setAttribute("width", "0");
    h.setAttribute("height", "100%");
    e.appendChild(h);
    var i = g.createElementNS("http://www.w3.org/2000/svg", "image");
    i.setAttribute("width", "100%");
    i.setAttribute("height", "100%");
    if (f) {
        i.setAttributeNS("http://www.w3.org/1999/xlink",
        "href", f.createObjectURL(a));
        var j = function () {
            f.revokeObjectURL(i.getAttributeNS("http://www.w3.org/1999/xlink", "href"));
            i.removeEventListener("load", j, false)
        };
        i.addEventListener("load", j, false)
    } else
        i.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
    a = i.cloneNode(true);
    i.setAttribute("filter", "url(#SVGdesaturate)");
    i.style.opacity = "0.5";
    c.appendChild(i);
    a.setAttribute("clip-path", "url(#SVGprogress" + b + ")");
    c.appendChild(a);
    return d
}

function j(b, c) {
    var d = CKEDITOR.plugins.simpleuploads.isImageExtension(b, c.name), e = "href", f = false;
    if (!c.forceLink && d) {
        e = "src";
        f = true
    }
    c.callback && c.callback.setup(c);
    if (!c.url)
        c.url = a(b, 2, f);
    if (c.requiresImage && !d) {
        alert(b.lang.simpleuploads.nonImageExtension);
        return null
    }
    if (typeof b.fire("simpleuploads.startUpload", c) == "boolean")
        return null;
    var h = new XMLHttpRequest;
    if (d =
    h.upload)
        d.onprogress = function (a) {
            o(b, c.id, a)
        };
    c.xhr = h;
    h.open("POST", c.url);
    h.onload = function () {
        var a = h.responseText.match(/\((?:"|')?\d+(?:"|')?,\s*("|')(.*?[^\\]?)\1(?:,\s*(.*?))?\s*\)\s*;?\s*<\/script>/), d = a && a[2], f = a && a[3], j = c.id, k = b.document.getById(j);
        if (f) {
            var l = f.match(/function\(\)\s*\{(.*)\}/);
            if (l)
                f = new Function(l[1]);
            else {
                l = f.substring(0, 1);
                if (l == "'" || l == '"')
                    f = f.substring(1, f.length - 1)
            }
        }
        o(b, j, null);
        b.fire("updateSnapshot");
        b.fire("simpleuploads.endUpload", { name: c.name, ok: !!d });
        if (h.status !=
        200) {
            h.status == 413 ? alert(b.lang.simpleuploads.fileTooBig) : alert("Error posting the file to " + c.url + "\r\nResponse status: " + h.status);
            window.console && console.log(h)
        } else if (!a) {
            f = "Error posting the file to " + c.url + "\r\nInvalid data returned (check console)";
            window.console && console.log(h.responseText)
        }
        if (c.callback) {
            !d && f && alert(f);
            c.callback.upload(d, f, c)
        } else if (k) {
            if (d) {
                d = d.replace(/\\'/g, "'");
                if (k.$.nodeName.toLowerCase() == "span") {
                    var m;
                    if (c.originalNode) {
                        m = c.originalNode.cloneNode(true);
                        m.removeAttribute("width");
                        m.removeAttribute("height");
                        m.style.width = "";
                        m.style.height = "";
                        m = new CKEDITOR.dom.element(m)
                    } else
                        m = new CKEDITOR.dom.element("img", b.document);
                    m.data("cke-saved-src", d);
                    m.setAttribute("src", d);
                    m.on("load", function (a) {
                        a.removeListener();
                        m.removeListener("error", g);
                        i(m, b, k, c.name)
                    });
                    m.on("error", g, null, k);
                    k.data("cke-real-element-type", "img");
                    k.data("cke-realelement", encodeURIComponent(m.getOuterHtml()));
                    k.data("cke-real-node-type", CKEDITOR.NODE_ELEMENT);
                    return
                }
                if (c.originalNode) {
                    a = c.originalNode.cloneNode(true);
                    k.$.parentNode.replaceChild(a, k.$);
                    k = new CKEDITOR.dom.element(a)
                } else {
                    k.removeAttribute("id");
                    k.removeAttribute("class");
                    k.removeAttribute("contentEditable");
                    k.setHtml(k.getFirst().getHtml())
                }
                k.data("cke-saved-" + e, d);
                k.setAttribute(e, d);
                b.fire("simpleuploads.finishedUpload", { name: c.name, element: k })
            } else {
                c.originalNode ? k.$.parentNode.replaceChild(c.originalNode, k.$) : k.remove();
                f && alert(f)
            }
            b.fire("updateSnapshot")
        }
    };
    h.onerror = function (a) {
        alert("Error posting the file to " + c.url);
        window.console && console.log(a);
        (a = b.document.getById(c.id)) && (c.originalNode ? a.$.parentNode.replaceChild(c.originalNode, a.$) : a.remove());
        b.fire("updateSnapshot")
    };
    h.onabort = function () {
        if (c.callback)
            c.callback.upload(null);
        else {
            var a = b.document.getById(c.id);
            a && (c.originalNode ? a.$.parentNode.replaceChild(c.originalNode, a.$) : a.remove());
            b.fire("updateSnapshot")
        }
    };
    h.withCredentials = true;
    return h
}

function h(a, b) {
    var c = [];
    if (b)
        for (var d in b)
            c.push(d + "=" + encodeURIComponent(b[d]));
    else
        return a;
    return a + (a.indexOf("?") !=
    -1 ? "&" : "?") + c.join("&")
}

function a(a, b, c) {
    var d = {};
    d.CKEditor = a.name;
    d.CKEditorFuncNum = b;
    d.langCode = a.langCode;
    return h(c ? a.config.filebrowserImageUploadUrl : a.config.filebrowserUploadUrl, d)
}

function s(a, b) {
    var c = a.document.getById(b.id);
    if (c) {
        var d = c.$.getElementsByTagName("a");
        if (!d || !d.length) {
            d = c.$.getElementsByTagName("span");
            if (!d || !d.length)
                return
        }
        for (c = 0; c < d.length; c++) {
            var e = d[c];
            if (e.innerHTML == "x") {
                e.className = "uploadCancel";
                e.onclick = function () {
                    b.xhr && b.xhr.abort()
                }
            }
        }
    }
}

function o(a, b, c) {
    if (a.document && a.document.$) {
        var d = (CKEDITOR.dialog.getCurrent() ? CKEDITOR : a).document.$, e = d.getElementById("rect" + b), b = d.getElementById("text" + b);
        if (c) {
            if (!c.lengthComputable)
                return;
            d = (100 * c.loaded / c.total).toFixed(2) + "%";
            a = (100 * c.loaded / c.total).toFixed() + "%"
        } else {
            a = "Processing...";
            d = "100%"
        }
        if (e) {
            e.setAttribute("width", d);
            e.style.width = d;
            if (!c)
                (e = e.parentNode) &&
                e.className == "uploadRect" && e.parentNode.removeChild(e)
        }
        if (b) {
            b.firstChild.nodeValue = a;
            if (!c)
                (c = b.nextSibling) && c.nodeName.toLowerCase() == "a" && c.parentNode.removeChild(c)
        }
    }
}

function g(a) {
    a.removeListener();
    alert("Failed to load the image with the provided URL: '" + a.sender.data("cke-saved-src") + "'");
    a.listenerData.remove()
}

function i(a, b, c, d) {
    if (a.$.naturalWidth === 0)
        window.setTimeout(function () {
            i(a, b, c, d)
        }, 50);
    else {
        a.replace(c);
        a.setAttribute("width",
        a.$.width);
        a.setAttribute("height", a.$.height);
        b.fire("simpleuploads.finishedUpload", { name: d, element: a });
        b.fire("updateSnapshot")
    }
}

function k(a) {
    a = a.data.$.dataTransfer;
    return !a || !a.types ? false : a.types.contains && a.types.contains("Files") && !a.types.contains("text/html") || a.types.indexOf && a.types.indexOf("Files") != -1 ? true : false
}

var q = {
    elements: {
        $: function (a) {
            a = a.attributes;
            if ((a && a["class"]) == "SimpleUploadsTmpWrapper")
                return false;
        }
    }
},t, A, x, y, C, F, G;

CKEDITOR.plugins.add("simpleuploads", {
    onLoad: function () {
        CKEDITOR.addCss && CKEDITOR.addCss(d(CKEDITOR.config));
        var a = CKEDITOR.document.getHead().append("style");
        a.setAttribute("type", "text/css");
        var b = ".SimpleUploadsOverContainer {" + (CKEDITOR.config.simpleuploads_containerover || "box-shadow: 0 0 10px 1px #99DD99 !important;") + "} .SimpleUploadsOverDialog {" + (CKEDITOR.config.simpleuploads_dialogover ||
        "box-shadow: 0 0 10px 4px #999999 inset !important;") + "} .SimpleUploadsOverCover {" + (CKEDITOR.config.simpleuploads_coverover || "box-shadow: 0 0 10px 4px #99DD99 !important;") + "} ", b = b + ".cke_throbber {margin: 0 auto; width: 100px;} .cke_throbber div {float: left; width: 8px; height: 9px; margin-left: 2px; margin-right: 2px; font-size: 1px;} .cke_throbber .cke_throbber_1 {background-color: #737357;} .cke_throbber .cke_throbber_2 {background-color: #8f8f73;} .cke_throbber .cke_throbber_3 {background-color: #abab8f;} .cke_throbber .cke_throbber_4 {background-color: #c7c7ab;} .cke_throbber .cke_throbber_5 {background-color: #e3e3c7;} .uploadRect {display: inline-block;height: 11px;vertical-align: middle;width: 50px;} .uploadRect span {background-color: #999;display: inline-block;height: 100%;vertical-align: top;} .uploadName {display: inline-block;max-width: 180px;overflow: hidden;text-overflow: ellipsis;vertical-align: top;white-space: pre;} .uploadText {font-size:80%;} .cke_throbberMain a {cursor: pointer; font-size: 14px; font-weight:bold; padding: 4px 5px;position: absolute;right:0; text-decoration:none; top: -2px;} .cke_throbberMain {background-color: #FFF; border:1px solid #e5e5e5; padding:4px 14px 4px 4px; min-width:250px; position:absolute;}";
        CKEDITOR.env.ie && CKEDITOR.env.version < 11 ? a.$.styleSheet.cssText = b : a.$.innerHTML = b
    }, init: function (a) {
        var e = a.config;
        if (typeof e.simpleuploads_imageExtensions == "undefined")
            e.simpleuploads_imageExtensions = "jpe?g|gif|png";
        a.addCss && a.addCss(d(e));
        if (!e.filebrowserImageUploadUrl)
            e.filebrowserImageUploadUrl = e.filebrowserUploadUrl;
        if (!e.filebrowserUploadUrl && !e.filebrowserImageUploadUrl) {
            if (window.console && console.log) {
                console.log("The editor is missing the 'config.filebrowserUploadUrl' entry to know the url that will handle uploaded files.\r\nIt should handle the posted file as shown in Example 3: http://docs.cksource.com/CKEditor_3.x/Developers_Guide/File_Browser_%28Uploader%29/Custom_File_Browser#Example_3\r\nMore info: http://alfonsoml.blogspot.com/2009/12/using-your-own-uploader-in-ckeditor.html");
                console[console.warn ? "warn" : "log"]("The 'SimpleUploads' plugin now is disabled.")
            }
        } else {
            a.addFeature && a.addFeature({ allowedContent: "img[!src,width,height];a[!href];span[id](SimpleUploadsTmpWrapper);" });
            CKEDITOR.dialog.prototype.showThrobber = function () {
                if (!this.throbber)
                    this.throbber = {
                        update: function () {
                            for (var a = this.throbberParent.$, b = a.childNodes, a = a.lastChild.className, c = b.length - 1; c > 0; c--)
                                b[c].className = b[c - 1].className;
                            b[0].className = a
                        }, create: function (a) {
                            if (!this.throbberCover) {
                                var b = CKEDITOR.dom.element.createFromHtml('<div style="background-color:rgba(255,255,255,0.95);width:100%;height:100%;top:0;left:0; position:absolute; visibility:none;z-index:100;"></div>');
                                a.parts.close.setStyle("z-index", 101);
                                if (CKEDITOR.env.ie && CKEDITOR.env.version < 9) {
                                    b.setStyle("zoom", 1);
                                    b.setStyle("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#EEFFFFFF,endColorstr=#EEFFFFFF)")
                                }
                                b.appendTo(a.parts.dialog);
                                this.throbberCover = b;
                                var c = new CKEDITOR.dom.element("div");
                                this.mainThrobber = c;
                                var d = new CKEDITOR.dom.element("div");
                                this.throbberParent = d;
                                var e = new CKEDITOR.dom.element("div");
                                this.throbberTitle = e;
                                b.append(c).addClass("cke_throbberMain");
                                c.append(e).addClass("cke_throbberTitle");
                                c.append(d).addClass("cke_throbber");
                                for (b = [1, 2, 3, 4, 5, 4, 3, 2]; b.length > 0;)
                                    d.append(new CKEDITOR.dom.element("div")).addClass("cke_throbber_" + b.shift());
                                this.center();
                                a.on("hide", this.hide, this)
                            }
                        }, center: function () {
                            var a = this.mainThrobber, b = this.throbberCover, c = (b.$.offsetHeight - a.$.offsetHeight) / 2;
                            a.setStyle("left", ((b.$.offsetWidth - a.$.offsetWidth) / 2).toFixed() + "px");
                            a.setStyle("top", c.toFixed() + "px")
                        }, show: function () {
                            this.create(CKEDITOR.dialog.getCurrent());
                            this.throbberCover.setStyle("visibility",
                            "");
                            this.timer = setInterval(CKEDITOR.tools.bind(this.update, this), 100)
                        }, hide: function () {
                            if (this.timer) {
                                clearInterval(this.timer);
                                this.timer = null
                            }
                            this.throbberCover && this.throbberCover.setStyle("visibility", "hidden")
                        }
                    };
                this.throbber.show()
            };
            a.on("simpleuploads.startUpload", function (a) {
                var b = a.editor, c = b.config, d = a.data && a.data.file;
                if (c.simpleuploads_maxFileSize && d && d.size && d.size > c.simpleuploads_maxFileSize) {
                    alert(b.lang.simpleuploads.fileTooBig);
                    a.cancel()
                }
                d = a.data.name;
                if (c.simpleuploads_invalidExtensions &&
                RegExp(".(?:" + c.simpleuploads_invalidExtensions + ")$", "i").test(d)) {
                    alert(b.lang.simpleuploads.invalidExtension);
                    a.cancel()
                }
                if (c.simpleuploads_acceptedExtensions && !RegExp(".(?:" + c.simpleuploads_acceptedExtensions + ")$", "i").test(d)) {
                    alert(b.lang.simpleuploads.nonAcceptedExtension.replace("%0", c.simpleuploads_acceptedExtensions));
                    a.cancel()
                }
            });
            a.on("simpleuploads.startUpload", function (a) {
                var b = a.data, c = a.editor;
                if (!b.image && !b.forceLink && CKEDITOR.plugins.simpleuploads.isImageExtension(c, b.name) && b.mode &&
                b.mode.type && c.hasListeners("simpleuploads.localImageReady")) {
                    a.cancel();
                    if (b.mode.type == "base64paste") {
                        var d = CKEDITOR.plugins.simpleuploads.getTimeStampId();
                        b.result = "<span id='" + d + "' class='SimpleUploadsTmpWrapper'>&nbsp</span>";
                        b.mode.id = d
                    }
                    var e = new Image;
                    e.onload = function () {
                        var d = CKEDITOR.tools.extend({}, b);
                        d.image = e;
                        typeof c.fire("simpleuploads.localImageReady", d) != "boolean" && CKEDITOR.plugins.simpleuploads.insertProcessedFile(a.editor, d)
                    };
                    e.src = typeof b.file == "string" ? b.file : URL.createObjectURL(b.file)
                }
            });
            if (e.simpleuploads_convertBmp)
                a.on("simpleuploads.localImageReady", c);
            if (e.simpleuploads_maximumDimensions)
                a.on("simpleuploads.localImageReady", f);
            a.on("simpleuploads.finishedUpload", function (b) {
                if (a.widgets && a.plugins.image2) {
                    b = b.data.element;
                    if (b.getName() == "img") {
                        var c = a.widgets.getByElement(b);
                        if (c) {
                            c.data.src = b.data("cke-saved-src");
                            c.data.width = b.$.width;
                            c.data.height = b.$.height
                        } else {
                            a.widgets.initOn(b, "image2");
                            a.widgets.initOn(b, "image")
                        }
                    }
                }
            });
            a.on("paste", function (b) {
                var c = b.data;
                if (c = c.html ||
                c.type && c.type == "html" && c.dataValue) {
                    if (CKEDITOR.env.webkit && c.indexOf("webkit-fake-url") > 0) {
                        alert("Sorry, the images pasted with Safari aren't usable");
                        window.open("https://bugs.webkit.org/show_bug.cgi?id=49141");
                        c = c.replace(/<img src="webkit-fake-url:.*?">/g, "")
                    }
                    c = c.replace(/<img(.*?) src="data:image\/.{3,4};base64,.*?"(.*?)>/g, function (b) {
                        if (!a.config.filebrowserImageUploadUrl)
                            return "";
                        var c = b.match(/"(data:image\/(.{3,4});base64,.*?)"/), d = c[1], c = c[2].toLowerCase(), e = CKEDITOR.plugins.simpleuploads.getTimeStampId();
                        if (d.length < 128)
                            return b;
                        c == "jpeg" && (c = "jpg");
                        var f = { context: "pastedimage", name: e + "." + c, id: e, forceLink: false, file: d, mode: { type: "base64paste" } };
                        if (!n(a, f))
                            return f.result;
                        var b = f.element, g = b.$.innerHTML;
                        b.$.innerHTML = "&nbsp;";
                        a.on("afterPaste", function (b) {
                            b.removeListener();
                            if (b = a.document.$.getElementById(e)) {
                                b.innerHTML = g;
                                s(a, f)
                            }
                        });
                        return b.getOuterHtml()
                    });
                    b.data.html ? b.data.html = c : b.data.dataValue = c
                }
            });
            var e = function (b) {
                if (a.mode == "wysiwyg") {
                    var c = a.document;
                    a.editable && (c = a.editable());
                    if (c.$.querySelector(".SimpleUploadsTmpWrapper")) {
                        b =
                        b.name.substr(5).toLowerCase();
                        b == "redo" && a.getCommand(b).state == CKEDITOR.TRISTATE_DISABLED && (b = "undo");
                        a.execCommand(b)
                    }
                }
            }, g = a.getCommand("undo");
            g && g.on("afterUndo", e);
            (g = a.getCommand("redo")) && a.getCommand("redo").on("afterRedo", e);
            a.on("afterUndo", e);
            a.on("afterRedo", e);
            if (typeof FormData != "undefined") {
                var h, i, j, l = -1, m, o, p, q = -1, r, t, v, x = function () {
                    var b = CKEDITOR.dialog.getCurrent();
                    b ? b.parts.title.getParent().removeClass("SimpleUploadsOverCover") : a.container.removeClass("SimpleUploadsOverContainer")
                };
                a.on("destroy", function () {
                    CKEDITOR.removeListener("simpleuploads.droppedFile", x);
                    CKEDITOR.document.removeListener("dragenter", A);
                    CKEDITOR.document.removeListener("dragleave", C);
                    y()
                });
                var y = function () {
                    if (h && h.removeListener) {
                        j.removeListener("paste", u);
                        h.removeListener("dragenter", G);
                        h.removeListener("dragleave", W);
                        h.removeListener("dragover", X);
                        h.removeListener("drop", F);
                        i = h = j = null
                    }
                };
                CKEDITOR.on("simpleuploads.droppedFile", x);
                var A = function (b) {
                    if (q == -1 && k(b)) {
                        if (b = CKEDITOR.dialog.getCurrent()) {
                            if (!b.handleFileDrop)
                                return;
                            b.parts.title.getParent().addClass("SimpleUploadsOverCover")
                        } else
                            a.readOnly || a.container.addClass("SimpleUploadsOverContainer");
                        r = q = 0;
                        t = CKEDITOR.document.$.body.parentNode.clientWidth;
                        v = CKEDITOR.document.$.body.parentNode.clientHeight
                    }
                }, C = function (a) {
                    if (q != -1) {
                        a = a.data.$;
                        if (a.clientX <= q || a.clientY <= r || a.clientX >= t || a.clientY >= v) {
                            x();
                            q = -1
                        }
                    }
                };
                CKEDITOR.document.on("dragenter", A);
                CKEDITOR.document.on("dragleave", C);
                var F = function (b) {
                    i.removeClass("SimpleUploadsOverEditor");
                    l = -1;
                    CKEDITOR.fire("simpleuploads.droppedFile");
                    q = -1;
                    if (a.readOnly) {
                        b.data.preventDefault();
                        return false
                    }
                    var c = b.data.$, d = c.dataTransfer;
                    if (d && d.files && d.files.length > 0) {
                        a.fire("saveSnapshot");
                        b.data.preventDefault();
                        for (var b = { ev: c, range: false, count: d.files.length, rangeParent: c.rangeParent, rangeOffset: c.rangeOffset }, e = 0; e < d.files.length; e++) {
                            var f = d.files[e], g = CKEDITOR.tools.getNextId();
                            CKEDITOR.plugins.simpleuploads.insertDroppedFile(a, { context: c, name: f.name, file: f, forceLink: c.shiftKey, id: g, mode: { type: "droppedFile", dropLocation: b } })
                        }
                    }
                }, G = function (b) {
                    if (l ==
                    -1 && k(b)) {
                        a.readOnly || i.addClass("SimpleUploadsOverEditor");
                        b = i.$.getBoundingClientRect();
                        l = b.left;
                        m = b.top;
                        o = l + i.$.clientWidth;
                        p = m + i.$.clientHeight
                    }
                }, W = function (a) {
                    if (l != -1) {
                        a = a.data.$;
                        if (a.clientX <= l || a.clientY <= m || a.clientX >= o || a.clientY >= p) {
                            i.removeClass("SimpleUploadsOverEditor");
                            l = -1
                        }
                    }
                }, X = function (b) {
                    if (l != -1) {
                        if (a.readOnly) {
                            b.data.$.dataTransfer.dropEffect = "none";
                            b.data.preventDefault();
                            return false
                        }
                        b.data.$.dataTransfer.dropEffect = "copy";
                        CKEDITOR.env.gecko || b.data.preventDefault()
                    }
                };
                a.on("contentDom",
                function () {
                    h = a.document;
                    i = h.getBody().getParent();
                    if (a.elementMode == 3)
                        i = h = a.element;
                    if (a.elementMode == 1 && "divarea" in a.plugins)
                        i = h = a.editable();
                    j = a.editable ? a.editable() : h;
                    if (CKEDITOR.env.ie && CKEDITOR.env.version >= 11 && a.config.forcePasteAsPlainText && a.editable().isInline())
                        j.attachListener(j, "beforepaste", function () {
                            a.document.on("paste", function (a) {
                                a.removeListener();
                                u(a)
                            }, null, { editor: a })
                        });
                    else
                        j.on("paste", u, null, { editor: a }, 8);
                    h.on("dragenter", G);
                    h.on("dragleave", W);
                    if (!CKEDITOR.env.gecko)
                        h.on("dragover",
                        X);
                    h.on("drop", F)
                });
                a.on("contentDomUnload", y);
                a.plugins.fileDropHandler = {
                    addTarget: function (b, c) {
                        b.on("dragenter", function (a) {
                            if (l == -1 && k(a)) {
                                b.addClass("SimpleUploadsOverDialog");
                                a = b.$.getBoundingClientRect();
                                l = a.left;
                                m = a.top;
                                o = l + b.$.clientWidth;
                                p = m + b.$.clientHeight
                            }
                        });
                        b.on("dragleave", function (a) {
                            if (l != -1) {
                                a = a.data.$;
                                if (a.clientX <= l || a.clientY <= m || a.clientX >= o || a.clientY >= p) {
                                    b.removeClass("SimpleUploadsOverDialog");
                                    l = -1
                                }
                            }
                        });
                        b.on("dragover", function (a) {
                            if (l != -1) {
                                a.data.$.dataTransfer.dropEffect =
                                "copy";
                                a.data.preventDefault()
                            }
                        });
                        b.on("drop", function (d) {
                            b.removeClass("SimpleUploadsOverDialog");
                            l = -1;
                            CKEDITOR.fire("simpleuploads.droppedFile");
                            q = -1;
                            var e = d.data.$, f = e.dataTransfer;
                            if (f && f.files && f.files.length > 0) {
                                d.data.preventDefault();
                                for (d = 0; d < 1; d++) {
                                    var g = f.files[d], g = { context: e, name: g.name, file: g, id: CKEDITOR.tools.getNextId(), forceLink: false, callback: c, mode: { type: "callback" } };
                                    CKEDITOR.plugins.simpleuploads.processFileWithCallback(a, g)
                                }
                            }
                        })
                    }
                }
            }
        }
    }, afterInit: function (a) {
        (a = (a = a.dataProcessor) &&
        a.htmlFilter) && a.addRules(q, { applyToAll: true })
    }
});

CKEDITOR.plugins.simpleuploads = {
    getTimeStampId: function () {
        var a = 0;
        return function () {
            a++;
            return (new Date).toISOString().replace(/\..*/, "").replace(/\D/g, "_") + a
        }
    }(), isImageExtension: function (a, b) {
        return !a.config.simpleuploads_imageExtensions ? false : RegExp(".(?:" + a.config.simpleuploads_imageExtensions + ")$", "i").test(b)
    }, insertProcessedFile: function (a, b) {
        b.element = null;
        b.id = this.getTimeStampId();
        switch (b.mode.type) {
            case "selectedFile":
                this.insertSelectedFile(a,
                b);
                break;
            case "pastedFile":
                this.insertPastedFile(a, b);
                break;
            case "callback":
                this.processFileWithCallback(a, b);
                break;
            case "droppedFile":
                this.insertDroppedFile(a, b);
                break;
            case "base64paste":
                this.insertBase64File(a, b);
                break;
            default:
                alert("Error, no valid type", b.mode)
        }
    }, insertSelectedFile: function (a, b) {
        var c = b.mode, d = c.i, e = c.count;
        if (n(a, b))
            if (c = b.element) {
                if (e == 1) {
                    var f = a.getSelection(), e = f.getSelectedElement(), g;
                    if (e && e.getName() == "img" && c.getName() == "span")
                        g = e.$;
                    if (c.getName() == "a") {
                        var h = e, i = f.getRanges(),
                        f = i && i[0];
                        if (!h && i && i.length == 1) {
                            h = f.startContainer.$;
                            if (h.nodeType == document.TEXT_NODE)
                                h = h.parentNode
                        }
                        for (; h && h.nodeType == document.ELEMENT_NODE && h.nodeName.toLowerCase() != "a";)
                            h = h.parentNode;
                        h && (h.nodeName && h.nodeName.toLowerCase() == "a") && (g = h);
                        if (!g && f && (e || !f.collapsed)) {
                            g = new CKEDITOR.style({ element: "a", attributes: { href: "#" } });
                            g.type = CKEDITOR.STYLE_INLINE;
                            g.applyToRange(f);
                            h = f.startContainer.$;
                            if (h.nodeType == document.TEXT_NODE)
                                h = h.parentNode;
                            g = h
                        }
                    }
                    if (g) {
                        g.parentNode.replaceChild(c.$, g);
                        b.originalNode =
                        g;
                        a.fire("saveSnapshot");
                        return
                    }
                }
                d > 0 && c.getName() == "a" && a.insertHtml("&nbsp;");
                a.insertElement(c);
                s(a, b)
            }
    }, insertPastedFile: function (a, b) {
        if (n(a, b)) {
            var c = b.element;
            if (b.mode.dialog) {
                a.fire("updateSnapshot");
                a.insertElement(c);
                a.fire("updateSnapshot")
            } else {
                var d = function () {
                    if (a.getSelection().getRanges().length) {
                        a.fire("updateSnapshot");
                        a.insertElement(c);
                        a.fire("updateSnapshot");
                        s(a, b)
                    } else
                        window.setTimeout(d, 0)
                };
                window.setTimeout(d, 0)
            }
        }
    }, processFileWithCallback: function (a, b) {
        n(a, b)
    }, insertDroppedFile: function (a,
    b) {
        if (n(a, b)) {
            var c = b.element, d = b.mode.dropLocation, e = d.range, f = d.ev, g = d.count;
            e && c.getName() == "a" && (e.pasteHTML ? e.pasteHTML("&nbsp;") : e.insertNode(a.document.$.createTextNode(" ")));
            var h = f.target;
            if (!e) {
                var i = a.document.$;
                if (d.rangeParent) {
                    var f = d.rangeParent, j = d.rangeOffset, e = i.createRange();
                    e.setStart(f, j);
                    e.collapse(true)
                } else if (document.caretRangeFromPoint)
                    e = i.caretRangeFromPoint(f.clientX, f.clientY);
                else if (h.nodeName.toLowerCase() == "img") {
                    e = i.createRange();
                    e.selectNode(h)
                } else if (document.body.createTextRange) {
                    j =
                    i.body.createTextRange();
                    try {
                        j.moveToPoint(f.clientX, f.clientY);
                        e = j
                    } catch (k) {
                        e = i.createRange();
                        e.setStartAfter(i.body.lastChild);
                        e.collapse(true)
                    }
                }
                d.range = e
            }
            i = c.getName();
            d = false;
            if (g == 1) {
                if (h.nodeName.toLowerCase() == "img" && i == "span") {
                    h.parentNode.replaceChild(c.$, h);
                    b.originalNode = h;
                    d = true
                }
                if (i == "a") {
                    if (e.startContainer) {
                        g = e.startContainer;
                        g.nodeType == document.TEXT_NODE ? g = g.parentNode : e.startOffset < g.childNodes.length && (g = g.childNodes[e.startOffset])
                    } else
                        g = e.parentElement();
                    if (!g || h.nodeName.toLowerCase() ==
                    "img")
                        g = h;
                    for (h = g; h && h.nodeType == document.ELEMENT_NODE && h.nodeName.toLowerCase() != "a";)
                        h = h.parentNode;
                    if (h && h.nodeName && h.nodeName.toLowerCase() == "a") {
                        h.parentNode.replaceChild(c.$, h);
                        b.originalNode = h;
                        d = true
                    }
                    if (!d && g.nodeName.toLowerCase() == "img") {
                        h = g.ownerDocument.createElement("a");
                        h.href = "#";
                        g.parentNode.replaceChild(h, g);
                        h.appendChild(g);
                        h.parentNode.replaceChild(c.$, h);
                        b.originalNode = h;
                        d = true
                    }
                }
            }
            d || (e ? e.pasteHTML ? e.pasteHTML(c.$.outerHTML) : e.insertNode(c.$) : a.insertElement(c));
            s(a, b);
            a.fire("saveSnapshot")
        }
    },
    insertBase64File: function (a, b) {
        delete b.result;
        var c = a.document.getById(b.mode.id);
        if (n(a, b)) {
            a.getSelection().selectElement(c);
            a.insertElement(b.element);
            s(a, b)
        } else {
            c.remove();
            b.result && a.insertHTML(b.result)
        }
    }
};
