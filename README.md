# Projet My Weather App

Bienvenue,
my weather app est un projet pour mon Portfolio personel, après avoir finis ma formation React, il me fallait un projet pour pratiquer et pouvoir montrer mon niveau actuel en React et son environnement.

Il fut un exercice pour mon affinité aavec le design, puisque je l'ai réalisé par moi même, il n'est donc pas parfait car je suis dev avant tout mais m'a permis de faire de la veille dessus et pratiquer.
[Lien du figma]()

C'est un application de Météo, connecté a plusieurs API de [OpenWeatherMap](https://openweathermap.org/)
ainsi qu'à [Leaflet](https://leafletjs.com/) pour la partie display de la map
Ici j'ai choisis d'utiliser CreateReactApp pour kickStart mon projet et passer moins de temps en config webpack
J'ai aussi fait le choix de me former sur ce projet avec Redux-toolkit que l'on avait seulement survolé en formation.
le côté api sera géré avec Axios.

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

# Features a venir

- ajout d'une seconde view avec la vue sur 5 jours de la meteo