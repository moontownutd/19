(function($) {

    $(document).ready(function() {
        layout.init();
    });


    var layout = {
        btnGnb: null,

        init: function() {
            layout.btnGnb = $('.btn__menu');
            layout.loadLayout();

            $('#header').load(function() {
                layout.btnGnb.on('click', layout.gnbOnOff);
            });

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