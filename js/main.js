// 1. Chuyển đổi giữa các Tab
const navBtns = document.querySelectorAll('.nav-btn');
const tabSections = document.querySelectorAll('.tab-section');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    tabSections.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    const targetTab = btn.getAttribute('data-tab');
    document.getElementById(`tab-${targetTab}`).classList.add('active');
  });
});

// 2. Render Lịch trình cả tuần (Tab 2)
function renderWeeklySchedule() {
  const container = document.getElementById('weekly-schedule-container');
  container.innerHTML = WEEKLY_SCHEDULE.map(group => `
    <div class="weekly-block">
      <div class="roadmap-header">
        <h3>📅 ${group.dayLabel}</h3>
        <span class="badge">${group.focus}</span>
      </div>
      <div class="schedule-grid" style="margin-top: 14px;">
        ${group.sessions.map(sec => `
          <div style="border: 1px solid var(--border); border-radius: 10px; padding: 14px;">
            <strong>⏰ ${sec.period} —${sec.title}</strong>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">Mục tiêu: ${sec.goal}</p>
            <ul style="padding-left: 18px; font-size: 0.9rem;">
              ${sec.tasks.map(t => `<li style="margin-bottom: 6px;"><strong>${t.name}:</strong> ${t.detail}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 3. Render Lộ trình 0 - 6.5 IELTS (Tab 3)
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  container.innerHTML = IELTS_ROADMAP.map(stage => `
    <div class="roadmap-card">
      <div class="roadmap-header">
        <h3>🚀 ${stage.stage}: ${stage.title}</h3>
        <span class="badge">Mục tiêu: ${stage.target}</span>
      </div>
      <p style="margin-bottom: 12px;"><strong>🎯 Trọng tâm:</strong> ${stage.mainGoal}</p>
      <div style="margin-bottom: 12px;">
        <strong>🛠️ Công cụ sử dụng:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;">
          ${stage.tools.map(t => `<span class="badge" style="background: var(--bg-main); color: var(--text-primary); border: 1px solid var(--border);"><b>${t.group}:</b>${t.items.join(', ')}</span>`).join('')}
        </div>
      </div>
      <strong>📌 Nội dung & Cách thực hiện:</strong>
      <ul class="roadmap-actions-list">
        ${stage.actions.map(act => `<li>${act}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// 4. Render & Lọc Kho tài liệu (Tab 4)
let currentCategory = 'all';

function renderResources() {
  const keyword = document.getElementById('resource-search').value.toLowerCase().trim();
  const container = document.getElementById('resources-container');

  const filtered = STUDY_RESOURCES.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const matchKeyword = item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
    return matchCat && matchKeyword;
  });

  container.innerHTML = filtered.map(res => `
    <div class="resource-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge">${res.tag}</span>
          <small style="color: var(--text-secondary);">${res.categoryName}</small>
        </div>
        <h3 style="font-size: 1.08rem; margin-bottom: 6px;">${res.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">${res.description}</p>
      </div>
      <a href="${res.url}" target="_blank" class="btn-primary" style="justify-content: center;">Truy cập trang web ↗</a>
    </div>
  `).join('');
}

document.getElementById('resource-search').addEventListener('input', renderResources);

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentCategory = chip.getAttribute('data-cat');
    renderResources();
  });
});

// 5. Chế độ Sáng / Tối (Dark Mode)
const themeBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('study_hub_theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('study_hub_theme', isDark ? 'dark' : 'light');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
});

// Khởi chạy toàn bộ ứng dụng
document.addEventListener('DOMContentLoaded', () => {
  renderTodaySchedule();
  renderWeeklySchedule();
  renderRoadmap();
  renderResources();
  renderVocabList();
});