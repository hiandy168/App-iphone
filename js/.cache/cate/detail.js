/*TMODJS:{"version":26,"md5":"2df5007c2a054f7fd64bda8d4984a5a9"}*/
template('cate/detail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,data=$data.data,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,$out='';$out+=' <nav class="mui-bar mui-bar-tab mui-row"> <div class="mui-col-xs-5"> <a class="mui-tab-item border_right_ddd jump-home" href="#"> <span class="mui-icon mui-icon-home"></span> <span class="mui-tab-label">首页</span> </a> <a class="mui-tab-item border_right_ddd jump-cart" href="#"> <span class="mui-icon iconfont icon-gouwuche"></span> <span class="mui-tab-label">购物车</span> <span class="mui-badge mui-badge-danger buy_car_count">0</span> </a>  </div> <div class="mui-col-xs-7"> <a class="mui-tab-item footer_liji act-done" href="#"> <span class="mui-tab-label">立即结算</span> </a> <a class="mui-tab-item footer_jiaru act-cart" href="#"> <span class="mui-tab-label">加入购物车</span> </a> </div> </nav>  <div class="mui-content"> ';
if(data){
$out+=' <div id="slider" class="mui-slider"> <div class="mui-slider-group"> ';
$each(data.detail.commodityPicList,function($value,$index){
$out+=' <div class="mui-slider-item"> <a href="#"> <img src="';
$out+=$escape($value.picUrl);
$out+='"> </a> </div> ';
});
$out+=' </div> <div class="mui-slider-indicator"> ';
$each(data.detail.commodityPicList,function($value,$index){
$out+=' <div class="mui-indicator ';
if($index == 0){
$out+=' mui-active';
}
$out+='"></div> ';
});
$out+=' </div> </div>  <div class="cake_details_title mui-row bg_white"> <div class="mui-col-xs-8"> <h4>';
$out+=$escape(data.detail.commodityCname);
$out+='</h4> <span class="color_coral" id=\'price-total\'>--</span> </div> <div class="mui-col-xs-4 mui-text-right"> <div class="mui-numbox" data-numbox-min=\'1\'> <button class="mui-btn-numbox-minus" type="button">-</button> <input class="mui-input-numbox" type="number" name="number" id="number" /> <button class="mui-btn-numbox-plus" type="button">+</button> </div> </div> </div> <form action="javascript:ygAddToCart(';
$out+=$escape(data.detail.commodityCode);
$out+=')" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY" onsubmit="return false"> <div class="container xiangqing bg_white"> <div class="mui-row"> <div class="mui-col-xs-3"> <h5 class="mui-pull-right guige_1">规格：</h5> </div> <div class="mui-col-xs-9"> <label><h6 class="checked">';
$out+=$escape(data.detail.spec);
$out+='</h6></label> </div> </div> </div> <div class="bg_white color_2fd0b5 cake_tips"> <div style="color: red;">*温馨提示：图片仅供参考，请以实物为准！</div> </div> <div style="padding: 10px 10px;" class="bg_white">   <div id="item1" class="mui-control-content mui-active"> <ul class="mui-table-view"> <li class="mui-table-view-cell">名称：<p class="mui-pull-right" style="width: 60%;">';
$out+=$escape(data.detail.commodityCname);
$out+='</p></li> <li class="mui-table-view-cell">规格：<p class="mui-pull-right" style="width: 60%;">';
$out+=$escape(data.detail.spec);
$out+='</p></li> <li class="mui-table-view-cell">产地：<p class="mui-pull-right" style="width: 60%;">';
$out+=$escape(data.detail.placeOfOrigin);
$out+='</p></li> <li class="mui-table-view-cell">品牌：<p class="mui-pull-right" style="width: 60%;">易果生鲜</p></li> <li class="mui-table-view-cell">配送时间：<p class="mui-pull-right" style="width: 60%;">';
$out+=$string(data.detail.deliveryTips);
$out+='</p></li> <li class="mui-table-view-cell">所属分类：<p class="mui-pull-right" style="width: 60%;">';
$out+=$escape(data.detail.categoryName);
$out+='</p></li> </ul> </div>   <div id="item2" class="public_xiangqing_img"> ';
$out+=$string(data.detail.tabDetail);
$out+=' </div>  </div> ';
}
$out+=' </form> </div> <script> /*动态导入js*/ insertJs([\'../js/jquery.common.js\']); /*计算价格*/ function changePrice(){ var price = ';
$out+=$escape(data.detail.shop_price);
$out+='; var qty = jQuery(\'input[type=number]\').val(); var num = 1; if(qty){ num=qty; } $(\'#price-total\').html((price*num)+\'点\'); } changePrice(); /* 修改数量的时候，从新计算价格 */ mui(\'.mui-input-numbox\')[0].addEventListener(\'change\',function(event){ event.stopPropagation(); changePrice(); }); /* 加入购物车 */ mui(\'.act-cart\')[0].addEventListener(\'tap\',function(event){ ygAddToCart(\'';
$out+=$escape(data.detail.commodityCode);
$out+='\',\'';
$out+=$escape(data.code);
$out+='\'); /*更新购物车气泡数量*/ var buyCar_num = jQuery(\'.buy_car_count\').text(); buyCar_num++; /*加入购物车动画*/ var offset = $(".jump-cart").offset(); var offset1=$(\'.act-cart\').offset(); var endedY=$(window).height(); var img= $(\'.mui-slider-item:first-child a img\').attr(\'src\'); var flyer = $(\'<img class="flyer-img" src="\' + img + \'">\'); jQuery(\'.buy_car_count\').removeClass(\'rubberBand\'); flyer.fly({ start:{ left: offset1.left, top:endedY-40 }, end: { left: offset.left+20, top: endedY-40, width: 30, height: 30}, onEnd: function(){ this.destroy(); jQuery(\'.buy_car_count\').text(buyCar_num); jQuery(\'.buy_car_count\').addClass(\'rubberBand\'); } }); }); /* 跳转到购物车 */ mui(\'.jump-cart\')[0].addEventListener(\'tap\',function(){ mui.openWindow({ url:\'../flow/cart.html\', id:\'cart.html\' }); }); /* 跳转到首页 */ mui(\'.jump-home\')[0].addEventListener(\'tap\',function(){ mui.openWindow({ url:\'../index/jy_index.html\', id:\'/index/jy_index.html\' }); }); /* 立即购物 */ mui(\'.act-done\')[0].addEventListener(\'tap\',function(){ ygAddToCart(\'';
$out+=$escape(data.detail.commodityCode);
$out+='\',\'';
$out+=$escape(data.code);
$out+='\',5); }); /*购物车数量气泡*/ function buy_car_count(){ jQuery.ajaxJsonp(web_url+"/mobile/flow.php",{step:"ajax_cart_count"},function(data){ if(data.state==\'true\'){ jQuery(\'.buy_car_count\').text(data.data); } }) } buy_car_count(); </script> ';
return new String($out);
});