/*global $*/
/*global jQuery*/

$(document).ready(function() 
    {
        // do these tasks when the dom is ready.
        
        var animataeSys = "animated ";
        var animations = "zoomOutLeft zoomInUp jello shake bounceOut flipInX hide"
                       + "rubberBand";
        var prep;
        var animationPrep = 'webkitAnimationEnd ' 
                          + 'mozAnimationEnd ' 
                          + 'MSAnimationEnd '
                          + 'oanimationend ' 
                          + 'animationend ';
                          
        onBoot(showSidebar(),hideSidebar());
            
        /*this function will be used to hide the side navigation
        */
        //______________________________________________________
        function hideSidebar()
            {
                $("#closeIcon").on("click", function() 
                    {
                        var clicks = $(this).data('clicks');
                        if (clicks) 
                            {
                                // odd clicks
                                prep = true;
                                
                                $("#SideBar").removeClass(animations + animataeSys);
                                if (prep == true)
                                    {
                                        var animationDBON = "jello";
                                                          
                                        $("#SideBar").addClass(animationDBON);
                                        $("#SideBar").show().toggleClass(animataeSys);
                                    }
                            } 
                        else 
                            {
                                 // even clicks
                                 prep = false;
                                 
                                $("#SideBar").removeClass(animations + animataeSys);
                                if (prep == false)
                                    {
                                        var animationOFF = "bounceOut";
                                                          
                                        $("#SideBar").addClass(animationOFF);
                                        $("#SideBar").show().toggleClass(animataeSys);
                                    }
                            }
                            $(this).data("clicks", !clicks);
                            hideSidebar();
                    });
            }

        function showSidebar()
            {
                $("#sidbarIcon").on('click',function() 
                    {
                        var clicks = $(this).data('clicks');
                        if (clicks) 
                            {
                                // odd clicks
                                prep = true;
                                
                                $("#SideBar").removeClass(animations + animataeSys);
                                if (prep == true)
                                    {
                                        var animationDBON = "jello";
                                                          
                                        $("#SideBar").addClass(animationDBON);
                                        $("#SideBar").show().toggleClass(animataeSys);
                                    }
                            } 
                        else 
                            {
                                 // even clicks
                                 prep = false;
                                 
                                $("#SideBar").removeClass(animations + animataeSys);
                                if (prep == false)
                                    {
                                        var animationON = "flipInX";
                                                          
                                        $("#SideBar").addClass(animationON);
                                        $("#SideBar").show().toggleClass(animataeSys);
                                    }
                            }
                            $(this).data("clicks", !clicks);
                            showSidebar();
                    });
            }
        
        function onBoot()
            {
                $("#SideBar").removeClass("hide");
                $("#SideBar").removeClass("jello");
                $("#SideBar").removeClass("zoomOutLeft");
                $("#SideBar").removeClass("zoomInUp");
                $("#SideBar").addClass(animationPrep);
                $(".dropMen").addClass(animationPrep);
                $("#SideBar").hide().one("click", function()
                    {
                        $("#SideBar").toggleClass(animataeSys);
                    });
            }
    });


