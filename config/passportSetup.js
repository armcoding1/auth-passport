import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
GoogleStrategy.Strategy;
import GithubStrategy from "passport-github2";
GithubStrategy.Strategy;
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (user, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: "/auth/google/redirect",
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },
        async (accessTokeen, refreshToken, profile, done) => {
            const currentUser = await User.findOne({ googleId: profile.id });

            if (currentUser) done(null, currentUser);
            
            const newUser = await User.create({ username: profile.displayName, googleId: profile.id });
            done(null, newUser);
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            callbackURL: "/auth/github/callback",
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        },
        async (accessTokeen, refreshToken, profile, done) => {
            const currentUser = await User.findOne({ googleId: profile.id });

            if (currentUser) done(null, currentUser);
            
            const newUser = await User.create({ username: profile.displayName, googleId: profile.id });
            done(null, newUser);
        }
    )
);