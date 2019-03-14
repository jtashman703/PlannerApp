const express = require('express')
const router = express.Router()
const User = require('../../db/models/user')
const passport = require('../../passport')

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard/home');
  });

router.post('/signup', (req, res) => {
	const { firstName, lastName, email, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.email': email }, (err, user) => {
		if (err) {
			console.log('Signup error: ', err)
		}
		else if (user) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		else {
			console.log("creating user");
			const newUser = new User({
				'firstName': firstName,
				'lastName': lastName,
				'local.email': email,
				'local.password': password
			})
			newUser.save((err, savedUser) => {
				if (err) return res.json(err)
				return res.json(savedUser)
			})
		}
	})
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router
