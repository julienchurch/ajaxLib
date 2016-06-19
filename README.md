# Tiny AJAX library

A tiny library for performing AJAX requests

## Example

var req     = new ajaxRequest(),
    payload = { 
                id: 1
              , quantity: 100
              };

req.onReady(addToCartResponse)
   .post(payload)
   .send(cartEndpoint)
