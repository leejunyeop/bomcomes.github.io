// JavaScript Document	    
function isAndroid() {
  return !!window.bomapp;
}

function isIOS() {
  return !!window.webkit && !!window.webkit.messageHandlers;
}

function openNewWebViewWithPath(title, target) {
  var params = {
    title: title,
    path: target
  }
  if (isAndroid() && !!window.bomapp.openNewWebView) {
    // Call Android interface
    window.bomapp.openNewWebView(JSON.stringify(params));
  } else if (isIOS() && !!window.webkit.messageHandlers.openNewWebView) {
    // Call iOS interface
    window.webkit.messageHandlers.openNewWebView.postMessage(params);
  } else {
    // No Android or iOS interface found
    // alert("No openNewWebView APIs found.");
  }
}

function openNewWebViewWithUrl(title, target) {
  var params = {
    title: title,
    url: target
  }
  if (isAndroid() && !!window.bomapp.openNewWebView) {
    // Call Android interface
    window.bomapp.openNewWebView(JSON.stringify(params));
  } else if (isIOS() && !!window.webkit.messageHandlers.openNewWebView) {
    // Call iOS interface
    window.webkit.messageHandlers.openNewWebView.postMessage(params);
  } else {
    // No Android or iOS interface found
    // alert("No openNewWebView APIs found.");
  }
}

function closeWebView() {
  if (isAndroid() && !!window.bomapp.closeWebView) {
    // Call Android interface
    window.bomapp.closeWebView(JSON.stringify(''));
  } else if (isIOS() && !!window.webkit.messageHandlers.closeWebView) {
    // Call iOS interface
    window.webkit.messageHandlers.closeWebView.postMessage('');
  } else {
    // No Android or iOS interface found
    // alert("No closeWebView APIs found.");
  }
}

function goBack() {
  if (isAndroid() && !!window.bomapp.goBack) {
    // Call Android interface
    window.bomapp.closeWebView(JSON.stringify(''));
  } else if (isIOS() && !!window.webkit.messageHandlers.goBack) {
    // Call iOS interface
    window.webkit.messageHandlers.goBack.postMessage('');
  } else {
    // No Android or iOS interface found
    // alert("No goBack APIs found.");
  }
}

function openExternalWebView(target) {
  var params = {
    url: target
  }
  if (isAndroid() && !!window.bomapp.openExternalWebView) {
    // Call Android interface
    window.bomapp.openExternalWebView(JSON.stringify(params));
  } else if (isIOS() && !!window.webkit.messageHandlers.openExternalWebView) {
    // Call iOS interface
    window.webkit.messageHandlers.openExternalWebView.postMessage(params);
  } else {
    // No Android or iOS interface found
    // alert("No openExternalWebView APIs found.");
  }
}

function outlink(target) {
  var params = {
    url: target
  }
  if (isAndroid() && !!window.bomapp.outlink) {
    // Call Android interface
    window.bomapp.outlink(JSON.stringify(params));
  } else if (isIOS() && !!window.webkit.messageHandlers.outlink) {
    // Call iOS interface
    window.webkit.messageHandlers.outlink.postMessage(params);
  } else {
    // No Android or iOS interface found
    // alert("No outlink APIs found.");
  }
}

function screenEvent(name) {
  if (!name) {
    return;
  }
  var message = {
    name: name
  }
  if (isAndroid()) {
    // Call Android interface
    window.bomapp.screenEvent(JSON.stringify(message));
  } else if (isIOS() && window.webkit.messageHandlers.screenEvent) {
    // Call iOS interface
    window.webkit.messageHandlers.screenEvent.postMessage(message);
  } else {
    // No Android or iOS interface found
    // alert("No screenEvent APIs found.");
  }
}

function logEvent(name) {
  if (!name) {
    return;
  }
  var message = {
    name: name
  }
  if (isAndroid()) {
    // Call Android interface
    window.bomapp.logEvent(JSON.stringify(message));
  } else if (isIOS() && window.webkit.messageHandlers.logEvent) {
    // Call iOS interface
    window.webkit.messageHandlers.logEvent.postMessage(message);
  } else {
    // No Android or iOS interface found
    // alert("No logEvent APIs found.");
  }
}

function setUserProperty(name, value) {
  if (!name || !value) {
    return;
  }
  var message = {
    name: name,
    value: value
  };
  if (isAndroid()) {
    // Call Android interface
    window.bomapp.setUserProperty(JSON.stringify(message));
  } else if (isIOS() && window.webkit.messageHandlers.setUserProperty) {
    // Call iOS interface
    window.webkit.messageHandlers.setUserProperty.postMessage(message);
  } else {
    // No Android or iOS interface found
    // alert("No setUserProperty APIs found.");
  }
}
