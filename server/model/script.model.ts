import BaseModel from './base.model';

export const tableName = 'script';
export interface ITableStructure {
  [propname: string]: any;
}

export class DeviceModel extends BaseModel<ITableStructure> {

  constructor() {
    super({ tableName });
  }

  getScriptAll(pageNum: number, pageSize: number) {
    let start=(pageNum-1)*pageSize;
    const sql = `SELECT script_id,script_name,create_time,update_time FROM t_script limit `+start+","+pageSize;
    return this.$db.query(sql);
  }

  async count(){
    return this.$db.query('select count(*) as total from t_script');
  }

}

export default new DeviceModel();