function getTodayKey() {
  const now = new Date();
  return `study_tasks_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}`;
}

function getCompletedTasks() {
  const raw = localStorage.getItem(getTodayKey());
  return raw ? JSON.parse(raw) : [];
}

function toggleTaskCompletion(taskId, isChecked) {
  let completed = getCompletedTasks();
  if (isChecked && !completed.includes(taskId)) {
    completed.push(taskId);
  } else if (!isChecked) {
    completed = completed.filter(id => id !== taskId);
  }
  localStorage.setItem(getTodayKey(), JSON.stringify(completed));
  updateProgressBar();
}

function updateProgressBar() {
  const checkboxes = document.querySelectorAll('#today-schedule-container input[type="checkbox"]');
  const total = checkboxes.length;
  if (total === 0) return;

  let checkedCount = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) checkedCount++;
  });

  const percent = Math.round((checkedCount / total) * 100);
  document.getElementById('today-progress-text').textContent = `${percent}% (${checkedCount}/${total})`;
  document.getElementById('today-progress-fill').style.width = `${percent}%`;
}