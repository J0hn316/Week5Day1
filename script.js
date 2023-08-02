//Task 5.1
let showingSubMenu = false


// Task 5.0
let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



const mainEl = document.querySelector("main")

mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr")  

const topMenuEl = document.querySelector("#top-menu")

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")

menuLinks.forEach((el) => {
  const link = document.createElement("a")
  link.setAttribute("href", el.href)
  link.innerText = el.text
  topMenuEl.appendChild(link)
})

// Task 4.0
const submenuEl = document.querySelector("#sub-menu")

// Task 4.1
submenuEl.style.height = "100%"

//Task 4.2
submenuEl.style.backgroundColor = "var(--sub-menu-bg)"

//Task 4.3
submenuEl.classList.add("flex-around")

//Task 4.4
submenuEl.style.position = "absolute"

//Task 4.5
submenuEl.style.top = "0"



// Task 5.1
let topMenuLinks = document.querySelectorAll("a")

// Tasks 5.2 

topMenuEl.addEventListener("click", (el) =>{
    el.preventDefault()
    // console.log(el.target)

    let aEl = menuLinks.filter((element) =>{
      return element.text === el.target.textContent
    })
    // console.log(aEl)
    
    // console.log(showingSubMenu)

    //Task 5.4
    for(let i = 0; i< topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove('active') 
    }
    

    if(el.target.tagName === "A"){
      // console.log(el.target.innerText)
      //Task 5.5
      el.target.classList.add('active')
      
      showingSubMenu = false;
      submenuEl.style.top = '0';
    }

    if(aEl[0].subLinks){
      showingSubMenu = true;
    }
    // console.log(el.target)
    

    //Task 5.7 

    if(showingSubMenu === true){
      let sublink = menuLinks.filter((element) =>{
        return element.text === el.target.textContent
      })[0].subLinks
      // console.log(sublink)
      buildSubMenu(sublink)
      submenuEl.style.top = "100%";
    }else{
      showingSubMenu = false;
      submenuEl.style.top = 0;
    }

    if(el.target.textContent){
      mainEl.innerHTML = `<h1>${el.target.textContent}</h1>`
    }
  

 })

// Task 5.8
function buildSubMenu(sublinks){
  submenuEl.innerHTML = "";
  // console.log(sublinks)
  for(let i=0; i<sublinks.length; i++){
    // console.log(sublinks[i].subLinks)
    let aLink = document.createElement('a')
    aLink.href = sublinks[i].href
    aLink.textContent = sublinks[i].text
    submenuEl.appendChild(aLink);
  }

//   let aEl = menuLinks.filter((element) =>{
//        return element.text === el.target.textContent
//      })
//  console.log(aEl)
} 

submenuEl.addEventListener('click',(evt) =>{
  evt.preventDefault()

  for(let i = 0; i< topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove('active') 
  }

  if(evt.target.tagName === "A"){
        // console.log(evt.target.innerText)
        evt.target.classList.add('active')
    }
    
  showingSubMenu = false;
  submenuEl.style.top = 0;

  if(evt.target.textContent){
    mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`
  }
})