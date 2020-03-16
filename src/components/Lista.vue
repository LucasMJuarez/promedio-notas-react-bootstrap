<template>
  <div class="container-fluid py-5">
    <div class="row align-items-start">
      <div class="col-sm-10 mx-auto">
        <ul class="list-group">
          <li
            v-for="(item,index) of arrayOrdenado"
            :key="item.id"
            @click="aumentar(index) "
            class="list-group-item d-flex justify-content-between align-items-center p-3"
          >
            {{index}} - {{item.nombre}}
            <span
              v-if="item.nota >=6 && item.nota <=10"
              class="badge badge-success badge-pill"
            >Aprobado</span>
            <span v-if="item.nota < 6" class="badge badge-warning badge-pill">Desapobado</span>
            <span
              v-if="item.nota > 10 || item.nota < 0"
              class="badge badge-danger badge-pill"
            >Nota no valida</span>
            <span class="badge badge-primary badge-pill">{{item.nota}}</span>
          </li>
          <!-- Sumatoria -->

          <li class="list-group-item d-flex justify-content-between align-items-center">
            La sumatoria de notas es:
            <span class="badge badge-dark badge-pill">{{total}}</span>
          </li>

          <!-- Promedio -->

          <li class="list-group-item d-flex justify-content-between align-items-center py-3">
            El promedio de notas es:
            <span class="badge badge-success badge-pill">{{promedio}}</span>
            <div
              v-if=" nota > 6 || promedio >=6 "
              class="alert alert-success fade show"
              role="alert"
            >
              <strong>Promedio Aprobado</strong>
            </div>
            <div v-if="promedio < 6" class="alert alert-warning fade show" role="alert">
              <strong>Promedio Desaprobado</strong>
            </div>
          </li>
          <button class="btn btn-danger btn-block py-2" @click="reiniciar">Reiniciar Todas</button>
          <button class="btn btn-secondary btn-block py-2" @click="sumarNotas">Sumar Notas</button>
          <button class="btn btn-success btn-block py-2" @click="promedioNotas">Promediar notas</button>
        </ul>
      </div>
      <div class="col-sm-2 mx-auto">
        <ul class="list-group">
          <li
            v-for="(item,index) of arrayOrdenado"
            :key="item.id"
            class="list-group-item justify-content-between align-items-center p-3 m-auto"
          >
            <b-button class="btn btn-danger mx-auto" @click="disminuir(index)">disminuir</b-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["materias", "total", "promedio"]),
    arrayOrdenado(state) {
      return state.materias.sort((a, b) => b.nota - a.nota);
    }
  },

  methods: {
    ...mapMutations([
      "aumentar",
      "disminuir",
      "sumarNotas",
      "promedioNotas",
      "reiniciar"
    ])
  }
};
</script>