const getPathFromChildToParent = (parent, child) => {
    let currentNode = child
    const pathArray = []
    while(currentNode !== parent) {
        const parentElement = currentNode.parentElement
        const childrenArray = Array.from(parentElement.children)
        pathArray.push(childrenArray.indexOf(currentNode))
        currentNode = parentElement
    }
    return pathArray
}

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while(path.length) {
        currentNode = currentNode.children[path.pop()]
    }
    return currentNode
}

const findCorrespondingNode = (rootA, rootB, target) => {
  // your code here
  const path = getPathFromChildToParent(rootA, target)
  return getValueFromPath(rootB, path)
}