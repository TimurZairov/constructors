'use srtict';

function DomElement (selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.parammeters = function(){
    if(this.selector === '.'){
    const box = document.createElement('div');
    document.body.append(box);
    box.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg};`;
    }else if(this.selector === '#'){
    const paragraph = document.createElement('p');
    document.body.append(paragraph);
    paragraph.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; fontSize: ${this.fontSize};`;
    paragraph.innerHTML = 'параграф';
    }
};


const domElement = new DomElement ('#', '100px', '100px', 'green', '20px');
console.log(domElement);

domElement.parammeters();



/* const a = '.aaaa';
const b = '.bbbb';
console.log(a === b); */