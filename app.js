window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('mainApp').classList.remove('hidden');
  }, 3000);
});

function generate(){
  const topic = document.getElementById('topic').value.trim();
  const result = document.getElementById('result');
  if(!topic){
    result.innerHTML = '<p>Please enter a topic.</p>';
    return;
  }
  result.innerHTML = `<h3>${topic}</h3>
  <ul>
    <li>Key concepts will appear here.</li>
    <li>Simple explanations will appear here.</li>
    <li>Flashcards and MCQs can be added next.</li>
  </ul>`;
}
