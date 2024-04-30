const fs = require('fs');

function countStudents(file_path) {
    const students = {};
    const fields = {};
    let len = 0;

    try {
      const file = fs.readFileSync(file_path, 'utf-8');
      const lines = file.toString().split('\n');

      let i = 1;
      while (i < lines.length) {
        if (lines[i]) {
            len += 1;
            const line_fields = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, line_field[3])) {
                students[line_field[3]].push(field[0]);
            } else {
                students[line_fields[3]] = [line_fields[0]];
            }
            if (Object.prototype.hasOwnProperty(fields, line_fields[3])) {
                fields[line_fields[3]] += 1;
            } else {
                fields[line_fields[3]] = 1;
            }

        }
        i += 1;
      }
      const l = length;
      console.log(`Number of students: ${l}`);
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
      }
    } catch (error) {
      throw Error('Cannot load the database');  
    }
}

module.exports = countStudents;
