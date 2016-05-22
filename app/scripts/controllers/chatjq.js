
Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
    var time = this.toLocaleTimeString();

    return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]) + ' ' + time; // padding
};

function sendMsg() {
    var msg = $('#chat-input').val();

    if(msg.trim()) {
        var d = new Date();
        var now = d.yyyymmdd();

        $('#chat-list').prepend('<li class="clearfix">'+
            '<div class="chat-body clearfix">'+
            '<div>'+
            '<strong class="primary-font">John Doe:</strong>'+
            '<small class="pull-right text-muted">'+
            '<i class="fa fa-clock-o fa-fw"></i> '+ now +
            '</small>'+
            '</div>'+
            '<p>'+msg+
            '</p>'+
            '</div>'+
            '</li>');

        $('#chat-input').val("");
    }

}

$(document).on('click', '#btn-chat', function(){

    sendMsg();
});

$(document).on('keypress','#chat-input', function (e) {
    if ( event.which == 13 ) {
        sendMsg();
    }
});

