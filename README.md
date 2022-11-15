# Projet My Weather App

Bienvenue,
my weather app est un projet pour mon Portfolio personel, après avoir finis ma formation React, il me fallait un projet pour pratiquer et pouvoir montrer mon niveau actuel en React et son environnement.

Il fut un exercice pour mon affinité aavec le design, puisque je l'ai réalisé par moi même, il est loin du niveau d'un UI designer mais il m'a permis de pratiquer et de faire de la veille sur ce sujet, je suis avant tout développeur mais je suis ouvert à connaitre les métiers que je cotoi 
[Lien du figma](https://www.figma.com/file/yHczPjJpuQCkmgssyXKHnH/MyWeatherApp?node-id=1%3A11&t=kjwOR8jPCisTFcgT-1)

C'est un application de Météo, connecté a plusieurs API de [OpenWeatherMap](https://openweathermap.org/)
ainsi qu'à [Leaflet](https://leafletjs.com/) pour la partie display de la map
Ici j'ai choisis d'utiliser CreateReactApp pour kickStart mon projet et passer moins de temps en config webpack
J'ai aussi fait le choix de me former sur ce projet avec Redux-toolkit que l'on avait seulement survolé en formation.
le côté api sera géré avec Axios.

### Attention ce projet est en V1
Si vous regardez ce projet, ayez a l'esprit qu'il est encore en cours d'evolutions et que donc il manquera par exemple une batterie de tests unitaires plus exhaustive qu'actuellement.
Merci de votre compréhension

# Setup du projet

## Installation des dépendances

```bash
    npm install
```

## Api Ready

Veuillez vous rendre sur [La page de connexion Openweather](https://home.openweathermap.org/users/sign_in)
Il faut créer son compte et récupérer une clef API gratuite.
ensuite il faudra créer un fichier `.env`
et le remplir comme ceci.

```Javascript
    REACT_APP_APIKEY = {* APi key ici *}
```

## Start le projet avec CreateReactApp

```bash
    npm start
```

Plus qu'à ouvrir  [http://localhost:3000](http://localhost:3000)

## Run tests

```bash
    npm test
```

# Features a venir

- mise en place des test unitaires pour certains components !important 
- ajout d'une seconde view avec la vue sur 5 jours de la meteo + React router
- ajout d'un layer sur la map pour vents / nuages / pluies et donner le choix du layer
- ajouts de quelques animations
- un petit state de loading sur les cartes
- Gestion de differents etat de l'input de la barre de recherche ( erreur / rien trouve )
