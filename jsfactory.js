    var createObjects = new createObject();
    var objects = [];
    function object(obj1,obj2,res,res2) {
        this.name = res;
        this.desc = res2;
        this.nameObject = obj1;
        this.descObject = obj2;
    }
   function createObject() {
       this.create = function(obj1,obj2,res,res2) {
       return new object(obj1,obj2,res,res2);
   }
}
   function print() {
          console.log("Объект:");
          console.log(this.nameObject + ": " + this.name);
          console.log(this.descObject + ": " + this.desc);
}
    function createObj() {
    var obj1 = prompt('Введите первое значение объекта');
    var obj2 = prompt('Введите второе значение объекта');
    var res = prompt('Введите ' + obj1);
    var res2 = prompt('Введите ' + obj2);
    alert("Объект создан - " + obj1 + ': ' + res + ", " + obj2 + ': ' + res2);
    objects.push(createObjects.create(obj1,obj2,res,res2));
    }
    function DisplayInfo() {
        objects.forEach( vehicle => {
          print.call(vehicle);
   });
}
   