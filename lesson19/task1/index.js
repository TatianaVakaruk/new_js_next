const vehicle = {
    name: "Argo",
    move(){
        console.log(`${this.name} is moving`);
    },
    stop(){
        console.log(`${this.name} stopped`);
    }
};
const ship = {
    hasWehicle: true,
    liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
startMatchine(){
   this.liftAnchorUp();
   this.move();
},
stopMatchine(){
    this.stop();
    this.liftAnchorDown();
},
__proto__: vehicle,
}
