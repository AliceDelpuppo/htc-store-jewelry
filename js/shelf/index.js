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
                classes: ['mySwiper'],
                children: [
                    {
                        tag: 'div',
                        classes: ['swiper'],
                        children: [
                            {
                                tag: 'div',
                                classes: ['swiper-wrapper'],
                                children: [
                                    {
                                        tag: 'div',
                                        classes: ['swiper-slide'],
                                        children: [
                                            {
                                                tag: 'div',
                                                classes: ['wrapper-image'],
                                                children: [
                                                    {
                                                        tag: 'div',
                                                        classes: ['image'],
                                                        children: [
                                                            {
                                                                tag: 'img',
                                                                classes: ['img'],
                                                                attributes: {
                                                                    src: 'shelfProduct.img',
                                                                    alt: ''
                                                                }
                                                            }                                                            
                                                        ]
                                                    },
                                                    {
                                                        tag: 'div',
                                                        classes: ['wrapper-selo'],
                                                        children: [
                                                            {
                                                                tag: 'div',
                                                                classes: ['selo-on-sale'],
                                                                children: [
                                                                    {
                                                                        tag: 'p',
                                                                        classes: ['text-uppercase'],
                                                                        children: ['-15%']
                                                                    },
                                                                    {
                                                                        tag: 'p',
                                                                        classes: ['text-uppercase'],
                                                                        children: ['OFF']
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                tag: 'div',
                                                                classes: ['image-selo-news'],
                                                                children: [
                                                                    {
                                                                        tag: 'span',
                                                                        classes: ['text-uppercase'],
                                                                        children: ['Novidades']
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                tag: 'div',
                                                                classes: ['image-selo-free-shipping'],
                                                                children: [
                                                                    {
                                                                        tag: 'span',
                                                                        classes: 'text-uppercase',
                                                                        children: ['Frete grátis']
                                                                    }
                                                                ]
                                                            }

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'div',
                                                classes: ['wrapper-name'],
                                                children: [
                                                    {
                                                        tag: 'p',
                                                        classes: ['text-uppercase', 'p_text-primary-name'],
                                                        children: ['Ametista 100% Limpa']
                                                    },
                                                    {
                                                        tag: 'p',
                                                        classes: ['p_text-secundary-name'],
                                                        children: ['4,10 ct | 9,73mm x 9,63mm']
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'div',
                                                classes: ['wrapper-value'],
                                                children: [
                                                    {
                                                        tag: 'p',
                                                        classes: ['value'],
                                                        children: ['R$340,00']
                                                    },
                                                    {
                                                        tag: 'p',
                                                        classes: ['p_text-secundary-name'],
                                                        children: ['Compre em até 8x sem juros']
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'div',
                                                classes: ['wrapper-button-buy'],
                                                children: [
                                                    {
                                                        tag: 'p',
                                                        classes: ['button', 'text-uppercase'],
                                                        children: ['Comprar']
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
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



