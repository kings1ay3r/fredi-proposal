// Utility and file-loading helpers (moved from inline script)
var gk_isXlsx = false;
var gk_xlsxFileLookup = {};
var gk_fileData = {};
function filledCell(cell) {
  return cell !== '' && cell != null;
}
function loadFileData(filename) {
  if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
    try {
      var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
      var firstSheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[firstSheetName];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
      var filteredData = jsonData.filter(function(row){ return row.some(filledCell); });
      var headerRowIndex = filteredData.findIndex(function(row, index){
        var cur = row.filter(filledCell).length;
        var next = (filteredData[index + 1] || []).filter(filledCell).length;
        return cur >= next;
      });
      if (headerRowIndex === -1 || headerRowIndex > 25) headerRowIndex = 0;
      var csvSheet = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
      var csv = XLSX.utils.sheet_to_csv(csvSheet, { header: 1 });
      return csv;
    } catch (e) {
      console.error(e);
      return "";
    }
  }
  return gk_fileData[filename] || "";
}

// Slides definition (moved from inline Babel script)
const slides = [
  {
    title: "Proposal for Developing a Custom Tactical Coaching Application",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Executive Proposal</span>
            <h1 className="font-bold text-blue-800 mb-3" style={{fontSize:'clamp(2rem,4.5vw,3.5rem)'}}>High‑Fidelity Replica of TacticalPad</h1>
            <p className="text-gray-700">Prepared for: [Client’s Name/Individual in Croatia]</p>
            <p className="text-gray-700">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-700">Prepared by: [Your Name/Company Name]</p>
            <div className="divider" />
            <div className="kpis">
              <div className="kpi"><div className="num">10 mo</div><div className="lbl">Full Build</div></div>
              <div className="kpi"><div className="num">4 mo</div><div className="lbl">POC</div></div>
              <div className="kpi"><div className="num">7</div><div className="lbl">Core Team</div></div>
            </div>
          </div>
          <div className="media">
            <img src="images/hero_tactics.svg" alt="Football tactics board illustration"/>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-green-100 to-blue-100",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Executive Summary",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Executive Summary</span>
            <h3 className="text-blue-900 mb-2">What we will deliver</h3>
            <ul className="subtle-list">
              <li>Cross-platform TacticalPad replica for drill design, tactics and session planning.</li>
              <li>Benefits: modern UI/UX, 2D/3D animations, rich sharing, scalable architecture.</li>
              <li>Timeline: POC in 4 months; full application in 10 months with stage gates.</li>
              <li>Team: PM (1), Senior Dev (2), UI/UX (1), Junior Dev (3).</li>
              <li>Outcome: A polished, reliable tool for coaches, analysts and media teams.</li>
            </ul>
          </div>
          <div>
            <div className="media"><img src="images/hero_tactics.svg" alt="Football strategy board"/></div>
            <div className="media-strip">
              <img src="images/pitch_topdown.svg" alt="Pitch top-down"/>
              <img src="images/analytics_dashboard.svg" alt="Analytics dashboard"/>
              <img src="images/stadium_night.svg" alt="Stadium under lights"/>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "About Us",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Who we are</span>
            <h3 className="text-blue-900 mb-2">Experienced, focused, collaborative</h3>
            <div className="cards">
              <div className="card"><h3>Replication Expertise</h3><p>Delivered complex app replicas incl. sports tools with animation & rich media.</p></div>
              <div className="card"><h3>Cross‑platform</h3><p>React Native + Unity for 3D. CI/CD and performance budgets baked in.</p></div>
              <div className="card"><h3>Partner Mindset</h3><p>Agile delivery with transparent comms and rapid iteration loops.</p></div>
            </div>
          </div>
          <div>
            <div className="media"><img src="images/team_collaboration.svg" alt="Our Team"/></div>
            <div className="media-strip">
              <img src="images/team_collaboration.svg" alt="Team work"/>
              <img src="images/whiteboard_sketch.svg" alt="Design review"/>
              <img src="images/code_screen.svg" alt="Engineering"/>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Project Understanding",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Project Understanding</span>
            <h3 className="text-blue-900 mb-2">What success looks like</h3>
            <ul className="subtle-list">
              <li>Replicate TacticalPad for drills, formations, tactics and sessions.</li>
              <li>Desktop & Mobile parity (Win/Mac/iOS/Android) with seamless sync.</li>
              <li>Primary users: Coaches, analysts, journalists; multi-sport ready.</li>
              <li>Enhancements: themes, quick search, basic analytics, offline mode.</li>
              <li>Key challenges: UX consistency, performant animation, secure sharing.</li>
            </ul>
          </div>
          <div className="media">
            <img src="images/hero_tactics.svg" alt="Planning Workspace"/>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Scope of Work",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Scope of Work</span>
            <h3 className="text-blue-900 mb-2">Boundaries and stack</h3>
            <ul className="subtle-list">
              <li>Core: Drawing, animation, playbooks, session features.</li>
              <li>Stack: React Native (app), Node.js/AWS (services), Unity (3D module).</li>
              <li>Assumptions: Timely feedback; test on target devices/emulators.</li>
              <li>Exclusions: Advanced AI, custom hardware, ongoing hosting (optional add‑ons).</li>
            </ul>
          </div>
          <div>
            <div className="media"><img src="images/whiteboard_sketch.svg" alt="Architecture"/></div>
            <div className="media-strip">
              <img src="images/code_screen.svg" alt="Backend"/>
              <img src="images/code_screen.svg" alt="Frontend"/>
              <img src="images/animation_playbook.svg" alt="3D"/>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Core Features: Drawing & Visualization",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Core Feature Set</span>
            <h3 className="text-blue-900 mb-2">Drawing & Visualization</h3>
            <ul className="subtle-list">
              <li>Whiteboard for drills, lineups, formations and tactics.</li>
              <li>Custom pitches/fields with adjustable sizes, markings, cones, goals.</li>
              <li>Effects: Highlights, trails, connectors, ink alignment.</li>
              <li>Voronoi diagrams for space analysis.</li>
              <li>Multi‑pitch support for session planning.</li>
              <li>Multi‑sport ready: Football, Futsal, Basketball, Hockey, Rugby and more.</li>
            </ul>
          </div>
          <div>
            <div className="media"><img src="images/hero_tactics.svg" alt="Tactics workspace" /></div>
            <div className="media-strip">
              <img src="images/pitch_topdown.svg" alt="Football board" />
              <img src="images/pitch_topdown.svg" alt="Pitch top view" />
              <img src="images/analytics_dashboard.svg" alt="Analytics" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Core Features: Animation & Content",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Core Feature Set</span>
            <h3 className="text-blue-900 mb-2">Animation & Content</h3>
            <ul className="subtle-list">
              <li>2D/3D animations for plays, drills and tactics.</li>
              <li>Animated player movements and ball paths.</li>
              <li>Projects with multiple boards and playbooks.</li>
              <li>Notepad for tactical notes, analysis and annotations.</li>
              <li>Pre‑built templates for exercises and drills.</li>
            </ul>
          </div>
          <div>
            <div className="media"><img src="images/animation_playbook.svg" alt="Animation concept" /></div>
            <div className="media-strip">
              <img src="images/animation_playbook.svg" alt="Play animation" />
              <img src="images/team_collaboration.svg" alt="Team collaboration" />
              <img src="images/whiteboard_sketch.svg" alt="Content planning" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1520975940469-34e6298b2f78?q=80&w=1920&auto=format&fit=crop&sat=15",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Integrations & Enhancements",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Ecosystem</span>
            <h3 className="text-blue-900 mb-2">Integrations & Enhancements</h3>
            <ul className="subtle-list">
              <li>Media: YouTube/Vimeo embedding; video clipping for analysis.</li>
              <li>Sharing: Export as images, videos, PDFs; real‑time link sharing.</li>
              <li>Enhancements: Custom themes, quick‑search, basic analytics, offline mode.</li>
              <li>Security: Data encryption; multi‑language support (EN → HR ready).</li>
            </ul>
          </div>
          <div>
            <div className="media"><img src="images/api_nodes.svg" alt="Integrations" /></div>
            <div className="media-strip">
              <img src="images/team_collaboration.svg" alt="Collaboration" />
              <img src="images/code_screen.svg" alt="Frontend API" />
              <img src="images/cloud_diagram.svg" alt="Backend services" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Development Methodology",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Process</span>
            <h3 className="text-blue-900 mb-2">How we deliver</h3>
            <ul className="subtle-list">
              <li>Agile Scrum: daily stand‑ups; fortnightly reviews.</li>
              <li>Phases: Discovery → Design → Dev → UAT → Deploy.</li>
              <li>Tooling: Figma, Jira, Git, CI/CD; GDPR compliance.</li>
              <li>Risk mgmt: bi‑weekly risk logs; 10% buffer.</li>
            </ul>
          </div>
          <div>
            <div className="cards">
              <div className="card"><h3>Collaboration</h3><p>Transparent comms, shared boards, demo cadence.</p></div>
              <div className="card"><h3>Quality</h3><p>Automated tests, code reviews, performance budgets.</p></div>
              <div className="card"><h3>Security</h3><p>Least‑privilege access, encrypted data, audit logs.</p></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Team Structure",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Delivery Team</span>
            <h3 className="text-blue-900 mb-2">Roles & responsibilities</h3>
            <div className="cards">
              <div className="card"><h3>PM (1)</h3><p>Timeline, scope, comms, stakeholder alignment.</p></div>
              <div className="card"><h3>Seniors (2)</h3><p>Architecture, complex features, code quality.</p></div>
              <div className="card"><h3>UI/UX (1)</h3><p>Flows, visuals, prototypes, accessibility.</p></div>
              <div className="card"><h3>Juniors (3)</h3><p>Feature dev, tests, documentation.</p></div>
              <div className="card"><h3>Standards</h3><p>React/Unity certs; reviews; DoD per sprint.</p></div>
            </div>
          </div>
          <div>
            <div className="media"><img src="images/team_collaboration.svg" alt="Team collaboration" /></div>
            <div className="media-strip">
              <img src="images/hero_tactics.svg" alt="Tactics board planning" />
              <img src="images/code_screen.svg" alt="Coach using tablet and laptop" />
              <img src="images/stadium_night.svg" alt="Stadium under lights" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Timeline & Milestones",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Roadmap</span>
            <h3 className="text-blue-900 mb-2">10‑month delivery plan</h3>
            <ul className="subtle-list">
              <li>M1–2: Discovery & Design (spec, wireframes, prototypes).</li>
              <li>M3–4: Core tools & POC (drawing, basic animation).</li>
              <li>M5–6: Integrations & Alpha (media, sharing, security).</li>
              <li>M7–8: Enhancements & Beta (trivial features, UAT).</li>
              <li>M9–10: Optimizations & Launch (perf, docs, handover).</li>
            </ul>
          </div>
          <div>
            <div className="cards">
              <div className="card"><h3>Dependencies</h3><p>Feedback within 5 business days per milestone.</p></div>
              <div className="card"><h3>Reviews</h3><p>Fortnightly demos; sprint retrospectives.</p></div>
              <div className="card"><h3>Quality Gates</h3><p>CI checks, coverage targets, UX sign‑off.</p></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Deliverables",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">What you receive</span>
            <h3 className="text-blue-900 mb-2">Milestone deliverables</h3>
            <ul className="subtle-list">
              <li>M1: Requirements spec and roadmap.</li>
              <li>M2: Wireframes & UI prototypes (Figma).</li>
              <li>M4: POC — drawing tools, basic animations, notepad.</li>
              <li>M6: Alpha — full core features.</li>
              <li>M8: Beta — enhancements + UAT.</li>
              <li>M10: Final app, source, docs, manuals, 1‑month support.</li>
            </ul>
          </div>
          <div>
            <div className="cards">
              <div className="card"><h3>Quality</h3><p>Coverage targets; &lt;2s typical load; perf budgets.</p></div>
              <div className="card"><h3>Docs</h3><p>Architecture, runbooks, admin & user guides.</p></div>
              <div className="card"><h3>Handover</h3><p>Live walkthrough, repo access, CI handoff.</p></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Pricing & Payment Terms",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Commercials</span>
            <h3 className="text-blue-900 mb-2">Pricing & payment</h3>
            <ul className="subtle-list">
              <li>Model: Fixed‑price aligned to the agreed scope.</li>
              <li>Split: Disc/Design (20%), Dev/POC (40%), Test (20%), Launch (20%).</li>
              <li>Schedule: 15% upfront → 20% POC → 25% Alpha → 25% Beta → 15% Final.</li>
              <li>Notes: EUR quotes; VAT excluded; change orders at €[rate]/hr.</li>
            </ul>
          </div>
          <div>
            <div className="cards">
              <div className="card"><h3>Inclusions</h3><p>Docs, source, deployment scripts, 1‑month support.</p></div>
              <div className="card"><h3>Exclusions</h3><p>Hosting beyond setup, advanced AI, custom hardware.</p></div>
              <div className="card"><h3>Currency</h3><p>EUR; invoices under Croatian/EU regulations.</p></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Terms & Conditions",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Legal</span>
            <h3 className="text-blue-900 mb-2">Key terms</h3>
            <div className="cards">
              <div className="card"><h3>Contract</h3><p>Individual agreement under Croatian/EU law.</p></div>
              <div className="card"><h3>IP</h3><p>Client owns app; we retain reusable libraries.</p></div>
              <div className="card"><h3>NDA</h3><p>Mutual confidentiality; penalties for breach.</p></div>
              <div className="card"><h3>Changes</h3><p>Formal requests; impact assessed & approved.</p></div>
              <div className="card"><h3>Warranty</h3><p>90‑day defect coverage; liability capped at contract value.</p></div>
              <div className="card"><h3>Termination</h3><p>30‑day notice; refunds for undelivered milestones.</p></div>
            </div>
          </div>
          <div>
            <div className="media"><img src="https://images.unsplash.com/photo-1512428813834-c177b21b3e07?q=80&w=1200&auto=format&fit=crop&sat=20" alt="Contract" /></div>
            <div className="media-strip">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop&sat=25" alt="Security" />
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop" alt="Collaboration" />
              <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=400&auto=format&fit=crop" alt="Agreement" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1512428813834-c177b21b3e07?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Risks & Mitigation",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Delivery assurance</span>
            <h3 className="text-blue-900 mb-2">Top risks & mitigations</h3>
            <ul className="subtle-list">
              <li>Scope change → lock after M1; formal change orders.</li>
              <li>3D/tech hurdles → spike/prototype; senior oversight.</li>
              <li>Feedback delays → scheduled reviews; auto reminders.</li>
              <li>Distributed teams → async tools; CET alignment.</li>
              <li>Contingency → 15% buffer on timeline & budget.</li>
            </ul>
          </div>
          <div>
            <div className="cards">
              <div className="card"><h3>Tracking</h3><p>Risk log updated bi‑weekly; owners & actions.</p></div>
              <div className="card"><h3>Quality</h3><p>CI gates, test automation, performance SLOs.</p></div>
              <div className="card"><h3>Escalation</h3><p>Clear path to decision makers; SLA on responses.</p></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop&sat=10",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Next Steps",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Call to action</span>
            <h3 className="text-blue-900 mb-2">Moving forward</h3>
            <ul className="subtle-list">
              <li>Review this proposal and share feedback within 1 week.</li>
              <li>Schedule a prioritization call to finalize scope.</li>
              <li>Sign contract; kickoff discovery and planning.</li>
            </ul>
            <p className="text-xl text-gray-700 mt-4">Contact: [Your Email/Phone]</p>
            <p className="text-2xl font-bold text-blue-800 mt-2">Thank you for considering us!</p>
          </div>
          <div>
            <div className="media"><img src="images/team_collaboration.svg" alt="Collaboration" /></div>
            <div className="media-strip">
              <img src="images/hero_tactics.svg" alt="Tactics" />
              <img src="images/whiteboard_sketch.svg" alt="Workspace" />
              <img src="images/stadium_night.svg" alt="Stadium" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-green-100 to-blue-100",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Problem Statement",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Context</span>
            <h3 className="text-blue-900 mb-2">Why build a TacticalPad replica now?</h3>
            <ul className="subtle-list">
              <li>Coaches need fast, mobile-first tools to communicate ideas visually.</li>
              <li>Existing tools are fragmented or platform-limited; collaboration is clunky.</li>
              <li>Media teams want crisp exports and animations for broadcasts and socials.</li>
              <li>Gap: unified, modern UX with share-first workflows across devices.</li>
            </ul>
          </div>
          <div className="media">
            <img src="images/stadium_night.svg" alt="Match context" />
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Objectives & Success Criteria",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Goals</span>
            <h3 className="text-blue-900 mb-2">What success looks like in measurable terms</h3>
            <ul className="subtle-list">
              <li>TTR (time-to-render) under 2s on mid-tier Android and iOS.</li>
              <li>90%+ coach satisfaction in UAT surveys; CSAT > 4.5/5.</li>
              <li>Share flow under 3 taps; export in &lt; 10s for 1080p videos.</li>
              <li>Localization enabled; initial English and Croatian support.</li>
            </ul>
          </div>
          <div className="cards">
            <div className="card"><h3>KPIs</h3><p>Adoption, session length, export count, team shares.</p></div>
            <div className="card"><h3>NFRs</h3><p>Accessibility, performance, reliability, security.</p></div>
            <div className="card"><h3>Delight</h3><p>Smooth animations; beautiful exports; easy templates.</p></div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "User Personas",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Users</span>
            <h3 className="text-blue-900 mb-2">Who we’re building for</h3>
            <div className="cards">
              <div className="card"><h3>Head Coach</h3><p>Creates drills; needs quick drawing and sharing with staff.</p></div>
              <div className="card"><h3>Analyst</h3><p>Annotates videos; exports sequences; presents insights.</p></div>
              <div className="card"><h3>Journalist</h3><p>Produces clean visuals and animations for articles.</p></div>
            </div>
          </div>
          <div className="media"><img src="images/team_collaboration.svg" alt="Personas" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Competitive Landscape",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Market</span>
            <h3 className="text-blue-900 mb-2">How we differentiate</h3>
            <ul className="subtle-list">
              <li>Parity with TacticalPad core + smoother UX and collaboration.</li>
              <li>2D-first with optional 3D via Unity module.</li>
              <li>Better exports (brand presets, watermarks, social crops).</li>
              <li>Pluggable data model to support multiple sports.</li>
            </ul>
          </div>
          <div className="cards">
            <div className="card"><h3>Advantage</h3><p>Performance, share flows, and multi-sport templates.</p></div>
            <div className="card"><h3>Focus</h3><p>Coach workflows, analyst tooling, and team collaboration.</p></div>
            <div className="card"><h3>Extensibility</h3><p>Open integration points; theming; localization.</p></div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Feature Deep‑Dive: Drawing Tools",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Deep‑Dive</span>
            <h3 className="text-blue-900 mb-2">Strokes, shapes, and smart guides</h3>
            <ul className="subtle-list">
              <li>Pen, arrow, dashed, curved paths; snap-to-grid.</li>
              <li>Auto‑align, magnet guidelines, and symmetry helpers.</li>
              <li>Reusable elements: cones, mannequins, ladders, goals.</li>
              <li>Multi-select, grouping, and layers.</li>
            </ul>
          </div>
          <div className="media"><img src="images/whiteboard_sketch.svg" alt="Drawing tools" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Feature Deep‑Dive: Animation",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Deep‑Dive</span>
            <h3 className="text-blue-900 mb-2">Timelines, easing, and camera moves</h3>
            <ul className="subtle-list">
              <li>Keyframes for player and ball paths with easing presets.</li>
              <li>Timeline with scrub, loop, and step-through controls.</li>
              <li>Camera pans/zooms; spotlight; callouts.</li>
              <li>Export to MP4/WebM and GIF with brand presets.</li>
            </ul>
          </div>
          <div className="media"><img src="images/timeline_editor.svg" alt="Animation timeline" /></div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Feature Deep‑Dive: Playbooks",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Deep‑Dive</span>
            <h3 className="text-blue-900 mb-2">Organize drills and sessions</h3>
            <ul className="subtle-list">
              <li>Collections of boards with tags, filters, and quick search.</li>
              <li>Session mode to sequence drills with timers and notes.</li>
              <li>Template gallery with sport presets.</li>
              <li>Import/export playbooks via JSON.</li>
            </ul>
          </div>
          <div className="media"><img src="images/kanban_board.svg" alt="Playbooks" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Architecture Overview",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Architecture</span>
            <h3 className="text-blue-900 mb-2">Client, services, and 3D module</h3>
            <ul className="subtle-list">
              <li>React Native app; optional Unity module for 3D.</li>
              <li>Node.js services on AWS; CDN for assets and templates.</li>
              <li>Auth, storage, and media pipeline for exports.</li>
              <li>Telemetry and feature flags for safe rollout.</li>
            </ul>
          </div>
          <div className="media"><img src="images/cloud_diagram.svg" alt="Architecture" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Data Model & Sync",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Engineering</span>
            <h3 className="text-blue-900 mb-2">Offline‑first, conflict‑aware</h3>
            <ul className="subtle-list">
              <li>Board schema: entities, paths, animations, notes.</li>
              <li>Local persistence with background sync.</li>
              <li>Conflict resolution strategy with last‑writer + merges.</li>
              <li>Versioning for compatibility across releases.</li>
            </ul>
          </div>
          <div className="media"><img src="images/db_diagram.svg" alt="Data model" /></div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Security & Privacy",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Security</span>
            <h3 className="text-blue-900 mb-2">Protecting data and IP</h3>
            <ul className="subtle-list">
              <li>Encryption in transit and at rest; secure key handling.</li>
              <li>Role-based access; private share links with expiry.</li>
              <li>Audit logs and anomaly alerts.</li>
              <li>GDPR compliance; DPIA as needed.</li>
            </ul>
          </div>
          <div className="media"><img src="images/lock_security.svg" alt="Security" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Quality & Testing Strategy",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Quality</span>
            <h3 className="text-blue-900 mb-2">Automation and user testing</h3>
            <ul className="subtle-list">
              <li>Unit/integration tests; snapshot tests for rendering.</li>
              <li>Device matrix for iOS/Android; desktop smoke tests.</li>
              <li>Performance budgets and regression checks.</li>
              <li>UAT with scripts and acceptance criteria per feature.</li>
            </ul>
          </div>
          <div className="cards">
            <div className="card"><h3>CI/CD</h3><p>PR checks, artifact builds, and release channels.</p></div>
            <div className="card"><h3>Monitoring</h3><p>Crash reporting, RUM metrics, and SLO dashboards.</p></div>
            <div className="card"><h3>Beta</h3><p>TestFlight/Internal App Sharing with feedback loops.</p></div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Accessibility & Localization",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Inclusivity</span>
            <h3 className="text-blue-900 mb-2">WCAG and multilingual support</h3>
            <ul className="subtle-list">
              <li>Color contrast, focus states, and keyboard nav.</li>
              <li>Alt text for exports; captions for video.</li>
              <li>i18n framework; English and Croatian at launch.</li>
              <li>RTL readiness and pluralization rules.</li>
            </ul>
          </div>
          <div className="media"><img src="images/accessibility_design.svg" alt="Accessibility" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "images/overlay_texture.svg",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Deployment & DevOps",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Operations</span>
            <h3 className="text-blue-900 mb-2">Build, release, and operate</h3>
            <ul className="subtle-list">
              <li>App store pipelines; code signing and provisioning.</li>
              <li>Backend infra as code; blue/green rollouts.</li>
              <li>Observability: logs, metrics, traces; alerting.</li>
              <li>Backups and disaster recovery drills.</li>
            </ul>
          </div>
          <div className="media"><img src="images/devops_cloud.svg" alt="DevOps" /></div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Training & Change Management",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Adoption</span>
            <h3 className="text-blue-900 mb-2">Enabling teams to succeed</h3>
            <ul className="subtle-list">
              <li>Guided onboarding; in‑app tips and templates.</li>
              <li>Video tutorials and quick start guides.</li>
              <li>Coach workshops and knowledge base.</li>
              <li>Feedback channels and roadmap updates.</li>
            </ul>
          </div>
          <div className="media"><img src="https://source.unsplash.com/1200x800/?training,workshop,coach" alt="Training" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Support, SLA & Maintenance",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Operations</span>
            <h3 className="text-blue-900 mb-2">Keeping the app reliable</h3>
            <ul className="subtle-list">
              <li>Support tiers; response and resolution targets.</li>
              <li>Planned maintenance windows and notifications.</li>
              <li>Bug triage and patch releases cadence.</li>
              <li>Usage analytics to guide improvements.</li>
            </ul>
          </div>
          <div className="cards">
            <div className="card"><h3>SLA</h3><p>Uptime target and support hours aligned with CET.</p></div>
            <div className="card"><h3>On‑call</h3><p>Escalation procedures and status pages.</p></div>
            <div className="card"><h3>Ownership</h3><p>Clear RACI for app, backend, and content.</p></div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop&sat=10",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Commercial Add‑Ons",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Options</span>
            <h3 className="text-blue-900 mb-2">Optional capabilities post‑launch</h3>
            <ul className="subtle-list">
              <li>Advanced AI tagging; computer vision assists.</li>
              <li>Team management portal and roles.</li>
              <li>Premium template packs; marketplace.</li>
              <li>Custom branding and watermark automation.</li>
            </ul>
          </div>
          <div className="media"><img src="https://source.unsplash.com/1200x800/?business,growth,options" alt="Add-ons" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Assumptions & Dependencies",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Plan</span>
            <h3 className="text-blue-900 mb-2">What we rely on</h3>
            <ul className="subtle-list">
              <li>Stakeholder availability for reviews within 5 business days.</li>
              <li>Access to target devices for testing and demos.</li>
              <li>Timely content and branding assets for exports.</li>
              <li>App store approvals per usual timelines.</li>
            </ul>
          </div>
          <div className="media"><img src="https://source.unsplash.com/1200x800/?planning,calendar,schedule" alt="Assumptions" /></div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Case Study Inspiration",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Proof</span>
            <h3 className="text-blue-900 mb-2">Examples we will draw from</h3>
            <ul className="subtle-list">
              <li>High‑performing sports analysis apps with fluid UIs.</li>
              <li>Media suites with crisp export pipelines.</li>
              <li>Education apps with strong onboarding and templates.</li>
              <li>Design tools with powerful vector/animation engines.</li>
            </ul>
          </div>
          <div className="media"><img src="https://source.unsplash.com/1200x800/?case,study,success" alt="Case studies" /></div>
        </div>
      </div>
    ),
    bg: "bg-white",
    overlay: "https://images.unsplash.com/photo-1518091043644-391557a77304?q=80&w=1920&auto=format&fit=crop&sat=25",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Roadmap Detail (Quarters)",
    content: (
      <div className="animate-slideInRight">
        <div className="grid-2">
          <div>
            <span className="badge">Roadmap</span>
            <h3 className="text-blue-900 mb-2">Quarterly view</h3>
            <ul className="subtle-list">
              <li>Q1: Discovery, design system, drawing MVP.</li>
              <li>Q2: Animation 2D, exports, playbooks alpha.</li>
              <li>Q3: Integrations, security hardening, beta.</li>
              <li>Q4: Perf, localization, launch and training.</li>
            </ul>
          </div>
          <div className="cards">
            <div className="card"><h3>Milestones</h3><p>Gate reviews and acceptance per quarter.</p></div>
            <div className="card"><h3>Risks</h3><p>Spike complex areas early; maintain buffers.</p></div>
            <div className="card"><h3>Outcomes</h3><p>Value delivered continuously.</p></div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-green-50",
    overlay: "https://images.unsplash.com/photo-1508098682722-8e6e7b1521b1?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  },
  {
    title: "Closing & Contacts",
    content: (
      <div className="animate-slideInLeft">
        <div className="grid-2">
          <div>
            <span className="badge">Wrap‑up</span>
            <h3 className="text-blue-900 mb-2">We’re excited to partner</h3>
            <ul className="subtle-list">
              <li>We can deliver a polished replica with thoughtful improvements.</li>
              <li>Clear plan, experienced team, and reliable delivery practices.</li>
              <li>Let’s align scope and get started.</li>
            </ul>
            <p className="text-xl text-gray-700 mt-4">Contact: [Your Email/Phone]</p>
          </div>
          <div className="media"><img src="https://source.unsplash.com/1200x800/?handshake,agreement,partners" alt="Partnership" /></div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-green-100 to-blue-100",
    overlay: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1920&auto=format&fit=crop&sat=20",
    decoLeft: "",
    decoRight: ""
  }
];

// Groups for splitting into multiple pages
const GROUPS = {
  overview: [0,1,2,3,4,16,17],
  features: [5,6,7,18,19,20,21,22,23,24],
  process: [8,9,10,11,25,26,27,28],
  terms: [12,13,14,29,30],
  next: [15,31]
};

function getSlidesForGroup(group) {
  const indices = GROUPS[group] || GROUPS.overview;
  return indices.map(i => slides[i]);
}

function Slide(props) {
  const { title, content, bg, overlay, decoLeft, decoRight } = props;
  return (
    <div className="slide">
      <div className="bg-overlay" style={{ backgroundImage: `url(${overlay})` }}></div>
      {/* Reduce playful rotating icons for a more professional look; keep optional if provided */}
      {decoLeft && <img src={decoLeft} alt="Decoration Left" className="football-deco-left" />}
      {decoRight && <img src={decoRight} alt="Decoration Right" className="football-deco-right" />}
      <div className="content-container">
        <h2 className="section-title">{title}</h2>
        {content}
      </div>
    </div>
  );
}

function App() {
  const group = (window.PAGE || 'overview');
  const groupSlides = React.useMemo(() => getSlidesForGroup(group), [group]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // Reader/presentation mode with persistence and URL override
  const [readerMode, setReaderMode] = React.useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('reader')) {
        return params.get('reader') === '1';
      }
      const saved = localStorage.getItem('readerMode');
      return saved ? saved === '1' : false; // default to presentation view (1 slide at a time)
    } catch (_) {
      return false;
    }
  });

  React.useEffect(() => {
    try { localStorage.setItem('readerMode', readerMode ? '1' : '0'); } catch(_) {}
    // Toggle a class on body for CSS-based adjustments
    document.body.classList.toggle('reader-mode', readerMode);
  }, [readerMode]);

  // Section order and corresponding page URLs for cross-section navigation
  // Single-presentation mode: one unified sequence of slides
  const sectionOrder = ['overview'];
  const sectionToUrl = {
    overview: 'index.html'
  };

  // Build a flattened list of all slides across all sections (single presentation)
  const allSlides = React.useMemo(() => slides, []);

  const goToSection = (sectionKey, slideIndex) => {
    // If navigating within the same section, update local state; otherwise navigate to page URL
    if (sectionKey === group) {
      setCurrentSlide(slideIndex);
    } else {
      window.location.href = sectionToUrl[sectionKey] || 'index.html';
    }
  };

  const nextSlide = () => {
    if (currentSlide < allSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Determine disabled states for global slide navigation
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === allSlides.length - 1;

  const toggleReaderMode = () => setReaderMode(v => !v);

  // Keyboard navigation for presentation mode
  React.useEffect(() => {
    if (readerMode) return; // no keyboard hijack in reader mode
    const handler = (e) => {
      const tag = (e.target && (e.target.tagName || '')).toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.isComposing) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case ' ': // Space
          if (!e.shiftKey) {
            e.preventDefault();
            nextSlide();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(Math.max(0, allSlides.length - 1));
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handler, { passive: false });
    return () => window.removeEventListener('keydown', handler);
  }, [readerMode, currentSlide, allSlides.length]);

  return (
    <div>
      {/* Reader/Presentation toggle */}
      <div className="view-toggle">
        <button
          className="button button-secondary"
          onClick={toggleReaderMode}
          aria-pressed={readerMode ? 'true' : 'false'}
          title={readerMode ? 'Switch to presentation view' : 'Switch to reader view'}
        >
          {readerMode ? 'Reader View' : 'Presentation View'}
        </button>
      </div>
      {readerMode ? (
        <div className="all-slides">
          {allSlides.map((s, idx) => (
            <div key={idx} className="slide-wrapper">
              <Slide {...s} />
            </div>
          ))}
        </div>
      ) : (
        <Slide {...allSlides[currentSlide]} />
      )}
      {!readerMode && (
        <div className="nav-buttons flex space-x-4" aria-label="Slide navigation">
          <button onClick={prevSlide} disabled={isPrevDisabled} className="button disabled:opacity-60" title="Previous slide (ArrowLeft/PageUp)">Previous</button>
          <button onClick={nextSlide} disabled={isNextDisabled} className="button disabled:opacity-60" title="Next slide (Space/ArrowRight/PageDown)">Next</button>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
