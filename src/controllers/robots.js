//TO BE DELETED

// let robots = [];
// let prevBots = [];
// const { logger } = require("../modules/logging");
// const log = (message) => {
//   logger({
//     message: message,
//     level: "debug",
//     source: "controllers/robot.js",
//   });
// };

// module.exports.robotStatus = async () => {
//   const { updateRobotServer } = require("../models/robotServer");
//   const { checkForLiveRobots } = require("../controllers/robotServer");
//   prevBots = robots;
//   robots = await getLiveRobots();
//   await updateRobotStatus(robots);
//   await checkForLiveRobots();
//   updateRobotServer(); //only send update event on changes
//   announceRecentlyLive();
//   checkInterval();
// };

// const announceRecentlyLive = async () => {
//   const { liveRobotAlert } = require("./notifications/index");
//   robots.forEach((robot) => {
//     let found = false;
//     prevBots.forEach((prevBot) => {
//       if (robot.id === prevBot.id) found = true;
//     });
//     if (found === false) liveRobotAlert(robot);
//   });
// };

// module.exports.updateChannelStatus = async ({ robot, channel_id }) => {
//   const { updateRobotStatus } = require("../models/robot");
//   log(`Update current channel for robot: ${robot.name}, ${channel_id}`);
//   robot.status.current_channel = channel_id;
//   updateRobotStatus(robot.id, robot.status);
// };

// const getLiveRobots = async () => {
//   wss = require("../services/wss");
//   let checkRobots = [];
//   await wss.clients.forEach(async (ws) => {
//     if (ws.robot) {
//       //No dupes!
//       if (!checkRobots.some((robot) => robot.id === ws.robot.id)) {
//         checkRobots.push(ws.robot);
//       }
//     }
//   });
//   // console.log("CHECK ROBOTS CHECK: ", checkRobots.length);
//   return checkRobots;
// };

// const checkInterval = async () => {
//   const { liveStatusInterval } = require("../config");
//   setTimeout(this.robotStatus, liveStatusInterval);
//   return;
// };

// const updateRobotStatus = async (robotsToUpdate) => {
//   const { createTimeStamp } = require("../modules/utilities");
//   const { updateRobotStatus } = require("../models/robot");
//   await robotsToUpdate.forEach(async (robot) => {
//     log(`Robot, ${robot}, Status: ${robot.status}`);
//     robot.status.heartBeat = createTimeStamp();

//     await updateRobotStatus(robot.id, robot.status);
//     // console.log("ROBOT CHECK: //////////////////", robot);
//   });
//   return;
// };

// const getLiveRobotList = () => {
//   return robots;
// };
