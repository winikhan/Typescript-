let ordinalnumbers :number[]= [1 ,2, 3, 4, 5, 6, 7, 8, 9];
for(let num of  ordinalnumbers){
    let ordinal_end :string ;

    if(num ==1){
        ordinal_end ="st";
    }else if(num ==2){
        ordinal_end ="nd";
        }else if(num ==3){
            ordinal_end ="rd";
        }else{
            ordinal_end ="th";
        }
       console.log(`${num}${ordinal_end}`)
;    }

