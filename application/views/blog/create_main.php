<html>
<head>
<title><?=$title?></title>
</head>

<?=validation_errors() ?>
<?=form_open('blog/create');?>

<label for='title'>Title</label>
<input type='input' name='title' /><br/>

<label for='body'>content</label>
<textarea name='body'></textarea><br/>

<input type='submit' name='submit' value='create!'>

</form>
