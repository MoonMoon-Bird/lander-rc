function setCookie(name, value) //cookies設置
{
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

function getCookie(Name) //cookies讀取
{
    var search = Name + "="
    //console.log(search);
    
    if (document.cookie.length > 0) {
        
        offset = document.cookie.indexOf(search)
        
        if (offset != -1) {
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            //console.log(unescape(document.cookie.substring(offset+search.length, end)));
            return unescape(document.cookie.substring(offset+search.length, end))
        } else return ""
    }
}
function getParameter(paramName) {
    var searchString = window.location.search.substring(1),
        i, val, params = searchString.split("&");
  
    for (i=0;i<params.length;i++) {
      val = params[i].split("=");
      if (val[0] == paramName) {
        return val[1];
      }
    }
    return null;
  } 
document.addEventListener("DOMContentLoaded", () => {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "visitcode");
    input.setAttribute("id", "visitcode");

    //append to form element that you want .
    $("form").each(function (i) {       
        $(this).append(input);
    });

    var scripts = document.getElementsByTagName('script');
    var p = {
        kindheadid:0,
    };
    for (var i = 0; i < scripts.length; i++) {
        var src=scripts[i].outerHTML;
        src=src.substring(src.indexOf('"'),src.lastIndexOf('"'));
        src=src.replace("&amp;","&");
        
        
        var server=src.substring(src.indexOf('src="')+5,src.lastIndexOf('api'));
       // console.log("server:"+server);

        if (src.indexOf('visit')>-1){
        //    console.log(src);
            var pa =src.split("?").pop().split("&");
            for(var j=0; j<pa.length; j++) {
                var kv = pa[j].split("=");
                p[kv[0]] = kv[1];
            }
            break;
        }
        
    }
    //console.log(p);
    
    
    var url1=window.top.location.href;
    var utm_source=getParameter('utm_source');
    
    url1=url1.split('?')[0]+"?utm_source="+utm_source;
    var visitcode=getCookie('visitcode');
  //console.log(getCookie('url'));
    if (visitcode=="" || getCookie('url')!=url1){
        let vm = this;
        $.post(server+'api/visitajax',
                { 
                    url:encodeURI(window.top.location.href),
                    kindheadid:p['kindheadid'],
                }
        ).done(function( obj ) {
            if (obj.resultcode == 0) {                
                visitcode=obj.visitcode;
                jQuery("input[name='visitcode']").val(visitcode);
                setCookie('visitcode',visitcode, {expires: 30});
                setCookie('url', url1, {expires: 30});
            }
            console.log(obj);
        });
        console.log('go');
       
    }
    //console.log("visitcode2:"+visitcode);
    jQuery("input[name='visitcode']").val(visitcode);
});        