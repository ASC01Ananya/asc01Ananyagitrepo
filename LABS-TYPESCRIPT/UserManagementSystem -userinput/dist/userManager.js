"use strict";
exports.__esModule = true;
exports.userManager = void 0;
var userManager = /** @class */ (function () {
    function userManager() {
        this.users = [];
    }
    userManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    userManager.prototype.listUsers = function () {
        return this.users;
    };
    userManager.prototype.removeUser = function (id) {
        this.users = this.users.filter(function (user) { return user.id !== id; });
    };
    userManager.prototype.searchUser = function (id) {
        if (id == undefined) {
            console.log("Evter a coorect id");
        }
        return this.users.find(function (user) { return user.id === id; });
        // return this.users.filter(user=>this.user.id===id)
    };
    return userManager;
}());
exports.userManager = userManager;
