<?php
    //retriving required files
    require("./assets/phpFiles/variables.php");
    require($__functionsPath);
    require($__formValidation);
?>
<!DOCTYPE html>
<!--[if IE 8 ]><html lang="en" class="ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en-US">
    <!--<![endif]-->
    <head>
        
        <title>
            Materiel Co Coworking Space | Created by: Exenreco Bell
        </title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#212145">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <script src="./assets/script/jquery-3.1.1.min.js"></script>
        <script src="./assets/script/backBone.js"></script>
        
        <link type="text/css" rel="stylesheet" href="./assets/style/reset.css">
        <link type="text/css" rel="stylesheet" href="./assets/style/jquery.mCustomScrollbar.css">
        <link type="text/css" rel="stylesheet" href="./assets/style/animate.css">
        <link type="text/css" rel="stylesheet" href="./assets/style/style.css">
        <link type="text/css" rel="stylesheet" href="./assets/style/wallpaper.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Start WOWSlider.com HEAD section -->
        <link rel="stylesheet" type="text/css" href="./assets/engine1/style.css">
        <!-- End WOWSlider.com HEAD section -->
        
    </head>
    <body>
        <!--
        Name: Exenreco Bell
        Class: Web360 part 1
        Date: 23/01/2017
        Assignment: Milestone 4
		File: pageHeader.php
        -->
         <ul class="cb-slideshow">
            <li><span>Image 01</span><div><h3>&nbsp;</h3></div></li>
            <li><span>Image 02</span><div><h3>&nbsp;</h3></div></li>
            <li><span>Image 03</span><div><h3>&nbsp;</h3></div></li>
            <li><span>Image 04</span><div><h3>&nbsp;</h3></div></li>
            <li><span>Image 05</span><div><h3>&nbsp;</h3></div></li>
            <li><span>Image 06</span><div><h3>&nbsp;</h3></div></li>
        </ul>
        
        <div id="wrapper">
            <header>
                <h1>Materièl - CO.</h1>
                <h2>Dream, Create, Experience...</h2>
                <div id="bannerArea">
                </div>
                <div id="bannerArea2">
                </div>
                <nav>
                    <ul>
                        <li id="sidbarIcon"><i class="material-icons">menu</i></li>
                        <li class="menu-item"><a href="./default.php">Home</a></li>
                        <li class="menu-item"><a>Main Page</a></li>
                        <li id="dropDown-menu"><a id="specialLink">Content</a>
                            <ul id="subMenu" class="animated flipInX">
                                <li><a>Content 2</a></li>
                                <li><a>Content 3</a></li>
                            </ul>
                        </li>
                        <li class="menu-item"><a>About Us</a></li>
                        <li class="menu-item"><a>FAQ</a></li>
                        <li class="menu-item"><a href="./contact.php">Contact Us</a></li>
                        <li class="mainSearch">
                            <input type="text" id="main-searchBox" name="searchBox" placeholder="Search"><button id="main-searchBtn"><i class="material-icons">search</i></button>
                        </li>
                    </ul>
                </nav>
            </header>
            
            
            <div id="SideBar" class="hide">
                <div id="sidebarHeader">
                    <h3>Quick Link Menu</h3><hr />
                    <div id="closeIcon">
                       <i class="material-icons">close</i>
                    </div>
                    <input type="text" id="sidebar-searchBox" name="sidebar-searchBox" placeholder="Search"><button id="sidebar-searchBtn"><i class="material-icons">search</i></button>
                </div>
                <div id="sidebarMain">
                    <ul>
                        <li><a href="./default.php">Home</a></li>
                        <li><a>Link Two</a></li>
                        <li><a>Link Three</a></li>
                        <li><a>Link Four</a></li>
                        <li><a>Link Five</a></li>
                        <li><a>Link Six</a></li>
                    </ul>
                    <div id="sidebarFooter">
                        <h3>
                            Find Us Here:
                        </h3>
                        <div id="iconSet1">
                            <span id="socail-1" class="sidebarSocialIcon"><img src="./assets/images/icons/facebook32x32.png" alt="find us on: facebook" title="facebook"></span>
                            <span id="socail-2" class="sidebarSocialIcon"><img src="./assets/images/icons/twitter32x32.png" alt="find us on: twitter" title="twitter"></span>
                            <span id="socail-3" class="sidebarSocialIcon"><img src="./assets/images/icons/flicker32x32.png" alt="find us on: flicker" title="flicker"></span>
                            <span id="socail-4" class="sidebarSocialIcon"><img src="./assets/images/icons/youtube32x32.png" alt="find us on: youtube.com" title="youtube"></span>
                        </div>
                        <div id="iconSet2">
                            <span id="socail-5" class="sidebarSocialIcon"><img src="./assets/images/icons/google+32x32.png" alt="find us on: google plus" title="google+"></span>
                            <span id="socail-6" class="sidebarSocialIcon"><img src="./assets/images/icons/vimeo32x32.png" alt="find us on: vimeo" title="Vimeo"></span>
                            <span id="socail-7" class="sidebarSocialIcon"><img src="./assets/images/icons/pinterest32x32.png" alt="find us on: pinterest" title="pinterst"></span>
                            <span id="socail-8" class="sidebarSocialIcon"><img src="./assets/images/icons/whatsApp32x32.png" alt="find us on: What's app" title="whats app"></span>
                        </div>
                    </div>
                </div>
            </div>