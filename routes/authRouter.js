import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({ success: false, message: "failure" });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/redirect", passport.authenticate("google"), {
    successRedirect: "http://localhost:3001/profile",
    failureRedirect: "/login/failed"
});

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get("/github/callback", passport.authenticate("github"), {
    successRedirect: "http://localhost:3001/profile",
    failureRedirect: "/login/failed"
});

export default router;