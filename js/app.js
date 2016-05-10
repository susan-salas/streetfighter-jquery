$(document).ready(function () {
    $('.ryu-still').show();
    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function () {
                        $(this).hide();
                        $(this).css('left', '520px');
                    }
                );
            // play hadouken sound
            // show hadouken and animate it to the right of the screen
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-still').show();
            // ryu goes back to his ready position
        });

});


$(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').show();
            playCool()
        }
    })
    .keyup(function (e) {
        if (e.which == 88) {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
            $('.ryu-cool').hide();
            $('#cool-sound')[0].pause();
        }
    });

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}


function playCool() {
    $('#cool-sound')[0].play();
}
