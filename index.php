<!DOCTYPE html>
<html>
<head>
  <title>Invoice Upload</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Upload Invoice</h2>

<form action="upload.php" method="POST" enctype="multipart/form-data">
  <label>Select Invoice File:</label><br><br>
  <input type="file" name="invoice" required><br><br>

  <button type="submit">Upload Invoice</button>
</form>

</body>
</html>