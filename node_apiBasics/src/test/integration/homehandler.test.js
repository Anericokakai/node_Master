//  imports
import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";
const testPort = 3000;

// suite tatse
test("Home handler IntegrationTaste suite", async (t) => {
  //  server and port
  const { server } = await import("../../index.js");
  process.env.PORT = testPort;
  const testServerAddress = `http://localhost:${testPort}`;
  await t.test("it should create a user", async (t) => {
    const data = {
      name: "anerico",
      email: "anerico@gmail.com",
      password: "AnericoG123",
    };
    //  fetch the mocked server
    const request = await fetch(testServerAddress, {
      method: "POST",
      body: JSON.stringify(data),
    });
    // assertions to be done
    //  assert the content type is application json
    assert.deepStrictEqual(
      request.headers.get("Content-Type"),
      "application/json"
    );
    //    assert the status code
    assert.strictEqual(request.status, 201);
    // assert the response
    const result = await request.json();
    assert.deepStrictEqual(
      result.success,
      "User created successfully !",
      "It should return a valid registration message"
    );
      //    assert the the user is given a uuid
  assert.ok(result.id.length > 30, "it should return a valid user id");

  });

  //   close the server after the test
  await promisify(server.close.bind(server))();
});
