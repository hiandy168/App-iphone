/*TMODJS:{"version":1,"md5":"c9fdccbc944ee1776f717c2ed2f46afb"}*/
template('tpl/ticket/pullrefresh_sub',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,$escape=$utils.$escape,$out='';$each(data.data,function(item,$index){
$out+=' <li class="mui-table-view-cell href_click" data-href="./ticket_details.html?KeyId=';
$out+=$escape(item.SupplierKeyId);
$out+='"> <a href="javascript:;"> <img class="mui-pull-left ticket_img" src="';
$out+=$escape(item.Imgs);
$out+='" width="100" height="70"> <div class="ticket_msg"> <h4 class="mui-ellipsis">';
$out+=$escape(item.SightName);
$out+='</h4> <p class="mui-ellipsis">';
$out+=$escape(item.SightAddress);
$out+='</p> </div> </a> </li> ';
});
$out+=' ';
return new String($out);
});