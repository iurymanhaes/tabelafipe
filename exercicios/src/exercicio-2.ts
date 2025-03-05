function updateData<T>(currentObject: T, newDataObject: Partial<T>): T {
  const updatedObject: T = { ...currentObject };
  for (const key in currentObject) {
    if (newDataObject.hasOwnProperty(key)) {
      updatedObject[key] = newDataObject[key] as T[typeof key];
    } else {
      updatedObject[key] = currentObject[key];
    }
  }

  return updatedObject;
}

module.exports = updateData;
