let home_but_1 = document.getElementById('but-home-1') 
let home_but_2 = document.getElementById('but-home-2') 
let home_but_3 = document.getElementById('but-home-3') 

let home_num = document.getElementById('home-num')
let guest_num = document.getElementById('guest-num')

let home_text = document.getElementById("home-text")
let guest_text = document.getElementById("guest-text")

let home = 0
let guest = 0

function add1home(){
    home += 1
    home_num.innerHTML = home
    checkLeader()
}

function add2home(){
    home += 2
    home_num.innerHTML = home
    checkLeader()
}

function add3home(){
    home += 3
    home_num.innerHTML = home
    checkLeader()
}

function add1guest(){
    guest += 1
    guest_num.innerHTML = guest
    checkLeader()
}

function add2guest(){
    guest += 2
    guest_num.innerHTML = guest
    checkLeader()
}

function add3guest(){
    guest += 3
    guest_num.innerHTML = guest
    checkLeader()
}

function checkLeader(){
    if (home > guest){
        home_text.style.color = 'green'
        guest_text.style.color = '#EEEEEE'
    }
    else if (guest > home){
        home_text.style.color = '#EEEEEE'
        guest_text.style.color = 'green'
    }
    else{
        home_text.style.color = '#EEEEEE'
        guest_text.style.color = '#EEEEEE' 
    }

}