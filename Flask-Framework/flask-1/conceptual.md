### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript? 
 
  * Python is used for backend development such as the server side of 	the application; scientific applications.  
  * Tuples are used is Python, which is an immutable list. 
  * Python has a standard library to import from.
  * Javascript (JS) can be used for both frontend and backend 	development.
  * JS using ({}) to separate code, where as Python uses indents

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.  
  
  * Use the defaultdict type to handle missing keys in dictionaries. 	It behaves like a regular Python dictionary, but when it is 	accessed or if a key is modified, defaultdict will create the key 	and generate a default value.  
  
  	 * dict_name['c'] : 3   
  	 * dict_name.update({'c : 3'})

- What is a unit test? 
 
  * unittest is a testing framework that tests if a single part of the 	code is operating appropriately.

- What is an integration test?

  * This is the testing of multiple components of an application to 	test that it all works together.

- What is the role of web application framework, like Flask?

  * The role allows you to set up functions, classes that help you 	define which requests to respond to and how to respond.

- You can pass information to Flask either as a parameter in a route 	URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better 	fit for an application?
  
  * A route URL is used in the decorator, it maps directly to the URL 	the user requested. The URL query param is an extension of the URL, 	and is used to help define specific content based on data that is 	passed in. One of the reasons to use a query param is to filter or 	sort criteria.

- How do you collect data from a URL placeholder parameter using 	Flask?

  * To collect data from a URL placeholder parameter using Flask, you 	store it as a variable under the exact same variable_name in the 	@app.route

- How do you collect data from the query string using Flask?  

	* To collect data from the query string, use 	'flask.request.args.get()'

- How do you collect data from the body of the request using Flask?  

	* To collect data from the body of the request, use request.form

- What is a cookie and what kinds of things are they commonly used for?  

	* A cookie is a piece of data that is stored on the user's device 	by the web browser while visiting a website. Cookies may be used 	for storing a user's username, password, and help the website 	recall your information.

- What is the session object in Flask?  

	* It is a way to store information in variables to be used accross 	multiple pages.

- What does Flask's `jsonify()` do?  

	* It turns the JSON output into a Response object. It also converts 	multiple arguments into an array or multiple keyword arguments into 	a dict. 
