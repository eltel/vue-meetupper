const passport = require("passport");

// Commented for use with sessions as opposed to JWTs

// Auth Middleware
// exports.onlyAuthUser = function(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//
//   return res.status(401).send({ errors: { auth: "not authenticated" } });
// };

exports.onlyAuthUser = passport.authenticate("jwt", { session: false });
