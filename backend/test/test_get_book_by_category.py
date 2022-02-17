from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.book import BookRepository, Book


def test_should_return_one_book_by_category():
    books_repository = BookRepository(temp_file())
    app = create_app(repositories={"books": books_repository})
    client = app.test_client()

    books_repository.save(
        Book(
            id="1",
            title="test title",
            description="test description",
            category="terror",
            image="test image",
            price="test price",
            seller="test seller"

        )
    )

    response = client.get("/api/books/category/terror")
    assert response.json == [{
        "id": "1",
        "title": "test title",
        "description": "test description",
        "category": "terror",
        "image": "test image",
        "price": "test price",
        "seller": "test seller"
    }]
