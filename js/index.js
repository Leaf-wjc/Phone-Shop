/*获取元素*/
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

var delCls = function (elements,cls) {
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
	var screen = document.querySelector(screenCls),
		animateElements = screenAnimateElements[screenCls];
	for (var i = 0; i < animateElements.length; i++) {
		var elements = document.querySelector(animateElements[i]),
			baseCls = elements.getAttribute('class');
		elements.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
	}
}


var playScreenAnimateDown = function (screenCls) {
	/* body... */
		var screen = document.querySelector(screenCls),
			animateElements = screenAnimateElements[screenCls];
		for (var i = 0; i < animateElements.length; i++) {
			var elements = document.querySelector(animateElements[i]),
				baseCls = elements.getAttribute('class');
			elements.setAttribute('class', baseCls.replace('_animate_init', '_animate_down'));
		}

}
window.onload = function () {
	/* body... */
	for(k in screenAnimateElements){
		if (k === '.screen1') {
			continue;
		}
		setScreenAnimateInit(k);
	}
}

window.onscroll = function () {
	/* body... */
	var top = document.documentElement.scrollTop || document.body.scrollTop;

	if (top > 80) {
		addCls(getEle('.header'),'header_status_black');
		addCls(getEle('.outline'),'outline_status_in');
	}else {
		delCls(getEle('.header'),'header_status_black');
		delCls(getEle('.outline'),'outline_status_in');
		switchNavitemsActive(0);
	}
	if (top > 1) {
		playScreenAnimateDown('.screen1');
		switchNavitemsActive(0);
	}
	if (top > (800*1-100)) {
		playScreenAnimateDown('.screen2');
		switchNavitemsActive(1);
	}
	if (top > (800*2-100)) {
		playScreenAnimateDown('.screen3');
		switchNavitemsActive(2);
	}
	if (top >(800*3-100)) {
		playScreenAnimateDown('.screen4');
		switchNavitemsActive(3);
	}
	if (top >(800*4-100)) {
		playScreenAnimateDown('.screen5');
		switchNavitemsActive(4);
	}
}


//双向定位
var navItems = getAllEle('.header_nav-item'),
	outLineItems = getAllEle('.outline_item');

var switchNavitemsActive = function (idx) {
	/* body... */
	for (var i = 0; i < navItems.length; i++) {
		delCls(navItems[i],'header_nav-item_active');
	}
	addCls(navItems[idx],'header_nav-item_active');

	for (var i = 0; i < outLineItems.length; i++) {
		delCls(outLineItems[i],'outline_item_status_active');
	}
	addCls(outLineItems[idx],'outline_item_status_active');
}


var setJump = function (i,lib) {
	/* body... */
	var item = lib[i];
	item.onclick = function () {
		/* body... */
		document.documentElement.scrollTop = (800*i+1);
		switchNavitemsActive(i);
	}
}

for (var i = 0; i < navItems.length-1; i++) {
	setJump(i,navItems)
}

for (var j = 0; j < outLineItems.length-1; j++) {
	setJump(j,outLineItems)
}

//滑动门特效
var navTip = getEle('.header_nav-tip'),
	activeIdx = 0;
var setTip = function (idx,lib) {
	/* body... */
	lib[idx].onmouseover = function () {
		/* body... */
		navTip.style.left = (idx*70) + 'px';
	}
	lib[idx].onmouseout = function () {
		/* body... */
		// for (var i = 0; i < lib.length; i++) {
		// 	if (getCls(lib[i]).indexOf('.header_nav-item_active')) {
		// 		activeIdx = i;
		// 	}
		// }
		// navTip.style.left = (activeIdx*70) + 'px';
		for (var i = 0; i < lib.length; i++) {
			if (getCls(lib[i]).indexOf('.header_nav-item_active') > -1) {
				activeIdx = i;
				break;
			}
		}
		navTip.style.left = (activeIdx*70) + 'px';
	}
}

for (var i = 0; i < navItems.length-1; i++) {
	setTip(i,navItems);
}

setTimeout(function () {
	/* body... */
	playScreenAnimateDown('.screen1');
}, 200)