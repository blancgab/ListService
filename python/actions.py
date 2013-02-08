import urllib
import urllib2

def subscribe(email, clubUrl):
    url = 'https://lists.columbia.edu/mailman/subscribe'+clubUrl
    form_data = {'email': email, 'digest':0, 'email-button': 'Subscribe'}
    data = urllib.urlencode(form_data)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    data = response.read()
    return data

def unsubscribe(email, clubUrl):
    url = 'https://lists.columbia.edu/mailman/options'+clubUrl
    form_data = {'email': email, 'language' : 'en', 'password': '', 'login-unsub' : 'Unsubscribe'}
    data = urllib.urlencode(form_data)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    data = response.read()
    return data
