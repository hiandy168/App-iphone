/*TMODJS:{"version":28,"md5":"10a17b2330de1277dea3c12016b138b5"}*/
template('cate/list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,data=$data.data,$each=$utils.$each,navigator=$data.navigator,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='  ';
if(data.navigator){
$out+=' <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"> <div class="mui-scroll pinpai_scroll"> ';
$each(data.navigator,function(navigator,$index){
$out+=' <a class="mui-control-item event ';
if(navigator.code == data.cat.code){
$out+='mui-active';
}
$out+='" data-code=\'';
$out+=$escape(navigator.code);
$out+='\'><span>';
$out+=$escape(navigator.name);
$out+='</span></a> ';
});
$out+=' </div> </div> ';
}
$out+=' ';
return new String($out);
});