const questions = [
  {
    q: "1. Which of the following best describes the value proposition of the AWS Cloud?",
    choices: [
      "Fixed hardware and software costs",
      "Reduced flexibility and scalability",
      "Pay-as-you-go pricing model",
      "Increased time for deployment"
    ],
    answer: 2,
    explanations: {
      0: "Incorrect. ‘Fixed hardware and software costs’ implies you’re locked into capital expenditure and cannot scale up or down — which is the opposite of AWS’s pay-as-you-go model.",
      1: "Incorrect. ‘Reduced flexibility and scalability’ is contrary to one of the key benefits of AWS, which is increased flexibility and scalability.",
      2: "Correct. AWS’s value proposition strongly emphasises replacing large upfront capital cost with variable, usage-based pricing: pay only for what you use.",
      3: "Incorrect. AWS enables faster deployment of resources, so ‘increased time for deployment’ is wrong — time to deploy actually decreases."
    }
  },
  {
    q: "2. Which deployment model describes a company running some workloads on-premises and some in the cloud?",
    choices: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    answer: 2,
    explanations: {
      0: "Incorrect. ‘Public cloud’ refers entirely to infrastructure provided by a cloud vendor, not combined with on-premises workloads.",
      1: "Incorrect. ‘Private cloud’ refers to a cloud deployment solely for one organization (often on-premises or dedicated), not a mixed model.",
      2: "Correct. ‘Hybrid cloud’ is the model where some workloads run in the customer’s on-premises data center and some in the cloud, and they work together.",
      3: "Incorrect. ‘Community cloud’ refers to shared infrastructure for a community of organisations with shared concerns (regulation, security), not specifically on-prem plus cloud mix."
    }
  },
  {
    q: "3. What is the shared responsibility model in AWS and which part remains with the customer?",
    choices: [
      "AWS is responsible for everything, including customer data",
      "The customer is responsible for physical security of AWS data centers",
      "AWS is responsible “of” the cloud infrastructure; the customer is responsible “in” the cloud",
      "Customers only pay when AWS infrastructure fails"
    ],
    answer: 2,
    explanations: {
      0: "Incorrect. AWS is *not* responsible for everything — customers retain responsibility for their data, configurations, access management etc.",
      1: "Incorrect. Physical security of AWS data centres is AWS’s responsibility, not the customer’s.",
      2: "Correct. The accepted phrasing: AWS manages security *of* the cloud (infrastructure, hardware, facilities) and the customer manages security *in* the cloud (data, applications, access).",
      3: "Incorrect. Payment terms aren’t the focus of the shared responsibility model — it’s about who is responsible for what in the cloud environment."
    }
  },
  {
    q: "4. Which of the following AWS services is object storage and is appropriate for storing unstructured data and “store at scale” use cases?",
    choices: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon RDS"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon EBS is block‐level storage (like a virtual disk attached to an EC2 instance), not object storage for massive scale of unstructured data.",
      1: "Correct. Amazon S3 (Simple Storage Service) is AWS’s object storage service built for storing and retrieving any amount of data, unstructured, with high durability.",
      2: "Incorrect. Amazon EFS is a managed file system (file storage) for multiple instances, not object storage optimized for massive unstructured data.",
      3: "Incorrect. Amazon RDS is a managed relational database service, not an object storage service."
    }
  },
  {
    q: "5. What is the primary benefit of using multiple Availability Zones (AZs) in your architecture?",
    choices: [
      "Lower latency within a single region",
      "Reduced AWS service costs",
      "Fault tolerance and high availability",
      "Eliminates the need for backups"
    ],
    answer: 2,
    explanations: {
      0: "Incorrect. While using multiple AZs might help latency for some users, the primary benefit is about availability/resilience, not latency.",
      1: "Incorrect. Using multiple AZs doesn’t inherently reduce costs — it often increases complexity and may increase cost, but improves resilience.",
      2: "Correct. By deploying across multiple AZs, you protect against the failure of a single AZ, so you gain fault tolerance and higher availability.",
      3: "Incorrect. Using multiple AZs helps resilience but does *not* eliminate the need for backups — backups are still required for data durability and disaster recovery."
    }
  },
  {
    q: "6. Which of the following is *not* one of the six advantages of the AWS Cloud (as commonly listed)?",
    choices: [
      "Trade capital expense for variable expense",
      "Benefit from massive economies of scale",
      "Stop guessing capacity",
      "Manual infrastructure provisioning"
    ],
    answer: 3,
    explanations: {
      0: "Incorrect. ‘Trade capital expense for variable expense’ *is* one of the six advantages of cloud computing.  [oai_citation:0‡AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com)",
      1: "Incorrect. ‘Benefit from massive economies of scale’ is also one of the six advantages.  [oai_citation:1‡AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com)",
      2: "Incorrect. ‘Stop guessing capacity’ is in the list of advantages.  [oai_citation:2‡AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com)",
      3: "Correct. ‘Manual infrastructure provisioning’ is *not* an advantage — actually, the cloud emphasizes automation, agility, and speed rather than manual provisioning."
    }
  },
  {
    q: "7. If a small startup is comfortable with community support and only needs basic coverage, which AWS Support plan might be most appropriate?",
    choices: [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    answer: 3,
    explanations: {
      0: "Incorrect. The Enterprise support plan is the highest tier, intended for mission-critical workloads, large enterprises and includes a Technical Account Manager (TAM).",
      1: "Incorrect. The Business support plan includes 24/7 technical support and more features than “basic coverage.”",
      2: "Incorrect. The Developer support plan is a paid tier offering more than just community support; it’s a step up from Basic.",
      3: "Correct. The Basic support plan is the most minimal AWS support tier (includes account/billing support and forums) and thus is appropriate for a small startup comfortable with minimal support."
    }
  },
  {
    q: "8. Which of these best describes the pay‐as‐you‐go pricing model in AWS?",
    choices: [
      "You pay a fixed monthly fee regardless of usage",
      "You pay only for the resources you consume, with no long-term commitments by default",
      "You must commit to a 3-year term to receive any benefit",
      "You pay up front for all resources regardless of usage"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. A fixed monthly fee regardless of usage is a subscription model or legacy hosting model, not AWS’s standard pay-as-you-go.",
      1: "Correct. The pay-as-you-go model means you pay for what you consume and there’s typically no long‐term commitment by default (although you can choose reserved capacity for savings).",
      2: "Incorrect. Committing to a 3-year term is optional (as in Reserved Instances), but not a required part of the core pay-as-you-go model.",
      3: "Incorrect. Paying up front for all resources regardless of usage is opposite of the pay-as-you-go concept."
    }
  },
  {
    q: "9. Which of the following best describes a public subnet in a VPC?",
    choices: [
      "A subnet that has no route to an Internet Gateway",
      "A subnet that has a route to an Internet Gateway and instances can directly reach the internet (if security allows)",
      "A subnet that is automatically encrypted at rest",
      "A subnet that is only accessible via VPN from on-premises"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. A subnet with *no* route to an Internet Gateway would be a private subnet, not a public one.",
      1: "Correct. A public subnet in a VPC is defined by the fact that it has a route out to an Internet Gateway; thus instances within can reach the internet (assuming security groups/NACLs permit).",
      2: "Incorrect. Automatic encryption at rest is not the differentiator for a subnet being public vs private.",
      3: "Incorrect. A subnet only accessible via VPN from on-premises is more like a private or dedicated access subnet, not a public subnet."
    }
  },
  {
    q: "10. When should you choose a managed database service such as Amazon RDS instead of running your database on an EC2 instance?",
    choices: [
      "When you want full control over the OS and database engine updates",
      "When you want AWS to handle tasks such as backups, patching, monitoring and scaling",
      "When your database is so custom that no managed service can support it",
      "When cost is the only factor and you don’t care about reliability"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. If you want full control over OS and engine updates, you may choose self-managed on EC2 rather than a managed RDS service.",
      1: "Correct. A managed database service like Amazon RDS is chosen when you want AWS to handle operational tasks (patching, backups, scaling, monitoring) so you can focus on your application.",
      2: "Incorrect. If your database is extremely custom that no managed service supports it, you might choose EC2; that’s not a reason to choose a managed service.",
      3: "Incorrect. Choosing solely based on cost and ignoring reliability is not a sound reason and is not the primary benefit of a managed service."
    }
  },
  {
    q: "11. Which AWS service allows you to run code without provisioning or managing servers?",
    choices: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Elastic Beanstalk"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon EC2 is virtual servers where you must manage the OS, patches, etc.",
      1: "Correct. AWS Lambda is the serverless compute service: you provide code (or container image) and AWS runs it without you managing servers.",
      2: "Incorrect. Amazon ECS is container orchestration; you still manage container definitions and underlying infrastructure (unless using Fargate), so it’s not the pure serverless code-only model.",
      3: "Incorrect. Elastic Beanstalk simplifies deployment of applications, but beneath it you still are managing infrastructure (or at least aware of it) rather than purely serverless code."
    }
  },
  {
    q: "12. What is Amazon CloudFront used for?",
    choices: [
      "Running virtual machines",
      "Distributing content globally with low latency",
      "Managing security groups",
      "Storing data in object format"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Running virtual machines is the job of EC2, not CloudFront.",
      1: "Correct. Amazon CloudFront is a global content delivery network (CDN) that distributes (caches) content at edge locations worldwide to reduce latency for end-users.",
      2: "Incorrect. Managing security groups is part of VPC/EC2 networking/security, not CloudFront’s purpose.",
      3: "Incorrect. Storing data in object format is Amazon S3’s job; CloudFront is distribution, not primary storage."
    }
  },
  {
    q: "13. Which AWS service provides block‐level storage volumes for use with EC2 instances?",
    choices: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon S3 is object storage, not block storage for EC2 instances.",
      1: "Correct. Amazon EBS (Elastic Block Store) supplies persistent block storage volumes that you attach to EC2 instances and treat much like a hard drive.",
      2: "Incorrect. Amazon EFS is a file storage system (NFS) for shared file access, not block-level storage for individual instances.",
      3: "Incorrect. AWS Storage Gateway bridges on-prem storage and AWS, not primary block storage for EC2 in the way EBS does."
    }
  },
  {
    q: "14. What does Amazon Route 53 primarily provide?",
    choices: [
      "Domain name system (DNS) and domain registration",
      "Virtual private networking",
      "Automatic scaling of EC2 instances",
      "Firewall protection for networks"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Route 53 is AWS’s scalable DNS web service and domain registration service, used to route end-users to endpoints etc.",
      1: "Incorrect. Virtual private networking is handled by AWS VPN / Direct Connect, not Route 53.",
      2: "Incorrect. Automatic scaling of EC2 instances is handled by Auto Scaling, not Route 53.",
      3: "Incorrect. Firewall protection is handled by services like AWS WAF, Network Firewall, security groups—not specifically Route 53."
    }
  },
  {
    q: "15. Which AWS service can automatically adjust compute capacity to maintain steady, predictable performance?",
    choices: [
      "Amazon CloudWatch",
      "AWS Auto Scaling",
      "Amazon Inspector",
      "AWS Backup"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon CloudWatch monitors resources, collects metrics and alarms, but does not itself adjust compute capacity automatically.",
      1: "Correct. AWS Auto Scaling monitors your application demand and automatically adds or removes compute resources (EC2 instances, containers, etc.) to maintain steady performance and cost-efficiency.",
      2: "Incorrect. Amazon Inspector assesses security vulnerabilities, not compute capacity scaling.",
      3: "Incorrect. AWS Backup is a centralized backup service, not about automatically adjusting compute capacity."
    }
  },
  {
    q: "16. What is the primary purpose of Amazon VPC (Virtual Private Cloud)?",
    choices: [
      "Providing cloud-based storage for files",
      "Launching virtual servers in an isolated network environment",
      "Monitoring AWS resources",
      "Automating server patching"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Cloud-based storage for files is a function of services like Amazon S3, EFS, etc., not the primary purpose of a VPC.",
      1: "Correct. Amazon VPC enables you to launch AWS resources (such as EC2 instances) into a virtual network that you've defined — a logically isolated section of the AWS Cloud.  [oai_citation:0‡AWS Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html?utm_source=chatgpt.com)",
      2: "Incorrect. Monitoring AWS resources is done by services like Amazon CloudWatch, not by VPC itself.",
      3: "Incorrect. Automating server patching is a feature of e.g., AWS Systems Manager Patch Manager, not the VPC networking service."
    }
  },
  {
    q: "17. Which AWS service provides detailed monitoring and observability for applications and resources?",
    choices: [
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Organizations"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon CloudWatch collects metrics, logs, and events to help you monitor resource utilization and application performance.",
      1: "Incorrect. AWS Trusted Advisor offers best-practice recommendations on cost, security, performance, fault tolerance, but is not primarily a metrics/observability tool.",
      2: "Incorrect. AWS Config is used to track resource configuration changes over time for compliance, not primarily detailed observability of app metrics.",
      3: "Incorrect. AWS Organizations is for multi-account management and consolidated billing/policies, not monitoring or observability."
    }
  },
  {
    q: "18. What is the main benefit of AWS Regions and Availability Zones architecture?",
    choices: [
      "Higher operational costs",
      "Improved availability and fault tolerance",
      "Simpler pricing",
      "Automatic encryption"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. The purpose of multiple Regions/AZs is not to increase costs; in fact, better architecture can reduce risk and outage cost.",
      1: "Correct. Having multiple Availability Zones (and optionally Regions) allows you to design for failure (if one AZ/region fails, others take over) which enhances availability and fault tolerance.",
      2: "Incorrect. While pricing may differ by region, the architecture’s key benefit is availability/fault tolerance — not simpler pricing.",
      3: "Incorrect. Encryption (at rest/in transit) is a security feature, but the multi-AZ/region design is primarily about resilience, not automatic encryption."
    }
  },
  {
    q: "19. Which service helps you identify under-utilized or unused AWS resources to reduce costs?",
    choices: [
      "AWS Cost Explorer",
      "AWS CloudFormation",
      "AWS Auto Scaling",
      "Amazon EC2"
    ],
    answer: 0,
    explanations: {
      0: "Correct. AWS Cost Explorer helps you visualize your AWS spending and find cost optimization opportunities, such as idle resources or unused capacity.",
      1: "Incorrect. AWS CloudFormation is infrastructure as code for provisioning resources, not specifically focused on cost-identification of unused resources.",
      2: "Incorrect. AWS Auto Scaling adjusts capacity based on demand — it helps with costs in some sense but isn’t a tool whose main purpose is identifying under-utilized resources.",
      3: "Incorrect. Amazon EC2 is a compute instance service, not a cost-analysis tool."
    }
  },
  {
    q: "20. What does AWS Trusted Advisor provide?",
    choices: [
      "A tool that gives real-time guidance to optimize AWS resources for cost, security, and performance",
      "A service that creates EC2 instances automatically",
      "A monitoring dashboard for EC2 health",
      "A firewall for your VPC"
    ],
    answer: 0,
    explanations: {
      0: "Correct. AWS Trusted Advisor inspects your AWS environment and provides recommendations (cost, security, performance, fault tolerance) to help you optimize your setup.",
      1: "Incorrect. It does not “create EC2 instances automatically”; it analyzes your environment.",
      2: "Incorrect. While Trusted Advisor may flag issues, it is not a dedicated real-time dashboard tool for EC2 health—that is more like CloudWatch.",
      3: "Incorrect. It is not a firewall; VPC security groups/NACLs/WAF handle firewalling."
    }
  },
  {
    q: "21. Which AWS service helps you manage multiple AWS accounts centrally?",
    choices: [
      "AWS CloudTrail",
      "AWS Organizations",
      "AWS Control Tower",
      "AWS IAM"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS CloudTrail records API calls across your account for auditing, but does not manage multiple accounts centrally.",
      1: "Correct. AWS Organizations enables you to manage multiple AWS accounts, apply service control policies, and consolidate billing across them.",
      2: "Incorrect. AWS Control Tower helps set up a governed landing zone and is built on Organizations; the core multi-account management service is Organizations.",
      3: "Incorrect. AWS IAM deals with identity/access within an account (or cross-account roles), not multi-account billing/policy management."
    }
  },
  {
    q: "22. Which AWS service provides infrastructure as code (IaC) capabilities?",
    choices: [
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Cloud9",
      "AWS CodeCommit"
    ],
    answer: 0,
    explanations: {
      0: "Correct. AWS CloudFormation allows you to define and provision AWS infrastructure using templates — making it an IaC tool.",
      1: "Incorrect. AWS CloudTrail is for logging API calls and auditing, not provisioning resources.",
      2: "Incorrect. AWS Cloud9 is a cloud-based IDE, not an IaC service.",
      3: "Incorrect. AWS CodeCommit is a source control repository for code, not specifically infrastructure provisioning."
    }
  },
  {
    q: "23. Which AWS service can be used to create isolated environments for running containers?",
    choices: [
      "Amazon ECS",
      "AWS Lambda",
      "AWS Batch",
      "Amazon Lightsail"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Elastic Container Service (ECS) is a fully managed container orchestration service for running Docker containers in isolated environments.",
      1: "Incorrect. AWS Lambda runs functions (serverless) and is not primarily used for long-running container environments.",
      2: "Incorrect. AWS Batch is for batch computing jobs, not general container orchestration environmentizing multiple containerized services.",
      3: "Incorrect. Amazon Lightsail is simplified VPS/containers but not the primary AWS managed container service for isolated container orchestration."
    }
  },
  {
    q: "24. Which AWS service provides fully managed NoSQL databases?",
    choices: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon RDS is for relational databases (SQL), not NoSQL.",
      1: "Correct. Amazon DynamoDB is a fully managed NoSQL key-value and document database with single-digit millisecond latency.",
      2: "Incorrect. Amazon Aurora is a high-performance relational database compatible with MySQL/PostgreSQL, not NoSQL.",
      3: "Incorrect. Amazon Redshift is a data warehouse service for analytics, not a NoSQL database."
    }
  },
  {
    q: "25. What AWS service provides a simple interface for object lifecycle management, versioning, and replication?",
    choices: [
      "Amazon EBS",
      "Amazon S3",
      "AWS Storage Gateway",
      "Amazon FSx"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon EBS is a block-storage service, not optimized for object lifecycle/versioning/replication policies.",
      1: "Correct. Amazon S3 offers object storage with lifecycle policies, versioning, cross-region replication and multiple storage classes for cost optimisation.",
      2: "Incorrect. AWS Storage Gateway bridges on-premises storage with AWS — not the native object lifecycle management service in AWS.",
      3: "Incorrect. Amazon FSx is managed file storage (Windows, Lustre etc.), not the object storage service with lifecycle/versioning you find with S3."
    }
  },
  {
    q: "26. What is Amazon EC2 primarily used for?",
    choices: [
      "Running virtual servers in the cloud",
      "Hosting databases only",
      "Monitoring traffic flow",
      "Serving as a CDN"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Elastic Compute Cloud (EC2) lets you launch and manage virtual server instances in the cloud — the basic compute building block.",
      1: "Incorrect. While you can host databases on EC2, it is not limited to that and is broadly for general virtual servers.",
      2: "Incorrect. Monitoring traffic flow is more like VPC Flow Logs, CloudWatch or traffic analytics services, not the main use of EC2.",
      3: "Incorrect. Serving as a CDN is the role of Amazon CloudFront, not EC2."
    }
  },
  {
    q: "27. What is the main advantage of Amazon RDS over self-managed databases on EC2?",
    choices: [
      "Manual patching and backup control",
      "Fully managed automation of database administration tasks",
      "Requires more setup for scaling",
      "No high availability options"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Manual patching/backups is what you do if you manage databases yourself on EC2 — RDS reduces that burden.",
      1: "Correct. With Amazon RDS you get managed tasks such as backups, patching, monitoring, replication, freeing you from low-level DB administration.",
      2: "Incorrect. RDS actually makes scaling easier (via instance classes, Multi-AZ, read replicas), not harder.",
      3: "Incorrect. RDS supports high availability (e.g., Multi-AZ deployments) and thus is not lacking HA options."
    }
  },
  {
    q: "28. Which AWS service helps you view and audit API activity across your AWS account?",
    choices: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS CloudFormation",
      "AWS GuardDuty"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS Config tracks configuration changes of resources and compliance, not necessarily all API activity.",
      1: "Correct. AWS CloudTrail records all API calls and console actions in your AWS account for auditing and governance.",
      2: "Incorrect. AWS CloudFormation is infrastructure provisioning via templates, not activity/audit logging.",
      3: "Incorrect. AWS GuardDuty is threat detection service — it analyzes data for suspicious behavior, but the audit log of API calls is CloudTrail."
    }
  },
  {
    q: "29. Which service allows you to automatically deploy and manage applications in multiple environments such as dev, test, and production?",
    choices: [
      "AWS Elastic Beanstalk",
      "AWS CodePipeline",
      "AWS Cloud9",
      "Amazon ECS"
    ],
    answer: 0,
    explanations: {
      0: "Correct. AWS Elastic Beanstalk allows you to deploy applications and handles provisioning, load balancing, scaling, monitoring, allowing you to manage dev/test/prod environments more easily.",
      1: "Incorrect. AWS CodePipeline is a continuous delivery service for building release pipelines, not the full environment provisioning/management tool like Beanstalk.",
      2: "Incorrect. AWS Cloud9 is a cloud-based IDE for development, not a deployment/manage-app-environment service.",
      3: "Incorrect. Amazon ECS is container orchestration; while you can manage apps across environments, the question is about automatically deploying/managing application environments — Elastic Beanstalk is the better match."
    }
  },
  {
    q: "30. What AWS service can automatically distribute incoming application traffic across multiple targets to improve performance?",
    choices: [
      "Amazon Route 53",
      "Elastic Load Balancing (ELB)",
      "AWS Transit Gateway",
      "AWS CloudFront"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Amazon Route 53 is DNS and global traffic routing, not specifically application-level load balancing across targets in an availability zone/region.",
      1: "Correct. Elastic Load Balancing automatically distributes incoming application traffic across multiple targets (such as EC2 instances, containers) to improve availability and performance.",
      2: "Incorrect. AWS Transit Gateway connects multiple VPCs and on-prem networks, not directly about distributing application traffic to improve performance.",
      3: "Incorrect. AWS CloudFront is a CDN that caches content at edge locations; while it improves performance for content delivery, it is not the service whose primary purpose is distributing application traffic across multiple targets in your backend."
    }
  },
  {
    q: "31. Which AWS service helps detect security threats using machine learning to continuously monitor network activity and account behavior?",
    choices: [
      "AWS Shield",
      "AWS GuardDuty",
      "AWS WAF",
      "AWS Security Hub"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS Shield is about DDoS protection at network/application layers, not primarily ML-based monitoring of account behavior.",
      1: "Correct. AWS GuardDuty uses machine learning, threat intelligence, and continuous monitoring of data sources (e.g., VPC flow logs, DNS logs, CloudTrail events) to detect suspicious behavior.  [oai_citation:0‡AWS Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html?utm_source=chatgpt.com)",
      2: "Incorrect. AWS WAF is a web application firewall and deals with blocking/filtering HTTP(S) requests, not broad account-behavior monitoring.",
      3: "Incorrect. AWS Security Hub aggregates findings from multiple security services, but is not itself the core threat-detection ML service."
    }
  },
  {
    q: "32. What is the main purpose of AWS Identity and Access Management (IAM)?",
    choices: [
      "To encrypt objects in Amazon S3",
      "To control access to AWS resources securely",
      "To monitor EC2 CPU usage",
      "To distribute traffic across Regions"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Encryption of S3 objects is handled by S3/KMS/CloudHSM, not IAM.",
      1: "Correct. IAM enables you to create users, groups, roles and assign permissions to determine who can access which AWS resources under what conditions.",
      2: "Incorrect. Monitoring CPU usage is done via CloudWatch, not IAM.",
      3: "Incorrect. Distributing traffic across Regions is a networking/traffic-routing concept (Route 53, Global Accelerator), not IAM’s job."
    }
  },
  {
    q: "33. Which service provides managed data warehousing for large-scale analytics?",
    choices: [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Redshift is AWS’s fully managed data warehouse service designed for analytic queries across large datasets.",
      1: "Incorrect. Amazon Aurora is a relational database engine (OLTP) compatible with MySQL/PostgreSQL, not primarily a data warehouse.",
      2: "Incorrect. Amazon RDS is managed relational database service, designed for transactional workloads, not large-scale warehousing.",
      3: "Incorrect. Amazon DynamoDB is a fully managed NoSQL database, not a columnar data warehouse."
    }
  },
  {
    q: "34. What AWS service provides an online management console for creating and managing AWS resources?",
    choices: [
      "AWS Management Console",
      "AWS CLI",
      "AWS SDK",
      "AWS CloudShell"
    ],
    answer: 0,
    explanations: {
      0: "Correct. The AWS Management Console is the web-based GUI that lets you visually browse, configure, and manage AWS resources.",
      1: "Incorrect. AWS CLI is the command-line interface, not the browser GUI.",
      2: "Incorrect. AWS SDKs are programming language libraries for interacting with AWS APIs from code.",
      3: "Incorrect. AWS CloudShell is a browser-based shell environment, but the broader console is the GUI for managing resources."
    }
  },
  {
    q: "35. Which AWS service allows you to archive infrequently accessed data at the lowest cost?",
    choices: [
      "Amazon S3 Glacier",
      "Amazon EFS",
      "Amazon FSx",
      "Amazon RDS"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon S3 Glacier (and Glacier Deep Archive) is designed for long-term archival of data at very low cost.",
      1: "Incorrect. Amazon EFS is a managed file system for frequent/shared access, not optimized for low-cost archival.",
      2: "Incorrect. Amazon FSx is managed file storage (Windows, Lustre etc.), not primarily archival object storage.",
      3: "Incorrect. Amazon RDS is a managed relational database service — not archival storage."
    }
  },
  {
    q: "36. What feature of Amazon S3 helps ensure durability of stored data?",
    choices: [
      "Multi-AZ replication and data redundancy",
      "Single-instance storage per object",
      "Manual snapshots by the user",
      "Limited availability zones"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon S3 stores data redundantly across multiple devices and facilities (often multiple Availability Zones) to achieve extremely high durability (e.g., 11-9s).",
      1: "Incorrect. Single-instance storage would be fragile and against S3’s architecture.",
      2: "Incorrect. While users can do snapshots, S3’s durability comes built-in, not by relying solely on manual snapshots.",
      3: "Incorrect. Limited AZs would reduce durability; S3 uses multiple zones/locations to increase durability."
    }
  },
  {
    q: "37. Which AWS tool provides a visual way to estimate monthly AWS costs based on your architecture?",
    choices: [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    answer: 0,
    explanations: {
      0: "Correct. The AWS Pricing Calculator lets you model architecture and estimate costs ahead of deployment based on usage scenarios.",
      1: "Incorrect. AWS Budgets lets you set cost/usage thresholds and alerts, but isn’t primarily a modelling estimate tool.",
      2: "Incorrect. AWS Trusted Advisor gives recommendations to optimise cost/performance/security, not primarily cost-estimating tool.",
      3: "Incorrect. AWS Cost Explorer shows historical cost/usage and visualization, but not upfront architectural cost estimation."
    }
  },
  {
    q: "38. What does the AWS Free Tier allow new users to do?",
    choices: [
      "Run AWS services for unlimited time for free",
      "Experiment with AWS services within specific limits for free",
      "Access AWS premium support for free",
      "Receive one-on-one AWS consulting sessions"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Free Tier is not unlimited free usage forever — it has time/usage caps.",
      1: "Correct. The AWS Free Tier allows new users to experiment with many AWS services within usage limits (and often for 12 months) at no charge.",
      2: "Incorrect. Premium support (Developer/Business/Enterprise) is paid, not included for free in Free Tier.",
      3: "Incorrect. One-on-one consulting is not part of Free Tier offering."
    }
  },
  {
    q: "39. Which AWS service enables you to use pre-configured templates to deploy popular software stacks such as WordPress or LAMP?",
    choices: [
      "Amazon Lightsail",
      "AWS CodeDeploy",
      "AWS Elastic Beanstalk",
      "AWS CloudFormation"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Lightsail offers simplified virtual private servers and blueprints (pre-configured stacks like WordPress, LAMP) for quick launch.",
      1: "Incorrect. AWS CodeDeploy is a deployment automation service, not the one-click stack template environment.",
      2: "Incorrect. Elastic Beanstalk manages applications (web apps) and underlying infrastructure, but the “pre-configured stack blueprint for quick launch” context fits Lightsail better.",
      3: "Incorrect. AWS CloudFormation is infrastructure-as-code, defining resources via templates — not the simplified stack/blueprint user experience for apps like WordPress."
    }
  },
  {
    q: "40. Which AWS service provides centralized security and compliance visibility across multiple AWS accounts?",
    choices: [
      "AWS Shield",
      "AWS Security Hub",
      "AWS WAF",
      "AWS Config"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS Shield is DDoS protection, not a centralized security/compliance dashboard.",
      1: "Correct. AWS Security Hub aggregates findings from multiple AWS services and accounts, providing a centralized dashboard for security/compliance posture.",
      2: "Incorrect. AWS WAF is a web application firewall, not a multi-account compliance visibility tool.",
      3: "Incorrect. AWS Config tracks resource configuration changes for compliance, but Security Hub is the central aggregated view."
    }
  },
  {
    q: "41. Which AWS service can help you protect web applications from common exploits such as SQL injection and cross-site scripting?",
    choices: [
      "AWS Shield",
      "AWS WAF (Web Application Firewall)",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS Shield deals with DDoS attacks and network-layer protection, not specifically web-app exploit rules.",
      1: "Correct. AWS WAF is a web application firewall that allows you to define rules to block or allow web requests based on patterns (IP, geo, SQLi/XSS, URIs).",
      2: "Incorrect. AWS Config monitors configuration changes of resources, not filtering HTTP(S) traffic for exploits.",
      3: "Incorrect. Amazon GuardDuty monitors for suspicious behavior, but it doesn’t directly enforce request-level web app exploit block rules the way WAF does."
    }
  },
  {
    q: "42. Which AWS service provides DDoS protection at the network and application layers?",
    choices: [
      "AWS Firewall Manager",
      "AWS Shield",
      "AWS WAF",
      "Amazon CloudFront"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS Firewall Manager is a management tool for firewall/WAF policies across accounts, not the actual DDoS mitigation engine.",
      1: "Correct. AWS Shield provides managed Distributed Denial-of-Service (DDoS) protection across network (layers 3/4) and application (layer 7) for AWS resources.  [oai_citation:1‡AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html?utm_source=chatgpt.com)",
      2: "Incorrect. AWS WAF protects HTTP(S) at layer 7 (web application firewall) but is not a full DDoS mitigation service across all layers.",
      3: "Incorrect. Amazon CloudFront is a CDN for content delivery, not specifically a dedicated DDoS protection service."
    }
  },
  {
    q: "43. What does AWS CloudTrail primarily record?",
    choices: [
      "Resource utilization metrics",
      "All API calls and user activity across your AWS account",
      "Errors in EC2 instances",
      "S3 storage metrics only"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. Resource utilization metrics (CPU, memory, network) are monitored in CloudWatch, not CloudTrail.",
      1: "Correct. AWS CloudTrail logs and records API calls and console user activity across your AWS account for auditing and compliance.",
      2: "Incorrect. It doesn’t focus only on EC2 errors; its scope is all API activity.",
      3: "Incorrect. It isn’t limited to S3 storage metrics — it covers all AWS API calls."
    }
  },
  {
    q: "44. Which AWS service provides a unified dashboard for monitoring key operational metrics and setting alarms?",
    choices: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Inspector",
      "AWS Trusted Advisor"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon CloudWatch collects metrics, logs, and events from AWS resources and lets you create dashboards and alarms to monitor them.",
      1: "Incorrect. AWS Config tracks configuration changes and compliance, not primarily operational metric dashboards.",
      2: "Incorrect. AWS Inspector checks for security vulnerabilities in EC2/container images, not metric dashboards.",
      3: "Incorrect. AWS Trusted Advisor gives best-practice recommendations, not live metric dashboards."
    }
  },
  {
    q: "45. Which AWS service helps automate security assessments to improve compliance of applications?",
    choices: [
      "Amazon Inspector",
      "AWS Config",
      "AWS Shield",
      "AWS Artifact"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon Inspector runs automated security assessments on EC2 instances and container images and reports findings that help improve application security/compliance.",
      1: "Incorrect. AWS Config tracks and records resource configuration changes and evaluates compliance rules, but the 'automated security assessment of applications' fits Inspector better.",
      2: "Incorrect. AWS Shield is DDoS protection, not an assessment tool.",
      3: "Incorrect. AWS Artifact provides on-demand access to AWS compliance reports (e.g., ISO 27001, SOC 2), not the assessment automation itself."
    }
  },
  {
    q: "46. Which AWS service gives on-demand access to compliance reports and agreements such as ISO 27001 or SOC 2?",
    choices: [
      "AWS Artifact",
      "AWS Config",
      "AWS Audit Manager",
      "AWS Security Hub"
    ],
    answer: 0,
    explanations: {
      0: "Correct. AWS Artifact is the self-service portal where you can download AWS compliance reports (like SOC 1/2/3, ISO 27001) and review/accept AWS’s agreements.  [oai_citation:0‡AWS Documentation](https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html?utm_source=chatgpt.com)",
      1: "Incorrect. AWS Config tracks and audits configuration changes of AWS resources, but it’s not primarily for downloading compliance reports or agreements.",
      2: "Incorrect. AWS Audit Manager helps you automate evidence collection and audit workflows, but the question asks specifically about access to AWS’s compliance reports and agreements.",
      3: "Incorrect. AWS Security Hub aggregates security finding and compliance posture across accounts, not the central repository of compliance reports from AWS."
    }
  },
  {
    q: "47. Which AWS service automatically inventories and tracks configuration changes to AWS resources?",
    choices: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Systems Manager",
      "AWS Organizations"
    ],
    answer: 1,
    explanations: {
      0: "Incorrect. AWS CloudTrail logs all API calls and user activity, but it does not itself continuously track full configuration state changes in the same way.",
      1: "Correct. AWS Config enables you to record, audit and evaluate the configurations of AWS resources over time — giving you historical data and change tracking.  [oai_citation:1‡AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-services.html?utm_source=chatgpt.com)",
      2: "Incorrect. AWS Systems Manager is for operations management (patching, run commands) across EC2/instances, not primarily for configuration-change inventory.",
      3: "Incorrect. AWS Organizations is for multi-account governance and billing consolidation, not per-resource configuration tracking."
    }
  },
  {
    q: "48. Which service provides a central place to view AWS account spending, forecasts, and set cost thresholds?",
    choices: [
      "AWS Billing Dashboard",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    answer: 2,
    explanations: {
      0: "Incorrect. The AWS Billing Dashboard shows you bills and charges but does not provide advanced forecasting or threshold alerts in the way described.",
      1: "Incorrect. AWS Cost Explorer is focused on analyzing past cost/usage patterns and trends, rather than setting cost thresholds and alerts.",
      2: "Correct. AWS Budgets allows you to establish cost/usage budgets, set alerts when you approach or exceed budgets, and helps with forecasting.  [oai_citation:2‡AWS Documentation](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-create.html?utm_source=chatgpt.com)",
      3: "Incorrect. The AWS Pricing Calculator is for estimating future costs before deployment, not monitoring actual spending thresholds."
    }
  },
  {
    q: "49. Which AWS support plan provides a Technical Account Manager (TAM) and access to 24/7 concierge support?",
    choices: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    answer: 3,
    explanations: {
      0: "Incorrect. The Basic support plan includes account-/billing-only support and does *not* include a TAM or advanced technical concierge.",
      1: "Incorrect. The Developer support plan offers business-hours tech support but not the extensive features (like TAM) associated with higher tiers.",
      2: "Incorrect. The Business support plan provides 24/7 tech support, but the dedicated Technical Account Manager (TAM) is reserved for the highest tier.",
      3: "Correct. The Enterprise support plan includes a dedicated TAM, 24/7 concierge access, and proactive guidance for complex/mission-critical environments."
    }
  },
  {
    q: "50. Which AWS service provides a simple and quick way to deploy static websites such as portfolios or documentation?",
    choices: [
      "Amazon S3 Static Website Hosting",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "Amazon ECS"
    ],
    answer: 0,
    explanations: {
      0: "Correct. Amazon S3 (when used in Static Website Hosting mode) is a very low-cost and simple way to host static websites (HTML/JS/CSS) without needing compute servers.",
      1: "Incorrect. AWS Elastic Beanstalk is for deploying web applications that require runtime environments, not just hosting static files.",
      2: "Incorrect. Amazon Lightsail offers simplified virtual servers or containers and pre-configured stacks, but using S3 static hosting is even simpler for pure static sites.",
      3: "Incorrect. Amazon ECS is a container orchestration service and overkill for static site hosting."
    }
  }
];

