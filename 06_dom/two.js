//These statements were executed on the browser window directly

undefined
document.getElementById('title')
//<h1 id=​"title" class=​"heading">​DOM Manipulation from Chai aur Code​</h1>​
document.getAnimations('title').id
//undefined
document.getElementById('title').id
//'title'
document.getElementById('title').className
//'heading'
document.getElementById('title').getAttribute('id')
//'title'
document.getElementById('title').getAttribute
//ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('class')
//'heading'
document.getElementById('title').getAttribute('id')
//'title'
document.getElementById('title').setAttribute('class', 'test')
//undefined
document.getElementById('title').getAttribute('class')
//'test'
document.getElementById('title')
//<h1 id=​"title" class=​"test">​DOM Manipulation from Chai aur Code​</h1>​

document.getElementById('title')
//<h1 id=​"title" class=​"test">​DOM Manipulation from Chai aur Code​</h1>​
const title = document.getElementById('title')
//undefined
title
//<h1 id=​"title" class=​"test">​DOM Manipulation from Chai aur Code​</h1>​

title.style.backgroundColor = 'sky blue'
//'sky blue'
title.style.backgroundColor = 'green'
//'green'
title.style.padding = '20px'
//'20px'
title.style.borderRight = '50px'
//'50px'
title
//<h1 id=​"title" class=​"test" style=​"background-color:​ green;​ padding:​ 20px;​ border-right:​ 50px;​">​DOM Manipulation from Chai aur Code​</h1>​
title.style.borderRadius = '50px'
//'50px'


title.textContent
//'DOM Manipulation from Chai aur Code'
title.innerHTML
'DOM Manipulation from Chai aur <span style="display: none;">Code</span>'
title.innerText
//'DOM Manipulation from Chai aur Code'

//Difference between innerText and textContent and innerHTML:
/*
--> In "innerText" only the text that is visible on the web page will be visible
--> On the other hand in 'textContent' all of the text will be displayed even if it is hidden due to some css styling properties like "displa: none" or any other property. All of the text present in the tag will be displayed irrespective of any other css properties.
--> Finally in "innerHTML" all the text along with the html tags will be displayed
*/

document.getElementsByClassName('heading')
/*
HTMLCollection [h1#title.heading, title: h1#title.heading]
0
: 
h1#title.heading
title
: 
h1#title.heading
length
: 
1
[[Prototype]]
: 
HTMLCollection
*/


//QUERY SELECTOR
document.querySelector('h1')
//Will return the first tag. in this case the first h1 that it will encounter
//<h1 id=​"title" class=​"heading">​"DOM Manipulation from Chai aur "<span style=​"display:​ none;​">​Code​</span>​</h1>​

// to get the values with the class name or id:
document.querySelector('#title')
//<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('.heading')
//<h1 id=​"title" class=​"heading">​…​</h1>​

//Similar to CSS selectors we can get the values using input field
document.querySelector('input[type="password"]')
//<input type=​"password" name id>​

//Suppose i want to change the color of the first li in the ul to green we need to write the js code as follows:
/*
document.querySelector('ul')
<ul>​…​</ul>​
const myUl = document.querySelector('ul')
undefined
myUl.querySelector('li')
<li>​…​</li>​::marker​"one"</li>​
const turnGreen = myUl.querySelector('li')
undefined
turnGreen.style.backgroundColor = "green"
'green'
*/


//OUERY SELECTOR ALL
const tempList = document.querySelectorAll('li') // will give a node list which is not an array. if we define an array we get all the methods/ options of using filter, map and many more. nodelist on the other hand just uses forEach for traversing it.

tempList
//NodeList(3) [li, li, li]
tempList[0].style.backgroundColor = "green"
//'green'

//Even if we have only one element in the node list we will have to pass the index to change the properties or to manipulate its state:
const myH1 = document.querySelectorAll('h1')
//undefined
myH1
//NodeList [h1#title.heading]
myH1[0].style.color = 'red'


//Using ForEach
const tempList = document.querySelectorAll('li')
//undefined
tempList
//NodeList(3) [li, li, li]
tempList.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

//getElementByClassName
//This will give a HTMLCollection which again wont allow us to iterate/ traverse through the elements using forEach, also we cant use filter, map, reduce etc as it is not an array
//To do so we will have to first convert it into an array and then we can use all the functionality of array
const tempClassList = document.getElementsByClassName('list-item')
//undefined
tempClassList
//HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)
const convertedArray = Array.from(tempClassList)
//undefined
convertedArray
//(4) [li.list-item, li.list-item, li.list-item, li.list-item]
convertedArray.forEach(function(li){
        li.style.color = 'orange'
})

