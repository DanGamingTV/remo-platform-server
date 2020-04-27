module.exports = async (server_id, channel_id) => {
  const { getRobotChannels } = require("../../models/robotChannels");
  const {
    getRobotServer,
    updateRobotServerSettings,
    updateRobotServer,
  } = require("../../models/robotServer");
  const getServer = await getRobotServer(server_id);
  if (getServer.settings.default_channel === channel_id) {
    let { settings } = getServer;
    newDefault = await getRobotChannels(server_id);
    settings.default_channel = newDefault[0].id;
    // console.log("SETTING NEW DEFAULT CHANNEL: ", settings);
    await updateRobotServerSettings(server_id, settings);
    updateRobotServer();
  }
  return true;
};
