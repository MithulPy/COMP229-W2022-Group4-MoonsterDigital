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
        public final?:object,
        public semifinal?:object,
    ){}

    public toString(): string
    {
        return `
        Rounds
        -------------------------------
        Id             : ${this._id}
        Tournament id  : ${this.tournamentId}
        final          : ${this.final}
        semifinal      : ${this.semifinal}
        -------------------------------
        `;
    }
}
