const vuetify3 = Vuetify.createVuetify();
const app3 = Vue.createApp({});

app3.component('App3', // indicating the component tag
{
    // defining data to be used in the component
    data() {
        return {
            tasks: [],
            Task: ''
        };
    },

    // define the template for the component
    template: 
       `
        <div>
           <v-app>
              <v-main>
                 <v-container>
                    <v-text-field name="Task" v-model="Task" label="Enter a new task" ></v-text-field>
                    <v-btn color="primary" size="small" @click="add(Task)">Add</v-btn>
           
                    <div v-for="(task, index) in tasks" :key="index">
                      {{ task.text }} ({{ task.priority }} Priority)
                      <v-btn color="warning" size="small" class="ma-1" @click="toggle(index)">
                          {{ changeLabel(task.priority) }}
                      </v-btn>
                      <v-btn color="error" size="small" @click="remove(index)">Delete</v-btn>
                    </div>
                  </v-container>
              </v-main>
            </v-app>
        </div>
       `,

    methods: {
        add:function(task) {
            //unshift added task into tasks array
            this.tasks.unshift({
              text: task,
              priority: 'Low'
            });
            // clear added task after posting
            this.Task = "";
        },

        toggle:function(index) {
          const t = this.tasks[index];
          if (t.priority === 'High') {
             t.priority = 'Low';
          } else {
             t.priority = 'High';
          }
       },

       changeLabel:function(priority) {
          if (priority === 'High') {
              return 'Mark as Low Priority';
          } else {
              return 'Mark as High Priority';
          }
       },
      
        remove:function(index) {
             //delete task from tasks array using index
            this.tasks.splice(index, 1);
        }
    }
});
app3.use(vuetify3).mount('#app3');
