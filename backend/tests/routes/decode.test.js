const request = require("supertest");
const app = require("../../app");

describe("POST coder/decode", () => {
  it("should return a status of 401 if the user is not authorized", async () => {
    const response = await request(app)
      .post("/coder/decode")
      .send({ inputString: "A1E5" });

    expect(response.statusCode).toBe(401);
  });

  describe("given a invalid string", () => {
    it("should return a status of 400 if the string multiple numbers in a row", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "A22E4" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("The string must be a valid encoded string!");
    });

    it("should return a status of 400 if the string multiple charachters in a row", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "AAA4H7" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("The string must be a valid encoded string!");
    });

    it("should return a status of 400 if the string has a symbol", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "A5B4&" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("The string must be a valid encoded string!");
    });

    it("should return a status of 400 if the string is empty", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "" });

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("The string must be a valid encoded string!");
    });
  });

  describe("given a valid string", () => {
    it("should return the encoded string", async () => {
      const response = await request(app)
        .post("/coder/decode")
        .set("Authorization", "xyz0987654321")
        .send({ inputString: "H3K3L5" });

      expect(response.statusCode).toBe(201);
      expect(response.body).toBe("HHHKKKLLLLL");
    });
  });
});
