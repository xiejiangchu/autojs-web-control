"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = exports.tableName = void 0;
const base_model_1 = require("./base.model");
exports.tableName = 'script';
class DeviceModel extends base_model_1.default {
    constructor() {
        super({ tableName: exports.tableName });
    }
    getScriptAll(pageNum, pageSize) {
        let start = (pageNum - 1) * pageSize;
        const sql = `SELECT script_id,script_name,create_time,update_time FROM t_script limit ` + start + "," + pageSize;
        return this.$db.query(sql);
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.$db.query('select count(*) as total from t_script');
        });
    }
}
exports.DeviceModel = DeviceModel;
exports.default = new DeviceModel();
