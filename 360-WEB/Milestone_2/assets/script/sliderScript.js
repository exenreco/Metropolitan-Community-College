/*global $*/
/*global jQuery*/

$(document).ready(function() 
	{
		$("#slider").on('mouseenter', function()
		{
			$('#controllPanel').fadeIn(500).toggleClass('hide');
		});
		$("#slider").on('mouseleave', function()
		{
			$('#controllPanel').toggleClass('hide').fadeOut(500);
		});
		
		
		//menu icon effects code
		var animataeSysICON = "animated ";
        var animationsICON = "zoomOutLeft zoomInUp jello shake bounceOut flipInX hide flip"
                       + "rubberBand";
        var prepIcon;
        var animationPrepICON = 'webkitAnimationEnd ' 
                          + 'mozAnimationEnd ' 
                          + 'MSAnimationEnd '
                          + 'oanimationend ' 
                          + 'animationend ';
                          
		menBoot(resetICON(),animateICON());
		
		function animateICON()
			{
					$(".material-icons").on("click", function() 
                    {
                        var clicks = $(this).data('clicks');
                        if (clicks) 
                            {
                                // odd clicks
                                $(".material-icons").removeClass(animationsICON + animataeSysICON);
                                if (prepIcon == true)
                                    {
                                        var animationDBON = "jello";
                                                          
                                        $(".material-icons").addClass(animationDBON);
                                        $(".material-icons").show().toggleClass(animataeSysICON);
                                    }
                            } 
                        else 
                            {
                                 // even clicks
                                 prepIcon = false;
                                 
                                $(".material-icons").removeClass(animationsICON + animataeSysICON);
                                if (prepIcon == false)
                                    {
                                        var animationOFF = "flip";
                                                          
                                        $(".material-icons").addClass(animationOFF);
                                        $(".material-icons").show().toggleClass(animataeSysICON);
                                    }
                            }
                            $(this).data("clicks", !clicks);
                            animateICON();
                    });
			}
		function resetICON()
            {
                $(".material-icons").on('click',function() 
                    {
                        var clicks = $(this).data('clicks');
                        if (clicks) 
                            {
                                // odd clicks
                                prepIcon = true;
                                
                                $(".material-icons").removeClass(animationsICON + animataeSysICON);
                                if (prepIcon == true)
                                    {
                                        var animationDBON = "jello";
                                                          
                                        $(".material-icons").addClass(animationDBON);
                                        $(".material-icons").show().toggleClass(animataeSysICON);
                                    }
                            } 
                        else 
                            {
                                 // even clicks
                                 prepIcon = false;
                                 
                                $(".material-icons").removeClass(animationsICON + animataeSysICON);
                                if (prepIcon == false)
                                    {
                                        var animationON = "flip";
                                                          
                                        $(".material-icons").addClass(animationON);
                                        $(".material-icons").show().toggleClass(animataeSysICON);
                                    }
                            }
                            $(this).data("clicks", !clicks);
                            resetICON();
                    });
            }
            
        function menBoot()
            {
                $(".material-icons").removeClass("hide");
                $(".material-icons").removeClass("jello");
                $(".material-icons").removeClass("flip");
                $(".material-icons").removeClass("zoomOutLeft");
                $(".material-icons").removeClass("zoomInUp");
                $(".material-icons").addClass(animationPrepICON);
                $(".material-icons").addClass(animationPrepICON);
            }
		
	});