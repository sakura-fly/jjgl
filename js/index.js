

$(document).ready(function(){
        $(".sblx_ul ul li a").click(function(){
            $(".sblx_ul ul li a").removeClass("active");
			$(this).addClass("active");
        });
	});