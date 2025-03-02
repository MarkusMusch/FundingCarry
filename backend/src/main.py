from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    response = {"message": "Hello World!"}
    return response

@app.get("/chart")
def read_chart():
    response = {
        "data": [
            { "date": '2025-03-01', "Apples": 400, "Oranges": 300 },
            { "date": '2025-03-02', "Apples": 300, "Oranges": 500 },
            { "date": '2025-03-03', "Apples": 450, "Oranges": 350 },
            { "date": '2025-03-04', "Apples": 500, "Oranges": 400 }
        ],
        "dataKey": "date",
        "series":[
            { "name": 'Apples', "color": '#1E90FF' },
            { "name": 'Oranges', "color": '#FFA500' },
        ]
    }
    return response


if __name__ == "__main__":
   import uvicorn
   uvicorn.run(app, host="127.0.0.1", port=8000)  # , reload=True) 
