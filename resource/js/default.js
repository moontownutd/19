(function($) {

    $(document).ready(function() {
        layout.init();
    });


    var layout = {
        bdy: null,
        btnGnb: null,

        init: function() {
            layout.btnGnb = $('.btn__menu');
            layout.loadLayout();
            layout.bdy.on('click', '.btn__menu', layout.gnbOnOff);
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