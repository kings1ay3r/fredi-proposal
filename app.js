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
  
  // 4. Objectives & Success Criteria - Redesigned
  {
    title: "Objectives & Success Criteria",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Goals & Metrics</span>
          <h3 className="heading-lg text-gradient mt-4">Defining Success Together</h3>
          
          {/* Main Objectives Grid */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "target",
                title: "Primary Objectives",
                items: [
                  "Feature parity with TacticalPad",
                  "Mobile-first responsive design",
                  "Real-time collaboration",
                  "Cloud sync across devices"
                ],
                color: "#667eea"
              },
              {
                icon: "trending-up",
                title: "Success Metrics",
                items: [
                  "10,000+ active users in Year 1",
                  "4.5+ App Store rating",
                  "90% user retention rate",
                  "< 2s load time on mobile"
                ],
                color: "#764ba2"
              },
              {
                icon: "award",
                title: "Quality Standards",
                items: [
                  "WCAG 2.1 AA compliance",
                  "99.9% uptime SLA",
                  "Zero critical bugs at launch",
                  "Multi-language support"
                ],
                color: "#84fab0"
              }
            ].map((objective, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle" style={{background: `linear-gradient(135deg, ${objective.color}22, ${objective.color}44)`}}>
                    <Icon name={objective.icon} size={24} color={objective.color} />
                  </div>
                  <h4 className="font-bold text-lg">{objective.title}</h4>
                </div>
                <ul className="space-y-2">
                  {objective.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icon name="check" size={16} color={objective.color} className="mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Performance Metrics Dashboard */}
          <div className="modern-card mt-8">
            <h4 className="font-bold text-lg mb-6 text-center">Performance Benchmarks</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Page Load", target: "< 2s", current: 85, icon: "zap" },
                { label: "Export Time", target: "< 10s", current: 92, icon: "download" },
                { label: "API Response", target: "< 200ms", current: 95, icon: "activity" },
                { label: "Mobile Score", target: "95+", current: 88, icon: "smartphone" }
              ].map((metric, i) => (
                <div key={i} className="text-center" style={{animationDelay: `${i * 0.1}s`}}>
                  <Icon name={metric.icon} size={24} color="#667eea" className="mx-auto mb-2" />
                  <div className="mb-2">
                    <ProgressCircle percentage={metric.current} size={80} color="#667eea" />
                  </div>
                  <p className="text-sm font-semibold">{metric.label}</p>
                  <p className="text-xs text-gray-600">{metric.target}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Success Criteria Cards */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="feature-card-modern gradient-primary text-white">
              <div className="flex items-center justify-between">
                <div>
                  <Icon name="users" size={32} color="white" className="mb-2" />
                  <h5 className="font-bold text-lg">User Satisfaction</h5>
                  <p className="text-sm opacity-90 mt-1">CSAT Score &gt; 4.5/5.0</p>
                </div>
                <div className="text-4xl font-bold">90%</div>
              </div>
            </div>
            
            <div className="feature-card-modern gradient-success text-white">
              <div className="flex items-center justify-between">
                <div>
                  <Icon name="globe" size={32} color="white" className="mb-2" />
                  <h5 className="font-bold text-lg">Global Reach</h5>
                  <p className="text-sm opacity-90 mt-1">15+ Sports, 10+ Languages</p>
                </div>
                <div className="text-4xl font-bold">25+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
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

  // 6. Project Understanding - Enhanced Design
  {
    title: "Project Understanding",
    content: (
      <div className="animate-fadeInUp">
        {/* Core Understanding Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <span className="badge-gradient">Strategic Vision</span>
            <h3 className="heading-lg mt-4">
              <span className="text-gradient">Comprehensive Project Understanding</span>
            </h3>
          </div>
          
          {/* Three Pillars of Understanding */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "layers",
                title: "Core Functionality",
                subtitle: "TacticalPad Replication",
                items: [
                  "Interactive drill designer",
                  "Formation builder",
                  "Tactical animations",
                  "Session management"
                ],
                color: "#667eea",
                percentage: 100
              },
              {
                icon: "globe",
                title: "Platform Strategy",
                subtitle: "Universal Access",
                items: [
                  "Windows & macOS desktop",
                  "iOS & Android mobile",
                  "Real-time cloud sync",
                  "Offline-first architecture"
                ],
                color: "#764ba2",
                percentage: 95
              },
              {
                icon: "sparkles",
                title: "Value Additions",
                subtitle: "Beyond Replication",
                items: [
                  "Advanced analytics",
                  "Theme customization",
                  "AI-powered suggestions",
                  "Performance insights"
                ],
                color: "#84fab0",
                percentage: 85
              }
            ].map((pillar, i) => (
              <div key={i} className="feature-card-modern hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="flex justify-between items-start mb-4">
                  <div className="icon-circle" style={{background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)`}}>
                    <Icon name={pillar.icon} size={28} color={pillar.color} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{color: pillar.color}}>{pillar.percentage}%</div>
                    <div className="text-xs text-gray-500">Confidence</div>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-1">{pillar.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{pillar.subtitle}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: pillar.color}}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Success Factors & Challenges */}
        <div className="grid grid-cols-2 gap-6">
          {/* Success Factors */}
          <div className="glass-card p-6 rounded-xl" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))'}}>
            <div className="flex items-center gap-3 mb-4">
              <Icon name="check-circle" size={24} color="#667eea" />
              <h4 className="font-bold text-lg">Success Factors</h4>
            </div>
            <div className="space-y-3">
              {[
                { label: "User Experience", value: "Intuitive & familiar interface", icon: "users" },
                { label: "Performance", value: "Sub-second response times", icon: "zap" },
                { label: "Reliability", value: "99.9% uptime guarantee", icon: "shield" },
                { label: "Scalability", value: "10,000+ concurrent users", icon: "trending-up" }
              ].map((factor, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name={factor.icon} size={16} color="#667eea" />
                    <span className="font-medium text-sm">{factor.label}</span>
                  </div>
                  <span className="text-sm text-gray-600">{factor.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Challenges */}
          <div className="glass-card p-6 rounded-xl" style={{background: 'linear-gradient(135deg, rgba(250, 112, 154, 0.05), rgba(254, 225, 64, 0.05))'}}>
            <div className="flex items-center gap-3 mb-4">
              <Icon name="alert-triangle" size={24} color="#fa709a" />
              <h4 className="font-bold text-lg">Key Challenges</h4>
            </div>
            <div className="space-y-3">
              {[
                { challenge: "Cross-platform consistency", solution: "Unified design system", priority: "Critical" },
                { challenge: "Real-time synchronization", solution: "WebSocket architecture", priority: "High" },
                { challenge: "Offline functionality", solution: "Progressive Web App", priority: "High" },
                { challenge: "Data migration", solution: "Automated tools", priority: "Medium" }
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white/50 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm">{item.challenge}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.priority === 'Critical' ? 'bg-red-100 text-red-600' :
                      item.priority === 'High' ? 'bg-orange-100 text-orange-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>{item.priority}</span>
                  </div>
                  <span className="text-xs text-gray-500">→ {item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Progress Indicator */}
        <div className="mt-8 p-4 glass-card rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon name="git-branch" size={20} color="#667eea" />
              <span className="text-sm font-medium">Project Complexity Score</span>
            </div>
            <div className="flex items-center gap-6">
              {['Research', 'Planning', 'Execution', 'Delivery'].map((phase, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`text-xs ${i === 0 ? 'font-semibold' : 'text-gray-500'}`}>{phase}</span>
                </div>
              ))}
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

  // 8. Scope of Work - Redesigned
  {
    title: "Scope of Work",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Project Deliverables</span>
          <h3 className="heading-lg text-gradient mt-4">Comprehensive Development Package</h3>
          
          {/* Main Scope Grid */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              {
                phase: "Core Platform",
                icon: "layers",
                percentage: 30,
                items: [
                  "Cross-platform application",
                  "Drawing & annotation tools",
                  "Animation engine",
                  "Export system (MP4, GIF, PNG)"
                ],
                color: "#667eea"
              },
              {
                phase: "Content Library",
                icon: "database",
                percentage: 25,
                items: [
                  "15+ sport templates",
                  "500+ drill presets",
                  "Formation library",
                  "Tactical patterns"
                ],
                color: "#764ba2"
              },
              {
                phase: "Collaboration",
                icon: "users",
                percentage: 25,
                items: [
                  "Real-time team sharing",
                  "Cloud synchronization",
                  "Comments & feedback",
                  "Version history"
                ],
                color: "#84fab0"
              },
              {
                phase: "Analytics & Admin",
                icon: "bar-chart-2",
                percentage: 20,
                items: [
                  "Usage analytics",
                  "Performance metrics",
                  "Admin dashboard",
                  "User management"
                ],
                color: "#8fd3f4"
              }
            ].map((scope, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="text-center mb-4">
                  <div className="icon-circle mx-auto mb-3" style={{background: `linear-gradient(135deg, ${scope.color}22, ${scope.color}44)`}}>
                    <Icon name={scope.icon} size={24} color={scope.color} />
                  </div>
                  <h4 className="font-bold">{scope.phase}</h4>
                  <p className="text-2xl font-bold mt-2" style={{color: scope.color}}>{scope.percentage}%</p>
                  <p className="text-xs text-gray-600">of project scope</p>
                </div>
                <ul className="space-y-2">
                  {scope.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                      <Icon name="check" size={12} color={scope.color} className="mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Project Phases Timeline */}
          <div className="modern-card mt-8">
            <h4 className="font-bold text-lg mb-6 text-center">Development Roadmap</h4>
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 -translate-y-1/2"></div>
              <div className="grid grid-cols-7 gap-4 relative">
                {[
                  { month: "Month 1", phase: "Discovery", icon: "search", status: "complete" },
                  { month: "Month 2", phase: "Design", icon: "palette", status: "complete" },
                  { month: "Month 3-4", phase: "Core Dev", icon: "code", status: "in-progress" },
                  { month: "Month 5", phase: "Features", icon: "package", status: "upcoming" },
                  { month: "Month 6", phase: "Testing", icon: "check-circle", status: "upcoming" },
                  { month: "Month 7", phase: "Polish", icon: "sparkles", status: "upcoming" },
                  { month: "Launch", phase: "Deploy", icon: "rocket", status: "upcoming" }
                ].map((phase, i) => (
                  <div key={i} className="text-center" style={{animationDelay: `${i * 0.1}s`}}>
                    <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      phase.status === 'complete' ? 'bg-green-100 border-2 border-green-500' :
                      phase.status === 'in-progress' ? 'bg-blue-100 border-2 border-blue-500 animate-pulse' :
                      'bg-gray-100 border-2 border-gray-300'
                    }`}>
                      <Icon name={phase.icon} size={20} color={
                        phase.status === 'complete' ? '#10b981' :
                        phase.status === 'in-progress' ? '#3b82f6' : '#9ca3af'
                      } />
                    </div>
                    <p className="text-xs font-semibold">{phase.phase}</p>
                    <p className="text-xs text-gray-600">{phase.month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Key Deliverables */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="feature-card-modern gradient-primary text-white">
              <Icon name="smartphone" size={32} color="white" className="mb-3" />
              <h5 className="font-bold text-lg">Native Apps</h5>
              <p className="text-sm opacity-90">iOS, Android, Windows, Mac</p>
            </div>
            
            <div className="feature-card-modern gradient-success text-white">
              <Icon name="globe" size={32} color="white" className="mb-3" />
              <h5 className="font-bold text-lg">Web Platform</h5>
              <p className="text-sm opacity-90">Progressive Web App with offline support</p>
            </div>
            
            <div className="feature-card-modern gradient-warm text-white">
              <Icon name="book-open" size={32} color="white" className="mb-3" />
              <h5 className="font-bold text-lg">Documentation</h5>
              <p className="text-sm opacity-90">User guides, API docs, video tutorials</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 via-purple-50 to-green-50",
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
                { metric: "Incident Response", value: "&lt; 15min", icon: "clock" }
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
                  <span className="font-mono">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>MTTR</span>
                  <span className="font-mono">&lt; 30 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Change Failure</span>
                  <span className="font-mono">&lt; 5%</span>
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
  },
  // 25. Deliverables
  {
    title: "Deliverables",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Outputs</span>
          <h3 className="heading-lg text-gradient mt-4">What You'll Receive</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                category: "Applications",
                icon: "package",
                items: [
                  "Web application (React)",
                  "iOS app (React Native)",
                  "Android app (React Native)",
                  "Admin dashboard"
                ],
                color: "#667eea"
              },
              {
                category: "Documentation",
                icon: "file-text",
                items: [
                  "User manual",
                  "API documentation",
                  "Admin guide",
                  "Video tutorials"
                ],
                color: "#764ba2"
              },
              {
                category: "Technical Assets",
                icon: "code",
                items: [
                  "Source code",
                  "Database schemas",
                  "CI/CD pipelines",
                  "Test suites"
                ],
                color: "#84fab0"
              }
            ].map((deliverable, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle" style={{background: `linear-gradient(135deg, ${deliverable.color}22, ${deliverable.color}44)`}}>
                    <Icon name={deliverable.icon} size={24} color={deliverable.color} />
                  </div>
                  <h5 className="font-bold">{deliverable.category}</h5>
                </div>
                
                <ul className="space-y-2">
                  {deliverable.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check-circle" size={14} color="#10b981" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid-2 mt-6">
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Training Package</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="video" size={16} color="#667eea" />
                  <span>8 hours of training videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="users" size={16} color="#667eea" />
                  <span>Live training sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="book-open" size={16} color="#667eea" />
                  <span>Quick start guides</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Support Materials</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="headphones" size={16} color="#764ba2" />
                  <span>24/7 support documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="message-circle" size={16} color="#764ba2" />
                  <span>Community forum setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="mail" size={16} color="#764ba2" />
                  <span>Email templates</span>
                </div>
              </div>
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

  // 26. Quality & Testing Strategy
  {
    title: "Quality & Testing Strategy",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Quality Assurance</span>
          <h3 className="heading-lg text-gradient mt-4">Comprehensive Testing Approach</h3>
          
          <div className="modern-card mt-8">
            <div className="grid grid-cols-4 gap-4">
              {[
                { type: "Unit Testing", coverage: 90, icon: "cpu", color: "#667eea" },
                { type: "Integration", coverage: 85, icon: "git-merge", color: "#764ba2" },
                { type: "E2E Testing", coverage: 80, icon: "monitor", color: "#84fab0" },
                { type: "Performance", coverage: 95, icon: "zap", color: "#8fd3f4" }
              ].map((test, i) => (
                <div key={i} className="text-center" style={{animationDelay: `${i * 0.1}s`}}>
                  <div className="mb-3">
                    <ProgressCircle percentage={test.coverage} size={100} color={test.color} />
                  </div>
                  <Icon name={test.icon} size={20} color={test.color} className="mx-auto mb-1" />
                  <p className="text-sm font-semibold">{test.type}</p>
                  <p className="text-xs text-gray-600">Coverage Target</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="glass-card p-4 mb-4">
                <h5 className="font-bold mb-3">Testing Phases</h5>
                <div className="space-y-2">
                  {[
                    { phase: "Development Testing", desc: "Continuous during sprints" },
                    { phase: "System Testing", desc: "End of each milestone" },
                    { phase: "UAT", desc: "Pre-launch validation" },
                    { phase: "Performance Testing", desc: "Load & stress tests" }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="check-square" size={16} color="#667eea" className="mt-0.5" />
                      <div>
                        <p className="font-semibold">{phase.phase}</p>
                        <p className="text-xs text-gray-600">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="stat-card">
                <h5 className="font-bold mb-2">Bug Tracking</h5>
                <p className="text-xs text-gray-600">JIRA integration with automated reporting</p>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern">
                <h5 className="font-bold mb-4">Quality Metrics</h5>
                <div className="space-y-3">
                  {[
                    { metric: "Code Quality", target: "A rating", current: "A" },
                    { metric: "Bug Density", target: "&lt; 0.5/KLOC", current: "0.3" },
                    { metric: "Test Pass Rate", target: "&gt; 98%", current: "99%" },
                    { metric: "Response Time", target: "&lt; 200ms", current: "150ms" }
                  ].map((metric, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{metric.metric}</span>
                      <div className="text-right">
                        <span className="font-semibold text-green-600">{metric.current}</span>
                        <span className="text-xs text-gray-500 ml-1">/ {metric.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="modern-card mt-6 gradient-success text-white">
            <Icon name="shield-check" size={32} color="white" className="mb-2" />
            <h5 className="font-bold text-lg">Zero Critical Bugs at Launch</h5>
            <p className="text-sm opacity-90">Our commitment to quality delivery</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 27. Risks & Mitigation
  {
    title: "Risks & Mitigation",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Risk Management</span>
          <h3 className="heading-lg text-gradient mt-4">Proactive Risk Management</h3>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              {
                risk: "Technical Complexity",
                impact: "Medium",
                probability: "Low",
                mitigation: "Experienced team, proven tech stack, architectural reviews",
                icon: "cpu",
                color: "#667eea"
              },
              {
                risk: "Scope Creep",
                impact: "High",
                probability: "Medium",
                mitigation: "Clear requirements, change control process, regular reviews",
                icon: "trending-up",
                color: "#764ba2"
              },
              {
                risk: "Timeline Delays",
                impact: "High",
                probability: "Low",
                mitigation: "Buffer time included, parallel workstreams, dedicated resources",
                icon: "clock",
                color: "#84fab0"
              },
              {
                risk: "Third-party Dependencies",
                impact: "Medium",
                probability: "Low",
                mitigation: "Fallback options, vendor SLAs, abstraction layers",
                icon: "link",
                color: "#8fd3f4"
              }
            ].map((risk, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex items-start gap-3">
                  <div className="icon-circle" style={{background: `linear-gradient(135deg, ${risk.color}22, ${risk.color}44)`}}>
                    <Icon name={risk.icon} size={20} color={risk.color} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold mb-2">{risk.risk}</h5>
                    
                    <div className="flex gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        risk.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Impact: {risk.impact}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        risk.probability === 'Low' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Probability: {risk.probability}
                      </span>
                    </div>
                    
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Mitigation:</p>
                      <p className="text-xs text-gray-600">{risk.mitigation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="feature-card-modern mt-6">
            <h5 className="font-bold mb-4">Risk Monitoring Dashboard</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Icon name="alert-triangle" size={24} color="#ef4444" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-gray-600">Critical Risks</p>
              </div>
              <div className="text-center">
                <Icon name="alert-circle" size={24} color="#f59e0b" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-gray-600">Medium Risks</p>
              </div>
              <div className="text-center">
                <Icon name="info" size={24} color="#10b981" className="mx-auto mb-2" />
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-gray-600">Low Risks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-red-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== SUPPORT & GROWTH (Slides 28-32) ========
  // 28. Training & Change Management
  {
    title: "Training & Change Management",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">User Success</span>
          <h3 className="heading-lg text-gradient mt-4">Comprehensive Training Program</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                phase: "Pre-Launch",
                icon: "book-open",
                activities: [
                  "Documentation prep",
                  "Video tutorials",
                  "Beta testing",
                  "Feedback collection"
                ],
                color: "#667eea"
              },
              {
                phase: "Launch",
                icon: "rocket",
                activities: [
                  "Live training sessions",
                  "Onboarding flow",
                  "Quick start guides",
                  "Support team ready"
                ],
                color: "#764ba2"
              },
              {
                phase: "Post-Launch",
                icon: "trending-up",
                activities: [
                  "Advanced workshops",
                  "Community building",
                  "Feature updates",
                  "Success stories"
                ],
                color: "#84fab0"
              }
            ].map((training, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="text-center mb-4">
                  <div className="icon-circle mx-auto" style={{background: `linear-gradient(135deg, ${training.color}22, ${training.color}44)`}}>
                    <Icon name={training.icon} size={24} color={training.color} />
                  </div>
                  <h5 className="font-bold mt-3">{training.phase}</h5>
                </div>
                
                <ul className="space-y-2">
                  {training.activities.map((activity, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check" size={14} color={training.color} />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8">
            <h4 className="font-bold text-lg mb-4">Training Resources</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { type: "Video Tutorials", count: "50+", icon: "video" },
                { type: "Written Guides", count: "100+", icon: "file-text" },
                { type: "Live Sessions", count: "12", icon: "users" },
                { type: "Certificates", count: "3 levels", icon: "award" }
              ].map((resource, i) => (
                <div key={i} className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                  <Icon name={resource.icon} size={24} color="#667eea" className="mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gradient">{resource.count}</p>
                  <p className="text-xs text-gray-600">{resource.type}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="feature-card-modern mt-6 gradient-primary text-white">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-lg">User Adoption Target</h5>
                <p className="text-sm opacity-90">80% active users within first month</p>
              </div>
              <ProgressCircle percentage={80} size={80} color="white" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-blue-50 to-green-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 29. Support, SLA & Maintenance
  {
    title: "Support, SLA & Maintenance",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Support</span>
          <h3 className="heading-lg text-gradient mt-4">24/7 Support Excellence</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="modern-card mb-4">
                <h4 className="font-bold mb-4">Support Tiers</h4>
                <div className="space-y-3">
                  {[
                    { tier: "Basic", response: "24 hours", channels: "Email, Docs", price: "Included" },
                    { tier: "Professional", response: "4 hours", channels: "+ Phone, Chat", price: "$500/mo" },
                    { tier: "Enterprise", response: "1 hour", channels: "+ Dedicated", price: "$2000/mo" }
                  ].map((tier, i) => (
                    <div key={i} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">{tier.tier}</h5>
                        <span className="text-xs px-2 py-1 bg-white rounded">{tier.price}</span>
                      </div>
                      <p className="text-xs text-gray-600">Response: {tier.response}</p>
                      <p className="text-xs text-gray-600">Channels: {tier.channels}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern mb-4">
                <h4 className="font-bold mb-4">SLA Commitments</h4>
                <div className="space-y-3">
                  {[
                    { metric: "Uptime", target: "99.9%", penalty: "Service credits" },
                    { metric: "Response Time", target: "&lt; 200ms", penalty: "Investigation" },
                    { metric: "Data Recovery", target: "&lt; 4 hours", penalty: "Full refund" },
                    { metric: "Security Patches", target: "&lt; 24 hours", penalty: "Priority fix" }
                  ].map((sla, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{sla.metric}</span>
                      <span className="font-semibold">{sla.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h5 className="font-semibold mb-3">Maintenance Windows</h5>
                <p className="text-xs text-gray-600">Scheduled: Sunday 2-4 AM UTC</p>
                <p className="text-xs text-gray-600 mt-1">Emergency: 30 min notice</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="stat-card text-center">
              <Icon name="headphones" size={24} color="#667eea" className="mx-auto mb-2" />
              <AnimatedCounter end={24} suffix="/7" />
              <p className="text-xs text-gray-600">Support Hours</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="users" size={24} color="#764ba2" className="mx-auto mb-2" />
              <AnimatedCounter end={10} suffix="+" />
              <p className="text-xs text-gray-600">Support Team</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="star" size={24} color="#84fab0" className="mx-auto mb-2" />
              <AnimatedCounter end={98} suffix="%" />
              <p className="text-xs text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-purple-50 to-pink-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 30. Commercial Add-Ons
  {
    title: "Commercial Add-Ons",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Premium Features</span>
          <h3 className="heading-lg text-gradient mt-4">Value-Added Services</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                addon: "AI Coach Assistant",
                price: "$299/mo",
                features: [
                  "Tactical suggestions",
                  "Pattern recognition",
                  "Performance prediction",
                  "Natural language"
                ],
                icon: "brain",
                color: "#667eea",
                popular: true
              },
              {
                addon: "Video Analysis",
                price: "$199/mo",
                features: [
                  "Match footage sync",
                  "Auto-tagging",
                  "Highlight reels",
                  "Player tracking"
                ],
                icon: "video",
                color: "#764ba2",
                popular: false
              },
              {
                addon: "Team Analytics",
                price: "$149/mo",
                features: [
                  "Performance metrics",
                  "Custom reports",
                  "Benchmarking",
                  "API access"
                ],
                icon: "bar-chart-2",
                color: "#84fab0",
                popular: false
              }
            ].map((addon, i) => (
              <div key={i} className="modern-card hover-lift relative" style={{animationDelay: `${i * 0.15}s`}}>
                {addon.popular && (
                  <div className="absolute -top-3 -right-3 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="icon-circle mx-auto mb-3" style={{background: `linear-gradient(135deg, ${addon.color}22, ${addon.color}44)`}}>
                    <Icon name={addon.icon} size={24} color={addon.color} />
                  </div>
                  <h5 className="font-bold">{addon.addon}</h5>
                  <p className="text-2xl font-bold text-gradient mt-2">{addon.price}</p>
                </div>
                
                <ul className="space-y-2">
                  {addon.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check-circle" size={14} color="#10b981" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8 gradient-animated text-white">
            <h4 className="font-bold text-lg mb-4">Enterprise Bundle</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">All add-ons + priority support + custom features</p>
                <p className="text-3xl font-bold mt-2">$599/mo</p>
                <p className="text-xs opacity-75">Save $48/month</p>
              </div>
              <Icon name="package" size={48} color="white" />
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-r from-indigo-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 31. Assumptions & Dependencies  
  {
    title: "Assumptions & Dependencies",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-outline">Project Baseline</span>
          <h3 className="heading-lg text-gradient mt-4">Key Assumptions & Dependencies</h3>
          
          <div className="grid-2 mt-8">
            <div>
              <div className="modern-card mb-4">
                <h4 className="font-bold mb-4">Assumptions</h4>
                <div className="space-y-3">
                  {[
                    { item: "Timely feedback", desc: "Within 48 hours", icon: "message-circle" },
                    { item: "Resource availability", desc: "As per plan", icon: "users" },
                    { item: "API stability", desc: "Third-party services", icon: "link" },
                    { item: "Market conditions", desc: "No major shifts", icon: "trending-up" }
                  ].map((assumption, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded transition-colors">
                      <Icon name={assumption.icon} size={16} color="#667eea" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">{assumption.item}</p>
                        <p className="text-xs text-gray-600">{assumption.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="feature-card-modern">
                <h4 className="font-bold mb-4">Dependencies</h4>
                <div className="space-y-3">
                  {[
                    { item: "Cloud services", provider: "AWS/Azure", critical: true },
                    { item: "Payment gateway", provider: "Stripe", critical: true },
                    { item: "Video CDN", provider: "CloudFlare", critical: false },
                    { item: "Analytics", provider: "Mixpanel", critical: false }
                  ].map((dependency, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded">
                      <div className="flex items-center gap-2">
                        <Icon name="package" size={16} color="#764ba2" />
                        <span className="text-sm">{dependency.item}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">{dependency.provider}</span>
                        {dependency.critical && (
                          <span className="px-1 py-0.5 bg-red-100 text-red-700 text-xs rounded">Critical</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="modern-card mt-6">
            <h5 className="font-bold mb-3">Success Factors</h5>
            <div className="grid grid-cols-4 gap-4">
              {[
                { factor: "Clear Requirements", status: "Confirmed", icon: "check-square" },
                { factor: "Stakeholder Buy-in", status: "Confirmed", icon: "users" },
                { factor: "Technical Feasibility", status: "Validated", icon: "cpu" },
                { factor: "Budget Approval", status: "Pending", icon: "dollar-sign" }
              ].map((factor, i) => (
                <div key={i} className="text-center">
                  <Icon name={factor.icon} size={24} color={factor.status === 'Pending' ? '#f59e0b' : '#10b981'} className="mx-auto mb-2" />
                  <p className="text-sm font-semibold">{factor.factor}</p>
                  <p className={`text-xs mt-1 ${
                    factor.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {factor.status}
                  </p>
                </div>
              ))}
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

  // 32. Case Study Inspiration
  {
    title: "Case Study Inspiration",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-gradient">Success Stories</span>
          <h3 className="heading-lg text-gradient mt-4">Industry Success Examples</h3>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              {
                project: "Premier League Club",
                sport: "Football",
                results: [
                  "35% faster tactics prep",
                  "2x player engagement",
                  "50% less meeting time"
                ],
                icon: "⚽",
                color: "#667eea"
              },
              {
                project: "NBA Team",
                sport: "Basketball",
                results: [
                  "Real-time play calling",
                  "40% better retention",
                  "3x video analysis speed"
                ],
                icon: "🏀",
                color: "#764ba2"
              },
              {
                project: "Olympic Committee",
                sport: "Multi-sport",
                results: [
                  "15 sports supported",
                  "500+ coaches trained",
                  "98% satisfaction"
                ],
                icon: "🏅",
                color: "#84fab0"
              }
            ].map((study, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{study.icon}</div>
                  <h5 className="font-bold">{study.project}</h5>
                  <p className="text-sm text-gray-600">{study.sport}</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  {study.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <Icon name="trending-up" size={14} color={study.color} />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t text-center">
                  <p className="text-xs text-gray-600">ROI achieved in</p>
                  <p className="text-lg font-bold" style={{color: study.color}}>&lt; 6 months</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="feature-card-modern mt-8">
            <h4 className="font-bold text-lg mb-4">Why They Succeeded</h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { reason: "User-Centered Design", icon: "users" },
                { reason: "Iterative Development", icon: "refresh-cw" },
                { reason: "Strong Support", icon: "headphones" },
                { reason: "Continuous Updates", icon: "download" }
              ].map((reason, i) => (
                <div key={i} className="text-center">
                  <Icon name={reason.icon} size={24} color="#667eea" className="mx-auto mb-2" />
                  <p className="text-sm">{reason.reason}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="modern-card mt-6 gradient-success text-white">
            <Icon name="award" size={32} color="white" className="mb-2" />
            <h5 className="font-bold text-lg">Your Success Is Our Success</h5>
            <p className="text-sm opacity-90">Join the growing list of successful sports organizations</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-green-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // ======== COMMERCIAL & CLOSING (Slides 33-36) ========
  // 33. Pricing & Payment Terms
  {
    title: "Pricing & Payment Terms",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-gradient">Investment</span>
          <h3 className="heading-lg text-gradient mt-4">Transparent Pricing Structure</h3>
          
          <div className="modern-card mt-8">
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  phase: "Development",
                  cost: "$150,000",
                  duration: "7 months",
                  includes: ["Design & Development", "Testing & QA", "Documentation", "Training"],
                  payment: "Monthly milestones"
                },
                {
                  phase: "Launch Support",
                  cost: "$20,000",
                  duration: "2 months",
                  includes: ["Go-live assistance", "Bug fixes", "Performance tuning", "User support"],
                  payment: "50% upfront"
                },
                {
                  phase: "Annual License",
                  cost: "$30,000/yr",
                  duration: "Ongoing",
                  includes: ["Updates & upgrades", "Security patches", "Basic support", "Cloud hosting"],
                  payment: "Quarterly"
                }
              ].map((pricing, i) => (
                <div key={i} className="glass-card p-4 hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                  <div className="text-center mb-4">
                    <h5 className="font-bold text-lg">{pricing.phase}</h5>
                    <p className="text-3xl font-bold text-gradient mt-2">{pricing.cost}</p>
                    <p className="text-sm text-gray-600">{pricing.duration}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {pricing.includes.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="check-circle" size={14} color="#10b981" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-3 border-t text-center">
                    <p className="text-xs text-gray-600">Payment: {pricing.payment}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold">Total Year 1 Investment</h5>
                  <p className="text-sm text-gray-600">Development + Launch + License</p>
                </div>
                <p className="text-3xl font-bold text-gradient">$200,000</p>
              </div>
            </div>
          </div>
          
          <div className="grid-2 mt-6">
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Payment Schedule</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Upon signing</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly milestones</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Upon delivery</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </div>
            
            <div className="feature-card-modern">
              <h5 className="font-bold mb-3">Optional Services</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Premium Support</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">+$2K/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Custom Features</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Quote</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Migration</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">+$10K</span>
                </div>
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

  // 34. Terms & Conditions
  {
    title: "Terms & Conditions",
    content: (
      <div className="animate-fadeInUp">
        <div className="stagger-animation">
          <span className="badge-outline">Agreement</span>
          <h3 className="heading-lg text-gradient mt-4">Key Terms & Conditions</h3>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              {
                category: "Intellectual Property",
                icon: "shield",
                terms: [
                  "Client owns all custom code",
                  "We retain framework rights",
                  "Open source components included",
                  "No vendor lock-in"
                ]
              },
              {
                category: "Warranties",
                icon: "award",
                terms: [
                  "90-day bug fix guarantee",
                  "Performance guarantees",
                  "Security compliance",
                  "Documentation accuracy"
                ]
              },
              {
                category: "Liabilities",
                icon: "alert-circle",
                terms: [
                  "Limited to contract value",
                  "No indirect damages",
                  "Force majeure clause",
                  "Insurance coverage"
                ]
              },
              {
                category: "Termination",
                icon: "x-circle",
                terms: [
                  "30-day notice period",
                  "Code handover guaranteed",
                  "Data export provided",
                  "Knowledge transfer included"
                ]
              }
            ].map((term, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={term.icon} size={24} color="#667eea" />
                  <h5 className="font-bold">{term.category}</h5>
                </div>
                
                <ul className="space-y-2">
                  {term.terms.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Icon name="check" size={14} color="#10b981" className="mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-8">
            <h5 className="font-bold mb-4">Additional Protections</h5>
            <div className="grid grid-cols-3 gap-4">
              {[
                { item: "NDA in place", icon: "lock" },
                { item: "GDPR compliant", icon: "shield-check" },
                { item: "Escrow available", icon: "archive" }
              ].map((protection, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <Icon name={protection.icon} size={20} color="#667eea" />
                  <span className="text-sm font-semibold">{protection.item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="feature-card-modern mt-6 gradient-dark text-white">
            <Icon name="file-text" size={32} color="white" className="mb-2" />
            <h5 className="font-bold text-lg">Full Contract Available</h5>
            <p className="text-sm opacity-90">Detailed MSA and SOW ready for review</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-bl from-gray-50 to-purple-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },

  // 35. Next Steps
  {
    title: "Next Steps",
    content: (
      <div className="animate-fadeInScale">
        <div className="stagger-animation">
          <span className="badge-gradient">Action Plan</span>
          <h3 className="heading-lg text-gradient mt-4">Let's Get Started</h3>
          
          <div className="modern-card mt-8">
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {[
                {
                  step: "Week 1",
                  title: "Decision & Approval",
                  actions: ["Review proposal", "Internal discussions", "Q&A session", "Budget approval"],
                  icon: "check-square"
                },
                {
                  step: "Week 2",
                  title: "Contract & Planning",
                  actions: ["Contract negotiation", "Sign agreements", "Team introductions", "Kick-off meeting"],
                  icon: "file-text"
                },
                {
                  step: "Week 3-4",
                  title: "Discovery & Design",
                  actions: ["Requirements workshop", "User interviews", "Technical architecture", "Design mockups"],
                  icon: "search"
                },
                {
                  step: "Month 2+",
                  title: "Development Begins",
                  actions: ["Sprint planning", "Start coding", "Regular demos", "Continuous feedback"],
                  icon: "code"
                }
              ].map((next, i) => (
                <div key={i} className="relative mb-8" style={{animationDelay: `${i * 0.15}s`}}>
                  <div className="absolute -left-6 w-4 h-4 bg-white border-2 border-purple-500 rounded-full"></div>
                  
                  <div className="glass-card p-4 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-gray-600">{next.step}</span>
                        <h5 className="font-bold text-lg">{next.title}</h5>
                      </div>
                      <Icon name={next.icon} size={24} color="#667eea" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {next.actions.map((action, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <Icon name="arrow-right" size={12} color="#667eea" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="stat-card text-center">
              <Icon name="calendar" size={24} color="#667eea" className="mx-auto mb-2" />
              <p className="text-lg font-bold">Jan 2024</p>
              <p className="text-xs text-gray-600">Project Start</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="users" size={24} color="#764ba2" className="mx-auto mb-2" />
              <p className="text-lg font-bold">Ready</p>
              <p className="text-xs text-gray-600">Team Available</p>
            </div>
            <div className="stat-card text-center">
              <Icon name="rocket" size={24} color="#84fab0" className="mx-auto mb-2" />
              <p className="text-lg font-bold">July 2024</p>
              <p className="text-xs text-gray-600">Go Live</p>
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

  // 36. Closing & Contacts
  {
    title: "Thank You",
    content: (
      <div className="animate-fadeInUp">
        <div className="text-center stagger-animation">
          <span className="badge-gradient animate-pulse">Let's Build Together</span>
          <h1 className="heading-xl text-gradient mt-6">Ready to Transform Your Coaching?</h1>
          <p className="text-xl text-gray-700 mt-4">We're excited to partner with you on this journey</p>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "John Smith",
                role: "Project Director",
                email: "john@company.com",
                phone: "+1 (555) 123-4567",
                icon: "user"
              },
              {
                name: "Sarah Johnson",
                role: "Technical Lead",
                email: "sarah@company.com",
                phone: "+1 (555) 234-5678",
                icon: "code"
              },
              {
                name: "Mike Wilson",
                role: "Product Manager",
                email: "mike@company.com",
                phone: "+1 (555) 345-6789",
                icon: "briefcase"
              }
            ].map((contact, i) => (
              <div key={i} className="modern-card hover-lift" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="icon-circle mx-auto mb-4">
                  <Icon name={contact.icon} size={24} color="#667eea" />
                </div>
                <h5 className="font-bold text-lg">{contact.name}</h5>
                <p className="text-sm text-gray-600 mb-3">{contact.role}</p>
                
                <div className="space-y-2 text-sm">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Icon name="mail" size={14} />
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Icon name="phone" size={14} />
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="modern-card mt-12 gradient-animated text-white">
            <Icon name="calendar" size={40} color="white" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Schedule a Follow-up Meeting</h3>
            <p className="text-lg opacity-90 mb-6">Let's discuss your questions and next steps</p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-shadow">
              Book a Meeting
            </button>
          </div>
          
          <div className="mt-12">
            <div className="flex justify-center gap-6">
              {[
                { icon: "globe", link: "www.company.com" },
                { icon: "linkedin", link: "LinkedIn" },
                { icon: "twitter", link: "Twitter" },
                { icon: "github", link: "GitHub" }
              ].map((social, i) => (
                <a key={i} href="#" className="icon-circle hover:scale-110 transition-transform">
                  <Icon name={social.icon} size={24} color="#667eea" />
                </a>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mt-6">© 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
    overlay: "",
    decoLeft: "",
    decoRight: ""
  },
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
        <div className="slide-content-wrapper">
          {content}
        </div>
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