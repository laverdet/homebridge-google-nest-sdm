"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraStreamingDelegate = void 0;
const StreamingDelegate_1 = require("./StreamingDelegate");
class CameraStreamingDelegate extends StreamingDelegate_1.StreamingDelegate {
    constructor(log, api, config, camera) {
        super(log, api, config, camera);
        this.controller = new this.hap.CameraController(this.options);
    }
    getController() {
        return this.controller;
    }
}
exports.CameraStreamingDelegate = CameraStreamingDelegate;
//# sourceMappingURL=CameraStreamingDelegate.js.map