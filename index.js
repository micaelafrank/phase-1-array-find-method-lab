// code your solution here

// const superbowlWin = array => {
//     if (array.target[key[1]] === "W"){
//         return array.target[key[0]];
//     }
//     else{
//         return undefined;
//     }
// }

// record.find(superbowlWin);

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

let year;
let result; 

/*function checkWin(record){
    if (record.result === "W"){
        result = record.year;
        console.log(record.year);
    } else{
        result = undefined;
    }
return result;
}

superbowlWin = (record => record.find(checkWin){
    const result = 
};


let superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return result ? result.year : undefined;
}
*/

function superbowlWin(record){
    const winner = record.find( record => record.result === "W" );
        console.log(winner ? winner.year : undefined);
        return winner ? winner.year : undefined;
  }
  
  superbowlWin(record)