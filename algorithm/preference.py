import json
import numpy as np
from roll_nos import exclude, seniorsRoll, girls
jsonFile = open('res.json')
data = json.loads(jsonFile.read())

def assignPref(response):
  pref = [[0,'Agni'],[0,'Akash'],[0,'Jal'],[0, 'Prithvi'],[0, 'Vayu']]
  for ans in response:
    pref[int(ans[2])-1][0]+=1
    pref = sorted(pref, key=lambda x: (x[0]), reverse=True)
    return [pref[0][1], pref[1][1], pref[2][1], pref[3][1], pref[4][1]]

for ele in data:
  rollNo = ele['rollnumber']

  if rollNo not in exclude and rollNo not in girls:
    misc = np.append(rollNo, assignPref(ele['questions']))
  
  elif rollNo in seniorsRoll:
    seniors = np.append(rollNo, assignPref(ele['questions'])[0])