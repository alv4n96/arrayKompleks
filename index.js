let biodata = {
    name : "Moch Noor Alvan",
    skills : ['PHP', 'JS', 'CSS3'],
    description : function(){
        return "nama saya "+ this.name;
    }
}

console.log(biodata.description());