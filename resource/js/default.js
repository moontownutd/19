$(document).ready(function() {
    layout.init();
});


var layout = {
    btnGnb: null,

    init: function() {
        layout.btnGnb = $('.btn__menu');

        layout.btnGnb.on('click', layout.gnbOnOff);
    },
    gnbOnOff: function() {
        $('body').toggleClass('gnb--open');
    }
}