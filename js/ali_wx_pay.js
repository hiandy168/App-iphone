var APPPAY = {
	
		/*
		 * APP支付，包括微信支付、支付宝支付 
		 */
		options : {
			alipayServer : null,
			wxpayServer : null,
			channels : null,	// 支付通道
			errorMessage : '',  // 支付失败后的错误提示
			payType : null, 	// 前台穿过来的支付类型（wxpay、alipay）
			data : {},		// 用户自定义的扩展信息，便于在 successEvent 和 errorEvent 中使用
			
			successEvent : function(result,data){	// 支付成功后的操作
				jQuery.noop();
			},
			
			errorEvent : function(error,data){ // 支付失败后的操作
				jQuery.noop();
			}
		},
		
		/*
		 * 得到支付通道
		 */
		getChannels : function(backend){
			var _that = this;
			var _interval = false;
			plus.payment.getChannels(function(channels){			    	
		        for (var i = 0; i <= channels.length; i++) {			        	
		        	if( channels[i] != undefined){
		        		if(channels[i].id == _that.options.payType){ 
		        			_that.options.channels = channels[i]; 
		        		}
		        	}
		        	
		        	if (channels.length == i ){
		        		_interval = true;
		        	}
                }			        
		   });
		   
		   var interval = setInterval(function(){
		   		if (_interval == true){
		   			clearInterval(interval);
		   			backend();
		   		}
		   },100);
		},
	
		/*
		 * 请求支付
		 */
		requestPay : function(PAYSERVER){	
			var _that = this;
			
			_that.getChannels(function(){
				if(_that.checkParams() == false){
					mui.alert(_that.options.errorMessage);
					return false;
				}
				 
				if(PAYSERVER){
					PAYSERVER = PAYSERVER;
				}else if(_that.options.payType == 'alipay'){
					PAYSERVER = _that.options.alipayServer;
				}else if(_that.options.payType == 'wxpay'){
					PAYSERVER = _that.options.wxpayServer;
				}else{
					PAYSERVER = null;
				}				
				
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
			        switch(xhr.readyState){
			            case 4:
			            if(xhr.status==200){
			                plus.payment.request(_that.options.channels,xhr.responseText,function(result){
			                	_that.options.successEvent(result,_that.options.data);
			               
			                },function(error){
			                	_that.options.errorEvent(error,_that.options.data);
			                }); 
			            }else{
			                mui.alert("获取订单信息失败！");
			            }
			            break;
			            default: 
			            break;
			        }
			    }
			    xhr.open('GET',PAYSERVER);
			    xhr.send();
			});
		},
		
		/*
		 * 验证所有的请求参数是否合法 
		 */
		checkParams : function(){
			if (this.options.channels == null){
				this.options.errorMessage = '获取支付通道失败';
				return false;
			}else if(this.options.payType == null){
				this.options.errorMessage = '支付类型不能为空格（payType）';
				return false;
			}
			return true;
		},
		
		setoptions : function(options){
			this.options.alipayServer = options.alipayServer || this.options.alipayServer;
			this.options.wxpayServer = options.wxpayServer || this.options.wxpayServer;
			this.options.payType = options.payType || this.options.payType;
			this.options.data = options.data || this.options.data;
			this.options.successEvent = options.successEvent || this.options.successEvent;
			this.options.errorEvent = options.errorEvent || this.options.errorEvent;
		}
		
}