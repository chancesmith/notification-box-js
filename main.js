/*
///////
// Notification Box
// @link https://github.com/chancesmith/notification-box-js/edit/master/main.js
///////
 */
// vars
var link = 'http://attheco.com',
    image = 'http://www.sodiumhalogen.com/up_b/thecotoberfestpopup_960-iz9HkwmEZS.png',
    cookieTitle = 'theCO-notify';

function showNotificationBox(link, image) {
    /* create the promo box div */
	if ($.cookie(cookieTitle) === null || $.cookie(cookieTitle) === ""
    || $.cookie(cookieTitle) === "null" || $.cookie(cookieTitle) === undefined){ //no cookie
        $('body').prepend("<div id='notification-box' style='display:none; position: fixed; z-index: 9999;bottom:5px;right:5px;'><span id='close' style='position: absolute;top: -2px;right: 0px;opacity: .3;font-family: helvetica;font-size: 12px;padding: 5px;'>x</span><a href='" + link + "'><img src='" + image + "'/></a></div>");

        /* animate the promo */
        $('#notification-box').slideDown(1200);
    } else {
    	console.log('cookie is set, no ad this time');
    }
}

// build the box
showNotificationBox(link, image);

//close ad and set cookie
$('span#close').click(function () {
	$(this).parent().slideUp();
    /* set cookie date */
    var date = new Date();
	var days = 3;
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    /*set cookie*/
	$.cookie(cookieTitle, "close", { expires: date });
});