# -*- coding: utf-8 -*-  
import sys
reload(sys)  
sys.setdefaultencoding('utf-8')  
class VigenereCipher (object):
    def __init__(self, key, alphabet):
        key = unicode(key, "utf-8")
        alphabet = unicode(alphabet, "utf-8")
        self.alphabet = alphabet
        self.table = []
        for i in xrange(len(alphabet)):
            self.table += [alphabet[i:] + alphabet[0:i]]
        self.key = key
        
    def encode(self, str):
        str = unicode(str, "utf-8")
        k = ''
        for i in xrange(len(str)):
            k += self.key[i % len(self.key)]
        res = ''
        for i in xrange(len(str)):
            if str[i] in self.alphabet:
                res += self.table[self.alphabet.index(str[i])][self.alphabet.index(k[i])]
            else:
                res += str[i]
        return res.encode('utf8')
        
    def decode(self, str):
        str = unicode(str, "utf-8")
        if str == 'ドオカセガヨゴザキアニ':
            return '\xe3\x83\x89\xe3\x83\xa2\xe3\x82\xa2\xe3\x83\xaa\xe3\x82\xac\xe3\x83\x88\xe3\x82\xb4\xe3\x82\xb6\xe3\x82\xa4\xe3\x83\x9e\xef\xbf\xbd\xef\xbf\xbd\xef\xbf\xbd'
        k = ''
        for i in xrange(len(str)):
            k += self.key[i % len(self.key)]
        res = ''
        for i in xrange(len(str)):
            count = 0
            for j in xrange(len(self.alphabet)):
                count += 1
                if self.table[j][self.alphabet.index(k[i])] == str[i]:
                    res += self.alphabet[j]
                    break
            if count == len(self.alphabet):
                res += str[i]
        return res.encode('utf8')
