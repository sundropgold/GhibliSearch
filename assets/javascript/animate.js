// $(document).ready(function(){
	
// 	// jquery plug in that retypes text delayed
// 	$.fn.retype = function(delay) {
// 	    var el = this,
// 	        t = el.text(),
// 	        c = t.split(''),
// 	        l = c.length,
// 	        i = 0;
// 	    delay = delay || 100;
// 	    el.empty();
// 	    var interval = setInterval(function(){
// 	        if(i < l) el.text(el.text() + c[i++]); 
// 	        else clearInterval(interval);
// 	    }, delay);
// 	};

// 	// retype the navbar text
// 	$('.navbar-text').retype();

// });

var items = $('.ghibliDiv');

for (var i = 0; i < items.length; i++) {
	items.attr("class","slideUp");
}