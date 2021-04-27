import json
import numpy as np
from roll_nos import exclude, seniorsRoll, girls

jsonFile = open('quiz.json')
data = json.loads(jsonFile.read())

def assignPref(response):
  pref = [[0,'Agni'],[0,'Akash'],[0,'Jal'],[0, 'Prithvi'],[0, 'Vayu']]
  for ans in response:
    pref[int(ans[2])-1][0]+=1
  pref = sorted(pref, key=lambda x: (x[0]), reverse=True)
  return [pref[0][1], pref[1][1], pref[2][1], pref[3][1], pref[4][1]]  

misc = []
seniors = []

# if rollNo not in seniorsRoll and rollNo not in girls:
#   if rollNo in exclude:
#     misc.append(np.append(rollNo, assignPref(ele['questions'])))
#   else:
#     seniors.append(np.append(rollNo, assignPref(ele['questions'])[0]))  
  
for ele in data:
  rollNo = ele['rollnumber']

  if rollNo not in exclude and rollNo not in girls:
    if rollNo not in seniorsRoll:
      misc.append(np.append(rollNo, assignPref(ele['questions'])))
    else:
      seniors.append(np.append(rollNo, assignPref(ele['questions'])[0]))

#print(seniors)
print(len(seniors))
print(len(misc))
print(len(exclude))
print(len(girls))
      


