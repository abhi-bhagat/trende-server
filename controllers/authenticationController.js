const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { CLIENT_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

exports.authentication = (req, res) => {
	passport.use(
		new GoogleStrategy(
			{
				clientID: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET,
				callbackURL: "http://localhost:8080/auth/google/callback",
			},
			(accessToken, refreshToken, profile, cb) => {
				//passport callback function
			}
		)
	);
};
