const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size







 





function init(){

	

	const transformOrigin_x = size.w
	let transformOrigin_y = 0
	const READ = 3

	if(size.h===600){
		transformOrigin_y = 342*2
	}else if(size.h===250){
		transformOrigin_y = 175*2
	}

	console.log(transformOrigin_x, transformOrigin_y);
	TweenLite.set("#cta", {transformOrigin:`${transformOrigin_x}px ${transformOrigin_y}px`})
	TweenLite.set("#cta", {x:-transformOrigin_x/2, y:-transformOrigin_y/2})
	TweenLite.set(".flip-card-container", {width:size.w, height:size.h})
	

	
	const tl = new TimelineMax({onComplete(){
		
	}})



	

	tl.set(".frame1", {opacity:1})

	tl.to("#hero .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, READ)

	tl.to("#shadow .flip-card", 1, {transform: `rotateY(180deg)`, ease:Power2.easeOut}, READ+.1)


	
	const r = 3
	for(let i=0; i<5; i++){		
		const rotation = i%2===0 ? r : -r
		tl.to("#cta", .06, {rotation, ease:Power1.easeOut})	
	}

	tl.to("#cta", .3, {rotation:0, ease:Power3.easeOut})	
	
	
	

	return tl
}






export {size, init}