/*TMODJS:{"version":54,"md5":"85a916d1d9b0f7d3e27d25eadeb22c78"}*/
template('movie_times/movie_order_detail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cinema_name=$data.cinema_name,movie_name=$data.movie_name,featuretime=$data.featuretime,language=$data.language,screen_type=$data.screen_type,hall_name=$data.hall_name,seat_info=$data.seat_info,mobile=$data.mobile,count=$data.count,diff_price=$data.diff_price,id=$data.id,user_name=$data.user_name,$out='';$out+='<div id="movie_order_detail"> <div class="mui-row mui-text-center color_ff781e remainder_time"> <span class="pay_time_icon"></span>支付剩余时间：<span id="times"></span> </div> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left">影院</h4><p class="mui-pull-right">';
$out+=$escape(cinema_name);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">电影</h4><p class="mui-pull-right">';
$out+=$escape(movie_name);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">场次</h4><p class="mui-pull-right">';
$out+=$escape(featuretime);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">版本</h4><p class="mui-pull-right">';
$out+=$escape(language);
$out+='/';
$out+=$escape(screen_type);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">厅号</h4><p class="mui-pull-right">';
$out+=$escape(hall_name);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">座位</h4><p class="mui-pull-right">';
$out+=$escape(seat_info);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">手机</h4><p class="mui-pull-right">';
$out+=$escape(mobile);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">次数</h4><p class="mui-pull-right">';
$out+=$escape(count);
$out+='</p></li> </ul> ';
if(diff_price > 0){
$out+=' <ul class="mui-table-view margin_top_15" style="background:none; position:static;"> <li class="mui-table-view-cell" style="padding:0;"><h4 class="mui-pull-left">&nbsp;&nbsp;&nbsp;完成此订单需要补差价 <font color=#2FD0B5>';
$out+=$escape(diff_price);
$out+='</font> 元</h4></li> </ul> <ul class="mui-table-view margin_top_15" > <li class="mui-table-view-cell" > <label for="weixin"> <div class="mui-input-row mui-radio mui-right"> <img src="../images/pay/weixin.png" width="30" height="30" style="float:left;"> <span style="display:inline-block; padding:5px 10px;">微信</span> <input name="payType" id="weixin" type="radio" checked="checked" value="wxpay"> </div> </label> </li> <li class="mui-table-view-cell" > <label for="alipay"> <div class="mui-input-row mui-radio mui-right"> <img src="../images/pay/alipay.png" width="30" height="30" style="float:left;"> <span style="display:inline-block; padding:5px 10px;">支付宝</span> <input name="payType" id="alipay" type="radio" checked="checked" value="alipay"> </div> </label> </li> </ul>  <p class="color_2fd0b5 mui-text-center margin_top_15">提示：请确认购票信息再支付，电影票一经售出不予退换</p> <input type="hidden" id="orderid" name="order_id" value="';
$out+=$escape(id);
$out+='"/> <button id="act-weixin-pays" class="btn_next margin_top_15 margin_bottom_10">确认支付</button> <input type="hidden" name="order_id" value="';
$out+=$escape(id);
$out+='"> </div> ';
}else{
$out+=' <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left">聚优卡号</h4><p class="mui-pull-right">';
$out+=$escape(user_name);
$out+='</p></li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>请输入密码</h4></label> <input type="password" name="password" id="password" class="mui-pull-right dianziquan_mima" /> </div> </li> </ul>  <p class="color_2fd0b5 mui-text-center margin_top_15">提示：请确认购票信息再支付，电影票一经售出不予退换</p> <input type="hidden" id="orderid" name="order_id" value="';
$out+=$escape(id);
$out+='"/> <button id="act-pays" class="btn_next margin_top_15 margin_bottom_10">确认支付</button> ';
}
$out+=' ';
return new String($out);
});