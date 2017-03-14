/*TMODJS:{"version":1,"md5":"b787b047f98846e683d6b97063c6eaf4"}*/
template('tpl/ticket/ticket_details',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,img=$data.img,$index=$data.$index,$escape=$utils.$escape,i=$data.i,item=$data.item,$string=$utils.$string,$out='';$out+='<div class="mui-content"> <div id="slider" class="mui-slider"> <div class="mui-slider-group"> ';
$each(data.product.Imgs,function(img,$index){
$out+=' <div class="mui-slider-item"> <a href="#"> <img src="';
$out+=$escape(img);
$out+='" height="220"> </a> </div> ';
});
$out+=' </div> <div class="mui-slider-indicator"> ';
$each(data.product.Imgs,function(img,i){
$out+=' <div class="mui-indicator ';
if(i==0){
$out+=' mui-active ';
}
$out+='"></div> ';
});
$out+=' </div> </div>  <div class="cake_details_title mui-row bg_white"> <div class="mui-col-xs-12"> <h4 class="color_ff781e">';
$out+=$escape(data.jingqu.SightName);
$out+='</h4> <div class="ticket_color">类 型：<span>';
$out+=$escape(data.jingqu.SightBusinessCategory);
$out+='</span></div> <div class="ticket_color">级 别：<span>';
$out+=$escape(data.jingqu.SupplierLevel);
$out+='</span></div> <div class="ticket_color">地 址：<span>';
$out+=$escape(data.jingqu.SightAddress);
$out+='</span></div> </div> </div>  <ul class="mui-table-view margin_top_10" id="tab_a"> ';
$each(data.product,function(item,i){
$out+=' ';
if(i !='Imgs'){
$out+=' <li class="mui-table-view-cell ticket_item"> <a href="javascript:;" class="mui-navigate-right mui-row"> <div class="ticket_kind mui-col-xs-8 mui-ellipsis">';
$out+=$escape(item.ProductName);
$out+='</div> <div class="mui-col-xs-4"><span class="color_2fd0b5 mui-pull-right ticket_kind_price">';
$out+=$escape(item.SellPrice);
$out+='点</span></div> </a> </li> ';
}
$out+=' ';
});
$out+=' </ul>  <div class="ticket_details_box" id="tab_b"> ';
$each(data.product,function(item,i){
$out+=' ';
if(i!='Imgs'){
$out+=' <div class="ticket_details hide"> <div class="ticket_title"> <h4 class="mui-text-center color_ff781e">景点详情</h4> <div><span style="color: #666;font-size: 12px;">';
$out+=$escape(item.ProductName);
$out+='</span> <span class="color_2fd0b5 mui-pull-right">售价：';
$out+=$escape(item.SellPrice);
$out+='点</span></div> </div> <div class="ticket_scroll">';
$out+=$string(item.FeeInclude);
$out+='</div> <div class="ticket_btn href_click" data-href = "./ticket_submit.html?id=';
$out+=$escape(item.KeyId);
$out+='">立即购买</div> </div> ';
}
$out+=' ';
});
$out+=' </div> </div> ';
return new String($out);
});