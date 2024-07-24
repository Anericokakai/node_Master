import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";

//  create a test Suite
test("Users Handler Test Suite", async (t) => {
  const testPort = 9000;

  //  mutate the env
  process.env.PORT = testPort;
  // import the server dynamically
  const { server } = await import("../../index.js");

  const testServerPoint = `http://localhost:${testPort}/user`;

  await t.test("Should Register A New User", async (t) => {
    //  data send
    const data = {
      name: "Anerico",
      email: "anericokakai@gmail.com",
      password: "12345",
    };
    const request = await fetch(testServerPoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    // assert the content type is the same

    assert.deepStrictEqual(
      request.headers.get("content-type"),
      "application/json"
    );

    //  assert the status code to be for created
    assert.strictEqual(request.status, 201);
    //  assert the response message  is the same as the one send from the server
    const res = await request.json();
    assert.deepStrictEqual(
      res.message,
      "User created successfully",
      "It should return the correct message"
    );
    //  assert the the use rid is created
    assert.ok(res.userId.length > 30, "it should have a valid uuid for the user ");
  });

  await promisify(server.close.bind(server))();
});
