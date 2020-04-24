console.log(this);

class Player {
  constructor(name, type) {
    console.log("wizard", this);
    this.name = name;
    this.type = type;
  }
  introduction() {
    console.log(`Hi I am ${this.name} , I am ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // console.log("wizard", this);
    super(name, type);
    console.log("wizard", this);
  }
  play(){
      console.log(`weee i am a ${this.type}`);      
  }
}

const Wizard1=new Wizard('amresh','Healer');
const Wizard2=new Wizard('kumar','good');
console.log(Wizard1);
Wizard1.play();
Wizard1.introduction();


