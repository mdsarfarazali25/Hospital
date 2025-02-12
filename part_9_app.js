// PART 9 DOM
console.log(" PART 9 DOM");
console.log("-------------------");
// 01.,02,03 DOM
console.log("01.,02,03. DOM")
console.log("DOM = The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing developers to manipulate the content, structure, and styles of a website dynamically.");
console.log("What is the DOM? ");
console.log("Interface: The DOM acts as an interface between web pages and scripting languages like JavaScript.");
console.log("Tree Structure: It represents the HTML or XML document as a tree-like structure.");
console.log("Objects: Each part of the document (elements, attributes, text) is represented as an object in this tree.");
//04 pdf
console.log("------------------");
//05. Selecting element
console.log("05. Selecting element")
console.log("Selecting element : you can select HTML elements using various methods provided by the Document Object Model (DOM)");
console.log("1. getElementById(),2. getElementsByClassName(),3. getElementsByTagName(),4. querySelector(),5. querySelectorAll()");
console.log("1. getElementById() : Purpose: Selects a single element by its unique ID attribute.Syntax: document.getElementById('elementId')");
console.log("------------------");
//06. Selecting element  by class Name
console.log("06. Selecting element  by class Name");
console.log("2. getElementsByClassName() : Purpose: Selects a collection of elements that share a specific class name.Syntax: document.getElementsByClassName('className')");
console.log(document.getElementsByClassName("oldImg"));
let smallimg = document.getElementsByClassName("oldImg");
let selt = prompt("do you want to change the image? ans in yes or no")
if(selt== "yes"){
    for(let i=0; i<smallimg.length;i++){
        smallimg[i].src = "assets/spiderman_img.png";
        console.log(`the image sorce is change to ${i}`);
    };
}else{
    console.log("no Change");
}
console.log("------------------");
//07. Selecting element  by Tag Name
console.log("07. Selecting element  by Tag Name");
console.log("3. getElementsByTagName() : Purpose: Selects a collection of elements based on their tag name (e.g., div, p, img).,Syntax: document.getElementsByTagName('tagName')");
const allImages = document.getElementsByTagName("img");
console.log(allImages);
console.log("------------------");
//08. Selecting element  by Query selector
console.log("08. Selecting element  by Query selector");
console.log("4. querySelector() : Purpose: Selects the first element that matches a CSS selector.,Syntax: document.querySelector('cssSelector')");
const firstParagraph = document.querySelector("p");
console.dir(firstParagraph);
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.log("");
console.log("5. querySelectorAll() : Purpose:It  Selects all collection of elements that match a CSS selector.,Syntax: document.querySelectorAll('cssSelector')");
const allParagraph = document.querySelectorAll("div a");
console.dir(allParagraph);
console.dir(document.querySelectorAll("#description"));
console.dir(document.querySelectorAll(".oldImg"));
console.log("------------------");
//09. Setting of Object 
console.log("09. Setting of Object ");
console.log(" Setting of Object of : innerText, innerHTML, and textContent");
console.log("innerText : Definition: Represents the visible text content of an element (as rendered on the page). It ignores hidden elements and respects CSS styling like display: none or visibility: hidden");
console.log("in simple : Reads or modifies the text that is visibly shown on the page.")
let para = document.querySelector('p');
console.dir(para.innerText);
console.log("2.innerHTML : Represents the entire HTML content inside an element, including tags and nested elements.");
console.log("in simple : Reads or writes the HTML inside an element. and also we Can include or create new child elements using HTML tags");
console.dir(para.innerHTML);
console.log("3.textContent : Represents the raw text content of an element and all its children, regardless of visibility or formatting. It includes all text, even in hidden elements, but ignores HTML tags.");
console.log("in simple :Reads or modifies all the text content of an element.");
console.dir(para.textContent);
console.log("----------------------");
//10. Manipulating of attributes 
console.log("10. Manipulating of attributes ");
console.log("Attribute : Attributes are the additional properties of an element, such as (id, class, src, href, etc.)");
console.log("Manipulate attribute : It refers to working with the attributes of an HTML element using JavaScript. 1. Getting Attributes,2. Setting Attributes,");
console.log(" 1. Getting Attributes : It is Use to retrieve the 'value' of an attribute. (ex : id ='images') here id is attribute and images is value ");
let img = document.querySelector("img");
console.log("the id value is :-> "+img.getAttribute("id")); // Outputs the value of the 'id' attribute
console.log("2. Setting Attributes: It is  Use  to set or update the value of an attribute(ex : id ='images') through this we can change 'image' to 'imagien' .");
console.log("syntax : obl.setAttribute('attribute','changevalue')");
let changecolor = document.getElementsByTagName("div")[0];
document.getElementsByTagName("div")[0].setAttribute("class","colorchange")
console.log("the box background color is change : "+changecolor.setAttribute("class","colorchange"));
console.log("----------------------");
// 11. Manipulating of Style 
console.log("11. Manipulating of Style ");
console.log("Manipulating of Style :  we can use the style property in JavaScript to directly modify the InlineCSS styles of an element.");
console.log("1. Changing a Single Style: we can set individual CSS properties using the style property.");
let headding = document.querySelector("h1");
headding.style.color = "red"; // Changes text color to red
headding.style.backgroundColor = "yellow"; // Changes background color to yellow
console.log("2. Removing a Style: Set the style property to an empty string to remove it.");
headding.style.color = ""; // Removes the inline style for color
console.log("3. Setting Multiple Styles at Once: You can use the 'cssText' property to set multiple styles in one go.");
headding.style.cssText = "color: blue; font-size: 30px; margin: 10px;";
console.log("4. Getting a Computed Style : To get the actual style applied to an element (including styles from external CSS or inherited properties), use window.getComputedStyle().");
let computedStyle = window.getComputedStyle(headding);
console.log(computedStyle); // Outputs the computed text color
console.log("-------------------------");
// 12. class list objects
console.log("12. class list objects");
console.log(" class list : The classList property is a convenient way to manage the classes of an HTML element. It provides methods to add, remove, toggle, and check classes without directly modifying the className property.");
console.log("syntax : obj.classList; //we can check how many class there in a element");
console.log(headding.classList);
console.log("1. Adding a Class : Use classList.add() to add one or more classes ");
console.log(headding.classList.add("newClass"));
console.log(headding.classList.add("newClass1"));
console.log(headding.classList.add("newClass2"));
console.log(headding.classList.add("newClass3"));
console.log(headding.classList.add("newClass4"));
console.log(headding.classList);
console.log("2. Removing a Class : Use classList.remove() to remove one or more classes:");
console.log(headding.classList.remove("newClass"));
console.log(headding.classList.remove("newClass1"));
console.log(headding.classList);
console.log("3. Toggling a Class: Use classList.toggle() to add a class if it doesn't exist or remove it if it does:");
console.log(headding.classList.toggle("newClass2"));
console.log(headding.classList);
console.log("You can pass a second argument (true or false) to force adding or removing:");
console.log(headding.classList.toggle("newClass"));
console.log(headding.classList);
console.log("4. Checking if a Class Exists:Use classList.contains() to check if an element has a specific class:");
console.log(headding.classList.contains("newClass"));
console.log(headding.classList);
console.log("5. Replacing a Class: Use classList.replace() to replace an existing class with a new one");
console.log(headding.classList.replace("newClass","replaceClass"));
console.log(headding.classList);
console.log("-------------------------------");
//13 .Navigation 
console.log("13 .Navigation ");
console.log("Navigation : It is allows you to move between pages, navigate within a single page, or dynamically interact with elements on the page.");
console.log("parent element :We can use the 'parentElement' or parentNode property to get the parent of an element.");
let child = document.querySelector("h3");
let parent = child.parentElement; 
console.log(parent); 
console.log("children: Use the 'children' property to get a live collection of all child elements.")
let parent1 = document.querySelectorAll("div")[2];
console.log(parent1.children);
console.log("nextElementSibling : The nextElementSibling property is used to access the next sibling of an element. This property skips over non-element nodes, such as text or comment nodes, and returns the next sibling that is an element node.");
let para1 = document.querySelector("#description");
console.log(para1.nextElementSibling);
console.log("previousElementSibling : The previousElementSibling property is used to access the pruvious sibling of an element. This property skips over non-element nodes, such as text or comment nodes, and returns the previous sibling that is an element node.");
console.log(para1.previousElementSibling.style.cssText = "color: blue; font-size: 30px; margin: 10px; text-decoration : underline black wavy ;");
console.log("-------------------------");
// 14.Adding element
console.log("14.Adding element");
console.log("Adding element : Addding an element in a html body tag,there are diffrent type like")
console.log("1.creating element : first we have to create a element in by using 'document.createElement()' ");
let btn = document.createElement("button");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
btn.innerHTML="<span style = 'color : red;'><b>Submit</b></span>";
btn1.innerHTML="<span style = 'color : green;'><b>L'st Button</b></span>";
btn2.innerHTML="<span style = 'color : blue;'><b>F'st Button</b></span>";
let div = document.querySelector("div");
console.log("now were we cant to insert this button there are diffrent method to insert ");
console.log("1. appendChild : adding the new child element as the last child of parent");
console.log("syntax : parent.appendChild(newElement)");
div.appendChild(btn);
console.log("2.append(element) : in this method we can directly add any element or string at the last in a element ");
para.append("this is a new append method");// you can see in first para at the Last
para.append(btn1);// you can see in first para at the last
console.log("3.prepend() : In this method we can directly add any element or string at the First in a element");
para.prepend("this is a new append method");// you can see in first para at the first
para.prepend(btn2);// you can see in first para at the first
console.log("4. insertAdjacentElement() : In this method we can Adjest where we want to insert the element ");
console.log(" syntax : parent.insertAdjacentElement('position', node);");
console.log("note position : A string that specifies the position relative to the parent element it carrys 4 types");
let boxsqr = document.querySelector("#boxsqr");
let p =  document.createElement("p");
p.innerHTML="<span style = 'color : red;'>this is before begin</span>";
let p1 = document.createElement("p");
p1.innerHTML="<span style = 'color : red;'>this is After begin</span>";
let p2 = document.createElement("p");
p2.innerHTML="<span style = 'color : red;'>this is before end</span>";
let p3 = document.createElement("p");
p3.innerHTML="<span style = 'color : red;'>this is After end</span>";
let p4 = document.createElement("p");
console.log("1.beforebegin : Inserts the node before the parent element.");
console.log(div.insertAdjacentElement("beforebegin", p));
console.log("2.afterbegin : Inserts the node as the first child of the parent element.");
console.log(div.insertAdjacentElement("afterbegin", p1));
console.log("3.beforeend :Inserts the node as the last child of the parent element.");
console.log(div.insertAdjacentElement("beforeend", p2));
console.log("4.afterend:Inserts the node after the parent element. ");
console.log(div.insertAdjacentElement("afterend", p3));
console.log("--------------------------");
//15.Remove
console.log("15.Remove");
console.log("Remove : throgh this we can remove the element from the DOM");
let remove = document.querySelector("#remove");
console.log("i am remove  "+remove.remove());
console.log("--------------------------");
// 16. Practice quation
console.log("16. Practice quation");
console.log(" creating a element br using java script and dom");
//a
let body = document.querySelector("body")
let paragraph = document.createElement("p");
paragraph.innerHTML = "<span style='color : red'>hay, i am red</span >"
console.log(body.append(paragraph));
//b
let h3tag = document.createElement("h3");
h3tag.innerHTML="<span style='color : blue'> i'm Blue h3! </span >"
body.append(h3tag);
//c
let divtag = document.createElement("div");
let h1tag = document.createElement("h1");
let ptag = document.createElement("p");
h1tag.innerText = " i'm in div";
ptag.innerText = " ME TOO!";
divtag.classList.add("practiceclass");
body.append(divtag);
divtag.appendChild(h1tag);
divtag.appendChild(ptag);