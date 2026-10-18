const VOCAB_STORAGE_KEY = 'english_hub_vocab_list';

function getVocabList() {
  const raw = localStorage.getItem(VOCAB_STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveVocabList(list) {
  localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(list));
}

function renderVocabList() {
  const list = getVocabList();
  const container = document.getElementById('vocab-list');
  document.getElementById('vocab-count').textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `<p style="color: var(--text-secondary);">Chưa có từ vựng nào. Hãy tra từ điển Longman và lưu 5–10 từ mỗi sáng nhé!</p>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="vocab-item">
      <div>
        <h4 style="color: var(--accent);">${item.word}</h4>
        <p style="font-weight: 500; margin: 4px 0;">${item.meaning}</p>
        ${item.example ? `<p style="font-size: 0.88rem; color: var(--text-secondary);">💡 ${item.example}</p>` : ''}
        <small style="color: var(--text-secondary); font-size: 0.75rem;">Ngày lưu: ${item.date}</small>
      </div>
      <button class="delete-vocab-btn" data-id="${item.id}">🗑️ Xóa</button>
    </div>
  `).join('');

  container.querySelectorAll('.delete-vocab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const updated = getVocabList().filter(v => v.id !== id);
      saveVocabList(updated);
      renderVocabList();
    });
  });
}

document.getElementById('vocab-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const word = document.getElementById('vocab-word').value.trim();
  const meaning = document.getElementById('vocab-meaning').value.trim();
  const example = document.getElementById('vocab-example').value.trim();

  if (!word || !meaning) return;

  const list = getVocabList();
  list.unshift({
    id: Date.now().toString(),
    word,
    meaning,
    example,
    date: new Date().toLocaleDateString('vi-VN')
  });

  saveVocabList(list);
  e.target.reset();
  renderVocabList();
});