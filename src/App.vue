<template lang="pug">
  #app
    section.section
      .container
        h1.title Lista de tareas
        .box
          h3.subtitle
            i {{ name }}
          .box(v-for="(t,i) in tasks")
            span {{ t.title }} | {{ t.time }}
            button.button.is-danger.is-small.is-x(
              @click="removeTask(i)"
            ) &times;
          .isEmpty(v-show="isEmpty")
            p ¡No tiene ninguna tarea #[strong 🙁] !
            p Presione #[span agregar] para crear una nueva tarea
          form.field.has-addons(@submit.prevent="addTask")
            .control.is-expanded
              input.input(
                v-model="newTask.title"
                type="text"
                placeholder="Titulo"
                required
              )
            .control
              input.input(
                v-model="newTask.time"
                type="time"
                required
              )
            .control
              button.button.is-primary(type="submit") Agregar
        p Total de horas: #[strong {{ total }}]
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Titulo',
      tasks: [],
      newTask: {
        title: null,
        time: null
      }
    }
  },
  created () {
    const tasks = localStorage.getItem('tasks')
    console.log(tasks)
    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  },
  methods: {
    setTasks () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    addTask () {
      const newTask = JSON.parse(JSON.stringify(this.newTask))
      this.tasks.push(newTask)
      this.setTasks()
      this.clean()
    },
    clean () {
      this.newTask = {
        title: null,
        time: null
      }
    },
    removeTask (id) {
      this.tasks.splice(id, 1)
      this.setTasks()
    }
  },
  computed: {
    total () {
      let hours = 0
      let minuts = 0
      this.tasks.forEach(task => {
        const time = task.time.split(':')
        hours += parseInt(time[0])
        minuts += parseInt(time[1])
      })
      return `${hours}:${minuts} `
    },
    isEmpty () {
      if (this.tasks.length) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="sass">
@import './sass/main.sass'
#app
  .container
    max-width: 600px
  .titulo
    width: 50%
  .custom
    margin-top: 30px
  .is-x
    float: right
  .isEmpty
    text-align: center
    font-size: 20px
    margin-bottom: 25px
</style>
