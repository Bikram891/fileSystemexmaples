import * as fs from 'fs';

fs.mkdirSync('d://GEEKY//dummy//syncapi5', (err) => {
    if (err) throw err;
    console.log('Directory Created..')
    }); 
    
fs.writeFileSync('syncfile.txt','Hello I am Sync File', (error) =>{
    if(error) throw error;
    console.log('File Created')
})    