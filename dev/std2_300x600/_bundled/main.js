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

var transformOrigin_x = size.w;
var transformOrigin_y = 342 * 2;
var READ = 3;

console.log(transformOrigin_x, transformOrigin_y);
TweenLite.set("#cta", { transformOrigin: transformOrigin_x + "px " + transformOrigin_y + "px" });
TweenLite.set("#cta", { x: -transformOrigin_x / 2, y: -transformOrigin_y / 2 });

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {
			console.log('sldkfjsldfj');
			banner.addEventListener("mouseover", function () {
				var tl = new TimelineMax();
				tl.to("#cta", .3, { scale: .62, ease: Back.easeIn });
				tl.to("#cta", .3, { scale: .5, ease: Back.easeOut });
			});

			banner.addEventListener("mouseout", function () {

				TweenLite.to("#cta", .3, { scale: .5, ease: Back.easeOut });
			});
		} });

	tl.set(".frame1", { opacity: 1 });

	tl.to("#hero .flip-card", 1, { transform: "rotateY(180deg)", ease: Power2.easeOut }, READ);

	tl.to("#shadow .flip-card", 1, { transform: "rotateY(180deg)", ease: Power2.easeOut }, READ + .1);

	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var banner = document.getElementById('banner');

var tl = init();

var transformOrigin_x = _commonJsCommonJs.size.w;
var transformOrigin_y = 342 * 2;

console.log(transformOrigin_x, transformOrigin_y);
TweenLite.set("#cta", { transformOrigin: transformOrigin_x + 'px ' + transformOrigin_y + 'px' });
TweenLite.set("#cta", { x: -transformOrigin_x / 2, y: -transformOrigin_y / 2 });

TweenLite.set("#cta", { x: -transformOrigin_x / 2, y: -transformOrigin_y / 2 });

var dish_x = _commonJsCommonJs.size.w;
var dish_y = _commonJsCommonJs.size.h * 2;
TweenLite.set(["#dish_a", "#dish_b"], { transformOrigin: dish_x + 'px ' + dish_y + 'px' });
TweenLite.set(["#dish_a", "#dish_b"], { x: -dish_x / 2, y: -dish_y / 2, rotation: 0 });

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {
			console.log('sldkfjsldfj');
			banner.addEventListener("mouseover", function () {
				var tl = new TimelineMax();
				tl.to("#cta", .3, { scale: .62, ease: Back.easeIn });
				tl.to("#cta", .3, { scale: .5, ease: Back.easeOut });
			});

			banner.addEventListener("mouseout", function () {

				TweenLite.to("#cta", .3, { scale: .5, ease: Back.easeOut });
			});
		} });

	tl.set(".frame1", { opacity: 1 });

	tl.to("#logo .flip-card", .5, { rotationY: "+=180", ease: Back.easeOut }, .3);
	tl.from("#text", .5, { opacity: 0 }, "+=.1");

	tl.add("start", 4);

	tl.to("#text .flip-card", .6, { transform: 'rotateY(180deg)', ease: Power3.easeOut }, "start");

	tl.to(".dish_a", .6, { rotation: "+=180", ease: Power3.easeOut }, "start+=.6");
	tl.from(".dish_b", .6, { rotation: "-=180", ease: Power3.easeOut }, "start+=.6");

	tl.from(".cta", .5, { opacity: 0, ease: Power2.easeOut }, "+=.3");

	return tl;
}

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
