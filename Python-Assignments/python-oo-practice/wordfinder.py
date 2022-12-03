import random

class WordFinder:
    """Word Finder: finds random words from a dictionary.

    >>> wf = WordFinder('words.txt')
    235886 words read

    >>> word_finder.random()
    True

    >>> word_finder.random()
    True

    >>> word_finder.random()
    True
    """

    def __init__(self, path):

        self.path = path

        dict_file = open(path)

        self.words = self.parse(dict_file)

        print(f"{len(self.words)} words read")

    def parse(self, dict_file):

        return [w.strip() for w in dict_file]

    def random(self):
        """Return random word."""

        return random.choice(self.words)
    

class SpecialWordFinder(WordFinder):
    
    def parse(self, dict_file):
        """Parse dict_file -> list of words, skipping blanks/comments."""

        return [w.strip() for w in dict_file 
            if w.strip() and not w.startswith("#")]
