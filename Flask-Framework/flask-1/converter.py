from forex_python.converter import CurrencyRates
from forex_python.converter import CurrencyCodes

c = CurrencyRates(force_decimal=True)
c2 = CurrencyCodes()

class Currency():
    """This class performs various functions on currencies, 
    including conversion rates, relative rates, and relative symbols."""
    
    def __init__(self, init):
        self.currency_name = self.currency_name(init)
        self.currency_rate = self.currency_rate(init)
        self.curren_symbol = self.currency_symbol(init)
        self.init = init
        
    
    def currency_name(self, init):
        """Calcualtes the name of the currency using the initials."""

        c2 = CurrencyCodes()
        c_name = c2.get_currency_name(init)
        
        return c_name


    def currency_rate(self, init):
        """Calculates the latest rate for the currency at hand."""

        curr = CurrencyRates()
        curr_rate = curr.get_rates(init)

        return curr_rate

    
    def conversion_rate(self, init, new_currency):
        """Calculates the latest conversion rate for the currency at hand."""

        curr = CurrencyRates()
        curr_conv_rate = curr.get_rate(init, new_currency)

        return curr_conv_rate


    def convert_amount(self, init, new_currency, amount):
        """Converts an amount from the currency at hand to a new currency."""

        curr = CurrencyRates()
        curr_conversion = curr.convert(init, new_currency, amount)

        return curr_conversion


    def currency_symbol(self, init):
        """Calculates the relative symbol for the currency at hand."""

        c2 = CurrencyCodes()
        c_symbol = c2.get_symbol(init)

        return c_symbol
    

    def check_amount_validity(self, amount):
        """Checks whether or not an entered amount is valid."""

        alert = "Not a valid amount. Please try again!"

        if type(amount) == int or type(amount) == float:

            return amount
        else:
            return alert
