function hideChildren(node) {
	if($(node).hasClass("advertisement")) return;

	if($(node).find(".advertisement").length > 0) {
		$(node).css("background-image", "none").children().each(function(index, element) {
			hideChildren(element);
		});
	} else {
		// $(node).css("visibility", "hidden");
		$(node).css("-webkit-filter", "blur(8px) grayscale(1)");
	}
}

hideChildren(document.body)