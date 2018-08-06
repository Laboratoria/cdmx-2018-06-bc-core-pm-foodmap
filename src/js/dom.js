const search = document.getElementById('search');
const searchResult = document.getElementById('searchResult');

document.getElementById('btnSearch').addEventListener('click', el => {
  let searchValue = search.value;
  const filterSearch = (item) => {
    return (item.includes(searchValue));
  };
  let newArr = arr.filter(filterSearch);
  searchResult.innerHTML = newArr;
});