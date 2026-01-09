const { error } = require('console')

const fs = require('fs').promises
async function readFileContent() {
    try{
        const data = await fs.readFile('data.txt', 'utf-8')
        console.log("FileContent: ", data)
    } catch (error){
         console.error("Error reading the file:", error);
    }
}
readFileContent();