from unittest import TestCase

from app import app
from models import db, User

# Use test db, don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, rather than HTML pages with error infor
app.config['TESTING'] = True

# This is a hack, but don't use Flask Debugtoolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()

class UserTestCase(TestCase):
    """Tests for Users."""

    def setUp(self):
        """Add sample user."""

        User.query.delete()

        user = User(first_name='Test', last_name='User', image_url='demo')
        db.session.add(user)
        db.session.commit()

        self.user_id = user.id
        self.user = user

    def tearDown(self):
        """Clean up any fouled transation."""

        db.session.rollback()

    def test_list_users(self):
        with app.test_client() as client:
            resp = client.get('/')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Test', html) 

    def test_show_user(self):
        with app.test_client() as client:
            d = {"first_name": "Test2", "last_name": "User2", "image_url": "demo2"}
            resp = client.post('/', data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("<h1>Test2</h1>", html)
