const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const addItem = todo => {

    const html =`
<li class="items">
            <span>
                ${todo}
            </span>
            <i class="far fa-trash-alt delete"></i>
        </li>
`;

list.innerHTML += html;
};

addForm.addEventListener("submit", e  => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
       addItem(todo); 
       addForm.reset();
    }else {
        alert("please add to do!")
    }
});

list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

