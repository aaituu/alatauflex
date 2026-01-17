$(document).ready(function () {
    var $blks = $(".tpl_cell").find(" > .blk, .container_cell > .blk");
    if ($blks.length === 0) {
        return;
    }
    var $wnd = $(window);

    function randomFade (min, max) {
        var random = min + Math.random() * (max - min);
        return Math.round(random);
    }

    function blocksFade() {
        var minStep = 350;
        var maxStep = 2 * minStep;
        var i = $blks.length;

        while (i--) {
            var $blk = $blks.eq(i);
            var topOffset = $blk.offset().top;
            var curScrollPosition = $wnd.scrollTop() + window.innerHeight + 10;
            if (topOffset < curScrollPosition) {
                var delay = randomFade(minStep, maxStep);

                $blk.addClass('microanimation__after');
                $blk.css('transition-delay', delay + 'ms');
            }
        }
    }

    $blks.addClass('microanimation__before');
    $('.section_menu').scroll(blocksFade);
    $wnd.scroll(blocksFade);
    blocksFade();
});
