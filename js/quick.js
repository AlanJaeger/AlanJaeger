/*script carousel*/

$("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $(".carousel-item")
                    .eq(i)
                    .appendTo(".carousel-inner");
            } else {
                $(".carousel-item")
                    .eq(0)
                    .appendTo($(this).find(".carousel-inner"));
            }
        }
    }
});

$('.carousel').carousel({
    interval: 0
});

/*script footer*/

$(function() {
    var tabs = $('#features > nav a');
    var tabsContent = $('#features > article > section');

    tabs.click(function(e) {
        e.preventDefault();

        var that = $(this);

        tabs.removeClass('is-selected');
        that.addClass('is-selected');
        tabsContent.removeClass('is-selected');

        tabsContent
            .filter((i, tab) => $(tab).data('id') === that.data('id'))
            .addClass('is-selected');
    });
});