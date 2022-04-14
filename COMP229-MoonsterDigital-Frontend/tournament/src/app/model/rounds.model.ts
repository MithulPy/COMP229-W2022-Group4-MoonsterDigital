/**
 * @GroupName MoonsterDigital
 * @FileName COMP229_W2022-Group4-MoonsterDigital
 * @CourseCode COMP229
 * @Date April 06th 2022
 * @CourseName Web Application Development SEC005
 */

 export class Rounds{
    constructor(
        public _id?:number,
        public tournamentId?:number,
        public number?:number,
        public displayName?:String,
    ){}

    public toString(): string
    {
        return `
        Rounds
        -------------------------------
        Id             : ${this._id}
        Tournament id  : ${this.tournamentId}
        Player Id      : ${this.number}
        Name           : ${this.displayName}
        -------------------------------
        `;
    }
}
