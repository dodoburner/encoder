const request = require("supertest");
const app = require("../../app");

describe("POST coder/encode", () => {
  it("should return a status of 401 if the user is not authorized", async () => {
    const response = await request(app)
      .post("/coder/encode")
      .send({ inputString: "AAASS" });

    expect(response.statusCode).toBe(401);
  });

  describe("given no string", () => {
    it("should return a status of 400 if there is no string provided", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({});

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("You must provide an input string!");
    });

    it("should return a status of 400 if the string is empty", async () => {
      const response = await request(app)
        .post("/coder/encode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("You must provide an input string!");
    });
  });

  describe("given an invalid string", () => {
    it("should return a status of 400 if the string has a number", async () => {
      const response = await request(app)
        .post("/coder/encode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "AAASS1" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe(
        "The input string must have only alphabetic charachters!"
      );
    });

    it("should return a status of 400 if the string has a symbol", async () => {
      const response = await request(app)
        .post("/coder/encode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "AA$$$" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe(
        "The input string must have only alphabetic charachters!"
      );
    });
  });

  describe("given a valid string", () => {
    it("should return the encoded string", async () => {
      const response = await request(app)
        .post("/coder/encode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "AAEEEEE" });

      expect(response.statusCode).toBe(201);
      expect(response.body).toBe("A2E5");
    });
  });
});
