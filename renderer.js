window.addEventListener('DOMContentLoaded', async () => {
  const textarea = document.getElementById('note');
  const saveBtn = document.getElementById('save');
  const deleteBtn = document.getElementById('deleteBtn');

  const savedNote = await window.electronAPI.loadNote();
  textarea.value = savedNote;

  
  saveBtn.addEventListener('click', async () => {
    await window.electronAPI.saveNote(textarea.value);
    alert('Note saved successfully!');
  });

  deleteBtn.addEventListener('click', async () => {
    if (confirm('Really delete ALL notes? This cannot be undone!')) {
      await window.electronAPI.deleteNote();
      textarea.value = '';
      alert('All notes deleted!');
    }
  });
});