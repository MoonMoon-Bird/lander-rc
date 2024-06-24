$("#btnBgcs").on("click", function(e) {
    if (!selectStockName) {
        selectStockName = $("#gupiao").val();
    }
    onTanDivShow();
});

$("#btnBgcs2").on("click", function(e) {
    if (!selectStockName) {
        selectStockName = $("#gupiao2").val();
    }
    onTanDivShow();
});

$("#btnBgcs3").on("click", function(e) {
    if (!selectStockName) {
        selectStockName = $("#gupiao22").val();
    }
    onTanDivShow();
});

$("#btnBgcs5").on("click", function(e) {
    if (!selectStockName) {
        selectStockName = $("#gupiao").val();
    }
    onTanDivShow();
    console.log(selectStockName, "btnBgcs5");
});

// $('#btnBgcs,#btnBgcs2,#btnBgcs3,#btnBgcs5').on('click', function(e) {
//   onTanDivShow()
// });
$(".lingqu").on("click", function(e) {
    if (!selectStockName) {
        selectStockName = $("#gupiao2").val();
    }

    if (selectStockName) {
        $(".zhegai").attr("style", "display:block");
        $(".dialog4").attr("style", "display:block");
    } else {
        errowFrame();
    }
});
$(".circle4").on("click", function(e) {
    $(".dialog4").attr("style", "display:none");
    $(".zhegai").attr("style", "display:none");
});

function randomNumber() {
    setInterval(function() {
        $("#random").html(Math.floor(Math.random() * (100 + 1)));
    }, 2000);
}

randomNumber();

var timeout = null;
var pause = false;
var selectStockName = null;

// var s = [];
// //获取数据

numbers = [];
fetchNumberData();
function fetchNumberData() {
    return $.getJSON("/bbadmin/numbers/index").then(function(response) {
        numbers= response.data;
    });
}
//监听输入
function inputChange(e, inputId, tbodyId, tableId) {
    getRelationalStockList($(e).val(), inputId, tbodyId, tableId);
}

function inputChange2(e, inputId) {
    if ($(e).val().length == 0) {

    }
}
//获取相关的股票列表

var to_text = "";
var input_id;

function getRelationalStockList(val, inputId, tbodyId, tableId) {
    if (val) {
		val = val.replace('&','_');
        input_id = inputId;
        val = val.toUpperCase();
        var regex = eval("/^" + val + "/");
        selectStockName = null;
        //获取开头匹配的股票

        let list = s.filter((name) => {
            return regex.test(name.c) || regex.test(name.n);
        });


        //如果搜索结果只有一项并且完全匹配，默认选中
        if (list.length == 1 && (val == list[0].c || val == list[0].n)) {
            selectStockName = val;
        }

        //清除子节点
        $("#" + tbodyId)
            .children()
            .remove();
		//console.log(list);
        //重新添加子节点并给其绑定点击事件
        list.forEach((item) => {


            if (regex.test(item.n)){
                $("#" + tbodyId).append(
                    '<tr id=' + item.n + '  data-code=' + item.c + ' class="gets2" style="cursor:pointer;text-align:center;">' +
                    '<td>' + item.c.replace('_','&') + '</td>' +
                    '<td><span style="color: red;">' +
                    val.replace('_','&') +
                    "</span>" +
                    item.n.replace('_','&').substring(val.length) +
                    "</td></tr>"
                );
            } else{
                $("#" + tbodyId).append(
                    '<tr id=' + item.n + '  data-code=' + item.c + ' class="gets2" style="cursor:pointer;text-align:center;">' +
                    '<td><span style="color: red;">' + val.replace('_','&') +
                    "</span>" +
                    item.c.replace('_','&').substring(val.length) + '</td>' +
                    '<td>' +
                    item.n.replace('_','&') +
                    "</td></tr>"
                );
            }
            if(item.n)
			{
				$("#" + item.n).each(function() {
					$("#" + item.n).on("click", function(e) {
						selectStockName = e.currentTarget.id;
						//console.log(e.currentTarget.dataset.code);
						$("#" + inputId).val(selectStockName);
						$("#selectCode" ).val(e.currentTarget.dataset.code);
						$("#selectName" ).val(selectStockName);
						//$(".cc,#yuce,.cname,.tcn-s2").html(selectStockName);
						//$("#yuce_name").html(selectStockName);
						//$(".gCode").html("( " + item.c + " )");

					//    to_text = "Hello, I want to receive a report from " + item.n + " ( " + item.c + " )";

						to_text = "Hello, please help me analyze " + item.n + " (" + item.c + ") ";


						//https://zdq1.ink/x5E3Ll84?text=Hello, please help me analyze 20MICRONS  533022
						//https://api.whatsapp.com/send?phone=918439347675&text==Hello, please help me analyze 20MICRONS  533022

					  //  console.log(to_text);

						$("#" + tbodyId)
							.children()
							.remove();
						$("#" + tableId).css("display", "none");
					});
				});
			}
            
        });
    }
    if (val) {
        $("#" + tableId).css("display", "block");
    } else {
        $("#" + tableId).css("display", "none");
    }
}

//显示弹窗
function onTanDivShow() {



    if (selectStockName) {


        var regex = eval("/" + selectStockName + "/");
        var flag=0;
        s.filter((name) => {
            if(name.n==selectStockName){
                flag=1;
            }
        });
        
        if(flag==0){
            errowFrame();
            return false;
        }

        $(".cc,#yuce,.cname,.tcn-s2").html(selectStockName);
        pause = false;
        $(".discuss").html("Starting from event driven policy mode...");
        $(".charts").attr("style", "width:0%;transition: all 0.6s ease-out;");
        $("#SonContent0").attr("style", "display:block");
        timeout = setTimeout(() => {
            $(".charts").attr(
                "style",
                "width:25%;transition: all 0.6s ease-out;"
            );
            setTimeout(() => {
                $(".discuss").html("Calculating through AI...");
                $(".charts").attr(
                    "style",
                    "width:50%;transition: all 0.6s ease-out;"
                );
                setTimeout(() => {
                    $(".discuss").html("Confirming risk through VAR system...");
                    $(".charts").attr(
                        "style",
                        "width:75%;transition: all 0.6s ease-out;"
                    );
                    setTimeout(() => {
                        $(".discuss").html("Passing volume price trading model...");
                        $(".charts").attr(
                            "style",
                            "width:100%;transition: all 0.8s ease-out;"
                        );
                    }, 600);
                }, 600);
            }, 600);
        }, 0);
        timeout = setTimeout(() => {
            if (!pause) {
                $("#SonContent0").attr("style", "display:none");
                $(".cName").html(selectStockName);
                $(".zhegai").attr("style", "display:block");
                $(".dialog4").attr("style", "display:block");
            }
        }, 2400);
    } else {

        errowFrame();
    }
}

function gofun(show_ws) {

  //  var code=$("#selectCode").val();

  //  if (to_text.length <= 5) {
  //  to_text = "Hello, please help me analyze the stock name " + $("#" + input_id).val().toUpperCase()+"("+code+")";
  //  }
     //随机号 919572580692   918487819478

     var hao=['919572580692','918487819478'];


     //var element = hao[Math.floor((Math.random()*hao.length))];

    // var element = numbers[Math.round(Math.random())]['code'];
    console.log(numbers)
    fetchNumberData().then(res=>{
        var element = numbers[Math.floor(Math.random()) * numbers.length]['code'];
  window.location.href = show_ws +element+ "&text=" + to_text;
    });
    

    //var element = hao[Math.floor((Math.random()*hao.length))];


  
    //  window.location.href =  numbers.length]['code'];
    //  window.location.href =  element;
     console.log(to_text)
}

//关闭弹窗
function hideiframe() {
    pause = true;
    if (timeout) {
        timeout = null;
        clearTimeout(timeout);
    }
    $("#SonContent0").attr("style", "display:none");
    $(".zhegai").attr("style", "display:none");
    $(".charts").attr("style", "width:0px;");
    $(".discuss").html("Starting from event driven policy model...");
}

//错误弹窗
function errowFrame() {
    $(".error").css("display", "block");
    setTimeout(function() {
        $(".error").css("display", "none");
    }, 2000);
}

function getPlatForm() {
    var u = navigator.userAgent,
        p = "";
    var isAndroid = u.indexOf("ANDROID_AGENT_NATIVE") > -1;
    var isIos = u.indexOf("IOS_AGENT") > -1;
    return isAndroid ? "android" : isIos ? "ios" : "h5";
}

function methodPost(name, params) {
    console.log(
        JSON.stringify({
            name: name,
            parameter: params,
        })
    );
    var methodValue = window.AppJs.callMethod(
        JSON.stringify({
            name: name,
            parameter: params,
        })
    );
    return methodValue;
}