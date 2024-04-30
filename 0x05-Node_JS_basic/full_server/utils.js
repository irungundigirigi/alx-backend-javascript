const { readFile } = require('fs');

/**
 * Reads a database file and organizes student data by their group IDs.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<object>} A promise that resolves to an object containing student data grouped by group IDs.
 */
function readDatabase(filePath) {
  const groupedStudents = {}; // Object to store students grouped by group IDs
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const recordsWithoutHeader = lines.slice(1);
        for (let i = 0; i < recordsWithoutHeader.length; i += 1) {
          if (recordsWithoutHeader[i]) {
            const fields = recordsWithoutHeader[i].toString().split(',');
            const groupId = fields[3];
            const studentName = fields[0];
            if (Object.prototype.hasOwnProperty.call(groupedStudents, groupId)) {
              groupedStudents[groupId].push(studentName);
            } else {
              groupedStudents[groupId] = [studentName];
            }
          }
        }
        resolve(groupedStudents);
      }
    });
  });
}

module.exports = readDatabase;
