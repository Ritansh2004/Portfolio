/**
 * ============================================================================
 * RITANSH | SYSTEMS & REVERSE ENGINEERING SPECIALIST PORTFOLIO
 * High-Performance Interactive Engine
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA REPOSITORY: PROJECT CASE STUDIES (Interactive Modal Content)
  // ==========================================================================
  const projectsData = {
    're-suite': {
      category: 'REVERSE ENGINEERING & LOGIC HOOKING',
      title: 'Game Reverse Engineering & Memory Analysis Suite',
      badge: 'Unity // Godot Engine Specialist',
      summary: 'A deep-level game reverse engineering research suite focusing on dynamic memory analysis, pointer-map tracing, AOB (Array of Bytes) pattern scanning, and custom Lua script extensions for modern game engines like Unity (Mono/IL2CPP) and Godot.',
      techStack: [
        'Cheat Engine 7.5+',
        'Lua Scripting',
        'x86 / x64 Assembly',
        'Unity Engine (Mono / IL2CPP)',
        'Godot Engine',
        'Memory Scanner & Disassembler',
        'AOB Injections',
        'Pointer Maps'
      ],
      architecture: [
        'AOB Pattern Scanning: Built resilient multi-byte pattern masks to locate dynamic code routines across varying game versions without breaking post-update.',
        'Runtime Logic Hooking: Intercepted internal class methods and CPU registers (RAX, RBX, RCX) through custom Auto Assemble trampolines to alter game physics, cooldowns, and entity states.',
        'Lua Automation Extensions: Developed custom Lua GUI forms and scripts within Cheat Engine to automate pointer resolution and deliver seamless user experiences.',
        'Community Contribution: Published open-source cheat tables and scripts on GitHub and the Fearless Revolution community to help fellow reverse engineers dissect game logic.'
      ],
      actions: [
        { label: 'View Cheat Tables (GitHub)', url: 'https://github.com/Ritansh2004/Cheat-Engine-Cheat-Tables', icon: 'fa-brands fa-github', primary: true },
        { label: 'View Lua Scripts (GitHub)', url: 'https://github.com/Ritansh2004/Cheat-Engine-Lua-Scripts', icon: 'fa-solid fa-scroll', primary: false },
        { label: 'Fearless Revolution Profile', url: 'https://fearlessrevolution.com/memberlist.php?mode=viewprofile&u=213726', icon: 'fa-solid fa-users', primary: false }
      ]
    },

    'fire-robot': {
      category: 'EMBEDDED HARDWARE & ROBOTICS',
      title: 'Autonomous IoT Fire Fighting Robot Truck',
      badge: 'DSEU ECE Diploma Capstone // 8.37 CGPA',
      summary: 'An autonomous multi-sensor emergency response robot truck engineered using Arduino microcontrollers to detect hazardous fires and toxic gas leaks in restricted or dangerous environments, deploying an onboard automated water pumping system to safeguard human lives.',
      techStack: [
        'Arduino UNO / Nano',
        'Embedded C / C++',
        'MQ-2 / MQ-3 Toxic Gas Sensors',
        'Multi-Directional Flame Sensor Array',
        'Ultrasonic / IR Obstacle Sensors',
        'L298N Dual H-Bridge Motor Driver',
        '5V Relay Module & DC Submersible Pump',
        'Servo Motor Nozzle Aiming'
      ],
      architecture: [
        'Autonomous Fire Localization: Utilized a tri-directional infrared flame sensor array to calculate fire orientation and compute navigation vectors toward the target.',
        'Hazardous Gas Monitoring: Integrated analog MQ gas sensors to continuously sample ambient smoke, LPG, and carbon monoxide concentrations, logging dangerous spikes.',
        'Targeted Suppression Mechanism: Connected a 5V relay circuit triggering a high-pressure mini submersible water pump, controlled by a servo motor for accurate nozzle aiming.',
        'Obstacle Avoidance: Integrated ultrasonic distance sensors to autonomously navigate around debris and tight corridors without collision.'
      ],
      actions: [
        { label: 'Diploma Verified (8.37 CGPA at DSEU)', url: '#about', icon: 'fa-solid fa-award', primary: true }
      ]
    },

    'nic-network': {
      category: 'SYSTEMS & ICT NETWORKING',
      title: 'Study & Analysis of ICT Network Architecture',
      badge: 'National Informatics Centre (NIC) Internship',
      summary: 'A 1-month intensive internship study at the National Informatics Centre (CGO Complex, Delhi), analyzing government-scale ICT network infrastructure, data communication protocols, security zoning, and hardware topologies.',
      techStack: [
        'Enterprise ICT Networking',
        'TCP/IP & OSI Architecture',
        'Cisco Switch & Router Topologies',
        'VLANs & Subnetting',
        'Network Packet Inspection',
        'Infrastructure Security Protocols'
      ],
      architecture: [
        'Network Topology Assessment: Analyzed enterprise-level LAN/WAN routing schematics powering critical government digital portals.',
        'Packet Flow & Troubleshooting: Investigated data transmission bottlenecks, packet loss, and latency characteristics across high-throughput server backbones.',
        'Security & Zone Isolation: Studied firewall configurations, DMZ architectures, and access control lists (ACLs) to safeguard institutional data.',
        'Device Diagnostics: Participated in network interface hardware inspections, structured cabling, and server rack health maintenance.'
      ],
      actions: [
        { label: 'View Profile on LinkedIn', url: 'https://www.linkedin.com/in/ritansh-mahour-9461a7287', icon: 'fa-brands fa-linkedin', primary: true }
      ]
    },

    'dsa-suite': {
      category: 'SOFTWARE & ALGORITHMIC FOUNDATION',
      title: 'Data Structures & Computational Problem Solving',
      badge: 'CipherSchools Verified Certification',
      summary: 'A comprehensive 2-month rigorous training program focusing on computational problem-solving, algorithm optimization, asymptotic runtime analysis, and low-level memory structure manipulation in C++.',
      techStack: [
        'C & C++ Programming',
        'Pointer Logic & Dynamic Allocation',
        'Trees & Binary Search Trees (BST)',
        'Graph Traversal (BFS & DFS)',
        'Dynamic Programming & Recursion',
        'Sorting & Search Complexities (O(N log N))'
      ],
      architecture: [
        'Algorithmic Complexity Optimization: Analyzed worst, average, and best-case space/time complexities across foundational algorithms.',
        'Pointer-Level Memory Management: Built custom linked lists, stacks, and queue structures with zero memory leaks via explicit manual deallocation.',
        'Non-Linear Data Hierarchies: Implemented height-balanced trees, binary search trees, and heap structures for prioritized data retrieval.',
        'Official Verification: Awarded official verified certification upon rigorous evaluation (Certificate ID: 6aa10ad90ba0d6d72e610169).'
      ],
      actions: [
        { label: 'Verify Certificate Online', url: 'https://cipherschools.com/certificate/preview?id=6aa10ad90ba0d6d72e610169', icon: 'fa-solid fa-certificate', primary: true },
        { label: 'View Credly Badges', url: 'https://www.credly.com/users/ritansh-mahour/badges', icon: 'fa-solid fa-award', primary: false }
      ]
    }
  };

  // ==========================================================================
  // 2. TECHNICAL HUD PRELOADER (No Text, Pure Cyber HUD Visuals)
  // ==========================================================================
  const hudPreloader = document.getElementById('hudPreloader');
  const hudCount = document.getElementById('hudCount');
  const hudProgressBar = document.getElementById('hudProgressBar');
  const binaryTicker = document.getElementById('binaryTicker');

  let currentCount = 0;
  const binaryStrings = [
    '01001001 01001110 01001001 01010100',
    '01010011 01011001 01010011 01010100',
    '01001101 01000101 01001101 01010011',
    '01001000 01001111 01001111 01001011',
    '01010010 01000101 01010011 01001111',
    '01001100 01010110 01000101 01000100'
  ];

  const counterInterval = setInterval(() => {
    // Increment count with technical cadence
    const step = Math.floor(Math.random() * 6) + 4;
    currentCount += step;

    // Randomize binary ticker
    if (Math.random() > 0.35 && binaryTicker) {
      binaryTicker.textContent = binaryStrings[Math.floor(Math.random() * binaryStrings.length)];
    }

    if (currentCount >= 100) {
      currentCount = 100;
      clearInterval(counterInterval);

      if (hudCount) hudCount.textContent = '100';
      if (hudProgressBar) hudProgressBar.style.width = '100%';

      // Smooth curtain reveal
      setTimeout(() => {
        if (hudPreloader) {
          hudPreloader.classList.add('loaded');
          initEntranceAnimations();
        }
      }, 350);
    } else {
      if (hudCount) hudCount.textContent = currentCount < 10 ? '0' + currentCount : currentCount;
      if (hudProgressBar) hudProgressBar.style.width = currentCount + '%';
    }
  }, 35);

  // ==========================================================================
  // 3. CUSTOM CURSOR WITH SMOOTH LERP PHYSICS & MAGNETIC TARGETS
  // ==========================================================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  // Smooth lerp loop for outer ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states for magnetic elements
  const magneticTargets = document.querySelectorAll('a, button, .magnetic-target, .skill-chip, .project-card, .timeline-block');
  magneticTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // ==========================================================================
  // 4. ANIMATED BACKGROUND CANVAS (Cyber Constellation & Mesh)
  // ==========================================================================
  const canvas = document.getElementById('bgCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 35 : 65;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.8;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  // ==========================================================================
  // 5. NAVBAR SCROLL EFFECT & MOBILE MENU TOGGLE
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileNavBtn = document.getElementById('mobileNavBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileNavBtn && navMenu) {
    mobileNavBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // 6. CINEMATIC SCROLL ZOOM-IN REVEAL ENGINE
  // ==========================================================================
  function initEntranceAnimations() {
    const revealTargets = document.querySelectorAll(
      '.about-story-card, .info-card, .skill-category-card, .project-card, .timeline-block, .contact-card-wrapper'
    );

    revealTargets.forEach((el) => {
      // Don't hide elements if they are already above the viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('revealed');
      } else {
        el.classList.add('scroll-reveal');
      }
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      });

      document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add('revealed'));
    }

    // Hero items reveal
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.reveal-item', 
        { opacity: 0, scale: 0.92, y: 25 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }

  // ==========================================================================
  // 7. INTERACTIVE PROJECT DETAIL POPUP MODAL
  // ==========================================================================
  const projectModal = document.getElementById('projectModal');
  const modalBodyContent = document.getElementById('modalBodyContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modalBodyContent || !projectModal) return;

    // Render HTML inside modal
    modalBodyContent.innerHTML = `
      <span class="modal-category-badge">// ${data.category}</span>
      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-summary">${data.summary}</p>

      <h4 class="modal-section-heading">
        <i class="fa-solid fa-layer-group"></i> Key Architectural Implementations
      </h4>
      <ul class="modal-bullets">
        ${data.architecture.map((item) => `<li><i class="fa-solid fa-chevron-right"></i><span>${item}</span></li>`).join('')}
      </ul>

      <h4 class="modal-section-heading">
        <i class="fa-solid fa-microchip"></i> Technology & Tools Utilized
      </h4>
      <div class="modal-tech-stack">
        ${data.techStack.map((tech) => `<span class="modal-tech-pill">${tech}</span>`).join('')}
      </div>

      <div class="modal-actions-footer">
        ${data.actions.map((act) => `
          <a href="${act.url}" target="_blank" rel="noopener noreferrer" class="btn ${act.primary ? 'btn-primary' : 'btn-secondary'} magnetic-target">
            <i class="${act.icon}"></i>
            <span>${act.label}</span>
          </a>
        `).join('')}
      </div>
    `;

    // Show modal
    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event Listeners for Open Modal
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.getAttribute('data-project-id');
      openProjectModal(pId);
    });
  });

  // Modal Close Button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Backdrop click to close
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // ESC Key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // ==========================================================================
  // 8. PROJECT CATEGORY FILTERS (Instant & 100% Reliable Visibility)
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Ensure all project cards are initialized visibly
  projectCards.forEach((card) => {
    card.style.display = 'flex';
    card.style.opacity = '1';
    card.style.visibility = 'visible';
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.visibility = 'visible';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 9. COPY EMAIL TO CLIPBOARD WITH TOAST NOTIFICATION
  // ==========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotice = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');

  function showToast(message) {
    if (!toastNotice) return;
    if (toastMsg) toastMsg.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'firstlast2s100@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // ==========================================================================
  // 10. CONTACT FORM HANDLER (Foreground UI + Background Transmission Engine)
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitMsgBtn = document.getElementById('submitMsgBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('msgSubject').value.trim();
      const body = document.getElementById('msgBody').value.trim();
      const keyInput = document.getElementById('web3FormsKey');
      const accessKey = keyInput ? keyInput.value.trim() : '';

      if (!name || !email || !subject || !body) {
        if (formFeedback) {
          formFeedback.style.color = '#ef4444';
          formFeedback.textContent = '// ERROR: All fields are mandatory.';
        }
        return;
      }

      // Foreground UI: Sending state
      if (submitMsgBtn) {
        submitMsgBtn.disabled = true;
        submitMsgBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Encrypting & Transmitting...</span>';
      }
      if (formFeedback) {
        formFeedback.style.color = '#00f0ff';
        formFeedback.textContent = '// STATUS: Packaging encrypted payload to firstlast2s100@gmail.com...';
      }

      // Background Protocol Option 1: Direct Background AJAX API (If Web3Forms key configured)
      if (accessKey) {
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: accessKey,
              name: name,
              email: email,
              subject: `[Portfolio Inquiry] ${subject}`,
              message: body
            })
          });

          const data = await res.json();
          if (data.success) {
            if (formFeedback) {
              formFeedback.style.color = '#10b981';
              formFeedback.textContent = '// SUCCESS: Transmission confirmed! Delivered directly to Ritansh.';
            }
            showToast('Message sent directly to Ritansh!');
            contactForm.reset();
            if (submitMsgBtn) {
              submitMsgBtn.disabled = false;
              submitMsgBtn.innerHTML = '<span>Transmit Message</span> <i class="fa-solid fa-paper-plane"></i>';
            }
            return;
          }
        } catch (err) {
          console.warn('API submission failed, falling back to mail client protocol.', err);
        }
      }

      // Background Protocol Option 2: Direct Mailto Dispatch to firstlast2s100@gmail.com
      const mailtoUrl = `mailto:firstlast2s100@gmail.com?subject=${encodeURIComponent('[Portfolio Inquiry] ' + subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${body}`)}`;

      setTimeout(() => {
        if (formFeedback) {
          formFeedback.style.color = '#10b981';
          formFeedback.textContent = '// SUCCESS: Payload verified. Opening your email transmission client...';
        }
        showToast('Opening email to firstlast2s100@gmail.com');
        window.location.href = mailtoUrl;

        setTimeout(() => {
          if (submitMsgBtn) {
            submitMsgBtn.disabled = false;
            submitMsgBtn.innerHTML = '<span>Transmit Message</span> <i class="fa-solid fa-paper-plane"></i>';
          }
        }, 1500);
      }, 600);
    });
  }

});
