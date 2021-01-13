const dotEnv = require("dotenv");
const fs = require("fs");
const path = require("path");
const os = require("os");

dotEnv.config();
const dirPath = path.join(os.homedir(), process.env.FILENAME);
const writeFile = async (filename, data) => {
  try {
    await fs.open(filename, "r", (err) => {
      if (err) {
        fs.writeFile(filename, data, (error) => {
          if (error) {
            console.log("err", error);
          } else {
            console.log("file created successfully");
          }
        });
      } else {
        console.log("file aleardy exist");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const systemInfo = {
  Platform: os.platform(),
  Hostname: os.hostname(),
  OperatingSystem: os.release(),
  UserInfo: os.userInfo(),
  network: os.networkInterfaces(),
};
writeFile(dirPath, JSON.stringify(systemInfo));

// todo
// check if file exist print file does not exist
// if file exist print file found
// write file in a promise or async manner
// to verify asnyc behavior print a new file has been written
// file path set dynamically
// make sure to remove extra file
