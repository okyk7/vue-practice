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
            todos: [
                'task1',
                'task2',
                'task3'
            ]
        }
    });

})();
