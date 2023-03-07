function saveDataLocalStorage(key, data) {
  let existing = localStorage.getItem(key);
  existing = existing ? JSON.parse(existing) || [] : [];
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

export default saveDataLocalStorage;
