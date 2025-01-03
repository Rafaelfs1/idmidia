$(document).ready(function () {
    $('#mobile-btn').on('click', function  () {
        $('.menu').toggleClass('active'); // add or remove 'active' class
        $('#top').find('i').toggleClass('fa-x'); // add or remove 'active' class

    });
});
