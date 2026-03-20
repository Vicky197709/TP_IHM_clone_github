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

## 📋 Fonctionnalités à Implémenter

### Phase 1: Structure de Base
- [x] Initialisation du projet
- [x] Configuration de l'environnement
- [ ] Header avec navigation
- [ ] Sidebar principale
- [ ] Page d'accueil

### Phase 2: Gestion des Repositories
- [ ] Liste des repositories
- [ ] Création de repository
- [ ] Détails d'un repository
- [ ] Fichiers et dossiers

### Phase 3: Fonctionnalités Sociales
- [ ] Profil utilisateur
- [ ] Système de followers
- [ ] Issues et Pull Requests
- [ ] Actions sur les repositories

### Phase 4: Fonctionnalités Avancées
- [ ] Recherche
- [ ] Notifications
- [ ] Thème sombre/clair
- [ ] Responsive design

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