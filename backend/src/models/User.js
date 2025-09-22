const bcrypt = require("bcrypt");

class User {
  constructor() {
    this.users = [];
  }

  async create({ email, password }) {
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: this.users.length + 1, email, password: hashed };
    this.users.push(user);
    return user;
  }

  async findOne({ email }) {
    return this.users.find(u => u.email === email);
  }

  async comparePassword(user, candidate) {
    return bcrypt.compare(candidate, user.password);
  }
}

module.exports = new User();
