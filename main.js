
// let p1 = document.getElementById("id1");
// p1.textContent += " ali";

// document.getElementById("id1").innerHTML += " world";
// document.getElementById("id1").style.color = "red";

// let text = document.getElementById("id1");
// text.innerText = "world";
// text.style.color = "red";

// // console.log(text);

// // class name is an array
// // use index for class name
// let items = document.getElementsByClassName("item");
// items[0].innerText = "1111"
// // console.log(items)

// let list = document.getElementsByTagName("li")
// list[0].innerText = "dddd";
// // console.log(list);


// let li = document.querySelectorAll("li");
// list[0].innerText = "222";
// console.log(li);

// // document.querySelector();
// // document.querySelectorAll();
// // document.getElementById();
// // document.getElementsByClassName();

// // innerText vs textContent
// const paragraph = document.querySelector('p');
// console.log("innerText: ", paragraph.innerText = "test");
// console.log("textContent: ", paragraph.textContent = "       test");

let h1 = document.getElementsByClassName("class1");
h1[0].style.color = "red";
h1[0].style.backgroundColor = "green";

let p1 = document.getElementById("id1");
// p1.innerText = "world";
// p1.style.color = "red";
p1.style.fontWeight = "bold";
p1.classList.add("p-style");

// 
let img1 = document.getElementsByTagName("img");
img1[0].src = "https://www.logologo.com/logos/abstract-isometric-logo-design-free-logo.jpg"

let list1 = document.querySelector("ul");

list1.style.display = "flex";

for (let i = 1; i <= 3; i++){
    const li = document.createElement("li");
    li.style.border = "1px solid black";
    li.style.textDecoration = "underline"
    list1.appendChild(li).textContent = `item ${i}`;
}


let table = document.createElement("table");
let table_body = document.createElement("tbody");

// let row = document.createElement("tr");
// let cell = document.createElement("td");

// let cellText = document.createTextNode("cell is row " + j + ", column " + i);


// cell.appendChild(cellText);

// row.appendChild(cell);

// table_body.appendChild(row);

// table.appendChild(table_body);

// document.body.appendChild(table);


for(let i = 1; i <= 2; i++){

    let row = document.createElement("tr");

    for(let j = 1; j <= 3; j++){

        let cell = document.createElement("td");
        let cellText = document.createTextNode(`row ${i} col${j}`);

        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    table_body.appendChild(row);
}

table.appendChild(table_body);

document.body.appendChild(table);

// let row1 = table.insertRow(0);

// let cell1 = row1.insertCell(0);
// let cell2 = row1.insertCell(1);

// let row2 = table.insertRow(0);

// let cell12 = row1.insertCell(0);
// let cell22 = row1.insertCell(1);

// cell1.innerHTML = "CELL1";
// cell2.innerHTML = "CELL2";



