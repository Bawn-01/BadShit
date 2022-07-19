const {input, file} = require('./file.json');

// token handling
var cur_toks = [];
var cur_tok = "";

// variable handling
var cur_vars=[];

// operators
const nums = 1234567890
const op = ['+', '-', '/', '*', '(', ')']


function tokenizer(line){
    for (var i = 0; i < input.length; i++){
        if (input.charAt(i) == ";"){
            break
        }

        cur_tok += input.charAt(i);
    }
};

tokenizer(input);
console.log(cur_tok);
