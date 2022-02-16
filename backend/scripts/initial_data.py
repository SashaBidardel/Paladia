import sys

sys.path.insert(0, "")
from src.domain.book import BookRepository, Book


database_path = "data/database.db"


book_1 = Book(
    id="1",
    title="test title",
    description="test description",
    category="test category",
    image="test image",
    price="test price",
    seller="test seller"

)


book_repository = BookRepository(database_path)
book_repository.save(book_1)

