
const banner = document.getElementById('banner')

import {size} from '../../_common/js/common.js'

const tl = init()






const transformOrigin_x = size.w
const transformOrigin_y = 342*2


console.log(transformOrigin_x, transformOrigin_y);
TweenLite.set("#cta", {transformOrigin:`${transformOrigin_x}px ${transformOrigin_y}px`})
TweenLite.set("#cta", {x:-transformOrigin_x/2, y:-transformOrigin_y/2})

TweenLite.set("#cta", {x:-transformOrigin_x/2, y:-transformOrigin_y/2})


const dish_x = size.w
const dish_y = size.h*2
TweenLite.set(["#dish_a", "#dish_b"], {transformOrigin:`${dish_x}px ${dish_y}px`})
TweenLite.set(["#dish_a", "#dish_b"], {x:-dish_x/2, y:-dish_y/2, rotation:0})
 





function init(){
	
	const tl = new TimelineMax({onComplete(){
		console.log('sldkfjsldfj');
		banner.addEventListener("mouseover", ()=>{
			const tl = new TimelineMax()
			tl.to("#cta", .3, {scale:.62, ease:Back.easeIn})
			tl.to("#cta", .3, {scale:.5, ease:Back.easeOut})
		})

		banner.addEventListener("mouseout", ()=>{

			TweenLite.to("#cta", .3, {scale:.5, ease:Back.easeOut})
		})
	}})


	

	tl.set(".frame1", {opacity:1})

	tl.to("#logo .flip-card", .5, {rotationY: "+=180", ease:Back.easeOut}, .3)
	tl.from("#text", .5, {opacity:0}, "+=.1")

	tl.add("start", 4)

	
	tl.to("#text .flip-card", .6, {transform: `rotateY(180deg)`, ease:Power3.easeOut}, "start")
	

	
	tl.to(".dish_a", .6, {rotation:"+=180", ease:Power3.easeOut}, "start+=.6")
	tl.from(".dish_b", .6, {rotation:"-=180", ease:Power3.easeOut}, "start+=.6")

	

	

	tl.from(".cta", .5, {opacity:0, ease:Power2.easeOut}, "+=.3")

	
	

	return tl
}





module.exports = {};



