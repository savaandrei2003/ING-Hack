from flask import Flask
import requests

API_URL = "https://api-inference.huggingface.co/models/hagerty7/recyclable-materials-classification"
headers = {"Authorization": f"Bearer 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"}
app = Flask(__name__)

@app.route("/")
def query():
    with open("test1.jpeg", "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()


if __name__ == "__main__":
    app.run(host='0.0.0.0')


# test1 -> plastic
# test2 -> carton
# test3 -> glass
# test4 ->
# output = query()
# labels = [item['label'] for item in output]
# scores = [item['score'] for item in output]
# print(output)
# others o sa fie modificat(daca nu avem others ca trash)
# others = True
# for item in output:
#     if item['score'] > 0.3:
#         print(item['label'])


# print(labels)