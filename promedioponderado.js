const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Educacion Sexual",
        note: 4,
        credit: 5,
    },
    {
        course: "Programacion",
        note: 10,
        credit: 9,
    },
];



const notasCreditos = notes.map(function(a){

    return a.note * a.credit;

});

const sumOfNotesWithCrediti = notasCreditos.reduce(
    function(sum,newval){
        return sum + newval;

    }
);

const credits = notes.map(function(b){

    return b.credit;
    });

const sumCredits = credits.reduce(function(x,y){
    return x + y;

});

const promedioPonderado = sumOfNotesWithCrediti/sumCredits;
