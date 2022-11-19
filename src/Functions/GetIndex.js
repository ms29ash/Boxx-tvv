const getIndexOf = (list, id) => {
  const ids = list.map(listItem => listItem?.id);
  return ids.indexOf(id);
}

export default getIndexOf 