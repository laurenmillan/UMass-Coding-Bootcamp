// ** How Web Works Exercise ** //


// What is HTTP?
    // hypertext transfer protocol - a set of rules that controls how communication is handled between a browser and a web server

// What is a URL?
    // universal resource locators - a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it.

// What is DNS?
    // domanin name system - it takes a host name (ie: google.com) and translate it and turn it into the corresponding IP address, it can perform reverse lookups

// What is a query string?
    // it is a part of a URL that assigns values to specified parameters. Allows you to pas key-value-pairs into the URL in the following format: ?key1=value1&key2=value2

// What are two HTTP verbs and how are they different?
    // GET vs POST
    // GET: requests without side effects (ie: doesn't change server data). Clicking links, form submissions
    // POST: requests with side effects (ie: changes data on server). Sending data, making a new post on social media, which impacts the server to be saved.

// What is an HTTP request?
    // When the user searches a webpage in the browser on a server, the browser makes a request to the server

// What is an HTTP response?
    // The server then responds with that exact HTML text for that page, and returns the response.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
    // Headers are in a Response - Content Type (text/html for web pages), date/time the server thinks it is, caching, etc

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
    // The browser “resolves” the name into an IP address using DNS, then the browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things), the server sends a response (typically, HTML, with a status code (200 if it was sucessful), the browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc), the browser makes separate HTTP requests for those resources and receives response from the server for each.