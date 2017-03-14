/*TMODJS:{"version":1,"md5":"26782768271c3650b84fbd76680f5b88"}*/
template('tpl/cate/list',function($data,$filename
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