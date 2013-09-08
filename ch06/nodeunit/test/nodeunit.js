exports.testPony = function(test) {
    var isPony = true;
    test.ok(isPony, 'This is not a pony');
    test.done();
}

exports.testSomethingelse = function(test) {
    test.ok(false, "this assertion should fail");
    test.done();
}