// types.ts (or interfaces.ts)
export interface IUserData {
    name:{first:string,last:string};
    picture: {large:string};
  }
  
  export interface StateProps{
    results: IUserData[]
  }