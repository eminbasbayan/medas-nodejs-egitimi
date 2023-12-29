const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const path = require("node:path");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

const logEvents = async (message, fileName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `\n${dateTime}\t${uuid()}\t${message}`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", fileName ? fileName : "eventLog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
