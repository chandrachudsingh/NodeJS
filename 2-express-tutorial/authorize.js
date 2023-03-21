const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "ccsc") {
    req.user = { name: "ccsc", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
