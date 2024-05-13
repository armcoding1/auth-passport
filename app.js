import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession(
    {
        name: "session",
        keys: ["hyperauth"],
        maxAge: 24 * 60 * 60 * 1000
    }
));

app.use(passport.initialize());
app.use(passport.session());

export default app;