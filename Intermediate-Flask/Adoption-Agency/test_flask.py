from unittest import TestCase

from app import app
from models import db, Pet

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt_db'
app.config['SQLALCHEMY_ECHO'] = False
app.config['TESTING'] = True
app.config['WTF_CSRF_ENABLED'] = False

app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class PetTestCase(TestCase):
    """Tests the adding a pet form."""

    def test_add_pet_form(self):
        with app.test_client() as client:
            resp = client.get('/add')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<pet_id="pet-add-form"', html)