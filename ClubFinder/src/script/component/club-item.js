class ClubItem extends HTMLElement {
    set club(club) {
        this._club = club;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <!--<img class="fan-art-club" src="${this._club.combinedKey}" alt="Fan Art">-->
        <div class="club-info">
            <table>
           <thead>
               <tr>
                   <th>Negara</th>
                   <th>Region</th>
                   <th>Terkonfirmasi</th>
                   <th>Sembuh</th>
                   <th>Meninggal</th>
                   <th>Kasus Aktif</th>
               </tr>
           </thead>
           <td> ${this._club.countryRegion}</td>
           <td> ${this._club.provinceState}</td>
           <td> ${this._club.confirmed}</td>
           <td> ${this._club.recovered}</td>
           <td> ${this._club.deaths}</td>
           <td> ${this._club.active}</td>
           
       </table>
        </div>`;
    }
 }
  
 customElements.define("club-item", ClubItem);