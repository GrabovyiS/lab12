let app = new Vue({
    el:'#app',
    data: {
        text1 : '',
        text2 : '',
        flag : 0,
        studList : []
    },
    methods: {
        newStudent: function() {
            let name1 = this.text1.trim();
            let name2 = this.text2.trim();
            if (name1 && name2){
                this.studList.push(String(name1 + ' ' + name2));
                this.text1 = '';
                this.text2 = '';
                this.flag = 1;
            }

        }
    },
    computed:{
        letterCount:function(){
            return (this.text1.length + this.text2.length)
        }
    }

})