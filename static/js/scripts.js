$(document).ready(function () {
    randomBackground();
});

function randomBackground() {
    var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg'
        , 'bg10.jpg', 'bg11.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg', 'bg16.jpg', 'bg17.jpg', 'bg18.jpg'
        , 'bg19.jpg', 'bg20.jpg'];
    $('#background-image').css({'background': 'url(../../static/images/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat 25% 25% / cover'});
    console.log('Applying new background to webpage');
}