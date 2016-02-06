function hideChildren(node) {
	if($(node).hasClass("advertisement")) return;

	if($(node).find(".advertisement").length > 0) {
		$(node).css("background-image", "none").children().each(function(index, element) {
			hideChildren(element);
		});
	} else {
		$(node).addClass("stupidShitHide");
	}
}

hideChildren(document.body)