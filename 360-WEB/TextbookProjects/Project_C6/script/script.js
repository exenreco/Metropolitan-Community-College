"use strict";

    /*
      Name: Exenreco Bell
      Class: Web360 part 1
      Date: 01/10/2017
      Assignment: Chapter 6 Project 3
	  File: chapter06-project03.html
	*/

corsola();//calling the function corsola. User for enlargening thubnils 
function corsola()
    {
        
        var imgClass = document.querySelectorAll(".sysImages");//selecting all elements with the class sysImages
            
        for (var i=0; i < imgClass.length; i++)
            {
	           imgClass[i].addEventListener('mouseover', function()
	               {
	                   var node = document.createElement("img");//creating an image element
	                   var Sou = this.src;//souce url of the current image
	                   var seperator = Sou.split("/");//slpiting in to sustring to make src url
	                       node.src="./images/" + seperator[seperator.length-1];//produce new src url
	                       node.style="border:10px solid black;";//styling the new image tag created
	                       node.className='corsola';//assigning the new img tag a class name
	                       this.parentNode.appendChild(node);//appending the newly created element to the dom
	               });
	           imgClass[i].addEventListener('mouseleave', function()
	               {
	                   var imgClass = document.querySelectorAll(".corsola");//selecting all elements with class of corsola
	                   for (var i=0; i < imgClass.length; i++)
	                       {
                                imgClass[i].parentNode.removeChild(imgClass[i]);//remove  img element created above 
	                       }
	               });
            }
    }