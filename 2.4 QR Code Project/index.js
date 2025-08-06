/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import fs from 'fs'


const answer = await input({ message: 'Enter your name' });
const saveInput = fs.writeFile('URL.txt',answer, (err) =>{
    if (err) throw err
    console.log("file written")
} )
import qr from 'qr-image';
const qr_svg = qr.image(answer, { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('answer.svg'));

// Generate QR as SVG string
const svg_string = qr.imageSync('answer', { type: 'svg' });

// Optional: log SVG string to verify
console.log(svg_string);

console.log(saveInput)

