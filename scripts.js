members = [
    {
        fname: 'alexander',
        lname: 'Oliveira',
        sector: 'Suporte'
    },
    {
        fname: 'George',
        lname: 'Lima',
        sector: 'Desenvolvimento'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        addMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.sector) {
                this.members.push(this.newMember);
                this.newMember = {};
            } else {
                alert("Todos os campos devem ser preenchidos")
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
