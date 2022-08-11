const fs = require('fs');
const path = require('path');

 function filterByQuery(query, notesArray) {
     let filteredResults = notesArray;
     if (query.name) {
       filteredResults = filteredResults.filter(note => note.name === query.name);
     }
     return filteredResults;
   }
  
   function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
   }
  
   function createNewNote(body, notesArray) {
     const note = body;
     notesArray.push(note);
     fs.writeFileSync(
       path.join(__dirname, '../data/db.json'),
       JSON.stringify({ note: notesArray }, null, 2)
     );
     return note;
   }

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
  };