$(".background-hero").on("mousemove", function(e) {
    $(".background-hero").css({'--y': -e.screenY / 100 + "px" });
    $(".background-hero").css({'--x': -e.screenX / 100 + "px" });
    $(".background-hero-element").css('transform', "scale(1.1) translate(" + (e.screenX-50) / 100 + "px, " + (e.screenY-50) / 100 + "px)");
});

$(document).ready(function() {
    setInterval(() => $(".box").each(
        function(){
            $( this ).css({
                'transform': "translate(" + Math.floor((Math.random() * 51) - 25) + "px, "+ Math.floor((Math.random() * 51) - 25) + "px)",
                'transition': "3s cubic-bezier("+Math.random()+","+Math.random()+","+Math.random()+","+Math.random()+")",
                'filter': "blur("+Math.floor((Math.random() * 5) - 1)+"px)"
            })
        })
    , 1000);
});