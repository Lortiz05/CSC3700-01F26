const courses = [
    { id: 'CSC1700', title: 'Intro to Programming', credits: 4 },
    { id: 'CSC2150', title: 'Data Structures',       credits: 4 },
    { id: 'CSC2200', title: 'Intro to Web Dev',      credits: 3 },
    { id: 'CSC3700', title: 'Advanced Web Dev',      credits: 4,
        badInst : false },
]

const getCourseTitle = ( title => {
    courses.forEach(course => {
        if ( course.id === title ) {
            console.log( course.title );
        }
    })
})
getCourseTitle( "CSC3700")

console.log( courses[3].badInst );

const cl = courses.find( ( course ) => course.id === "CSCbalh" );
if ( cl === undefined ){

}
console.log( cl );
const cl2 = courses.filter( ( course ) => course.credits === 4 );
console.log( cl2 );
console.log("------------")
const cl3 = courses.map( course  => course.title);
console.log( cl3 );
