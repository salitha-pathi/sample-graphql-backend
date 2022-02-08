'use strict';
const { UserService } = require("../../services/user.service");

class UserResolver {
	userService
	constructor() {
		this.userService = new UserService();
	}
	getAllUsers(parent, args) {
        console.log("userData");
		return this.userService.getAll();
	}
	getUserById(parent, args) {
		return this.userService.getById(args.id);
	}
	createUser(parent, args) {
		return this.userService.create(args);
	}
}


module.exports = { UserResolver };