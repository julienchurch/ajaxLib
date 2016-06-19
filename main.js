function AR2() {
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

AR2.prototype.onSuccess = function(successCallback) {
  var request = this.request;
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      successCallback(request.responseText);
    }
  }
}

AR2.prototype._safeStringify = function(object) {
  return typeof(object) === 'object' ? object : JSON.stringify(object);
}

AR2.prototype._setHeaders = function(method, payload, MIMEtype) {
  MIMEtype = MIMEtype || 'application/json';
  if (MIMEtype === 'application/json') {
    payload = this._safeStringify(payload);
  } 
  this.method = method;
  this.payload = payload;
  this.MIMEtype = MIMEtype;
};

AR2.prototype.post = function(payload, MIMEtype) {
  this._setHeaders('POST', payload, MIMEtype);
  return this;
}

AR2.prototype.put = function(payload, MIMEtype) {
  this._setHeaders('PUT', payload, MIMEtype);
  return this;
}

AR2.prototype.patch = function(payload, MIMETYPE) {
  this._setHeaders('PATCH', payload, MIMEtype);
  return this;
}

AR2.prototype.del = function(payload, MIMETYPE) {
  this._setHeaders('DELETE', payload, MIMEtype);
  return this;
}

AR2.prototype.send = function(url) {
  this.request.open(this.method, url, true);
  this.request.setRequestHeader('Content-Type', this.MIMEtype);
  this.request.send(this.payload);
}
