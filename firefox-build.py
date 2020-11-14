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

with open('base-sdk.js', 'r') as f:
    output = f.read()

for service in metadata['services']:
    if service['identifier'] != 'sts':
        output += '\n\n' + requests.get('https://sdk.amazonaws.com/builder/js/cache/' + version + '/src/' + service['identifier'] + '.js').text + '\n\n'
        output += requests.get('https://sdk.amazonaws.com/builder/js/cache/' + version + '/src/' + service['identifier'] + '-' + service['versions'][-1] + '.js').text
    if len(output) > (3 * 1024 * 1024):
        with open('firefox/aws-sdk-' + version + '-part' + str(partno) + '.js', 'w') as f:
            f.write(output)
        partno += 1
        output = ''

with open('firefox/aws-sdk-' + version + '-part' + str(partno) + '.js', 'w') as f:
    f.write(output)
