$(function () {

	var $time = $('#time'),
	$btn = $('#btn'),
	$replay = $('#replay'),
	$message = $('#message'),
	status = 'init',
	time = 5000,
	prepareSecond = 3,
	count = 0,
	$mcover = $('#mcover');


    function init() {
    	status = 'init';
    	$btn.attr('class','button button-primary button-circle');
    	count = 0;
    	time = 5000;
    	$time.html((time / 1000).toFixed(3) + ' seconds');
    	$btn.html('Ready?');
    	hideCover();
    }

    init();

    $btn.on('touchstart click', function(event) {
    	 if (event.type == "touchstart") {
              $(this).off('click');
          }
    	switch (status) {
    		case 'init':
    		    prepare();
    		    break;
    		case 'preparing':
    		    break;    
    		case 'started':
    		    $btn.html(++count);
    		    break;
    	}
    });

    function prepare() {
    	status = 'preparing';
    	count = 0;
    	$btn.html('3...');

    	var second = prepareSecond;
    	var prepareTimer = setInterval(function () {
    		second--;
    		if (second === 0) {
    			$btn.html('Go!');
    			clearInterval(prepareTimer);
    			start();
    		} else {
    			$btn.html(second + '...');
    		}
    	}, 1000);
    }

    function start() {
	    status = 'started';
	    var counter = setInterval(timer, 7),
	    curTime;


	function timer() {
		time -= 7;
		if (time <= 4993) {

	    $btn.attr('class','button button-action button-circle');
	    
	}

		if (time <= 0) {
			time = 0;
			clearInterval(counter);
			stop();
		}

		curTime = (time / 1000).toFixed(3);
		if (curTime === '0.000') {
			$time.html("Time is up!");
		} else {
			$time.html(curTime + ' seconds');
		}
	}
}

    
    function stop() {
    	status = 'stopped';
    	$message.html('You poked ' + count + ' times in 5 seconds. ' + titles(count));
    	showCover();
    } 

    function titles(count) {
    	if (count > 50) {
    		return 'Hello E.T., your finger speed tells us you are not a human being'
    	}
    	if (count > 45) {
    		return 'Be gentle with your computer!'
    	}
    	if (count > 40) {
    		return 'Your finger speed is great!'
    	}
    	if (count > 30) {
    		return 'Keep practice!'
    	}
    	if (count > 20) {
    		return 'I\'d say a little girl can beat you!'
    	}
    	if (count > 10) {
     
    		//$('.content').append('<a id=\"prize\" href=\"https://www.youtube.com/watch?v=XoNbmWWEk1A\">As a thank you for playing this game, we got a little prize for you!</a>')
    	    return 'You need to focus. Try your best!'
    	}
    	else {
    		return 'Oh my God! You don\'t know how to use your finger?'
    	}
    }


    function showCover() {
    	$mcover.css("display", "block");
    }

    function hideCover() {
    	$mcover.css("display", "none");
    }

    $replay.click(init);

});