const Request = function(url){
  this.url = url;
};

Request.prototype.get = function(onComplete) {    // pass in a function

  const xhr = new XMLHttpRequest();                // capitalize important. Will bring back a response
  xhr.open("GET", this.url);                      // get request to this url
  xhr.setRequestHeader("Accept", "application/json");   // request back json not html
  xhr.send(); //

  xhr.addEventListener("load", () => {             // when this request is loaded do something
    if(xhr.status !== 200){                        // 200 refers to status that page is loaded
      return;
    }

    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);     // converts string to an object

    onComplete(data);                        // pass it back to the function to get

  });
};

module.exports = Request;
