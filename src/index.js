import List from "./components/List"

const $root = document.querySelector("#root")

const $htmlList = List()

$root.insertAdjacentHTML('beforeend', $htmlList)