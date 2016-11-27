var counter = 1;
var limit = 10;

function addQuestion(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " questions");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br><class = 'form-group'> <label for='comment'>Question " + counter + ":</label> <input type='text' class='form-control' id='question" + counter + "'></input> </class><label for='comment'>A:</label> <input type='tel' class='form-control' id='a"+counter+"'></input><label for='comment'>B:</label> <input type='tel' class='form-control' id='tel'></input><label for='comment'>C:</label> <input type='tel' class='form-control' id='c"+counter+"'></input><label for='comment'>D:</label> <input type='d"+counter+"' class='form-control' id='tel'></input><label for='comment'>Answer:</label> <select class='form-control' id='ans"+counter+"'><option>A</option><option>B</option><option>C</option><option>D</option></select>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
