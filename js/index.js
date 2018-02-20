// 定义产品对象
var Product = function () {
	this.name = '';
	this.price = '';
	this.description = '';
	this.youhuijia = '';
	this.zhekou = '';
	this.sales = '';
	this.images = '';
}

// 定义产品原型对象
Product.prototype = {
	// 绑定元素
	bindDoms:function () {
		var str = '';
			str += '<dl>'+
						'<dt><a href="javasript:;"><img src="'+this.images+'" width="384" height="225" /></a></dt>'+	
						'<dd><span><a href="javascript:;"><em>'+this.zhekou+'折</em>'+this.name+'</a></span></dd>'+
						'<dd class="price">'+
							'<em>￥'+this.price+'</em>'+
							'<del>￥'+this.youhuijia+'</del>'+
							'<i>销量：'+this.sales+'</i>'+
						'</dd>'+
					'</dl>';
		return str;
	},
	bindEvents:function () {
		
	}

	// 绑定事件
}

window.onload = function () {
	var products= [
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque06_r2_c2.jpg'},
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque08_r2_c2.jpg'},
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque09_r2_c2.jpg'},
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque10_r2_c2.jpg'},
        {name:'手机中的战斗机',price:1111,youhuijia:1000,sales:300,zhekou:3.5,image:'img/boutque11_r2_c2.jpg'},
    ];

    var str = '';

    for (var i = 0; i < products.length; i++) {
    	var product = new Product();
    	product.name = products[i].name;
    	product.price = products[i].price;
    	product.youhuijia = products[i].youhuijia;
    	product.sales = products[i].sales;
    	product.zhekou = products[i].zhekou;
    	product.images = products[i].image;

    	str += product.bindDoms();
    }

    var container = document.getElementById('container');
    container.innerHTML = str;
}