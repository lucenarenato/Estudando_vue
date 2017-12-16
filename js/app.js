/**
 * Created by renato on 12/12/17.
 */
var app;
app = new Vue({
    el: '#app',
    data: {
        books: []
    },
    methods: {},
    ready: function () {
        var self = this;
        self.$http.get('dataServer.json').then(function (response) {
           // console.log(response);
            self.books = response.data;

        })
    }

});


/**var hello;
hello = new Vue({
        el: '#hello',
        data: {
            msg: "Hello Vue!",
            peoples: [
                {name: "Leidy"},
                {name: "Alexandre"},
                {name: "Renato"},
                {name: "Ana"},
                {name: "Laurinha"}
            ],
            //Metodos - funcoes para eventos para html
            newElement: '',
            elements: [],
            objectA:{
                'font-size':'30px'
            },
            objectB:{
                color: "red"
            },
            myListForm: [],
            myForm:{
                name:'',
                email:''
            }
        },
        methods: {
            addElement: function () {
                //console.log(e);
                //e.preventDefault();
                //trim - usado para tirar espaços.
                var title = this.newElement.trim();
                if (title) {
                    this.elements.push({title:title});// objeto chamado title
                    this.newElement = "";
                }

            },
            removeElement: function (e) {
                e.preventDefault();
                this.elements.splice(index, 1);
            },
            //botao com a mensagem alert que definimos
            myClick: function () {
                alert('Click');
            },
            myKeyUp: function () {
                alert('myKeyUp');
            },
            addForm:function () {
                this.myListForm.push({name:this.myForm.name , email:this.myForm.email});
                this.myForm.name = '';

            }
        }
    }
);**/