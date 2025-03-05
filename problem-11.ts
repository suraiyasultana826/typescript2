type GenericArray = Array<boolean>
const rollNumbers: Array<number> = [3, 6, 8];
const mentors: Array<string> = ['x', 'y', 'z'];
const boolArray: Array <boolean> = [true, false, true];
const add = (x: number, y:number) => x +y;
add(30, 40);

type GenericTuple<X,Y> = [X, Y]
const manush : GenericTuple<string, string> = ['x', 'y']

type user = {
    name:string;
    age: number;
}
const UserId : GenericTuple<number, {name: string, email: string}> = [1234, {name: 'tanu', email:'sstan'}]
