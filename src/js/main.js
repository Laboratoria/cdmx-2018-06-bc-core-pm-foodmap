
const url = "https://opentable.herokuapp.com/api/cities/";

fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data);
    
})

/*
id 61
london
state id 142

  "state_name": "England and Wales",
      "state_code": "England and Wales"
 */