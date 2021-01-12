require('dotenv').config();
const fs = require('fs');
const path = require('path');
const os = require('os');

const desktop = process.env.DESKTOP;
const filname = process.env.FILENAME;

const systemInfo = {
  Platform: os.platform(),
  Hostname: os.hostname(),
  OperatingSystem: os.release(),
  UserInfo: os.userInfo(),
  network: os.networkInterfaces(),
};

fs.writeFile(
  path.join(desktop + filname),
  JSON.stringify(systemInfo),
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log('saved');
  }
);
