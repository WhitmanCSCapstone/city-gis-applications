         j   i      m��������B�4���V��@��m�d�            umodule.exports = function(path) {
	return path.split(/[\\\/]/g).map(encodeURIComponent).join('/');
};
