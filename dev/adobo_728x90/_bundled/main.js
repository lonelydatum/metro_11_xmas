(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var w = size.w;
var h = size.h;

function init(pos) {

	var transformOrigin_x = size.w;
	var transformOrigin_y = 0;
	var READ = 3;

	if (size.h === 600) {
		transformOrigin_y = 342 * 2;
	} else if (size.h === 250) {
		transformOrigin_y = 175 * 2;
	}

	if (pos) {
		transformOrigin_x = pos.x;
		transformOrigin_y = pos.y;
	}

	console.log(transformOrigin_x, transformOrigin_y);
	TweenLite.set("#cta", { transformOrigin: transformOrigin_x + "px " + transformOrigin_y + "px" });
	TweenLite.set("#cta", { x: -transformOrigin_x / 2, y: -transformOrigin_y / 2 });
	TweenLite.set(".flip-card-container", { width: size.w, height: size.h });

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	tl.to("#hero .flip-card", 1, { transform: "rotateY(180deg)", ease: Power2.easeOut }, READ);

	tl.to("#shadow .flip-card", 1, { transform: "rotateY(180deg)", ease: Power2.easeOut }, READ + .1);

	var r = 3;
	for (var i = 0; i < 5; i++) {
		var rotation = i % 2 === 0 ? r : -r;
		tl.to("#cta", .06, { rotation: rotation, ease: Power1.easeOut });
	}

	tl.to("#cta", .3, { rotation: 0, ease: Power3.easeOut });

	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
