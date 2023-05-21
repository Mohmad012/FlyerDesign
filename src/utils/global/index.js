export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function searchObjectsByID(id, objects, subObject) {
  let results = []

  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i]

    if (obj.id === id) {
      results.push(obj)
    }

    if (obj[subObject] && obj[subObject]?.length > 0) {
      for (let j = 0; j < obj[subObject]?.length; j++) {
        let childObj = obj[subObject][j]
        if (childObj.id === id) {
          results.push(childObj)
        }
      }
    }
  }

  return results
}
