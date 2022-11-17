"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start = 100):
        """ Make serial number generator, with start initialized to 0 """

        self.start = self.next = start

    def __repr__(self):
        """ Show representation """

        return f"<SerialGenerator start = {self.start} next = {self.next}>"

    def generate(self):
        """ Return next serial number """

        self.next += 1
        return self.next - 1

    def reset(self):
        """ Reset serial number to initial start"""

        self.next = self.start
