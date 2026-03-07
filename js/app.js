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

// --- Global State for Zoom/Pan ---
let zoomLevel = 1;
let viewBox = { x: 0, y: 0, w: 800, h: 600 };
let isDragging = false;
let startPoint = { x: 0, y: 0 };

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
            description: "Entry point for all public-facing services. This cluster handles authentication, load balancing, and secure gateway access for 150k residents.",
            tech_lead: "Elena Andersson",
            uptime: "99.99%",
            nodes: [
                { label: 'BankID 4.0 API', status: 'active', type: 'Gateway', load: '12%', version: 'v4.2.1' },
                { label: 'Open ID Connect', status: 'active', type: 'Auth', load: '8%', version: 'v2.0.0' },
                { label: 'Public Portal Node', status: 'active', type: 'Web', load: '45%', version: 'v1.14.0' },
                { label: 'SAML Identity Provider', status: 'active', type: 'Auth', load: '5%', version: 'v3.1.2' },
                { label: 'Electronic Payment GW', status: 'active', type: 'FinTech', load: '18%', version: 'v1.4.0' }
            ]
        },
        {
            id: 'ops',
            label: 'Municipal Operations',
            color: '#f59e0b',
            description: "Core physical and digital services that keep the city running. Includes Smart City IoT, Education management, and GIS services.",
            tech_lead: "Arthur Bergstr\u00f6m",
            uptime: "98.5%",
            nodes: [
                { label: 'LMS School Server', status: 'active', type: 'Education', load: '32%', version: 'v3.1.0' },
                { label: 'GIS Spatial DB', status: 'active', type: 'Resource', load: '65%', version: 'v12.2' },
                { label: 'Social Care Platform', status: 'warning', type: 'Critical App', load: '22%', version: 'v5.4 (Legacy)', alert: 'EOL Software Detected' },
                { label: 'IoT Traffic Controller', status: 'active', type: 'Smart City', load: '14%', version: 'v0.9.4' },
                { label: 'Street Lighting Hub', status: 'active', type: 'IoT', load: '7%', version: 'v2.1.0' }
            ]
        },
        {
            id: 'admin',
            label: 'Administrative Backbone',
            color: '#3b82f6',
            description: "Internal ERP, HR, and case management systems. This cluster handles the municipality's payroll, financial audits, and records archiving.",
            tech_lead: "Lars Lindqvist",
            uptime: "99.2%",
            nodes: [
                { label: 'Unit4 Business World', status: 'active', type: 'ERP', load: '84%', version: 'v7.1.5' },
                { label: 'Personec HR System', status: 'active', type: 'HR', load: '19%', version: 'v4.0.0' },
                { label: 'Finance Oracle DB', status: 'critical', type: 'Database', load: '92%', version: 'v2008 (Legacy)', alert: 'Legacy SQL Instance' },
                { label: 'Exchange Online Sync', status: 'active', type: 'Mail', load: '43%', version: 'O365' },
                { label: 'Case Routing Engine', status: 'active', type: 'Workflow', load: '22%', version: 'v3.3.0' }
            ]
        },
        {
            id: 'tech',
            label: 'Technical Base',
            color: '#a855f7',
            description: "The foundation of the digital infrastructure. Includes data center hardware, fiber network, and primary storage systems.",
            tech_lead: "Systems Admin Team",
            uptime: "99.999%",
            nodes: [
                { label: 'Cisco Nexus Core', status: 'active', type: 'Switch', load: '12%', version: 'NX-OS 9.3' },
                { label: 'PureStorage FlashArray', status: 'active', type: 'Storage', load: '58%', version: 'Purity v6.0' },
                { label: 'Unauthorized Bridge', status: 'critical', type: 'Illegal Hardware', load: 'Unknown', version: 'Unknown', alert: 'Security Breach' },
                { label: 'LoRaWAN Gateway', status: 'active', type: 'Radio', load: '3%', version: 'v1.4' },
                { label: 'Cloud Hybrid Gateway', status: 'active', type: 'Bridge', load: '28%', version: 'v2.1.0' }
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
    if (!email.includes("@")) email = email + "@eskilstuna.se";

    const user = USERS.find(u => u.email === email && u.password === passwordInput);
    if (user) {
        errorMsg.style.display = 'none';
        document.getElementById('userRole').textContent = user.title;
        document.getElementById('userAvatar').textContent = user.initials;

        if (DASHBOARD_CONTENT[user.roleKey]) {
            const content = DASHBOARD_CONTENT[user.roleKey];
            const homePage = document.getElementById('homePage');
            if (homePage) {
                const h = homePage.querySelector('.page-header'); if (h) h.innerHTML = content.header;
                const k = homePage.querySelector('.kpi-grid'); if (k) k.innerHTML = content.kpis;
                const w = homePage.querySelector('.widget-grid'); if (w) w.innerHTML = content.widgets;
            }
        }
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').classList.add('active');
        initLandscapeModule();
    } else {
        errorMsg.textContent = "Invalid username or password.";
        errorMsg.style.display = 'block';
    }
});

// Navigation logic (reused)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        const page = this.getAttribute('data-page');
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            if (page === 'landscape') setTimeout(initLandscapeModule, 100);
        }
    });
});

// --- Discovery & Sweep Functions ---
function initLandscapeModule() {
    const sweepBtn = document.getElementById('startSweepBtn');
    const overlay = document.getElementById('sweepOverlay');
    const progressBar = document.getElementById('sweepProgress');
    const statusText = document.getElementById('sweepStatus');
    const container = document.getElementById('landscapeContainer');
    const svg = document.getElementById('topologySvg');

    if (!sweepBtn || sweepBtn.dataset.initialized) return;
    sweepBtn.dataset.initialized = "true";

    renderTopology();
    populateStats();
    startSecurityLog(true);

    // Zoom and Pan Controls
    document.getElementById('zoomInBtn').addEventListener('click', () => adjustZoom(0.8));
    document.getElementById('zoomOutBtn').addEventListener('click', () => adjustZoom(1.2));
    document.getElementById('resetZoomBtn').addEventListener('click', () => {
        zoomLevel = 1; viewBox = { x: 0, y: 0, w: 800, h: 600 }; applyViewBox();
    });

    // Mouse Pan Logic
    svg.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPoint = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = (e.clientX - startPoint.x) * (viewBox.w / svg.clientWidth);
        const dy = (e.clientY - startPoint.y) * (viewBox.h / svg.clientHeight);
        viewBox.x -= dx;
        viewBox.y -= dy;
        startPoint = { x: e.clientX, y: e.clientY };
        applyViewBox();
    });
    window.addEventListener('mouseup', () => isDragging = false);

    // Click Sweep
    sweepBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2.5; if (progress > 100) progress = 100;
            progressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    container.classList.remove('opacity-40');
                    renderTopology(); populateStats(); startSecurityLog(false);
                }, 500);
            }
        }, 30);
    });

    // Close Details
    document.getElementById('closeDetails').addEventListener('click', hideDetails);
}

function adjustZoom(factor) {
    const oldW = viewBox.w; const oldH = viewBox.h;
    viewBox.w *= factor; viewBox.h *= factor;
    viewBox.x += (oldW - viewBox.w) / 2;
    viewBox.y += (oldH - viewBox.h) / 2;
    applyViewBox();
}

function applyViewBox() {
    const svg = document.getElementById('topologySvg');
    if (svg) svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
}

function renderTopology() {
    const svg = document.getElementById('topologySvg');
    if (!svg) return; svg.innerHTML = '';
    const centerX = 400, centerY = 300, clusterRadius = 180;

    // Municipality Core
    const core = createNode(centerX, centerY, 40, '#1e293b', 'SMART CITY CORE', 'active', true);
    core.addEventListener('click', () => showDetails('Municipal Core', 'Smart City Backbone', 'The central orchestration layer for all municipal departments. Integrated with national identity provider (BankID) and primary fiber networks.', 'active', 'CORE-001', 'City Gov IT Team', '99.99%'));
    svg.appendChild(core);

    INFRA_DATA.clusters.forEach((cluster, i) => {
        const angle = (i / INFRA_DATA.clusters.length) * Math.PI * 2;
        const cx = centerX + Math.cos(angle) * clusterRadius;
        const cy = centerY + Math.sin(angle) * clusterRadius;

        // Draw Line to Core
        svg.appendChild(createLine(centerX, centerY, cx, cy));

        // Draw Cluster Node
        const clusterNode = createNode(cx, cy, 30, cluster.color, cluster.label, 'active', true);
        clusterNode.addEventListener('click', (e) => {
            e.stopPropagation();
            showDetails(cluster.label, 'Cluster Hub', cluster.description, 'active', `${cluster.id.toUpperCase()}-00`, cluster.tech_lead, cluster.uptime);
        });
        svg.appendChild(clusterNode);

        // Draw Sub Nodes
        cluster.nodes.forEach((node, j) => {
            const subAngle = angle - 0.5 + (j / (cluster.nodes.length - 1)) * 1.0;
            const sx = cx + Math.cos(subAngle) * 85;
            const sy = cy + Math.sin(subAngle) * 85;
            svg.appendChild(createLine(cx, cy, sx, sy));

            const nodeEl = createNode(sx, sy, 12, cluster.color, node.label, node.status);
            nodeEl.addEventListener('click', (e) => {
                e.stopPropagation();
                showDetails(node.label, node.type, `Version: ${node.version} | Load: ${node.load}`, node.status, `NODE-${Math.floor(Math.random() * 999)}`, cluster.tech_lead, '99.2%');
            });
            svg.appendChild(nodeEl);
        });
    });

    // Background Scan Animation
    const scan = document.createElementNS("http://www.w3.org/2000/svg", "line");
    scan.setAttribute('x1', '0'); scan.setAttribute('y1', '0'); scan.setAttribute('x2', '800'); scan.setAttribute('y2', '0');
    scan.setAttribute('stroke', 'rgba(20, 184, 166, 0.05)'); scan.setAttribute('stroke-width', '60');
    const anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    anim.setAttribute('attributeName', 'y1'); anim.setAttribute('from', '-60'); anim.setAttribute('to', '660'); anim.setAttribute('dur', '6s'); anim.setAttribute('repeatCount', 'indefinite');
    const anim2 = anim.cloneNode(); anim2.setAttribute('attributeName', 'y2'); scan.appendChild(anim); scan.appendChild(anim2);
    svg.appendChild(scan);

    applyViewBox(); // Ensure zoom is preserved
}

function createNode(x, y, r, color, label, status = 'active', isMajor = false) {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', 'cursor-pointer hover:filter hover:brightness-125 transition-all');

    if (status !== 'active') {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute('cx', x); ring.setAttribute('cy', y); ring.setAttribute('r', r + 4);
        ring.setAttribute('fill', 'none'); ring.setAttribute('stroke', status === 'critical' ? '#ef4444' : '#f59e0b');
        ring.setAttribute('stroke-width', '2');
        const ra = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        ra.setAttribute('attributeName', 'opacity'); ra.setAttribute('values', '0.2;1;0.2'); ra.setAttribute('dur', '1.5s'); ra.setAttribute('repeatCount', 'indefinite');
        ring.appendChild(ra); g.appendChild(ring);
    }

    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', r);
    c.setAttribute('fill', status === 'critical' ? '#ef4444' : color);

    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute('x', x); t.setAttribute('y', y + r + 15);
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('fill', '#94a3b8');
    t.setAttribute('font-size', isMajor ? '9' : '7'); t.setAttribute('font-family', 'monospace');
    t.textContent = label;
    g.appendChild(c); g.appendChild(t);
    return g;
}

function createLine(x1, y1, x2, y2) {
    const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2);
    l.setAttribute('stroke', '#1e293b'); l.setAttribute('stroke-width', '1');
    return l;
}

function showDetails(title, type, desc, status, id, owner, uptime) {
    const panel = document.getElementById('nodeDetails');
    const titleEl = document.getElementById('detailTitle');
    const statusEl = document.getElementById('detailStatus');
    const content = document.getElementById('detailContent');

    titleEl.textContent = title;
    statusEl.textContent = `STATUS: ${status.toUpperCase()}`;
    statusEl.className = `inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${status === 'active' ? 'bg-green-500/20 text-green-400' : (status === 'warning' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-100')}`;

    content.innerHTML = `
        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
            <p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Architecture Class</p>
            <p class="text-white text-sm">${type}</p>
        </div>
        <div class="space-y-1">
            <p class="text-[10px] text-slate-500 font-bold uppercase">Description</p>
            <p class="text-slate-400 text-xs leading-relaxed">${desc}</p>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <div class="bg-slate-800/30 p-2 rounded">
                <p class="text-[9px] text-slate-500 font-bold uppercase">Asset ID</p>
                <p class="text-white text-xs font-mono">${id}</p>
            </div>
            <div class="bg-slate-800/30 p-2 rounded">
                <p class="text-[9px] text-slate-500 font-bold uppercase">Owner</p>
                <p class="text-white text-xs">${owner}</p>
            </div>
            <div class="bg-slate-800/30 p-2 rounded">
                <p class="text-[9px] text-slate-500 font-bold uppercase">Uptime</p>
                <p class="text-white text-xs font-mono">${uptime}</p>
            </div>
            <div class="bg-slate-800/30 p-2 rounded">
                <p class="text-[9px] text-slate-500 font-bold uppercase">Last Scan</p>
                <p class="text-white text-xs font-mono">2m ago</p>
            </div>
        </div>
    `;

    panel.classList.remove('hidden');
    setTimeout(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'translateX(0)';
    }, 10);
}

function hideDetails() {
    const panel = document.getElementById('nodeDetails');
    panel.style.opacity = '0';
    panel.style.transform = 'translateX(1rem)';
    setTimeout(() => panel.classList.add('hidden'), 300);
}

function populateStats() {
    ['statAssets', 'statNodes', 'statSoftware'].forEach(id => {
        const el = document.getElementById(id); if (el) el.textContent = INFRA_DATA.stats[id.replace('stat', '').toLowerCase()].toLocaleString();
    });
}

function startSecurityLog(silent) {
    const log = document.getElementById('securityLog'); if (!log) return;
    log.innerHTML = '';
    INFRA_DATA.logs.forEach((item, i) => {
        const add = () => {
            const d = document.createElement('div');
            const c = item.type === 'critical' ? 'text-red-400' : (item.type === 'warning' ? 'text-amber-400' : 'text-slate-400');
            d.className = `border-l-2 pl-2 mb-2 ${item.type === 'critical' ? 'border-red-500' : 'border-slate-700'}`;
            d.innerHTML = `<span class="font-bold ${c}">[${item.type.toUpperCase()}]</span> <span class="text-slate-300 text-[10px]">${item.msg}</span>`;
            log.prepend(d);
        };
        if (silent) add(); else setTimeout(add, i * 600);
    });
}

document.addEventListener('DOMContentLoaded', initLandscapeModule);