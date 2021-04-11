# RandomEpisode
 Random Episode Generator

[![NPM](https://nodei.co/npm/randomepisode.png)](https://nodei.co/npm/randomepisode/) 

## Installation:
```
npm i randomepisode
```
## Usage:
```js
const RandomEpisode = require('randomepisode')

RandomEpisode.getRandomEpisode('The Office').then(i => {console.log(i)})
```
## Example Response:
```js
{
  Title: 'Niagara: Part 1',
  Year: '2009',
  Rated: 'TV-PG',
  Released: '08 Oct 2009',
  Season: '6',
  Episode: '4',
  Runtime: '30 min',
  Genre: 'Comedy',
  Director: 'Paul Feig',
  Writer: 'Greg Daniels (developed for american television by), Greg Daniels, Mindy Kaling, Ricky Gervais (creator), Stephen Merchant (creator)',
  Actors: 'Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer',
  Plot: "The Office travels to Niagara Falls to celebrate Jim and Pam's wedding under strict orders not to mention Pam's pregnancy. Michael, Dwight, and Andy all want to hook up with guests at the wedding and Michael and 
Dwight meet twins.",
  Language: 'English',
  Country: 'N/A',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTgxNjY4NDg1OF5BMl5BanBnXkFtZTcwOTE5MTk4Mg@@._V1_SX300.jpg',
  Ratings: [ { Source: 'Internet Movie Database', Value: '9.4/10' } ],
  Metascore: 'N/A',
  imdbRating: '9.4',
  imdbVotes: '5544',
  imdbID: 'tt1487742',
  seriesID: 'tt0386676',
  Type: 'episode',
  Response: 'True'
}
```