/*TMODJS:{"version":1,"md5":"697fbb6e40ee50d7718bc99180b25415"}*/
template('tpl/ticket/confirmationPay',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,SellPrice=$data.SellPrice,order_sn=$data.order_sn,ProductName=$data.ProductName,TripDate=$data.TripDate,card_num=$data.card_num,MobileNumberToGetEticket=$data.MobileNumberToGetEticket,user_name=$data.user_name,$out='';$out+='<div class="mui-content"> <div class="mui-row mui-text-center color_ff781e remainder_time">订单已提交成功，共计';
$out+=$escape(SellPrice);
$out+='点</div> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left mui-col-xs-4">订单编号</h4><p class="mui-pull-right mui-text-right mui-col-xs-8 order_sn ">';
$out+=$escape(order_sn);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left mui-col-xs-4">产品名称</h4><p class="mui-pull-right mui-ellipsis mui-col-xs-8">';
$out+=$escape(ProductName);
$out+='12124464</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">预约时间</h4><p class="mui-pull-right">';
$out+=$escape(TripDate);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">身份证号</h4><p class="mui-pull-right">';
$out+=$escape(card_num);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">手机号</h4><p class="mui-pull-right">';
$out+=$escape(MobileNumberToGetEticket);
$out+='</p></li> </ul> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left">聚优卡号</h4><p class="mui-pull-right">';
$out+=$escape(user_name);
$out+='</p></li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>请输入密码</h4></label> <input type="password" name="password" id="password" class="mui-pull-right dianziquan_mima" /> </div> </li> </ul> <button id="act-pays" class="btn_next margin_top_15 margin_bottom_10">确认支付</button> </div>';
return new String($out);
});