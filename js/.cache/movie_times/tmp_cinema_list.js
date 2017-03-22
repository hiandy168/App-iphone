/*TMODJS:{"version":53,"md5":"797f762d6b78d29c054d6bf9b29d6f3f"}*/
template('movie_times/tmp_cinema_list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,value=$data.value,key=$data.key,$escape=$utils.$escape,val=$data.val,k=$data.k,is_mate=$data.is_mate,is_brush=$data.is_brush,$out='';$out+='<ul class="mui-table-view mui-table-view-chevron"> ';
$each(data,function(value,key){
$out+=' <li class="mui-table-view-cell mui-collapse"><a class="mui-navigate-right" href="#">';
$out+=$escape(value.area_name);
$out+='</a> <ul class="mui-table-view mui-table-view-chevron"> ';
$each(value.cinemas,function(val,k){
$out+=' <li class="mui-table-view-cell "> ';
if(is_mate){
$out+=' <a data-href="./cinema_details.html?cinemaid=';
$out+=$escape(val.id);
$out+='" class="mui-row href_click"> ';
}else{
$out+=' <a data-href="./cinema_details.html?cinemaid=';
$out+=$escape(val.komovie_cinema_id);
$out+='" class="mui-row href_click"> ';
}
$out+=' <div class="mui-table-cell mui-col-xs-10"> <h4 class="mui-ellipsis">';
$out+=$escape(val.cinema_name);
$out+='(';
if(val.is_komovie==1){
$out+='座';
}
if(val.is_dzq==1){
$out+='券';
}
if(is_brush==1){
$out+='卡';
}
$out+=')</h4> <p class="mui-ellipsis">';
$out+=$escape(val.cinema_address);
$out+='</p> </div> </a> </li> ';
});
$out+=' </ul> </li> ';
});
$out+=' </ul>';
return new String($out);
});