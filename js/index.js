/*获取元素*/
alert("1");
var getEle = function (selector) {
	/* body... */
	return document.querySelector(selector);
}

var getAllEle = function (selector) {
	/* body... */
	return document.querySelectorAll(selector);
}

var getId = function (str) {
	/* body... */
	return typeof(str)?document.getElementById(str):"String";
}
/*获取元素样式*/
var getCls = function (elements) {
	/* body... */
	return elements.getAttribute('class');
}

/*设置元素样式*/

var setCls = function (elements,cls) {
	/* body... */
	return elements.setAttribute('class',cls);
}

/*为元素添加样式*/
var addCls = function (elements,cls) {
	/* body... */
	var baseCls = getCls(elements);
	if (baseCls.indexOf(cls) === -1) {
		setCls(elements,baseCls + ' ' +cls);
	}
}

var removeCls = function (elements,cls) {
	/* body... */
	var baseCls = getCls(elements);
	if (baseCls.indexOf(cls) !== -1) {
		setCls(elements,baseCls.split(cls).join(' '));
	}
}

var screenAnimateElements = {
	'.screen1' : ['.screen1_heading','.screen1_phone','.screen1_shadow'],
	'.screen2' : ['.screen2_heading','.screen2_info','.screen2_phone','.screen2_point_i_1','.screen2_point_i_2','.screen2_point_i_3'],
	'.screen3' : ['.screen3_heading','.screen3_info','.screen3_phone','.screen3_features'],
	'.screen4' : ['.screen4_heading','.screen4_info','.screen4_type_item_i_1','.screen4_type_item_i_2','.screen4_type_item_i_3','.screen4_type_item_i_4'],
	'.screen5' : ['.screen5_heading','.screen5_info','.screen5_bg']

};

var setScreenAnimateInit = function (screenCls) {
	/* body... */
	var screen = docuemnt.querySelector(screenCls),
		animateElements = screenAnimateElements[screenCls];
			for (var i = 0; i < animateElements.length; i++) {
				debugger;
				var elements = document.querySelector(animateElements[i]),
					baseCls = elements.getAttribute('class');
				elements.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
			}
}


window.onload = function () {
	/* body... */
	debugger;
	for(k in screenAnimateElements){
		setScreenAnimateInit(k);
	}
}