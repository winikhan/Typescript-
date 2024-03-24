function make_album(artistName:string, albumTitle:string){
return{artistName, albumTitle}
}
let pair1 =make_album('Atif Aslam', 'O Saathi');
let pair2 =make_album('Rahat Fateh Ali Khan', 'Tere Bin');
let pair3 =make_album('Asim Azhar', 'Galat Fehmi');

//console.log(pair1);
//console.log(pair2);
//console.log(pair3);

function makeAlbum(artistName:string, albumTitle:string, numberofTrack? :number){
    return{artistName, albumTitle, numberofTrack}
    }
    let pair4 =makeAlbum('Atif Aslam', 'O Saathi', 30);
    let pair5 =makeAlbum('Rahat Fateh Ali Khan', 'Tere Bin');
    let pair6 =makeAlbum('Asim Azhar', 'Galat Fehmi', 44);
    
    console.log(pair4);
    console.log(pair5);
    console.log(pair6);
    