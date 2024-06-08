const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Path to your EJS file
const filePath = path.join(__dirname, 'views', 'index.ejs');
// Path to the output HTML file
const outputPath = path.join(__dirname, 'index.html');

// Read the EJS file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading EJS file:', err);
        return;
    }

    // Render the EJS file to HTML
    const html = ejs.render(data);

    // Write the HTML to a file
    fs.writeFile(outputPath, html, (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log('HTML file successfully created at', outputPath);
    });
});
