let usernames = [];
let ips = [];
const { authRequestTimeout } = require("../config");

//This script is meant to help throttle security related requests like requesting a password reset
//This should be handled through NGINX
module.exports.addUser = (user) => {
  const { createTimer } = require("../modules/utilities");
  console.log("adding user: ", user);
  if (usernames.includes(user)) {
    console.log(usernames);
    return true;
  } else {
    usernames.push(user);
    createTimer(authRequestTimeout, removeUsername, user);
    console.log(usernames);
    return false;
  }
};

const removeUsername = (username) => {
  usernames.remove(username);
};

module.exports.addIp = (ip) => {
  const { createTimer } = require("../modules/utilities");
  console.log("adding ip: ", ip);
  if (ips.includes(ip)) {
    console.log("ips: ", ips);
    return true;
  } else {
    ips.push(ip);
    createTimer(authRequestTimeout, removeIp, ip);
    console.log("ips: ", ips);
    return false;
  }
};

const removeIp = (ip) => {
  ips.remove(ip);
};

module.exports.getUsernames = () => {
  return usernames;
};

module.exports.getIps = () => {
  return ips;
};
