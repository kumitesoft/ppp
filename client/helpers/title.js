const obj = [
    {
        title: 'mezczyzna',
        description: 'Mezczyzni'
    },
    {
        title: 'kobieta',
        description: 'Kobiety'
    }
]

export const titleFn = (subCategory) => {
    let title = obj.filter(el => el.title === subCategory)[0]
    
    return title
  };