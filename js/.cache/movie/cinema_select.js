/*TMODJS:{"version":64,"md5":"b7b4c87e1f1d4df407fae0e917eb1f0f"}*/
template('movie/cinema_select',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,cinema=$data.cinema,$index=$data.$index,$escape=$utils.$escape,ticketType=$data.ticketType,$out='';$each(data.cinemas,function(cinema,$index){
$out+=' <li class="mui-table-view-cell href_click" data-href="./cinema_details.html?cinemaid=';
$out+=$escape(cinema.cinemaId);
$out+='&movieid=';
$out+=$escape(data.movieId);
$out+='"> <h4>';
$out+=$escape(cinema.cinemaName);
$out+='</h4> <p style="width: 80%;">';
$out+=$escape(cinema.cinemaAddress);
$out+='</p> <div> <div class="cinema_type f_l"><i class="type_zuo"></i>';
if(ticketType==1){
$out+='<i class="type_quan"></i>';
}
$out+='</div>  </div> ';
if(cinema.distance_cn){
$out+='<p class="cinema_distance color_ff781e">';
$out+=$escape(cinema.distance_cn);
$out+='</p>';
}
$out+=' </li> ';
});
$out+=' ';
return new String($out);
});