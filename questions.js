const questions = [
  {
    q: "Which of the following best describes the value proposition of the AWS Cloud?",
    choices: [
      "Fixed hardware and software costs",
      "Reduced flexibility and scalability",
      "Pay-as-you-go pricing model",
      "Increased time for deployment"
    ],
    answer: 2,
    explain: "AWS replaces large upfront capital expense with variable, usage-based pricing. You pay only for what you actually consume instead of pre-buying hardware.",
    why_others_are_not_correct: {
      0: "Fixed hardware/software costs describe traditional on-prem buying, not cloud consumption.",
      1: "AWS increases flexibility and scalability — you can scale up/down quickly — so 'reduced flexibility' is the opposite of a benefit.",
      3: "AWS speeds up deployment. You can launch resources in minutes, so it does not increase deployment time."
    }
  },
  {
    q: "Which deployment model describes a company running some workloads on-premises and some in the cloud?",
    choices: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    answer: 2,
    explain: "Hybrid cloud means part of the workload is in your own data center and part is in a public cloud, working together.",
    why_others_are_not_correct: {
      0: "Public cloud means everything is running on infrastructure owned by the provider, not split with on-prem.",
      1: "Private cloud is dedicated to one organization, often on-prem or in a dedicated facility — not mixed with public cloud.",
      3: "Community cloud is shared by organizations with similar requirements (like government or healthcare), not specifically a split of on-prem and public cloud."
    }
  },
  {
    q: "What is the shared responsibility model in AWS and which part remains with the customer?",
    choices: [
      "AWS is responsible for everything, including customer data",
      "The customer is responsible for physical security of AWS data centers",
      "AWS is responsible for security OF the cloud infrastructure; the customer is responsible for security IN the cloud",
      "Customers only pay when AWS infrastructure fails"
    ],
    answer: 2,
    explain: "AWS secures the underlying cloud (facilities, hardware, core services). You secure what you put in it (data, IAM, configs, patching your OS/apps).",
    why_others_are_not_correct: {
      0: "AWS is not responsible for your data, IAM decisions, or app configuration. You are.",
      1: "Physical security of AWS data centers is handled by AWS, not customers.",
      3: "Billing has nothing to do with the shared responsibility model. The model is about dividing security duties."
    }
  },
  {
    q: "Which of the following AWS services is object storage and is appropriate for storing unstructured data at scale?",
    choices: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon RDS"
    ],
    answer: 1,
    explain: "Amazon S3 is AWS’s object storage service, built for virtually unlimited unstructured data with very high durability.",
    why_others_are_not_correct: {
      0: "Amazon EBS is block storage (like a disk for an EC2 instance), not large-scale object storage.",
      2: "Amazon EFS is managed shared file storage, not object storage.",
      3: "Amazon RDS is a managed relational database service, not object storage."
    }
  },
  {
    q: "What is the primary benefit of using multiple Availability Zones (AZs) in your architecture?",
    choices: [
      "Lower latency within a single region",
      "Reduced AWS service costs",
      "Fault tolerance and high availability",
      "Eliminates the need for backups"
    ],
    answer: 2,
    explain: "Spreading resources across multiple AZs protects you if one AZ goes down. That boosts resilience and uptime.",
    why_others_are_not_correct: {
      0: "Latency may improve sometimes, but high availability is the main reason you design across AZs.",
      1: "Multi-AZ usually increases reliability, not necessarily lowers cost.",
      3: "High availability is not the same as backup. You still need backups for disaster recovery and data integrity."
    }
  },
  {
    q: "Which of the following is NOT one of the six commonly cited advantages of the AWS Cloud?",
    choices: [
      "Trade capital expense for variable expense",
      "Benefit from massive economies of scale",
      "Stop guessing capacity",
      "Manual infrastructure provisioning"
    ],
    answer: 3,
    explain: "‘Manual infrastructure provisioning’ is the opposite of what AWS promotes. Cloud computing emphasizes automation, agility, and rapid provisioning.",
    why_others_are_not_correct: {
      0: "Shifting from CapEx to OpEx is a core cloud advantage.",
      1: "Using AWS’s scale drives lower cost per unit of compute/storage.",
      2: "You don’t have to guess and overbuy capacity up front; you scale on demand. That’s a listed benefit."
    }
  },
  {
    q: "If a small startup is comfortable with community support and only needs basic coverage, which AWS Support plan is most appropriate?",
    choices: [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    answer: 3,
    explain: "The Basic support plan includes account/billing support and access to documentation and forums. It’s fine for very small/low-risk use cases.",
    why_others_are_not_correct: {
      0: "Enterprise is the highest tier, meant for mission-critical workloads and includes a Technical Account Manager.",
      1: "Business support includes 24/7 access to engineers and faster response times — more than 'basic coverage.'",
      2: "Developer support is paid and provides technical guidance beyond just community/forum-level help."
    }
  },
  {
    q: "Which of these best describes the pay-as-you-go pricing model in AWS?",
    choices: [
      "You pay a fixed monthly fee regardless of usage",
      "You pay only for the resources you consume, with no long-term commitments by default",
      "You must commit to a 3-year term to receive any benefit",
      "You pay up front for all resources regardless of usage"
    ],
    answer: 1,
    explain: "In AWS, you generally pay for what you actually use. No need to pre-purchase large capacity unless you want reserved discounts.",
    why_others_are_not_correct: {
      0: "A flat fee regardless of usage is more like old-school hosting, not cloud consumption billing.",
      2: "Multi-year commitments (like Reserved Instances or Savings Plans) are optional discounts, not required.",
      3: "Prepaying everything up front is the opposite of on-demand pricing."
    }
  },
  {
    q: "Which of the following best describes a public subnet in a VPC?",
    choices: [
      "A subnet that has no route to an Internet Gateway",
      "A subnet that has a route to an Internet Gateway and whose instances can reach the internet (if security allows)",
      "A subnet that is automatically encrypted at rest",
      "A subnet that is only accessible via VPN from on-premises"
    ],
    answer: 1,
    explain: "A subnet is considered public if its route table points to an Internet Gateway, allowing instances to have direct internet access (with proper security).",
    why_others_are_not_correct: {
      0: "No route to an Internet Gateway = private subnet, not public.",
      2: "Encryption isn’t what defines public vs private.",
      3: "VPN-only access sounds like a private subnet with site-to-site connectivity."
    }
  },
  {
    q: "When should you choose a managed database service such as Amazon RDS instead of running your database on an EC2 instance?",
    choices: [
      "When you want full control over the OS and database engine updates",
      "When you want AWS to handle tasks such as backups, patching, monitoring, and scaling",
      "When your database is so custom that no managed service can support it",
      "When cost is the only factor and you don’t care about reliability"
    ],
    answer: 1,
    explain: "RDS handles undifferentiated heavy lifting: backups, patching, monitoring, scaling. You focus on using the database, not babysitting it.",
    why_others_are_not_correct: {
      0: "If you demand full low-level control, you usually self-host on EC2, not RDS.",
      2: "Extremely custom databases are actually a reason to avoid RDS, not choose it.",
      3: "Cost-only thinking ignores the managed reliability and ops value that RDS provides."
    }
  },
  {
    q: "Which AWS service allows you to run code without provisioning or managing servers?",
    choices: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Elastic Beanstalk"
    ],
    answer: 1,
    explain: "AWS Lambda is serverless: you provide code, and AWS runs it on demand without you managing servers.",
    why_others_are_not_correct: {
      0: "EC2 is virtual machines you manage yourself.",
      2: "ECS is container orchestration; unless you pair it with Fargate, you manage infrastructure.",
      3: "Elastic Beanstalk automates provisioning for apps, but you’re still aware of servers/instances underneath."
    }
  },
  {
    q: "What is Amazon CloudFront used for?",
    choices: [
      "Running virtual machines",
      "Distributing content globally with low latency",
      "Managing security groups",
      "Storing data in object format"
    ],
    answer: 1,
    explain: "CloudFront is AWS’s global CDN. It caches and serves content from edge locations to reduce latency for users around the world.",
    why_others_are_not_correct: {
      0: "Running virtual machines is what EC2 is for.",
      2: "Security groups are managed in VPC/EC2, not CloudFront.",
      3: "Object storage is handled by S3; CloudFront sits in front to accelerate delivery."
    }
  },
  {
    q: "Which AWS service provides block-level storage volumes for use with EC2 instances?",
    choices: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    answer: 1,
    explain: "Amazon EBS provides persistent block storage volumes that act like virtual hard drives for EC2 instances.",
    why_others_are_not_correct: {
      0: "S3 is object storage, not block storage.",
      2: "EFS is managed shared file storage (NFS-style), not block storage.",
      3: "Storage Gateway is a hybrid storage bridge for on-prem, not native EC2 block volumes."
    }
  },
  {
    q: "What does Amazon Route 53 primarily provide?",
    choices: [
      "Domain name system (DNS) and domain registration",
      "Virtual private networking",
      "Automatic scaling of EC2 instances",
      "Firewall protection for networks"
    ],
    answer: 0,
    explain: "Route 53 is AWS’s scalable DNS and domain registration service. It routes end users to applications.",
    why_others_are_not_correct: {
      1: "VPN and private connectivity use services like Site-to-Site VPN or Direct Connect, not Route 53.",
      2: "Auto Scaling handles scaling, not Route 53.",
      3: "Network firewalls are handled by things like security groups, NACLs, Network Firewall, WAF — not Route 53."
    }
  },
  {
    q: "Which AWS service can automatically adjust compute capacity to maintain steady, predictable performance?",
    choices: [
      "Amazon CloudWatch",
      "AWS Auto Scaling",
      "Amazon Inspector",
      "AWS Backup"
    ],
    answer: 1,
    explain: "AWS Auto Scaling monitors demand and adds or removes capacity (like EC2 instances) to keep performance steady and avoid overpaying.",
    why_others_are_not_correct: {
      0: "CloudWatch monitors and alarms, but doesn’t itself scale capacity.",
      2: "Inspector scans for security issues, not performance scaling.",
      3: "AWS Backup centralizes backup/restore, not scaling."
    }
  },
  {
    q: "What is the primary purpose of Amazon VPC (Virtual Private Cloud)?",
    choices: [
      "Providing cloud-based storage for files",
      "Launching virtual servers in an isolated network environment",
      "Monitoring AWS resources",
      "Automating server patching"
    ],
    answer: 1,
    explain: "A VPC lets you define your own logically isolated section of the AWS Cloud, with control over IP ranges, subnets, routing, and security.",
    why_others_are_not_correct: {
      0: "Object/file storage is S3/EFS/etc., not VPC.",
      2: "Monitoring is CloudWatch’s job, not VPC’s.",
      3: "Automated patching is part of Systems Manager, not what defines a VPC."
    }
  },
  {
    q: "Which AWS service provides detailed monitoring and observability for applications and resources?",
    choices: [
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Organizations"
    ],
    answer: 0,
    explain: "Amazon CloudWatch collects metrics, logs, and events so you can see performance and set alarms.",
    why_others_are_not_correct: {
      1: "Trusted Advisor gives best-practice recommendations, not live telemetry dashboards.",
      2: "Config tracks configuration and compliance, not runtime performance metrics.",
      3: "Organizations manages multiple AWS accounts and billing, not observability."
    }
  },
  {
    q: "What is the main benefit of AWS Regions and Availability Zones architecture?",
    choices: [
      "Higher operational costs",
      "Improved availability and fault tolerance",
      "Simpler pricing",
      "Automatic encryption"
    ],
    answer: 1,
    explain: "By spreading workloads across multiple AZs (and even Regions), you can survive failures and keep services available.",
    why_others_are_not_correct: {
      0: "The goal is resilience, not cost inflation.",
      2: "Pricing may differ by Region, but pricing simplicity is not the architectural benefit.",
      3: "Encryption is a separate security feature, not the core point of multi-AZ design."
    }
  },
  {
    q: "Which service helps you identify under-utilized or unused AWS resources to reduce costs?",
    choices: [
      "AWS Cost Explorer",
      "AWS CloudFormation",
      "AWS Auto Scaling",
      "Amazon EC2"
    ],
    answer: 0,
    explain: "AWS Cost Explorer helps visualize spend and spot idle or underused resources so you can optimize cost.",
    why_others_are_not_correct: {
      1: "CloudFormation is infrastructure as code, not a cost analysis tool.",
      2: "Auto Scaling changes capacity based on load, but doesn’t report historical waste.",
      3: "EC2 is compute itself, not a cost optimization dashboard."
    }
  },
  {
    q: "What does AWS Trusted Advisor provide?",
    choices: [
      "Real-time guidance to optimize AWS resources for cost, security, and performance",
      "A service that creates EC2 instances automatically",
      "A monitoring dashboard for EC2 health",
      "A firewall for your VPC"
    ],
    answer: 0,
    explain: "Trusted Advisor analyzes your environment and gives recommendations on cost savings, security hardening, performance, and fault tolerance.",
    why_others_are_not_correct: {
      1: "It doesn't just spin up EC2 automatically.",
      2: "It’s not just an EC2 health dashboard — that’s more CloudWatch.",
      3: "Firewalling is handled by things like security groups, NACLs, WAF, etc., not Trusted Advisor."
    }
  },
  {
    q: "Which AWS service helps you manage multiple AWS accounts centrally?",
    choices: [
      "AWS CloudTrail",
      "AWS Organizations",
      "AWS Control Tower",
      "AWS IAM"
    ],
    answer: 1,
    explain: "AWS Organizations lets you group accounts, apply policies, and consolidate billing across them.",
    why_others_are_not_correct: {
      0: "CloudTrail records API calls for auditing, not multi-account governance.",
      2: "Control Tower builds on Organizations to set up a governed landing zone, but Organizations is the core multi-account management service.",
      3: "IAM handles identity and permissions within or across accounts, but not consolidated billing or org-wide policy at the account level."
    }
  },
  {
    q: "Which AWS service provides infrastructure as code (IaC) capabilities?",
    choices: [
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Cloud9",
      "AWS CodeCommit"
    ],
    answer: 0,
    explain: "CloudFormation lets you define your infrastructure in templates and deploy it consistently and repeatedly.",
    why_others_are_not_correct: {
      1: "CloudTrail is for auditing API calls.",
      2: "Cloud9 is a cloud IDE.",
      3: "CodeCommit is source control, not IaC."
    }
  },
  {
    q: "Which AWS service can be used to create isolated environments for running containers?",
    choices: [
      "Amazon ECS",
      "AWS Lambda",
      "AWS Batch",
      "Amazon Lightsail"
    ],
    answer: 0,
    explain: "Amazon ECS is AWS’s managed container orchestration service for running Docker containers in controlled, isolated environments.",
    why_others_are_not_correct: {
      1: "Lambda runs short-lived functions, not long-running containerized services (unless using container images just as a packaging format).",
      2: "AWS Batch is focused on batch jobs, not general-purpose container orchestration for microservices.",
      3: "Lightsail is for simple VPS-style stacks, not full container orchestration at scale."
    }
  },
  {
    q: "Which AWS service provides fully managed NoSQL databases?",
    choices: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    answer: 1,
    explain: "Amazon DynamoDB is a fully managed NoSQL key-value and document database designed for high performance at scale.",
    why_others_are_not_correct: {
      0: "RDS is for relational (SQL) databases.",
      2: "Aurora is a high-performance relational engine compatible with MySQL/PostgreSQL, not NoSQL.",
      3: "Redshift is a data warehouse for analytics, not a NoSQL store."
    }
  },
  {
    q: "What AWS service provides a simple interface for object lifecycle management, versioning, and replication?",
    choices: [
      "Amazon EBS",
      "Amazon S3",
      "AWS Storage Gateway",
      "Amazon FSx"
    ],
    answer: 1,
    explain: "Amazon S3 supports versioning, lifecycle rules, and cross-region replication — it’s built for object storage management at scale.",
    why_others_are_not_correct: {
      0: "EBS is block storage for EC2 instances and doesn’t natively manage object lifecycle/versioning policies.",
      2: "Storage Gateway connects on-prem storage to AWS but isn’t the native object lifecycle engine.",
      3: "FSx is a managed file system offering (e.g. Windows FS, Lustre), not S3-style object storage."
    }
  },
  {
    q: "What is Amazon EC2 primarily used for?",
    choices: [
      "Running virtual servers in the cloud",
      "Hosting databases only",
      "Monitoring traffic flow",
      "Serving as a CDN"
    ],
    answer: 0,
    explain: "Amazon EC2 is AWS’s core compute service for launching and managing virtual server instances.",
    why_others_are_not_correct: {
      1: "You can host databases on EC2, but EC2 is general-purpose compute — not just databases.",
      2: "Traffic flow monitoring is more of a networking/logging/CloudWatch use case.",
      3: "A CDN is CloudFront’s role, not EC2’s."
    }
  },
  {
    q: "What is the main advantage of Amazon RDS over self-managed databases on EC2?",
    choices: [
      "Manual patching and backup control",
      "Fully managed automation of database administration tasks",
      "Requires more setup for scaling",
      "No high availability options"
    ],
    answer: 1,
    explain: "RDS automates undifferentiated tasks like backups, patching, monitoring, replication, and scaling so you don’t have to be a full-time DBA.",
    why_others_are_not_correct: {
      0: "Manual patch/backup is exactly what RDS tries to remove from your workload.",
      2: "Scaling is typically easier with RDS (instance class changes, read replicas, Multi-AZ).",
      3: "RDS offers high availability (for example Multi-AZ), so saying it has no HA is incorrect."
    }
  },
  {
    q: "Which AWS service helps you view and audit API activity across your AWS account?",
    choices: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS CloudFormation",
      "AWS GuardDuty"
    ],
    answer: 1,
    explain: "AWS CloudTrail records API calls and console activity in your account for governance, compliance, and auditing.",
    why_others_are_not_correct: {
      0: "AWS Config tracks configuration state/history, not every API call.",
      2: "CloudFormation provisions infrastructure from templates, not audit activity.",
      3: "GuardDuty analyzes data sources for threats, but CloudTrail is the actual API activity log."
    }
  },
  {
    q: "Which service allows you to automatically deploy and manage applications in multiple environments such as dev, test, and production?",
    choices: [
      "AWS Elastic Beanstalk",
      "AWS CodePipeline",
      "AWS Cloud9",
      "Amazon ECS"
    ],
    answer: 0,
    explain: "Elastic Beanstalk deploys your app and handles load balancing, scaling, health monitoring, and environment setup for you across stages like dev/test/prod.",
    why_others_are_not_correct: {
      1: "CodePipeline automates delivery pipelines, but it’s not the full app environment provisioning/management layer.",
      2: "Cloud9 is a browser-based IDE, not a deployment/orchestration service.",
      3: "ECS runs containers, but Beanstalk is the 'push code, get environment' service called out here."
    }
  },
  {
    q: "What AWS service can automatically distribute incoming application traffic across multiple targets to improve performance?",
    choices: [
      "Amazon Route 53",
      "Elastic Load Balancing (ELB)",
      "AWS Transit Gateway",
      "AWS CloudFront"
    ],
    answer: 1,
    explain: "Elastic Load Balancing sends traffic to multiple targets (EC2 instances, containers, etc.) to increase availability and performance.",
    why_others_are_not_correct: {
      0: "Route 53 is DNS/routing at the domain level, not live load balancing across instances in your app tier.",
      2: "Transit Gateway connects VPCs and networks, not balances app traffic.",
      3: "CloudFront caches content at edge locations (CDN). It's not the per-target load balancer for your backend."
    }
  },
  {
    q: "Which AWS service helps detect security threats using machine learning to continuously monitor network activity and account behavior?",
    choices: [
      "AWS Shield",
      "AWS GuardDuty",
      "AWS WAF",
      "AWS Security Hub"
    ],
    answer: 1,
    explain: "Amazon GuardDuty uses machine learning and threat intel to detect suspicious activity in things like VPC flow logs, DNS logs, and CloudTrail events.",
    why_others_are_not_correct: {
      0: "AWS Shield is focused on DDoS protection, not broad behavioral threat detection.",
      2: "AWS WAF filters/block HTTP(S) requests based on rules, not ML-driven account behavior analytics.",
      3: "AWS Security Hub aggregates findings; it’s more of a centralized dashboard than the engine doing raw anomaly detection."
    }
  },
  {
    q: "What is the main purpose of AWS Identity and Access Management (IAM)?",
    choices: [
      "To encrypt objects in Amazon S3",
      "To control access to AWS resources securely",
      "To monitor EC2 CPU usage",
      "To distribute traffic across Regions"
    ],
    answer: 1,
    explain: "IAM lets you define who (user, role, service) can access what resources, and under what conditions.",
    why_others_are_not_correct: {
      0: "S3 encryption is handled by S3/KMS/etc., not IAM alone.",
      2: "CPU monitoring is a CloudWatch job.",
      3: "Traffic distribution across Regions is a networking/routing function, not IAM."
    }
  },
  {
    q: "Which service provides managed data warehousing for large-scale analytics?",
    choices: [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB"
    ],
    answer: 0,
    explain: "Amazon Redshift is a fully managed data warehouse for analytics across huge datasets.",
    why_others_are_not_correct: {
      1: "Aurora is an OLTP-style relational database, not a data warehouse.",
      2: "RDS is general managed relational DB service, not specialized columnar analytics.",
      3: "DynamoDB is NoSQL key-value/document, not an analytics warehouse."
    }
  },
  {
    q: "What AWS service provides an online management console for creating and managing AWS resources?",
    choices: [
      "AWS Management Console",
      "AWS CLI",
      "AWS SDK",
      "AWS CloudShell"
    ],
    answer: 0,
    explain: "The AWS Management Console is the browser-based GUI for viewing and configuring services.",
    why_others_are_not_correct: {
      1: "The CLI is command-line access, not a point-and-click web console.",
      2: "SDKs are language libraries for programmatic access, not a console.",
      3: "CloudShell is a browser shell environment, but the full graphical dashboard is the Console."
    }
  },
  {
    q: "Which AWS service allows you to archive infrequently accessed data at the lowest cost?",
    choices: [
      "Amazon S3 Glacier",
      "Amazon EFS",
      "Amazon FSx",
      "Amazon RDS"
    ],
    answer: 0,
    explain: "Amazon S3 Glacier (and Glacier Deep Archive) is designed for long-term, low-cost archival storage.",
    why_others_are_not_correct: {
      1: "EFS is for frequently accessed shared files, not cold archive.",
      2: "FSx is managed file systems (like Windows/Lustre), not cold archival object storage.",
      3: "RDS is a relational database service, not archival storage."
    }
  },
  {
    q: "What feature of Amazon S3 helps ensure durability of stored data?",
    choices: [
      "Multi-AZ replication and data redundancy",
      "Single-instance storage per object",
      "Manual snapshots by the user",
      "Limited availability zones"
    ],
    answer: 0,
    explain: "S3 redundantly stores objects across multiple devices and facilities (often across Availability Zones) to achieve extremely high durability.",
    why_others_are_not_correct: {
      1: "If each object lived on a single device, durability would be terrible. S3 intentionally avoids that.",
      2: "You don’t rely solely on manual snapshots for durability — redundancy is built in.",
      3: "Limiting to one AZ would hurt durability. S3’s durability comes from spreading data out."
    }
  },
  {
    q: "Which AWS tool provides a visual way to estimate monthly AWS costs based on your architecture?",
    choices: [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    answer: 0,
    explain: "The AWS Pricing Calculator lets you model an architecture and forecast expected monthly costs before you deploy.",
    why_others_are_not_correct: {
      1: "AWS Budgets is for setting spend thresholds/alerts once you’re running, not upfront estimation.",
      2: "Trusted Advisor gives best-practice recommendations, not interactive cost modeling.",
      3: "Cost Explorer analyzes historical spend trends, not hypothetical future builds."
    }
  },
  {
    q: "What does the AWS Free Tier allow new users to do?",
    choices: [
      "Run AWS services for unlimited time for free",
      "Experiment with AWS services within specific limits for free",
      "Access AWS premium support for free",
      "Receive one-on-one AWS consulting sessions"
    ],
    answer: 1,
    explain: "The Free Tier lets you try certain services at no cost, within usage limits (often for 12 months for new accounts).",
    why_others_are_not_correct: {
      0: "It’s not unlimited or forever. There are limits.",
      2: "Premium (Developer/Business/Enterprise) support is paid.",
      3: "Free Tier does not include personal consulting sessions."
    }
  },
  {
    q: "Which AWS service enables you to use pre-configured templates to deploy popular software stacks such as WordPress or LAMP?",
    choices: [
      "Amazon Lightsail",
      "AWS CodeDeploy",
      "AWS Elastic Beanstalk",
      "AWS CloudFormation"
    ],
    answer: 0,
    explain: "Amazon Lightsail gives you simple VPS-style instances with blueprints for common stacks like WordPress, LAMP, etc.",
    why_others_are_not_correct: {
      1: "CodeDeploy automates code deployment, but it’s not a one-click WordPress/LAMP launcher.",
      2: "Elastic Beanstalk manages web app environments, but Lightsail is the one specifically marketed for quick preset app stacks.",
      3: "CloudFormation is IaC templates (infrastructure definition), not the simplified app blueprint experience aimed at small deployments."
    }
  },
  {
    q: "Which AWS service provides centralized security and compliance visibility across multiple AWS accounts?",
    choices: [
      "AWS Shield",
      "AWS Security Hub",
      "AWS WAF",
      "AWS Config"
    ],
    answer: 1,
    explain: "AWS Security Hub aggregates security findings and compliance status from multiple services and accounts into one dashboard.",
    why_others_are_not_correct: {
      0: "AWS Shield protects against DDoS; it’s not a compliance dashboard.",
      2: "AWS WAF is a web application firewall, not a multi-account security posture view.",
      3: "AWS Config tracks configuration state and compliance per resource, but Security Hub is the central roll-up for org-wide visibility."
    }
  },
  {
    q: "Which AWS service can help you protect web applications from common exploits such as SQL injection and cross-site scripting?",
    choices: [
      "AWS Shield",
      "AWS WAF (Web Application Firewall)",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explain: "AWS WAF lets you define rules to allow/block traffic based on patterns like SQL injection or XSS attempts.",
    why_others_are_not_correct: {
      0: "AWS Shield focuses on DDoS mitigation, not filtering web app request payloads.",
      2: "AWS Config is for configuration compliance, not HTTP request inspection.",
      3: "GuardDuty detects suspicious behavior, but it doesn’t sit inline and block malicious requests at the HTTP layer."
    }
  },
  {
    q: "Which AWS service provides DDoS protection at the network and application layers?",
    choices: [
      "AWS Firewall Manager",
      "AWS Shield",
      "AWS WAF",
      "Amazon CloudFront"
    ],
    answer: 1,
    explain: "AWS Shield is the managed DDoS protection service that helps defend against large-scale network and application layer attacks.",
    why_others_are_not_correct: {
      0: "Firewall Manager centralizes policy management for services like WAF and Shield, but it’s not itself the DDoS protection engine.",
      2: "AWS WAF filters HTTP(S) requests for app-layer exploits but is not full DDoS mitigation across layers.",
      3: "CloudFront is a CDN. While it can help absorb traffic, its primary purpose is content delivery, not being your DDoS service."
    }
  },
  {
    q: "What does AWS CloudTrail primarily record?",
    choices: [
      "Resource utilization metrics",
      "All API calls and user activity across your AWS account",
      "Errors in EC2 instances",
      "S3 storage metrics only"
    ],
    answer: 1,
    explain: "CloudTrail logs API activity (who did what, from where, and when) across your AWS environment for auditing and compliance.",
    why_others_are_not_correct: {
      0: "Resource utilization metrics are handled by CloudWatch.",
      2: "CloudTrail isn’t just about EC2 errors; it covers API calls across services.",
      3: "It’s not limited to S3 metrics — it spans the whole account’s API activity."
    }
  },
  {
    q: "Which AWS service provides a unified dashboard for monitoring key operational metrics and setting alarms?",
    choices: [
      "Amazon CloudWatch",
      "AWS Config",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    answer: 0,
    explain: "CloudWatch collects metrics and logs from AWS services and lets you build dashboards and alarms to watch health and performance.",
    why_others_are_not_correct: {
      1: "Config tracks configuration and compliance drift, not runtime health dashboards.",
      2: "Inspector scans for vulnerabilities and security findings, not general performance metrics.",
      3: "Trusted Advisor gives optimization recommendations, not live metric dashboards/alarms."
    }
  },
  {
    q: "Which AWS service helps automate security assessments to improve compliance of applications?",
    choices: [
      "Amazon Inspector",
      "AWS Config",
      "AWS Shield",
      "AWS Artifact"
    ],
    answer: 0,
    explain: "Amazon Inspector runs automated security assessments on EC2 instances and container images and reports findings to help you fix issues.",
    why_others_are_not_correct: {
      1: "Config tracks resource configuration and compliance rules but is not the automated vuln scanner.",
      2: "Shield is DDoS protection, not app security assessment.",
      3: "Artifact is where you download AWS compliance reports and agreements, not where you scan your workloads."
    }
  },
  {
    q: "Which AWS service gives on-demand access to compliance reports and agreements such as ISO 27001 or SOC 2?",
    choices: [
      "AWS Artifact",
      "AWS Config",
      "AWS Audit Manager",
      "AWS Security Hub"
    ],
    answer: 0,
    explain: "AWS Artifact is the self-service portal to download AWS compliance reports (SOC, ISO, etc.) and review certain agreements.",
    why_others_are_not_correct: {
      1: "Config audits configuration changes for compliance, but it’s not where you pull SOC/ISO reports.",
      2: "Audit Manager helps automate evidence collection for audits; it’s not the report download portal.",
      3: "Security Hub centralizes security findings, not formal compliance documents from AWS."
    }
  },
  {
    q: "Which AWS service automatically inventories and tracks configuration changes to AWS resources?",
    choices: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Systems Manager",
      "AWS Organizations"
    ],
    answer: 1,
    explain: "AWS Config records and evaluates configurations of AWS resources over time so you can see what changed and when.",
    why_others_are_not_correct: {
      0: "CloudTrail logs API calls, but doesn’t continuously evaluate resource configuration state against rules.",
      2: "Systems Manager is about operational control/patching/automation on instances, not config timeline tracking.",
      3: "Organizations is multi-account governance/billing, not per-resource config tracking."
    }
  },
  {
    q: "Which service provides a central place to view AWS account spending, forecasts, and set cost thresholds?",
    choices: [
      "AWS Billing Dashboard",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    answer: 2,
    explain: "AWS Budgets lets you define cost and usage budgets, get alerts when you approach/exceed them, and view forecasted spend.",
    why_others_are_not_correct: {
      0: "The Billing Dashboard shows charges, but doesn’t give full alerting/threshold control.",
      1: "Cost Explorer analyzes past spend trends, not alert thresholds.",
      3: "The Pricing Calculator estimates future cost before deployment, not monitors active spend."
    }
  },
  {
    q: "Which AWS support plan provides a Technical Account Manager (TAM) and access to 24/7 concierge support?",
    choices: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    answer: 3,
    explain: "The Enterprise support plan includes a dedicated Technical Account Manager, concierge-level assistance, and 24/7 support for mission-critical workloads.",
    why_others_are_not_correct: {
      0: "Basic only covers account/billing support and community forums, no TAM.",
      1: "Developer offers guidance but no TAM and not full concierge-level SLA.",
      2: "Business offers 24/7 access to engineers, but a dedicated TAM is an Enterprise feature."
    }
  },
  {
    q: "Which AWS service provides a simple and quick way to deploy static websites such as portfolios or documentation?",
    choices: [
      "Amazon S3 Static Website Hosting",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "Amazon ECS"
    ],
    answer: 0,
    explain: "Amazon S3 static website hosting lets you serve HTML/CSS/JS directly from S3 with almost no infrastructure to manage.",
    why_others_are_not_correct: {
      1: "Elastic Beanstalk is geared toward web apps that run code/compute, not plain static files.",
      2: "Lightsail can host sites, but S3 static hosting is the simplest/cheapest path for pure static content.",
      3: "ECS is container orchestration — way more complex than needed for a static site."
    }
  }
];
