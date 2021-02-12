# https://github.com/mozilla/addons/issues/1237#issuecomment-702371341

import os
import json
import requests
import pprint

stream = os.popen('npm show aws-sdk version')
version = stream.read().replace('\n','')
metadata = json.loads(requests.get('https://sdk.amazonaws.com/builder/js/cache/' + version + '/metadata.json').text)

output = ''
partno = 1
line = 'x'

with open('aws-sdk-2.842.0.js', 'r') as f:
    while line != '':
        i = 0
        while i < 100000 and line != '':
            line = f.readline()
            output += line
            i += 1
        while line != "\n" and line != '':
            line = f.readline()
            output += line
        with open('firefox/aws-sdk-' + version + '-part' + str(partno) + '.js', 'w') as f2:
            f2.write(output)
            output = ''
        partno += 1
