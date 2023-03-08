class Person{
    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    introduction(){
        const info = document.createElement('div');
        info.innerText = `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
        document.body.append(info);
    }
}

class Form{
    constructor(form){
      this.form = form;
    }

    handleSubmi(){
      const nameInfoInput = this.form.name.value;
      const ageInfoInput = this.form.age.value;
      const ocupattionInfoInput = this.form.occupation.value;
      const personInfo = new Person(nameInfoInput, ageInfoInput, ocupattionInfoInput);
      personInfo.introduction();
    }
}

const personForm = document.querySelector('.form');
const form = new Form(personForm);
personForm.addEventListener('submit', (event) => {
    event.preventDefault();
    form.handleSubmi();
    event.target.reset();
});