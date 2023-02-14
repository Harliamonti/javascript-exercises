const repeatString = function(string, iterations) {
    let result = "";
    
    if (iterations < 0) return "ERROR";
    else {
        for (let i = 0; i < iterations; i++) {
            result += string;    
        }
        
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
