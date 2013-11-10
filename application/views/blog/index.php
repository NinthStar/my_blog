<? foreach ($query as $item): ?>
                <div class = 'article-area' id = 'left-side'>
                    <div class = 'article'>
                        <div class = 'article-title'>
                        <?=$item['title']?>
                        </div>
                        <div class = 'article-main'>
                        <?=$item['body']?>
                        <a class = 'article-more' href = '/my_blog/index.php/blog/view/<?=$item['slug']?>'>
                                More>
                            </a>
                        </div>
                    </div>
                </div>
<? endforeach ?>
