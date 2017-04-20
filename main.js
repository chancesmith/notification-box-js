// vars
var link = 'http://attheco.com',
    image = 'http://www.sodiumhalogen.com/up_b/thecotoberfestpopup_960-iz9HkwmEZS.png';

function showNotificationBox(link, image) {
    /* create the promo box div */
	if ($.cookie('theCO-notify') === null || $.cookie('theCO-notify') === ""
    || $.cookie('theCO-notify') === "null" || $.cookie('theCO-notify') === undefined){ //no cookie
        $('body').prepend("<div id='notification-bar' style='display:none; position: fixed; z-index: 9999;bottom:5px;right:5px;'><span id='close' style='position: absolute;top: -2px;right: 0px;opacity: .3;font-family: helvetica;font-size: 12px;padding: 5px;'>x</span><a href='" + link + "'><img src='" + image + "'/></a></div>");

        /* animate the promo */
        $('#notification-bar').slideDown(1200);
    } else {
    	console.log('cookie is set, no ad this time');
    }
}

//close ad and set cookie
$('span').click(function () {
	$(this).parent().slideUp();
    /* set cookie date */
    var date = new Date();
	var days = 3;
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    /*set cookie*/
	$.cookie("theCO-notify", "close", { expires: date });
});

showNotificationBox(link, image);