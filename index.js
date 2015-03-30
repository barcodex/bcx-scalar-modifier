exports.apply = apply;

/*
value   - base value to modify
name    - name of the modifier
params  - parameters of the modifier
data    - array of data that is available for processing
options - options 
*/
apply = function(value, name, params, data, options) {
	options = options || {};
    if (name == 'zeropad') {
        var zeroes = '000000000000000000000';
        var stringified = value.toString();
        value = ((stringified.length < params.length) ? zeroes.slice(stringified.length-params.length) : '') + value;
    }

    return value;
}