function valid_email_pattern(string){
    if (string.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
        return false;
    }
    return true;
}

function ajax_common_result_handler(ret_code){
    if (ret_code === "success"){

    } else if (ret_code === "failure"){

    }
}
function get_csrf_token() {
	return get_cookie("csrftoken");
}
$(document).ajaxError(function(event, xhr, ajaxOptions, thrownError) {

});
$( document ).ajaxComplete(function( event, xhr, settings ) {

});
$( document ).ajaxSend(function( event, xhr, settings ) {
    xhr.setRequestHeader("X-CSRFToken", get_csrf_token());
});
function get_cookie(name) {
	var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}