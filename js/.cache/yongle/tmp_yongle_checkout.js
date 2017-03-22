/*TMODJS:{"version":21,"md5":"69d9fce2ef47960dac50b38ea295d9fc"}*/
template('yongle/tmp_yongle_checkout',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,yongle=$data.yongle,checkconsignee=$data.checkconsignee,consignee=$data.consignee,$out='';$out+='<nav class="mui-bar mui-bar-tab mui-row"> <div class="mui-col-xs-7"><a class="mui-tab-item">订单总额：<span class="color_2fd0b5">';
$out+=$escape(yongle.total);
$out+='</span>点</a></div> <div class="mui-col-xs-5"> <a id="order_submit" class="mui-tab-item footer_jiaru" href="#"><span class="mui-tab-label">提交订单</span></a> </div> </nav> <div class="mui-content">  <div class="mui-table-view margin_top_0"> <div class="mui-table-view-cell"> <a id="shipping" class="mui-navigate-right"> ';
if(checkconsignee){
$out+=' <h4>';
$out+=$escape(consignee.consignee);
$out+=' ';
$out+=$escape(consignee.mobile);
$out+='</h4> <p>';
$out+=$escape(consignee.country_cn);
$out+=$escape(consignee.province_cn);
$out+=$escape(consignee.address);
$out+='</p> ';
}else{
$out+=' <h4>请选择收货地址</h4> ';
}
$out+=' </a> </div> </div>  <ul class="mui-table-view yanchu_list yanchu_details_top"> <li class="mui-table-view-cell mui-media"> <img class="mui-media-object mui-pull-left yanchu_img" src="';
$out+=$escape(yongle.thumb);
$out+='"> <div class="mui-media-body"> <h4 class="yanchu_top_name">';
$out+=$escape(yongle.play_name);
$out+='</h4> <p class="mui-ellipsis">';
$out+=$escape(yongle.ticket_time);
$out+='</p> <p class="mui-ellipsis">';
$out+=$escape(yongle.play_address);
$out+='</p> </div> </li> </ul> <div class="mui-table-view yanchu_number margin_top_10"> <div class="mui-table-view-cell mui-row"> <div class="mui-col-xs-4"> <p>数量</p> <span class="font_style">';
$out+=$escape(yongle.number);
$out+='</span>张 </div> <div class="mui-col-xs-8"> <p>总价</p> <span class="color_2fd0b5 font_style">';
$out+=$escape(yongle.goods_amount);
$out+='</span>点 </div> </div> </div> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"> 支付方式<span class="mui-pull-right color_8f8f94">聚优卡支付</span> </li> <li class="mui-table-view-cell"> 配送方式<span class="mui-pull-right color_8f8f94">供货商物流</span> </li> <li class="mui-table-view-cell"> 运费合计<span class="mui-pull-right color_8f8f94">';
$out+=$escape(yongle.shipping_fee);
$out+='</span> </li> </ul> </div>';
return new String($out);
});