# GitHub Clone - TP Interface Homme-Machine

Projet universitaire de clone de GitHub réalisé dans le cadre du cours d'Interface Homme-Machine.

## 🎯 Objectif

Créer une reproduction frontend de l'interface GitHub en utilisant les technologies web modernes. Ce projet est développé en binôme et met l'accent sur l'expérience utilisateur et les bonnes pratiques de développement.

## 🛠 Stack Technique

- **Framework**: React 18 avec TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Version Control**: Git

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le repository :
```bash
git clone https://github.com/Vicky197709/TP_IHM_clone_github.git
cd TP_IHM_clone_github
```

2. Installer les dépendances :
```bash
npm install
```

3. Démarrer le serveur de développement :
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

### Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Lance le linter

## 👥 Collaboration

### Organisation du Travail

Ce projet est développé en binôme. Voici nos recommandations pour une collaboration efficace :

#### 1. Branches Git

- `main` - Branche principale, toujours stable
- `develop` - Branche de développement
- `feature/*` - Branches pour les nouvelles fonctionnalités
- `bugfix/*` - Branches pour les corrections de bugs

#### 2. Workflow de Développement

1. **Créer une branche** pour chaque nouvelle fonctionnalité :
```bash
git checkout -b feature/nom-de-la-fonctionnalite
```

2. **Développer et tester** localement avant de committer

3. **Commits clairs et descriptifs** :
```bash
git commit -m "feat: ajoute le composant Header avec navigation"
```

4. **Push et Pull Request** :
```bash
git push origin feature/nom-de-la-fonctionnalite
```

#### 3. Conventions de Code

- Utiliser TypeScript pour la sécurité des types
- Suivre les conventions de nommage React (PascalCase pour les composants)
- Commenter le code complexe
- Utiliser les hooks React de manière appropriée

#### 4. Communication

- Utiliser les issues GitHub pour suivre les tâches
- Documenter les décisions importantes dans le README
- Faire des revues de code mutuelles

### Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── common/         # Composants génériques
│   ├── layout/         # Composants de mise en page
│   └── features/       # Composants spécifiques aux fonctionnalités
├── pages/              # Pages de l'application
├── hooks/              # Hooks personnalisés
├── types/              # Définitions de types TypeScript
├── utils/              # Fonctions utilitaires
├── styles/             # Styles globaux
└── assets/             # Images et autres ressources statiques
```

## 🌐 Guide de Navigation

### Pages Principales
- **Accueil** : `http://localhost:3000/`
- **Login** : `http://localhost:3000/login`
- **Signup** : `http://localhost:3000/signup`
- **Dashboard** : `http://localhost:3000/dashboard`

### Pages Utilisateur
- **Profile** : `http://localhost:3000/Vicky197709`
- **Settings** : `http://localhost:3000/settings`
- **Settings (avec onglet)** : `http://localhost:3000/settings/profile`

### Pages Repository
- **Repository** : `http://localhost:3000/Vicky197709/TP_POO_Java`
- **Issues** : `http://localhost:3000/Vicky197709/TP_POO_Java/issues`
- **Pull Requests** : `http://localhost:3000/Vicky197709/TP_POO_Java/pulls`

### Pages Organisation
- **Organisation** : `http://localhost:3000/organizations/acme-corp`

### Pages Marketplace
- **Marketplace** : `http://localhost:3000/marketplace`

### Pages Features GitHub (Haute Priorité)
- **Copilot** : `http://localhost:3000/features/copilot`
- **Actions** : `http://localhost:3000/features/actions`
- **Codespaces** : `http://localhost:3000/features/codespaces`
- **Packages** : `http://localhost:3000/features/packages`
- **Security** : `http://localhost:3000/features/security`
- **Code Search** : `http://localhost:3000/features/code-search`

### Navigation depuis le Header
Les menus dropdown dans le header pointent vers ces URLs :
- **Product → Copilot** : `/features/copilot`
- **Product → Actions** : `/features/actions`
- **Product → Codespaces** : `/features/codespaces`
- **Product → Packages** : `/features/packages`
- **Product → Security** : `/features/security`
- **Open Source → Marketplace** : `/marketplace`

## 📋 Fonctionnalités Implémentées

### ✅ Pages Complètes
- [x] Page d'accueil avec hero section
- [x] Login et Signup avec validation
- [x] Dashboard utilisateur avec activité récente
- [x] Profile utilisateur avec repositories
- [x] Repository avec code, issues, PR
- [x] Issues avec filtres et recherche
- [x] Pull Requests avec états
- [x] Settings avec multiples onglets
- [x] Organisation avec équipes et membres
- [x] Marketplace avec catégories
- [x] Copilot (assistant IA)
- [x] Actions (CI/CD)
- [x] Codespaces (dev cloud)
- [x] Packages (registry)
- [x] Security (vulnerability scanning)
- [x] Code Search (recherche avancée)

### ✅ Fonctionnalités Globales
- [x] Navigation complète avec menus dropdown
- [x] Dark mode avec toggle
- [x] Routing SPA avec React Router
- [x] Design responsive mobile/desktop
- [x] Header GitHub-like avec recherche
- [x] User dropdown avec tous les liens
- [x] Thème avec détection système

## 🎨 Design System

### Couleurs
- Primaire: `#0366d6` (GitHub blue)
- Secondaire: `#28a745` (GitHub green)
- Gris: `#24292e`, `#586069`, `#f6f8fa`

### Typographie
- Police principale: System UI stack
- Tailles: Responsive avec TailwindCSS

### Composants
- Boutons avec états hover/focus
- Cards pour les repositories
- Modals pour les formulaires
- Navigation responsive

## 🧪 Tests

Pour assurer la qualité du code :

1. **Tests unitaires** avec Jest et React Testing Library
2. **Tests d'intégration** pour les workflows utilisateur
3. **Tests manuels** sur différents navigateurs

## 📚 Ressources

- [Documentation React](https://react.dev/)
- [Documentation TailwindCSS](https://tailwindcss.com/)
- [Documentation TypeScript](https://www.typescriptlang.org/)
- [GitHub Design System](https://primer.style/design/)

## 🤝 Contributeurs

- [@Vicky197709](https://github.com/Vicky197709)
- [@NomDuDeuxièmeDéveloppeur](https://github.com/username)

## 📄 Licence

Ce projet est sous licence ISC.

---

**Note**: Ce projet est à but éducatif dans le cadre d'un TP universitaire. Il n'est pas destiné à un usage commercial.