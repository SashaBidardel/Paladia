
import sys


sys.path.insert(0, "")


def organize_data():
    from faker import Faker
    from random import choice, randint
    from src.domain.book import BookRepository, Book

    fake = Faker()

    my_word_list = [
        'danish', 'cheesecake', 'sugar',
        'Lollipop', 'wafer', 'Gummies',
        'sesame', 'Jelly', 'beans',
        'pie', 'bar', 'Ice', 'oat']

    categories = [
        "ciencias",
        "matematicas",
        "terror",
        "fantasia",
        "ciencia ficcion",
        "accion"
    ]

    database_path = "data/database.db"
    book_repository = BookRepository(database_path)

    for i in range(200):
        book_test = Book(
            id=i,
            title=fake.sentence(ext_word_list=my_word_list),
            description=fake.sentence(ext_word_list=my_word_list),
            image="https://api.lorem.space/image/movie?w=500&amp;amp;amp;h=500",
            category=choice(categories),
            price=randint(1, 10),
            seller=fake.name()
        )
        book_repository.save(book_test)


organize_data()
