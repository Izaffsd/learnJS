// var star = '';

   
// for (var i = 6; i > 0; i--){
    
                    
//     for (var j = 0; j < i; j++){                                                  
//         star += "*";                                                               

        
//     }
//     star += '\n';
    


// }
// console.log(star);


// function generatePattern(rows) {
//     var pattern = '';
//     var rowscols = 6;
  
//     for (var i = 0; i < rowscols; i++) {
//       // Add leading spaces
//       for (var j = 0; j < i; j++) {
//         pattern += ' ';
//       }
  
//       // Add stars
//       for (var k = 0; k < rowscols - i; k++) {
//         pattern += '*';
//       }
  
//       // Move to the next line
//       pattern += '\n';
//     }
  
// //     return pattern;
// //   }
  
//   console.log(pattern);
  
// var pattern = '*';
// var rowscols = 6;

// for (var i = 0; i < rowscols; i++) {
  
//     console.log(pattern);

// }
// = 6 *

var pattern = '';
var rowscols = 6;
                // = 7
for (var i = 0; i <= rowscols; i++) {
// ****** 

    // Add leading spaces or ruang terkemuka
    for (var j = 0; j < i; j++) {
        pattern += ' ';
        // pattern += '*';
    }

     // Add stars
    for (var k = 0; k < rowscols - i; k++) {
        pattern += '*';

    }
        // ****** *****  ****   ***    **     *
    // pattern += ' ';
    pattern += '\n';


    // pattern += ' ';
    // * ** *** **** ***** 

    // pattern += '*';
    // * *  *   *    *     *
    

}
console.log(pattern);
