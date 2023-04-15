let input = document.getElementById('textfield');
let btn = document.getElementById('addtaskbtn');
let conbox = document.getElementById('newbar');
let check = document.getElementById('done');

btn.addEventListener('click', function(){
    var newdiv = document.createElement('div');
    newdiv.classList.add('bar-02');
    conbox.appendChild(newdiv);

    var para = document.createElement('p')
    para.innerText = input.value;
    para.classList.add('para-styling');
    newdiv.appendChild(para);
    

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newdiv.appendChild(checkbox);
    
    checkbox.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    });

    newdiv.addEventListener('dblclick', function(){
        newdiv.classList.remove('bar-02');
        newdiv.classList.add('bar');
    })

    input.value = "";
})

