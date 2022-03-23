
    // creating and defining construct function here....
    function constFunc(n) {
        this.name = n;
        this.date = new Date().getDay()+"/"+new Date().getMonth() +"/"+ new Date().getFullYear();
        // this.date = new Date();
        this.status = false;

    }
    var data = JSON.parse(localStorage.getItem("toggleData")) || [];
    displayData(data);

    // target form and add addEventListener submit. when form submit then it is perform....
    document.querySelector("form").addEventListener("submit", constData);
    function constData(event) {
        event.preventDefault();
        var inputName = document.querySelector(".task").value;      // Target input field here and get value


        // constructor Object....
        var obj = new constFunc(inputName);     // inputName  pass here as an Perameter..
        data.push(obj);

        localStorage.setItem("toggleData", JSON.stringify(data));     // Data same in  localstorage..
        displayData(data);

    }

    // for displaing data create function here....
    function displayData(data) {
        document.querySelector(".counter").textContent = data.length;

        document.querySelector("tbody").innerHTML = "";

        data.map(function (element, index) {

            var tr = document.createElement("tr");          // create a table row here..

            // create table Data here..
            var td1 = document.createElement("td"); 
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");

            if (element.status == true) {        // if statur is true then lineThrow and change color with green else red
                var changeColor = "green lineThrow"
            } else {
                var changeColor = "red"
            }
            tr.setAttribute("class", changeColor)       // set a attrubute class
            td4.setAttribute("class", "cursor");
            td5.setAttribute("class", "cursor");


            td4.textContent = 'Change Status';
            td5.textContent = "delete";

            td1.textContent = element.name;
            td2.textContent = element.date;
            td3.textContent = element.status;

            td4.addEventListener("click", function () {
                toggle_task(element);

            });


            td5.addEventListener("click", function () {
                delete_task(index);
                console.log(index);

            });


            // append all td(Table Data)  in tr(Table Row).  here..
            tr.append(td1, td2, td3, td4, td5);
            document.querySelector("tbody").append(tr);     //tr append in Table Body
        });
    }

    // for toggle task status use property here..
    function toggle_task(element) {
        element.status = !element.status      // if statur true then change False, and if false then true
        localStorage.setItem("toggleData", JSON.stringify(data));    // for change satus in Local storage 
        displayData(data);          // after then soing data in browser


    }
    // remove data from localstorage and browser
    function delete_task(index) {
        data.splice(index, 1);      //  splice() function is a remove element 
        localStorage.setItem("toggleData", JSON.stringify(data));
        displayData(data);      //after delete data then soing data in browser

    }
