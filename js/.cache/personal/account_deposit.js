/*TMODJS:{"version":40,"md5":"53382381e09618c97f558fc63bd76666"}*/
template('personal/account_deposit',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$each=$utils.$each,value=$data.value,i=$data.i,$out='';$out+='<style> .container .row{background: #fff;margin-top: 10px;} </style> <div class="container" style="background-color:#efeff4"> <div class="row clearfix"> <div class="title f_l">充值的卡</div> <div class="card_num f_r">';
$out+=$escape(data.username);
$out+='</div> </div> <div class="row"> <div class="title">充值点数</div> <div class="point_list clearfix"> <ul class="list"> ';
$each(data.priceList,function(value,i){
$out+=' <li ';
if(i == 30){
$out+='class="on" ';
}
$out+=' data-price="';
$out+=$escape(value);
$out+='"> <div class="text"> <div class="point">';
$out+=$escape(i);
$out+='点</div> <div class="money">售价 ';
$out+=$escape(value);
$out+='元</div> </div> </li> ';
});
$out+=' </ul> </div> </div> <div class="charge_row" > <div class="title" style="background: #fff;padding: 10px;margin-top: 10px;margin-left:0;">充值方式</div> <ul class="mui-table-view" style="margin-top:0"> <li class="mui-table-view-cell" > <label for="weixin"> <div class="mui-input-row mui-radio mui-right"> <img src="../images/pay/weixin.png" width="30" height="30" style="float:left;"> <span style="display:inline-block; padding:5px 10px;">微信</span> <input name="payType" id="weixin" type="radio" data-pay-name="wxpay" checked="checked" value="4"> </div> </label> </li> <li class="mui-table-view-cell" > <label for="alipay"> <div class="mui-input-row mui-radio mui-right"> <img src="../images/pay/alipay.png" width="30" height="30" style="float:left;"> <span style="display:inline-block; padding:5px 10px;">支付宝</span> <input name="payType" id="alipay" type="radio" data-pay-name="alipay" value="3"> </div> </label> </li> </ul> </div> </div> <a href="javascript:void(0)" class="btn charge_btn act-pay">确认充值</a> <div class="reminder"> <h4>温馨提示：</h4> <p>1、充值30点或50点延期3个月，充值100点延期1年；</p> <p>2、卡过期前3个月至卡过期6个月内充值可延期；</p> <p>3、充值有效期延期以卡截止有效期开始计算延期并非是充值日期；</p> <p>4、充值延期规则适用于‘999011’和‘999013’开头的卡，其他暂不支持；</p> </div> ';
return new String($out);
});