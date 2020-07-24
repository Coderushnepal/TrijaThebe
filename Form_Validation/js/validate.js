function validation() {
	this.validate_username = function(value) {
		if (value.length < 3 && value == '' || value == null) {
			return true;
		}
	}
}
