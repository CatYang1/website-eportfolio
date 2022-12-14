let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.getElementsByClassName.top = e.pageY + 'px';
    cursor1.getElementsByClassName.left = e.pageX + 'px';
    cursor2.getElementsByClassName.top = e.pageY + 'px';
    cursor2.getElementsByClassName.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('.active')
        cursor2.classList.add('.active')
        }


    links.onmouseleave = () =>{
    cursor1.classList.remove('.active')
    cursor2.classList.remove('.active')
    }
});