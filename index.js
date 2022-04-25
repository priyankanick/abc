var e;
async function api_call() {

    var data = await fetch('https://priyankanick.github.io/bakery/data.json')
    e = await data.json();
    console.log(e);
    for (let i = 0; i < 6; i++) {

        document.getElementById("row").innerHTML+=` <div class="col-xxl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 100%">
                <img src="${e[i].pic}" class="card-img-top poster" alt="...">
                    <div class="card-body">
                        <h5 class="card-title hide-text">${e[i].name}</h5>
                        <p class="card-title hide-text">${e[i].price}</p>
                        <a href="./page2.html"  class="btn btn-primary"  onClick="saveData('${i}')">Show</a>
                    </div>
            </div>
        </div>`
         
        
    }
}