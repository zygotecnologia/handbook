var markdownpdf = require("markdown-pdf");
var fs = require("fs");

fs.createReadStream("README.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("output/S1-Handbook.pdf"))

console.log("Done! :D");
