$(function(){$("a[href^=#]").click(function(){var t=$(this).attr("href");return $("#"===t||""===t?"html":t).velocity("scroll",{duration:500,easing:"ease"}),!1})});