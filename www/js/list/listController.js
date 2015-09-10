
define(["app", "js/contactModel","js/list/listView"], function(app, Contact, ListView) {

	/**
	 * Bindings array. Bind DOM event to some handler function in controller
	 * @type {*[]}
	 */
	var bindings = [{
		element: '.contact-add-link',
		event: 'click',
		handler: openAddPopup
	}, {
		element: '.list-panel-all',
		event: 'click',
		handler: showAll
	}, {
		element: '.list-panel-favorites',
		event: 'click',
		handler: showFavorites
	}
	];

	var state = {
		isFavorite: false
	};

    function init() {
		var contacts = loadContacts();
		ListView.render({
			bindings: bindings,
			model: contacts
		});
	}

	function openAddPopup() {
		app.router.load('contactEdit', { 'isFavorite': state.isFavorite });
	}

	function showAll() {
		state.isFavorite = false;
		var contacts = loadContacts();
		ListView.reRender({ model: contacts, header: "Contacts" });
	}

	function showFavorites() {
		state.isFavorite = true;
		var contacts = loadContacts({ isFavorite: true });
		ListView.reRender({ model: contacts, header: "Favorites" });
	}

	function loadContacts(filter) {
		var f7Contacts = localStorage.getItem("f7Contacts");
		var contacts = f7Contacts ? JSON.parse(f7Contacts) : tempInitializeStorage();
		if (filter) {
			contacts = _.filter(contacts, filter);
		}
		contacts.sort(contactSort);
		contacts = _.groupBy(contacts, function(contact) { return contact.firstName.charAt(0); });
		contacts = _.toArray(_.mapValues(contacts, function(value, key) { return { 'letter': key, 'list': value }; }));
		return contacts;
	}

	function tempInitializeStorage() {
		var contacts = [
new Contact({"id":"0B_JDYj6vtQQielprOE1vS3dIUDQ", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--4000--4010--4020.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielprOE1vS3dIUDQ/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQieUdhenNpcVctc3M", "picId":1, "createdOn":"", "firstName":"toshiba-portege--t130--satellite--t130--pro--t130.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUdhenNpcVctc3M/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQidkdQQWpwNENSXzQ", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--pro--4600.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkdQQWpwNENSXzQ/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQicDFPdXUzbEg4TFk", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--3000.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDFPdXUzbEg4TFk/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9KbEduZGE2NVU", "picId":1, "createdOn":"", "firstName":"hp-_compaq-armada-1100.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9KbEduZGE2NVU/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQianRvdUdpanhPY2M", "picId":1, "createdOn":"", "firstName":"hp-_hp-510.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRvdUdpanhPY2M/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiamtFNlZxYjFpRWs", "picId":1, "createdOn":"", "firstName":"toshiba-qosmio--f10.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamtFNlZxYjFpRWs/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRzdkh4S2tnLU0", "picId":1, "createdOn":"", "firstName":"toshiba-portege--r300.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRzdkh4S2tnLU0/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDNQcm1lVktpdVk", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--1710cds.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDNQcm1lVktpdVk/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXNnc2lmbnF1UHM", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--e200--e205.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXNnc2lmbnF1UHM/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiZE1ZSldPWXJ3bW8", "picId":1, "createdOn":"", "firstName":"hp-_compaq-armada-1500.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZE1ZSldPWXJ3bW8/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXA2TG1sc3VueXc", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--5200.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXA2TG1sc3VueXc/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3VmYnZMdTJqeTA", "picId":1, "createdOn":"", "firstName":"toshiba-satellite--5000.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3VmYnZMdTJqeTA/preview", "city":"", "isFavorite":""
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2RlNExUbGtCZFE", "picId":1, "createdOn":"", "firstName":"toshiba-portege--m700--m750.pdf", "lastName":"", "company":"", "phone":"", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2RlNExUbGtCZFE/preview", "city":"", "isFavorite":""
})		
		];
		localStorage.setItem("f7Contacts", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Contacts"));
	}

	function contactSort(a, b) {
		if (a.firstName > b.firstName) {
			return 1;
		}
		if (a.firstName === b.firstName && a.lastName >= b.lastName) {
			return 1;
		}
		return -1;
	}

    return {
        init: init
    };
});