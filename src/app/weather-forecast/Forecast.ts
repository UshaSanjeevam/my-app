export class Forecast {
    constructor(public name:string,
                public date:Date,
                public weather:string,
                public tempMin:string,
                public tempMax:string,
                public temp:string,
                public humidity:string,
                public image:string,
               ){}
  }