import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggerLevel } from './const/logger-level.enum';
import { LogHistoryItem } from './models/log-history-item.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private minimumShowLevel: number;
  private history: LogHistoryItem[] = [];

  //#region  constructor

  constructor() { 
    this.minimumShowLevel = environment.logLevel;
  }

  //#endregion

  //#region public

  public info(message: string, ...data: any[]): void{
    this.message(console.info, LoggerLevel.Info, message, data);
  }
  
  public debug(message: string, ...data: any[]): void{
    this.message(console.debug, LoggerLevel.Debug, message, data);
  }
  
  public log(message: string, ...data: any[]): void{
    this.message(console.log, LoggerLevel.Log, message, data);
  }
  
  public warning(message: string, ...data: any[]): void{
    this.message(console.warn, LoggerLevel.Warning, message, data);
  }
  
  public error(message: string, ...data: any[]): void{
    this.message(console.error, LoggerLevel.Error, message, data);
  }

  public setShowLevel(level: LoggerLevel): void{
    this.minimumShowLevel = this.getNumericLevel(level);
  }

  public getHistory(): LogHistoryItem[]{
    return this.history;
  }

  //#endregion

  //#region private

  private message(method: (...data: any[]) => void, level: LoggerLevel, message: string, data: any[]): void{
    const logMessage = `>>>> ${level.toUpperCase()} <<<< | ${message}`;

    this.history.push(new LogHistoryItem(level, logMessage, data));

    if(this.checkShow(level)){
      method(logMessage, data);
    }
  }

  private checkShow(level: LoggerLevel): boolean{
    return this.minimumShowLevel <= this.getNumericLevel(level);
  }

  private getNumericLevel(level: LoggerLevel): number{
    switch(level){
      case LoggerLevel.Info:
        return 0;
      case LoggerLevel.Debug:
        return 1;
      case LoggerLevel.Log:
        return 2;
      case LoggerLevel.Warning:
        return 3;
      case LoggerLevel.Error:
        return 4;
    }
  }

  //#endregion
}
