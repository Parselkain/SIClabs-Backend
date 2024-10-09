import passport from "passport";
import GoogleStrategy from'passport-google-oauth20';
import { CLIENT_ID_ERROR, CLIENT_SECRET_ERROR, GOOGLE_AUTH_CALLBACK } from "../constants/dictionary";
import mongoose from "mongoose";

const googleStrategy = GoogleStrategy.Strategy;
const User = mongoose.model("users");

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
  const emails = profile.emails?.map((emailObj: { value: string }) => emailObj.value) || [];
  new User({
    googleId: profile.id,
    name: profile.name?.givenName || "",
    surname: profile.name?.familyName || "",
    emails: emails,
    provider: profile.provider
  }).save();
  }));
  