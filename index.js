exports.apply = apply;

/*
value   - base value to modify
name    - name of the modifier
params  - parameters of the modifier
data    - array of data that is available for processing
options - additional options for scalar modifier
*/
function apply(value, name, params, data, options) {
	options = options || {};
	switch(name) {
		case 'uppercase':
        	value = value.toString().toUpperCase();
        	break;
		case 'lowercase':
        	value = value.toString().toLowerCase();
        	break;
		case 'length':
        	value = value.toString().length;
        	break;
		case 'trim':
        	value = value.toString().trim();
        	break;
		case 'htmlcomment':
        	value = '<!--' + value.toString().toUpperCase() + '-->';
        	break;
    }

    return value;
}