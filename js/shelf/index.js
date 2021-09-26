import createElement from '../createElement/index.js'

class Shelf {
    constructor(jsonFile, $container) {
        this.jsonFile = jsonFile
        this.$container = $container
        this.insertShelf()
    }

    insertShelf() {
        fetch(this.jsonFile).then(response => {
            response.json().then(shelf => {
                const _shelf = createShelf(shelf)
                this.$container.appendChild(_shelf)
            })
        })
    }

    createShelf(shelf) {
        const _ul = document.createElement('ul')

        const _lis = shelf.map((shelfProduct, index) => {
            const _li = createElement({
                tag: 'li',
                classes: ['classe1', 'classe2', 'classe2'],
                children: [
                    {
                        tag: 'span',
                        classes: ['classe1', 'classe2', 'classe2'],
                        children: [shelfProduct.qualquercoisa]
                    }
                ]
            })

            return _li
        })
        _ul.append(..._lis)

        return _ul
    }
}


export default Shelf



