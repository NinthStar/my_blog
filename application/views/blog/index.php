<? foreach ($query as $item): ?>
		<div class = 'article-area' id = 'left-side'>
			<div class = 'article'>
				<div class = 'article-title'>
					<div class = 'article-title-logo'></div>
					<div class = 'article-title-text'>
						<?=$item['title']?>
					</div>
				</div>
				<div class = 'article-main'>
					<div class = 'article-text'>
						<?=$item['body']?>
					</div>
					<a class = 'article-more' href = '/my_blog/index.php/blog/view/<?=$item['slug']?>'>More></a>
				</div>
			</div>
		</div>
		<div class = 'article-area' id = 'right-side'>
			<div class = 'article'>
				<div class = 'article-title'>
					<div class = 'article-title-logo'></div>
					<div class = 'article-title-text'>
						<?=$item['title']?>
					</div>
				</div>
				<div class = 'article-main'>
					<div class = 'article-text'>
						<?=$item['body']?>
					</div>
					<a class = 'article-more' href = '/my_blog/index.php/blog/view/<?=$item['slug']?>'>More></a>
				</div>
			</div>
		</div>
<? endforeach ?>