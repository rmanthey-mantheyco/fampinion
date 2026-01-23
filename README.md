# 🧠 Fampinion Platform Repository

This repository contains the infrastructure, platform components, and application code for **Fampinion**, a cloud-native web platform built for scale, resilience, and observability. It is structured to support both lab experimentation and future production deployment.

Fampinion is designed with a hybrid Git strategy:
- **Trunk-based** for infrastructure, Docker, and Kubernetes — enabling fast iteration, low drift, and CI/CD alignment.
- **GitFlow** for the web application — supporting versioned releases, hotfixes, and longer-lived feature development.

---

## 📁 Repository Structure


Fampinion/
  ├── terraform/          # Infrastructure-as-Code (trunk-based)
  │     ├── modules/
  │     ├── envs/
  │     └── README.md
  │
  ├── docker/             # Container builds & Compose (trunk-based)
  │     ├── app/
  │     ├── base-images/
  │     └── README.md
  │
  ├── k8s/                # Kubernetes manifests & Helm charts (trunk-based)
  │     ├── deployments/
  │     ├── services/
  │     ├── ingress/
  │     └── README.md
  │
  ├── web/                # Application code (GitFlow: feature → develop → release → main)
  │     ├── src/
  │     ├── public/
  │     └── README.md
  │
  ├── .github/
  │     └── workflows/    # CI/CD pipelines
  │
  ├── docs/               # Architecture, decisions, diagrams, phase notes
  │     ├── architecture/
  │     ├── decisions/
  │     └── phases/
  │
  ├── scripts/            # Utility scripts (bash, PowerShell)
  │
  └── README.md           # Project overview
