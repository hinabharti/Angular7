export class DataModel
{
 public pcName : string;
 public os : string;
 public ip :string;
 public loggerUser : string;
 public loggedInTime :string;
 public logoutTime : string; 
 public constructor(pcName?:string,os?:string,ip?:string,loggedUser?:string,loggedInTime?:string,logoutTime?:string)
 {
     this.pcName = pcName;
     this.os = os;
     this.loggerUser = loggedUser;
     this.logoutTime =logoutTime;
     this.ip = ip;
     this.loggedInTime = loggedInTime;
 }
}