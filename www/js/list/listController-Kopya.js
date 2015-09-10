
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
new Contact({"id":"0B_JDYj6vtQQielprOE1vS3dIUDQ", "createdOn":"", "firstName":"toshiba-satellite--4000--4010--4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielprOE1vS3dIUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUdhenNpcVctc3M", "createdOn":"", "firstName":"toshiba-portege--t130--satellite--t130--pro--t130.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUdhenNpcVctc3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkdQQWpwNENSXzQ", "createdOn":"", "firstName":"toshiba-satellite--pro--4600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkdQQWpwNENSXzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDFPdXUzbEg4TFk", "createdOn":"", "firstName":"toshiba-satellite--3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDFPdXUzbEg4TFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9KbEduZGE2NVU", "createdOn":"", "firstName":"hp-_compaq-armada-1100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9KbEduZGE2NVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianRvdUdpanhPY2M", "createdOn":"", "firstName":"hp-_hp-510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRvdUdpanhPY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamtFNlZxYjFpRWs", "createdOn":"", "firstName":"toshiba-qosmio--f10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamtFNlZxYjFpRWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRzdkh4S2tnLU0", "createdOn":"", "firstName":"toshiba-portege--r300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRzdkh4S2tnLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDNQcm1lVktpdVk", "createdOn":"", "firstName":"toshiba-satellite--1710cds.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDNQcm1lVktpdVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXNnc2lmbnF1UHM", "createdOn":"", "firstName":"toshiba-satellite--e200--e205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXNnc2lmbnF1UHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZE1ZSldPWXJ3bW8", "createdOn":"", "firstName":"hp-_compaq-armada-1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZE1ZSldPWXJ3bW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXA2TG1sc3VueXc", "createdOn":"", "firstName":"toshiba-satellite--5200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXA2TG1sc3VueXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3VmYnZMdTJqeTA", "createdOn":"", "firstName":"toshiba-satellite--5000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3VmYnZMdTJqeTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2RlNExUbGtCZFE", "createdOn":"", "firstName":"toshiba-portege--m700--m750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2RlNExUbGtCZFE/preview"
})		
		];
		localStorage.setItem("f7Contacts", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Contacts"));
	}

	function contactSort(a, b) {
		if (a.firstName > b.firstName) {
			return 1;
		}
		if (a.firstName === b.firstName) {
			return 1;
		}
		return -1;
	}

    return {
        init: init
    };
});