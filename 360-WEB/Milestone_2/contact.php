<?php
    //including page header and processing file
    require("./assets/phpFiles/pageHeader.php");
?>

<main class="content-wrapper">
<div id="contentArea-1" >
    <div class="contentHeader">
        <h1>Email us:</h1>
    </div><br />
    <div class="contentAreaMain mCustomScrollbar" data-mcs-theme="insetdark-3">
        <fieldset id="required">
            <form method="POST" action="./process.php" name="contactForm" id="contactFormLayout" onsubmit="validate()">
                <i id="msg2">All fields are required <i style="color:red;">*</i></i><br /><br />
                <input type="text" id="email" name="email" placeholder="Email address:" required><br /><br />
                <input type="text" id="firstName" name="firstName" placeholder="First name:" required><br /><br />
                <input type="text" id="lastName" name="lastName" placeholder="Last name:" required><br /><br />
                <input type="text" id="subject" name="subject" placeholder="Subject:" required><br />
                <br /><br />
                
                <div id="textareaAlign">
                    <textarea  id="message" name="message" placeholder="Your message goes here:" required></textarea><br /><br />
                    <input type="submit" name="send" value="Send" id="sendBtn">
                </div>
            </form>
        </fieldset>
    </div>
    </div>
        <div id="contentArea-2">
            <div class="contentHeader">
                <h1>General Contact Info:</h1>
            </div><br /><br /><br />
            <div class="contentAreaMain mCustomScrollbar" data-mcs-theme="insetdark-3">
                <div class="sectionWrapper"><br />
                    <ol>
                        <li><span class="bold">Phone</span>:<br /> 402 - 111 - 1111</li>
                        <li><span class="bold">Email</span>:<br /> materiel_co@materiel.com</li>
                        <li><span class="bold">Address</span>: <br />00 address, suite 00, Omaha NE, 60000.</li>
                    </ol>
                    <ol>
                        <li><span class="bold">Social Media</span>:<br /><br />
                            <ol>
                                <li>Facebook.com/coSpace</li>
                                <li>twitter.com/coSpace</li>
                                <li>plus.google.com/coSpace</li>
                                <li>youtube.com/coSpace</li>
                                <li>vimeo.com/coSpace</li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
            </div>
                <div id="contentArea-3">
                    <div class="contentHeader">
                        <h1>Get Directions:</h1>
                    </div><br />
                    <div class="contentAreaMain mCustomScrollbar" data-mcs-theme="insetdark-3">
                        <span>Geo locate us with google maps:</span><br /><br />
                        <div id="map"><br /></div>
                    </div>
                </div>
                
<?php 
    //including document footer
    require($documentFooter);
?>
<script src="./assets/script/validation.js"></script>
<script src="./assets/script/maps.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC48MTQg36wL2if4NoDyD7CZdg5tkFG7YY&callback=initMap"></script>