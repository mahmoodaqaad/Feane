// nav bar 

document.querySelector(".icons").onclick = () => {
    document.querySelector("header .container nav").classList.toggle("active")
    document.querySelector(".icons").classList.toggle("rot")
    document.querySelector(".icons").classList.toggle("active")
    setTimeout(() => {
        document.querySelector(".icons i").classList.toggle("fa-x")

    }, 300);
}


let boxs = document.querySelectorAll(".landing .boxs .box")


let dots = document.querySelectorAll(".landing .doits span")

dots.forEach((ele, i) => {
    ele.onclick = () => {
        rmoveboxsAct()

        boxs[i].classList.add("active")
        boxs[i + 1].classList.add("next")

        boxs[i - 1].classList.add("last")

        ele.classList.add("active")
    }

})

function rmoveboxsAct() {
    dots.forEach((ele) => {

        ele.classList.remove("active")
        ele.classList.remove("last")

    })

    boxs.forEach(ele => ele.classList.remove("active"))

}

// aimge


let foods = document.querySelectorAll(".menu .container .boxs .box .img")

let buttones = document.querySelectorAll(".menu .container .head button")

buttones.forEach(button => {
    button.onclick = () => {
        buttones.forEach(button => button.classList.remove("active"))
        
        mangeimg(button)
        button.classList.add("active")
    }

})

function mangeimg(button) {
    foods.forEach(box => {
        box.parentElement.style.display = "none"

    })
    document.querySelectorAll(button.dataset.menu).forEach(e => {

        e.parentElement.style.display = "block"


    })

}

document.querySelector("i.login").onclick = () => {
    login()

}
function login() {

    let overlay = document.createElement("div")
    overlay.className = "overlay"
    console.log(overlay)
    document.body.append(overlay)
    let user = document.createElement("div")
    user.className = "user"
    user.innerHTML = `
    <i class="fa fa-x close"></i>
    <h1 class="login">login</h1>
    <div class="inputs">
    <i class="fa fa-user"></i>
    <form>
    <div>
    <input type="text" placeholder="Your Email">
    </div>
    <div>
    <input type="password" placeholder="Your password">
    </div>
    <button class="btn2">LOGIN</button>
    </form>
    <div>
    </div>`
    overlay.append(user)

    let close = document.querySelector(".close")
    let login = document.querySelector(".btn2")

    close.onclick = () => {
        overlay.style.scale = 0;
    }
}

//======


// show more

document.querySelector(".menu .container .show").onclick = (e) => {
    e.target.remove()
    add()
}
function add() {
    document.querySelector(".menu .container .boxs").innerHTML += `        <div class="box"><!--bur-->
    <div class="img all burger">
    <img src="images/f7.png" alt="">
    </div>
    <div class="info">
    <h3>Tasty Burger </h3>
    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem
    repellendus sed eaque </p>
    <div class="sale">
    <span>$12</span>
    <i class="fa-solid fa-cart-shopping"></i>
    </div>
    </div>
    </div>
    <div class="box"><!--pizza-->
    <div class="img all burger">
    <img src="images/f8.png" alt="">
    </div>
    <div class="info">
    <h3>Tasty Burger </h3>
    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem
    repellendus sed eaque </p>
    <div class="sale">
    <span>$14</span>
    <i class="fa-solid fa-cart-shopping"></i>
    </div>
    </div>
    </div>
    <div class="box"><!--pasta-->
    <div class="img all pasta">
    <img src="images/f9.png" alt="">
    </div>
    <div class="info">
    <h3>Delicious Pasta </h3>
    <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem
    repellendus sed eaque </p>
    <div class="sale">
    <span>$10</span>
    <i class="fa-solid fa-carts-shopping"></i>
    </div>
    </div>
    </div>`
}