const MAXLEVEL = 3
const $containerMenu = document.querySelector('.container_menu')
const menu = fetch('js/menu/menu.json').then(function(response){
    response.json().then(function(menu){
        const $menu = createMenu(menu)
        $containerMenu.appendChild($menu)
    })
})

function createMenu (menu, level = MAXLEVEL){
    console.log(menu)
    
    const $ul = document.createElement('ul')
    $ul.classList.add(`level-${MAXLEVEL - level + 1}`)

    if(level === 0){
        return $ul
    }

    menu.forEach(function(menuItem) {
        const $li = document.createElement('li')
        $li.classList.add(`level-${MAXLEVEL - level + 1}`)
        const $a = document.createElement('a')
        $a.setAttribute('href', menuItem.url)
        $a.append(menuItem.name)

        $li.appendChild($a)
        $ul.appendChild($li)

        if(menuItem.children && menuItem.children.length) {
            const $ulChildren = createMenu(menuItem.children, level - 1)
            $li.appendChild($ulChildren)
            $li.classList.add(`level-${MAXLEVEL - level + 1}`)
        }       
    })

    return $ul
}