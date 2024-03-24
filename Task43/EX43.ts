let magicians_name :string[] = ["Asad", "Arham", "Safeer", "Naeem"];
function arraycopy (array2:string[]){
return [...array2]
}

function make_great(magicians:string[]){
for(let i =0; i <magicians.length; i++ ){
magicians_name[i] ="the Great " +magicians[i]
}
}

function show_magician(magicians_name: string[]){
    magicians_name.forEach(element => {
        console.log(element);
    

    });
}
const magiciancopy = arraycopy(magicians_name)


make_great(magiciancopy);

 console.log(`\n Here is my modifid copy of the array`);
show_magician(magicians_name);


console.log(`\n Here is my original array.`);
show_magician(magiciancopy);


