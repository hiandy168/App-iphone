/*TMODJS:{"version":4,"md5":"7be57d93bc25420e6078a517438b59a1"}*/
template('syn_movie/tmp_movie_seat',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cinema=$data.cinema,featureTimeStr=$data.featureTimeStr,language=$data.language,screen_type=$data.screen_type,price=$data.price,scheduleid=$data.scheduleid,movie=$data.movie,movie_id=$data.movie_id,extInfo=$data.extInfo,$out='';$out+='<div class="mui-row movie_details1_top bg_white"> <div class="mui-col-xs-9"> <h4 class="mui-ellipsis">';
$out+=$escape(cinema.cinema_name);
$out+='</h4> <p class="mui-ellipsis">';
$out+=$escape(featureTimeStr);
$out+=$escape(language);
$out+='(';
$out+=$escape(screen_type);
$out+=')</p> </div> <div class="mui-col-xs-3 mui-text-right"> <span class="color_ff781e movie_seat_dianshu">';
$out+=$escape(price);
$out+='点</span> </div> </div> <div class="tips cf margin_0"> <div class=\'row disabled-seat\'> <center>请在下方座位图选择您满意的座位</center> </div> <ul class="seat-intro"> <li><span class="seat active"></span>可选</li> <li><span class="seat select"></span>已选</li> <li><span class="seat disabled"></span>已售</li> <li><span class="seat love"></span>情侣座</li> </ul> </div> <div class="main_a main-small main-big" style="min-height: 200px; max-height:1500px;"> <div class="wrapper"> <div class=\'seatmap\' style="overflow:scroll;"> <center style="height:150px; line-height:150px;">加载中...</center> </div> </div> <div class="container act-phone"> <form id="orderForm" name="orderForm" onsubmit="return false;"> <div class="mui-input-row bg_white"> <label style="text-align: left;" for="mobile">手机号</label> <input type="number" name="mobile" id="mobile" /> </div> <p class="mui-text-right margin_top_10">（此手机号码用来接收取票密码）</p> <div class="color_ff781e" style="text-align: left;padding: 10px;"> <p class="color_ff781e">注意事项：</p> <p class="color_ff781e">1、选择你要预订的座位单击选中，重复点击取消所选座位；</p> <p class="color_ff781e">2、每笔订单最多可选购4张电影票；情侣座不单卖；</p> <p class="color_ff781e">3、售票系统不支持您在所选的座位之间仅留一个空座位，请见谅</p> <p class="color_ff781e">4、部分影院3D眼镜需要押金，请观影前准备好现金；</p> <p class="color_ff781e">5、您锁定的座位，请在15分钟内支付。一旦未支付或订单失败，将无法人工保留所选座位，请见谅。</p> <p class="color_ff781e">6、选座购票为特殊商品，出票成功后，如无使用问题，不得退换；</p> <p class="color_ff781e">7、付款后若没有出票成功，我们将自动为您退款。出票成功后，请妥善保存取票密码,若没有收到取票短信，请到订票中心查询，或拨打客服电话400-010-0689。</p> </div> <div class=\'mui-row\'> <input type="hidden" name="act" value="order"/> <input type="hidden" name="scheduleid" value="';
$out+=$escape(scheduleid);
$out+='"/> <input type="hidden" name="featureTimeStr" value="';
$out+=$escape(featureTimeStr);
$out+='"/> <input type="hidden" name="movieName" value="';
$out+=$escape(movie.movie_name);
$out+='"/> <input type="hidden" name="cinemaName" value="';
$out+=$escape(cinema.cinema_name);
$out+='"/> <input type="hidden" name="language" value="';
$out+=$escape(language);
$out+=' / ';
$out+=$escape(screen_type);
$out+='"/> <input type="hidden" name="seatsNo" id="seatsNo" value=""/> <input type="hidden" name="seatsName" id="seatsName" value=""/> <input type="hidden" name="seatsCount" id="seatsCount" value=""/> <input type="hidden" name="vipPrice" id="vipPrice" value="';
$out+=$escape(price);
$out+='"/> <input type="hidden" name="seatParam" id="seatParam" value=\'{"scheduleid":"';
$out+=$escape(scheduleid);
$out+='"}\'/> <input type="hidden" name="movieId" id="movieId" value="';
$out+=$escape(movie_id);
$out+='"/> <input type="hidden" name="extInfo" id="extInfo" value="';
$out+=$escape(extInfo);
$out+='"/> <input class="mui-btn btn_next seat_next" type="submit" value=" &nbsp;下一步 &nbsp; "> </div> </form> </div> </div>';
return new String($out);
});