import { calcularOrcamento } from `../features/budget`

export function initApp() {
const total = calcularOrcamentto (100)
document.querySelector(`#app`)!.innerHTML = `
<h1>Orcamento</h1>
<p>Total: ${total}</p>

`
}