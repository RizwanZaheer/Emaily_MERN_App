const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let joe;
  beforeEach(done => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => {
      done();
    });
  });
  it("finds all users with the name of Joe", done => {
    // Joe instance of a User
    User.find({ name: "Joe" }).then(users => {
      console.log(users[0]._id);
      console.log(joe._id);
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });
});
