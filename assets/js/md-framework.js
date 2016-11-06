/**
 * Created by McWilliam on 15/04/2016.
 */
$(document).ready(function(){

    //Menu
    (function($) {
        $('#header__icon').click(function(e){
            e.preventDefault();
            $('body').toggleClass('with--sidebar');
        });

        $('#site-cache').click(function(e){
            $('body').removeClass('with--sidebar');
        });

        $('a').click(function(e){
            $('body').removeClass('with--sidebar');
        });
    })(jQuery);
    //Menu

});
