import json

registered=[]
jsonFile = json.loads(open('quiz.json').read())
for ele in jsonFile:
  registered.append(ele['rollnumber'])

list = open('list.txt', 'a')
dept=[[101120001, 101120062 ], [102120001, 102120085 ],[103120001, 103120123 ],[106120001, 106120147 ],[107120001, 107120134 ],[108120001, 108120140 ],[110120001, 110120116 ],[111120001, 111120138 ],[112120001, 112120075 ],[114120001, 114120118 ]]

for ele in dept:
  for x in range(ele[0], ele[1]+1):
    if str(x) not in registered:
      list.write(str(x))
      list.write("\n")