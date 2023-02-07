function playPauseFlexMT()
	{
		const $Container = $('.flexvideo');

		$Container.find('#imgClickAndChange').click(function()
		{
			const $Button = $(this).children();

			$Container.find('video').each(function($Key)
			{
				if($(this).css('display') !== 'none')
				{
					if($(this).get(0).paused)
					{
						if($Key<1)
							$(this).next().trigger('play');
						else
							$(this).prev().trigger('play');
							
						$(this).trigger('play');

						$Button.attr('src', 'https://cdn.shopify.com/s/files/1/0508/6747/0494/files/icon-pause.svg?v=1614646638');
					}
					else
					{
						if($Key<1)
							$(this).next().trigger('pause');
						else
							$(this).prev().trigger('play');
							

						$(this).trigger('pause');
						$Button.attr('src', 'https://cdn.shopify.com/s/files/1/0508/6747/0494/files/icon-play.svg?v=1614646637');
					}
				}
			});
		});
	}