let magicians_name :string[] = ["Asad", "Arham", "Safeer", "Naeem"];

function make_great(magicians:string[]){
for(let i =0; i <magicians.length; i++ ){
magicians_name[i] ="the G0reat " +magicians[i]
}
}

function show_magician(magicians_name: string[]){
    magicians_name.forEach(element => {
        console.log(element);
    

    });
}
make_great(magicians_name);
show_magician(magicians_name);
