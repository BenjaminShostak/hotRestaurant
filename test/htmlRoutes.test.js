const express = require('express');
const createRoutes = require('../routes/htmlRoutes')

describe("createRoute", () => {
  describe("runs program", () => {
    it("should run create routes function when required", () => {
      const app = express();
      const done = createRoutes(app)

      expect(done).toEqual('done');
    });
  });
});