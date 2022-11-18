def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}

        >>> multiple_letter_count('Boston')
        {'B': 1, 'o': 2, 's': 1, 't': 1, 'n': 1}
    """
    dict = {}
    for letter in phrase:
        if letter not in dict.keys():
            dict[letter] = phrase.count(letter)
    return dict
        