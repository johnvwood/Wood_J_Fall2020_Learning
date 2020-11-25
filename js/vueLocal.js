const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            //text1 is a variable and can be set to anything
            text1: "Hello from Vue",
            text2: "Paragraph text is so cool.",
            removeAformat: true,
            toggleP: false,

            fruitArray: [
                { name:"Olgar", type:"Banana", trait:"Trustworthy", ability:"Heavy Attack", death: "Olgar put up an epic fight, but you dodged her Heavy Attack and stabbed her ribcage."},
                { name:"Chugler", type:"Orange", trait:"Drunkard", ability:"Pain Resist", death:"Chugler threw down his mug of ale to free up his hands for combat, but tripped on a crate you preemptively placed and cracked his head on the floor."},
                { name: "Juan", type: "Cantalope", trait: "Psychotic", ability: "Cursed Tongue", death:"Juan was screaming at a tree when you attacked him, it wasn't much of a fight."}
            ]
        },

        // add a function to when vue is mounted
        mounted: function() {
            console.log("Vue Mounted");

            this.fruitArray.push({name: "Hank", type: "Strawberry", trait: "Envious", ability: "Wish Power", death: "You fought Hank until he eventually became envious and wished to be as good a fighter as you. His wish was denied and you beheaded him."});
        },

        updated: function() {
            console.log("Vue updated");
        },

        methods: {
            // defining a click function
            fruitClicked() {
                console.log("Clicked on Fruit character");
            },

            attackFruit(target) {
                // removes the fruit from fruitArray
                console.log("Attacked", target.name, "the", target.type);
                alert(target.death);
                // "truthy value" : "falsey value"
                this.toggleP = this.toggleP? false : true
            }
        }

    }).$mount(".app"); // used as an alternate to 'el:' only use one at a time
})();