const questions = [
  {
    q: "As the IT Director, you prepare your technology budget and apply Moore’s Law to guide hardware investment. Which is the best example of using Moore’s Law in this context?",
    choices: [
      "Reducing software licensing costs by switching to open-source platforms",
      "Consolidating IT staff over the next 3–5 years to reduce overhead",
      "Purchasing twice as many servers now to avoid future price increases",
      "Planning to upgrade processing hardware every 18–24 months to double performance at similar cost"
    ],
    answer: 3,
    explain: "Moore’s Law predicts that compute performance per dollar roughly doubles every 18–24 months. Planning regular CPU/processor refresh cycles to capture that gain is exactly how you budget using Moore’s Law.",
    why_others_are_not_correct: {
      0: "Open-source licensing is a cost strategy, but it’s unrelated to hardware performance scaling over time.",
      1: "Staff consolidation is about labor cost, not performance-per-dollar of compute hardware.",
      2: "Buying a bunch of servers now to ‘lock in price’ ignores Moore’s Law. Moore’s Law argues you’ll get cheaper/better hardware later, not that you should stock up now."
    }
  },
  {
    q: "As the IT engineer for Company XYZ, leadership asks you to implement MIMO (Multiple Input, Multiple Output) to improve wireless communication. Which option is the best example of MIMO?",
    choices: [
      "A single-antenna access point that boosts signal using an amplifier",
      "A mesh network that extends Wi-Fi coverage across multiple floors",
      "A firewall that filters incoming and outgoing wireless traffic",
      "A wireless router using multiple antennas to send and receive data streams simultaneously"
    ],
    answer: 3,
    explain: "MIMO uses multiple antennas on both the transmitter and receiver to send multiple data streams at once, boosting throughput and reliability.",
    why_others_are_not_correct: {
      0: "One antenna with an amplifier is just boosting power. That's not multiple-input/multiple-output.",
      1: "Mesh networking is about extending coverage across locations, not parallel spatial streams.",
      2: "A firewall is about filtering traffic for security, not RF transmission method."
    }
  },
  {
    q: "You are building a relational database for top-secret clearance and are using metadata to support the system. Which is the best example of metadata?",
    choices: [
      "A table that stores encrypted personnel clearance levels",
      "A schema that defines field names, data types, and relationships between tables",
      "A log file that records user access to classified records",
      "A query that retrieves mission-critical data from multiple tables"
    ],
    answer: 1,
    explain: "Metadata is 'data about data' — things like table definitions, data types, and relationships. The schema describes structure, not the actual mission data.",
    why_others_are_not_correct: {
      0: "That’s actual data (content), not metadata about structure.",
      2: "Access logs are audit trails, not descriptions of how data is organized.",
      3: "A query is an action/tool to pull data, not descriptive information about the data model."
    }
  },
  {
    q: "You are preparing an AI strategy using genetic algorithms, focusing on mutation. Which is the best example of using mutation in this context?",
    choices: [
      "Randomly altering a delivery route in an optimization model to explore new paths",
      "Selecting the top-performing forecast models and combining parameters",
      "Using historical sales data to train a supervised learning model",
      "Running a fixed algorithm that repeats the same output for identical inputs"
    ],
    answer: 0,
    explain: "In genetic algorithms, mutation means making random tweaks to candidate solutions so you explore new possibilities and avoid getting stuck in a local optimum.",
    why_others_are_not_correct: {
      1: "Combining top performers is crossover, not mutation.",
      2: "Training on historical data is just standard supervised learning, not evolutionary search.",
      3: "A fixed, deterministic algorithm is the opposite of mutation; nothing changes."
    }
  },
  {
    q: "As the IT manager for a school district, leadership wants to measure the success of a new ERP system. Which is the best example of how to measure ERP success?",
    choices: [
      "Tracking system uptime and server response times",
      "Measuring user adoption rates and process efficiency improvements",
      "Increasing the number of modules installed across departments",
      "Monitoring help desk ticket volume related to ERP login issues"
    ],
    answer: 1,
    explain: "ERP success is ultimately about whether people use it and whether it improves how the organization runs. Adoption and process efficiency tie directly to business value.",
    why_others_are_not_correct: {
      0: "Uptime is important, but you can have perfect uptime and still have an ERP that nobody actually uses well.",
      2: "Just installing modules doesn’t mean they’re bringing value or being used correctly.",
      3: "Ticket volume around login is a narrow IT support metric, not a success metric for process improvement."
    }
  },
  {
    q: "As the IT Leader for a large materials manufacturer, you want to enhance materials management with ERP. What is the best example of this?",
    choices: [
      "Using spreadsheets to track raw material usage across departments",
      "Allowing employees to communicate through unified messaging",
      "Printing weekly reports to monitor warehouse stock levels",
      "Integrating supplier delivery schedules with real-time inventory tracking to automate reorder points"
    ],
    answer: 3,
    explain: "Modern ERP-driven materials management ties supplier schedules to live inventory and automatically triggers replenishment. That’s classic ‘materials management done right.’",
    why_others_are_not_correct: {
      0: "Spreadsheets are manual, disconnected, and error-prone — the opposite of ERP integration.",
      1: "Messaging/communication tools aren’t materials management.",
      2: "Printed weekly reports are reactive and delayed — not automated, real-time control."
    }
  },
  {
    q: "As the IT Manager at a game store, you’re exploring Web 2.0 tools. Which is the best example of a mashup?",
    choices: [
      "A customer survey tool embedded on the company website",
      "A static webpage listing store hours and contact info",
      "A secure login portal for employee scheduling",
      "A store locator that combines Google Maps with real-time inventory data"
    ],
    answer: 3,
    explain: "A mashup combines data or services from two or more sources to create something new (maps + inventory = mashup).",
    why_others_are_not_correct: {
      0: "A survey widget is just embedded content, not blended data/services.",
      1: "A static info page = Web 1.0 vibes, not a mashup.",
      2: "A secure portal is internal access control, not merged external services."
    }
  },
  {
    q: "As the IT Manager at Regok Grocery Chain, you’re implementing a CRM strategy. Which of the following is the best example of a marketing operational CRM?",
    choices: [
      "Automating campaign management to segment and target customers based on purchase history",
      "Analyzing customer churn rates using predictive analytics",
      "Generating executive dashboards to monitor overall sales performance",
      "Using a data warehouse to store historical customer data for long-term trend analysis"
    ],
    answer: 0,
    explain: "Operational CRM supports day-to-day, customer-facing processes like targeted marketing campaigns and outreach automation in real time.",
    why_others_are_not_correct: {
      1: "Churn analysis is analytical CRM — strategic insight, not operational execution.",
      2: "Dashboards are reporting/BI, not direct operational campaign activity.",
      3: "A data warehouse is long-term storage/analysis, not live campaign execution."
    }
  },
  {
    q: "You are implementing a sustainable MIS infrastructure to support growth and environmental responsibility. Which is the best example of a sustainable MIS solution?",
    choices: [
      "Redundant magnetic tape backups stored offsite",
      "Virtualization to consolidate physical servers",
      "Grid computing to distribute processing across systems",
      "RAID 5 disk arrays for fault-tolerant storage"
    ],
    answer: 1,
    explain: "Virtualization lets you run many virtual servers on fewer physical boxes, cutting energy, cooling, and hardware waste. That’s sustainability.",
    why_others_are_not_correct: {
      0: "Tape backups are old-school archival. Reliable, yes, but not about reducing footprint.",
      2: "Grid computing is about distributed processing power, not automatically about energy efficiency.",
      3: "RAID 5 is fault tolerance and availability, not greener infrastructure."
    }
  },
  {
    q: "Leadership at DrinkAlot Coffee wants to ensure that legacy systems communicate with the CRM system seamlessly and reliably. Which solution is best?",
    choices: [
      "Middleware Integration Platform",
      "API Gateway",
      "External Storage Array",
      "CRM Dashboard"
    ],
    answer: 0,
    explain: "Middleware (like an ESB or iPaaS) sits in the middle, translates formats, queues messages, and lets old systems talk to new systems without rewriting everything.",
    why_others_are_not_correct: {
      1: "An API gateway manages API access and routing, but if legacy systems don’t even speak modern APIs yet, a gateway alone won’t solve it.",
      2: "Storage arrays solve capacity, not interoperability.",
      3: "A dashboard is just a view of CRM data. It doesn’t integrate anything."
    }
  },
  {
    q: "At a hospital, the board asks you to explore AI and believes machine-to-machine learning is the best path. Which example aligns best?",
    choices: [
      "Neural networks used for diagnostic imaging analysis",
      "Expert systems used to encode physician decision rules",
      "Decision support systems (DSS) for hospital administration",
      "Online analytical processing (OLAP) for patient billing trends"
    ],
    answer: 0,
    explain: "Neural networks learn patterns from data (like medical images) without hard-coded human rules — that’s modern machine learning.",
    why_others_are_not_correct: {
      1: "Expert systems are rule-based. That’s old-school AI, not adaptive learning.",
      2: "DSS helps humans make decisions using models and reports, not autonomous pattern learning.",
      3: "OLAP slices and dices data but doesn’t learn or adapt."
    }
  },
  {
    q: "You’re configuring wireless and are concerned about sniffers intercepting traffic. What’s the most effective modern mitigation?",
    choices: [
      "Enabling WPA3 encryption with forward secrecy",
      "Using MAC address filtering to restrict device access",
      "Enabling WPA2 encryption with a strong pre-shared key",
      "Disabling SSID broadcast to hide the network"
    ],
    answer: 0,
    explain: "WPA3 with forward secrecy protects against eavesdropping and replay even if one session’s keys are exposed. It’s currently the strongest mainstream Wi-Fi protection.",
    why_others_are_not_correct: {
      1: "MAC filtering is easy to spoof. It’s basically cosmetic security.",
      2: "WPA2 with a strong key is decent, but weaker than WPA3 + forward secrecy.",
      3: "Hiding the SSID does nothing against anyone running a sniffer — they still see the traffic."
    }
  },
  {
    q: "At Horizon Cell Service, you launch a loyalty program that captures and analyzes customer data. Which Porter’s Five Forces item are you addressing most directly?",
    choices: [
      "Threat of Substitutes",
      "Bargaining Power of Buyers",
      "Bargaining Power of Customers",
      "Threat of New Entrants"
    ],
    answer: 1,
    explain: "Loyalty programs raise switching costs and keep customers from jumping to a competitor. That reduces buyers’ bargaining power.",
    why_others_are_not_correct: {
      0: "Substitutes are alternative products (e.g. messaging instead of phone). Loyalty doesn’t directly remove substitutes.",
      2: "‘Bargaining Power of Buyers’ and ‘Bargaining Power of Customers’ are usually the same idea in many textbooks, but if treated separately, the item framed as ‘buyers’ is typically the canonical force.",
      3: "New entrants are about barriers to entry. Loyalty mostly defends against churn, not startups entering the market."
    }
  },
  {
    q: "Leadership gives you KPIs to track IT performance. Which of the following is the best example of a KPI (not just a general metric)?",
    choices: [
      "Number of help desk tickets submitted per month",
      "Average time to resolve help desk tickets",
      "Number of software licenses purchased",
      "Number of devices connected to the network"
    ],
    answer: 1,
    explain: "Mean time to resolve tells you how efficiently support is solving problems. It’s performance-focused, not just volume-focused.",
    why_others_are_not_correct: {
      0: "Ticket count is workload, not performance quality.",
      2: "License count is inventory/cost, not service effectiveness.",
      3: "Device count is environment size, not service performance."
    }
  },
  {
    q: "At a large retail store you discover a recent malware attack. Which is the best example of this type of attack?",
    choices: [
      "A Trojan disguised as a software update that installs a keylogger",
      "A phishing email that tricks employees into revealing login credentials",
      "A firewall misconfiguration that allows unauthorized access",
      "A brute-force attack that guesses weak administrator passwords"
    ],
    answer: 0,
    explain: "Malware is malicious software. A Trojan posing as a legit update and secretly installing a keylogger is textbook malware.",
    why_others_are_not_correct: {
      1: "Phishing is social engineering, not necessarily malware execution.",
      2: "A misconfigured firewall is a security weakness, not an attack payload.",
      3: "Brute force is a password guessing attempt, not software running on your systems."
    }
  },
  {
    q: "After a security audit, you discover your company was exposed to a mail bomb. Which is the best example of this attack?",
    choices: [
      "A ransomware attachment encrypts files on the recipient’s machine",
      "A denial-of-service attack targets the public website",
      "A phishing email tricks users into revealing login credentials",
      "A flood of automated emails overwhelms the inbox, hiding legitimate messages"
    ],
    answer: 3,
    explain: "A mail bomb overwhelms an inbox or server with a massive volume of messages so real communication is buried or systems choke.",
    why_others_are_not_correct: {
      0: "Ransomware is malicious encryption, not inbox flooding.",
      1: "That’s a network/website DoS, not an email flood.",
      2: "Phishing is credential theft, not volume-based overload."
    }
  },
  {
    q: "Your team currently uses magnetic medium for secondary storage and needs to move forward with new technology. Which is the best modern storage solution?",
    choices: [
      "Optical storage using Blu-ray discs",
      "Network Attached Storage (NAS) with SSD arrays",
      "Tape backup systems with robotic loaders",
      "Solid-State Drives (SSD) using flash memory"
    ],
    answer: 1,
    explain: "NAS with SSD arrays gives you networked, fast, high-reliability secondary storage using modern solid-state media.",
    why_others_are_not_correct: {
      0: "Blu-ray is removable optical media, slow and manual for modern ops.",
      2: "Tape is for archival/long-term cold backup, not active secondary storage.",
      3: "Bare SSDs are fast, yes, but the scenario is about a shared secondary storage solution for the org, not just local disks."
    }
  },
  {
    q: "Leadership asks you to implement loose coupling to improve performance and maintainability (excluding event-driven architecture). Which approach is best?",
    choices: [
      "RESTful APIs with stateless communication",
      "gRPC with strongly typed service contracts",
      "Shared configuration files across services",
      "Direct database access between microservices"
    ],
    answer: 0,
    explain: "Stateless REST APIs reduce dependencies, make services easier to replace or scale, and avoid tight runtime binding.",
    why_others_are_not_correct: {
      1: "gRPC can still be decoupled, but it often implies tighter service-to-service contracts and stronger coupling than a simple stateless REST boundary in many orgs.",
      2: "Sharing config files creates hidden coupling — services depend on the same file format/location.",
      3: "Letting services poke each other’s database is extremely tight coupling. If one DB changes, everything breaks."
    }
  },
  {
    q: "Leadership at Company X wants devices across campus to connect seamlessly and reliably. Which solution best achieves this?",
    choices: [
      "Wireless Access Points (WAPs)",
      "Network Switches",
      "RFID replicators",
      "USB Hot Spots"
    ],
    answer: 0,
    explain: "For campus-wide roaming and coverage, a well-designed wireless LAN with strategically placed access points is the standard solution.",
    why_others_are_not_correct: {
      1: "Switches are wired infrastructure for back-end connectivity, not the radio layer users roam on.",
      2: "RFID replicators aren’t for general data networking. That’s asset tracking / tags, not Wi-Fi.",
      3: "USB hotspots are ad hoc, single-user/limited range solutions — not campus infrastructure."
    }
  },
  {
    q: "Which concept in operations management best describes the mechanism by which enterprise IT systems convert inputs like data, infrastructure, and human expertise into deliverable services?",
    choices: [
      "Control Process",
      "Transformation Process",
      "Feedback Mechanism",
      "Process Mapping"
    ],
    answer: 1,
    explain: "The Transformation Process is literally ‘we take inputs and turn them into outputs.’ In IT terms: hardware + data + people ⇒ services delivered.",
    why_others_are_not_correct: {
      0: "Control is about monitoring and correcting, not doing the work.",
      2: "Feedback is performance info used to adjust the process, not the process itself.",
      3: "Process mapping is documenting the workflow, not performing it."
    }
  },
  {
    q: "Quantivus’s KM system flags anomalies but lacks context tags. What’s the most likely consequence for their knowledge management cycle?",
    choices: [
      "Increased data redundancy across silos, leading to inefficient storage and retrieval processes",
      "Enhanced data security but diminished accessibility for cross-functional research teams",
      "Improved data mining accuracy but compromised knowledge validation and verification protocols",
      "Reduced ability to transform raw data into actionable insights due to missing semantic enrichment"
    ],
    answer: 3,
    explain: "If you flag anomalies but don’t tag context, you can’t interpret meaning. Without semantic enrichment, the org struggles to convert raw data into usable, decision-ready knowledge.",
    why_others_are_not_correct: {
      0: "Redundancy/siloing is more about bad integration and duplication, not missing semantic context.",
      1: "Security and accessibility aren’t automatically harmed by missing tags. The problem here is meaning, not access.",
      2: "Verification/validation is important, but the core blocker in this scenario is turning findings into insight, not checking correctness."
    }
  }
];
