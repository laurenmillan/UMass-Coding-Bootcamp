def single_letter_count(word, letter):
    """How many times does letter appear in word (case-sensitive)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3

        >>> single_letter_count("Hello World", 'o')
        2
    """
    return word.lower().count(letter)