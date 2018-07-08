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
                'task1',
                'task2',
                'task3'
            ]
        },
        methods: {
            // addItem: function(e) {
                // e.preventDefault(); // html側に.preventつけることでok
                // this.todods.push(this.newItem);
            // }
            addItem: function() {
                this.todos.push(this.newItem);
                this.newItem = '';
            }
        }
    });

})();
