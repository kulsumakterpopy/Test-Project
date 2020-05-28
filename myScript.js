var slideItem = document.querySelectorAll('.slider-item');
var salideLeft = document.querySelector('.slider-left');
var slideRight = document.querySelector('.slider-right');

var current = 0;

function reset(){
	for (var i = 0; i < slideItem.length; i++) {
		slideItem[i].style.display = 'none';
	}
}

function startSlide(){
	reset();
	slideItem[0].style.display ='block';
}

startSlide();

function leftSlide(){
	reset();
	slideItem[current - 1].style.display = 'block';
	current--;
}

function rightSlide(){
	reset();
	slideItem[current + 1].style.display = 'block';
	current++;
}

salideLeft.addEventListener('click', function(){
	if (current === 0) {
		current = slideItem.length;
	}
	leftSlide();
})

slideRight.addEventListener('click', function(){
	if (current === slideItem.length - 1) {
		current = -1;
	}
	rightSlide();
})