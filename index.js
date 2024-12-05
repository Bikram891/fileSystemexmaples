// File System - Promise API
import fs from 'node:fs/promises';

//creating Directory - Path should be there

try {
    await fs.mkdir('d://Geeky//dummy');
    console.log("Directory Created...");
    
} catch (error) {
    console.log(error);
}


//---------Creating new File--------------------------/////
try {
    await fs.writeFile('Readme.txt','Hello I am Welcoming you');
    console.log('created New File...')
} catch (error) {
    console.log(error);
}
///////////////////////////////////////////////////////////

// /////-------------Read File--------------------------------///
try {
  const data =  await fs.readFile('Readme.txt','utf8');
    console.log(data);
} catch (error) {
    console.log(error);
}

//---------------------Append Data File-----------------------///

try {
    await fs.appendFile('Readme.txt',' and I am at home');
} catch (error) {
    console.log(error);
}

//-----------------Copy File--------------------------------///

try {
    await fs.copyFile('Readme.txt','info.txt');
} catch (error) {
    console.log(error);
}

//--------------------Get File Information---------------------///

try {
    const stats = await fs.stat('info.txt');
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);
} catch (error) {
    console.log(error);
}


