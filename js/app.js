/**
 * Created by renato on 12/12/17.
 */
var hello = new Vue({
    el:'#hello',
    data:{
        msg:"Hello Vue!",
        peoples:[
            {name:"Leidy"},
            {name:"Alexandre"},
            {name:"Renato"},
            {name:"Ana"},
            {name:"Laurinha"}
        ],
        //Metodos - funcoes para eventos para html
        newElement:'',
        elements:[]
    },
    methods:{
        addElement: function (e) {
            console.log(e);

        }
    }
}

)