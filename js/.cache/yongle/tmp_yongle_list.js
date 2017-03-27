/*TMODJS:{"version":31,"md5":"729f54ae72f433110b72a48e803634c2"}*/
template('yongle/tmp_yongle_list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,val=$data.val,k=$data.k,$escape=$utils.$escape,cateid=$data.cateid,$out='';$out+=' ';
$each(list,function(val,k){
$out+=' <li class="mui-table-view-cell mui-media"> <a href="javascript:;" class="href_click" data-href="./details.html?cateid=';
$out+=$escape(cateid);
$out+='&productid=';
$out+=$escape(val.product_id);
$out+='"> <img class="mui-media-object mui-pull-left yanchu_img" src="';
$out+=$escape(val.product_picture_small);
$out+='"> <div class="mui-media-body"> <h4 class="mui-ellipsis-2" style="line-height: 1.4;height: 40px;">';
$out+=$escape(val.play_name);
$out+='</h4> <p class="mui-ellipsis">';
if(val.start_time_ex !=''){
$out+=$escape(val.start_time_ex);
$out+=' - ';
}
$out+=$escape(val.end_time_ex);
$out+='</p> <p class="mui-ellipsis">';
$out+=$escape(val.play_address);
$out+='</p> </div> </a> </li> ';
});
$out+=' ';
return new String($out);
});