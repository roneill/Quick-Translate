
function translate(selectedText, callback) {
    chrome.extension.sendRequest({text: selectedText}, function(response) {
				     callback(response);});
}

function getSelectedText() {
    var selectedText = window.getSelection();

    if (selectedText.toString().length === 0)
	return;

    var callback = function (translatedText) {
    
	var parentNode = selectedText.baseNode.parentNode;
	var text = $(parentNode).html();
	var replaceText = text.replace(selectedText.toString(), translatedText);
	
	$(parentNode).html(replaceText);
    };

    translate(selectedText.toString(), callback);
}

function init() {
    $(document.body).mouseup(function() { getSelectedText(); });
}

$(init);


