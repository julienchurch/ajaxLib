// Stupidly simple AJAX requests
function ajaxRequest() {
  if (window.ActiveXObject) {
    try {
      this.request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e) {
      alert(e.message);
    }
  } else {
    this.request = new XMLHttpRequest();
  }
}

ajaxRequest.prototype.onReady = function(callback) {
  var request = this.request;
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      callback(request.responseText);
    }
  }
  return this;
};

ajaxRequest.prototype.post = function(url) {
  this.request.open('POST', url, true);
  this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  return this;
};

ajaxRequest.prototype.send = function(payload) {
  this.request.send(payload);
};
