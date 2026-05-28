<?php

$invoiceFolder = "uploads/invoices/";
$podFolder = "uploads/pod/";

if(isset($_FILES["invoice"])){

move_uploaded_file(
$_FILES["invoice"]["tmp_name"],
$invoiceFolder .
basename($_FILES["invoice"]["name"])
);

}

if(isset($_FILES["pod"])){

move_uploaded_file(
$_FILES["pod"]["tmp_name"],
$podFolder .
basename($_FILES["pod"]["name"])
);

}

echo "Invoice and POD uploaded successfully.";

?>