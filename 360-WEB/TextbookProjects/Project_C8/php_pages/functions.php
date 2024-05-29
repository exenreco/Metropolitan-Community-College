      <!--
      Name: Exenreco Bell
      Class: Web360 part 1
      Date: 01/15/2016
      Assignment: Chapter 8 Project 2
		File: functions.php
      -->
<?php
   function outputCartRow($file, $prodcut, $quantity, $price)
      {
         $subtotal = $quantity * $price;
         echo "
            <tr>
            <td><img class=\"img-thumbnail\" src=\"$file\" alt=\"...\"></td>
            <td>$product</td>
            <td>$quantity</td>
            <td>$" . number_format($price, 2) . "</td>
            <td>$" . number_format($subtotal, 2) . "</td>
         </tr>
         ";
      }
?>