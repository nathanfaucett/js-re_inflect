var assert = require("assert"),
    reInflect = require("../src/index");


describe("reInflect", function() {
    it("should split string", function() {
        var parts = "asdf_asdf-asdfAsdf asdf.asdf".match(reInflect);
        assert.deepEqual(parts, ["asdf", "asdf", "asdf", "Asdf", "asdf.asdf"]);
    });
});
