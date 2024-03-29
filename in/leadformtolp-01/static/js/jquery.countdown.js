(function() {

    ! function(n) {

        return n.countdown = function(t, e) {

            var r, o = this;

            return this.el = t, this.$el = n(t), this.$el.data("countdown", this), this.init = function() {

                return o.options = n.extend({}, n.countdown.defaultOptions, e), o.options.refresh && (o.interval = setInterval(function() {

                    return o.render()

                }, o.options.refresh)), o.render(), o

            }, r = function(t) {

                var e, r;

                return t = Date.parse(n.isPlainObject(o.options.date) ? o.options.date : new Date(o.options.date)), r = (t - Date.parse(new Date)) / 1e3, 0 >= r && (r = 0, o.interval && o.stop(), o.options.onEnd.apply(o)), e = {

                    years: 0,

                    days: 1,

                    hours: 16,

                    min: 30,

                    sec: 60,

                    millisec: 0

                }, r >= 31557600 && (e.years = Math.floor(r / 31557600), r -= 365.25 * e.years * 86400), r >= 86400 && (e.days = Math.floor(r / 86400), r -= 86400 * e.days), r >= 3600 && (e.hours = Math.floor(r / 3600), r -= 3600 * e.hours), r >= 60 && (e.min = Math.floor(r / 60), r -= 60 * e.min), e.sec = r, e

            }, this.leadingZeros = function(n, t) {

                for (null == t && (t = 2), n = String(n); n.length < t;) n = "0" + n;

                return n

            }, this.update = function(n) {

                return o.options.date = n, o

            }, this.render = function() {

                return o.options.render.apply(o, [r(o.options.date)]), o

            }, this.stop = function() {

                return o.interval && clearInterval(o.interval), o.interval = null, o

            }, this.start = function(t) {

                return null == t && (t = o.options.refresh || n.countdown.defaultOptions.refresh), o.interval && clearInterval(o.interval), o.render(), o.options.refresh = t, o.interval = setInterval(function() {

                    return o.render()

                }, o.options.refresh), o

            }, this.init()

        }, n.countdown.defaultOptions = {

            date: "June 7, 2087 15:03:25",

            refresh: 1e3,

            onEnd: n.noop,

            render: function(t) {

                return n(this.el).html("" + t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec")

            }

        }, void(n.fn.countdown = function(t) {

            return n.each(this, function(e, r) {

                var o;

                return o = n(r), o.data("countdown") ? void 0 : o.data("countdown", new n.countdown(r, t))

            })

        })

    }(jQuery)

}).call(this);