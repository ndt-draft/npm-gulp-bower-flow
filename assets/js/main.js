/**
 * Main script
 */
$(document).ready(function () {
    var testClass = function (prop1, prop2) {
        this.prop1 = 1;
        this.prop2 = 2;
        this.init();
    };

    testClass.prototype.init = function () {
        this.bindEvents();
    };

    testClass.prototype.bindEvents = function () {
    };

    var a = new testClass();
});

$(document).ready( function() {
    var $grid = $('.grid').masonry({
        itemSelector   : '.grid-item',
        columnWidth    : '.grid-sizer',
        percentPosition: true
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});
