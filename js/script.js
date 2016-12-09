jQuery(document).ready(function () {

    $('#banner').click(function () {
        $("#content").animate({width: 'toggle'});

        $('#table').fadeIn(5000).delay(5000).css('display', "block");
    });

    function calculate() {

        var start = parseFloat($('#start').val());
        var percent = parseFloat($('#percent').val());

        var month1 = start + (start * percent) / 100;
        var month1Html = month1.toFixed(2);

        var month2 = month1 + (month1 * percent) / 100;
        var month2Html = month2.toFixed(2);

        var month3 = month2 + (month2 * percent) / 100;
        var month3Html = month3.toFixed(2);


        $('#month1').text(month1Html);
        $('#month2').text(month2Html);
        $('#month3').text(month3Html);

    }

    $('#start').change(function () {
        return calculate();
    });
    $('#percent').change(function () {
        return calculate();
    });


});