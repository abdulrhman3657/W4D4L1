
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

let list1 = document.querySelectorAll("li");

list1[0].innerText = "111";
list1[1].innerText = "222";
list1[2].innerText = "333";
// list1[3].innerText = "444";

// console.log(list1)