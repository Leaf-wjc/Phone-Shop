// 动画测试脚本

var screenAnimateElements = {
	'.screen1' : ['.screen1_heading','.screen1_phone','.screen1_shadow'],
	'.screen2' : ['.screen2_heading','.screen2_info','.screen2_phone','.screen2_point_i_1','.screen2_point_i_2','.screen2_point_i_3'],
	'.screen3' : ['.screen3_heading','.screen3_info','.screen3_phone','.screen3_features'],
	'.screen4' : ['.screen4_heading','.screen4_info','.screen4_type_item_i_1','.screen4_type_item_i_2','.screen4_type_item_i_3','.screen4_type_item_i_4'],
	'.screen5' : ['.screen5_heading','.screen5_info','.screen5_bg']

};

function setScreeenAnimate (screenCls) {
	// body... 
	var screen = document.querySelector(screenCls);
	var animateElements = screenAnimateElements[screenCls];
	var isSetAnimateClass = false;
	var isSetAnimateDown = false;

	screen.onclick = function (argument) {
		/* body... */
		if (isSetAnimateClass === false) {
			for (var i = 0; i < animateElements.length; i++) {
				var elements = document.querySelector(animateElements[i]),
					baseCls = elements.getAttribute('class');
				elements.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
			}
			isSetAnimateClass = true;
			return;
		}

		if (isSetAnimateDown === false) {
			for (var i = 0; i < animateElements.length; i++) {
				var elements = document.querySelector(animateElements[i]),
					baseCls = elements.getAttribute('class');
				elements.setAttribute('class', baseCls.replace('_animate_init', '_animate_down'));
			}
			isSetAnimateDown = true;
			return;
		}

		if (isSetAnimateDown === true) {
			for (var i = 0; i < animateElements.length; i++) {
				var elements = document.querySelector(animateElements[i]),
					baseCls = elements.getAttribute('class');
				elements.setAttribute('class', baseCls.replace('_animate_down', '_animate_init'));
			}
			isSetAnimateDown = false;
			return;
		}

	}
}

for(k in screenAnimateElements) {
	setScreeenAnimate(k);
}
