export const saveState = (store) => {
  try {
    const savedState = {
      todos: store.todos
    };
    var saveItem = JSON.stringify(savedState);
    localStorage.setItem('store', saveItem);
  } catch (err) {
    // do something
  }
};

export const loadState = () => {
  console.log('load from local storage;');

  try {
    const serializedState = JSON.parse(localStorage.getItem('store'));
    if (serializedState === null) {
      return undefined;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

