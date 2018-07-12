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
            todos: []
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
        },
        mounted: function() {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        watch: {
            todos: {
                handler: function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                deep: true
            }
        }
    });

})();
