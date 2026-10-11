# Mon e-portfolio — guide complet (Ubuntu + GitHub Pages)

Compte GitHub : `cayreltorres`
Adresse finale du site : https://cayreltorres.github.io

Contenu du dossier `portfolio/` :
- `index.html`, `style.css`, `app.js` : ne pas modifier
- `content.js` : **le seul fichier à remplir** (textes FR + EN, projets, liens)
- `assets/` : à créer, pour ta photo, tes CV et tes images

Pages du site : Accueil, Projets (frise du plus récent au plus ancien), Mobilité, Engagement, Sports, Carrière.
Fonctions : CV FR/EN, LinkedIn, bascule FR/EN, mode clair/sombre.

---

## 1. Installer git (une seule fois)

```bash
sudo apt update && sudo apt install -y git unzip
git config --global user.name "cayreltorres"
git config --global user.email "ca.cayreltorres@gmail.com"
```

## 2. Créer le dépôt du site (tu as déjà un compte)

1. Connecte-toi sur https://github.com.
2. Clique sur **New repository** (bouton vert, ou https://github.com/new).
3. Nom du dépôt, exactement : `cayreltorres.github.io`
4. Choisis **Public**, ne coche rien d'autre, puis **Create repository**.

## 3. Créer un jeton d'accès (pour pouvoir envoyer les fichiers)

GitHub n'accepte plus le mot de passe dans le terminal.
1. GitHub → ta photo de profil → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic).
2. Coche la case **repo**, choisis une durée, puis génère le jeton.
3. Copie-le tout de suite (il ne s'affiche qu'une fois). Tu le colleras à la place du mot de passe au `git push`.

## 4. Récupérer le dépôt et copier les fichiers

```bash
cd ~
git clone https://github.com/cayreltorres/cayreltorres.github.io.git
cd cayreltorres.github.io
unzip ~/Téléchargements/portfolio-final.zip -d /tmp/p
cp /tmp/p/portfolio/* .
mkdir -p assets
```

## 5. Tester sur ton ordinateur

```bash
python3 -m http.server 8000
```
Ouvre http://localhost:8000. Arrête le serveur avec Ctrl+C. Recharge la page après chaque modification.

## 6. Remplir ton contenu (fichier `content.js`)

- En haut : `name`, `school`, `year`, `linkedin`.
- Mets dans `assets/` : `photo.jpg`, `CV_FR.pdf`, `CV_EN.pdf` (garde ces noms, ou change les chemins dans `content.js`).
- Remplace les textes d'exemple dans le bloc `fr` **et** dans le bloc `en`.
- Ajouter un projet : copie un bloc `{ id: ..., date: ..., title: ... }` dans `projects`, dans les deux langues, avec le **même `id`**. Images : `images: ["assets/mon-image.png"]`.
- Ajouter une carte (mobilité, engagement, sports, carrière) : copie un bloc dans la liste `items` de la section voulue.

## 7. Publier

```bash
git add .
git commit -m "Mon e-portfolio"
git push
```
Au `git push`, saisis ton identifiant `cayreltorres`, puis colle le jeton à la place du mot de passe.

Ensuite, sur GitHub : dépôt → Settings → Pages → source = branche `main`, dossier `/ (root)`, puis Save.
Après 1 à 2 minutes, ton site est sur https://cayreltorres.github.io

## 8. Mettre à jour plus tard

Modifie `content.js` (ou ajoute des fichiers dans `assets/`), puis :

```bash
cd ~/cayreltorres.github.io
git add .
git commit -m "mise à jour"
git push
```

## 9. Dépôt sur Moodle

Dépose le lien de ton site (et ton CV FR/EN, ta vidéo de présentation, etc. selon les consignes du module).

## Problèmes fréquents

- **Page blanche en local** : ouvre via `http://localhost:8000`, pas en double-cliquant sur `index.html`.
- **Image ou CV introuvable** : vérifie le nom et la casse du fichier dans `assets/`.
- **Site pas à jour après push** : attends 2 minutes et recharge avec Ctrl+F5.
- **`git clone` dit que le dépôt existe déjà ou est vide** : normal si tu viens de le créer vide, continue à l'étape 4.
- **Un dépôt `cayreltorres.github.io` existe déjà** : ne le recrée pas, saute l'étape 2 et clone-le.
