### Steam Scraper

This allows you to grab data from steam pages.

## To Use

````
const scraper = require("steam-scraper");
````

Then when you need to grab the data. Pass in the appId of the game you want data on and a callback when we have the data or an error has occurred.

````
scraper.getData(appId, (err, data) => {
  if(err)
    console.log(err);

  console.log(data);

});
````

## Data

An example of the data return can be found below. This is the data for the appId '440' (Team Fortress 2).

````
{ categories:
   [ 'Multi-player',
     'Cross-Platform Multiplayer',
     'Steam Achievements',
     'Steam Trading Cards',
     'Captions available',
     'Steam Workshop',
     'In-App Purchases',
     'Partial Controller Support',
     'Valve Anti-Cheat enabled',
     'Stats',
     'Includes level editor',
     'Commentary available' ],
  tags:
   [ 'Free to Play',
     'Multiplayer',
     'FPS',
     'Action',
     'Shooter',
     'Class-Based',
     'Team-Based',
     'Funny',
     'First-Person',
     'Trading',
     'Cartoony',
     'Competitive',
     'Online Co-Op',
     'Co-op',
     'Robots',
     'Comedy',
     'Tactical',
     'Crafting',
     'Cartoon',
     'Moddable' ],
  title: 'Team Fortress 2',
  genres: [ 'Action', 'Free to Play' ],
  developer: 'Valve',
  publisher: 'Valve',
  release_date: 'Oct 10, 2007',
  app_name: 'Team Fortress 2',
  price: 'Free to Play',
  early_access: false,
  metascore: '92',
  sentiment: 'Very Positive',
  num_reviews: '508,116' }
````

## Notes

This will automatically bypass age restrictions by passing in cookies to get around them.

This should work with most types of apps (games, movies, software, etc) but the data returned is focused around games.
