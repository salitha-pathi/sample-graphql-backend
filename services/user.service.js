'use strict';
const userData = require("../MOCK_DATA.json");

class UserService {
	getAll() {
        console.log("userData");
		return userData;
	}

	getById(id) {
		return userData.filter((user) => user.id === id)[0];
	}

	create(user) {
		userData.push({
			id: userData.length + 1,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
		});
		return user;
	}
}

module.exports = { UserService };
