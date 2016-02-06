var adSelector = ".advertisement";

function hideChildren(node) {
	if($(node).is(adSelector)) return;

	if($(node).find(adSelector).length > 0) {
		$(node).css("background-image", "none").children().each(function(index, element) {
			hideChildren(element);
		});
	} else {
		$(node).addClass("stupidShitHide");
	}
}

hideChildren(document.body)