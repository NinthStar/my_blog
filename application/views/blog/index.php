<? foreach ($query as $item): ?>

<h2><? echo $item['title'];?></h2>
<div id='main'>
<? echo $item['body'];?>
</div>
<p><a href="/slug/index.php/blog/view/<? echo $item['slug'];?>">View article</a></p>

<? endforeach ?>
