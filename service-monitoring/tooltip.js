jQuery(function () {
    /*  Tooltip */
    jQuery('body').delegate(
            '.link_popup_volante',
            'mouseenter',
            function (e) {
                func_displayPOPUP(e);
            }
    );
    jQuery('body').delegate(
            '.link_popup_volante',
            'mouseleave',
            function (e) {
                func_hidePOPUP(e);
            }
    );

    var func_displayPOPUP = function (event) {
        var self = event.currentTarget;
        var content = $(self).find('span.popup_content').html();

        var popupVolante = jQuery('.popup_volante');

        popupVolante.append('<div class="popup_content" style="max-width: 250px; padding: 5px">' + $(self).find('span').html() + '</div>');

        var top = event.clientY + 0;
        var contentHeight = popupVolante.height();

        if ((window.innerHeight - (top + contentHeight)) < 25) {
            top = event.clientY - contentHeight;
        }

        popupVolante.css('left', event.clientX + 15);
        popupVolante.css('top', top);
        popupVolante.show();
    };

    var func_hidePOPUP = function (event) {
        jQuery('.popup_volante .popup_content').remove();
        jQuery('.popup_volante').hide();
        jQuery('.popup_volante').css('width', 'auto');
        jQuery('.popup_volante').css('height', 'auto');
    };
});