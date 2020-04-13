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