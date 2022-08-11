const $noteTitle = document.querySelector('#note-title');
const $noteText = document.querySelector('#note-textarea');

const printResults = resultArr => {
  console.log(resultArr);

  const noteHTML = resultArr.map(({ text, title }) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${title}>
      <h4 class="text-primary">${text}</h4>
    </div>
  </div>
    `;
  });

  $noteText.innerHTML = noteHTML.join('');
};

const getnotes = (formData = {}) => {
  let queryUrl = '/api/notes?';

  Object.entries(noteTitle).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      return response.json();
    })
    .then(noteTitle => {
      console.log(noteTitle);
      printResults(noteTitle);
    });
};

getNotes(noteObject);


$noteTitle.addEventListener('submit', handleGetNotesSubmit);

getNotes();