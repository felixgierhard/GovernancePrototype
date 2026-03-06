// Mock User Data
const USERS = [
    {
        email: "elena.andersson@eskilstuna.se",
        password: "demo1234",
        name: "Elena Andersson",
        title: "Chief Digital Officer",
        initials: "EA",
        roleKey: "cdo"
    },
    {
        email: "arthur.bergstrom@eskilstuna.se",
        password: "demo1234",
        name: "Arthur Bergström",
        title: "Operations Lead",
        initials: "AB",
        roleKey: "operations"
    },
    {
        email: "lars.lindqvist@eskilstuna.se",
        password: "demo1234",
        name: "Lars Lindqvist",
        title: "Finance Director",
        initials: "LL",
        roleKey: "finance"
    }
];

const DASHBOARD_CONTENT = {
    cdo: {
        header: `<h1>Dashboard Overview</h1><p>Real-time insights into your digital infrastructure</p>`,
        kpis: `<div class="kpi-card"><div class="kpi-label">Total Active Systems</div><div class="kpi-value">247</div><div class="kpi-trend">Across 12 departments</div></div><div class="kpi-card danger"><div class="kpi-label">Systems at Risk</div><div class="kpi-value">34</div><div class="kpi-trend up">↑ 6 from last month</div></div><div class="kpi-card warning"><div class="kpi-label">Maintenance vs Development</div><div class="kpi-value">87%</div><div class="kpi-trend">Target: 60% maintenance</div></div><div class="kpi-card success"><div class="kpi-label">Innovation Initiatives</div><div class="kpi-value">23</div><div class="kpi-trend down">↓ 3 completed this quarter</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Risk Heatmap Preview</h3><a class="widget-link" data-nav="risk">View Full →</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">🔴 Critical: 8 | 🟡 Monitor: 14 | 🟢 Safe: 225 </div></div><div class="widget"><div class="widget-header"><h3>Portfolio Health</h3><a class="widget-link" data-nav="portfolio">View All →</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.9rem;"><div><strong>Quick Wins:</strong>8 initiatives</div><div><strong>Moonshots:</strong>4 initiatives</div><div><strong>Enterprise Anchors:</strong>6 initiatives</div><div><strong>Kill Zone:</strong>2 initiatives</div></div></div><div class="widget"><div class="widget-header"><h3>Recent Incidents</h3><a class="widget-link">View All →</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>CRM System</strong>- Connection timeout <div style="color: var(--gray-600); margin-top: 0.25rem;">2 hours ago</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>HR Portal</strong>- Authentication error <div style="color: var(--gray-600); margin-top: 0.25rem;">1 day ago</div></div></div></div>`
    },
    operations: {
        header: `<h1>Operations Overview</h1><p>System stability & incident monitoring</p>`,
        kpis: `<div class="kpi-card danger"><div class="kpi-label">Critical Incidents</div><div class="kpi-value">2</div><div class="kpi-trend up">Attention needed</div></div><div class="kpi-card warning"><div class="kpi-label">Systems at Risk</div><div class="kpi-value">34</div><div class="kpi-trend up">↑ 6 from last month</div></div><div class="kpi-card success"><div class="kpi-label">Uptime Average</div><div class="kpi-value">99.9%</div><div class="kpi-trend">Target: 99.5%</div></div><div class="kpi-card"><div class="kpi-label">Pending Updates</div><div class="kpi-value">14</div><div class="kpi-trend">Scheduled for weekend</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Risk Heatmap Preview</h3><a class="widget-link" data-nav="risk">View Full →</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">🔴 Critical: 8 | 🟡 Monitor: 14 | 🟢 Safe: 225 </div></div><div class="widget"><div class="widget-header"><h3>Server Load Average</h3><a class="widget-link">View Nodes →</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.9rem;"><div><strong>Web Tier:</strong> 45% CPU</div><div><strong>DB Tier:</strong> 62% CPU</div><div><strong>Auth Services:</strong> 28% CPU</div></div></div><div class="widget"><div class="widget-header"><h3>Recent Incidents</h3><a class="widget-link">View All →</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>CRM System</strong>- Connection timeout <div style="color: var(--gray-600); margin-top: 0.25rem;">2 hours ago</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>HR Portal</strong>- Authentication error <div style="color: var(--gray-600); margin-top: 0.25rem;">1 day ago</div></div></div></div>`
    },
    finance: {
        header: `<h1>Finance Overview</h1><p>IT budget & cost optimization analysis</p>`,
        kpis: `<div class="kpi-card warning"><div class="kpi-label">Total IT Spend (YTD)</div><div class="kpi-value">84.2M kr</div><div class="kpi-trend">7% over target</div></div><div class="kpi-card success"><div class="kpi-label">Identified Savings</div><div class="kpi-value">1.2M kr</div><div class="kpi-trend up">↑ Cloud optimization</div></div><div class="kpi-card danger"><div class="kpi-label">Shadow IT Est.</div><div class="kpi-value">4.5M kr</div><div class="kpi-trend up">↑ 15% increase</div></div><div class="kpi-card"><div class="kpi-label">New Investments</div><div class="kpi-value">12.5M kr</div><div class="kpi-trend down">Across 5 projects</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Budget Burn Rate</h3><a class="widget-link" data-nav="financial">View Full →</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">Monthly Spend: 8.4M kr / Tracker: On Pace </div></div><div class="widget"><div class="widget-header"><h3>Top Cost Centers</h3><a class="widget-link">View All →</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>1. Enterprise Resource Planning</strong>- 35M kr / yr <div style="color: var(--gray-600); margin-top: 0.25rem;">Licensing & Support</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>2. Cloud Infrastructure</strong>- 22M kr / yr <div style="color: var(--gray-600); margin-top: 0.25rem;">AWS/Azure Managed Services</div></div></div></div>`
    }
};

// Login handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById('usernameInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('loginError');

    // Auto-append domain if not present
    let email = usernameInput;
    if (!email.includes("@")) {
        email = email + "@eskilstuna.se";
    }

    // Find user
    const user = USERS.find(u => u.email === email && u.password === passwordInput);

    if (user) {
        // Hide error if previously shown
        errorMsg.style.display = 'none';

        // Update UI with user info
        document.getElementById('userRole').textContent = user.title;
        document.getElementById('userAvatar').textContent = user.initials;

        // Inject Role-Specific Dashboard Content directly into the layout without nesting
        if (DASHBOARD_CONTENT[user.roleKey]) {
            const content = DASHBOARD_CONTENT[user.roleKey];
            const homePage = document.getElementById('homePage');
            if (homePage) {
                const header = homePage.querySelector('.page-header');
                if (header) header.innerHTML = content.header;

                const kpis = homePage.querySelector('.kpi-grid');
                if (kpis) kpis.innerHTML = content.kpis;

                const widgets = homePage.querySelector('.widget-grid');
                if (widgets) widgets.innerHTML = content.widgets;
            }
        }

        // Transition to dashboard
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').classList.add('active');

        // Reset form
        e.target.reset();
    } else {
        // Show error
        errorMsg.textContent = "Invalid username or password. Please try again.";
        errorMsg.style.display = 'block';
    }
});

// Logout handling
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        // Transition back to login
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('loginPage').style.display = 'flex';

        // Reset to home page on next login
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelector('.nav-item[data-page="home"]').classList.add('active');

        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        document.getElementById('homePage').classList.add('active');
    });
}

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        const page = this.getAttribute('data-page');

        // Update active nav
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        // Update page
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        const targetPage = document.getElementById(page + 'Page');

        if (targetPage) {
            targetPage.classList.add('active');
        }

        else {
            console.warn('Page section not found:', page + 'Page');
        }
    });
});

// Widget navigation links
document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-nav');
        const targetNav = document.querySelector(`.nav-item[data-page="${page}"]`);

        if (targetNav) {
            targetNav.click();
        }

        else {
            console.warn('Nav item not found for:', page);
        }
    });
});

// Portfolio tabs
document.querySelectorAll('.portfolio-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const target = this.getAttribute('data-tab');

        document.querySelectorAll('.portfolio-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.portfolio-content').forEach(c => c.classList.remove('active'));
        const targetTab = document.getElementById(target + 'Tab');

        if (targetTab) {
            targetTab.classList.add('active');
        }

        else {
            console.warn('Tab content not found for:', target + 'Tab');
        }
    });
});