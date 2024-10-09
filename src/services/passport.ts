import passport from "passport";
import GoogleStrategy from'passport-google-oauth20';
import { CLIENT_ID_ERROR, CLIENT_SECRET_ERROR, GOOGLE_AUTH_CALLBACK } from "../constants/dictionary";

const googleStrategy = GoogleStrategy.Strategy;

const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
if (!googleClientID) {
  throw new Error(CLIENT_ID_ERROR);
}
if (!googleClientSecret) {
  throw new Error(CLIENT_SECRET_ERROR);
}


passport.use(new googleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: GOOGLE_AUTH_CALLBACK
  }, (accessToken, refreshToken, profile, done) => {
  console.log("accessToken",accessToken);
  console.log("refreshToken",refreshToken);
  console.log("profile",profile);
  }));
  