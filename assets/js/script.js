let input = document.querySelector("#input");
let task_btn = document.querySelector(".task-btn");
let list_cont = document.querySelector(".list-container");

task_btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("please enter your task");
    }

    else {
        let list_cont = document.querySelector(".list-container");

        // box
        const list_box = document.createElement("div");
        list_box.setAttribute("class", "list-box");
        list_cont.appendChild(list_box);

        // text
        let txt = document.createElement("div");
        txt.setAttribute("class", "list-txt");
        txt.innerHTML = input.value;
        list_box.appendChild(txt);

        // svg
        let svg = document.createElement("div");
        svg.setAttribute("class", "list-svgs");
        list_box.appendChild(svg);

        // right-svg
        let right_svg = document.createElement("div");
        right_svg.setAttribute("class", "right-svg");
        svg.appendChild(right_svg);

        // delet-svg
        let delet_svg = document.createElement("div");
        delet_svg.setAttribute("class", "delet-svg");
        svg.appendChild(delet_svg);

        // delet the task click on delet
        delet_svg.addEventListener("click", function () {
            list_cont.removeChild(list_box);
        })

        // click on right svg
        right_svg.addEventListener("click", function () {
            txt.classList.toggle("line-thro");
            right_svg.classList.toggle("green-tick");
        })

    }
    input.value = "";
})