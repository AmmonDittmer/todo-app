const lists = {
    1: {
      name: "Shopping list",
      todos: [
        {
          text: 'bananas',
          completed: false
        },
        {
          text: '1 lbs ground turkey',
          completed: false
        }
      ]
    },
   }
    const currentList = lists[0];

function render() {
 // this will hold the html that will be displayed in the sidebar
 let listsHtml = '<ul class="list-group">';
 // iterate through the lists to get their names
 lists.forEach((list) => {
   listsHtml += `<li class="list-group-item">${list.name}</li>`;
 });
 listsHtml += '</ul>';
 // print out the lists
 document.getElementById('lists').innerHTML = listsHtml;

 // print out the name of the current list
 document.getElementById('current-list-name').innerText = currentList.name;

 // iterate over the todos in the current list
 let todosHtml = '<ul class="list-group-flush">';
 currentList.todos.forEach((list) => {
   todosHtml += `<li class="list-group-item">${todo.text}</li>`;
 });
 // print out the todos
 document.getElementById('current-list-todos').innerHTML = todosHtml;
}

function addList(input) {
  var li = document.createElement("ul");
  var id = li.setAttribute('id', 'myUL');
  var inputValue = document.getElementById("list").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something");
  } else {
    document.getElementById("output").appendChild(li, id);
  }
  document.getElementById("list").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var parent = this.parentElement;
      parent.remove()
    }
  }
}



function addTodo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Todo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("Todo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var parent = this.parentElement;
      parent.remove()
    }
  }
}
function removeTodo() {

}



function removeList() {
    
}

function markTodoAsCompleted() {

}

function removeAllTodosCompleted() {

}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

