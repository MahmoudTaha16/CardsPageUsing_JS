


let FunctionsClass={

    //return a random number
    //  getRandomFloat:function (min, max) {
    //     return Math.random() * (max - min) + min;
    //   }

    //Random Numbers
     getRandomFloat:function (max, min) {
        return Math.random() * (max - min) + min;
      },
     getRandomInt:function (max, min) {
        return this.getRandomFloat(max,min);
      },


    //Random Words

     getRandomLoremIpsum:function(wordCount) {
        const loremWords = [
          "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
          "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", 
          "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam",
          "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut",
          "aliquip", "ex", "ea", "commodo", "consequat"
        ];
      
        let result = [];
        for (let i = 0; i < wordCount; i++) {
          const randomIndex = Math.floor(Math.random() * loremWords.length);
          result.push(loremWords[randomIndex]);
        }
      
        return result.join(" ");
      },

      getRandomWord:function(){
       return this.getRandomLoremIpsum(1);
      },
    //Random Names

      getRandomNames:function(wordCount) {
        const loremWords = [
          "Ahmed", "Mohamed", "Hassan", "Ibrahim", "Khaled", "Omar", 
    "Youssef", "Mahmoud", "Mostafa", "Ali", "Amr", "Tamer","Ali", "Hussein", "Abdelrahman", "Ibrahim", "Mohamed", 
    "Salah", "Hafez", "Fathy", "Kamal", "Farouk", "Zaki", "Elmasry"
        ];
      
        let result = [];
        for (let i = 0; i < wordCount; i++) {
          const randomIndex = Math.floor(Math.random() * loremWords.length);
          result.push(loremWords[randomIndex]);
        }
      
        return result.join(" ");
      },

      getRandomName:function(){
       return this.getRandomNames(1);
      }




}






let container=document.createElement('div');

document.body.appendChild(container);
document.body.style.background="black";

//function to add card
function AddCard(name,age){

document.body.style.textAlign="center";

//create the card
let Card=document.createElement("div");
container.appendChild(Card);
Card.style.background="#444"
Card.style.display="inline-block";
Card.style.padding="10px";
Card.style.margin="10px";
Card.style.borderRadius="8px";

//add the title
let Title=document.createElement('h1');
Card.appendChild(Title);
Title.appendChild(document.createTextNode(name));


//add the age

let agge=document.createElement('h3');
Card.appendChild(agge);
agge.appendChild(document.createTextNode(age));


//add the image

let img=document.createElement('img');
img.src="images/1.jpeg";
Card.appendChild(img);
img.style.width="200px";

};

let names=["Mahmoud","Taha","Mostafa","Mohamed","Ehdaa"];
let ages=[22,23,11,45,56];

for(let i=0;i<50;i++){

let age=FunctionsClass.getRandomInt(60,10);
let name=FunctionsClass.getRandomName();


    AddCard(name,parseInt(age) );

}




