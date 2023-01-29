const path = require('path');
const {Worker, isMainThread} = require('worker_threads');
const pathToMonochromeWorker = path.resolve(__dirname, 'monchromeWorker.js');

function uploadPathResolver(filename) {
    return path.resolve(__dirname, '../uploads', filename);
}

module.exports = function imageProcessor(filename) {
    const sourcePath = uploadPathResolver(filename);
    const resizedDestination = uploadPathResolver('resized-' + filename);
    const monochromeDestination = uploadPathResolver('monochrome-' + filename);
    return new Promise((resolve, reject) => {
        if(isMainThread) {
            try {
                const resizeWorker = new Worker(pathToResizeWorker, 
                    {workerData: {source: sourcePath, destination: resizedDestination}});
                const monochromeWorker = new Worker(pathToMonochromeWorker, 
                    {workerData: {source: sourcePath, destination: monochromeDestination}});
            } catch(error) {
                reject(error);
            }
        } else {
            reject(new Error("not on main thread"));
        }
        resolve();
    });
}