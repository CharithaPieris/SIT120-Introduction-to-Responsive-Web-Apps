new Vue({
    el: '#app',
    data: {
        newTask: '',
        newDeadline: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask && this.newDeadline) {
                this.tasks.push({
                    description: this.newTask,
                    deadline: this.newDeadline,
                    isCompleted: false,
                    isPastDue: false,
                });
                this.newTask = '';
                this.newDeadline = '';
                this.scheduleAlerts(); // Schedule alerts when adding a new task
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        scheduleAlerts() {
            this.tasks.forEach(task => {
                const deadlineDate = new Date(task.deadline);
                const currentDate = new Date();
                const timeDifference = deadlineDate - currentDate;
                if (timeDifference > 0 && timeDifference <= 60000) {
                    // Schedule an alert for tasks due within the next minute
                    setTimeout(() => {
                        alert(`Task "${task.description}" is due in less than a minute!`);
                    }, timeDifference);
                } else if (timeDifference < 0) {
                    // Task is past due, schedule an alert immediately
                    alert(`Task "${task.description}" is past due!`);
                    task.isPastDue = true; // Set the task as past due
                } else if (timeDifference > 0 && timeDifference <= 3600000) {
                    // Schedule an alert for tasks due within the next hour
                    setTimeout(() => {
                        alert(`Task "${task.description}" is due in less than an hour!`);
                    }, timeDifference);
                }
            });
        },
    },
    computed: {
        checkDeadlines() {
            const currentDate = new Date();
            return this.tasks.map(task => {
                const deadlineDate = new Date(task.deadline);
                task.isPastDue = deadlineDate < currentDate;
                task.isUpcoming = deadlineDate > currentDate;
                const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
                const formattedDeadline = deadlineDate.toLocaleString(undefined, options);
                task.deadline = formattedDeadline;
                return task;
            });
        },
    },
});
