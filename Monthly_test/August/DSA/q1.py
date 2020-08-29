inWords = ["zero", "one", "two", "three", "four",
           "five", "six", "seven", "eight", "nine",
           "ten", "eleven", "twelve", "thirteen",
           "fourteen", "fifteen", "sixteen",
           "seventeen", "eighteen", "nineteen",
           "twenty", "twenty one", "twenty two",
           "twenty three", "twenty four",
           "twenty five", "twenty six", "twenty seven",
           "twenty eight", "twenty nine"]


def timeInWords(h, m):
    if m == 0:
        return inWords[h] + " o' clock"

    elif m == 1:
        return "one minute past " + inWords[h]

    elif m == 15:
        return "quarter past " + inWords[h]

    elif m == 30:
        return "half past " + inWords[h]

    elif m == 45:
        return "quarter to " + (inWords[(h % 12) + 1])

    elif m == 59:
        return "one minute to " + inWords[(h % 12) + 1]

    elif m > 30:
        return inWords[60 - m] + " minutes to " + inWords[(h % 12) + 1]

    elif m <= 30:
        return inWords[m] + " minutes past " + inWords[h]


print(timeInWords(5, 47))
