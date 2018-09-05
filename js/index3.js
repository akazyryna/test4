(function ($) {
    $(document).ready(function () {
        $('#list').on('click', 'a', function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });


    });
})(jQuery);