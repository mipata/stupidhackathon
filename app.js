var classes = [
	'advertisement',
	'advertising',
	'adzerk-vote',
	'advert',
	'ob-widget-section'
];

function hideChildren(node) {
	var classString = "";
	var dotNotationClassString = "";
	for(var i = 0; i < classes.length; i++){
		classString += ""+classes[i];
		dotNotationClassString += "." + classes[i];

		if(i < classes.length - 1) {
			classString += "|";
			dotNotationClassString += ",";
		}
	}

	var re = new RegExp(classString, 'ig');

	if(re.test($(node).attr("class"))) {
		return;
	}

	var childNodes = $(node).find(dotNotationClassString);
	if(childNodes.length > 0) {
		$(node).css("background-image", "none").children().each(function(index, element) {
			hideChildren(element);
		});
	} else {
		$(node).addClass("stupidShitHide");
	}
}

hideChildren(document.body);
