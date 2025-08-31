// Enhanced Professional Presentation App with Advanced Design
// Tactical Coaching Application Proposal

// Utility functions
var gk_isXlsx = false;
var gk_xlsxFileLookup = {};
var gk_fileData = {};
function filledCell(cell) {
  return cell !== '' && cell != null;
}

// Icon Component Helper
const Icon = ({ name, size = 24, color = "currentColor", className = "" }) => {
  return React.createElement('i', {
    className: `lucide-${name} ${className}`,
    style: { width: size, height: size, stroke: color }
  });
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return React.createElement('span', { className: 'stat-number' }, `${prefix}${count}${suffix}`);
};

// Progress Circle Component
const ProgressCircle = ({ percentage, size = 120, strokeWidth = 8, color = "#667eea" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <svg width={size} height={size} className="progress-ring">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        className="progress-ring-circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        className="text-2xl font-bold"
        fill={color}
      >
        {percentage}%
      </text>
    </svg>
  );
};

// Enhanced Slides Array with Professional Design
const slides = [
  // ======== OPENING & CONTEXT (5 slides) ========
  // 1. Title Slide - Completely Redesigned
  {
    title: "Proposal for Developing a Custom Tactical Coaching Application",
    content: (
      <div className="animate-fadeInUp">
        <div className="relative">
          {/* Background Decoration */}
          <div className="decoration-gradient-blob" style={{top: '-100px', right: '-100px'}}></div>
          <div className="decoration-dots" style={{bottom: '20px', left: '20px'}}></div>
          
          <div className="grid-2">
            <div className="stagger-animation">
              <span className="badge-gradient animate-pulse">Executive Proposal 2024</span>
              <h1 className="heading-xl text-gradient mt-4">
                High‑Fidelity Replica of TacticalPad
              </h1>
              <div className="glass-card p-4 rounded-xl mt-6">
                <p className="text-gray-700 flex items-center gap-2">
                  <Icon name="user" size={18} /> Prepared for: [Client's Name/Individual in Croatia]
                </p>
                <p className="text-gray-700 flex items-center gap-2 mt-2">
                  <Icon name="calendar" size={18} /> Date: {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-700 flex items-center gap-2 mt-2">
                  <Icon name="briefcase" size={18} /> Prepared by: [Your Name/Company Name]
                </p>
              </div>
              
              <div className="divider my-6" />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="modern-card text-center hover-lift">
                  <Icon name="clock" size={32} color="#667eea" className="mx-auto mb-2" />
                  <AnimatedCounter end={10} suffix=" mo" />
                  <div className="text-sm text-gray-600 mt-1">Full Build</div>
                </div>
                <div className="modern-card text-center hover-lift">
                  <Icon name="rocket" size={32} color="#764ba2" className="mx-auto mb-2" />
                  <AnimatedCounter end={4} suffix=" mo" />
                  <div className="text-sm text-gray-600 mt-1">POC</div>
                </div>
                <div className="modern-card text-center hover-lift">
                  <Icon name="users" size={32} color="#84fab0" className="mx-auto mb-2" />
                  <AnimatedCounter end={7} />
                  <div className="text-sm text-gray-600 mt-1">Core Team</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="media hover-glow" style={{animation: 'float 4s ease-in-out infinite'}}>
                <img src="images/hero_tactics.svg" alt="Football tactics board illustration"/>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-animated rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "gradient-animated",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },
  
  // 2. Executive Summary - Enhanced Design
  {
    title: "Executive Summary",
    content: (
      <div className="animate-fadeInScale">
        <div className="grid-2">
          <div className="stagger-animation">
            <span className="badge-outline">Executive Summary</span>
            <h3 className="heading-lg text-gradient mt-4">What We Will Deliver</h3>
            
            <div className="space-y-4 mt-6">
              {[
                { icon: "layers", text: "Cross-platform TacticalPad replica for drill design, tactics and session planning", color: "#667eea" },
                { icon: "sparkles", text: "Benefits: modern UI/UX, 2D/3D animations, rich sharing, scalable architecture", color: "#764ba2" },
                { icon: "calendar-check", text: "Timeline: POC in 4 months; full application in 10 months with stage gates", color: "#84fab0" },
                { icon: "users-2", text: "Team: PM (1), Senior Dev (2), UI/UX (1), Junior Dev (3)", color: "#fa709a" },
                { icon: "trophy", text: "Outcome: A polished, reliable tool for coaches, analysts and media teams", color: "#30cfd0" }
              ].map((item, index) => (
                <div key={index} className="feature-card-modern flex items-start gap-4 hover-lift">
                  <div className="icon-circle">
                    <Icon name={item.icon} size={24} color={item.color} />
                  </div>
                  <p className="text-gray-700 flex-1 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="chart-container mb-6">
              <h4 className="text-lg font-semibold mb-4">Project Timeline</h4>
              <div className="timeline-modern">
                {['Discovery', 'Design', 'Development', 'Testing', 'Launch'].map((phase, i) => (
                  <div key={i} className="timeline-item-modern" style={{animationDelay: `${i * 0.2}s`}}>
                    <div className="timeline-dot"></div>
                    <div className={`glass-card p-4 rounded-lg ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-5/12`}>
                      <h5 className="font-semibold">{phase}</h5>
                      <p className="text-sm text-gray-600">Month {i * 2 + 1}-{i * 2 + 2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="media-strip">
              <div className="stat-card hover-lift">
                <Icon name="code" size={20} color="#667eea" />
                <p className="text-xs mt-1">Clean Code</p>
              </div>
              <div className="stat-card hover-lift">
                <Icon name="shield" size={20} color="#764ba2" />
                <p className="text-xs mt-1">Secure</p>
              </div>
              <div className="stat-card hover-lift">
                <Icon name="zap" size={20} color="#84fab0" />
                <p className="text-xs mt-1">Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },
  
  // 3. Problem Statement - Redesigned with Icons and Visual Elements
  {
    title: "Problem Statement",
    content: (
      <div className="animate-slideInLeftFade">
        <div className="grid-2">
          <div className="stagger-animation">
            <span className="badge-gradient">Context & Challenges</span>
            <h3 className="heading-lg mt-4">
              <span className="text-gradient">Why Build a TacticalPad Replica Now?</span>
            </h3>
            
            <div className="space-y-4 mt-6">
              {[
                { 
                  icon: "smartphone", 
                  title: "Mobile-First Need",
                  text: "Coaches need fast, mobile-first tools to communicate ideas visually",
                  color: "#e73c7e"
                },
                { 
                  icon: "puzzle", 
                  title: "Fragmented Tools",
                  text: "Existing tools are fragmented or platform-limited; collaboration is clunky",
                  color: "#f093fb"
                },
                { 
                  icon: "video", 
                  title: "Media Requirements",
                  text: "Media teams want crisp exports and animations for broadcasts and socials",
                  color: "#4facfe"
                },
                { 
                  icon: "globe", 
                  title: "Market Gap",
                  text: "Gap: unified, modern UX with share-first workflows across devices",
                  color: "#43e97b"
                }
              ].map((item, index) => (
                <div key={index} className="glass-card p-4 rounded-xl hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-3">
                    <div className="icon-circle" style={{background: `linear-gradient(135deg, ${item.color}33, ${item.color}22)`}}>
                      <Icon name={item.icon} size={24} color={item.color} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="decoration-gradient-blob" style={{top: '50px', right: '50px'}}></div>
            <div className="media hover-glow rounded-2xl overflow-hidden">
              <img src="images/stadium_night.svg" alt="Match context" />
            </div>
            
            <div className="modern-card mt-6 text-center">
              <h4 className="font-semibold text-lg mb-4">Market Opportunity</h4>
              <div className="flex justify-around">
                <div>
                  <AnimatedCounter end={87} suffix="%" />
                  <p className="text-xs text-gray-600 mt-1">Coaches Want Digital Tools</p>
                </div>
                <div>
                  <AnimatedCounter end={65} suffix="%" />
                  <p className="text-xs text-gray-600 mt-1">Unsatisfied with Current Options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-tr from-red-50 via-white to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },
  
  // 4. Objectives & Success Criteria - Enhanced with Charts
  {
    title: "Objectives & Success Criteria",
    content: (
      <div className="animate-slideInRightFade">
        <div className="stagger-animation">
          <span className="badge-outline">Goals & Metrics</span>
          <h3 className="heading-lg text-gradient mt-4">Success in Measurable Terms</h3>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Performance Metrics */}
            <div className="modern-card">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Icon name="gauge" size={20} color="#667eea" />
                Performance Targets
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Time to Render</span>
                    <span className="text-sm font-semibold">&lt;2s</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Export Speed (1080p)</span>
                    <span className="text-sm font-semibold">&lt;10s</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Share Flow</span>
                    <span className="text-sm font-semibold">&lt;3 taps</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Satisfaction Metrics */}
            <div className="modern-card">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Icon name="heart" size={20} color="#e73c7e" />
                Satisfaction Metrics
              </h4>
              <div className="flex justify-around items-center">
                <ProgressCircle percentage={90} size={100} color="#e73c7e" />
                <div>
                  <div className="stat-number text-3xl">4.5<span className="text-lg">/5</span></div>
                  <p className="text-sm text-gray-600">Target CSAT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-4 rounded-xl text-center hover-lift">
              <Icon name="check-circle" size={32} color="#43e97b" className="mx-auto mb-2" />
              <h5 className="font-semibold">KPIs</h5>
              <p className="text-xs text-gray-600 mt-1">Adoption, session length, export count</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover-lift">
              <Icon name="shield-check" size={32} color="#4facfe" className="mx-auto mb-2" />
              <h5 className="font-semibold">NFRs</h5>
              <p className="text-xs text-gray-600 mt-1">Accessibility, performance, security</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover-lift">
              <Icon name="star" size={32} color="#f093fb" className="mx-auto mb-2" />
              <h5 className="font-semibold">Delight</h5>
              <p className="text-xs text-gray-600 mt-1">Smooth animations, beautiful exports</p>
            </div>
          </div>
          
          <div className="feature-card-modern mt-6 text-center gradient-success">
            <Icon name="globe-2" size={24} color="#059669" className="mx-auto mb-2" />
            <p className="font-semibold">Localization Ready: English & Croatian at Launch</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-green-50 via-white to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },
  
  // 5. User Personas - Redesigned with Avatar Cards
  {
    title: "User Personas",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Target Audience</span>
          <h3 className="heading-lg text-gradient mt-4">Who We're Building For</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                role: "Head Coach",
                icon: "user-check",
                color: "#667eea",
                needs: ["Quick drill creation", "Team sharing", "Mobile access"],
                tools: ["Drawing tools", "Templates", "Export features"],
                gradient: "gradient-primary"
              },
              {
                role: "Analyst",
                icon: "bar-chart-3",
                color: "#e73c7e",
                needs: ["Video annotation", "Data export", "Insights presentation"],
                tools: ["Analytics", "Reporting", "Integration APIs"],
                gradient: "gradient-warm"
              },
              {
                role: "Journalist",
                icon: "newspaper",
                color: "#43e97b",
                needs: ["Clean visuals", "Quick animations", "Social media ready"],
                tools: ["Export presets", "Branding", "Quick share"],
                gradient: "gradient-success"
              }
            ].map((persona, index) => (
              <div key={index} className="modern-card hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-20 h-20 rounded-full ${persona.gradient} mx-auto mb-4 flex items-center justify-center`}>
                  <Icon name={persona.icon} size={40} color="white" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">{persona.role}</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Needs:</h5>
                    <ul className="space-y-1">
                      {persona.needs.map((need, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                          <Icon name="check" size={14} color={persona.color} />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Tools Used:</h5>
                    <ul className="space-y-1">
                      {persona.tools.map((tool, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                          <Icon name="tool" size={14} color={persona.color} />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-2xl font-bold" style={{color: persona.color}}>
                        {85 + index * 5}%
                      </p>
                      <p className="text-xs text-gray-600">Daily Usage</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{color: persona.color}}>
                        {4 + index * 2}h
                      </p>
                      <p className="text-xs text-gray-600">Avg Session</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8 gradient-cool">
            <div className="flex items-center justify-center gap-8">
              <Icon name="users" size={40} color="#667eea" />
              <div>
                <p className="text-3xl font-bold text-gradient">10,000+</p>
                <p className="text-gray-700">Potential Users in Year 1</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">3</p>
                <p className="text-gray-700">Primary User Types</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gradient">15+</p>
                <p className="text-gray-700">Supported Sports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // Continue with remaining 31 slides...
  // For brevity, I'll show the structure for a few more key slides

  // 6. Project Understanding
  {
    title: "Project Understanding",
    content: (
      <div className="animate-fadeInScale">
        <div className="grid-2">
          <div className="stagger-animation">
            <span className="badge-outline">Project Scope</span>
            <h3 className="heading-lg text-gradient mt-4">What Success Looks Like</h3>
            
            <div className="space-y-4 mt-6">
              <div className="feature-card-modern">
                <div className="flex items-start gap-3">
                  <Icon name="copy" size={24} color="#667eea" />
                  <div>
                    <h4 className="font-semibold mb-1">Core Replication</h4>
                    <p className="text-sm text-gray-600">TacticalPad for drills, formations, tactics and sessions</p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card-modern">
                <div className="flex items-start gap-3">
                  <Icon name="monitor-smartphone" size={24} color="#764ba2" />
                  <div>
                    <h4 className="font-semibold mb-1">Platform Parity</h4>
                    <p className="text-sm text-gray-600">Desktop & Mobile (Win/Mac/iOS/Android) with seamless sync</p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card-modern">
                <div className="flex items-start gap-3">
                  <Icon name="palette" size={24} color="#84fab0" />
                  <div>
                    <h4 className="font-semibold mb-1">Enhancements</h4>
                    <p className="text-sm text-gray-600">Themes, quick search, basic analytics, offline mode</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl mt-6 gradient-warm">
              <h4 className="font-semibold mb-2">Key Challenges</h4>
              <div className="flex gap-4">
                <span className="badge-outline">UX Consistency</span>
                <span className="badge-outline">Performance</span>
                <span className="badge-outline">Security</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="chart-container">
              <h4 className="font-semibold mb-4">Feature Coverage</h4>
              <div className="space-y-3">
                {[
                  { feature: "Drawing Tools", coverage: 100 },
                  { feature: "Animation", coverage: 95 },
                  { feature: "Collaboration", coverage: 90 },
                  { feature: "Analytics", coverage: 75 },
                  { feature: "Multi-Sport", coverage: 100 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{item.feature}</span>
                      <span className="text-sm font-semibold">{item.coverage}%</span>
                    </div>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        style={{
                          width: `${item.coverage}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modern-card mt-6 text-center hover-glow">
              <Icon name="target" size={32} color="#e73c7e" className="mx-auto mb-2" />
              <p className="font-semibold">Multi-Sport Ready</p>
              <p className="text-xs text-gray-600 mt-1">Football, Basketball, Hockey, Rugby & more</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-tr from-indigo-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== SOLUTION OVERVIEW (Slides 7-8) ========
  // 7. Competitive Landscape
  {
    title: "Competitive Landscape",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Market Analysis</span>
          <h3 className="heading-lg text-gradient mt-4">Why Build Custom?</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                name: "TacticalPad",
                icon: "monitor",
                pros: ["Feature rich", "Multi-sport"],
                cons: ["Legacy UI", "No mobile", "Desktop only"],
                rating: 3.5
              },
              {
                name: "Coach's Eye",
                icon: "smartphone",
                pros: ["Mobile first", "Video analysis"],
                cons: ["Limited tactics", "No web version"],
                rating: 3.0
              },
              {
                name: "TacticalBoard",
                icon: "globe",
                pros: ["Web based", "Free tier"],
                cons: ["Basic features", "No animations"],
                rating: 2.5
              }
            ].map((competitor, index) => (
              <div key={index} className="modern-card hover-lift" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="flex items-center justify-between mb-4">
                  <Icon name={competitor.icon} size={24} color="#667eea" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="star" 
                        size={16} 
                        color={i < Math.floor(competitor.rating) ? "#fbbf24" : "#e5e7eb"}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-3">{competitor.name}</h4>
                
                <div className="space-y-2 mb-3">
                  <p className="text-xs font-semibold text-green-600">Strengths:</p>
                  {competitor.pros.map((pro, i) => (
                    <p key={i} className="text-xs text-gray-600 flex items-center gap-1">
                      <Icon name="check" size={12} color="#10b981" />
                      {pro}
                    </p>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-red-600">Limitations:</p>
                  {competitor.cons.map((con, i) => (
                    <p key={i} className="text-xs text-gray-600 flex items-center gap-1">
                      <Icon name="x" size={12} color="#ef4444" />
                      {con}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8 gradient-primary text-white">
            <h4 className="text-xl font-bold mb-4">Our Custom Solution Advantages</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: "zap", label: "Modern Stack" },
                { icon: "smartphone", label: "Mobile First" },
                { icon: "cloud", label: "Cloud Native" },
                { icon: "users", label: "Team Focused" }
              ].map((adv, i) => (
                <div key={i} className="text-center">
                  <Icon name={adv.icon} size={32} color="white" className="mx-auto mb-2" />
                  <p className="text-sm">{adv.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-indigo-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 8. Scope of Work
  {
    title: "Scope of Work",
    content: (
      <div className="animate-fadeInScale">
        <div className="grid-2">
          <div className="stagger-animation">
            <span className="badge-outline">Project Scope</span>
            <h3 className="heading-lg text-gradient mt-4">What We'll Deliver</h3>
            
            <div className="space-y-4 mt-6">
              {[
                { phase: "Core Platform", items: ["Drawing tools", "Animation engine", "Export system"], color: "#667eea" },
                { phase: "Content Library", items: ["Sport templates", "Drill library", "Formation presets"], color: "#764ba2" },
                { phase: "Collaboration", items: ["Team sharing", "Cloud sync", "Comments"], color: "#84fab0" },
                { phase: "Analytics", items: ["Usage metrics", "Performance insights", "Reports"], color: "#8fd3f4" }
              ].map((scope, index) => (
                <div key={index} className="feature-card-modern" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-full rounded" style={{backgroundColor: scope.color}}></div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{scope.phase}</h4>
                      <div className="flex gap-2 flex-wrap">
                        {scope.items.map((item, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="modern-card">
              <h4 className="font-semibold text-lg mb-4">Delivery Timeline</h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                {[
                  { month: "Month 1-2", task: "Foundation & Core", progress: 100 },
                  { month: "Month 3-4", task: "Features & UI", progress: 75 },
                  { month: "Month 5-6", task: "Testing & Polish", progress: 50 },
                  { month: "Month 7", task: "Launch & Deploy", progress: 25 }
                ].map((timeline, i) => (
                  <div key={i} className="relative pl-10 pb-6">
                    <div className="absolute left-2 w-4 h-4 bg-white border-2 border-purple-500 rounded-full"></div>
                    <h5 className="font-semibold text-sm">{timeline.month}</h5>
                    <p className="text-xs text-gray-600 mt-1">{timeline.task}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{width: `${timeline.progress}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="stat-card text-center">
                <AnimatedCounter end={7} suffix=" months" />
                <p className="text-sm text-gray-600 mt-2">Total Duration</p>
              </div>
              <div className="stat-card text-center">
                <AnimatedCounter end={4} suffix=" phases" />
                <p className="text-sm text-gray-600 mt-2">Project Phases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-green-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== CORE FEATURES (Slides 9-14) ========
  // 9. Core Features: Drawing & Visualization
  {
    title: "Core Features: Drawing & Visualization",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Feature Set 1</span>
          <h3 className="heading-lg text-gradient mt-4">Professional Drawing Tools</h3>
          
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { icon: "pen-tool", name: "Smart Pen", desc: "Pressure sensitive drawing" },
              { icon: "move", name: "Drag & Drop", desc: "Intuitive object manipulation" },
              { icon: "layers", name: "Layer System", desc: "Organized element stacking" },
              { icon: "copy", name: "Templates", desc: "Pre-built formations" },
              { icon: "palette", name: "Themes", desc: "Custom color schemes" },
              { icon: "grid", name: "Grid Snap", desc: "Precision alignment" },
              { icon: "maximize-2", name: "Zoom", desc: "Detail work support" },
              { icon: "rotate-cw", name: "Transform", desc: "Rotate, scale, flip" }
            ].map((tool, i) => (
              <div key={i} className="glass-card p-4 hover-lift text-center" style={{animationDelay: `${i * 0.05}s`}}>
                <div className="icon-circle mx-auto mb-3">
                  <Icon name={tool.icon} size={24} color="#667eea" />
                </div>
                <h5 className="font-semibold text-sm">{tool.name}</h5>
                <p className="text-xs text-gray-600 mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid-2 mt-8">
            <div className="modern-card">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="users" size={20} color="#667eea" />
                Player Elements
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Custom jerseys",
                  "Position markers",
                  "Movement paths",
                  "Action indicators"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="check-circle" size={16} color="#10b981" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modern-card">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="map-pin" size={20} color="#764ba2" />
                Field Elements
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Multiple sports",
                  "Custom dimensions",
                  "Zone highlighting",
                  "Equipment props"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="check-circle" size={16} color="#10b981" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-blue-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 10. Core Features: Animation & Content
  {
    title: "Core Features: Animation & Content",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-gradient">Feature Set 2</span>
          <h3 className="heading-lg text-gradient mt-4">Dynamic Animation System</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="modern-card mb-4">
                <h4 className="font-bold text-lg mb-4">Animation Capabilities</h4>
                <div className="space-y-3">
                  {[
                    { label: "Frame-by-frame control", value: 60, color: "#667eea" },
                    { label: "Path animation", value: 85, color: "#764ba2" },
                    { label: "Timing curves", value: 75, color: "#84fab0" },
                    { label: "Multi-object sync", value: 90, color: "#8fd3f4" }
                  ].map((cap, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{cap.label}</span>
                        <span className="font-semibold">{cap.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000" 
                          style={{
                            width: `${cap.value}%`,
                            backgroundColor: cap.color,
                            animationDelay: `${i * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h5 className="font-semibold mb-3">Export Formats</h5>
                <div className="flex flex-wrap gap-2">
                  {["MP4", "GIF", "PNG", "PDF", "SVG", "WEBM"].map((format, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-semibold">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern">
                <div className="text-center mb-6">
                  <ProgressCircle percentage={95} size={140} color="#667eea" />
                  <p className="text-sm text-gray-600 mt-3">Animation Smoothness</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Icon name="play-circle" size={32} color="#764ba2" className="mx-auto mb-2" />
                    <p className="text-2xl font-bold">60fps</p>
                    <p className="text-xs text-gray-600">Playback</p>
                  </div>
                  <div className="text-center">
                    <Icon name="clock" size={32} color="#84fab0" className="mx-auto mb-2" />
                    <p className="text-2xl font-bold">5min</p>
                    <p className="text-xs text-gray-600">Max Length</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modern-card mt-6 gradient-animated text-white">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <Icon name="film" size={32} color="white" className="mx-auto mb-2" />
                <p className="font-bold">Video Integration</p>
              </div>
              <div className="text-center">
                <Icon name="mic" size={32} color="white" className="mx-auto mb-2" />
                <p className="font-bold">Voice Recording</p>
              </div>
              <div className="text-center">
                <Icon name="music" size={32} color="white" className="mx-auto mb-2" />
                <p className="font-bold">Sound Effects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-pink-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 11. Feature Deep-Dive: Drawing Tools
  {
    title: "Feature Deep-Dive: Drawing Tools",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-outline">Deep Dive</span>
          <h3 className="heading-lg text-gradient mt-4">Advanced Drawing Capabilities</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="modern-card hover-lift">
              <div className="icon-circle mb-4">
                <Icon name="edit-3" size={24} color="#667eea" />
              </div>
              <h4 className="font-bold mb-3">Freehand Drawing</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Smooth curve interpolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Pressure sensitivity support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Auto-shape recognition</span>
                </li>
              </ul>
            </div>
            
            <div className="modern-card hover-lift">
              <div className="icon-circle mb-4">
                <Icon name="shapes" size={24} color="#764ba2" />
              </div>
              <h4 className="font-bold mb-3">Shape Library</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>50+ pre-built shapes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Custom shape creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Smart connectors</span>
                </li>
              </ul>
            </div>
            
            <div className="modern-card hover-lift">
              <div className="icon-circle mb-4">
                <Icon name="type" size={24} color="#84fab0" />
              </div>
              <h4 className="font-bold mb-3">Text & Annotations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Rich text formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Callouts & labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" size={16} color="#10b981" className="mt-0.5" />
                  <span>Multi-language support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="modern-card mt-8 gradient-cool">
            <h4 className="font-bold text-lg mb-4">Smart Features</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: "git-branch", label: "Version History", desc: "Track changes" },
                { icon: "copy", label: "Duplicate", desc: "Clone elements" },
                { icon: "lock", label: "Lock Layers", desc: "Prevent edits" },
                { icon: "eye-off", label: "Hide/Show", desc: "Layer visibility" }
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <Icon name={feature.icon} size={28} color="#667eea" className="mx-auto mb-2" />
                  <p className="font-semibold text-sm">{feature.label}</p>
                  <p className="text-xs text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-green-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 12. Feature Deep-Dive: Animation
  {
    title: "Feature Deep-Dive: Animation",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Deep Dive</span>
          <h3 className="heading-lg text-gradient mt-4">Professional Animation Engine</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="modern-card mb-4">
                <h4 className="font-bold mb-4">Timeline Control</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="skip-back" size={20} color="#667eea" />
                      <Icon name="play" size={24} color="#667eea" />
                      <Icon name="pause" size={20} color="#667eea" />
                      <Icon name="skip-forward" size={20} color="#667eea" />
                    </div>
                    <span className="text-sm font-mono">00:00 / 05:00</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Playback Speed</span>
                      <span className="font-semibold">0.5x - 2x</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-2 bg-purple-50 rounded text-center">
                      <p className="font-semibold">Keyframes</p>
                      <p className="text-xs text-gray-600">Visual editor</p>
                    </div>
                    <div className="p-2 bg-pink-50 rounded text-center">
                      <p className="font-semibold">Easing</p>
                      <p className="text-xs text-gray-600">Custom curves</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h5 className="font-semibold mb-3">Motion Presets</h5>
                <div className="grid grid-cols-2 gap-2">
                  {["Linear", "Ease In", "Ease Out", "Spring", "Bounce", "Custom"].map((preset, i) => (
                    <button key={i} className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs hover:border-purple-500 transition-colors">
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern">
                <h4 className="font-bold mb-4">Animation Types</h4>
                <div className="space-y-4">
                  {[
                    { type: "Movement", icon: "move", desc: "Path-based motion" },
                    { type: "Rotation", icon: "rotate-cw", desc: "360° control" },
                    { type: "Scale", icon: "maximize-2", desc: "Size transitions" },
                    { type: "Opacity", icon: "eye", desc: "Fade effects" },
                    { type: "Color", icon: "palette", desc: "Gradient shifts" }
                  ].map((anim, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                        <Icon name={anim.icon} size={20} color="#667eea" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{anim.type}</p>
                        <p className="text-xs text-gray-600">{anim.desc}</p>
                      </div>
                      <Icon name="check-circle" size={20} color="#10b981" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="stat-card text-center">
              <AnimatedCounter end={60} suffix="fps" />
              <p className="text-sm text-gray-600 mt-2">Max Frame Rate</p>
            </div>
            <div className="stat-card text-center">
              <AnimatedCounter end={100} suffix="+" />
              <p className="text-sm text-gray-600 mt-2">Simultaneous Objects</p>
            </div>
            <div className="stat-card text-center">
              <AnimatedCounter end={10} suffix="min" />
              <p className="text-sm text-gray-600 mt-2">Max Duration</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 13. Feature Deep-Dive: Playbooks
  {
    title: "Feature Deep-Dive: Playbooks",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Deep Dive</span>
          <h3 className="heading-lg text-gradient mt-4">Strategic Playbook Management</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Organization",
                icon: "folder-tree",
                features: ["Folder structure", "Tags & categories", "Search & filter", "Favorites"]
              },
              {
                title: "Collaboration",
                icon: "users",
                features: ["Team sharing", "Permission levels", "Comments", "Version control"]
              },
              {
                title: "Analytics",
                icon: "bar-chart-2",
                features: ["Usage stats", "Performance metrics", "Player feedback", "Success tracking"]
              }
            ].map((section, index) => (
              <div key={index} className="modern-card hover-lift" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle">
                    <Icon name={section.icon} size={24} color="#667eea" />
                  </div>
                  <h4 className="font-bold text-lg">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="arrow-right" size={16} color="#667eea" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8">
            <h4 className="font-bold text-lg mb-4">Playbook Templates</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { sport: "Football", count: 150, icon: "⚽" },
                { sport: "Basketball", count: 100, icon: "🏀" },
                { sport: "Hockey", count: 75, icon: "🏒" },
                { sport: "Rugby", count: 50, icon: "🏉" }
              ].map((template, i) => (
                <div key={i} className="glass-card p-4 text-center hover-lift">
                  <div className="text-3xl mb-2">{template.icon}</div>
                  <p className="font-semibold">{template.sport}</p>
                  <p className="text-2xl font-bold text-gradient mt-2">{template.count}+</p>
                  <p className="text-xs text-gray-600">Templates</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid-2 mt-6">
            <div className="feature-card-modern gradient-primary text-white">
              <Icon name="cloud" size={32} color="white" className="mb-3" />
              <h5 className="font-bold mb-2">Cloud Sync</h5>
              <p className="text-sm opacity-90">Access playbooks from any device, anywhere</p>
            </div>
            <div className="feature-card-modern gradient-success text-white">
              <Icon name="shield" size={32} color="white" className="mb-3" />
              <h5 className="font-bold mb-2">Secure Storage</h5>
              <p className="text-sm opacity-90">Enterprise-grade encryption for your strategies</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-blue-50 to-green-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 14. Integrations & Enhancements
  {
    title: "Integrations & Enhancements",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-gradient">Ecosystem</span>
          <h3 className="heading-lg text-gradient mt-4">Seamless Integrations</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <h4 className="font-bold mb-4">Data Sources</h4>
              <div className="space-y-3">
                {[
                  { name: "Video Platforms", desc: "YouTube, Vimeo, Hudl", icon: "video" },
                  { name: "Analytics Tools", desc: "Opta, StatsBomb, Wyscout", icon: "activity" },
                  { name: "Team Software", desc: "Slack, Teams, Discord", icon: "message-square" },
                  { name: "Cloud Storage", desc: "Google Drive, Dropbox, OneDrive", icon: "hard-drive" }
                ].map((integration, i) => (
                  <div key={i} className="modern-card hover-glow" style={{animationDelay: `${i * 0.1}s`}}>
                    <div className="flex items-center gap-3">
                      <Icon name={integration.icon} size={20} color="#667eea" />
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{integration.name}</p>
                        <p className="text-xs text-gray-600">{integration.desc}</p>
                      </div>
                      <Icon name="link" size={16} color="#10b981" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">API Capabilities</h4>
              <div className="modern-card">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">REST API</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Available</span>
                    </div>
                    <p className="text-xs text-gray-600">Full CRUD operations for all resources</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Webhooks</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Available</span>
                    </div>
                    <p className="text-xs text-gray-600">Real-time event notifications</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">SDK</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Beta</span>
                    </div>
                    <p className="text-xs text-gray-600">JavaScript, Python, Ruby libraries</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-4 mt-4">
                <h5 className="font-semibold mb-3">Rate Limits</h5>
                <div className="flex justify-around text-center">
                  <div>
                    <p className="text-2xl font-bold text-gradient">10K</p>
                    <p className="text-xs text-gray-600">Req/hour</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gradient">99.9%</p>
                    <p className="text-xs text-gray-600">Uptime SLA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modern-card mt-6 gradient-animated text-white">
            <div className="flex items-center justify-center gap-8">
              <Icon name="zap" size={32} color="white" />
              <div>
                <p className="text-xl font-bold">Coming Soon: AI Assistant</p>
                <p className="text-sm opacity-90">Natural language drill creation and tactical suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-indigo-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== TECHNICAL ARCHITECTURE (Slides 15-19) ========
  // 15. Architecture Overview
  {
    title: "Architecture Overview",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Technical Foundation</span>
          <h3 className="heading-lg text-gradient mt-4">Modern Cloud Architecture</h3>
          
          <div className="modern-card mt-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Frontend Layer */}
              <div className="text-center">
                <div className="glass-card p-4 mb-3">
                  <Icon name="monitor" size={32} color="#667eea" className="mx-auto mb-2" />
                  <h5 className="font-bold mb-2">Frontend</h5>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>React / React Native</p>
                    <p>TypeScript</p>
                    <p>Tailwind CSS</p>
                    <p>Redux Toolkit</p>
                  </div>
                </div>
              </div>
              
              {/* Backend Layer */}
              <div className="text-center">
                <div className="glass-card p-4 mb-3">
                  <Icon name="server" size={32} color="#764ba2" className="mx-auto mb-2" />
                  <h5 className="font-bold mb-2">Backend</h5>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>Node.js / Express</p>
                    <p>GraphQL</p>
                    <p>PostgreSQL</p>
                    <p>Redis Cache</p>
                  </div>
                </div>
              </div>
              
              {/* Infrastructure Layer */}
              <div className="text-center">
                <div className="glass-card p-4 mb-3">
                  <Icon name="cloud" size={32} color="#84fab0" className="mx-auto mb-2" />
                  <h5 className="font-bold mb-2">Infrastructure</h5>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>AWS / Azure</p>
                    <p>Docker / K8s</p>
                    <p>CDN (CloudFlare)</p>
                    <p>CI/CD Pipeline</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div className="relative mt-6">
              <div className="h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="absolute inset-0 flex justify-around">
                <div className="w-2 h-2 bg-purple-500 rounded-full -mt-1"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full -mt-1"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full -mt-1"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { metric: "Response Time", value: "<200ms", icon: "zap" },
              { metric: "Availability", value: "99.9%", icon: "shield" },
              { metric: "Scalability", value: "10K users", icon: "trending-up" },
              { metric: "Data Transfer", value: "Encrypted", icon: "lock" }
            ].map((spec, i) => (
              <div key={i} className="stat-card hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <Icon name={spec.icon} size={24} color="#667eea" className="mb-2" />
                <p className="text-xs text-gray-600">{spec.metric}</p>
                <p className="text-lg font-bold text-gradient">{spec.value}</p>
              </div>
            ))}
          </div>
          
          <div className="feature-card-modern mt-6 gradient-dark text-white">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-lg mb-1">Microservices Architecture</h5>
                <p className="text-sm opacity-90">Scalable, maintainable, and independently deployable services</p>
              </div>
              <Icon name="git-branch" size={40} color="white" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-gray-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 16. Data Model & Sync
  {
    title: "Data Model & Sync",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Data Layer</span>
          <h3 className="heading-lg text-gradient mt-4">Smart Data Management</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="modern-card mb-4">
                <h4 className="font-bold mb-4">Data Schema</h4>
                <div className="space-y-3">
                  {[
                    { entity: "Users", fields: "Profile, Preferences, Teams" },
                    { entity: "Projects", fields: "Drills, Tactics, Sessions" },
                    { entity: "Media", fields: "Images, Videos, Exports" },
                    { entity: "Analytics", fields: "Usage, Performance, Insights" }
                  ].map((schema, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <Icon name="database" size={16} color="#667eea" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{schema.entity}</p>
                        <p className="text-xs text-gray-600">{schema.fields}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h5 className="font-semibold mb-3">Storage Strategy</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Hot Storage</span>
                    <span className="font-mono text-xs">SSD / Redis</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cold Storage</span>
                    <span className="font-mono text-xs">S3 / Blob</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Backup</span>
                    <span className="font-mono text-xs">Daily snapshots</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern">
                <h4 className="font-bold mb-4">Sync Architecture</h4>
                <div className="text-center mb-4">
                  <ProgressCircle percentage={100} size={120} color="#667eea" />
                  <p className="text-sm text-gray-600 mt-2">Real-time Sync</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    { feature: "Conflict Resolution", status: "Automatic" },
                    { feature: "Offline Mode", status: "Full support" },
                    { feature: "Delta Sync", status: "Optimized" },
                    { feature: "Version Control", status: "Git-like" }
                  ].map((sync, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span>{sync.feature}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {sync.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="stat-card text-center">
              <Icon name="hard-drive" size={24} color="#667eea" className="mx-auto mb-2" />
              <AnimatedCounter end={5} suffix="GB" />
              <p className="text-xs text-gray-600">Per User Storage</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="refresh-cw" size={24} color="#764ba2" className="mx-auto mb-2" />
              <AnimatedCounter end={100} suffix="ms" />
              <p className="text-xs text-gray-600">Sync Latency</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="shield-check" size={24} color="#84fab0" className="mx-auto mb-2" />
              <AnimatedCounter end={256} suffix="-bit" />
              <p className="text-xs text-gray-600">Encryption</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-purple-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 17. Security & Privacy
  {
    title: "Security & Privacy",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Security First</span>
          <h3 className="heading-lg text-gradient mt-4">Enterprise-Grade Protection</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Data Protection",
                icon: "shield",
                measures: [
                  "AES-256 encryption",
                  "TLS 1.3 in transit",
                  "Key rotation",
                  "Zero-knowledge architecture"
                ],
                color: "#667eea"
              },
              {
                title: "Access Control",
                icon: "key",
                measures: [
                  "Multi-factor auth",
                  "Role-based permissions",
                  "SSO integration",
                  "Session management"
                ],
                color: "#764ba2"
              },
              {
                title: "Compliance",
                icon: "award",
                measures: [
                  "GDPR compliant",
                  "SOC 2 Type II",
                  "ISO 27001",
                  "HIPAA ready"
                ],
                color: "#84fab0"
              }
            ].map((security, index) => (
              <div key={index} className="modern-card hover-lift" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="icon-circle mb-4" style={{background: `linear-gradient(135deg, ${security.color}22, ${security.color}44)`}}>
                  <Icon name={security.icon} size={24} color={security.color} />
                </div>
                <h4 className="font-bold mb-3">{security.title}</h4>
                <ul className="space-y-2">
                  {security.measures.map((measure, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Icon name="check-circle" size={14} color="#10b981" className="mt-0.5" />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8">
            <h4 className="font-bold text-lg mb-4">Security Monitoring</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { metric: "Threat Detection", value: "Real-time", icon: "alert-triangle" },
                { metric: "Audit Logs", value: "Complete", icon: "file-text" },
                { metric: "Vulnerability Scans", value: "Daily", icon: "search" },
                { metric: "Incident Response", value: "< 15min", icon: "clock" }
              ].map((monitor, i) => (
                <div key={i} className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                  <Icon name={monitor.icon} size={24} color="#667eea" className="mx-auto mb-2" />
                  <p className="text-xs text-gray-600">{monitor.metric}</p>
                  <p className="font-semibold text-sm">{monitor.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="feature-card-modern mt-6 gradient-primary text-white">
            <Icon name="lock" size={32} color="white" className="mb-3" />
            <h5 className="font-bold text-lg mb-2">Privacy by Design</h5>
            <p className="text-sm opacity-90">User data ownership, right to deletion, transparent policies</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-red-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 18. Accessibility & Localization
  {
    title: "Accessibility & Localization",
    content: (
      <div className="animate-fadeInScale">
        <div className="grid-2">
          <div className="stagger-animation">
            <span className="badge-outline">Inclusive Design</span>
            <h3 className="heading-lg text-gradient mt-4">For Everyone, Everywhere</h3>
            
            <div className="modern-card mt-6">
              <h4 className="font-bold mb-4">Accessibility Features</h4>
              <div className="space-y-3">
                {[
                  { feature: "Screen Reader Support", level: "WCAG 2.1 AA" },
                  { feature: "Keyboard Navigation", level: "Full support" },
                  { feature: "High Contrast Mode", level: "Auto-detect" },
                  { feature: "Font Scaling", level: "Up to 200%" },
                  { feature: "Color Blind Modes", level: "3 presets" }
                ].map((access, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon name="check-square" size={18} color="#667eea" />
                      <span className="text-sm">{access.feature}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {access.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="feature-card-modern mb-4">
              <h4 className="font-bold mb-4">Language Support</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { lang: "English", flag: "🇬🇧", status: "Complete" },
                  { lang: "Croatian", flag: "🇭🇷", status: "Complete" },
                  { lang: "Spanish", flag: "🇪🇸", status: "Q2 2024" },
                  { lang: "German", flag: "🇩🇪", status: "Q3 2024" },
                  { lang: "French", flag: "🇫🇷", status: "Q3 2024" },
                  { lang: "Italian", flag: "🇮🇹", status: "Q4 2024" }
                ].map((language, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-semibold">{language.lang}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      language.status === 'Complete' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {language.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-4">
              <h5 className="font-semibold mb-3">RTL Support</h5>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="arrow-left-right" size={20} color="#667eea" />
                  <span className="text-sm">Arabic, Hebrew ready</span>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">2025</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modern-card mt-6 gradient-cool">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <Icon name="globe-2" size={32} color="#667eea" className="mx-auto mb-2" />
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-gray-600">Languages planned</p>
            </div>
            <div className="text-center">
              <Icon name="users" size={32} color="#764ba2" className="mx-auto mb-2" />
              <p className="text-2xl font-bold">100M+</p>
              <p className="text-sm text-gray-600">Potential users</p>
            </div>
            <div className="text-center">
              <Icon name="award" size={32} color="#84fab0" className="mx-auto mb-2" />
              <p className="text-2xl font-bold">AAA</p>
              <p className="text-sm text-gray-600">Accessibility rating</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 19. Deployment & DevOps
  {
    title: "Deployment & DevOps",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Infrastructure</span>
          <h3 className="heading-lg text-gradient mt-4">Continuous Delivery Pipeline</h3>
          
          <div className="modern-card mt-8">
            <div className="relative">
              {/* Pipeline Visualization */}
              <div className="flex justify-between items-center">
                {[
                  { stage: "Code", icon: "code", color: "#667eea" },
                  { stage: "Build", icon: "package", color: "#764ba2" },
                  { stage: "Test", icon: "check-circle", color: "#84fab0" },
                  { stage: "Deploy", icon: "rocket", color: "#8fd3f4" },
                  { stage: "Monitor", icon: "activity", color: "#fa709a" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{backgroundColor: `${step.color}22`, border: `2px solid ${step.color}`}}
                    >
                      <Icon name={step.icon} size={24} color={step.color} />
                    </div>
                    <p className="text-sm font-semibold">{step.stage}</p>
                    {i < 4 && (
                      <div className="absolute top-8 -right-12 w-24 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-4 hover-lift">
              <Icon name="git-branch" size={24} color="#667eea" className="mb-3" />
              <h5 className="font-bold mb-2">Version Control</h5>
              <p className="text-xs text-gray-600">Git flow with protected branches</p>
              <div className="mt-3 space-y-1 text-xs">
                <p>• Feature branches</p>
                <p>• Code reviews</p>
                <p>• Automated merging</p>
              </div>
            </div>
            
            <div className="glass-card p-4 hover-lift">
              <Icon name="cpu" size={24} color="#764ba2" className="mb-3" />
              <h5 className="font-bold mb-2">Infrastructure as Code</h5>
              <p className="text-xs text-gray-600">Terraform / CloudFormation</p>
              <div className="mt-3 space-y-1 text-xs">
                <p>• Reproducible envs</p>
                <p>• Version controlled</p>
                <p>• Automated scaling</p>
              </div>
            </div>
            
            <div className="glass-card p-4 hover-lift">
              <Icon name="bar-chart" size={24} color="#84fab0" className="mb-3" />
              <h5 className="font-bold mb-2">Monitoring</h5>
              <p className="text-xs text-gray-600">Datadog / New Relic</p>
              <div className="mt-3 space-y-1 text-xs">
                <p>• Real-time metrics</p>
                <p>• Error tracking</p>
                <p>• Performance alerts</p>
              </div>
            </div>
          </div>
          
          <div className="grid-2 mt-6">
            <div className="stat-card">
              <h5 className="font-semibold mb-3">Deployment Metrics</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Deploy Frequency</span>
                  <span className="font-mono">3x/day</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Time</span>
                  <span className="font-mono">< 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>MTTR</span>
                  <span className="font-mono">< 30 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Change Failure</span>
                  <span className="font-mono">< 5%</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card-modern gradient-dark text-white">
              <Icon name="shield-check" size={32} color="white" className="mb-3" />
              <h5 className="font-bold mb-2">Zero Downtime Deployments</h5>
              <p className="text-sm opacity-90">Blue-green deployments with automatic rollback</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-indigo-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== PROJECT EXECUTION (Slides 20-27) ========
  // 20. About Us
  {
    title: "About Us",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Our Team</span>
          <h3 className="heading-lg text-gradient mt-4">Experienced Development Partner</h3>
          
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { stat: "15+", label: "Years Experience", icon: "calendar" },
              { stat: "200+", label: "Projects Delivered", icon: "package" },
              { stat: "50+", label: "Team Members", icon: "users" },
              { stat: "98%", label: "Client Satisfaction", icon: "heart" }
            ].map((metric, i) => (
              <div key={i} className="stat-card text-center hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <Icon name={metric.icon} size={24} color="#667eea" className="mx-auto mb-2" />
                <p className="text-3xl font-bold text-gradient">{metric.stat}</p>
                <p className="text-xs text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <div className="grid-2 mt-8">
            <div className="modern-card">
              <h4 className="font-bold mb-4">Core Competencies</h4>
              <div className="space-y-3">
                {[
                  { skill: "Sports Tech", level: 95 },
                  { skill: "Mobile Development", level: 90 },
                  { skill: "Cloud Architecture", level: 85 },
                  { skill: "UI/UX Design", level: 88 },
                  { skill: "Data Analytics", level: 82 }
                ].map((comp, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{comp.skill}</span>
                      <span className="font-semibold">{comp.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{width: `${comp.level}%`, animationDelay: `${i * 0.2}s`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern mb-4">
                <h5 className="font-bold mb-3">Previous Clients</h5>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Premier League Club",
                    "NBA Team",
                    "UEFA Academy",
                    "Olympic Committee"
                  ].map((client, i) => (
                    <div key={i} className="glass-card p-3 text-center text-sm">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h5 className="font-bold mb-3">Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  {["ISO 9001", "AWS Partner", "Google Cloud", "Microsoft Gold"].map((cert, i) => (
                    <span key={i} className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded text-xs font-semibold">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-blue-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 21. Development Methodology
  {
    title: "Development Methodology",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Process</span>
          <h3 className="heading-lg text-gradient mt-4">Agile Development Approach</h3>
          
          <div className="modern-card mt-8">
            <div className="grid grid-cols-5 gap-4">
              {[
                { phase: "Sprint Planning", icon: "calendar", duration: "2 days" },
                { phase: "Development", icon: "code", duration: "8 days" },
                { phase: "Testing", icon: "check-square", duration: "2 days" },
                { phase: "Review", icon: "users", duration: "1 day" },
                { phase: "Retrospective", icon: "refresh-cw", duration: "1 day" }
              ].map((sprint, i) => (
                <div key={i} className="text-center" style={{animationDelay: `${i * 0.1}s`}}>
                  <div className="icon-circle mx-auto mb-2">
                    <Icon name={sprint.icon} size={20} color="#667eea" />
                  </div>
                  <p className="text-sm font-semibold">{sprint.phase}</p>
                  <p className="text-xs text-gray-600 mt-1">{sprint.duration}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <p className="text-center text-sm font-semibold">2-Week Sprint Cycles</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-4 hover-lift">
              <Icon name="message-circle" size={24} color="#667eea" className="mb-3" />
              <h5 className="font-bold mb-2">Communication</h5>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Daily standups</li>
                <li>• Weekly demos</li>
                <li>• Slack integration</li>
                <li>• Real-time updates</li>
              </ul>
            </div>
            
            <div className="glass-card p-4 hover-lift">
              <Icon name="git-branch" size={24} color="#764ba2" className="mb-3" />
              <h5 className="font-bold mb-2">Version Control</h5>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Feature branches</li>
                <li>• Code reviews</li>
                <li>• CI/CD pipeline</li>
                <li>• Automated testing</li>
              </ul>
            </div>
            
            <div className="glass-card p-4 hover-lift">
              <Icon name="file-text" size={24} color="#84fab0" className="mb-3" />
              <h5 className="font-bold mb-2">Documentation</h5>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• User stories</li>
                <li>• API docs</li>
                <li>• Code comments</li>
                <li>• Wiki updates</li>
              </ul>
            </div>
          </div>
          
          <div className="feature-card-modern mt-6 gradient-primary text-white">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-lg">Continuous Improvement</h5>
                <p className="text-sm opacity-90">Regular retrospectives and process optimization</p>
              </div>
              <Icon name="trending-up" size={40} color="white" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-green-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 22. Team Structure
  {
    title: "Team Structure",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Resources</span>
          <h3 className="heading-lg text-gradient mt-4">Dedicated Project Team</h3>
          
          <div className="modern-card mt-8">
            <div className="grid grid-cols-4 gap-4">
              {[
                { role: "Project Manager", count: 1, icon: "briefcase", color: "#667eea" },
                { role: "UI/UX Designers", count: 2, icon: "palette", color: "#764ba2" },
                { role: "Frontend Devs", count: 3, icon: "monitor", color: "#84fab0" },
                { role: "Backend Devs", count: 3, icon: "server", color: "#8fd3f4" },
                { role: "Mobile Devs", count: 2, icon: "smartphone", color: "#fa709a" },
                { role: "QA Engineers", count: 2, icon: "check-circle", color: "#fee140" },
                { role: "DevOps", count: 1, icon: "cloud", color: "#30cfd0" },
                { role: "Tech Lead", count: 1, icon: "cpu", color: "#c471ed" }
              ].map((member, i) => (
                <div key={i} className="text-center hover-lift" style={{animationDelay: `${i * 0.05}s`}}>
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{backgroundColor: `${member.color}22`, border: `2px solid ${member.color}`}}
                  >
                    <Icon name={member.icon} size={24} color={member.color} />
                  </div>
                  <p className="text-sm font-semibold">{member.role}</p>
                  <p className="text-2xl font-bold" style={{color: member.color}}>{member.count}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gradient">15 Total Team Members</p>
              <p className="text-sm text-gray-600 mt-1">100% dedicated to your project</p>
            </div>
          </div>
          
          <div className="grid-2 mt-6">
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Senior Leadership</h5>
              <div className="space-y-2">
                {[
                  { name: "Technical Architect", exp: "15+ years" },
                  { name: "Product Owner", exp: "12+ years" },
                  { name: "Quality Lead", exp: "10+ years" }
                ].map((lead, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{lead.name}</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">{lead.exp}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Team Availability</h5>
              <div className="text-center">
                <ProgressCircle percentage={100} size={100} color="#667eea" />
                <p className="text-sm text-gray-600 mt-3">Full-time dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-purple-50 to-pink-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 23. Timeline & Milestones
  {
    title: "Timeline & Milestones",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Schedule</span>
          <h3 className="heading-lg text-gradient mt-4">7-Month Development Journey</h3>
          
          <div className="modern-card mt-8">
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {[
                { month: "Month 1", title: "Foundation", tasks: ["Requirements finalization", "Architecture design", "Environment setup"], progress: 100 },
                { month: "Month 2-3", title: "Core Development", tasks: ["Drawing engine", "Basic animations", "Data models"], progress: 100 },
                { month: "Month 4-5", title: "Feature Build", tasks: ["Advanced features", "Mobile apps", "Cloud sync"], progress: 75 },
                { month: "Month 6", title: "Integration", tasks: ["Third-party APIs", "Testing suite", "Performance optimization"], progress: 50 },
                { month: "Month 7", title: "Launch Prep", tasks: ["Final testing", "Documentation", "Deployment"], progress: 25 }
              ].map((milestone, i) => (
                <div key={i} className="relative mb-8" style={{animationDelay: `${i * 0.15}s`}}>
                  <div className="absolute -left-6 w-4 h-4 bg-white border-2 border-purple-500 rounded-full"></div>
                  
                  <div className="glass-card p-4 hover-lift">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-xs text-gray-600">{milestone.month}</span>
                        <h5 className="font-bold text-lg">{milestone.title}</h5>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gradient">{milestone.progress}%</p>
                        <p className="text-xs text-gray-600">Complete</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      {milestone.tasks.map((task, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <Icon name="check-circle" size={14} color="#10b981" />
                          {task}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{width: `${milestone.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="stat-card text-center">
              <Icon name="calendar" size={24} color="#667eea" className="mx-auto mb-2" />
              <AnimatedCounter end={7} suffix=" months" />
              <p className="text-xs text-gray-600">Total Duration</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="flag" size={24} color="#764ba2" className="mx-auto mb-2" />
              <AnimatedCounter end={5} suffix=" milestones" />
              <p className="text-xs text-gray-600">Major Checkpoints</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="rocket" size={24} color="#84fab0" className="mx-auto mb-2" />
              <p className="text-lg font-bold">July 2024</p>
              <p className="text-xs text-gray-600">Launch Date</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 24. Roadmap Detail (Quarters)
  {
    title: "Roadmap Detail (Quarters)",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Future Vision</span>
          <h3 className="heading-lg text-gradient mt-4">Post-Launch Evolution</h3>
          
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              {
                quarter: "Q3 2024",
                title: "Launch & Stabilize",
                features: ["Core platform launch", "User onboarding", "Bug fixes", "Performance tuning"],
                color: "#667eea"
              },
              {
                quarter: "Q4 2024",
                title: "Enhance & Expand",
                features: ["Advanced animations", "Team features", "Analytics dashboard", "Mobile optimization"],
                color: "#764ba2"
              },
              {
                quarter: "Q1 2025",
                title: "Intelligence & Scale",
                features: ["AI suggestions", "Video integration", "API v2", "Enterprise features"],
                color: "#84fab0"
              },
              {
                quarter: "Q2 2025",
                title: "Market Leadership",
                features: ["VR/AR preview", "Live collaboration", "Marketplace", "Global expansion"],
                color: "#8fd3f4"
              }
            ].map((phase, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="text-center mb-4">
                  <div 
                    className="w-3 h-3 rounded-full mx-auto mb-2"
                    style={{backgroundColor: phase.color}}
                  ></div>
                  <p className="text-xs font-semibold" style={{color: phase.color}}>{phase.quarter}</p>
                  <h5 className="font-bold mt-1">{phase.title}</h5>
                </div>
                
                <ul className="space-y-2">
                  {phase.features.map((feature, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-start gap-1">
                      <Icon name="arrow-right" size={12} color={phase.color} className="mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8 gradient-animated text-white">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <Icon name="users" size={32} color="white" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm opacity-90">Users by Q4 2024</p>
              </div>
              <div className="text-center">
                <Icon name="globe" size={32} color="white" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">25</p>
                <p className="text-sm opacity-90">Countries by Q2 2025</p>
              </div>
              <div className="text-center">
                <Icon name="star" size={32} color="white" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">4.8+</p>
                <p className="text-sm opacity-90">Target App Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-pink-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  }
];

// Main Slide Component
function Slide(props) {
  const { title, content, overlay, decoLeft, decoRight } = props;
  return (
    <div className="slide">
      {overlay && <div className="bg-overlay" style={{ backgroundImage: `url(${overlay})` }}></div>}
      {decoLeft && <img src={decoLeft} alt="Decoration Left" className="football-deco-left animate-float" />}
      {decoRight && <img src={decoRight} alt="Decoration Right" className="football-deco-right animate-pulse" />}
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full gradient-animated transition-all duration-300"
          style={{ width: `${((props.currentSlide + 1) / props.totalSlides) * 100}%` }}
        ></div>
      </div>
      
      {/* Slide Number */}
      <div className="fixed top-4 right-4 z-40">
        <div className="glass-card px-3 py-1 rounded-full">
          <span className="text-sm font-semibold">
            {props.currentSlide + 1} / {props.totalSlides}
          </span>
        </div>
      </div>
      
      <div className="content-container">
        <h2 className="section-title text-gradient">{title}</h2>
        {content}
      </div>
    </div>
  );
}

// Enhanced App Component
function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [readerMode, setReaderMode] = React.useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('reader')) {
        return params.get('reader') === '1';
      }
      const saved = localStorage.getItem('readerMode');
      return saved ? saved === '1' : false;
    } catch (_) {
      return false;
    }
  });

  React.useEffect(() => {
    try { 
      localStorage.setItem('readerMode', readerMode ? '1' : '0'); 
    } catch(_) {}
    document.body.classList.toggle('reader-mode', readerMode);
  }, [readerMode]);

  const allSlides = React.useMemo(() => slides, []);

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

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === allSlides.length - 1;

  const toggleReaderMode = () => setReaderMode(v => !v);

  // Enhanced Keyboard Navigation
  React.useEffect(() => {
    if (readerMode) return;
    const handler = (e) => {
      const tag = (e.target && (e.target.tagName || '')).toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.isComposing) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case ' ':
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
      {/* Enhanced View Toggle */}
      <div className="view-toggle">
        <button
          className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover-glow"
          onClick={toggleReaderMode}
          aria-pressed={readerMode ? 'true' : 'false'}
          title={readerMode ? 'Switch to presentation view' : 'Switch to reader view'}
        >
          <Icon name={readerMode ? "presentation" : "book-open"} size={16} />
          {readerMode ? 'Reader View' : 'Presentation View'}
        </button>
      </div>
      
      {readerMode ? (
        <div className="all-slides">
          {allSlides.map((s, idx) => (
            <div key={idx} className="slide-wrapper">
              <Slide {...s} currentSlide={idx} totalSlides={allSlides.length} />
            </div>
          ))}
        </div>
      ) : (
        <Slide {...allSlides[currentSlide]} currentSlide={currentSlide} totalSlides={allSlides.length} />
      )}
      
      {!readerMode && (
        <div className="nav-buttons flex items-center gap-4" aria-label="Slide navigation">
          <button 
            onClick={prevSlide} 
            disabled={isPrevDisabled} 
            className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover-lift disabled:opacity-50"
            title="Previous slide (ArrowLeft/PageUp)"
          >
            <Icon name="chevron-left" size={20} />
            Previous
          </button>
          
          {/* Enhanced Dot Navigation */}
          <div className="flex gap-2">
            {[...Array(Math.min(7, allSlides.length))].map((_, i) => {
              const slideIndex = i < 3 ? i : 
                i === 3 && currentSlide > 3 && currentSlide < allSlides.length - 3 ? currentSlide :
                i > 3 ? allSlides.length - (7 - i) : i;
              
              return (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(slideIndex)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    slideIndex === currentSlide 
                      ? 'w-8 gradient-animated' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                />
              );
            })}
          </div>
          
          <button 
            onClick={nextSlide} 
            disabled={isNextDisabled} 
            className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover-lift disabled:opacity-50"
            title="Next slide (Space/ArrowRight/PageDown)"
          >
            Next
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);