const MAXLEVEL = 3
const $containerMenu = document.querySelector('.container_menu')
const menu = fetch('js/menu/menu.json').then(function(response){
    response.json().then(function(menu){
        const $menu = createMenu(menu)
        $containerMenu.appendChild($menu)
    })
})

function createMenu (menu, level = MAXLEVEL){
    // console.log(menu)
    
    const _div = document.createElement('div')
    _div.classList.add(`menu_container-${MAXLEVEL - level + 1}`)
    const _ul = document.createElement('ul')
    _ul.classList.add(`level-${MAXLEVEL - level + 1}`)

    _div.appendChild(_ul)

    if(level === 0){
        return _div
    }

    menu.forEach(function(menuItem) {
        const _li = document.createElement('li')
        _li.classList.add(`level-${MAXLEVEL - level + 1}`)
        const _a = document.createElement('a')
        _a.setAttribute('href', menuItem.url)
        _a.append(menuItem.name)

        _li.appendChild(_a)
        _ul.appendChild(_li)

        if(menuItem.children && menuItem.children.length) {
            const _ulChildren = createMenu(menuItem.children, level - 1)
            _li.appendChild(_ulChildren)
            _li.classList.add(`level-${MAXLEVEL - level + 1}`)
        }       
    })

    return _div
}