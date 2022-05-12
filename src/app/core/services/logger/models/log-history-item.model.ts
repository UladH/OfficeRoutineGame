import { ObjectUtils } from "src/app/core/utils/object-utils";
import { LoggerLevel } from "../const/logger-level.enum";

export class LogHistoryItem{
    public level: LoggerLevel; 
    public message: string;
    public data: any[];

    //#region  constructor

    constructor(level: LoggerLevel, message: string, data: any[]){
        this.level = level;
        this.message = message;
        this.data = ObjectUtils.deepClone(data);
    }

    //#endregion
}