<?php 
   include('./php_pages/art-header.inc.php');
   include('./php_pages/art-data.php');
   include('./php_pages/functions.php');
?>
<body>

<header>

   <div id="topHeaderRow" >
      <div class="container">
         <nav class="navbar navbar-inverse " role="navigation">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
               </button>
               <p class="navbar-text">Welcome to <strong>Art Store</strong>, <a href="#" class="navbar-link">Login</a> or <a href="#" class="navbar-link">Create new account</a></p>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse pull-right">
               <ul class="nav navbar-nav">
                  <li><a href="#"><span class="glyphicon glyphicon-user"></span> My Account</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-gift"></span> Wish List</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-arrow-right"></span> Checkout</a></li>                  
               </ul>
            </div>
         </nav>
      </div>
   </div>   
   
   <div id="logoRow" >
      <div class="container">
         <div class="row">
            <div class="col-md-8">
                <h1>Art Store</h1> 
            </div>
            

            <div class="col-md-4">
               <form class="form-inline" role="search">
               <div class="input-group">
                  <label class="sr-only" for="search">Search</label>
                  <input type="text" class="form-control" placeholder="Search" name="search">
                  <span class="input-group-btn">
                  <button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                  </span>
               </div>
               </form> 
            </div>

                        
         </div>
     
      
      </div>
   </div>
   
   <div id="mainNavigationRow" >
      <div class="container">

         <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
               </button>
            </div>

            <div class="collapse navbar-collapse navbar-ex1-collapse">
             <ul class="nav navbar-nav">
               <li class="active"><a href="#">Home</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Art Works</a></li>
               <li><a href="#">Artists</a></li>
               <li class="dropdown">
                 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Specials <b class="caret"></b></a>
                 <ul class="dropdown-menu">

                   <?php 
                     for($i = 1; $i <= 5; $i++)
                        {
                           echo "<li><a href=\"#\">Speacial $i</a></li>";
                        }
                   
                   ?>
                 </ul>
               </li>
             </ul>              
            </div>
         </nav>
      </div>  <!-- end container -->
   </div>  <!-- end mainNavigationRow -->
   
</header>

<div class="container">

      <div class="page-header">
         <h2>View Cart</h2>
      </div>
         
      <table class="table table-condensed">
         <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
         </tr>
         <?php 
            outputCartRow($file1, $prodcut1, $quantity1, $price1);
            outputCartRow($file2, $prodcut2, $quantity2, $price2);
         ?>
         <?php
            $subtoTotal_all = ($price1 * $quantity1) + ($price2 * $quantity2);
            $tax = $subtoTotal_all * 0.10;
            
            $shipping = 100;
               if($subtotal > 2000)
                  {
                     $shipping = 0;
                  }
            $grand_total = $subtoTotal_all + $tax + $shipping;
         ?>
         <tr class="success strong">
            <td colspan="4" class="moveRight">Subtotal</td>
            <td >$ 
            <?php 
               echo number_format($subtoTotal_all, 2);
            ?>
            </td>
         </tr>
         <tr class="active strong">
            <td colspan="4" class="moveRight">Tax</td>
            <td>$ 
            <?php 
               echo number_format($tax, 2);
            ?>
            </td>
         </tr>  
         <tr class="strong">
            <td colspan="4" class="moveRight">Shipping</td>
            <td>$ 
            <?php 
               echo number_format($shipping, 2);
            ?>
            </td>
         </tr> 
         <tr class="warning strong text-danger">
            <td colspan="4" class="moveRight">Grand Total</td>
            <td>$ 
               <?php 
               echo number_format($grand_total, 2);
            ?>
            </td>
         </tr>    
         <tr >
            <td colspan="4" class="moveRight"><button type="button" class="btn btn-primary" >Continue Shopping</button></td>
            <td><button type="button" class="btn btn-success" >Checkout</button></td>
         </tr>
      </table>         

</div>  <!-- end container -->
<?php include('./php_pages/art-footer.inc.php'); ?>