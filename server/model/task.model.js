"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = exports.tableName = void 0;
const base_model_1 = require("./base.model");
exports.tableName = 't_divice';
class DeviceModel extends base_model_1.default {
    constructor() {
        super({ tableName: exports.tableName });
    }
}
exports.DeviceModel = DeviceModel;
exports.default = new DeviceModel();
