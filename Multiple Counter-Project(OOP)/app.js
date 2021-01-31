//counter function that's able to provide functionality to each counter independently
function Counter(element, value){
    //set elements
    this.count = element;
    this.value = value;
    //select buttons
    this.resetBtn = this.count.querySelector('.reset')
    this.incremenetBtn = this.count.querySelector('.increase');
    this.decrementBtn = this.count.querySelector('.decrease');
    //change the doms value 
    this.display = this.count.querySelector(".value");
    this.display.textContent = this.value;

    //add event listeners
    //use bind to point this to counter
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.incremenetBtn.addEventListener("click", this.increment);
    this.decrementBtn.addEventListener("click", this.decrement);
    this.resetBtn.addEventListener("click", this.reset);


}

//add functions to counter
//increment
Counter.prototype.increment = function(){
    this.display.textContent = ++this.value;
};
//decrement
Counter.prototype.decrement = function(){
    this.display.textContent = --this.value;
};
//reset
Counter.prototype.reset= function(){
    this.display.textContent = (this.value -= this.value);
};

//set up for first counter
const firstCounter = new Counter(getElement(".first-counter"), 0);
//set up for second counter
const secondCounter = new Counter(getElement(".second-counter"), 100);

//function that gets element from document
function getElement(value){
    const element = document.querySelector(value);
    //if element is falsy(null or undefined) return the element
    if(element){
        return element;
    }
    //throw this error to help with debugging
    throw new Error(`${value} does not exist`);
}

