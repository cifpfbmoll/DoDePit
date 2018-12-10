var next = false;
/*Parallax gianlucaguarini*/
var p = new Parallax('.parallax', {
    offsetYBounds: 50,
    intensity: 50,
    center: 0.9,
    safeHeight: 0.15
}).init();

$(document).ready(function () {
    /*Modal*/
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    $("#maps").click(function () {
        window.open("https://www.google.es/maps/place/Pla%C3%A7a+d'Am%C3%A8rica,+07100+S%C3%B3ller,+Illes+Balears/@39.7683084,2.7092185,17z/data=!3m1!4b1!4m5!3m4!1s0x1297e8b90df488b5:0xdfa7a37c175ac21d!8m2!3d39.7683084!4d2.7114072");
    });
});