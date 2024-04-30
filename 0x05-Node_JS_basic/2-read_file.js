const fs = require('fs');

function countStudents(file_path) {
    const students = {};
    const fields = {};

    try {
        const file = fs.readFileSync(file_path, 'utf-8');
        const lines = file.toString().split('\n');
        
        for (let i = 1; i < lines.length; i++) { // Start from 1 to skip header row
            const line_fields = lines[i].split(',');

            if (line_fields.length < 4) continue; // Skip invalid lines
            
            const field = line_fields[3].trim(); // Trim to remove any leading/trailing spaces
            
            if (!students[field]) {
                students[field] = [];
                fields[field] = 0;
            }
            
            students[field].push(line_fields[0].trim());
            fields[field]++;
        }

        console.log(`Number of students: ${lines.length - 1}`); // Minus 1 to exclude header row

        for (const [key, value] of Object.entries(fields)) {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
