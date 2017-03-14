/*TMODJS:{"version":23,"md5":"92cdeaf47a8bd55aad66d4c84031a693"}*/
template('yongle/tmp_yongle_detail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,product=$data.product,$each=$utils.$each,iteminfo=$data.iteminfo,time=$data.time,key=$data.key,val=$data.val,k=$data.k,$string=$utils.$string,$out='';$out+='<div id="yuanchu_detail" class="mui-content"> <ul class="mui-table-view yanchu_list yanchu_details_top" style="background-image: url(';
$out+=$escape(product.product_picture);
$out+=');"> <li class="mui-table-view-cell mui-media"> <img class="mui-media-object mui-pull-left yanchu_img" src="';
$out+=$escape(product.product_picture);
$out+='"> <div class="mui-media-body"> <h4 class="yanchu_top_name">';
$out+=$escape(product.play_name);
$out+='</h4> <p class="mui-ellipsis">';
if(product.start_time_ex != ''){
$out+=$escape(product.start_time_ex);
$out+='~';
}
$out+=$escape(product.product_end_time);
$out+='</p> <p class="mui-ellipsis">';
$out+=$escape(product.play_address);
$out+='</p> </div> </li> </ul> <div class="bg_white"> <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted"> <a class="mui-control-item mui-active" href="#item1">快速购票</a> <a class="mui-control-item" href="#item2">详情</a> </div> </div> <div id="item1" class="mui-control-content mui-active"> <form id="yanchu_form" name="yanchu_form" onclick="return false"> <ul class="mui-table-view"> <li class="mui-table-view-cell">选择时间</li> <li class="mui-table-view-cell"> <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted yanchu_time"> <div class="mui-scroll"> ';
$each(iteminfo,function(time,key){
$out+=' <a class="time mui-control-item ';
if(key==0){
$out+='mui-active';
}
$out+='" data-key="';
$out+=$escape(key);
$out+='"> <span>';
$out+=$escape(time.monthDay);
$out+='</span> <span>';
$out+=$escape(time.hours);
$out+=' ';
$out+=$escape(time.week);
$out+='</span> <input type="radio" name="time" id="time" ';
if(key==0){
$out+='checked';
}
$out+=' value="';
$out+=$escape(time.ticketTimeStr);
$out+='" style="display:none;"/> </a> ';
});
$out+=' </div> </div> </li> </ul> <ul class="mui-table-view margin_top_10"> <li class="mui-table-view-cell">选择价格</li> <li class="mui-table-view-cell"> <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"> <div id="yanchu_time" class="mui-scroll yanchu_time"> ';
$each(iteminfo,function(time,key){
$out+=' ';
if(key==0){
$out+=' ';
$each(time.price,function(val,k){
$out+=' <a class="mui-control-item ';
if(val.price_starus !=1 || val.price_num == 0){
$out+='stock-off';
}
$out+='"> <span>';
$out+=$escape(val.price_info);
$out+='点</span> <input type="radio" name="specid" value="';
$out+=$escape(val.product_playid);
$out+='" style="display:none;"/> <input type="radio" name="stock" value="';
if(val.price_num > 10 || val.price_num < 1){
$out+='10';
}else{
$out+=$escape(val.price_num);
}
$out+='" style="display:none;"/> </a> ';
});
$out+=' ';
}
$out+=' ';
});
$out+=' </div> </div> </li> </ul> <div class="mui-table-view margin_top_10"> <div class="mui-table-view-cell"> <span class="vertical_align_sub">购买数量</span> <div class="mui-numbox mui-pull-right" data-numbox-min="1"> <button class="mui-btn mui-btn-numbox-minus" type="button">-</button> <input id="number" class="mui-input-numbox" type="number" name="number"/> <button class="mui-btn mui-btn-numbox-plus" type="button">+</button> </div> </div> </div> <div class="color_ff781e" style="margin: 20px 5px;"> <p class="color_ff781e">温馨提示：</p>  <p class="color_ff781e">由于票务商品有有效时间及有限数量的特殊性质，一旦出票后，我们可能因客观原因，无法为您退、换票。（演出时间变更、内容变更除外）</p>  </div> <input type="hidden" name="id" value="';
$out+=$escape(product.product_id);
$out+='"/> </form> </div>  <div id="item2" class="mui-control-content public_xiangqing_img"> <p> ';
$out+=$string(product.product_profile);
$out+=' </p> <p></p> </div> </div>';
return new String($out);
});