const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size




const transformOrigin_x = size.w
const transformOrigin_y = 342*2
const READ = 3

console.log(transformOrigin_x, transformOrigin_y);
TweenLite.set("#cta", {transformOrigin:`${transformOrigin_x}px ${transformOrigin_y}px`})
TweenLite.set("#cta", {x:-transformOrigin_x/2, y:-transformOrigin_y/2})


 





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

	tl.to("#hero .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, READ)

	tl.to("#shadow .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, READ+.1)

	

	return tl
}






export {size, init}