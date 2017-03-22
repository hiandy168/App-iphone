/*TMODJS:{"version":29,"md5":"2dd82970ce2257e9142d742d1a2954be"}*/
template('ticket/ticket_submit',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,ProductName=$data.ProductName,SellPrice=$data.SellPrice,$out='';$out+='<div class="mui-content"> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"><h4 class="mui-pull-left mui-col-xs-4">产品名称</h4><p class="mui-pull-right mui-col-xs-8 color_2fd0b5">';
$out+=$escape(ProductName);
$out+='</p></li> <li class="mui-table-view-cell"><h4 class="mui-pull-left">价格</h4><p class="mui-pull-right color_2fd0b5">';
$out+=$escape(SellPrice);
$out+='点</p></li> </ul> <ul class="mui-table-view margin_top_15"> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>真实姓名</h4></label> <input type="text" name="name" class="mui-pull-right dianziquan_mima" placeholder="输入姓名" /> </div> </li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>身份证号</h4></label> <input type="number" name="card" class="mui-pull-right dianziquan_mima" placeholder="输入身份证号" /> </div> </li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>手机号码</h4></label> <input type="number" name="tel" class="mui-pull-right dianziquan_mima" placeholder="输入手机号码" /> </div> </li> <li class="mui-table-view-cell"> <div class="mui-input-row"> <label class="mui-pull-left"><h4>出行时间</h4></label> <input type="text" id="time" data-options=\'{"type":"date","beginYear":2016}\' class="mui-pull-right dianziquan_mima" placeholder="选择时间"/> </div> </li> </ul> <div class="ticket_submit">提交</div> </div>';
return new String($out);
});