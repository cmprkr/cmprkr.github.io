/*

document.addEventListener('DOMContentLoaded', function() {

			const slider = document.querySelector('#slider');
			slider.addEventListener('change', function() {
				if (slider.checked) {
					sliderOn();
				} else {
					sliderOff();
				};
			});

		});


function sliderOn() {
	document.querySelector('.box').style.backgroundColor = '#850A0A'
    const header = document.createElement('h1');
    const text = document.createTextNode('Switch Toggle: ON');
    header.appendChild(text);
    
    const previousHeader = document.querySelector('h1');
    if (previousHeader) {
        previousHeader.remove();
    }
    
    document.body.appendChild(header);
}

function sliderOff() {
	document.querySelector('.box').style.backgroundColor = 'lightblue'
    const header = document.querySelector('h1');
    if (header) {
    	header.remove();
  	}
}

window.addEventListener('scroll', function() {
  	var leftSidebar = document.querySelector('.left-sidebar');
  	var offsetTop = leftSidebar.offsetTop;
  
  	if (window.pageYOffset > offsetTop) {
   		leftSidebar.style.position = 'fixed';
    	leftSidebar.style.top = '0';
  	} else {
    	leftSidebar.style.position = 'absolute';
    	leftSidebar.style.top = offsetTop + 'px';
  	}
});

*/