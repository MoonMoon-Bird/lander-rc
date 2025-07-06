(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var d = this || self,
        e = function(a, g) {
            a = a.split(".");
            var b = d;
            a[0] in b || typeof b.execScript == "undefined" || b.execScript("var " + a[0]);
            for (var c; a.length && (c = a.shift());) a.length || g === void 0 ? b = b[c] && b[c] !== Object.prototype[c] ? b[c] : b[c] = {} : b[c] = g
        };
    var f = function() {
        this.exit = this.h;
        this.close = this.close;
        this.delayCloseButton = this.g
    };
    f.prototype.h = function() {
        h("https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html", "_blank")
    };
    f.prototype.close = function() {
        window.console && window.console.log("Exit API: Close requested.")
    };
    f.prototype.g = function(a) {
        a = Math.min(a, 5);
        window.console && window.console.log("Exit API: Close Button will not appear for " + a + " seconds.")
    };
    var k = function() {
        this.onCTAClick = this.i
    };
    k.prototype.i = function() {
        h("https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html", "_blank")
    };
    var l = function() {
        this.openAppStore = this.j
    };
    l.prototype.j = function() {
        h("https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html", "_blank")
    };
    var h = window.open;
    window.open = function() {
        return h("https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html", "_blank")
    };
    if (!window.ExitApi) {
        var m = new f;
        e("ExitApi", m)
    }
    if (!window.FbPlayableAd) {
        var n = new k;
        e("FbPlayableAd", n)
    }
    if (!window.playableSDK) {
        var p = new l;
        e("playableSDK", p)
    };
}).call(this);