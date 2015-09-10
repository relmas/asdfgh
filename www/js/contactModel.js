define(['app'],function(app) {

    function Contact(values) {
		values = values || {};
		this.id = values['id'] || app.utils.generateGUID();
		this.createdOn = values['createdOn'] || new Date();
		this.firstName = values['firstName'] || '';
		this.email = values['email'] || '';
    }

	Contact.prototype.setValues = function(inputValues) {
		for (var i = 0, len = inputValues.length; i < len; i++) {
			var item = inputValues[i];
			if (item.type === 'checkbox') {
				this[item.id] = item.checked;
			}
			else {
				this[item.id] = item.value;
			}
		}
	};

	Contact.prototype.validate = function() {
		var result = true;
		if (_.isEmpty(this.firstName)) {
			result = false;
		}
		return result;
	};

    return Contact;
});