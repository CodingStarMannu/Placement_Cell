const User = require('../models/userSchema');
const Student = require('../models/studentSchema');
const fastcsv = require('fast-csv');
const path = require('path');
const fs = require('fs/promises'); // Use the Promises version of the fs module

// Render sign-up page
exports.signup = function (req, res) {
	if (req.isAuthenticated()) {
		return res.redirect('back');
	}
	res.render('signup');
};

// Render sign-in page
exports.signin = function (req, res) {
	if (req.isAuthenticated()) {
		return res.redirect('back');
	}
	res.render('signin');
};


exports.createSession = function (req, res) {
	console.log('Session created successfully');
	return res.redirect('/');
};

// Sign out
exports.signout = function (req, res) {
	req.logout(); // You don't need to pass a callback function here
	return res.redirect('/users/signin');
};

// Create user
exports.createUser = async function (req, res) {
	const { name, email, password, confirmPassword } = req.body;
	try {
		if (password !== confirmPassword) {
			console.log(`Passwords didn't match`);
			return res.redirect('back');
		}

		const user = await User.findOne({ email });

		if (user) {
			console.log(`Email already exists`);
			return res.redirect('back');
	}

	const newUser = new User({
		name,
		email,
		password,
	});

	await newUser.save();

	console.log('User created successfully');
	return res.redirect('/users/signin');
	} catch (error) {
		console.error(`Error in creating user: ${error}`);
		res.redirect('back');
	}
};

// Download report
exports.downloadCsv = async function (req, res) {
	try {
		const students = await Student.find({});
		const filePath = path.join(__dirname, '../report/data.csv');

		const ws = fs.createWriteStream(filePath);
		const csvStream = fastcsv.format({ headers: true });

		csvStream.pipe(ws);

		students.forEach((student) => {
			csvStream.write({
				'S.No': student.sno,
				Name: student.name,
				Email: student.email,
				College: student.college,
				Placement: student.placement,
				'Contact Number': student.contactNumber,
				Batch: student.batch,
				'DSA Score': student.dsa,
				'WebDev Score': student.webd,
				'React Score': student.react,
				...student.interviews,
			});
		});

		csvStream.end();

		res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`);
		res.setHeader('Content-Type', 'text/csv');

		fs.createReadStream(filePath).pipe(res);
	} catch (error) {
		console.error(`Error in downloading file: ${error}`);
		return res.redirect('back');
	}
};
