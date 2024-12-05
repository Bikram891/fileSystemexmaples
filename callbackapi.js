import * as fs from 'fs';

//----------Make Directory in CallBack ----------------------//
// fs.mkdir('D://GEEKY//dummy//callback',(error)=>{
// if(error) throw error;
// console.log("Directory Created...");
// });
//---------------------------------------------------------//

// fs.readdir('D://GEEKY//dummy//callback',(error)=>{
//     if(error) throw error;
//     console.log("directory readed sucessfully");
// });

fs.writeFile('callback.txt','Hello Callback',(error)=>{
   if(error) throw error;
   console.log('File Created')
});