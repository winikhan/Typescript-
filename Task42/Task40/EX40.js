function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var pair1 = make_album('Atif Aslam', 'O Saathi');
var pair2 = make_album('Rahat Fateh Ali Khan', 'Tere Bin');
var pair3 = make_album('Asim Azhar', 'Galat Fehmi');
//console.log(pair1);
//console.log(pair2);
//console.log(pair3);
function makeAlbum(artistName, albumTitle, numberofTrack) {
    return { artistName: artistName, albumTitle: albumTitle, numberofTrack: numberofTrack };
}
var pair4 = makeAlbum('Atif Aslam', 'O Saathi', 30);
var pair5 = makeAlbum('Rahat Fateh Ali Khan', 'Tere Bin');
var pair6 = makeAlbum('Asim Azhar', 'Galat Fehmi', 44);
console.log(pair4);
console.log(pair5);
console.log(pair6);
