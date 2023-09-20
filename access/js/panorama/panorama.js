!function (v) {
    "use strict";

    v(function () {
        var e,
            o,
            n;
        
        0 < v(n = ".js-viewPanoramaDraggable").length && v(window).on("load", function () {
            v(n).closest(".viewPanorama").removeClass("is-loading"),
            v(n).each(function () {
                var e = v(this),
                    r = e.find(".viewArea"),
                    l = r.find(".image");
                e.append('<div class="navPrev"></div>\n').append('<div class="navNext"></div>\n');
                var d = e.find(".navPrev"),
                    c = e.find(".navNext"),
                    u = r.find("img").width(),
                    viwW = v(window).width(),
                    m = u / 2 - viwW / 2; //中央寄せの場合
										//m = 0; //左寄せ
                l.scrollLeft(m),
                function () {
                    var o = !1,
                        n = 0,
                        a = m,
                        t = m,
                        i = function (e) {
                            e <= 0
                                ? d.addClass("is-hidden")
                                : d.removeClass("is-hidden"),
                            u - viwW <= e
                                ? c.addClass("is-hidden")
                                : c.removeClass("is-hidden")
                        };
                    Modernizr.touch || (l.on("mousedown", function (e) {
                        o = !0,
                        r.addClass("is-grabbing"),
                        n = e.clientX
                    }), l.on("mouseup", function (e) {
                        o = !1,
                        r.removeClass("is-grabbing"),
                        t = t < 0
                            ? 0
                            : t,
                        t = u - viwW < t
                            ? u - viwW
                            : t,
                        a = t
                    }), l.on("mousemove", function (e) {
                        o && (t = a - (e.clientX - n), l.scrollLeft(t), i(t))
                    }));
                    var s,
                        e = function (o) {
                            o.on("mouseenter", function () {
                                var e = o.hasClass("navPrev")
                                    ? -1
                                    : 1;
                                s = setInterval(function () {
                                    a += 3 * e,
                                    l.scrollLeft(a),
                                    i(a)
                                }, 16)
                            }).on("mouseleave", function () {
                                clearInterval(s),
                                a = a < 0
                                    ? 0
                                    : a,
                                a = u - viwW < a
                                    ? u - viwW
                                    : a
                            })
                        };
                    e(d),
                    e(c)
                }()
            })
        })
    })
		$(window).on('load', function(){
	var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
	$(".js-viewPanoramaDraggable").on(_touch,function() {
		$(".viewPanoramaWrap .ico_swipe").stop().fadeOut(500);
	});
	$(".js-viewPanoramaDraggable").bind('touchend', function() {
		$(".viewPanoramaWrap .ico_swipe").stop().fadeOut(500);
	});
});
}(jQuery);




