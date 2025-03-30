const { app, BrowserWindow, session } = require('electron');
const path = require('node:path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
      nodeIntegration: false, // 根据你的需求设置
      contextIsolation: true // 推荐设置为true
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(async () => {

  await session.defaultSession.loadExtension('D:\\playground\\Projects\\electron-coin\\extensions\\dodola', {
    allowFileAccess: true,
    allowFileAccessFromFileUrls: true,
    allowUniversalAccessFromFileUrls: true
  }).then(() => {
    console.log('dodola loaded');
  }).catch((err) => {
    console.log('dodola load failed', err);
  })
  
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})