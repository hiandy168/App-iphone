/*TMODJS:{"version":2,"md5":"ca0df0219e6f8587c8f8dcbe31c93194"}*/
template('movie_times/movie_order_detail','<!doctype html> <html> <head> <meta charset="UTF-8"> <title></title> <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" /> <link href="../css/mui.min.css" rel="stylesheet" /> <link rel="stylesheet" href="../css/public.css" /> <style type="text/css"> .mui-input-row label{padding:0;} </style> </head> <body> <header class="mui-bar mui-bar-nav"> <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> <h1 class="mui-title">确认支付</h1> </header> <div id="movie_order_detail" class="mui-content"> </div> <script src="../js/connection.js"></script> <script src="../js/jquery-1.9.1.min.js"></script> <script src="../js/jqueryExtend.js"></script> <script src="../js/template.js"></script> <script src="../js/mui.min.js"></script> <script src="../js/ali_wx_pay.js"></script> <script type="text/javascript"> var orderid=jQuery.getUrlParam(\'orderid\'); jQuery.ajaxJsonp(api_url+\'cinema_times_order.php?act=payinfoMovie\',{id:orderid},function(result){ // console.log(result); if(result.state==\'true\') { document.getElementById(\'movie_order_detail\').innerHTML = template(\'movie_times/movie_order_detail\', result.data); // 支付倒计时 countDown(result.data.end_paytime, \'times\'); }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); } }); function countDown(time, htmlId){ var end_time = new Date(time).getTime(),//月份是实际月份-1 sys_second = (end_time - new Date().getTime()) / 1000; var timer = setInterval(function(){ if (sys_second > 1) { //sys_second -= 0.1; sys_second -= 1; var day = Math.floor((sys_second / 3600) / 24); var hour = Math.floor((sys_second / 3600) % 24); var minute = Math.floor((sys_second / 60) % 60); var second = Math.floor(sys_second % 60); //var msecond = Math.floor(sys_second * 10) % 10; hour = hour < 10 ? "0" + hour : hour;//计算小时 minute = minute < 10 ? "0" + minute : minute;//计算分 second = second < 10 ? "0" + second : second;// 计算秒 var time = (minute ? minute + \'分\' : \'\') + second + \'秒\' document.getElementById(htmlId).innerHTML = (minute ? minute + \'分\' : \'\') + second + \'秒\'; } else { clearInterval(timer); delOrder();//未在规定时间内完成支付删除订单 } }, 1000); } function delOrder(){ jQuery.ajaxJsonp(api_url+\'cinema_times_order.php\', {act:\'delorder\', \'order_id\':orderid}, function (result){ mui.alert(\'抱歉，您未在规定时间内完成支付，该订单已删除！\',function(){ jQuery.jumpTo("/movie/movie.html"); }); }); } /* 差额支付 */ mui("#movie_order_detail").on(\'tap\',\'#act-weixin-pays\', function(){ payType = jQuery("input[type=\'radio\']:checked").val(); if(payType == undefined){ mui.alert(\'请选择支付方式\'); return false; } /* 唤起支付操作*/ APPPAY.setoptions({ alipayServer :\'http://www.juyoufuli.com/mobile/payment/alipay/alipay.php?oid=\'+orderid, wxpayServer :\'http://www.juyoufuli.com/mobile/payment/wxpay/wxpay.php?oid=\'+orderid, payType : payType, data : { order_id : orderid }, successEvent : function(result,data){ jQuery.ajaxJsonp(api_url+\'cinema_times_order.php?act=doneMovie\',{order_id:data.order_id, isTimes:1}, function( results ){ if(results.state==\'true\') { mui.alert(\'支付成功\',function(){ jQuery.jumpTo("../order/order_cinema.html"); }); }else if(results.state==\'false\'){ jQuery.errorJudge(results.data,results.message,function(){ jQuery.jumpTo("/order/order_cinema.html"); }); } },true); }, errorEvent : function(error,data){ mui.alert(\'支付失败:\'+error.code); } }); APPPAY.requestPay(); }); /* 支付操作 */ var on_pay=false;//支付状态 mui(\'#movie_order_detail\').on(\'tap\',\'#act-pays\',function(){ var password = jQuery(\'#password\').val(); var orderid = jQuery(\'#orderid\').val(); if(jQuery.isEmptyObject(password)){ mui.alert(\'密码不能为空\'); return false; } if(jQuery.isEmptyObject(orderid)){ mui.alert(\'这不是一个有效的订单\'); return false; } if(on_pay){ return false; } on_pay=true; jQuery.ajaxJsonp(api_url+\'cinema_times_order.php?act=doneMovie\',{order_id:orderid, password:password}, function( result ){ // console.log(result); if(result.state==\'true\') { mui.alert(\'支付成功\',function(){ on_pay=false; jQuery.jumpTo("../order/order_cinema.html"); }); }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); on_pay=false; } },true); }); mui.init() </script> </body> </html>');