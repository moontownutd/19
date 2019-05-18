(function($) {

    $(document).ready(function() {
        layout.init();
    });


    var layout = {
        btnGnb: null,

        init: function() {
            layout.btnGnb = $('.btn__menu');

            layout.btnGnb.on('click', layout.gnbOnOff);
            layout.loadLayout();
        },
        loadLayout: function() {
            $("#header").load("../layout/header.html");
            $("#footer").load("../layout/footer.html");
        },
        gnbOnOff: function() {
            $('body').toggleClass('gnb--open');
        }
    }

}(jQuery));