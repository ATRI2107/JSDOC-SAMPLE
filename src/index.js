/**
 * Student Name
 * @type {string}
 */
const studentName='Atri Chaturvedi';
/**
 * Array of Grades
 * @type {Array}
 */
const grades =[98,97.7,100]

/**
 * Todo object
 * @type {{id: number|string,text: string}}
 */
const todo={
    id: '1',
    text: 'Hello'
};

/**
 * CALCULATE TAX
 * @param {number} amount - Total Amount
 * @param {number} tax - Tax Percentage
 * @returns {string} - Total with a dollar sign
 */
const calcualteTax=(amount,tax)=>{
    return '$${amount+tax*amount}';
};
/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active 
 */
/**
 * @type {Student}
 */
const student={
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
};
/**
 * Class to create a Person
 */
class Person{
    /**
     * 
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo){
        /**
         * @property {string} name Person's name
         */
        this.name=personInfo.name;
        /**
         * @property {string} age Person's age
         */
        this.age=personInfo.age;
    }
}