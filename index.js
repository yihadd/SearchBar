const data = [
  {
      "id": 1,
      "name": "Mark L. Fernando",
      "email": "markfernando93@live.com",
      "skill": "Web and graphic design",
      "location": "Quezon City"
  
  },
  {
    "id": 2,
    "name": "Jennifer S. Oribe",
    "email": "oribe.jennifer@ymail.com",
    "skill": "Web development and web design",
    "location": "Pasig City"
},
{
  "id": 3,
  "name": "Daniel Leopold S. Veron",
  "email": "dlveron@gmail.com",
  "skill": "Network troubleshooting",
  "location": "Philippines"
},

]

const search = document.querySelector('#searchinput');
const result = document.querySelector('.result');


const searchitem = () => {
    // console.log(search.value);
    let searchValue = '';
    let newdata = [];

    if (search.value.length > 0) {
        searchValue = search.value.toLowerCase();
        // console.log(searchValue);

        newdata = data.filter((item) => {
            // console.log(item.name.toLocaleLowerCase().includes(searchValue));


            // if(item.name.toLocaleLowerCase().includes(searchValue)){
            //     // console.log(item.name)
            // }


            return item.name.toLowerCase().includes(searchValue) || item.email.toLowerCase().includes(searchValue)
                || item.age.toLowerCase().includes(searchValue)
                || item.location.toLowerCase().includes(searchValue)
        })

        // console.log(newdata);
        showdata(newdata)
    }

}



const nomatches = document.querySelector('#nomatches');
const showdata = (newdata) => {
    console.log(newdata);
    let html = "";


    if (newdata.length > 0) {
        newdata.forEach((item) => {
            html += `
        <div class="card">
            <div class="card-header">
                <h3>${item.name}</h3>
                <h4>${item.email}</h4>
            </div>

            <div class="card-body">
                <p>Age: ${item.age}</p>
                <p>Location: ${item.location}</p>
            </div>
        </div>
        `
        })

        result.innerHTML = html;
    }

    else {

        console.log('No Data Found');
        result.innerHTML = `<p id="nomatches">No Data Found</p>`;

     

    }
}
search.addEventListener('keyup', searchitem)












