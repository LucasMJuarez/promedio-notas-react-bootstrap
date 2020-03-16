import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materias: [
      { nombre: 'Analisis Matematico 1', nota: 0 },
      { nombre: 'Algebra', nota: 0 },
      { nombre: 'Geometria', nota: 0 },
      { nombre: 'Probabilidad y Estadistica', nota: 0 },
      { nombre: 'Informatica', nota: 0 },
      { nombre: 'Analisis Matematico 2', nota: 0 },

    ],
    suma: 0,
    total: 0,
    promedio: 0
  },

  mutations: {
    aumentar(state, index) {
      state.suma = state.materias[index].nota++
    },
    disminuir(state, index) {
      state.resta = state.materias[index].nota--
    },
    sumarNotas(state) {
      state.materias.forEach(elem => {
        state.total += elem.nota;
      })
    },
    promedioNotas(state) {

      if (state.total >= 36) {
        state.promedio = (state.total) / 6
        console.log(state.promedio);
        state.materias.forEach(elem => {
          elem.nota;
          if (elem.nota < 6) {
            alert('Promedio mayor a 6 pero con materias desaprobadas')
          }
        })
      }
      state.promedio = (state.total) / 6

    },
    reiniciar(state) {
      state.materias.forEach(elemento => {
        elemento.nota = 0;
      });
      state.total = 0;
      state.promedio = 0
    }
  },

  actions: {
  },
  modules: {
  }
})
