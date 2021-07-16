from flask import Flask, render_template, request, jsonify, json, session
#from azure.storage.blob import ContainerClient, BlobClient, __version__, BlobServiceClient
#import datetime, uuid, os, re, glob
from os import path
#import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
#	print ("It loaded index Function")

	return render_template('index.html')


TEMPLATES_AUTO_RELOAD = True
if __name__ == '__main__':
#	app.secret_key = '\xfd{H\xe5<\x95\xf9\xe3\x96.5\xd1\x01O<!\xd5\xa2\xa0\x9fR"\xa1\xa8'
#	app.config['SESSION_TYPE'] = 'filesystem'
	app.run(debug=True, port=5000)