var classes = [
	'advertisement',
	'advertising',
	'adzerk-vote',
	'advert',
	'ob-widget-section',
	'js-stream-ad'
];

var ids = [
	'Billboard-ad',
	'my-adsLREC1',
	'my-adsLREC2',
	'my-adsLREC3'
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

	if(ids.length > 0 && dotNotationClassString.length > 0){
		dotNotationClassString += ",";
	}

	var idString = "";
	for(var i = 0; i < ids.length; i++){
		idString += ""+ids[i];
		dotNotationClassString += "#" + ids[i];

		if(i < ids.length - 1) {
			idString += "|";
			dotNotationClassString += ",";
		}
	}

	console.log(dotNotationClassString);
	var re = new RegExp(classString, 'ig');

	var idRe = new RegExp(idString, 'ig');

	if(re.test($(node).attr("class"))) {
		return;
	}

	if(idRe.test($(node).attr("id"))) {
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

setInterval(function(){ hideChildren(document.body); }, 1000);
