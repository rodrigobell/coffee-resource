$(function($) {
    $(document).ready(function() {
        var rotation = .5;
        var swingtime = 1800;
 
        function initPend(a) {
            $(a).animate({rotate: rotation}, 0, function () {
                $(a).css("display", "block");
                rotation *= -1;
                pendulumSwing(a);
            });
        }
 
        function pendulumSwing(a) {
            $(a).animate({rotate: rotation},swingtime, "swing", function(){
                 rotation *= -1;
                 pendulumSwing(a);
            });
        }
 
        initPend('#navLeft');
		initPend('#navCenter');
		initPend('#navRight');
    });
});

$(function() {
	$("#navRecipes").mouseenter(function() {
		bounceAnimate("#navRecipes");
	});
	$("#navBeans").mouseenter(function() {
		bounceAnimate("#navBeans");
	});
	$("#navLatteArt").mouseenter(function() {
		bounceAnimate("#navLatteArt");
	});
});

function bounceAnimate(navItem) {
	$(navItem).animate({top: "-=2px"}, 100)
			  .animate({top: "+=4px"}, 100)
			  .animate({top: "-=2px"}, 100);
}