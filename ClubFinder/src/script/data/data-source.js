
import clubs from './clubs.js';
class DataSource {
    static searchClub(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/confirmed`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;