from unittest import TestCase
from app import app

from forex_python.converter import CurrencyRates
from forex_python.converter import CurrencyCodes
from converter import Currency

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


class CurrencyTest(TestCase):
    """Tests for Currency class and its functions."""

    def setUp(self):
        """Function that runs before every test method."""

        curr = Currency('USD')
        new_curr = Currency('USD')
    

    def test_currency_name(self):
        """Test for currency_name function in Currency class."""

        init = 'USD'
        curr = Currency(init)
        c2 = CurrencyCodes()
        self.assertEqual(curr.currency_name, 'United States dollar')


    def test_convert_amount(self):
        """Test for convert_amount function in the Currency class."""

        init = 'USD'
        new_currency = 'USD'
        amount = 1
        curr = CurrencyRates()
        curr_conversion = curr.convert(init, new_currency, amount)
        self.assertNotEqual(curr_conversion, 2)
        self.assertEqual(curr_conversion, 1)