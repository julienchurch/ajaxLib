var req = new ajaxRequest(),
    quantity = 100 
req.onReady(addToCartResponse)
   .post(root + "cart/add")
   .send("pid=" + pid + "&quantity=" + quantity)
