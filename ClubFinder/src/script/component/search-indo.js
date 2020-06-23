class SearchIndo extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#searchElement").value;
    }
  
    render() {
        this.innerHTML = `
        <div class="search-contain">
            <button id="getCovid" type="submit">Search</button>
        </div>
        `;
  
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
        
    }
 }
  
 customElements.define("search-indo", SearchIndo);