# Portfolio - Développeur Frontend

Portfolio professionnel avec 3 sites vitrine de démonstration : Restaurant gastronomique, Boulangerie artisanale, et Serrurier professionnel.

## 🚀 Déploiement sur Netlify

### Méthode 1 : Drag & Drop (Plus simple)

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Cliquez sur "Add new site" → "Deploy manually"
3. Glissez-déposez le dossier complet du projet
4. Votre site sera en ligne en quelques secondes !

### Méthode 2 : Via Git (Recommandé)

1. Créez un dépôt Git :
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Poussez vers GitHub/GitLab :
```bash
git remote add origin [votre-repo-url]
git push -u origin main
```

3. Sur Netlify :
   - Cliquez sur "Add new site" → "Import an existing project"
   - Connectez votre compte Git
   - Sélectionnez votre repository
   - Netlify détectera automatiquement les paramètres grâce à `netlify.toml`

## 📁 Structure du Projet

```
portfolio/
├── index.html          # Page principale
├── css/
│   └── style.css      # Tous les styles
├── js/
│   └── script.js      # Toutes les fonctionnalités
├── images/            # Vos images (à ajouter)
│   ├── portfolio/
│   │   └── hero-bg.jpg
│   ├── restaurant/
│   │   ├── hero-bg.jpg
│   │   ├── chef.jpg
│   │   ├── ambiance.jpg
│   │   ├── plat-1.jpg
│   │   ├── plat-2.jpg
│   │   └── plat-3.jpg
│   ├── boulangerie/
│   │   ├── hero-bg.jpg
│   │   ├── baguette.jpg
│   │   ├── croissants.jpg
│   │   ├── pain-levain.jpg
│   │   └── vitrine.jpg
│   └── serrurier/
│       ├── hero-bg.jpg
│       ├── intervention.jpg
│       ├── serrures.jpg
│       └── technicien.jpg
├── netlify.toml       # Configuration Netlify
└── README.md          # Ce fichier
```

## 🖼️ Images Requises

Avant de déployer, ajoutez vos images dans le dossier `images/` selon la structure ci-dessus.

**Tailles recommandées :**
- Hero backgrounds : 1920x1080px minimum
- Photos produits : 800x600px
- Photos galerie : 800x800px

**Sources d'images gratuites :**
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

## ✨ Fonctionnalités

- ✅ Navigation fluide entre les pages
- ✅ Design responsive (mobile/tablette/desktop)
- ✅ Animations et transitions
- ✅ Liens de contact fonctionnels
- ✅ Optimisé pour le SEO
- ✅ Performance optimisée

## 🔧 Personnalisation

### Modifier les informations de contact

Dans `index.html`, recherchez et modifiez :
- Email : `contact@votremail.com`
- Téléphone : `06 12 34 56 78`
- Localisation : `Paris, France`

### Modifier les couleurs

Dans `css/style.css`, modifiez les variables de couleur pour chaque section.

### Ajouter du contenu

Modifiez directement le contenu HTML dans `index.html`.

## 📱 Navigateurs Supportés

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## 🆘 Support

Pour toute question :
1. Vérifiez que toutes les images sont bien présentes
2. Vérifiez la console du navigateur pour les erreurs
3. Assurez-vous que les chemins d'images sont corrects

## 📄 Licence

Libre d'utilisation pour vos projets personnels et commerciaux.

---

Développé avec ❤️ pour showcaser vos compétences de développeur frontend
