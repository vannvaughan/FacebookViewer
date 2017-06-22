const app = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy

app.use(session({ secret: "qwertynope1.321" }))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new FacebookStrategy({
    clientID: '853634121461811',
    clientSecret: 'f183425e56010d7fe2fba2aa38a45d22',
    callbackURL: 'localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}
}));
