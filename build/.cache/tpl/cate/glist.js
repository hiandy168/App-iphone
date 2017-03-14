/*TMODJS:{"version":1,"md5":"88b330a764ddf8ce6caf12064096278e"}*/
template('tpl/cate/glist',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,list=$data.list,$index=$data.$index,$escape=$utils.$escape,$out='';$out+=' ';
$each(data.list,function(list,$index){
$out+=' <li class="mui-table-view-cell mui-media"> <a data-href="details.html?commodityCode=';
$out+=$escape(list.commodityCode);
$out+='" class="href_click"> <img class="mui-media-object mui-pull-left" src="';
$out+=$escape(list.goods_thumb);
$out+='"> <div class="mui-media-body"> <h4 class="goods_name mui-ellipsis">';
$out+=$escape(list.commodityCname);
$out+='</h4> <p class="goods_font mui-ellipsis-2">';
$out+=$escape(list.goods_brief);
$out+='</p> <div class="goods_price"><span>';
$out+=$escape(list.shop_price);
$out+='点</span>';
if(list.extension_code != "virtual_card"){
$out+='<span class="mui-icon iconfont icon-gouwuche" data-comm="';
$out+=$escape(list.commodityCode);
$out+='" data-code="';
$out+=$escape(data.cat.code);
$out+='"></span>';
}
$out+='</div> </div> </a> </li> ';
});
$out+=' ';
return new String($out);
});