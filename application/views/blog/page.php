<? foreach ($query as $item): ?>

<h2>
	<a href="/my_blog/index.php/blog/view/<?echo $item['slug'];?>">
		<?=$item['id']?>
</h2>

<? endforeach ?>

<?=$page_link?>
