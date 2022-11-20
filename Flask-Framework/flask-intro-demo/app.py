"""Demo Flask application."""

from flask import Flask, request # imports Flask into the file. The request represents web requests
from random import choice, randint


app = Flask(__name__) # creates an application object in this file


@app.route('/') # the @-sign is called a decorator - decorates the function that comes afterwards
def index():
    """Show homepage"""

    return """
      <html>
        <body>
          <h1>I am the landing page</h1>
          <a href='/hello'>Go to hello page</a>
        </body>
      </html>
      """

@app.route('/hello')
def say_hello():
    """Return simple "Hello" Greeting."""

    html = "<html><body><h1>Hello</h1></body></html>"
    return html


@app.route("/search") # extracts data from the GET request from the query string using request.args
def search():
    """Handle GET requests like /search?term=fun"""

    # print(request.args) --this can be used to see information parsed from the query string

    term = request.args["term"]
    return f"<h1>Searching for: {term}</h1>"


@app.route("/add-comment") # POST request
def add_comment_form():
    """Show form for adding a comment."""

    return """
      <form method="POST">
        <input name="comment" placeholder="comment">
        <input name="username" placeholder="username">
        <button>Submit</button>
      </form>
      """

@app.route("/add-comment", methods=["POST"]) # responds to POST request, extracts data from the POST request that is sent

def add_comment():
    """Handle adding comment."""

    comment = request.form["comment"]
    username = request.form["username"]

    return f'<h1>Received "{comment}".</h1>'
      

USERS = {
  "whiskey": "Whiskey The Dog",
  "spike": "Spike The Porcupine",
}  

@app.route('/user/<username>')
def show_user_profile(username):
    """Show user profile for user."""

    name = USERS[username]
    return f"<h1>Profile for {name}</h1>"


POSTS = {
  1: "Flask is pretty cool",
  2: "Python is neat-o"
}

@app.route('/post/<int:post_id>') # must use int:post_id to specify integer for the variable type
def show_post(post_id):
    """Show post with given integer id."""

    print("post_id is a ", type(post_id))

    post = POSTS[post_id]

    return f"<h1>Post #{post_id}</h1><p>{post}</p>"


@app.route("/shop/<toy>")
def toy_detail(toy):
    """Show detail about a toy."""

    # Get color from req.args, falling back to None
    color = request.args.get("color")

    return f"<h1>{toy}</h1>Color: {color}"
