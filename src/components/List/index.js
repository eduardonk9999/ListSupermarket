import './List.scss'
const itens = [];
window.handleClick = () => {
  const itenInput = document.querySelector('.content__input').value

  
  console.log(itenInput)
  console.log("Foi!!!")
}
function List() {
  return `
    <ul>
      <li>Beean</li>
      <li>Walter</li>
    </ul>
    
  
    <input type="text" placeholder="add item" class="content__input">
    <button onClick="handleClick()" class="btnAdd">Add Tarefa</button>
  `
}



export default List