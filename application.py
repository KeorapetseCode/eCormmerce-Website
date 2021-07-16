from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')


TEMPLATES_AUTO_RELOAD = True
if __name__ == '__main__':
	app.run(debug=True, port=5000)