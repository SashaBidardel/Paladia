import sqlite3


class Book():
    def __init__(self, id, title, category, description, image, price, seller):
        self.id = id
        self.title = title
        self.category = category
        self.description = description
        self.image = image
        self.price = price
        self.seller = seller

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "image": self.image,
            "price": self.price,
            "seller": self.seller
        }


class BookRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            CREATE TABLE if not exists books (
                id TEXT PRIMARY KEY,
                title TEXT,
                description TEXT,
                category TEXT,
                image  TEXT,
                price  TEXT,
                seller  TEXT
                
            )
        """

        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_books(self):
        sql = """select * from books"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()

        result = []
        for item in data:
            book = Book(**item)
            result.append(book)

        return result

    def save(self, book):
        sql = """insert into books (id, title, category, description, image,  price, seller) values (
           :id, :title, :category, :description, :image,  :price, :seller
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, book.to_dict())
        conn.commit()

    def get_book_by_id(self, id):
        sql = """SELECT * FROM books WHERE id = :id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        book = Book(**data)
        return book
