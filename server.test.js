const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




describe("Test the root path", () => {
test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Obaid",
"Email": "obaid",
"Age": 12,
"Contact": 123
})
expect(response.statusCode).toBe(200);
})
})

describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).delete("http://localhost:8000/User/:id"
).send({
    "Id" : "6366a8e6c22a3633833ba5a7"
})
expect(response.statusCode).toBe(200);
})
})

    
test("It should response the POST method", () => 
{
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Umama"
})
expect(response.statusCode).toBe(200);
})

