(function() {
    'use strict';
    var vm = new  Vue({
        el: '#app',
        data: {
            name: 'hoge'
        }
    });

    var vm2 = new  Vue({
        el: '#app2',
        data: {
            newItem: '',
            todos: [
                {
                    'title': 'task1',
                    'isDone': false
                },
                {
                    'title': 'task2',
                    'isDone': false
                },
                {
                    'title': 'task3',
                    'isDone': true
                }
            ]
        },
        methods: {
            // addItem: function(e) {
                // e.preventDefault(); // html側に.preventつけることでok
                // this.todods.push(this.newItem);
            // }
            addItem: function() {
                this.todos.push(
                    {
                        'title': this.newItem,
                        'isDone': false
                    });
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('are you sure?')) {
                   this.todos.splice(index, 1);
                }
            },
            purge: function() {
                if (!confirm('delete finished?')) {
                    return;
                }
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function() {
                return this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
            }
        }
    });

})();
