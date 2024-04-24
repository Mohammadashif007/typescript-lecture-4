// ! array

const numbers = [2, 33, 44, 55, 66];
numbers.push(99);
// console.log(numbers);
// numbers[1] = 'new';
// numbers.push('roy')

const str = ['mosh', 'john', 'tommy'];
// str.push(44)
// str.push(true)
str.push('cruse');

 const mixed = [1, 'tom', 4, 'jerry']; //! we cant change the variable type

//!   mixed = 'tom'; we can't do this 

mixed.push(2);
mixed.push('biden');
// mixed.push(false)


// ! Object

//! we can't change the type of variable as well as we can't change the type of property value 

let ninja = {     
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.name = 'ryo';
ninja.age = 44;
// ninja.age = '33' //! we can't do that because object property will be same when it was initialized

// ninja.skills = ['fighting', 'sneaking'] //! we can't do that because in typescript object we can't put extra property which was not initialized

ninja = {
    name: 'john',
    belt: 'silver',
    age: 33
} 

//! we can update the object to maintain same structure but we can't change the property structure, we can change the value