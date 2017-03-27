/*TMODJS:{"version":4,"md5":"c1ee9daa74d8d7736053815a8462ef73"}*/
template('syn_movie/tmp_plan_list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,plan=$data.plan,pv=$data.pv,$index=$data.$index,$escape=$utils.$escape,$out='';$each(plan,function(pv,$index){
$out+=' <div class="mui-row movie_list"> <div class="mui-col-xs-3 mui-text-center movie_time">';
$out+=$escape(pv.time);
$out+='</div> <div class="mui-col-xs-4 movie_type"> <div>';
$out+=$escape(pv.language);
$out+=$escape(pv.screen_type);
$out+='</div> <p>';
$out+=$escape(pv.hall_name);
$out+='</p> </div><div class="mui-col-xs-2 mui-text-center movie_price">';
$out+=$escape(pv.price);
$out+='</div> <div class="mui-col-xs-3 mui-text-center"> ';
if(pv.is_cut==1){
$out+=' <button class="btn_ticket btn_ticket_no" type="button">已过场</button> ';
}else{
$out+=' <button class="btn_ticket href_click" data-href="./movie_seat.html?scheduleid=';
$out+=$escape(pv.id);
$out+='" type="button">选座购票</button> ';
}
$out+=' </div> </div> ';
});
return new String($out);
});