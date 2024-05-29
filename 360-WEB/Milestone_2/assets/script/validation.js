"use strict";
    
    /* 
        storing html elements by id
        coaching the DOM
    */
    var formTitle = 'contactForm';
    var email = 'email';//email field
    var fName = 'firstName';//first name field
    var lName = 'lastName';//last name field
    var subject = 'subject';//subjsect field
    var msg = 'message';//message field
    var subForm = 'sendBtn';//submit button
    
    //error messages that is alerted to users
    var er_msg = 'All fields are required!';
    
    
    var goodValue = '0.01em solid #00cc99';
    var badValue = '0.01em solid orange';
    
    //collecting input objects
    var getEmail = document.forms[formTitle][email];
    var getFname = document.forms[formTitle][fName];
    var getLname = document.forms[formTitle][lName];
    var getSubj= document.forms[formTitle][subject];
    var getMsg = document.forms[formTitle][msg];
    
    
    //::form button::not used just selected
    var getSubform = document.forms[formTitle][subForm];
    
        //setting event listeners
        getEmail.addEventListener('blur', emailVerify, true);
        getFname.addEventListener('blur', fNameVerify, true);
        getLname.addEventListener('blur', lNameVerify, true);
        getSubj.addEventListener('blur', subjVerify, true);
        getMsg.addEventListener('blur', msgVerify, true);
        getSubform.addEventListener('click', validate, true);
        
        function validate() 
            {
                checkInputData();
               //email validation
               /*if(((getEmail.value.trim(this) == '')&&(getFname.value.trim(this) == '')&&(getLname.value.trim(this) == '')&&(getSubj.value.trim(this) == '')&&(getMsg.value.trim(this) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','jello');
                        document.getElementById('required').classList.remove('animated','shake');
                        alert(er_msg);
                        console.log('All fields are required!');
                        animateAll();
                        
                        //document.getElementById('required').classList.remove('animated');
                        
                        getEmail.style.border = badValue;
                        getFname.style.border = badValue;
                        getLname.style.border = badValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        getEmail.focus();
                        getFname.focus();
                        getLname.focus();
                        getSubj.focus();
                        getMsg.focus();
                        console.log('ERROR-01: no data was entered!');
                        return false;
                    }
                else
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        alert(er_msg);
                        console.log('ERROR-02: the field listed below was missed!');
                        animateSome();
                            
                            if(getEmail.value.trim(this) == '')
                            {
                                getEmail.style.border = badValue;
                                getEmail.focus();
                                console.log(email);
                                return false;
                            }
                            if (getFname.value.trim(this) == '')
                            {
                                getFname.style.border = badValue;
                                getFname.focus();
                                console.log(fName);
                                return false;
                            }
                            if (getLname.value.trim(this) == '')
                            {
                                getLname.style.border = badValue;
                                getLname.focus();
                                console.log(lName);
                                return false;
                            }
                            if (getSubj.value.trim(this) == '')
                            {
                                getSubj.style.border = badValue;
                                getSubj.focus();
                                console.log(subject);
                                return false;
                            }
                            if (getMsg.value.trim(this) == '')
                            {
                                getMsg.style.border = badValue;
                                getMsg.focus();
                                console.log(msg);
                                return false;
                            }
                    }*/
            }
        
        //event handler functions
        function emailVerify()
            {
                if (getEmail.value.trim(getEmail.value) !='')
                    {
                        getEmail.style.border = goodValue;
                        return true;
                    }
                else
                    {
                        getEmail.style.border = badValue;
                        return false;
                    }
            }
        function fNameVerify()
            {
                if (getFname.value.trim(getFname.value) !='')
                    {
                        getFname.style.border = goodValue;
                        getFname.innerHTML = '';
                        return true;
                    }
                else
                    {
                        getFname.style.border = badValue;
                        return false;
                    }
            }
        function lNameVerify()
            {
                if (getLname.value.trim(getLname.value) !='')
                    {
                        getLname.style.border = goodValue;
                        getLname.innerHTML = '';
                        return true;
                    }
                else
                    {
                        getLname.style.border = badValue;
                        return false;
                    }
            }
        function subjVerify()
            {
                if (getSubj.value.trim(getSubj.value) !='')
                    {
                        getSubj.style.border = goodValue;
                        getSubj.innerHTML = '';
                        return true;
                    }
                else
                    {
                        getSubj.style.border = badValue;
                        return false;
                    }
            }
        function msgVerify()
            {
                if (getMsg.value.trim(getMsg.value) !='')
                    {
                        getMsg.style.border = goodValue;
                        getMsg.innerHTML = '';
                        return true;
                    }
                else
                    {
                        getMsg.style.border = badValue;
                        return false;
                    }
            }
            
        function animateAll()
            {
                if (document.getElementById('required').classList == 'animated jello')
                    {
                        var animatedOff = document.getElementById('required').classList.remove('animated','jello');
                        var animatedOff2 = document.getElementById('required').classList.remove('animated','shake');
                            animatedOff;
                            animatedOff2;
                    }
                else
                    {
                        var animate = document.getElementById('required');
                            animate.className ="animated jello";
                            animate.style.backgroundColor = "#31319b";
                                            
                        var msg2 = document.getElementById('msg2');
                            msg2.style.color = "orange";
                            msg2.style.fontSize = "1.2em";
                            msg2.style.paddingBottom ="1.2em";
                    }
                    
            }
        function animateSome()
            {
                if (document.getElementById('required').classList == 'animated jello')
                    {
                        var animatedOff = document.getElementById('required').classList.remove('animated','jello');
                        var animatedOff2 = document.getElementById('required').classList.remove('animated','shake');
                            animatedOff;
                            animatedOff2;
                    }
                else
                    {
                        var erStyle = document.getElementById('required');
                                    erStyle.className ="animated shake";
                                    erStyle.style.backgroundColor = "#31319b";
                                    
                        var msg2 = document.getElementById('msg2');
                            msg2.style.color = "orange";
                            msg2.style.fontSize = "1.2em";
                            msg2.style.paddingBottom ="1.2em";
                    }
            }
            
            
            
            
            
            
            
            
        function checkInputData()
            {
                if(((getEmail.value.trim(getEmail.value) == '')&&(getFname.value.trim(getFname.value) == '')&&(getLname.value.trim(getLname.value) == '')&&(getSubj.value.trim(getSubj.value) == '')&&(getMsg.value.trim(getMsg.value) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','jello');
                        document.getElementById('required').classList.remove('animated','shake');
                        alert(er_msg);
                        console.log('All fields are required!');
                        animateAll();
                        
                        //document.getElementById('required').classList.remove('animated');
                        getEmail.style.border = badValue;
                        getFname.style.border = badValue;
                        getLname.style.border = badValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        getEmail.focus();
                        getFname.focus();
                        getLname.focus();
                        getSubj.focus();
                        getMsg.focus();
                        console.log('ERROR-01: no data was entered!');
                        return false;
                    }
                else if(((getEmail.value.trim(getEmail.value) != '')&&(getFname.value.trim(getFname.value) == '')&&(getLname.value.trim(getLname.value) == '')&&(getSubj.value.trim(getSubj.value) == '')&&(getMsg.value.trim(getMsg.value) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        alert(er_msg);
                        console.log('ERROR-02: the field listed below were missed!');
                        animateSome();
                        
                        console.log(fName + '\n' + lName + '\n' + subject + '\n' + msg);
                        getEmail.style.border = goodValue;
                        getFname.style.border = badValue;
                        getLname.style.border = badValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        getFname.focus();
                        getLname.focus();
                        getSubj.focus();
                        getMsg.focus();
                        return false;
                        
                            /*if(getEmail.value.trim(this) == '')
                            {
                                getEmail.style.border = badValue;
                                getEmail.focus();
                                console.log(email);
                                return false;
                            }
                            if (getFname.value.trim(this) == '')
                            {
                                getFname.style.border = badValue;
                                getFname.focus();
                                console.log(fName);
                                return false;
                            }
                            if (getLname.value.trim(this) == '')
                            {
                                getLname.style.border = badValue;
                                getLname.focus();
                                console.log(lName);
                                return false;
                            }
                            if (getSubj.value.trim(this) == '')
                            {
                                getSubj.style.border = badValue;
                                getSubj.focus();
                                console.log(subject);
                                return false;
                            }
                            if (getMsg.value.trim(this) == '')
                            {
                                getMsg.style.border = badValue;
                                getMsg.focus();
                                console.log(msg);
                                return false;
                            }*/
                    }
                else if(((getEmail.value.trim(getEmail.value) != '')&&(getFname.value.trim(getFname.value) != '')&&(getLname.value.trim(getLname.value) == '')&&(getSubj.value.trim(getSubj.value) == '')&&(getMsg.value.trim(getMsg.value) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        alert(er_msg);
                        console.log('ERROR-02: the field listed below were missed!');
                        animateSome();
                        
                        console.log(lName + '\n' + subject + '\n' + msg);
                        getEmail.style.border = goodValue;
                        getFname.style.border = goodValue;
                        getLname.style.border = badValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        getLname.focus();
                        getSubj.focus();
                        getMsg.focus();
                        return false;
                    }
                else if(((getEmail.value.trim(getEmail.value) != '')&&(getFname.value.trim(getFname.value) != '')&&(getLname.value.trim(getLname.value) != '')&&(getSubj.value.trim(getSubj.value) == '')&&(getMsg.value.trim(getMsg.value) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        alert(er_msg);
                        console.log('ERROR-02: the field listed below were missed!');
                        animateSome();
                        
                        console.log(subject + '\n' + msg);
                        getEmail.style.border = goodValue;
                        getFname.style.border = goodValue;
                        getLname.style.border = goodValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        getSubj.focus();
                        getMsg.focus();
                        return false;
                    }
                else if(((getEmail.value.trim(getEmail.value) != '')&&(getFname.value.trim(getFname.value) != '')&&(getLname.value.trim(getLname.value) != '')&&(getSubj.value.trim(getSubj.value) != '')&&(getMsg.value.trim(getMsg.value) == '')))
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        alert(er_msg);
                        console.log('ERROR-02: the field listed below were missed!');
                        animateSome();
                        
                        console.log(msg);
                        getEmail.style.border = goodValue;
                        getFname.style.border = goodValue;
                        getLname.style.border = goodValue;
                        getSubj.style.border = goodValue;
                        getMsg.style.border = badValue;
                        getMsg.focus();
                        return false;
                    }
                else if(((getEmail.value.trim(getEmail.value) != '')&&(getFname.value.trim(getFname.value) != '')&&(getLname.value.trim(getLname.value) != '')&&(getSubj.value.trim(getSubj.value) != '')&&(getMsg.value.trim(getMsg.value) != '')))
                    {
                        document.getElementById('required').classList.remove('animated','shake');
                        document.getElementById('required').classList.remove('animated','jello');
                        
                        console.log('Valid: You have sucessfully created us an email!');
                        console.log('all fields were completed!');
                        document.getElementById('required').style.backgroundColor = "#41418b";
                        getEmail.style.border = goodValue;
                        getFname.style.border = goodValue;
                        getLname.style.border = goodValue;
                        getSubj.style.border = goodValue;
                        getMsg.style.border = goodValue;
                        return true;
                    }
                else
                    {
                        document.getElementById('required').classList.remove('animated','jello');
                        document.getElementById('required').classList.remove('animated','shake');
                        alert(er_msg);
                        console.log('All fields are required!');
                        animateSome();
                        
                        getEmail.style.border = badValue;
                        getFname.style.border = badValue;
                        getLname.style.border = badValue;
                        getSubj.style.border = badValue;
                        getMsg.style.border = badValue;
                        
                        getEmail.focus();
                        getFname.focus();
                        getLname.focus();
                        getSubj.focus();
                        getMsg.focus();
                        console.log('ERROR-01: no data was entered!');
                        return false;
                    }
            }