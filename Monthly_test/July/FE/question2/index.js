const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
xhr.send();
xhr.onload = function(){
    let result = JSON.parse(xhr.responseText);
    for (let elem of result) {
    document.getElementById('row').innerHTML += `<div class="flip-card col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <div class="flip-card-inner">
      <div class="flip-card-front">
      <h4>Word : ${elem.name.split(' ')[0]}</h4>
      </div>
      <div class="flip-card-back">
      <p><h6>${elem.body}</h6></p>
      </div>
    </div>
  </div>`

    }
};
