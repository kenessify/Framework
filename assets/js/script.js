/**
 * Created by mcwil on 04/03/2016.
 */
//    Top Toggle
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#topToggle').fadeIn(3000);
    } else {
        $('#topToggle').fadeOut();
    }
});
$(document).ready(function () {
    var divPosition = $('#wrapper').offset().top;
    $('#topToggle').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500);
        return false;
    });
});
//    Menu
$('#menuClose,#menuOpen').click(function () {
    $('#menu,#menuClose,#menuOpen').toggle('slow');
});
//    Photography
$('#photographyLink').click(function () {
    $('#photography,#clsPhotography').fadeIn('slow', function () {
        $('#design,#clsDesign,#graphics,#clsGraphics,#default').hide('slow');
    })
});
$('#clsPhotography').click(function () {
    $('#photography,#clsPhotography').hide('slow', function () {
        $('#default').fadeIn('slow');
    })
});

//    Design
$('#designLink').click(function () {
    $('#design,#clsDesign').fadeIn('slow', function () {
        $('#photography,#clsPhotography,#graphics,#clsGraphics,#default').hide('slow');
    })
});
$('#clsDesign').click(function () {
    $('#design,#clsDesign').hide('slow', function () {
        $('#default').fadeIn('slow');
    })
});

//    Graphics
$('#graphicsLink').click(function () {
    $('#graphics,#clsGraphics').fadeIn('slow', function () {
        $('#photography,#clsPhotography,#design,#clsDesign,#default').hide('slow');
    })
});
$('#clsGraphics').click(function () {
    $('#graphics,#clsGraphics').hide('slow', function () {
        $('#default').fadeIn('slow');
    })
});

$(document).ready(function () {
    var divPosition = $('#thirdContainer').offset().top;
    $('#portfolioLink').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500, function () {
            $('#menu,#menuClose').hide('slow', function () {
                $('#menuOpen').show();
            });
        });
        return false;
    });
});
$(document).ready(function () {
    var divPosition = $('#forthContent').offset().top;
    $('#wioLink').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500, function () {
            $('#menu,#menuClose').hide('slow', function () {
                $('#menuOpen').show();
            });
        });
        return false;
    });
});
$(document).ready(function () {
    var divPosition = $('#fifthContent').offset().top;
    $('#aboutLink').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500, function () {
            $('#menu,#menuClose').hide('slow', function () {
                $('#menuOpen').show();
            });
        });
        return false;
    });
});
$(document).ready(function () {
    var divPosition = $('#sixthContent').offset().top;
    $('#skillLink').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500, function () {
            $('#menu,#menuClose').hide('slow', function () {
                $('#menuOpen').show();
            });
        });
        return false;
    });
});
$(document).ready(function () {
    var divPosition = $('#seventhContent').offset().top;
    $('#contactLink').click(function () {
        $('html, body').animate({scrollTop: divPosition}, 1500, function () {
            $('#menu,#menuClose').hide('slow', function () {
                $('#menuOpen').show();
            });
        });
        return false;
    });
});

$(document).ready(function () {
    $('#submit').click(function () {
        $.get('sub-mail.php',
            {
                email: $('#mail').val(),
                name: $('#name').val(),
                msg: $('#msg').val()
            },
            function () {
                $('#contact').fadeOut(2000, function () {
                    $('#success').show('slow');
                });
            });
    });
});