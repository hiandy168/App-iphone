/**
* mui.common.js 
* an mui extension
* @version v1.0
*/
(function($, owner) {
	/**
	 * 配置信息
	 */
	owner.setting = {
		alertWithTitle : true, //警告弹出框是否有标题
	};

	/**
	 * 保存登录信息
	 * @param {Object} info
	 */
	owner.saveUserInfo = function (info){
		info = info || {};
		localStorage.setItem('$user', JSON.stringify(info));
	}

	/**
	 * 获取登录信息
	 */
	owner.getUserInfo = function (){
		return JSON.parse(localStorage.getItem('$user') || '{}');
	}

	/**
	 * 检查登录状态
	 */
	owner.checkLoginStatus = function (){
		var uinfo = owner.getUserInfo();
		if(/^[0-9]{1,}$/.test(uinfo.uid) && uinfo.token != ""){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 用户登录
	 * @param {Object} loginInfo
	 * @param {Function} loginCallback
	 */
	owner.login = function (loginInfo, loginCallback){
		loginInfo = loginInfo || {};
		loginInfo.url = loginInfo.url || '';
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if(!loginInfo.url){
			owner.toast("请先配置接口地址");
		}
		var accountPatrn = /^[a-zA-Z0-9_-]{3,16}$/;
		if(!accountPatrn.test(loginInfo.account)){
			return callback('用户名为3至16个英文或数字');
		}
		var passwordPatrn = /^[a-zA-Z0-9_-]{6,18}$/;
		if(!passwordPatrn.test(loginInfo.password)){
			return callback('密码为6至18位的英文或数字');
		}
		var data = {
			account: loginInfo.account,
			password: loginInfo.password
		};
		if(typeof loginCallback == 'undefined'){
			owner.toast("请先设置成功回调函数");
		}
		owner.ajaxGetPostRequest(loginInfo.url, data, loginCallback, 'post');
	}

	/**
	 * ajax请求
	 * @param {String} url 链接
	 * @param {Object} data 数据
	 * @param {Function} callback 回调函数
	 * @param {String} type 请求类型：get/post
	 * @param {Int} retry 重试次数
	 */
	owner.ajaxGetPostRequest = function(url, data, callback, type, retry){
		mui.ajax(url,{
			data: data,
			dataType: 'json',
			type: type ? type : 'get',
			timeout: 10000,
			crossDomain:true,
			success: function(response){
				if(response==null || response==''){
					console.log("no response");
				}else{
					owner.callback(response, callback);
				}
			},
			error: function(xhr,type,errorThrown){
				if(typeof retry != 'undefined'){
					retry--;
				}else{
					retry = 0;
				}
				if(retry > 0){
					owner.ajaxGetPostRequest(url, data, callback, type, retry);
				}else{
					owner.toast(owner.ajaxErrors(xhr));
				}
			}
		});
	}

	/**
	 * 统一回调函数
	 * @param {Object} response
	 * @param {Function} callbackFunc
	 */
	owner.callback = function (response, callbackFunc){
		response = response || {};
		response.code = response.code || -1;
		if(response.code < 0){
			return false;
		}else if(response.code == 0){
			//success
			callbackFunc(response.data);
		}else{
			//fail
			owner.toast(response.error_desc);
		}
		return false;
	}

	//ajax错误描述
	/**
	 * ajax错误描述
	 * @param {XmlHttpRequest} xhr
	 */
	owner.ajaxErrors = function(xhr){
		var errorStr = "";
		if(plus.networkinfo.getCurrentType() < 2){
			//网络连接状态未知或未连接网络
			errorStr = "网络连接异常，请稍候再试";
		}else{
			if(xhr.readyState==4 && xhr.status==0){
				errorStr = "服务器连接异常，请稍候再试";
			}else if(xhr.readyState==0 && xhr.status==0){
				//timeout
				errorStr = "服务器连接超时，请稍候再试";
			}else if(xhr.readyState==4 && xhr.status==500){
				//服务器错误
				errorStr = "服务器错误500";
			}else if(xhr.readyState==4 && xhr.status==404){
				errorStr = "资源未找到：404";
			}
		}
		return errorStr;
	}

	/**
	 * 封装nativeUI toast
	 * @param {String} message
	 */
	owner.toast = function (message){
		if(message!=""){
			var options = {
				icon: "css/helloh5.jpg",
				duration: "short",
				align: "center",
				verticalAlign: "bottom",
			};
			plus.nativeUI.toast(message, options);
		}
	}

	/**
	 * 封装nativeUI alert
	 * @param {String} title
	 * @param {String} message
	 */
	owner.alert = function (title, message){
		if(typeof message == 'undefined'){
			message = title;
		}
		if(owner.setting.alertWithTitle!=true){
			title = "";
		}
		plus.nativeUI.alert( message, function(){
			// 提示对话框关闭后的回调函数
		}, title, "知道了" );
	}
	
	/**
	 * 常用正则判断
	 * @param {String} title
	 * @param {String} message
	 */
	owner.validator =  {
		isTel: function (value) {
			var patrn = /^((\+?86)|(\(\+86\)))?\d{3,4}-?\d{7,8}(-\d{3,4})?$/;
			return patrn.test($.trim(value));
		},
		isMobile: function (value) {
			var patrn = /^(13[0123456789]|147|15[012356789]|18[012356789])\d{8}$/;
			return patrn.test($.trim(value));
		},
		isUserName: function(value){
			var patrn = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
			return patrn.test($.trim(value));
		},
		isPassword: function(value){
			var patrn = /^[a-zA-Z][a-zA-Z0-9_-]{5,17}$/;
			return patrn.test($.trim(value));
		},
		isRealName: function(value){
			var patrn = /^[\u2E80-\u9FFF]{2,}$/;
			return patrn.test($.trim(value));
		},
		isEmail:function(value){
			var patrn = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
			return patrn.test($.trim(value));
		},
		isQQ:function(value){
			var patrn = /^[1-9]d{4,9}$/;
			return patrn.test($.trim(value));
		}
	}
}(mui, window.api = {}));