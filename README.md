# Dr. Rharbaoui - Site Web Professionnel de Cardiologie

Ce site web moderne et responsive a été développé pour le cabinet de cardiologie du Dr. Rharbaoui, offrant aux patients une expérience utilisateur professionnelle et intuitive.

## Technologies Utilisées

- **Next.js 14**: Framework React avec rendu côté serveur (SSR) et génération de sites statiques (SSG)
- **TypeScript**: Pour un typage fort et un code plus robuste
- **TailwindCSS**: Pour un design responsive et moderne
- **Framer Motion**: Pour des animations fluides
- **React Hook Form**: Pour la gestion des formulaires avec validation

## Fonctionnalités

- **Design Responsive**: Optimisé pour tous les appareils (mobile, tablette, desktop)
- **SEO Optimisé**: Métadonnées complètes, sitemap.xml, robots.txt
- **Accessibilité**: Respectant les normes WCAG pour une meilleure accessibilité
- **Performance**: Optimisé avec Next.js pour des temps de chargement rapides
- **PWA Ready**: Configuration pour Progressive Web App

## Pages

1. **Accueil**: Présentation du médecin avec une section héro et services principaux
2. **Services**: Détail des services de cardiologie proposés
3. **Prise de rendez-vous**: Formulaire interactif pour réserver une consultation
4. **À propos**: Biographie et parcours professionnel du médecin
5. **Urgences à domicile**: Informations sur les services d'urgence disponibles
6. **Contact**: Coordonnées et formulaire de contact avec intégration de carte

## Installation et Exécution

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Construction du site pour la production
npm run build

# Lancement du site en mode production
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Personnalisation

Pour personnaliser le site:

1. Remplacez les images placeholders dans le dossier `/public/images/`
2. Mettez à jour les informations de contact dans les composants
3. Personnalisez la palette de couleurs dans le fichier `tailwind.config.ts`
4. Ajoutez des services supplémentaires si nécessaire

## Déploiement

Le site peut être facilement déployé sur des plateformes comme Vercel, Netlify ou tout autre hébergeur supportant Next.js.

```bash
# Pour déployer sur Vercel (recommandé pour Next.js)
vercel
```

## License

Ce projet est sous license MIT.