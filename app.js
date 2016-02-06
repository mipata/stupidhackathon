(function() {

	var classes = [
		'advertisement',
		'advertising',
		'adzerk-vote',
		'advert',
		'ob-widget-section',
		'js-stream-ad',
		'side-ad',
		'ads-ad'
	];

	var ids = [
		'Billboard-ad',
		'my-adsLREC1',
		'my-adsLREC2',
		'my-adsLREC3',
		'ad_main'
	];

	var idRegex = [
		'google_ads',
		'cto_banner_content',
		'banner'
	];

	var classString = "";
	var dotNotationClassString = "";
	var idString = "";
	var idRegexString = "";

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

	for(var i = 0; i < ids.length; i++){
		idString += ""+ids[i];
		dotNotationClassString += "#" + ids[i];

		if(i < ids.length - 1) {
			idString += "|";
			dotNotationClassString += ",";
		}
	}

	for(var i = 0; i < idRegex.length; i++){
		idRegexString += ""+idRegex[i];
		idString += "|" + idRegex[i] + ".*";

		if(i < idRegex.length - 1) {
			idRegexString += " ";
		}
	}

	console.log(dotNotationClassString);
	var re = new RegExp(classString, 'ig');

	console.log("id Regex: " + idString);
	var idRe = new RegExp(idString, 'ig');

	function hideChildren(node) {
		if(re.test($(node).attr("class"))) {
			return;
		}

		if(idRe.test($(node).attr("id"))) {
			return;
		}

		var dontSkip = false;
		var childNodes = $(node).find(dotNotationClassString);
		console.log("[id^=\'" + idRegexString + "\']");
		if(childNodes.length > 0){
			dontSkip = true;
		} else {
			for(var i = 0; i < idRegex.length && !dontSkip; i++){
				if(childNodes.length == 0){
					childNodes = $(node).find("[id^=" + idRegex[i] + "]");
				} else {
					dontSkip = true;
				}
			}
		}
		
		if(childNodes.length > 0 || dontSkip) {
			$(node).css("background-image", "none").children().each(function(index, element) {
				hideChildren(element);
			});
		} else {
			$(node).addClass("stupidShitHide");
		}
	}

	setInterval(function(){
		$(document.body).children().each(function(index, element) {
			hideChildren(element);
		});
	}, 1000);
})();