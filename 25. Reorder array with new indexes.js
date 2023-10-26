function sort(items, newOrder) {
    for(let i = 0; i < items.length; i++) {
      const j = newOrder[i];
      swap(items, i, j);
      swap(newOrder, i, j);
    }
  
    return items;
  }
  
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }