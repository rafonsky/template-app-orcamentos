import { AppConfig } from '../config/app.config'
export function calcularOrcamento(valor: number): number {
return valor + valor * AppConfig.taxa
}