from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
	print "got post info"
	print request.form

	name = request.form['name']
	email = request.form['email']
	# redirects back to the '/' route
	return redirect('/')
	
app.run(debug=True) # run our server