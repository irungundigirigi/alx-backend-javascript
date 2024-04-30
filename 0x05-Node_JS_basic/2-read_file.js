const fs = require('fs');

/**
 * Count the number of students in different fields based on the data in a CSV file.
 * @param {string} file_path - The path to the CSV file containing student data.
 * @throws {Error} Throws an error if the database cannot be loaded.
 */
function countStudents(file_path) {
    const students = {};
    const fields = {};

    try {
        const file = fs.readFileSync(file_path, 'utf-8');
        const lines = file.toString().split('\n');
        
        for (let i = 1; i < lines.length; i++) {
            const line_fields = lines[i].split(',');

            if (line_fields.length < 4) continue;
            
            const field = line_fields[3].trim();
            
            if (!students[field]) {
                students[field] = [];
                fields[field] = 0;
            }
            
            students[field].push(line_fields[0].trim());
            fields[field]++;
        }

        console.log(`Number of students: ${lines.length - 1}`);

        for (const [key, value] of Object.entries(fields)) {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
