const {app, BrowserWindow} = require('electron')

let mainwindow = null;

app.on('ready', () => {
    console.log('Hello from electron');
    mainwindow = new BrowserWindow();
    mainwindow.loadURL(`file://${__dirname}/index.html`);
});

