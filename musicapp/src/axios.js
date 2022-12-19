

const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
  params: {query: 'metallica', search_type: 'SONGS_ARTISTS'},
  headers: {
    'X-RapidAPI-Key': 'd46c05d02cmsh9c6cf4ce6e91283p1155d4jsnb4f8ae7a3b50',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};


export default options;
