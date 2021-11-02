const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size





// TweenLite.set(["#front", "#back"], {x:size.w/2, y:size.h/2})


 





function init(){
	
	const tl = new TimelineMax()

	

	tl.set(".frame1", {opacity:1})

	tl.to("#hero .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, 1)

	tl.to("#shadow .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, 1.1)

	

	return tl
}





export {size, init}