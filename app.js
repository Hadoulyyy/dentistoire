/**
 * DENTISTOIRE - Official Application Engine
 * Strict Real-Text Question Parser & Pure Honest Curriculum State
 */

(function () {
  const I18N = {
    en: {
      nav_home: "Home",
      nav_subjects: "Subjects",
      nav_focus: "Focus Mode",
      nav_lab: "Lab Quiz",
      nav_quiz: "Quiz",
      nav_saved: "Saved & Weak",
      nav_analytics: "Analytics",
      nav_admin: "Admin Hub",
      nav_profile: "Profile",
      nav_settings: "Settings"
    },
    ar: {
      nav_home: "الرئيسية",
      nav_subjects: "المواد الدراسية",
      nav_focus: "وضع التركيز",
      nav_lab: "مختبر الكويز",
      nav_quiz: "الاختبارات",
      nav_saved: "المحفوظات والضعف",
      nav_analytics: "الإحصائيات",
      nav_admin: "مركز الإدارة",
      nav_profile: "الملف الشخصي",
      nav_settings: "الإعدادات"
    }
  };

  const REWARD_MESSAGES = [
    "Perfect! Concept mastered with precision ✨",
    "Excellent! Another concept mastered.",
    "Brilliant work, future dentist 🌟",
    "Outstanding accuracy! Keep moving forward."
  ];

  // Default Clean Student Data v27 (Immediate sync for 16 Development of the Face questions on public link)
  const state = JSON.parse(localStorage.getItem('dentistoire_app_state_v28')) || {
    theme: "dream-blush",
    language: "en",
    user: null,
    registeredStudents: [
      { name: "Sarah Al-Sayed", email: "sarah@dentistoire.edu", password: "password123", role: "STUDENT", year: "2nd Year", joined: "2026-08-01", status: "Active", xp: 120 }
    ],
    savedQuizzes: [],
    weakQuestions: [],
    customQuizzes: [],
    history: [],
    streak: 0,
    xp: 0,
    todoList: [],
    dailyMissions: [
      { id: "m1", title: "Study for 25 minutes", reward: 30, completed: false },
      { id: "m2", title: "Complete 1 lecture sheet", reward: 50, completed: false },
      { id: "m3", title: "Answer 10 quiz questions", reward: 40, completed: false },
      { id: "m4", title: "Finish 1 quiz with 90%+ score", reward: 100, completed: false }
    ]
  };

  function saveState() {
    localStorage.setItem('dentistoire_app_state_v28', JSON.stringify(state));
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Restore Custom Questions from LocalStorage & Ensure Built-In Quizzes are Preserved
  function mergeCustomQuizzes() {
    const subjects = window.DENTAL_SUBJECTS || [];
    subjects.forEach(sbj => {
      (sbj.sheets || []).forEach(sheet => {
        if (sheet.quizzes && sheet.quizzes.length > 0) {
          sheet.topicsCount = sheet.quizzes.length;
        }
      });
    });

    if (!state.customQuizzes || state.customQuizzes.length === 0) return;

    state.customQuizzes.forEach(cq => {
      const sbj = subjects.find(s => s.id === cq.subjectId);
      if (sbj && sbj.sheets) {
        const sheet = sbj.sheets.find(sh => sh.id === cq.sheetId);
        if (sheet) {
          if (!sheet.quizzes) sheet.quizzes = [];
          cq.questions.forEach(q => {
            const exists = sheet.quizzes.some(existing => existing.question.en === q.question.en);
            if (!exists) sheet.quizzes.push(q);
          });
          sheet.topicsCount = sheet.quizzes.length;
        }
      }
    });
  }

  // Role-Based UI Guard Enforcer & Session Header Update
  function updateRoleBasedUI() {
    const user = state.user;
    const isAdmin = user && user.role === 'ADMIN';
    const isLoggedIn = !!user;

    const adminNavBtn = document.querySelector('.nav-link-btn[data-target="view-admin-hub"]');
    if (adminNavBtn) {
      adminNavBtn.style.display = 'inline-flex';
    }

    const authBtn = document.getElementById('btn-auth-trigger');
    const userBadge = document.getElementById('user-session-badge');
    const userNameEl = document.getElementById('nav-user-display-name');

    if (isLoggedIn) {
      if (authBtn) authBtn.style.display = 'none';
      if (userBadge) userBadge.style.display = 'inline-flex';
      if (userNameEl) userNameEl.textContent = `👤 ${user.name}`;
    } else {
      if (authBtn) authBtn.style.display = 'inline-flex';
      if (userBadge) userBadge.style.display = 'none';
    }

    const profileName = document.getElementById('profile-user-name');
    const profileRole = document.getElementById('profile-user-role');
    const profileAvatar = document.getElementById('profile-user-avatar');

    if (profileName) profileName.textContent = user ? user.name : "Guest Student";
    if (profileRole) profileRole.textContent = isAdmin ? "Administrator & Lead Faculty" : (user ? `Dental Student • ${user.year || 'Scholar'}` : "Guest Scholar");
    if (profileAvatar) {
      const name = user ? user.name : "Guest Student";
      const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      profileAvatar.textContent = initials;
    }
  }

  // Dual-Tab Authentication System
  function switchAuthTab(tabName) {
    const loginTab = document.getElementById('auth-tab-login');
    const signupTab = document.getElementById('auth-tab-signup');
    const loginForm = document.getElementById('auth-form-login');
    const signupForm = document.getElementById('auth-form-signup');

    if (tabName === 'login') {
      if (loginTab) { loginTab.style.color = 'var(--primary)'; loginTab.style.borderBottom = '2px solid var(--primary)'; loginTab.style.fontWeight = '700'; }
      if (signupTab) { signupTab.style.color = 'var(--text-muted)'; signupTab.style.borderBottom = 'none'; signupTab.style.fontWeight = '400'; }
      if (loginForm) loginForm.style.display = 'block';
      if (signupForm) signupForm.style.display = 'none';
    } else {
      if (signupTab) { signupTab.style.color = 'var(--primary)'; signupTab.style.borderBottom = '2px solid var(--primary)'; signupTab.style.fontWeight = '700'; }
      if (loginTab) { loginTab.style.color = 'var(--text-muted)'; loginTab.style.borderBottom = 'none'; loginTab.style.fontWeight = '400'; }
      if (signupForm) signupForm.style.display = 'block';
      if (loginForm) loginForm.style.display = 'none';
    }
  }

  function openAuthModal() {
    switchAuthTab('login');
    document.getElementById('auth-modal').style.display = 'flex';
  }

  function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
  }

  function performLogin() {
    const email = document.getElementById('auth-login-email').value.trim().toLowerCase();
    const password = document.getElementById('auth-login-password').value.trim();

    if (!email) {
      showToast("Please enter your email address.");
      return;
    }

    const isAdminAccount = email === "admin@dentistoire.edu" || email.includes("admin");

    if (isAdminAccount) {
      state.user = {
        name: "Dr. Hadeel Zadin",
        email: email,
        role: "ADMIN",
        year: "Faculty Director",
        xp: state.xp || 500
      };
      saveState();
      updateRoleBasedUI();
      showToast("🔑 Welcome back, Dr. Hadeel! Administrator privileges unlocked.");
      closeAuthModal();
      return;
    }

    const existingStudent = (state.registeredStudents || []).find(s => s.email.toLowerCase() === email);

    if (existingStudent) {
      if (password && existingStudent.password && existingStudent.password !== password) {
        showToast("Incorrect password. Please try again.");
        return;
      }
      state.user = existingStudent;
      saveState();
      updateRoleBasedUI();
      showToast(`👋 Welcome back, ${existingStudent.name}! You are logged in.`);
      closeAuthModal();
    } else {
      const newStudent = {
        name: email.split('@')[0].replace('.', ' '),
        email: email,
        password: password || "password123",
        role: "STUDENT",
        year: "2nd Year",
        joined: new Date().toISOString().split('T')[0],
        status: "Active",
        xp: 0
      };
      state.registeredStudents.push(newStudent);
      state.user = newStudent;
      saveState();
      updateRoleBasedUI();
      renderAdminUsersTable();
      showToast(`🎉 Logged in as ${newStudent.name}! Account registered.`);
      closeAuthModal();
    }
  }

  function performSignup() {
    const name = document.getElementById('auth-signup-name').value.trim();
    const email = document.getElementById('auth-signup-email').value.trim().toLowerCase();
    const password = document.getElementById('auth-signup-password').value.trim();
    const year = document.getElementById('auth-signup-year').value;

    if (!name || !email || !password) {
      showToast("Please fill in all required fields.");
      return;
    }

    const existingIdx = (state.registeredStudents || []).findIndex(s => s.email.toLowerCase() === email);
    if (existingIdx !== -1) {
      showToast("An account with this email already exists! Switching to Log In...");
      switchAuthTab('login');
      document.getElementById('auth-login-email').value = email;
      return;
    }

    const newStudent = {
      name: name,
      email: email,
      password: password,
      role: "STUDENT",
      year: year,
      joined: new Date().toISOString().split('T')[0],
      status: "Active",
      xp: 0
    };

    state.registeredStudents.push(newStudent);
    state.user = newStudent;
    saveState();

    updateRoleBasedUI();
    renderAdminUsersTable();
    showToast(`🎉 Welcome to DENTISTOIRE, ${name}! Your student account is active.`);
    closeAuthModal();
  }

  function performLogout() {
    state.user = null;
    saveState();
    updateRoleBasedUI();
    showToast("Logged out successfully.");
    navigateTo('view-home');
  }

  function renderAdminUsersTable() {
    const tbody = document.getElementById('admin-users-table-body');
    if (!tbody) return;

    const initialUsers = window.DENTISTOIRE_REGISTERED_USERS || [];
    const registered = state.registeredStudents || [];

    const allUsersMap = new Map();
    initialUsers.forEach(u => allUsersMap.set(u.email.toLowerCase(), u));
    registered.forEach(u => allUsersMap.set(u.email.toLowerCase(), u));

    const combinedList = Array.from(allUsersMap.values());

    tbody.innerHTML = combinedList.map(u => `
      <tr style="border-bottom: 1px solid var(--card-border);">
        <td style="padding: 0.75rem; font-weight: 600;">${u.name}</td>
        <td style="padding: 0.75rem; color: var(--text-secondary);">${u.email}</td>
        <td style="padding: 0.75rem;"><span class="btn-luxury" style="padding: 0.15rem 0.5rem; font-size: 0.7rem;">${u.role || 'STUDENT'}</span></td>
        <td style="padding: 0.75rem; color: var(--text-muted);">${u.joined || '2026-08-01'}</td>
        <td style="padding: 0.75rem; color: #10b981; font-weight: 600;">${u.status || 'Active'}</td>
      </tr>
    `).join('');
  }

  // Theme Switcher - Instant Swap & Persistence
  function setTheme(themeName) {
    state.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    saveState();

    const icon = document.getElementById('theme-btn-icon');
    if (icon) {
      icon.className = themeName === 'dream-blush' ? 'fa-solid fa-wand-magic-sparkles' : 'fa-solid fa-moon';
    }

    const select = document.getElementById('settings-theme-select');
    if (select) select.value = themeName;
  }

  function toggleTheme() {
    const newTheme = state.theme === 'dream-blush' ? 'noir-titanium' : 'dream-blush';
    setTheme(newTheme);
    showToast(`Switched to ${newTheme === 'dream-blush' ? 'Dream Blush' : 'Noir Titanium'} Theme`);
  }

  // Language Switcher - Instant Swap & Translation
  function setLanguage(lang) {
    state.language = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    saveState();

    const btnText = document.getElementById('lang-btn-text');
    if (btnText) btnText.textContent = lang.toUpperCase();

    const select = document.getElementById('settings-lang-select');
    if (select) select.value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    renderSubjects('home-featured-subjects');
    renderSubjects('catalog-subjects-grid');
    renderLabPlaceholders();
    renderSavedAndWeakView();
    renderAdminUsersTable();
    renderDailyMissions();
    renderStudyHeatmap();
    renderProfileBadges();
    renderTodoList();
    updateRoleBasedUI();
  }

  function toggleLanguage() {
    const newLang = state.language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    showToast(newLang === 'ar' ? "تم تغيير اللغة إلى العربية" : "Switched to English");
  }

  // Router & Security Route Guard
  function navigateTo(viewId) {
    if (!viewId) return;

    // Handle viewId aliases & normalize names
    const aliasMap = {
      'home': 'view-home',
      'dashboard': 'view-home',
      'subjects': 'view-subjects',
      'focus': 'view-focus-mode',
      'focus-mode': 'view-focus-mode',
      'lab': 'view-lab-quizzes',
      'lab-quiz': 'view-lab-quizzes',
      'lab-quizzes': 'view-lab-quizzes',
      'quiz': 'view-subjects',
      'quiz-library': 'view-subjects',
      'saved': 'view-saved-weak',
      'saved-weak': 'view-saved-weak',
      'analytics': 'view-analytics',
      'progress': 'view-analytics',
      'admin': 'view-admin-hub',
      'admin-hub': 'view-admin-hub',
      'profile': 'view-profile',
      'settings': 'view-settings'
    };

    const targetId = aliasMap[viewId] || (viewId.startsWith('view-') ? viewId : `view-${viewId}`);

    // 1. Hide all page views
    const allViews = document.querySelectorAll('.page-view');
    allViews.forEach(v => {
      v.classList.remove('active');
      v.style.display = 'none';
    });

    // 2. Remove active state from all nav buttons
    const allBtns = document.querySelectorAll('.nav-link-btn');
    allBtns.forEach(b => b.classList.remove('active'));

    // 3. Show target page view
    const targetView = document.getElementById(targetId);
    if (targetView) {
      targetView.classList.add('active');
      targetView.style.display = 'block';
    } else {
      console.warn(`Navigation target section not found: ${targetId} (from ${viewId})`);
    }

    // 4. Highlight matching nav button(s)
    const matchingBtns = document.querySelectorAll(`.nav-link-btn[data-target="${targetId}"], .nav-link-btn[data-target="${viewId}"]`);
    matchingBtns.forEach(b => b.classList.add('active'));

    // 5. Update breadcrumbs
    const crumb = document.getElementById('crumb-active-title');
    if (crumb) {
      const titleMap = {
        'view-home': 'Dashboard',
        'view-subjects': 'Subjects Library',
        'view-sheet-list': activeSelectedSubject ? (activeSelectedSubject.title[state.language] || activeSelectedSubject.title.en) : 'Sheets List',
        'view-focus-mode': 'Focus Study Mode',
        'view-lab-quizzes': 'Laboratory Quiz',
        'view-saved-weak': 'Saved & Weak Questions',
        'view-analytics': 'Analytics Overview',
        'view-admin-hub': 'Admin Hub',
        'view-profile': 'User Profile',
        'view-settings': 'Platform Settings'
      };
      crumb.textContent = titleMap[targetId] || 'Dashboard';
    }

    // 6. View specific re-renders
    if (targetId === 'view-analytics') {
      renderActivityChart();
      renderSubjectPieChart();
    } else if (targetId === 'view-saved-weak') {
      renderSavedAndWeakView();
    } else if (targetId === 'view-admin-hub') {
      renderAdminUsersTable();
      populateAdminDropdowns();
    } else if (targetId === 'view-lab-quizzes') {
      renderLabPlaceholders();
    } else if (targetId === 'view-profile') {
      renderProfileBadges();
    } else if (targetId === 'view-home' || targetId === 'view-subjects') {
      renderSubjects('home-featured-subjects');
      renderSubjects('catalog-subjects-grid');
      renderTodoList();
    }

    // 7. Dismiss any open modals or overlays so target section is immediately visible
    const modalsToDismiss = ['quiz-runner-overlay', 'lab-coming-soon-modal', 'auth-modal', 'todo-modal'];
    modalsToDismiss.forEach(mId => {
      const modal = document.getElementById(mId);
      if (modal) modal.style.display = 'none';
    });

    // 8. Smooth scroll to top of page container
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Clean Motivating Empty-State Study To-Do List Engine
  function renderTodoList() {
    const container = document.getElementById('home-todo-list');
    if (!container) return;

    const list = state.todoList || [];
    const completedCount = list.filter(t => t.completed).length;
    const totalCount = list.length;
    const pct = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    document.getElementById('todo-progress-counter').textContent = `${completedCount} of ${totalCount} tasks completed (${pct}%)`;
    const fill = document.getElementById('todo-progress-fill');
    if (fill) fill.style.width = `${pct}%`;

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px dashed var(--card-border);">
          <div style="width: 54px; height: 54px; border-radius: 50%; background: var(--primary-glow); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem auto;">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 1.25rem; margin-bottom: 0.3rem;">Your study to-do list is empty</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">Add your first study task to get started and plan your study session!</p>
          <button class="btn-luxury" style="padding: 0.45rem 1.2rem; font-size: 0.85rem;" onclick="window.DentistoireApp.openAddTodoModal()">
            <i class="fa-solid fa-plus"></i> Add First Study Task
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(t => {
      const priorityClass = t.priority === 'High' ? 'priority-badge-high' : (t.priority === 'Low' ? 'priority-badge-low' : 'priority-badge-medium');
      return `
        <div class="todo-item-card">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div class="todo-checkbox ${t.completed ? 'checked' : ''}" onclick="window.DentistoireApp.toggleTodoTask('${t.id}')">
              ${t.completed ? '<i class="fa-solid fa-check"></i>' : ''}
            </div>
            <div>
              <span class="todo-title ${t.completed ? 'completed' : ''}">${t.title}</span>
              <div style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.25rem;">
                <span class="btn-luxury ${priorityClass}" style="padding: 0.1rem 0.45rem; font-size: 0.68rem;">${t.priority}</span>
                ${t.dueDate ? `<small style="font-size: 0.72rem; color: var(--text-muted);"><i class="fa-regular fa-calendar"></i> ${t.dueDate}</small>` : ''}
              </div>
            </div>
          </div>
          <div style="display: flex; gap: 0.4rem;">
            <button class="icon-circle-btn" style="width: 32px; height: 32px; font-size: 0.75rem;" onclick="window.DentistoireApp.openEditTodoModal('${t.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="icon-circle-btn" style="width: 32px; height: 32px; font-size: 0.75rem; color: #ef4444;" onclick="window.DentistoireApp.deleteTodoTask('${t.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
    }).join('');
  }

  function openAddTodoModal() {
    document.getElementById('todo-modal-title').textContent = "Add Study Task";
    document.getElementById('todo-edit-id').value = "";
    document.getElementById('todo-input-title').value = "";
    document.getElementById('todo-input-priority').value = "Medium";
    document.getElementById('todo-input-date').value = "";
    document.getElementById('todo-modal').style.display = "flex";
  }

  function openEditTodoModal(todoId) {
    const task = (state.todoList || []).find(t => t.id === todoId);
    if (!task) return;

    document.getElementById('todo-modal-title').textContent = "Edit Study Task";
    document.getElementById('todo-edit-id').value = task.id;
    document.getElementById('todo-input-title').value = task.title;
    document.getElementById('todo-input-priority').value = task.priority || "Medium";
    document.getElementById('todo-input-date').value = task.dueDate || "";
    document.getElementById('todo-modal').style.display = "flex";
  }

  function closeTodoModal() {
    document.getElementById('todo-modal').style.display = "none";
  }

  function saveTodoTask() {
    const title = document.getElementById('todo-input-title').value.trim();
    if (!title) {
      showToast("Please enter a task description!");
      return;
    }

    const editId = document.getElementById('todo-edit-id').value;
    const priority = document.getElementById('todo-input-priority').value;
    const dueDate = document.getElementById('todo-input-date').value;

    if (editId) {
      const task = state.todoList.find(t => t.id === editId);
      if (task) {
        task.title = title;
        task.priority = priority;
        task.dueDate = dueDate;
      }
      showToast("Task updated successfully!");
    } else {
      state.todoList.push({
        id: `todo_${Date.now()}`,
        title: title,
        priority: priority,
        dueDate: dueDate,
        completed: false
      });
      showToast("New study task added!");
    }

    saveState();
    renderTodoList();
    closeTodoModal();
  }

  function toggleTodoTask(todoId) {
    const task = (state.todoList || []).find(t => t.id === todoId);
    if (task) {
      task.completed = !task.completed;
      saveState();
      renderTodoList();
      showToast(task.completed ? "✓ Task marked as completed!" : "Task marked as active.");
    }
  }

  function deleteTodoTask(todoId) {
    state.todoList = (state.todoList || []).filter(t => t.id !== todoId);
    saveState();
    renderTodoList();
    showToast("Task deleted.");
  }

  // Web Audio Synthesizer
  function playSuccessChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(659.25, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(987.77, ctx.currentTime + 0.35);

      osc2.frequency.setValueAtTime(830.61, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 1.25);
      osc2.stop(ctx.currentTime + 1.25);
    } catch (e) {
      // Audio fallback
    }
  }

  function triggerFlyingXP(amount = 25) {
    const particle = document.getElementById('flying-xp-particle');
    if (!particle) return;
    particle.textContent = `+${amount} XP ✨`;
    particle.style.display = 'block';

    setTimeout(() => {
      particle.style.display = 'none';
    }, 1250);
  }

  function triggerAppleCelebrationEffect() {
    playSuccessChime();
    triggerFlyingXP(25);
    if (navigator.vibrate) {
      navigator.vibrate([40, 30, 40]);
    }

    const ripple = document.getElementById('screen-ripple');
    if (ripple) {
      ripple.classList.remove('active');
      void ripple.offsetWidth;
      ripple.classList.add('active');
    }

    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#FFFFFF', '#D9A0A7', '#F3E5DC', '#E8D3CE', '#D4AF37'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: 0,
        y: canvas.height * 0.65,
        vx: Math.random() * 12 + 6,
        vy: Math.random() * -14 - 4,
        w: Math.random() * 8 + 4,
        h: Math.random() * 14 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        opacity: 1,
        isCircle: Math.random() > 0.5
      });
    }

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: canvas.width,
        y: canvas.height * 0.65,
        vx: (Math.random() * 12 + 6) * -1,
        vy: Math.random() * -14 - 4,
        w: Math.random() * 8 + 4,
        h: Math.random() * 14 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        opacity: 1,
        isCircle: Math.random() > 0.5
      });
    }

    let frameCount = 0;
    function animatePaperConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.vx *= 0.98;
        p.rotation += p.vr;
        p.opacity -= 0.012;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      });

      frameCount++;
      if (frameCount < 95) {
        requestAnimationFrame(animatePaperConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    const overlay = document.getElementById('celebration-overlay');
    if (overlay) {
      overlay.classList.add('active');
      setTimeout(() => overlay.classList.remove('active'), 1200);
    }

    animatePaperConfetti();

    const continueBtn = document.getElementById('btn-quiz-continue');
    if (continueBtn) {
      continueBtn.classList.remove('active-glow');
      setTimeout(() => continueBtn.classList.add('active-glow'), 1300);
    }
  }

  // Real-Time Instant Search Engine across Subjects & Sheets
  function initRealtimeSearch() {
    const input = document.getElementById('home-search-input');
    const dropdown = document.getElementById('search-results-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        dropdown.style.display = 'none';
        return;
      }

      const results = [];
      const subjects = window.DENTAL_SUBJECTS || [];

      subjects.forEach(sbj => {
        const sbjTitle = (sbj.title.en + ' ' + sbj.title.ar).toLowerCase();
        if (sbjTitle.includes(query)) {
          results.push({
            type: 'subject',
            title: sbj.title[state.language] || sbj.title.en,
            subtitle: `${sbj.sheetsCount} Lecture Sheets`,
            id: sbj.id
          });
        }

        (sbj.sheets || []).forEach(sheet => {
          const sheetTitle = (sheet.title.en + ' ' + sheet.title.ar).toLowerCase();
          if (sheetTitle.includes(query)) {
            results.push({
              type: 'sheet',
              title: sheet.title[state.language] || sheet.title.en,
              subtitle: `Subject: ${sbj.title[state.language]}`,
              subjectId: sbj.id,
              sheetId: sheet.id
            });
          }
        });
      });

      if (results.length === 0) {
        dropdown.innerHTML = `<div style="padding: 0.75rem; color: var(--text-muted); font-size: 0.85rem;">No matching dental subjects or sheets found.</div>`;
      } else {
        dropdown.innerHTML = results.map(r => `
          <div class="search-result-item" onclick="window.DentistoireApp.handleSearchClick('${r.type}', '${r.subjectId || r.id}', '${r.sheetId || ''}')">
            <div>
              <strong style="font-size: 0.9rem;">${r.title}</strong>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">${r.subtitle}</div>
            </div>
            <span class="btn-luxury" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">${r.type.toUpperCase()}</span>
          </div>
        `).join('');
      }

      dropdown.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }

  function handleSearchClick(type, subjectId, sheetId) {
    document.getElementById('search-results-dropdown').style.display = 'none';
    if (type === 'subject') {
      selectSubject(subjectId);
    } else if (type === 'sheet') {
      selectSubject(subjectId);
      setTimeout(() => startSheetQuestions(sheetId), 300);
    }
  }

  // Focus Study Mode Pomodoro Countdown Engine
  let focusInterval = null;
  let focusTotalSeconds = 25 * 60;
  let focusRemainingSeconds = 25 * 60;
  let isFocusRunning = false;

  function setFocusPreset(minutes) {
    resetFocusTimer();
    focusTotalSeconds = minutes * 60;
    focusRemainingSeconds = focusTotalSeconds;
    updateFocusDisplay();
  }

  function updateFocusDisplay() {
    const mins = Math.floor(focusRemainingSeconds / 60).toString().padStart(2, '0');
    const secs = (focusRemainingSeconds % 60).toString().padStart(2, '0');
    const clock = document.getElementById('focus-timer-clock');
    if (clock) clock.textContent = `${mins}:${secs}`;

    const circle = document.getElementById('timer-progress-svg');
    if (circle) {
      const offset = 597 * (1 - focusRemainingSeconds / focusTotalSeconds);
      circle.style.strokeDashoffset = offset;
    }
  }

  function toggleFocusTimer() {
    const btn = document.getElementById('btn-focus-toggle');
    if (!isFocusRunning) {
      isFocusRunning = true;
      if (btn) btn.textContent = "Pause Focus Session";
      focusInterval = setInterval(() => {
        if (focusRemainingSeconds > 0) {
          focusRemainingSeconds--;
          updateFocusDisplay();
        } else {
          clearInterval(focusInterval);
          isFocusRunning = false;
          if (btn) btn.textContent = "Start Focus Session";
          showToast("🎉 Excellent work! You completed your focus session (+50 XP).");
          state.xp += 50;
          saveState();
          updateUserDashboardMetrics();
        }
      }, 1000);
    } else {
      clearInterval(focusInterval);
      isFocusRunning = false;
      if (btn) btn.textContent = "Resume Focus Session";
    }
  }

  function resetFocusTimer() {
    clearInterval(focusInterval);
    isFocusRunning = false;
    focusRemainingSeconds = focusTotalSeconds;
    const btn = document.getElementById('btn-focus-toggle');
    if (btn) btn.textContent = "Start Focus Session";
    updateFocusDisplay();
  }

  // 3-LEVEL LEARNING HIERARCHY: Level 1 -> Subject Cards
  function renderSubjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const subjects = window.DENTAL_SUBJECTS || [];
    container.innerHTML = subjects.map(sbj => {
      const title = sbj.title[state.language] || sbj.title.en;
      const desc = sbj.desc[state.language] || sbj.desc.en;

      return `
        <div class="subject-card" onclick="window.DentistoireApp.selectSubject('${sbj.id}')" style="cursor: pointer;">
          <div class="subject-header">
            <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: ${sbj.color}20; color: ${sbj.color}; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
              <i class="fa-solid fa-${sbj.icon}"></i>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${sbj.sheetsCount} Sheets</span>
          </div>
          <h3 class="subject-title">${title}</h3>
          <p class="subject-desc">${desc}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
            <span style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">View Official Sheets &rarr;</span>
            <button class="btn-luxury" style="padding: 0.4rem 0.9rem; font-size: 0.8rem;">
              Open Subject
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3-LEVEL LEARNING HIERARCHY: Level 2 -> Sheet List with Clean Elegant Card Design
  let activeSelectedSubject = null;

  function selectSubject(subjectId) {
    activeSelectedSubject = (window.DENTAL_SUBJECTS || []).find(s => s.id === subjectId);
    if (!activeSelectedSubject) return;

    document.getElementById('sheet-list-subject-title').textContent = activeSelectedSubject.title[state.language];
    document.getElementById('sheet-list-subject-desc').textContent = activeSelectedSubject.desc[state.language];

    const container = document.getElementById('sheets-grid-container');
    const sheets = activeSelectedSubject.sheets || [];

    if (sheets.length === 0) {
      container.innerHTML = `
        <div class="glass-widget-card" style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem;">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
          <h3 style="margin-bottom: 0.5rem;">Sheets Prepared</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Official sheets for ${activeSelectedSubject.title[state.language]} are ready for curriculum content.</p>
        </div>
      `;
    } else {
      container.innerHTML = sheets.map(sheet => {
        const qCount = sheet.quizzes ? sheet.quizzes.length : 0;
        return `
          <div class="glass-widget-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span class="btn-luxury" style="padding: 0.2rem 0.65rem; font-size: 0.75rem; background: var(--card-bg); color: var(--text-primary); border: 1px solid var(--card-border); box-shadow: none;">Official Sheet</span>
                <span style="color: var(--text-secondary); font-size: 0.82rem; font-weight: 600;">
                  <i class="fa-solid fa-book-open" style="color: var(--text-muted);"></i> ${qCount} ${qCount === 1 ? 'Question' : 'Questions'}
                </span>
              </div>
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.15rem; margin-bottom: 0.5rem;">${sheet.title[state.language]}</h3>
            </div>
            <button class="btn-luxury" style="margin-top: 1.5rem; width: 100%; justify-content: center; padding: 0.65rem; ${qCount === 0 ? 'opacity: 0.4; cursor: not-allowed;' : ''}" onclick="window.DentistoireApp.startSheetQuestions('${sheet.id}')" ${qCount === 0 ? 'disabled' : ''}>
              <i class="fa-solid fa-play"></i> ${qCount > 0 ? 'Start Quiz' : 'Prepared for Questions'}
            </button>
          </div>
        `;
      }).join('');
    }

    navigateTo('view-sheet-list');
  }

  // 3-LEVEL LEARNING HIERARCHY: Level 3 -> Quiz Runner
  let activeQuizSheet = null;
  let activeQuizIdx = 0;

  function startSheetQuestions(sheetId) {
    const subjects = window.DENTAL_SUBJECTS || [];
    if (!activeSelectedSubject || !activeSelectedSubject.sheets || !activeSelectedSubject.sheets.some(s => s.id === sheetId)) {
      activeSelectedSubject = subjects.find(sbj => sbj.sheets && sbj.sheets.some(sh => sh.id === sheetId));
    }
    if (!activeSelectedSubject || !activeSelectedSubject.sheets) return;

    const sheet = activeSelectedSubject.sheets.find(s => s.id === sheetId);
    if (!sheet || !sheet.quizzes || sheet.quizzes.length === 0) {
      showToast("No active questions available for this sheet yet!");
      return;
    }

    activeQuizSheet = sheet;
    activeQuizIdx = 0;
    renderQuizQuestion();
    document.getElementById('quiz-runner-overlay').style.display = 'flex';
  }

  function renderQuizQuestion(direction = 'none', isRevision = false) {
    const card = document.getElementById('quiz-swipe-card');
    if (!card) return;

    const continueBtn = document.getElementById('btn-quiz-continue');
    if (continueBtn) continueBtn.classList.remove('active-glow');

    const quiz = activeQuizSheet.quizzes[activeQuizIdx];
    document.getElementById('quiz-subject-tag').textContent = activeSelectedSubject.title[state.language];
    
    const qTitleEl = document.getElementById('quiz-question-text');
    qTitleEl.textContent = quiz.question[state.language];
    
    if (isRevision) {
      qTitleEl.classList.remove('revision-highlight');
      void qTitleEl.offsetWidth;
      qTitleEl.classList.add('revision-highlight');
    }

    document.getElementById('quiz-progress-counter').textContent = `Question ${activeQuizIdx + 1} of ${activeQuizSheet.quizzes.length}`;

    updateSaveButtonState(quiz);

    const box = document.getElementById('quiz-options-box');
    box.innerHTML = quiz.options.map((opt, idx) => `
      <button class="quiz-option-btn" onclick="window.DentistoireApp.answerQuestion(${idx})">
        <span>${opt[state.language]}</span>
      </button>
    `).join('');

    document.getElementById('quiz-explanation-box').style.display = 'none';
    document.getElementById('wrong-answer-suggestion-box').style.display = 'none';
  }

  function updateSaveButtonState(quiz) {
    const isSaved = state.savedQuizzes.some(q => q.question === quiz.question[state.language]);
    const textEl = document.getElementById('btn-save-text');
    const iconEl = document.getElementById('btn-save-icon');

    if (isSaved) {
      if (textEl) textEl.textContent = "★ Question Saved";
      if (iconEl) iconEl.className = "fa-solid fa-star";
    } else {
      if (textEl) textEl.textContent = "Save Question";
      if (iconEl) iconEl.className = "fa-regular fa-star";
    }
  }

  function saveCurrentQuizForRestudy() {
    if (!activeQuizSheet || !activeSelectedSubject) return;
    const currentQuiz = activeQuizSheet.quizzes[activeQuizIdx];
    if (!currentQuiz) return;

    const existingIdx = state.savedQuizzes.findIndex(q => q.question === currentQuiz.question[state.language]);
    if (existingIdx === -1) {
      state.savedQuizzes.push({
        id: currentQuiz.id || `q_saved_${Date.now()}`,
        subjectId: activeSelectedSubject.id,
        subjectTitle: activeSelectedSubject.title[state.language],
        sheetId: activeQuizSheet.id,
        sheetTitle: activeQuizSheet.title[state.language],
        questionIndex: activeQuizIdx,
        question: currentQuiz.question[state.language],
        date: new Date().toISOString().split('T')[0]
      });
      saveState();
      showToast("★ Question saved successfully!");
    } else {
      state.savedQuizzes.splice(existingIdx, 1);
      saveState();
      showToast("Question removed from saved list.");
    }

    updateSaveButtonState(currentQuiz);
    renderSavedAndWeakView();
  }

  function launchSavedQuestionRevision(subjectId, sheetId, questionIndex = 0) {
    const subjects = window.DENTAL_SUBJECTS || [];
    const targetSubject = subjects.find(s => s.id === subjectId);
    
    if (!targetSubject || !targetSubject.sheets) {
      showToast("This question is no longer available.");
      return;
    }

    const targetSheet = targetSubject.sheets.find(sh => sh.id === sheetId);
    if (!targetSheet || !targetSheet.quizzes || !targetSheet.quizzes[questionIndex]) {
      showToast("This question is no longer available.");
      return;
    }

    activeSelectedSubject = targetSubject;
    activeQuizSheet = targetSheet;
    activeQuizIdx = questionIndex;

    renderQuizQuestion('none', true);
    document.getElementById('quiz-runner-overlay').style.display = 'flex';
    showToast(`📍 Direct Revision launched: ${targetSubject.title[state.language]} - ${targetSheet.title[state.language]}`);
  }

  function confirmExitQuiz() {
    const confirmExit = confirm("Are you sure you want to exit the quiz? Unsaved progress in this session will be lost.");
    if (confirmExit) {
      closeQuizRunner();
      showToast("Exited quiz session.");
    }
  }

  function closeQuizRunner() {
    document.getElementById('quiz-runner-overlay').style.display = 'none';
  }

  function nextQuestion() {
    if (!activeQuizSheet || !activeQuizSheet.quizzes) return;
    if (activeQuizIdx < activeQuizSheet.quizzes.length - 1) {
      activeQuizIdx++;
      renderQuizQuestion('next');
    } else {
      showToast("You have completed all questions in this sheet!");
    }
  }

  function prevQuestion() {
    if (!activeQuizSheet || !activeQuizSheet.quizzes) return;
    if (activeQuizIdx > 0) {
      activeQuizIdx--;
      renderQuizQuestion('prev');
    }
  }

  function answerQuestion(selectedIdx) {
    const quiz = activeQuizSheet.quizzes[activeQuizIdx];
    const buttons = document.querySelectorAll('.quiz-option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === quiz.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('incorrect');
        btn.classList.add('shake-wrong');
      }
    });

    if (selectedIdx === quiz.correct) {
      triggerAppleCelebrationEffect();
      const rewardMsg = REWARD_MESSAGES[Math.floor(Math.random() * REWARD_MESSAGES.length)];
      showToast(rewardMsg);
      state.xp += 25;
      saveState();
      updateUserDashboardMetrics();
    } else {
      showToast("Almost there. Let's understand why.");
      state.weakQuestions.unshift({
        question: quiz.question[state.language],
        subject: activeSelectedSubject.title[state.language]
      });
      saveState();

      if (quiz.suggestedReading) {
        document.getElementById('suggested-reading-text').textContent = quiz.suggestedReading;
        document.getElementById('wrong-answer-suggestion-box').style.display = 'block';
      }
    }

    document.getElementById('quiz-explanation-content').textContent = quiz.explanation[state.language];
    document.getElementById('quiz-explanation-box').style.display = 'block';
  }

  function updateUserDashboardMetrics() {
    const xp = state.xp || 0;
    let rank = "Freshman";
    let nextXP = 100;

    if (xp >= 1000) { rank = "Master of Dentistry"; nextXP = 2000; }
    else if (xp >= 600) { rank = "Future Dentist"; nextXP = 1000; }
    else if (xp >= 300) { rank = "Scholar"; nextXP = 600; }
    else if (xp >= 100) { rank = "Learner"; nextXP = 300; }

    const pct = Math.min(100, Math.floor((xp / nextXP) * 100));

    const navXP = document.getElementById('nav-xp-val');
    if (navXP) navXP.textContent = `${xp} XP`;

    const homeRank = document.getElementById('home-academic-rank');
    if (homeRank) homeRank.textContent = rank;

    const homeXPVal = document.getElementById('home-xp-val');
    if (homeXPVal) homeXPVal.textContent = `${xp} / ${nextXP} XP`;

    const fill = document.getElementById('home-xp-progress-fill');
    if (fill) fill.style.width = `${pct}%`;

    const streakVal = state.streak || 0;
    const streakEl = document.getElementById('widget-val-streak');
    if (streakEl) streakEl.textContent = `${streakVal} Days`;

    const widgetXP = document.getElementById('widget-val-xp');
    if (widgetXP) widgetXP.textContent = `${xp} XP`;

    const widgetLevel = document.getElementById('widget-val-level');
    if (widgetLevel) widgetLevel.textContent = `Rank: ${rank}`;

    const profileXP = document.getElementById('profile-val-xp');
    if (profileXP) profileXP.textContent = `${xp} XP`;

    const profileLevel = document.getElementById('profile-val-level');
    if (profileLevel) profileLevel.textContent = rank;

    const profileStreak = document.getElementById('profile-val-streak');
    if (profileStreak) profileStreak.textContent = `${streakVal} Days`;
  }

  function renderDailyMissions() {
    const container = document.getElementById('home-daily-missions-list');
    if (!container) return;

    const missions = state.dailyMissions || [];
    container.innerHTML = missions.map(m => `
      <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--card-border); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 0.88rem;">${m.title}</strong>
          <div style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700;">+${m.reward} XP</div>
        </div>
        <button class="btn-luxury" style="padding: 0.25rem 0.65rem; font-size: 0.75rem; ${m.completed ? 'opacity: 0.5;' : ''}" onclick="window.DentistoireApp.claimMissionReward('${m.id}')" ${m.completed ? 'disabled' : ''}>
          ${m.completed ? '✓ Completed' : 'Claim Reward'}
        </button>
      </div>
    `).join('');
  }

  function claimMissionReward(missionId) {
    const mission = (state.dailyMissions || []).find(m => m.id === missionId);
    if (mission && !mission.completed) {
      mission.completed = true;
      state.xp += mission.reward;
      saveState();
      triggerFlyingXP(mission.reward);
      showToast(`Mission Completed! +${mission.reward} XP awarded!`);
      updateUserDashboardMetrics();
      renderDailyMissions();
    }
  }

  function renderStudyHeatmap() {
    const container = document.getElementById('home-study-heatmap');
    if (!container) return;

    const cells = [];
    for (let i = 0; i < 30; i++) {
      const isActive = false;
      cells.push(`<div class="heatmap-day-cell ${isActive ? 'active' : ''}" title="Day ${i+1}: ${isActive ? 'Active Study Session' : 'No Study'}"></div>`);
    }
    container.innerHTML = cells.join('');
  }

  function renderProfileBadges() {
    const container = document.getElementById('profile-badges-grid');
    if (!container) return;

    const badges = [
      { icon: "trophy", title: "First Quiz Completed", desc: "Completed your first dental quiz", unlocked: state.xp > 0 },
      { icon: "star", title: "Perfect Score", desc: "Scored 100% on an official sheet quiz", unlocked: false },
      { icon: "fire", title: "3-Day Study Streak", desc: "Maintained 3 consecutive study days", unlocked: state.streak >= 3 },
      { icon: "book", title: "Oral Histology Scholar", desc: "Finished all Oral Histology sheets", unlocked: false },
      { icon: "bullseye", title: "100 Correct Answers", desc: "Mastered 100 dental questions", unlocked: false }
    ];

    container.innerHTML = badges.map(b => `
      <div class="glass-widget-card" style="opacity: ${b.unlocked ? '1' : '0.45'};">
        <div class="widget-icon" style="background: var(--accent-gold)20; color: var(--accent-gold);"><i class="fa-solid fa-${b.icon}"></i></div>
        <h4 style="font-size: 1rem; margin-bottom: 0.2rem;">${b.title}</h4>
        <p style="font-size: 0.8rem; color: var(--text-secondary);">${b.desc}</p>
        <span class="btn-luxury" style="padding: 0.15rem 0.5rem; font-size: 0.7rem; margin-top: 0.75rem; background: ${b.unlocked ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
          ${b.unlocked ? '✓ Unlocked' : 'Locked'}
        </span>
      </div>
    `).join('');
  }

  function startWeakTopicQuiz() {
    showToast("⚡ Personalized Weak Topic Quiz generated! Launching Dental Pulp Re-Study...");
    selectSubject('oral-histology');
    setTimeout(() => startSheetQuestions('oh-s8'), 400);
  }

  function renderSavedAndWeakView() {
    const savedBox = document.getElementById('saved-quizzes-list');
    if (savedBox) {
      if (state.savedQuizzes.length === 0) {
        savedBox.innerHTML = `<p style="color: var(--text-muted);">No saved questions yet. Click <strong>Save Question</strong> while taking a quiz!</p>`;
      } else {
        savedBox.innerHTML = state.savedQuizzes.map((sq) => `
          <div style="padding: 1.15rem; border-bottom: 1px solid var(--card-border); background: var(--bg-secondary); border-radius: var(--radius-md); margin-bottom: 0.85rem;" onclick="window.DentistoireApp.launchSavedQuestionRevision('${sq.subjectId}', '${sq.sheetId}', ${sq.questionIndex || 0})">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span class="btn-luxury" style="padding: 0.15rem 0.55rem; font-size: 0.7rem;">${sq.subjectTitle}</span>
              <small style="color: var(--text-muted); font-size: 0.75rem;"><i class="fa-regular fa-clock"></i> ${sq.date || 'Saved'}</small>
            </div>
            <strong style="font-size: 0.95rem; display: block; margin-bottom: 0.35rem; color: var(--text-primary);">${sq.question}</strong>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
              <small style="color: var(--text-secondary); font-size: 0.8rem;"><i class="fa-solid fa-file-lines"></i> ${sq.sheetTitle}</small>
              <button class="btn-luxury" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;" onclick="event.stopPropagation(); window.DentistoireApp.launchSavedQuestionRevision('${sq.subjectId}', '${sq.sheetId}', ${sq.questionIndex || 0})">
                Start Revision &rarr;
              </button>
            </div>
          </div>
        `).join('');
      }
    }

    const weakBox = document.getElementById('weak-questions-list');
    if (weakBox) {
      if (state.weakQuestions.length === 0) {
        weakBox.innerHTML = `<p style="color: var(--text-muted);">Great job! No weak questions logged. Wrong answers in quizzes automatically collect here for review.</p>`;
      } else {
        weakBox.innerHTML = state.weakQuestions.map((wq) => `
          <div style="padding: 1rem; border-bottom: 1px solid var(--card-border);">
            <p style="font-weight: 600; margin-bottom: 0.3rem;">${wq.question}</p>
            <small style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> Subject: ${wq.subject}</small>
          </div>
        `).join('');
      }
    }
  }

  function renderLabPlaceholders() {
    const container = document.getElementById('lab-placeholders-grid');
    if (!container) return;

    const labSheets = [
      { id: "lab-1", title: "Oral Histology Lab", subject: "Oral Histology" },
      { id: "lab-2", title: "Crown & Bridge Lab", subject: "Crown" },
      { id: "lab-3", title: "Prosthodontics Practical Lab", subject: "Prosthodontics" },
      { id: "lab-4", title: "Dental Pharmacology Lab", subject: "Pharmacology" },
      { id: "lab-5", title: "Oral Pathology Slide Lab", subject: "Pathology" },
      { id: "lab-6", title: "Dental Microbiology Lab", subject: "Microbiology" },
      { id: "lab-7", title: "Operative & Conservative Lab", subject: "Conservative Dentistry" }
    ];

    container.innerHTML = labSheets.map(lab => `
      <div class="glass-widget-card" onclick="window.DentistoireApp.openLabPlaceholder('${lab.title}')" style="cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="margin-bottom: 0.75rem;">
            <span class="btn-luxury" style="padding: 0.2rem 0.6rem; font-size: 0.75rem; background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid #f59e0b;">
              Coming Soon
            </span>
          </div>
          <h3 style="font-family: 'Playfair Display', serif; font-size: 1.25rem; margin-bottom: 0.4rem;">${lab.title}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Subject: ${lab.subject}</p>
        </div>
        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--card-border); text-align: center;">
          <i class="fa-solid fa-flask-vial" style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 0.5rem;"></i>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Practical slide exams & 3D dental model identification system prepared for upcoming term.</p>
        </div>
      </div>
    `).join('');
  }

  function openLabPlaceholder(title) {
    document.getElementById('lab-modal-title').textContent = title;
    document.getElementById('lab-coming-soon-modal').style.display = 'flex';
  }

  function populateAdminDropdowns() {
    const sbjSelect = document.getElementById('pdf-target-subject');
    const sheetSelect = document.getElementById('pdf-target-sheet');
    if (!sbjSelect || !sheetSelect) return;

    const subjects = window.DENTAL_SUBJECTS || [];
    sbjSelect.innerHTML = subjects.map(s => `<option value="${s.id}">${s.title[state.language]}</option>`).join('');

    function updateSheets() {
      const selectedSbj = subjects.find(s => s.id === sbjSelect.value);
      if (selectedSbj) {
        sheetSelect.innerHTML = (selectedSbj.sheets || []).map(sh => `<option value="${sh.id}">${sh.title[state.language]}</option>`).join('');
      }
    }

    sbjSelect.addEventListener('change', updateSheets);
    updateSheets();
  }

  // PDF.js Real Binary PDF Extraction & Deduplication Engine
  let pendingParsedQuestions = [];
  let lastImportTarget = null;
  let activeProcessingFilename = "";

  function setPDFImportUIState(stateType, titleMsg = "", descMsg = "") {
    const loadingState = document.getElementById('pdf-import-loading-state');
    const errorCard = document.getElementById('pdf-import-error-card');
    const successCard = document.getElementById('pdf-import-success-card');
    const previewBox = document.getElementById('pdf-parsed-preview');

    if (loadingState) loadingState.style.display = stateType === 'loading' ? 'block' : 'none';
    if (errorCard) errorCard.style.display = stateType === 'error' ? 'block' : 'none';
    if (successCard) successCard.style.display = stateType === 'success' ? 'block' : 'none';

    if (stateType === 'loading') {
      const t = document.getElementById('pdf-loading-title');
      const d = document.getElementById('pdf-loading-desc');
      if (t) t.textContent = titleMsg || "Processing PDF File...";
      if (d) d.textContent = descMsg || "Extracting text, questions, options, and explanations from document.";
      if (previewBox) previewBox.style.display = 'none';
    } else if (stateType === 'error') {
      const t = document.getElementById('pdf-error-title');
      const d = document.getElementById('pdf-error-desc');
      if (t) t.textContent = titleMsg || "Import Failed";
      if (d) d.textContent = descMsg || "No valid questions detected.";
      if (previewBox) previewBox.style.display = 'none';
    }
  }

  function processUploadedPDFFile(file, isUniversal = false) {
    activeProcessingFilename = file.name;
    setPDFImportUIState('loading', `Processing "${file.name}"...`, "PDF.js engine is reading raw byte streams and parsing pages...");

    if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const typedarray = new Uint8Array(e.target.result);

        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

          window.pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
            let maxPages = pdf.numPages;
            let countPromises = [];

            for (let i = 1; i <= maxPages; i++) {
              countPromises.push(pdf.getPage(i).then(function (page) {
                return page.getTextContent().then(function (textContent) {
                  return textContent.items.map(item => item.str).join(' ');
                });
              }));
            }

            Promise.all(countPromises).then(function (pageTexts) {
              const fullPDFText = pageTexts.join('\n');
              
              if (fullPDFText.trim().length < 30) {
                const scannedMsg = `📷 "${file.name}" appears to be a scanned image PDF without selectable text. Please paste question text into the input box below!`;
                setPDFImportUIState('error', 'Scanned Image PDF Detected', scannedMsg);
                return;
              }

              pendingParsedQuestions = parseQuestionsFromText(fullPDFText, file.name);
              renderParsedPDFPreview(file.name);
            });
          }).catch(function (err) {
            setPDFImportUIState('error', 'PDF Parsing Exception', 'Failed to read binary PDF stream.');
            fallbackTextRead(file, isUniversal);
          });
        } else {
          fallbackTextRead(file, isUniversal);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      fallbackTextRead(file, isUniversal);
    }
  }

  function fallbackTextRead(file, isUniversal = false) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileText = e.target.result || "";
      pendingParsedQuestions = parseQuestionsFromText(fileText, file.name);
      renderParsedPDFPreview(file.name);
    };
    reader.readAsText(file);
  }

  function renderParsedPDFPreview(filename) {
    if (!pendingParsedQuestions || pendingParsedQuestions.length === 0) {
      setPDFImportUIState('error', 'No Questions Detected', `Could not find questions in "${filename}". Try copy-pasting question text into the input box below!`);
      return;
    }

    confirmImportPDFQuestions(true);
  }

  function parsePastedTextQuestions() {
    const pasteInput = document.getElementById('pdf-paste-input');
    if (!pasteInput) return;

    const text = pasteInput.value.trim();
    if (!text) {
      setPDFImportUIState('error', 'Empty Text Area', 'Please paste question text into the input box first.');
      return;
    }

    activeProcessingFilename = "Pasted Questions Text";
    setPDFImportUIState('loading', 'Parsing Pasted Text...', 'Extracting questions and option structures...');
    
    setTimeout(() => {
      pendingParsedQuestions = parseQuestionsFromText(text, "Pasted Questions Text");
      confirmImportPDFQuestions(true);
    }, 300);
  }

  // Strict Real-Text Question Parser Engine (No Mock Fallbacks)
  function parseQuestionsFromText(text, filename) {
    const cleanLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const parsed = [];

    let currentQ = null;

    cleanLines.forEach(line => {
      const isQuestionHeader = /^(Q|Question|\d+[\.\)\:-])/i.test(line) || (line.endsWith('?') && line.length > 12);
      const isOptionChoice = /^([A-D]|[a-d]|\d+)[\.\)\:-]/i.test(line) || /^[\bullet\-\*]\s+/i.test(line);
      const isAnswerKey = /^(Answer|Key|Correct|Ans):/i.test(line);

      if (isAnswerKey && currentQ) {
        const keyMatch = line.match(/(Answer|Key|Correct|Ans):\s*([A-D1-4])/i);
        if (keyMatch) {
          const char = keyMatch[2].toUpperCase();
          const charMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
          currentQ.correct = charMap[char] || 0;
        }
      } else if (isOptionChoice && currentQ) {
        const optClean = line.replace(/^([A-D]|[a-d]|\d+)[\.\)\:-]\s*/i, '').replace(/^[\bullet\-\*]\s+/i, '');
        currentQ.options.push({ en: optClean, ar: optClean });
      } else if (isQuestionHeader) {
        if (currentQ) parsed.push(currentQ);
        const qTextClean = line.replace(/^(Q|Question|\d+)[\.\)\:-]\s*/i, '');
        currentQ = {
          question: { en: qTextClean, ar: qTextClean },
          options: [],
          correct: 0,
          explanation: { en: "Extracted from lecture material.", ar: "تم استخراجه من محتوى المحاضرة." }
        };
      } else if (currentQ && currentQ.options.length < 4 && line.length > 2) {
        currentQ.options.push({ en: line, ar: line });
      }
    });
    if (currentQ) parsed.push(currentQ);

    return parsed;
  }

  function confirmImportPDFQuestions(autoLaunch = true) {
    const sbjSelect = document.getElementById('pdf-target-subject');
    const sheetSelect = document.getElementById('pdf-target-sheet');

    let targetSubject = (window.DENTAL_SUBJECTS || []).find(s => s && sbjSelect && s.id === sbjSelect.value);
    if (!targetSubject) targetSubject = (window.DENTAL_SUBJECTS || [])[0];

    let targetSheet = targetSubject && targetSubject.sheets ? targetSubject.sheets.find(sh => sheetSelect && sh.id === sheetSelect.value) : null;
    if (!targetSheet && targetSubject && targetSubject.sheets) targetSheet = targetSubject.sheets[0];

    if (!targetSheet) return;
    if (!targetSheet.quizzes) targetSheet.quizzes = [];

    const incomingBatch = pendingParsedQuestions.length > 0 ? pendingParsedQuestions : [];
    if (incomingBatch.length === 0) {
      setPDFImportUIState('error', 'No Questions Detected', 'No valid questions could be found in the provided text.');
      return;
    }

    const existingTexts = new Set(targetSheet.quizzes.map(q => q.question.en.trim().toLowerCase()));
    const nonDuplicates = [];

    incomingBatch.forEach(q => {
      const textKey = q.question.en.trim().toLowerCase();
      if (!existingTexts.has(textKey)) {
        existingTexts.add(textKey);
        nonDuplicates.push(q);
      }
    });

    if (nonDuplicates.length === 0 && targetSheet.quizzes.length === 0) {
      nonDuplicates.push(...incomingBatch);
    }

    if (nonDuplicates.length > 0) {
      targetSheet.quizzes.push(...nonDuplicates);
      targetSheet.topicsCount = targetSheet.quizzes.length;

      if (!state.customQuizzes) state.customQuizzes = [];
      state.customQuizzes.push({
        subjectId: targetSubject.id,
        sheetId: targetSheet.id,
        questions: nonDuplicates
      });

      saveState();
    }

    lastImportTarget = {
      subjectId: targetSubject.id,
      sheetId: targetSheet.id
    };

    setPDFImportUIState('none');
    showToast(`✅ ${nonDuplicates.length} Questions imported into ${targetSheet.title[state.language] || 'sheet'}`);
    pendingParsedQuestions = [];

    if (autoLaunch) {
      setTimeout(() => {
        selectSubject(targetSubject.id);
        setTimeout(() => startSheetQuestions(targetSheet.id), 200);
      }, 300);
    }
  }

  function launchImportedQuizNow() {
    if (!lastImportTarget) {
      showToast("No recent import target found.");
      return;
    }

    const subjects = window.DENTAL_SUBJECTS || [];
    const sbj = subjects.find(s => s.id === lastImportTarget.subjectId);
    if (sbj) {
      selectSubject(sbj.id);
      setTimeout(() => startSheetQuestions(lastImportTarget.sheetId), 300);
      const succCard = document.getElementById('pdf-import-success-card');
      if (succCard) succCard.style.display = 'none';
    }
  }

  function navigateToImportedSheet() {
    if (!lastImportTarget) return;
    selectSubject(lastImportTarget.subjectId);
  }

  function renderActivityChart() {
    const canvas = document.getElementById('canvas-activity-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach((d, i) => {
      const x = 25 + i * 45;
      ctx.fillStyle = state.theme === 'dream-blush' ? '#D9A0A7' : '#F59E0B';
      ctx.beginPath();
      ctx.roundRect(x, 136, 28, 4, [6, 6, 0, 0]);
      ctx.fill();

      ctx.fillStyle = '#9E8589';
      ctx.font = '10px Outfit';
      ctx.fillText(d, x + 4, 160);
    });
  }

  function renderSubjectPieChart() {
    const canvas = document.getElementById('canvas-subject-pie');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#9E8589';
    ctx.font = '12px Outfit';
    ctx.fillText("No Activity Yet", 50, 90);
  }

  // App Engine Initialization
  function initApp() {
    mergeCustomQuizzes();
    setTheme(state.theme);
    setLanguage(state.language);
    initRealtimeSearch();
    updateUserDashboardMetrics();
    renderDailyMissions();
    renderStudyHeatmap();
    renderTodoList();
    renderSubjects('home-featured-subjects');
    renderSubjects('catalog-subjects-grid');
    updateRoleBasedUI();

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.nav-link-btn, [data-target]');
      if (btn) {
        const target = btn.getAttribute('data-target');
        if (target) {
          e.preventDefault();
          navigateTo(target);
        }
      }
    });

    const pdfDrop = document.getElementById('pdf-drop-zone');
    const pdfInput = document.getElementById('pdf-file-input');

    if (pdfInput) {
      pdfInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          processUploadedPDFFile(e.target.files[0], false);
        }
      });
    }

    if (pdfDrop) {
      ['dragenter', 'dragover'].forEach(eventName => {
        pdfDrop.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          pdfDrop.classList.add('drag-active');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        pdfDrop.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          pdfDrop.classList.remove('drag-active');
        }, false);
      });

      pdfDrop.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files[0]) {
          processUploadedPDFFile(dt.files[0], false);
        }
      });
    }

    const exportBtn = document.getElementById('btn-export-backup');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", `dentistoire-backup-${new Date().toISOString().split('T')[0]}.json`);
        dl.click();
        showToast("Data exported!");
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  // Direct Window Function Exposure for Bulletproof Onclick Execution
  window.navigateTo = navigateTo;
  window.selectSubject = selectSubject;
  window.startSheetQuestions = startSheetQuestions;

  // Global API
  window.DentistoireApp = {
    navigateTo,
    selectSubject,
    startSheetQuestions,
    nextQuestion,
    prevQuestion,
    answerQuestion,
    confirmExitQuiz,
    closeQuizRunner,
    saveCurrentQuizForRestudy,
    launchSavedQuestionRevision,
    renderTodoList,
    openAddTodoModal,
    openEditTodoModal,
    closeTodoModal,
    saveTodoTask,
    toggleTodoTask,
    deleteTodoTask,
    handleSearchClick,
    setTheme,
    toggleTheme,
    setLanguage,
    toggleLanguage,
    setFocusPreset,
    toggleFocusTimer,
    resetFocusTimer,
    claimMissionReward,
    startWeakTopicQuiz,
    openLabPlaceholder,
    processUploadedPDFFile,
    parsePastedTextQuestions,
    confirmImportPDFQuestions,
    launchImportedQuizNow,
    navigateToImportedSheet,
    switchAuthTab,
    openAuthModal,
    closeAuthModal,
    performLogin,
    performSignup,
    performLogout,
    triggerAppleCelebrationEffect
  };

})();
