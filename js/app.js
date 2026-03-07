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
        name: "Arthur Bergstr\u00f6m",
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
        kpis: `<div class="kpi-card"><div class="kpi-label">Total Active Systems</div><div class="kpi-value">247</div><div class="kpi-trend">Across 12 departments</div></div><div class="kpi-card danger"><div class="kpi-label">Systems at Risk</div><div class="kpi-value">34</div><div class="kpi-trend up">\u2191 6 from last month</div></div><div class="kpi-card warning"><div class="kpi-label">Maintenance vs Development</div><div class="kpi-value">87%</div><div class="kpi-trend">Target: 60% maintenance</div></div><div class="kpi-card success"><div class="kpi-label">Innovation Initiatives</div><div class="kpi-value">23</div><div class="kpi-trend down">\u2193 3 completed this quarter</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Risk Heatmap Preview</h3><a class="widget-link" data-nav="risk">View Full \u2192</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">\ud83d\udd34 Critical: 8 | \ud83d\udfe1 Monitor: 14 | \ud83d\udfe2 Safe: 225 </div></div><div class="widget"><div class="widget-header"><h3>Portfolio Health</h3><a class="widget-link" data-nav="portfolio">View All \u2192</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.9rem;"><div><strong>Quick Wins:</strong>8 initiatives</div><div><strong>Moonshots:</strong>4 initiatives</div><div><strong>Enterprise Anchors:</strong>6 initiatives</div><div><strong>Kill Zone:</strong>2 initiatives</div></div></div><div class="widget"><div class="widget-header"><h3>Recent Incidents</h3><a class="widget-link">View All \u2192</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>CRM System</strong>- Connection timeout <div style="color: var(--gray-600); margin-top: 0.25rem;">2 hours ago</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>HR Portal</strong>- Authentication error <div style="color: var(--gray-600); margin-top: 0.25rem;">1 day ago</div></div></div></div>`
    },
    operations: {
        header: `<h1>Operations Overview</h1><p>System stability & incident monitoring</p>`,
        kpis: `<div class="kpi-card danger"><div class="kpi-label">Critical Incidents</div><div class="kpi-value">2</div><div class="kpi-trend up">Attention needed</div></div><div class="kpi-card warning"><div class="kpi-label">Systems at Risk</div><div class="kpi-value">34</div><div class="kpi-trend up">\u2191 6 from last month</div></div><div class="kpi-card success"><div class="kpi-label">Uptime Average</div><div class="kpi-value">99.9%</div><div class="kpi-trend">Target: 99.5%</div></div><div class="kpi-card"><div class="kpi-label">Pending Updates</div><div class="kpi-value">14</div><div class="kpi-trend">Scheduled for weekend</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Risk Heatmap Preview</h3><a class="widget-link" data-nav="risk">View Full \u2192</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">\ud83d\udd34 Critical: 8 | \ud83d\udfe1 Monitor: 14 | \ud83d\udfe2 Safe: 225 </div></div><div class="widget"><div class="widget-header"><h3>Server Load Average</h3><a class="widget-link">View Nodes \u2192</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.9rem;"><div><strong>Web Tier:</strong> 45% CPU</div><div><strong>DB Tier:</strong> 62% CPU</div><div><strong>Auth Services:</strong> 28% CPU</div></div></div><div class="widget"><div class="widget-header"><h3>Recent Incidents</h3><a class="widget-link">View All \u2192</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>CRM System</strong>- Connection timeout <div style="color: var(--gray-600); margin-top: 0.25rem;">2 hours ago</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>HR Portal</strong>- Authentication error <div style="color: var(--gray-600); margin-top: 0.25rem;">1 day ago</div></div></div></div>`
    },
    finance: {
        header: `<h1>Finance Overview</h1><p>IT budget & cost optimization analysis</p>`,
        kpis: `<div class="kpi-card warning"><div class="kpi-label">Total IT Spend (YTD)</div><div class="kpi-value">84.2M kr</div><div class="kpi-trend">7% over target</div></div><div class="kpi-card success"><div class="kpi-label">Identified Savings</div><div class="kpi-value">1.2M kr</div><div class="kpi-trend up">\u2191 Cloud optimization</div></div><div class="kpi-card danger"><div class="kpi-label">Shadow IT Est.</div><div class="kpi-value">4.5M kr</div><div class="kpi-trend up">\u2191 15% increase</div></div><div class="kpi-card"><div class="kpi-label">New Investments</div><div class="kpi-value">12.5M kr</div><div class="kpi-trend down">Across 5 projects</div></div>`,
        widgets: `<div class="widget"><div class="widget-header"><h3>Budget Burn Rate</h3><a class="widget-link" data-nav="financial">View Full \u2192</a></div><div style="height: 200px; background: var(--gray-50); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--gray-600);">Monthly Spend: 8.4M kr / Tracker: On Pace </div></div><div class="widget"><div class="widget-header"><h3>Top Cost Centers</h3><a class="widget-link">View All \u2192</a></div><div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>1. Enterprise Resource Planning</strong>- 35M kr / yr <div style="color: var(--gray-600); margin-top: 0.25rem;">Licensing & Support</div></div><div style="padding: 0.75rem; background: var(--gray-50); border-radius: 6px; font-size: 0.85rem;"><strong>2. Cloud Infrastructure</strong>- 22M kr / yr <div style="color: var(--gray-600); margin-top: 0.25rem;">AWS/Azure Managed Services</div></div></div></div>`
    }
};

// --- Discovery & Sweep Data ---
const INFRA_DATA = {
    stats: {
        assets: 14352,
        nodes: 745,
        software: 1891,
        risk: "Elevated"
    },
    clusters: [
        {
            id: 'citizen',
            label: 'Citizen Access & Identity',
            color: '#10b981',
            nodes: [
                { label: 'BankID 4.0 API', status: 'active' },
                { label: 'Open ID Connect', status: 'active' },
                { label: 'Public Portal Node', status: 'active' },
                { label: 'SAML Identity Provider', status: 'active' },
                { label: 'Electronic Payment GW', status: 'active' }
            ]
        },
        {
            id: 'ops',
            label: 'Municipal Operations',
            color: '#f59e0b',
            nodes: [
                { label: 'LMS School Server', status: 'active' },
                { label: 'GIS Spatial DB', status: 'active' },
                { label: 'Social Care Platform', status: 'warning' },
                { label: 'IoT Traffic Controller', status: 'active' },
                { label: 'Street Lighting Hub', status: 'active' }
            ]
        },
        {
            id: 'admin',
            label: 'Administrative Backbone',
            color: '#3b82f6',
            nodes: [
                { label: 'Unit4 Business World', status: 'active' },
                { label: 'Personec HR System', status: 'active' },
                { label: 'Finance Oracle DB', status: 'critical' },
                { label: 'Exchange Online Sync', status: 'active' },
                { label: 'Case Routing Engine', status: 'active' }
            ]
        },
        {
            id: 'tech',
            label: 'Technical Base',
            color: '#a855f7',
            nodes: [
                { label: 'Cisco Nexus Core', status: 'active' },
                { label: 'PureStorage FlashArray', status: 'active' },
                { label: 'Unauthorized Bridge', status: 'critical' },
                { label: 'LoRaWAN Gateway', status: 'active' },
                { label: 'Cloud Hybrid Gateway', status: 'active' }
            ]
        }
    ],
    logs: [
        { type: 'critical', msg: '3x Windows Server 2012 found (EOL) in Social Services V-LAN' },
        { type: 'warning', msg: 'Unauthorized IoT Bridge detected: Subnet 10.42.12.0/24' },
        { type: 'info', msg: 'Fiber Backbone throughput optimized (98.2% efficiency)' },
        { type: 'critical', msg: 'Legacy SQL Instance (v2008) discovered in Finance Archive' },
        { type: 'warning', msg: 'Certificate expiry in 14 days: citizen-portal-ext.se' },
        { type: 'success', msg: 'BankID 4.0 Integration verified across all nodes' }
    ]
};

// Login handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById('usernameInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('loginError');

    let email = usernameInput;
    if (!email.includes("@")) {
        email = email + "@eskilstuna.se";
    }

    const user = USERS.find(u => u.email === email && u.password === passwordInput);

    if (user) {
        errorMsg.style.display = 'none';
        document.getElementById('userRole').textContent = user.title;
        document.getElementById('userAvatar').textContent = user.initials;

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

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').classList.add('active');
        e.target.reset();

        // Initial setup for Landscape if it's the target (though home is default)
        initLandscapeModule();
    } else {
        errorMsg.textContent = "Invalid username or password. Please try again.";
        errorMsg.style.display = 'block';
    }
});

// Logout handling
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('loginPage').style.display = 'flex';
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
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            if (page === 'landscape') {
                renderTopology(); // Render immediately when viewing
                populateStats();
                startSecurityLog(true); // Silent start if already viewed
            }
        }
    });
});

// Discovery & Sweep Functions
function initLandscapeModule() {
    const sweepBtn = document.getElementById('startSweepBtn');
    const overlay = document.getElementById('sweepOverlay');
    const progressBar = document.getElementById('sweepProgress');
    const statusText = document.getElementById('sweepStatus');
    const sweepLog = document.getElementById('sweepLog');
    const container = document.getElementById('landscapeContainer');

    if (!sweepBtn || sweepBtn.dataset.initialized) return;
    sweepBtn.dataset.initialized = "true";

    // Initial silent render so content is visible immediately
    renderTopology();
    populateStats();
    startSecurityLog(true);

    sweepBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        let progress = 0;
        const messages = ["Pinging Subnet...", "Mapping clusters...", "Validating software...", "Finalizing topology..."];

        const interval = setInterval(() => {
            progress += 2;
            if (progress > 100) progress = 100;
            progressBar.style.width = `${progress}%`;

            const msgIndex = Math.floor((progress / 100) * (messages.length - 1));
            statusText.textContent = messages[msgIndex];
            sweepLog.textContent = `[UDP/TCP SCAN] ${Math.random().toString(16).slice(2, 10)}: Found node...`;

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    container.classList.remove('opacity-40');
                    renderTopology();
                    populateStats();
                    startSecurityLog(false); // Animated start
                }, 500);
            }
        }, 40);
    });
}

function renderTopology() {
    const svg = document.getElementById('topologySvg');
    if (!svg) return;
    svg.innerHTML = '';
    const centerX = 400, centerY = 300, clusterRadius = 180;

    svg.appendChild(createNode(centerX, centerY, 40, '#1e293b', 'SMART CITY CORE', 'active', true));

    INFRA_DATA.clusters.forEach((cluster, i) => {
        const angle = (i / INFRA_DATA.clusters.length) * Math.PI * 2;
        const cx = centerX + Math.cos(angle) * clusterRadius;
        const cy = centerY + Math.sin(angle) * clusterRadius;

        svg.appendChild(createLine(centerX, centerY, cx, cy));
        svg.appendChild(createNode(cx, cy, 30, cluster.color, cluster.label, 'active', true));

        cluster.nodes.forEach((node, j) => {
            const subAngle = angle - 0.5 + (j / (cluster.nodes.length - 1)) * 1.0;
            const sx = cx + Math.cos(subAngle) * 85;
            const sy = cy + Math.sin(subAngle) * 85;
            svg.appendChild(createLine(cx, cy, sx, sy));
            svg.appendChild(createNode(sx, sy, 12, cluster.color, node.label, node.status));
        });
    });

    // Scan line animation
    const scanLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    scanLine.setAttribute('x1', '0'); scanLine.setAttribute('y1', '0');
    scanLine.setAttribute('x2', '800'); scanLine.setAttribute('y2', '0');
    scanLine.setAttribute('stroke', 'rgba(20, 184, 166, 0.1)');
    scanLine.setAttribute('stroke-width', '40');
    const anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    anim.setAttribute('attributeName', 'y1'); anim.setAttribute('from', '-40'); anim.setAttribute('to', '640');
    anim.setAttribute('dur', '5s'); anim.setAttribute('repeatCount', 'indefinite');
    const anim2 = anim.cloneNode();
    anim2.setAttribute('attributeName', 'y2');
    scanLine.appendChild(anim); scanLine.appendChild(anim2);
    svg.appendChild(scanLine);
}

function createNode(x, y, r, color, label, status = 'active', isMajor = false) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    if (status !== 'active') {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute('cx', x); ring.setAttribute('cy', y); ring.setAttribute('r', r + 4);
        ring.setAttribute('fill', 'none'); ring.setAttribute('stroke', status === 'critical' ? '#ef4444' : '#f59e0b');
        ring.setAttribute('stroke-width', '2');
        const ra = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        ra.setAttribute('attributeName', 'opacity'); ra.setAttribute('values', '0.2;1;0.2');
        ra.setAttribute('dur', '1.5s'); ra.setAttribute('repeatCount', 'indefinite');
        ring.appendChild(ra); group.appendChild(ring);
    }
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', x); circle.setAttribute('cy', y); circle.setAttribute('r', r);
    circle.setAttribute('fill', status === 'critical' ? '#ef4444' : color);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', x); text.setAttribute('y', y + r + 15);
    text.setAttribute('text-anchor', 'middle'); text.setAttribute('fill', '#cbd5e1');
    text.setAttribute('font-size', isMajor ? '9' : '7'); text.setAttribute('font-family', 'monospace');
    text.textContent = label;
    group.appendChild(circle); group.appendChild(text);
    return group;
}

function createLine(x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#334155'); line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '4');
    return line;
}

function populateStats() {
    ['statAssets', 'statNodes', 'statSoftware'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = INFRA_DATA.stats[id.replace('stat', '').toLowerCase()].toLocaleString();
    });
    const riskEl = document.getElementById('statRisk');
    if (riskEl) riskEl.textContent = INFRA_DATA.stats.risk;
}

function startSecurityLog(silent = false) {
    const logContainer = document.getElementById('securityLog');
    if (!logContainer) return;
    logContainer.innerHTML = '';
    INFRA_DATA.logs.forEach((log, i) => {
        const add = () => {
            const entry = document.createElement('div');
            const color = log.type === 'critical' ? 'text-red-400' : (log.type === 'warning' ? 'text-amber-400' : 'text-slate-400');
            entry.className = `border-l-2 pl-2 mb-2 ${log.type === 'critical' ? 'border-red-500' : 'border-slate-700'}`;
            entry.innerHTML = `<span class="font-bold ${color}">[${log.type.toUpperCase()}]</span> <span class="text-slate-300 text-[10px]">${log.msg}</span>`;
            logContainer.prepend(entry);
        };
        if (silent) add(); else setTimeout(add, i * 800);
    });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    initLandscapeModule();
});