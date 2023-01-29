const path = require('path');
const {Worker, isMainThread} = require('worker_threads');
const pathToMonochromeWorker = path.resolve(__dirname, 'monchromeWorker.js');

function uploadPathResolver(filename) {
    return path.resolve(__dirname, '../uploads', filename);
}

module.exports = function imageProcessor() {
    return new Promise((resolve, reject) => {
        if(!isMainThread) reject(new Error("not on main thread"));
        resolve();
    });
}