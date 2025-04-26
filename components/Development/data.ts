import { ArrowRight, Cloud, Code, Database, GitBranch, Package, Terminal } from "lucide-react";

export const services = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Integration',
      description:
        'Automate your deployment pipeline with continuous integration and continuous deployment solutions, ensuring fast and reliable delivery to production.',
      url: 'https://www.jenkins.io/doc/', // Ejemplo de documentación de Jenkins
      buttonLabel: 'Learn more about CI/CD Pipeline',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description:
        'Leverage cloud platforms like AWS, Google Cloud, and Azure to scale your applications and manage your infrastructure with ease.',
      url: 'https://aws.amazon.com/documentation/', // Documentación de AWS
      buttonLabel: 'Explore Cloud Management Services',
    },
    {
      icon: Package,
      title: 'Containerization & Orchestration',
      description:
        'Containerize your applications with Docker and orchestrate with Kubernetes for easy deployment and scalability across environments.',
      url: 'https://docs.docker.com/', // Documentación de Docker
      buttonLabel: 'Learn about Docker & Kubernetes',
    },
    {
      icon: Database,
      title: 'Database Management & Scaling',
      description:
        'Manage and scale your databases with automated backups, real-time monitoring, and high availability to ensure performance and reliability.',
      url: 'https://www.postgresql.org/docs/', // Documentación de PostgreSQL
      buttonLabel: 'Database Management Solutions',
    },
    {
      icon: Terminal,
      title: 'Automated Server Management',
      description:
        'Automate server provisioning, configuration, and scaling to ensure seamless operation of your applications across multiple environments.',
      url: 'https://www.ansible.com/resources/get-started', // Documentación de Ansible
      buttonLabel: 'See Server Management Options',
    },
    {
      icon: ArrowRight,
      title: 'Deployment Monitoring & Alerts',
      description:
        'Monitor your deployments in real-time, receive instant alerts on failures or successes, and ensure everything runs smoothly post-deployment.',
      url: 'https://prometheus.io/docs/introduction/overview/', // Documentación de Prometheus
      buttonLabel: 'Explore Deployment Monitoring Tools',
    },
    {
      icon: Code,
      title: 'Version Control & Deployment Tools',
      description:
        'Implement best practices for version control with Git and automate deployments with tools like GitHub Actions, Jenkins, and CircleCI.',
      url: 'https://docs.github.com/en/actions', // Documentación de GitHub Actions
      buttonLabel: 'Version Control & Deployment',
    },
  ];