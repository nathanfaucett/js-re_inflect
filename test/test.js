var assert = require("assert"),
    reInflect = require("../src/index");


describe("reInflect", function() {
    it("should split string", function() {
        var parts = "asdf_asdf-asdf asdf".match(reInflect);
        assert.deepEqual(parts, ["asdf", "asdf", "asdf", "asdf"]);
    });
});
