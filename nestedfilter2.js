const data = [{
    menuName: "Hot dogs",
    menu: [
        {
        dishId: '1',
        dish_has_categories: [{
            CategoryId: '8'
        }]
    },
     {
        dishId: '2',
        dish_has_categories: [{
            CategoryId: '9'
        }]
    }]
},
{
    menuName: "Burgers",
    menu: [{
        dishId: '3',
        dish_has_categories: [{
            CategoryId: '6'
        }]
    }, {
        dishId: '4',
        dish_has_categories: [{
            CategoryId: '4'
        }]
    }]
},
{
    name: "Drinks",
    menu: []
}
]

const output=data.filter(element=>element.menu.some(y=>y.dish_has_categories).some(z=>z.CategoryId==='4'))
console.log(output)