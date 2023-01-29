const path = require('path');
const {Worker, isMainThread} = require('worker_threads');

module.exports = function imageProcessor() {
    return new Promise((resolve, reject) => {
        if(!isMainThread) reject(new Error("not on main thread"));
        resolve();
    });
}