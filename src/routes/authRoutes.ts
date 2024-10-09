import { Application } from "express";
import passport from "passport";
import { GOOGLE_AUTH, GOOGLE_AUTH_CALLBACK } from "../constants/dictionary";

export const configureAuthRoutes = (app: Application): void => {
  // Rotta per l'autenticazione con Google
  app.get(GOOGLE_AUTH, passport.authenticate("google", {
    scope: ["profile", "email"]
  }));

  // Callback dopo l'autenticazione
  app.get(GOOGLE_AUTH_CALLBACK, passport.authenticate("google"));
};