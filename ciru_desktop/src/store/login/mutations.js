
export function spinnerC (state, payload) {
  state.spnD = payload.spnD
  state.btnClos = payload.btnClos
  state.btnD = payload.btnD
}

export function spinnerC2 (state, payload) {
  state.spnD = payload.spnD
  state.btnCD = payload.btnCD
}

export function Dialogo (state, payload) {
  state.openD = payload
}

export function Dialogo2 (state, payload) {
  state.openD = payload.opend
  state.btnClos = payload.btnclos
  state.btnD = payload.btnd
  state.btnCD = payload.btncd
}
