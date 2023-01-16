javascript:(
	function(){
		var clearTab = function(){
			var title=document.title.replace(/^\([0-9]+\) */, '');
			document.title=title;
		};
		$('.surface-notifications-component .item-counter').hide();
		clearTab();
		setInterval(clearTab, 1000);
	}
)()
