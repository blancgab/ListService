import urllib
import json
import httplib
import re


clubList = []
conn = urllib.urlopen('https://lists.columbia.edu/mailman/listinfo')
lines = conn.read().split("\n")
for l in range(len(lines)):
    club = {}
    if lines[l].find('<td><a href="listinfo') > 0:
        start = lines[l].find('listinfo')+8
        end = lines[l].find('"><strong>')
        club['url'] = lines[l][start:end]

        start = lines[l].find('<strong>')+8
        end = lines[l].find('</strong>')
        club['name'] = lines[l][start:end]

        if lines[l+1].find('<em>') > 0:
            club['desc'] = ''
        else:
            start = lines[l+1].find('<td>')+4
            end = lines[l+1].find('</td>')
            club['desc'] = lines[l+1][start:end]

        clubList.append(club)

out = open('bigList.txt', 'w')
out.write(str(clubList))
out.close()
