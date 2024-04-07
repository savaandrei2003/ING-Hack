from flask import Flask, send_file, request
from flask_cors import cross_origin
import requests
import base64
from PIL import Image
from io import BytesIO
app = Flask(__name__)



recycles = [
# {
#     "material" : "plastic",
#     "points" : 10  ,
#     "date" : "2021-09-01"
# },
# {
#     "material" : "metal",
#     "points" : 20 ,
#     "date" : "2023-09-27"
# },
      
]
def computePoints():
    points = 0
    print(recycles)
    for recycle in recycles:
        points += recycle['points']
    return points

homeInfo = {
    "user_name": "Edi",
    
    "recycles": recycles,
}


@app.route('/home', methods=['GET'])
@cross_origin()
def get_current_location():
    return homeInfo

@app.route('/add2recycles', methods=['POST'])
@cross_origin()
def add2recycles():
    
    data = request.get_json()
    recycles.append(data)
    
    return {
        'status': True,
        'points': data['points']
    }


@app.route('/photo2material', methods=['POST'])
@cross_origin()
def photo2material():
    API_URL = "https://api-inference.huggingface.co/models/hagerty7/recyclable-materials-classification"
    headers = {"Authorization": "Bearer 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"}
   
    data = request.get_json()
   
   
    img = data['image']
    imgdata = base64.b64decode(img)
    img_name = 'test.jpg'
    test_img = Image.open(BytesIO(imgdata))
    test_img.save(img_name)
    
    
    if not img:
        return 'Image not found in request JSON', 400
    with open(img_name, "rb") as f:
        if not f:
            return 'Error processing request', 400
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    
    if response.status_code != 200:
        return 'Error processing request', response.status_code
    return {
        'predictions': response.json(),
        'status' : True
    }
   

@app.route('/photo2material2', methods=['POST'])
@cross_origin()
def photo2material2():
    API_URL = "https://api-inference.huggingface.co/models/hagerty7/recyclable-materials-classification"
    headers = {"Authorization": "Bearer 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"}
   
      
    
    with open("metal.jpg", "rb") as f:
        if not f:
            return 'Error processing request', 400
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    
    if response.status_code != 200:
        return 'Error processing request', response.status_code
    return {
        'predictions': response.json(),
        'status' : True
    }
   

if __name__ == "__main__":
    app.run(debug=True)
