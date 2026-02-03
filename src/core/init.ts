import { calcularOrcamento } from '../features/budget'

export function initApp() {
  const total = calcularOrcamento(100)

  document.querySelector('#app')!.innerHTML = `
    <h1>Orçamento</h1>
    <p>Total: ${total}</p>
  `
}
