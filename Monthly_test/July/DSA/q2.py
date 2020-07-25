def matchingStrings(strings, queries):
    result = []
    for string in queries:
        result.append(strings.count(string))
    return result


matchingStrings(['aba', 'baba', 'aba', 'xzxb'],  ['aba', 'xzxb', 'ab'])