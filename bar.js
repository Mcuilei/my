/**
 * Created by cui on 2018/9/10.
 */
  function people(name,age,sex){
    this.name =name;
    this.age =age;
    this.sex =sex;
}
people.prototype = {
    sayHello:function(){
        console.log(this.name+this.age+this.sex)
    }
};
module.exports = people;
