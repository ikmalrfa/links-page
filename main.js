const user = document.querySelector('.con-user')
    const menu = document.querySelector('.con-menu')
    const contents = document.querySelector('.con-contents')
    const links = document.querySelector('.con-contents .con-links')
    const posts = document.querySelector('.con-contents .con-posts')
    window.addEventListener("load", function(event) {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)

        setTimeout(function () {
        window.scrollTo(0, 1)
        }, 0)
        const h = window.innerHeight - menu.clientHeight - user.clientHeight
        contents.style.height = `${h}px`
        links.style.height = `${h}px`
        posts.style.height = `${h}px`
    })

    function handleClick(evt, name) {
        const items = document.querySelectorAll('.con-menu button')
        const el = evt.target
        items.forEach((item) => {
            item.classList.remove('active')
        })
        el.classList.add('active')
        const elScroll = document.querySelector(`.${name}`)
        contents.scrollTo(elScroll.offsetLeft, 0)
    }

    contents.addEventListener('scroll', (evt) => {
        if (evt.target.scrollLeft > window.innerWidth / 2 && evt.target.scrollLeft < window.innerWidth + (window.innerWidth / 2)) {
            menu.querySelector('button:nth-child(1)').classList.remove('active')
            menu.querySelector('button:nth-child(2)').classList.add('active')
            menu.querySelector('button:nth-child(3)').classList.remove('active')
        } else if (evt.target.scrollLeft < window.innerWidth / 2) {
            menu.querySelector('button:nth-child(1)').classList.add('active')
            menu.querySelector('button:nth-child(2)').classList.remove('active')
            menu.querySelector('button:nth-child(3)').classList.remove('active')
        } else if (evt.target.scrollLeft > window.innerWidth + (window.innerWidth / 2)) {
            menu.querySelector('button:nth-child(2)').classList.remove('active')
            menu.querySelector('button:nth-child(3)').classList.add('active')
        }
    })
