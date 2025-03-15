$('.astor-menu-name span').each(function () {
	var me = $(this)
		, t = me.text().split(' ');
	me.html('<div>' + t.shift() + '</div> ' + t.join(' '));
});



if (localStorage.getItem('darkMode') === 'true') {
	$('#darkmode').addClass('toggled');
	$('body').addClass('darkmode');
}


$(function () {
	(function dark() {
		var $toggleDark = $('#darkmode');
		var $body = $('body');

		function dark() {
			if (!$body.hasClass('darkmode')) {
				$body.addClass('darkmode');
				$toggleDark.addClass('toggled');
				localStorage.setItem('darkMode', 'true');
			} else {
				$body.removeClass('darkmode');
				$toggleDark.removeClass('toggled');
				localStorage.removeItem('darkMode');
			}
		}

		$toggleDark.on('click', dark);
	})();
});
$(function () {
	(function menu() {
		var $toggleMenu = $('#menu');
		var $body = $('body');

		function menu() {
			if (!$body.hasClass('menu')) {
				$body.addClass('menu');
				$toggleMenu.addClass('toggled');
			} else {
				$body.removeClass('menu');
				$toggleMenu.removeClass('toggled');
			}
		}

		$toggleMenu.on('click', menu);
	})();
});




