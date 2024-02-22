new Vue({
    el: '#app',
    data: {
        selectedCategory: 'Personal', // Default category selection
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    category: this.selectedCategory,
                    text: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTaskButton() {
            this.addTask();
        }
    }
});
