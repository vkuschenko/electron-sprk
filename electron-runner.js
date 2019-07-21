const { app, BrowserWindow } = require("electron");
const path = require("path");

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    }
  });

  window.loadURL("http://localhost:3000");

  window.on("closed", onWindowClose);
}

function onWindowClose() {
  window = null;
}

function quitApp() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}

app.on("ready", createWindow);

app.on("activate", function() {
  if (window === null) {
    createWindow();
  }
});

app.on("window-all-closed", quitApp);
