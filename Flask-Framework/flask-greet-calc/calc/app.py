# Put your app in here.
"""Calculator app"""

# Make a Flask app that responds to 4 different routes. Each route does a math operation with two numbers, a and b, which will be passed in as URL GET-style query parameters.

# /add
    # Adds a and b and returns result as the body.
# /sub
    # Same, subtracting b from a.
# /mult
    # Same, multiplying a and b.
# /div
    # Same, dividing a by b.


from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def do_add():
    """Add a and b."""
    
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)

    return str(result)

@app.route('/sub')
def do_sub():
    """Subtract a and b."""
    
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a, b)

    return str(result)

@app.route('/mult')
def do_mult():
    """Multiply a and b."""
    
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a, b)

    return str(result)

@app.route('/div')
def do_div():
    """Divide a and b."""
    
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a, b)

    return str(result)


    # Further Study: You probably have a lot of code duplication in your calc routes, given that you’re doing such similar things in each.
    # Make a single route/view function that can deal with 4 different kinds of URLs:

operators = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div,
        }

@app.route("/math/<oper>")
def do_math(oper):
    """Do math on a and b."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)

