AFRAME.registerComponent('color-toggle', {
    init: function(){
        let el =this.el;
        this.toggleColor = function(){
            el.setAttribute('color','black'); 
        }
        this.el.addEventListener('click', this.toggleColor); //listen for click event
    },

    remove: function(){
        this.el.removeEventListener('click', this.toggleColor) //cleanup if component removed
    }


})