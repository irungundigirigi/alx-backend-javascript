const { readFile } = require('fs');

/**
 * Count the number of students in different fields based on the data in a CSV file.
 * @param {string} fileName - The name of the CSV file containing student data.
 * @returns {Promise} A promise that resolves with the data read from the file.
 *                    Rejects with an error if the database cannot be loaded.
 */
function countStudents(fileName) {
  const studentsMap = {};
  const fieldsMap = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            totalStudents += 1;
            const fields = lines[i].toString().split(',');
            const field = fields[3];
            if (Object.prototype.hasOwnProperty.call(studentsMap, field)) {
              studentsMap[field].push(fields[0]);
            } else {
              studentsMap[field] = [fields[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fieldsMap, field)) {
              fieldsMap[field] += 1;
            } else {
              fieldsMap[field] = 1;
            }
          }
        }
        const numberOfStudents = totalStudents - 1;
        console.log(`Number of students: ${numberOfStudents}`);
        for (const [key, value] of Object.entries(fieldsMap)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${studentsMap[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;

