from flask import Flask, json, request, jsonify
from flask_cors import CORS

from src.lib.utils import object_to_json
from src.domain.book import BookRepository, Book


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "...magic!"

    @app.route("/api/books", methods=["GET"])
    def books_get():
        all_books = repositories["books"].get_books()
        return object_to_json(all_books)

    @app.route("/api/books/<id>", methods=["GET"])
    def book_get_by_id(id):
        book = repositories["books"].get_book_by_id(id)
        return object_to_json(book)

    return app
