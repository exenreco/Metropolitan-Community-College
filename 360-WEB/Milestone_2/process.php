<?php
    //including page header and processing file
    require("./assets/phpFiles/pageHeader.php");
    
    //::contact form variables
    $__firstName = "'".trim($_POST['firstName'])."'";
    $__lastName = "'".trim($_POST['lastName'])."'";
    $__email = "'".trim($_POST['email'])."'";
    $__subject = "'".trim($_POST['subject'])."'";
    $__message = "'".trim($_POST['message'])."'";
?>



<?php
    require($documentFooter);
?>