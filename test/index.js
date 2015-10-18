var tape = require("tape"),
    reInflect = require("..");


tape("reInflect", function(assert) {
    var parts = "asdf_asdf-asdfAsdf asdf.asdf".match(reInflect);
    assert.deepEqual(parts, ["asdf", "asdf", "asdf", "Asdf", "asdf.asdf"], "should split string");
    assert.end();
});
