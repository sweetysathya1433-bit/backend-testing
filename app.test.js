
const request = require("supertest");
const app = require("./app");

test("Valid marks", async () => {
  const res = await request(app).get("/marks/80");

  expect(res.statusCode).toBe(200);
  expect(res.body.mark).toBe(80);
});

test("Invalid marks", async () => {
  const res = await request(app).get("/marks/150");

  expect(res.statusCode).toBe(400);
  expect(res.body.message).toBe("Invalid marks");
});
