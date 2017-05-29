(function ($) {
	$.fn.emailValidator = function () {
		var regex = /\w+@\w{2,10}\.\w+(\.\w{2,5})?/
		// your code here
		return regex.test(this.val());

	}
})(jQuery)
