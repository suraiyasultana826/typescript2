{
    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray ("Bangladesh")
    const resGeneric = createArrayWithGeneric<string>("Bangladesh")
  type User = {id: number; name: string};
    const resGenericObj = createArrayWithGeneric<User>({
        id:35,
        name: "tanu"
    })


    const addCourseToStudent = <T>(student: T) =>{
        const course = "Next level"
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'tanu', email:"sstan"})
    const student2 = addCourseToStudent({name:'tannu', email:"sstan"})
}