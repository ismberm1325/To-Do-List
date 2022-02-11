
    const form = document.querySelector(".form");
    const input = document.querySelector("#input");
    const list = document.querySelector("#res");
    const btn = document.querySelector("#butn");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        input.value ="";

        if (!task) {
            alert("Enter tasks and click to 'Add Todo'");
            return;
        }

        const t1 = document.createElement("div");
        t1.classList.add("task");
        const t2 = document.createElement("div");
        t2.classList.add("todo-item");
        t2.innerText=task;

        t1.appendChild(t2);

        list.appendChild(t1);
        t1.addEventListener('click', () => {
            list.removeChild(t1);
        });

    })
