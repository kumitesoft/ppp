const obj = [
    {
        category: 'mezczyzna',
        data: ['./swaper/mezczyzna/one.png', './swaper/mezczyzna/two.png', './swaper/mezczyzna/three.png', './swaper/mezczyzna/four.png']
    }
]

export const getProperImages = (category) => {
    obj.filter(el => el.category === category)
    return obj[0].data 
}