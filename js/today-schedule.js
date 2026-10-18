const DAY_NAMES = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

function renderTodaySchedule() {
  const now = new Date();
  const dayIndex = now.getDay(); // 0: Chủ Nhật, 1-6: Thứ 2 - Thứ 7
  const todaySchedule = WEEKLY_SCHEDULE.find(item => item.days.includes(dayIndex)) || WEEKLY_SCHEDULE[0];

  const dateStr = now.toLocaleDateString('vi-VN');
  document.getElementById('current-date-title').textContent = `${DAY_NAMES[dayIndex]} (${dateStr})`;
  document.getElementById('current-day-focus').textContent = `Trọng tâm: ${todaySchedule.focus}`;

  const completedTasks = getCompletedTasks();
  const container = document.getElementById('today-schedule-container');
  container.innerHTML = '';

  todaySchedule.sessions.forEach(session => {
    const card = document.createElement('div');
    card.className = 'session-card';

    const tasksHTML = session.tasks.map(task => {
      const isDone = completedTasks.includes(task.id);
      const linksHTML = task.links.map(l => 
        `<a href="${l.url}" target="_blank" class="link-btn">🔗 ${l.label}</a>`
      ).join('');

      return `
        <div class="task-item ${isDone ? 'completed' : ''}" id="item-${task.id}">
          <div class="task-top">
            <label class="task-label">
              <input type="checkbox" data-task-id="${task.id}" ${isDone ? 'checked' : ''}>
              <span class="task-title">${task.name}</span>
            </label>
          </div>
          <p class="task-detail">${task.detail}</p>
          <div class="task-actions">
            <button class="btn-secondary start-task-timer" data-duration="${task.duration}">
              ⏱️ Bấm giờ ${task.duration}p
            </button>
            ${linksHTML}
          </div>
        </div>
      `;
    }).join('');

    card.innerHTML = `
      <div class="session-header">
        <div>
          <span class="badge">${session.period}</span>
          <h3 style="margin-top: 6px;">${session.title}</h3>
        </div>
        <small style="color: var(--text-secondary); font-weight: 600;">🎯 ${session.goal}</small>
      </div>
      <div class="session-tasks">${tasksHTML}</div>
    `;

    container.appendChild(card);
  });

  // Gắn sự kiện tick hoàn thành
  container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const taskId = e.target.getAttribute('data-task-id');
      const taskCard = document.getElementById(`item-${taskId}`);
      taskCard.classList.toggle('completed', e.target.checked);
      toggleTaskCompletion(taskId, e.target.checked);
    });
  });

  // Gắn sự kiện bấm giờ nhanh cho từng nhiệm vụ
  container.querySelectorAll('.start-task-timer').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.getAttribute('data-duration'), 10);
      setTimerMinutes(mins, true);
    });
  });

  updateProgressBar();
}