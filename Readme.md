# 🛑 Système de Blacklist

Bienvenue dans le système complet de gestion des blacklists pour vos projet (Minecraft, et autres). Ce système permet de vérifier si un joueur est sur liste noire et garantit que seuls les joueurs autorisés peuvent se connecter à votre serveur. 💻🎮

# Fonctionnalités ✨
- Interface Web 🌐 : Permet de vérifier l'état de blacklist d'un joueur en fonction de son nom d'utilisateur.

# Installation 🔧

## Prérequis 🧑‍💻

Avant de commencer, assurez-vous que les outils suivants sont installés sur votre machine :

Node.js 20 ou supérieur 🌱

## Pterodactyl 🦃

- Téléchargez le fichier Egg Node.js Generic à partir du lien suivant :
[Egg Node.js Generic](<https://github.com/pelican-eggs/eggs/blob/master/generic/nodejs/egg-node-js-generic.json>)

- Installez l'egg sur votre machine.

- Créez un serveur avec la version 20 de Node.js.

- Ajoutez cette commande de lancement dans la configuration du serveur :

```bash
INDISPONIBLE
```

Cette commande supprime le répertoire dist/ (si présent), puis effectue un build du projet avec npm run build et enfin démarre le serveur avec npm start.

- Mettez le code source dans les fichiers du serveur.

Une fois cela fait, votre serveur est prêt à être configuré !

## Configuration

- Rendez-vous dans le fichier src/config.json et définissez le port sur lequel vous souhaitez démarrer le serveur web.

- Allez dans le fichier src/data.json et ajoutez les joueurs à la blacklist en suivant le format suivant :

```json
{
    "players": [
      {
        "name": "salem",
        "blacklist": true
      },
      {
        "name": "john",
        "blacklist": false
      }
    ]
}
```

❗ NOTES : SI VOUS MODIFIER LA LISTE DES BLACKLIST VOUS DEVEZ RESTART VOTRE SERVER WEB (très rapide)

# Utilisation 🌐

## Vérification de la blacklist d'un joueur

Pour vérifier si un joueur est blacklisté, envoyez une requête GET à l'URL suivante :

```bash
http://localhost:25000/name=<nom_du_joueur>
```

Où `<nom_du_joueur>` est le nom d'utilisateur du joueur à vérifier.

## Exemple de réponse 📤 :

- Si le joueur est blacklisté, la réponse sera :

```json
{
  "blacklist": true
}
```

- Si le joueur n'est pas blacklisté, la réponse sera :

```json
{
  "blacklist": false
}
```

# Crédits 🎉

Développé par : **Alouchi**

# Licence 📜

Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier LICENSE.

# Example

Example avec un plugin minecraft ICI
