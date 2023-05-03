import requests

url = "http://10.1.4.43:8080/jasperserver/rest_v2/resources?type=reportUnit"

payload = {}
headers = {
  'Accept': 'application/json',
  'Authorization': 'Basic amFzcGVyYWRtaW46amFzcGVyYWRtaW4=',
  'Cookie': 'userLocale=en_US; JSESSIONID=A9328061538A09AC0CABC2517D9C5AFD'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
