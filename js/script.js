/*var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPosition = 0;
var currentImage = 0;

function init(){
	ul = document.getElementById('slider');
	li_items = ul.children;
	imageNumber = li_items.length;
	imageWidth = li_items[0].children[0].clientWidth;
	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
	prev = document.getElementById('prev');
	next = document.getElementById('next');
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};
}


function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

window.onload = init;*/

var g = document;
var wrap = g.querySelector('.container');
var items = g.querySelector('.items');
var itemCount = g.querySelectorAll('.item').length;
var scroller = g.querySelector('.slider');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
  items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, itemCount - 1);
  setTransform();
}

window.addEventListener('resize', setTransform);


