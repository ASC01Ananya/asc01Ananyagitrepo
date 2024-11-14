export class Issue{
  id:number;
  title:string;
  desc:string;
  priority:string;
  status:string;
  Assign:string;
  Date:Date;


constructor(
       id: number,
        title: string,
        desc: string,
        priority: string,
        status: string,
        Assign: string,  
        Date:Date
      ) {
      this.id = id;
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.status = status;
      this.Assign = Assign;
      this.Date = Date;
      }
}