module.exports.createRobotAuth = async (robot_id, user) => {
  const { log } = require("./");
  const { createRobotToken } = require("../auth");
  const { getRobotChannelById } = require("../../models/robotChannels");
  const { authMemberRole } = require("../roles");
  try {
    if (!robot_id) return { error: "robot_channel.id required." };
    log(`Getting key for robot_channel: ${robot_id}`);
    const getRobot = await getRobotChannelById(robot_id);
    const auth = await authMemberRole(user, getRobot.server_id);
    if (!auth) return { error: "Invalid authorization" };
    const key = await createRobotToken(getRobot);
    return { key: key };
  } catch (err) {
    console.log(err);
    return { error: "Unable to generate key." };
  }
};

//used by WS for auth
module.exports.authRobot = async (token) => {
  const { verifyRobotTokenData } = require("../../models/robotChannels");
  const { extractToken } = require("../auth");
  const auth = await extractToken(token);
  // console.log("Extracting Robot Token: ", auth);
  const robot = await verifyRobotTokenData(auth);
  return robot;
};

//used by API for auth
module.exports.authRobotData = async (tokenData) => {
  const { verifyRobotTokenData } = require("../../models/robotChannels");
  const auth = await verifyRobotTokenData(tokenData);
  return auth;
};
