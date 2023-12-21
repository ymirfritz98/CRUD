const jwt = require("jsonwebtoken");

module.exports = async (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "1m",
  });

  return token;
};
