/*TMODJS:{"version":17,"md5":"3e8d9f25f0470b0a47f34d886d83f01a"}*/
template('order/tmp_order_piaoduoduo',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,data=$data.data,$each=$utils.$each,order=$data.order,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="mui-content"> ';
if(data.hasOrders==1){
$out+=' ';
$each(data,function(order,$index){
$out+=' <div class="mui-row order_cinemaBox margin_top_10"> <div class="mui-pull-left order_cinema_itemLeft"> <div class="order_ciema_number">订单号：<span class="order_sn">';
$out+=$escape(order.order_sn);
$out+='</span></div> <div class="order_ciema_details"><span>';
$out+=$escape(order.ProductName);
$out+='</span></div> <div class="order_ciema_details"><span>预约时间：';
$out+=$escape(order.TripDate);
$out+='</span></div> <div class="order_ciema_details"><span>付款时间：';
$out+=$escape(order.pay_time);
$out+='</span></div> </div> <div class="order_cinema_itemRight"> <div class="active"> <div>';
if(order.pay_time==""){
$out+='未付款';
}else{
$out+=$escape(order.Status);
}
$out+='</div> <div class="mui-text-center">';
if(order.again_sending){
$out+='<a data-order_sn="';
$out+=$escape(order.order_sn);
$out+='" class="again_sending" href="javascript:;">重新发码</a>';
}
$out+='</div> </div> </div> </div> ';
});
$out+=' ';
}else{
$out+=' <div class="mui-row order_cinemaBox margin_top_10"> 还没有订单哦亲 </div> ';
}
$out+=' </div>';
return new String($out);
});