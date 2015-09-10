
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
new Contact({"id":"0B_JDYj6vtQQielprOE1vS3dIUDQ", "createdOn":"", "firstName":"toshiba satellite 4000 4010 4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielprOE1vS3dIUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUdhenNpcVctc3M", "createdOn":"", "firstName":"toshiba portege t130 satellite t130 pro t130.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUdhenNpcVctc3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkdQQWpwNENSXzQ", "createdOn":"", "firstName":"toshiba satellite pro 4600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkdQQWpwNENSXzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDFPdXUzbEg4TFk", "createdOn":"", "firstName":"toshiba satellite 3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDFPdXUzbEg4TFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9KbEduZGE2NVU", "createdOn":"", "firstName":"hp  compaq armada 1100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9KbEduZGE2NVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianRvdUdpanhPY2M", "createdOn":"", "firstName":"hp  hp 510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRvdUdpanhPY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamtFNlZxYjFpRWs", "createdOn":"", "firstName":"toshiba qosmio f10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamtFNlZxYjFpRWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRzdkh4S2tnLU0", "createdOn":"", "firstName":"toshiba portege r300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRzdkh4S2tnLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDNQcm1lVktpdVk", "createdOn":"", "firstName":"toshiba satellite 1710cds.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDNQcm1lVktpdVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXNnc2lmbnF1UHM", "createdOn":"", "firstName":"toshiba satellite e200 e205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXNnc2lmbnF1UHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZE1ZSldPWXJ3bW8", "createdOn":"", "firstName":"hp  compaq armada 1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZE1ZSldPWXJ3bW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXA2TG1sc3VueXc", "createdOn":"", "firstName":"toshiba satellite 5200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXA2TG1sc3VueXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3VmYnZMdTJqeTA", "createdOn":"", "firstName":"toshiba satellite 5000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3VmYnZMdTJqeTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTlfMzBtNnltUEk", "createdOn":"", "firstName":"toshiba tecra m10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTlfMzBtNnltUEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0dDUXVpYTZvV2M", "createdOn":"", "firstName":"toshiba satellite 2800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0dDUXVpYTZvV2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUZ5UmtDNzFZYVE", "createdOn":"", "firstName":"toshiba tecra r10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUZ5UmtDNzFZYVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUlOSU5jZHl5UU0", "createdOn":"", "firstName":"toshiba satellite p200d p250d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUlOSU5jZHl5UU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzNNdWdIU1h2b1E", "createdOn":"", "firstName":"toshiba qosmio x500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzNNdWdIU1h2b1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMTY5WDRRdWktTFk", "createdOn":"", "firstName":"toshiba portege r200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMTY5WDRRdWktTFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemY4YnVZekFJNGM", "createdOn":"", "firstName":"toshiba satellite u300 pro u300 tecra m8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemY4YnVZekFJNGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem5qOVE0c2J4VU0", "createdOn":"", "firstName":"toshiba tecra s3 s4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem5qOVE0c2J4VU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem4tVFFXakpBQlk", "createdOn":"", "firstName":"toshiba tecra 8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem4tVFFXakpBQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGZxTFpTU2wtWmM", "createdOn":"", "firstName":"toshiba portege m500 satellite u200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGZxTFpTU2wtWmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzJvQ1ZDVm9hT00", "createdOn":"", "firstName":"hp  compaq tc1000 tablet.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzJvQ1ZDVm9hT00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkRabEpmX0t6RzQ", "createdOn":"", "firstName":"toshiba qosmio g20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkRabEpmX0t6RzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFd2RzZzazJfbHM", "createdOn":"", "firstName":"toshiba satellite m70 pro m70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFd2RzZzazJfbHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGJQb2Q4UkpCWGM", "createdOn":"", "firstName":"toshiba satellite 1800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGJQb2Q4UkpCWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkpJQ2lIdm9ZYmM", "createdOn":"", "firstName":"toshiba satellite and pro 220 440 460 470 480.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkpJQ2lIdm9ZYmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXo3cXlSN1VQTjA", "createdOn":"", "firstName":"toshiba satellite r70 tecra m7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXo3cXlSN1VQTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVlZN1g5ZldPQnM", "createdOn":"", "firstName":"toshiba satellite c650 psc08x c655 psc09x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVlZN1g5ZldPQnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibURqWUlGOWtlS1U", "createdOn":"", "firstName":"toshiba satellite m30x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibURqWUlGOWtlS1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3pnaURQcHV1WEk", "createdOn":"", "firstName":"toshiba portege t210 satellite t210 t215 pro t210 t215.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3pnaURQcHV1WEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1NRREdxRlo0UWs", "createdOn":"", "firstName":"toshiba satellite l450 pro l450.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1NRREdxRlo0UWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib01ES0EtNjZSQ3c", "createdOn":"", "firstName":"toshiba tecra 750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib01ES0EtNjZSQ3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjdZaHBuUzM3cjA", "createdOn":"", "firstName":"toshiba portege m400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjdZaHBuUzM3cjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjYxRjdvTThvLUU", "createdOn":"", "firstName":"toshiba satellite e100 e105.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjYxRjdvTThvLUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjB0U21TOWhIT2M", "createdOn":"", "firstName":"hp  compaq evo n400c n410c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjB0U21TOWhIT2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWlBUVVPemVXOVU", "createdOn":"", "firstName":"toshiba tecra a3 s2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWlBUVVPemVXOVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGJFZXpZSFpDaTQ", "createdOn":"", "firstName":"toshiba satellite pro s500m tecra m11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGJFZXpZSFpDaTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0hXVHFqSlRFV0U", "createdOn":"", "firstName":"toshiba tecra m2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0hXVHFqSlRFV0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3VzQ2xESDJBUXc", "createdOn":"", "firstName":"toshiba qosmio g40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3VzQ2xESDJBUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHRMUGR0TnljUGs", "createdOn":"", "firstName":"toshiba satellite l650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHRMUGR0TnljUGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjlUdHdIdDBSdWs", "createdOn":"", "firstName":"toshiba satellite 2230 2250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjlUdHdIdDBSdWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVElvOHRPLVloaEU", "createdOn":"", "firstName":"toshiba satellite a10 pro a10 tecra a1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVElvOHRPLVloaEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1RDamVvS05UZkU", "createdOn":"", "firstName":"toshiba satellite l550 pro l550.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1RDamVvS05UZkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUll1U2J6RHBHVlU", "createdOn":"", "firstName":"toshiba satellite 2590cdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUll1U2J6RHBHVlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUS0zZmtvTTFHTUk", "createdOn":"", "firstName":"toshiba satellite m30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUS0zZmtvTTFHTUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnJEdFNfSzltajQ", "createdOn":"", "firstName":"toshiba satellite a500d pro a500d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnJEdFNfSzltajQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTk10dkpWV3JmYzg", "createdOn":"", "firstName":"toshiba satellite u500 portege m900d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTk10dkpWV3JmYzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2RMWDY3dGJDQVE", "createdOn":"", "firstName":"toshiba satellite m500 m505 m507.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2RMWDY3dGJDQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0RVY2drcWR6b3M", "createdOn":"", "firstName":"toshiba satellite l600d l640d l650d pro l600d l640d l650d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0RVY2drcWR6b3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0JQZEMwV21VcW8", "createdOn":"", "firstName":"toshiba qosmio f60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0JQZEMwV21VcW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXZNZVJ1ME5NNTg", "createdOn":"", "firstName":"toshiba satellite 4200 4300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXZNZVJ1ME5NNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFZ5YkktRThOSGM", "createdOn":"", "firstName":"toshiba tecra a6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFZ5YkktRThOSGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFNMdzNSYW9xNm8", "createdOn":"", "firstName":"toshiba satellite a30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFNMdzNSYW9xNm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDVlNmxLSkNxQWs", "createdOn":"", "firstName":"toshiba satellite u400 pro u400 portege m800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDVlNmxLSkNxQWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRml4UkhJRE5iRzQ", "createdOn":"", "firstName":"toshiba portege t110 satellite t110 pro t110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRml4UkhJRE5iRzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2EtSjdPaVdrV1U", "createdOn":"", "firstName":"toshiba satellite 5100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2EtSjdPaVdrV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWpNa195V2tBWGc", "createdOn":"", "firstName":"toshiba satellite t230d pro t230d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWpNa195V2tBWGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWlxN0NQbklSX2s", "createdOn":"", "firstName":"toshiba satellite a40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWlxN0NQbklSX2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUtfOTdrZlE3NlU", "createdOn":"", "firstName":"toshiba tecra 8100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUtfOTdrZlE3NlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEtUWm1KOFlvaFE", "createdOn":"", "firstName":"toshiba satellite a350.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEtUWm1KOFlvaFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3NxVkU5Ykg2REU", "createdOn":"", "firstName":"toshiba tecra m4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3NxVkU5Ykg2REU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzJKME5rSENYMVk", "createdOn":"", "firstName":"toshiba satellite l500d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzJKME5rSENYMVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmR1ZmZXODFleWc", "createdOn":"", "firstName":"toshiba satellite pro 6000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmR1ZmZXODFleWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkw4WE9kWVQtWFU", "createdOn":"", "firstName":"toshiba satellite r10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkw4WE9kWVQtWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXRuTkhlN3QwZG8", "createdOn":"", "firstName":"toshiba satellite and pro a60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXRuTkhlN3QwZG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3VJU041UU9xaVk", "createdOn":"", "firstName":"toshiba satellite pro s300 tecra a10 s10 p10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3VJU041UU9xaVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2txRkxFZjlqemM", "createdOn":"", "firstName":"toshiba satellite a70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2txRkxFZjlqemM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienF0TmoxcDRRd3c", "createdOn":"", "firstName":"toshiba satellite pro m10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienF0TmoxcDRRd3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVVhUGJleWxNVE0", "createdOn":"", "firstName":"toshiba portege p2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVVhUGJleWxNVE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidW9zcXlLWVFUV00", "createdOn":"", "firstName":"toshiba tecra s1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidW9zcXlLWVFUV00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUFJTVVXTmVyYW8", "createdOn":"", "firstName":"hp  compaq 100 armada 100s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUFJTVVXTmVyYW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTFrYVlzejZwejQ", "createdOn":"", "firstName":"toshiba satellite a200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTFrYVlzejZwejQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicngtdWFsV3JHYTQ", "createdOn":"", "firstName":"toshiba satellite c650d c655d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicngtdWFsV3JHYTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDVSWURuNUp0ZEk", "createdOn":"", "firstName":"toshiba satellite a20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDVSWURuNUp0ZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHExb29VRU9wem8", "createdOn":"", "firstName":"toshiba satellite 300 310 320 330.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHExb29VRU9wem8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazgxOUVkOHhXdWM", "createdOn":"", "firstName":"toshiba qosmio f30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazgxOUVkOHhXdWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakJWdkozcXpTOE0", "createdOn":"", "firstName":"toshiba satellite 2400 2405.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakJWdkozcXpTOE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUxvcGRRa0ozMkU", "createdOn":"", "firstName":"toshiba satellite 2060cds 2100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUxvcGRRa0ozMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDN4b3JjTVdiWEU", "createdOn":"", "firstName":"toshiba satellite l20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDN4b3JjTVdiWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnFKRk1ha3pud00", "createdOn":"", "firstName":"toshiba satellite a500 pro a500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnFKRk1ha3pud00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkVtTGpGczhNQkk", "createdOn":"", "firstName":"toshiba satellite l650 l655 pro l650 l655.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkVtTGpGczhNQkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZE1sZ1JzOWhUYTA", "createdOn":"", "firstName":"toshiba portege m900d satellite u500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZE1sZ1JzOWhUYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmNiLWE1VEVYRGM", "createdOn":"", "firstName":"hp  compaq 510 511 515 516.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmNiLWE1VEVYRGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1ZHcHlMaDFYV0E", "createdOn":"", "firstName":"toshiba satellite m200 m205 pro m200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1ZHcHlMaDFYV0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWE91Qm1uT2prUkE", "createdOn":"", "firstName":"toshiba satellite m20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWE91Qm1uT2prUkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVl9Ucm9NeGJjSTA", "createdOn":"", "firstName":"hp  compaq evo n800c n800v n800w presario 2800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVl9Ucm9NeGJjSTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXNESUxmY1g1dkE", "createdOn":"", "firstName":"toshiba satellite m300 pro m300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXNESUxmY1g1dkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVhkazJFblNwejQ", "createdOn":"", "firstName":"hp  compaq armada e700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVhkazJFblNwejQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXVWYVNqejhhNFk", "createdOn":"", "firstName":"toshiba qosmio g50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXVWYVNqejhhNFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNURlVmNTNxMU0", "createdOn":"", "firstName":"toshiba portege m780.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNURlVmNTNxMU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnhJMnRpc3loT3c", "createdOn":"", "firstName":"toshiba satellite p100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnhJMnRpc3loT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSktJVk1aYW92ZWc", "createdOn":"", "firstName":"toshiba satellite 2610 2750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSktJVk1aYW92ZWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVJZQW8xcE5FNTg", "createdOn":"", "firstName":"toshiba satellite 1700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVJZQW8xcE5FNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3p4WE1STVJMMjg", "createdOn":"", "firstName":"toshiba tecra 780.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3p4WE1STVJMMjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmxYZENNdV9GYVk", "createdOn":"", "firstName":"toshiba satellite a50 tecra a2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmxYZENNdV9GYVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRjM4dEQxU1dvSWc", "createdOn":"", "firstName":"toshiba qosmio x300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRjM4dEQxU1dvSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkNJeVlwSTdyXzg", "createdOn":"", "firstName":"toshiba satellite a350d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkNJeVlwSTdyXzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ09Zb2c3UXljN1E", "createdOn":"", "firstName":"toshiba satellite r20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ09Zb2c3UXljN1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXluQ09IdzlmY0U", "createdOn":"", "firstName":"toshiba tecra a5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXluQ09IdzlmY0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVRzbFF2Qzk0ZmM", "createdOn":"", "firstName":"toshiba tecra m3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVRzbFF2Qzk0ZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHYtWlZLMTk2TXc", "createdOn":"", "firstName":"toshiba satellite p10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHYtWlZLMTk2TXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNm1jbElaMnkwbFE", "createdOn":"", "firstName":"toshiba tecra 9000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNm1jbElaMnkwbFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNloyMVp5aGMtY28", "createdOn":"", "firstName":"toshiba satellite pro 6100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNloyMVp5aGMtY28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjRmSm1uVUxPWkU", "createdOn":"", "firstName":"toshiba satellite l630 l635 pro l630 l635.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjRmSm1uVUxPWkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXdsYzdBTlBCaGs", "createdOn":"", "firstName":"toshiba tecra 780cdm 780dvd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXdsYzdBTlBCaGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWoxRGJuNkk2WkE", "createdOn":"", "firstName":"toshiba satellite 2100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWoxRGJuNkk2WkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVVlbHJBQWhWcm8", "createdOn":"", "firstName":"hp  compaq evo n600c n610c n610v n620c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVVlbHJBQWhWcm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMldmOUhnQnhHR0U", "createdOn":"", "firstName":"toshiba satellite l630 l635.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMldmOUhnQnhHR0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkppUDBJTW9McDQ", "createdOn":"", "firstName":"hp  compaq 610 615.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkppUDBJTW9McDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVpoNFZIbzh2M28", "createdOn":"", "firstName":"hp  compaq armada 4100 4200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVpoNFZIbzh2M28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUliVUpyWFZOVjQ", "createdOn":"", "firstName":"toshiba satellite l600 l640 l645 pro l600 l640 l645.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUliVUpyWFZOVjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHJ0dm1ha1dKNUk", "createdOn":"", "firstName":"toshiba satellite a50s tecra a3x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHJ0dm1ha1dKNUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG5TcC13MlFZNEk", "createdOn":"", "firstName":"toshiba satellite a300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG5TcC13MlFZNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUxNVFJXcXdUSmM", "createdOn":"", "firstName":"toshiba tecra m9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUxNVFJXcXdUSmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTJPU3I5N3NJZHc", "createdOn":"", "firstName":"toshiba satellite 1400 1405.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTJPU3I5N3NJZHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLS1pa2dhVmpWRFU", "createdOn":"", "firstName":"toshiba tecra 520cdt 530cdt 550cdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLS1pa2dhVmpWRFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmtKR0lDYlpkUEk", "createdOn":"", "firstName":"toshiba satellite l670d l675d pro l670d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmtKR0lDYlpkUEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFhIM0VwY2diZDQ", "createdOn":"", "firstName":"toshiba satellite p500 pro p500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFhIM0VwY2diZDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEZKSzN1VWdFWEU", "createdOn":"", "firstName":"toshiba satellite 1900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEZKSzN1VWdFWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmJ6WW1hWXVSRnM", "createdOn":"", "firstName":"toshiba satellite te2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmJ6WW1hWXVSRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibW03SW9HWWNFc2M", "createdOn":"", "firstName":"toshiba qosmio g30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibW03SW9HWWNFc2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGtKTXZqODBxZTA", "createdOn":"", "firstName":"toshiba satellite m40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGtKTXZqODBxZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGNXeE1DNDhjNnM", "createdOn":"", "firstName":"toshiba satellite pro a120 tecra a8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGNXeE1DNDhjNnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWi0wRVpScVhqVmM", "createdOn":"", "firstName":"toshiba portege t130d satellite t130d pro t130d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWi0wRVpScVhqVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkRKTzlnQlUwQzg", "createdOn":"", "firstName":"toshiba portege m500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkRKTzlnQlUwQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkQ3Qk4yclY2Yk0", "createdOn":"", "firstName":"hp  compaq armada m700 (2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkQ3Qk4yclY2Yk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGN0b05STzlkNVU", "createdOn":"", "firstName":"toshiba satellite l450d pro l450d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGN0b05STzlkNVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2gyUjV2ZENUSFk", "createdOn":"", "firstName":"toshiba satellite p300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2gyUjV2ZENUSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2g1bUpoX2szdTg", "createdOn":"", "firstName":"toshiba satellite a80 a85.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2g1bUpoX2szdTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0tld0h3N1h0VDg", "createdOn":"", "firstName":"toshiba portege r500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0tld0h3N1h0VDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkxlX1puOUJWUE0", "createdOn":"", "firstName":"toshiba satellite t230 pro t230.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkxlX1puOUJWUE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2hWRXhmNm1kSGc", "createdOn":"", "firstName":"toshiba portege t110d satellite t110d pro t110d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2hWRXhmNm1kSGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTW1TenZDLU9CSHc", "createdOn":"", "firstName":"toshiba satellite c650 c655.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTW1TenZDLU9CSHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGxTaDBFRUJBdDg", "createdOn":"", "firstName":"toshiba satellite m40 tecra a4 dynabook vx4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGxTaDBFRUJBdDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDZKUUVhTnFsb00", "createdOn":"", "firstName":"hp  compaq evo n160.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDZKUUVhTnFsb00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1Y1V3h2a2owZjQ", "createdOn":"", "firstName":"toshiba qosmio f20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1Y1V3h2a2owZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSm93QXAxbWpGN2s", "createdOn":"", "firstName":"toshiba qosmio g10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSm93QXAxbWpGN2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjFpSl85NG9kQ1E", "createdOn":"", "firstName":"toshiba satellite m30 35.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjFpSl85NG9kQ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFllUkxpLXpKRmM", "createdOn":"", "firstName":"toshiba satellite p30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFllUkxpLXpKRmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3pVUkNod1VOVmM", "createdOn":"", "firstName":"toshiba tecra m1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3pVUkNod1VOVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXlZWWt3RmJYZjg", "createdOn":"", "firstName":"toshiba tecra 8200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXlZWWt3RmJYZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFlOYjBNSnJFajg", "createdOn":"", "firstName":"toshiba satellite m100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFlOYjBNSnJFajg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNk1xQ2lFWnNMbTg", "createdOn":"", "firstName":"toshiba portege r400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNk1xQ2lFWnNMbTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjhJR1REeTk4MHM", "createdOn":"", "firstName":"toshiba satellite p20 25.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjhJR1REeTk4MHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUVmcjdoczlfWUk", "createdOn":"", "firstName":"toshiba satellite x200 x205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUVmcjdoczlfWUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN084N09fSVIyNzA", "createdOn":"", "firstName":"toshiba satellite 2510cds.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN084N09fSVIyNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmZZS2hOZ2tVTU0", "createdOn":"", "firstName":"hp  compaq evo n180.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmZZS2hOZ2tVTU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkhMOWhpNmZlUjQ", "createdOn":"", "firstName":"hp  compaq armada e500 e500s v300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkhMOWhpNmZlUjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXhiOGhSaHRWYnc", "createdOn":"", "firstName":"toshiba satellite 4030 4060 4070 4080 4090 4100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXhiOGhSaHRWYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMU9mbkF2N3prMGM", "createdOn":"", "firstName":"toshiba satellite u300 pro u300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMU9mbkF2N3prMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2dDYk5lcUVzekk", "createdOn":"", "firstName":"toshiba satellite p200 p205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2dDYk5lcUVzekk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0pEQWRNWmVtTms", "createdOn":"", "firstName":"toshiba satellite pro s500 tecra a11 s11 p11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0pEQWRNWmVtTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWhwRFVUVzFvZ2c", "createdOn":"", "firstName":"toshiba satellite 2520cds 2540xcdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWhwRFVUVzFvZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidG1uM0xLcVdNQWM", "createdOn":"", "firstName":"toshiba portege r600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidG1uM0xLcVdNQWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUdCRGUyYk5VYlU", "createdOn":"", "firstName":"toshiba satellite l10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUdCRGUyYk5VYlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3FhME1NNExEZlU", "createdOn":"", "firstName":"hp  compaq evo n150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3FhME1NNExEZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlBtUW1jTERXS2s", "createdOn":"", "firstName":"toshiba qosmio f40 f45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlBtUW1jTERXS2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnVXOG1xMEFlVFU", "createdOn":"", "firstName":"toshiba qosmio f50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnVXOG1xMEFlVFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0dKTGJNby1LRUU", "createdOn":"", "firstName":"toshiba satellite pro s200 tecra a9 s5 p5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0dKTGJNby1LRUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzY0NzVZWDFxMEU", "createdOn":"", "firstName":"toshiba satellite l500 pro l500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzY0NzVZWDFxMEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnFmRE1ZX1ZZVnc", "createdOn":"", "firstName":"toshiba satellite m40x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnFmRE1ZX1ZZVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3lxV3YtNFJ5OFk", "createdOn":"", "firstName":"toshiba satellite p20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3lxV3YtNFJ5OFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOE1IMWU3ZWtxcmM", "createdOn":"", "firstName":"toshiba satellite a10 pro a10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOE1IMWU3ZWtxcmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmRVUE5Pc1dJXzQ", "createdOn":"", "firstName":"toshiba portege s100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmRVUE5Pc1dJXzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjh0eElzemlHMk0", "createdOn":"", "firstName":"toshiba satellite 2500cds.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjh0eElzemlHMk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmtob01sTXU3S0E", "createdOn":"", "firstName":"toshiba qosmio e10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmtob01sTXU3S0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEJOeFNvTXJ6MEU", "createdOn":"", "firstName":"toshiba tecra m2v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEJOeFNvTXJ6MEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVU1c2puM2N3bTg", "createdOn":"", "firstName":"dell latitude c800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVU1c2puM2N3bTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWVlM09YMVQzTEU", "createdOn":"", "firstName":"dell  Vostro 1200 Compal LA 3821P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWVlM09YMVQzTEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidU9PYnZJY2IzRkk", "createdOn":"", "firstName":"hp  hp envy 13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidU9PYnZJY2IzRkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGRNSi1tOU9KRFU", "createdOn":"", "firstName":"hp  HP Pavilion DV4000 leopard2 0711 05202.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGRNSi1tOU9KRFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid05aaXNyZzZhLWc", "createdOn":"", "firstName":"hp  hp 540 541.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid05aaXNyZzZhLWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUg3NmxHajdNcjQ", "createdOn":"", "firstName":"dell inspiron 7000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUg3NmxHajdNcjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHZobXJIV01XSWc", "createdOn":"", "firstName":"toshiba Toshiba M18.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHZobXJIV01XSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicE56bWlFeFNiN00", "createdOn":"", "firstName":"hp  hp touchsmart tx2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicE56bWlFeFNiN00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic25qMlplVDJBaFk", "createdOn":"", "firstName":"hp  hp nc6400 www.lqv77.com(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic25qMlplVDJBaFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGhzTXVLbkd6VUk", "createdOn":"", "firstName":"toshiba Toshiba Satellite M50 Compal LA 2861.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGhzTXVLbkd6VUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmpxeGNrNy1TdFk", "createdOn":"", "firstName":"asus a6j mb 1122.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmpxeGNrNy1TdFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmpWaWF2OWpudGM", "createdOn":"", "firstName":"asus g1s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmpWaWF2OWpudGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXprZW9jTHF6anc", "createdOn":"", "firstName":"hp  hp nc8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXprZW9jTHF6anc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWVDcGV1ZVdiZkE", "createdOn":"", "firstName":"dell FM9 A1A 0303 SCOTT RENAME 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWVDcGV1ZVdiZkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2ZlTy1TMlpza0U", "createdOn":"", "firstName":"dell  Vostro 1400 QUANTA fm5 corsica.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2ZlTy1TMlpza0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXQxYzVWNmVGY3M", "createdOn":"", "firstName":"dell latitude xpi cd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXQxYzVWNmVGY3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2wxZF80TFF4QjQ", "createdOn":"", "firstName":"dell  D600 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2wxZF80TFF4QjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX215aW9mTnBxRzg", "createdOn":"", "firstName":"hp  hp 2533t mobile thin client.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX215aW9mTnBxRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTRUdnJ5U29FUXc", "createdOn":"", "firstName":"dell  c600 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTRUdnJ5U29FUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXNnSjlXX3k3Y0k", "createdOn":"", "firstName":"toshiba toshiba Satellite l500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXNnSjlXX3k3Y0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVRzMjdEYWNBZEk", "createdOn":"", "firstName":"asus  A6Rp.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVRzMjdEYWNBZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFlsbG5SVFZLZHc", "createdOn":"", "firstName":"asus  A6F   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFlsbG5SVFZLZHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUy1QdnhJMjJQU2M", "createdOn":"", "firstName":"hp  hp hdx 16.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUy1QdnhJMjJQU2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHNBTkl4anhQd2M", "createdOn":"", "firstName":"hp  HP compaq 6910p Compal LA 3261p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHNBTkl4anhQd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFZUNkFYOHhReFE", "createdOn":"", "firstName":"hp  hp elitebook 6930p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFZUNkFYOHhReFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0J0M09EdWx5d3c", "createdOn":"", "firstName":"asus w5f.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0J0M09EdWx5d3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkFpZTZTdjdlT0U", "createdOn":"", "firstName":"hp  hp pavilion zt1000 xz300 omnibook xt1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkFpZTZTdjdlT0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSU1aUzdjTzRCeTA", "createdOn":"", "firstName":"dell  Inspiron 1545.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSU1aUzdjTzRCeTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTQwOUllWFdpdlk", "createdOn":"", "firstName":"hp  Presario 2200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTQwOUllWFdpdlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDBzaG1sMUM2bEU", "createdOn":"", "firstName":"dell  510.www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDBzaG1sMUM2bEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRk9tWjNlc3lOcU0", "createdOn":"", "firstName":"hp  hp compaq tc4200 tablet.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRk9tWjNlc3lOcU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWZQTDJGMktHdVE", "createdOn":"", "firstName":"hp  hp pavilion ze2000 compaq presario m2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWZQTDJGMktHdVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzVQcXc4X3F2cXc", "createdOn":"", "firstName":"dell  Inspiron 8200 Compal LA 1221.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzVQcXc4X3F2cXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1FodWFVdU1ILTA", "createdOn":"", "firstName":"asus  Z62HA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1FodWFVdU1ILTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGlfVUlFX2tJdGc", "createdOn":"", "firstName":"hp  hp pavilion dv7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGlfVUlFX2tJdGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUFYeURlUVNCS3c", "createdOn":"", "firstName":"dell Vostro 1310 compal la4231p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUFYeURlUVNCS3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1EzWXA3RkpNQlE", "createdOn":"", "firstName":"asus a6jc a6jm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1EzWXA3RkpNQlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFlSejg4OVFXeFk", "createdOn":"", "firstName":"asus  Z84FM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFlSejg4OVFXeFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3d6SW1zUzhIUlk", "createdOn":"", "firstName":"hp  hp g50 compaq presario cq50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3d6SW1zUzhIUlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGp2OHEwOE9acWs", "createdOn":"", "firstName":"asus  Z62H.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGp2OHEwOE9acWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjJUMUNOZnBCM28", "createdOn":"", "firstName":"hp  HP Pavilion DV4   COMPAL LA 4101P ICH9   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjJUMUNOZnBCM28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFZKLUFpWkk2Q1U", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C700   COMPAL LA 4031 JBL81   REV 1.0   ZOUAVE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFZKLUFpWkk2Q1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3NRQWVuWm1DYTQ", "createdOn":"", "firstName":"dell inspiron 9100 inspiron xps 9100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3NRQWVuWm1DYTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3dvbzNhanI0SnM", "createdOn":"", "firstName":"hp  Compaq F700 upload.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3dvbzNhanI0SnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkFQWnliUURjV1k", "createdOn":"", "firstName":"asus  F9J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkFQWnliUURjV1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGhlRm1ZNzlhYTA", "createdOn":"", "firstName":"hp  HP COMPAQ V3500   WISTRON TIBET   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGhlRm1ZNzlhYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWdqNzc1WFpRWDg", "createdOn":"", "firstName":"hp  hp dv6700 intel quanta at3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWdqNzc1WFpRWDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVJxQkRPUmpBSWs", "createdOn":"", "firstName":"hp  hp tx1000 quanta tt8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVJxQkRPUmpBSWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0tZUEhXNkpvdnM", "createdOn":"", "firstName":"hp  hp pavilion dv6500 6600 6700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0tZUEhXNkpvdnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclhLUzViS01RWEU", "createdOn":"", "firstName":"asus x50rl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclhLUzViS01RWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclFhdWl2SXc3d1E", "createdOn":"", "firstName":"toshiba Toshiba a30 la 1931 dbl10 sapporo X.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclFhdWl2SXc3d1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickxtblU5TERwNkU", "createdOn":"", "firstName":"dell  Inspiron 1525.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickxtblU5TERwNkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUNzdjB0YW9pbTg", "createdOn":"", "firstName":"hp  hp g3000 compaq presario c300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUNzdjB0YW9pbTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnRhOURqYi05R2M", "createdOn":"", "firstName":"asus a7v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnRhOURqYi05R2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFpBdTJoLUhQNEE", "createdOn":"", "firstName":"hp  hp pavilion dv4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFpBdTJoLUhQNEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0l6UzJxMDdhWjQ", "createdOn":"", "firstName":"hp  hp dv9000 amd quanta at1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0l6UzJxMDdhWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHE3VVdkNlNQM2s", "createdOn":"", "firstName":"dell Inspiron 630M CRT BOARD 48.4C403.011.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHE3VVdkNlNQM2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia24tV3NWZW9OZWs", "createdOn":"", "firstName":"asus  Z62HA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia24tV3NWZW9OZWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia04wT3FVdXFmSnc", "createdOn":"", "firstName":"hp  hp pavilion dv6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia04wT3FVdXFmSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzM3blRrUDFXRmc", "createdOn":"", "firstName":"dell  XPS M1330 Thurman UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzM3blRrUDFXRmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmZncXZmdm1PVG8", "createdOn":"", "firstName":"dell  Inspiron 1420.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmZncXZmdm1PVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2NWbkxhZE9mYWs", "createdOn":"", "firstName":"hp  hp pavilion tx2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2NWbkxhZE9mYWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYldBbUhQdUV5Vmc", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A100   INVENTEC SAN ANTONIO.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYldBbUhQdUV5Vmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3N0UEFHdUdGYXM", "createdOn":"", "firstName":"asus A8J.F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3N0UEFHdUdGYXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2RqZlZzMGE3N0k", "createdOn":"", "firstName":"dell  d630 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2RqZlZzMGE3N0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3kxbThUWUpvUHM", "createdOn":"", "firstName":"asus m6000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3kxbThUWUpvUHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTZ5dllRVWg2d2s", "createdOn":"", "firstName":"toshiba Toshiba a70 la 2301.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTZ5dllRVWg2d2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDZTZUNlQ1hUTVE", "createdOn":"", "firstName":"hp  hp compaq nc4400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDZTZUNlQ1hUTVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGdhOUtuZ0JlUzQ", "createdOn":"", "firstName":"asus kn1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGdhOUtuZ0JlUzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlRyeDlUZVFLTFU", "createdOn":"", "firstName":"hp  hp special edition l2000 compaq presario v2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlRyeDlUZVFLTFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXMzS0NySEJDakE", "createdOn":"", "firstName":"hp  hp dv9000 amd quanta at8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXMzS0NySEJDakE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFFzcno1RWthRGc", "createdOn":"", "firstName":"hp  HP Compaq 2710P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFFzcno1RWthRGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUhLRVFIaFhCUUU", "createdOn":"", "firstName":"hp  hp 4410t mobile thin client.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUhLRVFIaFhCUUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGNmREdjQjZpNEk", "createdOn":"", "firstName":"dell  d610 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGNmREdjQjZpNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3JKTGUxeWNMZEk", "createdOn":"", "firstName":"hp  hp pavilion zd8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3JKTGUxeWNMZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0loUWNPRF9iVXc", "createdOn":"", "firstName":"dell  vostro 1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0loUWNPRF9iVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHJnNzJqWS00eVU", "createdOn":"", "firstName":"asus s62.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHJnNzJqWS00eVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDYxTG5KTDFwOGs", "createdOn":"", "firstName":"hp  dv4 ICH9 VGA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDYxTG5KTDFwOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3N4cE5lZ25oSFE", "createdOn":"", "firstName":"asus z93e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3N4cE5lZ25oSFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUJSR1B2Um1aUlE", "createdOn":"", "firstName":"asus a7t.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUJSR1B2Um1aUlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREZZZFpReXloYTg", "createdOn":"", "firstName":"asus sw1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREZZZFpReXloYTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTNCTWdyaWdxcnc", "createdOn":"", "firstName":"hp  hp mini 1000 compaq mini 700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTNCTWdyaWdxcnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOV9oN2h1TUZIUWc", "createdOn":"", "firstName":"dell  Inspiron 1545(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOV9oN2h1TUZIUWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHRibDExX2JLb3M", "createdOn":"", "firstName":"hp  HP520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHRibDExX2JLb3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTRxa3BDeUR6Z3c", "createdOn":"", "firstName":"hp  hp pavilion dv2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTRxa3BDeUR6Z3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1dGb0dKVzFqQXc", "createdOn":"", "firstName":"hp  hp pavilion zv6000 compaq presario r4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1dGb0dKVzFqQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzB3LU9BaC1nWjA", "createdOn":"", "firstName":"hp  hp pavilion ze2300 compaq presario m2300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzB3LU9BaC1nWjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjZkb1prams4aU0", "createdOn":"", "firstName":"hp  hp pavilion dv5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjZkb1prams4aU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1dIMFZqeGFFVmM", "createdOn":"", "firstName":"hp  Compaq Evo N600c COMPAL LA 1691.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1dIMFZqeGFFVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXlrSjVVVm9kNGc", "createdOn":"", "firstName":"dell latitude l400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXlrSjVVVm9kNGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXZyUEtrMDhtdGs", "createdOn":"", "firstName":"hp  hp compaq tc1100 tablet.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXZyUEtrMDhtdGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidms3NDlOR3VNSTg", "createdOn":"", "firstName":"asus  A6T REV 1.01..pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidms3NDlOR3VNSTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGJFalZDeF9jY0U", "createdOn":"", "firstName":"hp  COMPAQ A900 LA 3981P v10 1022 JBL81.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGJFalZDeF9jY0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDMyQXA1eWp4LTQ", "createdOn":"", "firstName":"hp  hp 6510B 6710b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDMyQXA1eWp4LTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGotT0JhQTN0dWs", "createdOn":"", "firstName":"toshiba Toshiba P35 la 2371.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGotT0JhQTN0dWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHJ4blcxUlhIZmM", "createdOn":"", "firstName":"hp  hp pavilion widescreen zt3000 compaq business nx7000 presario widescreen x1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHJ4blcxUlhIZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVJ4R01BMzNlbGs", "createdOn":"", "firstName":"hp  HP V3000 DV2000 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVJ4R01BMzNlbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHAxeGJ6TGx3TEk", "createdOn":"", "firstName":"asus  A6J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHAxeGJ6TGx3TEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGxxelotLWw5SkE", "createdOn":"", "firstName":"hp  hp probook 4410s 4411s 4510s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGxxelotLWw5SkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlh0Vy1yR1ZjVTQ", "createdOn":"", "firstName":"asus  A6K.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlh0Vy1yR1ZjVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFh0UmxNQkZma1U", "createdOn":"", "firstName":"hp  hp 500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFh0UmxNQkZma1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2dRc3p2S3hCc00", "createdOn":"", "firstName":"dell  Inspiron 1525(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2dRc3p2S3hCc00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEhHYkZTM1FELUk", "createdOn":"", "firstName":"toshiba Toshiba Satellite A80 COMPAL LA 2491.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEhHYkZTM1FELUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0RhelNBbEdMVFk", "createdOn":"", "firstName":"hp  hp probook 5310m.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0RhelNBbEdMVFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibk5qUm8zNE10NlU", "createdOn":"", "firstName":"asus z500a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibk5qUm8zNE10NlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3c3cUNlMl81dFU", "createdOn":"", "firstName":"dell  Inspiron1440.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3c3cUNlMl81dFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3FROTZ0X1loWkk", "createdOn":"", "firstName":"hp  HP EZ4900 KT2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3FROTZ0X1loWkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHYxQzlHNENoSlk", "createdOn":"", "firstName":"hp  HP  NX9000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHYxQzlHNENoSlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0JQWHZFdnllUGs", "createdOn":"", "firstName":"asus F5R.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0JQWHZFdnllUGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZU1wV0ZkM3hOa2M", "createdOn":"", "firstName":"hp  hp mini 1101 mini 110 compaq mini 110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZU1wV0ZkM3hOa2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDJpMlUxeXpNQ3c", "createdOn":"", "firstName":"hp  HP 541.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDJpMlUxeXpNQ3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2ZFMGtPVVdjLVE", "createdOn":"", "firstName":"dell  Inpiron 1150 COMPAL LA 1684.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2ZFMGtPVVdjLVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWFxWVUxa1c0NFE", "createdOn":"", "firstName":"hp  hp pavilion dv8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWFxWVUxa1c0NFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1lta0V4cDVaMGc", "createdOn":"", "firstName":"dell  latitude d820.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1lta0V4cDVaMGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3BTU2E0cXVTalE", "createdOn":"", "firstName":"hp  HP Elitebook 6930p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3BTU2E0cXVTalE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2VNM0FDZTRXZE0", "createdOn":"", "firstName":"hp  hp elitebook 8530p 8530w.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2VNM0FDZTRXZE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlZFbnFjZDFBMkU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlZFbnFjZDFBMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnk0a3VWVnBQY0k", "createdOn":"", "firstName":"dell  5100 la 1452.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnk0a3VWVnBQY0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGs1ZVVxZ1R0MVE", "createdOn":"", "firstName":"hp  hp pavilion dv9000 dv9200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGs1ZVVxZ1R0MVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlhzQTkwU29KMjQ", "createdOn":"", "firstName":"hp  HP CQ50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlhzQTkwU29KMjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWdrQllOMnVBV0U", "createdOn":"", "firstName":"hp  HP compaq 6720.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWdrQllOMnVBV0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2x5LThhTnNxMzg", "createdOn":"", "firstName":"hp  HP V3000 DV2000 intel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2x5LThhTnNxMzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTjRvREh3cWVJVDQ", "createdOn":"", "firstName":"hp  HP Compaq nx7000 COMPAL LA 1701R1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTjRvREh3cWVJVDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzlHdS1nank2YkE", "createdOn":"", "firstName":"hp  hp compaq 8710p notebook 8710w mobile workstation.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzlHdS1nank2YkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSG01U29oV0NuZm8", "createdOn":"", "firstName":"dell  6400 FM1 R1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSG01U29oV0NuZm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS19GTWNEWVZHNGM", "createdOn":"", "firstName":"asus EEEPC 1008ha Power Board 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS19GTWNEWVZHNGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkhCSTl2T21la28", "createdOn":"", "firstName":"hp  hp 530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkhCSTl2T21la28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHRtOXlfT0phcVk", "createdOn":"", "firstName":"hp  hp pavilion dv1400 compaq nx4820 compaq presario v2400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHRtOXlfT0phcVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVZhWDF3WG5uU0E", "createdOn":"", "firstName":"toshiba SATELLITE L30 QUANTA BL1.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVZhWDF3WG5uU0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUVlZGNfQU04ODg", "createdOn":"", "firstName":"asus z9200k.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUVlZGNfQU04ODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOV8tbllzU041TUE", "createdOn":"", "firstName":"dell  d610 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOV8tbllzU041TUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnQ4WXdFRVVKYnc", "createdOn":"", "firstName":"asus  A3H   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnQ4WXdFRVVKYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlZlM3ZqSGVLbDQ", "createdOn":"", "firstName":"hp  hp g60 compaq presario cq60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlZlM3ZqSGVLbDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjd0Q1ltX2RJcVE", "createdOn":"", "firstName":"hp  hp probook 4310s 4311s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjd0Q1ltX2RJcVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXptRnpCb2I1ZUU", "createdOn":"", "firstName":"hp  hp nx6320.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXptRnpCb2I1ZUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1J3eTZHdDhTeXc", "createdOn":"", "firstName":"dell latitude x200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1J3eTZHdDhTeXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkdLMVRNTkI2RGs", "createdOn":"", "firstName":"hp  hp dv9260 intel quanta at5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkdLMVRNTkI2RGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWdweG52OUZUaXM", "createdOn":"", "firstName":"hp  hp mini note 2133 2140.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWdweG52OUZUaXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUdxQXU4YkNfMjg", "createdOn":"", "firstName":"hp  hp pavilion ze5600 5500 5400 5300 5200 4700 4600 4500 4400 4300 4200 4100 compaq nx9010 9008 9005 9000 evo n1050v n1010v presario 2500 2100 1100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUdxQXU4YkNfMjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVBhWGFLOVJVRmc", "createdOn":"", "firstName":"hp  hp 550.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVBhWGFLOVJVRmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEdCeEp2b2MwMDQ", "createdOn":"", "firstName":"dell inspiron 300m.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEdCeEp2b2MwMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieC11MGZCdnpFRVE", "createdOn":"", "firstName":"hp  HP Pavilion DV5   Intel QT6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieC11MGZCdnpFRVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmJqV0NJdlByVms", "createdOn":"", "firstName":"hp  hp envy 15.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmJqV0NJdlByVms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkJrbFdOMUNWTG8", "createdOn":"", "firstName":"dell fm9 Hanks MLK FM9B UMA &amp.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkJrbFdOMUNWTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUNUZTAxaXpTM3c", "createdOn":"", "firstName":"hp  HP Compaq nx7010 COMPAL LA 1701R2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUNUZTAxaXpTM3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFdWcnRoMjVLS3c", "createdOn":"", "firstName":"asus s96j.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFdWcnRoMjVLS3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidC0yZmRkZ0xZLVU", "createdOn":"", "firstName":"dell latitude x300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidC0yZmRkZ0xZLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnIwT0V5UXQ1Vk0", "createdOn":"", "firstName":"dell  inspiron 8600 COMPAL LA 1901 REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnIwT0V5UXQ1Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmpEaFhxTnhUN2c", "createdOn":"", "firstName":"hp  hp elitebook 2730p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmpEaFhxTnhUN2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHBVcDRxenNVbjA", "createdOn":"", "firstName":"hp  hp pavilion dv8000 dv8200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHBVcDRxenNVbjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicG5TcWFReGhKRXM", "createdOn":"", "firstName":"asus m2400ne.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicG5TcWFReGhKRXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3ZVMXVodmxxRkU", "createdOn":"", "firstName":"asus k50ii mb r20 0309.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3ZVMXVodmxxRkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlczZVRvTFFva3c", "createdOn":"", "firstName":"hp  hp g6000 compaq presario f500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlczZVRvTFFva3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDU2WE9ibUlFWEE", "createdOn":"", "firstName":"asus  T76S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDU2WE9ibUlFWEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnh6aUVfVUVVb3M", "createdOn":"", "firstName":"dell latitude cp cpi.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnh6aUVfVUVVb3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmFXWDJER2VBdW8", "createdOn":"", "firstName":"hp  hp dv1000 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmFXWDJER2VBdW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkp6d1VoVk9Na00", "createdOn":"", "firstName":"hp  hp pavilion hdx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkp6d1VoVk9Na00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWxGaUp3MGg1dlU", "createdOn":"", "firstName":"dell latitude c500 c600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWxGaUp3MGg1dlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3JqazVzTUtpMG8", "createdOn":"", "firstName":"hp  hp pavilion dv3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3JqazVzTUtpMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3Z1cEg4ZVlRSjA", "createdOn":"", "firstName":"asus g73.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3Z1cEg4ZVlRSjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUsxdUZ4R21rU2s", "createdOn":"", "firstName":"hp  HP dv4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUsxdUZ4R21rU2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVG51VnhCX0gtYU0", "createdOn":"", "firstName":"hp  CQ45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVG51VnhCX0gtYU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3dMMXRlMVBlQlE", "createdOn":"", "firstName":"hp  DV2000 intel 945akita.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3dMMXRlMVBlQlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0pCbllVU1ZjWEU", "createdOn":"", "firstName":"dell  d620 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0pCbllVU1ZjWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0dXXzZIWjlacEE", "createdOn":"", "firstName":"hp  hp compaq 6720t mobile thin client.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0dXXzZIWjlacEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjZxM1pFbW5GTGM", "createdOn":"", "firstName":"hp  hp pavilion zt1100 xz100 omnibook xt1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjZxM1pFbW5GTGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFZWdW4yYm54eUE", "createdOn":"", "firstName":"hp  hp pavilion ze5600 5500 5400 5300 5200 4700 4600 4500 4400 4300 4200 4100 compaq nx9010 9008 9005 9000 evo n1050v n1010v presario 2500 2100 1100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFZWdW4yYm54eUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVFoenVkamdaajA", "createdOn":"", "firstName":"hp  hp pavilion dm3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVFoenVkamdaajA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUMwU0NRbDlFcUU", "createdOn":"", "firstName":"asus s37e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUMwU0NRbDlFcUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXNsV1RjZnhfZGs", "createdOn":"", "firstName":"asus l8400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXNsV1RjZnhfZGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVRqYkxzQzFCbE0", "createdOn":"", "firstName":"toshiba Toshiba Satellite M55 Compal LA 2721.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVRqYkxzQzFCbE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzlkY0VRMGtzRkE", "createdOn":"", "firstName":"dell  inspiron 9300 COMPAL LA 2171.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzlkY0VRMGtzRkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGpIcjJBLXFTZWc", "createdOn":"", "firstName":"hp  hp pavilion zd7000 media center zd7000 compaq business nx9500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGpIcjJBLXFTZWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzlxTU9YWHVNOGc", "createdOn":"", "firstName":"dell  Inpiron 1318.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzlxTU9YWHVNOGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnRQRDBkSWFWWU0", "createdOn":"", "firstName":"hp  hp pavilion dv4000 compaq presario v4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnRQRDBkSWFWWU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUd3bG8xMzRUeFE", "createdOn":"", "firstName":"asus a3000n.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUd3bG8xMzRUeFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUdMbE54SlRiQW8", "createdOn":"", "firstName":"hp  hp elitebook 8730w.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUdMbE54SlRiQW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHVHbmEtWGZ0X1E", "createdOn":"", "firstName":"hp  HP Pavilion ZD7000 Quanta NT1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHVHbmEtWGZ0X1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmxTNUs5bEwwOWM", "createdOn":"", "firstName":"dell latitude cs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmxTNUs5bEwwOWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkRRZF80VGpsV3c", "createdOn":"", "firstName":"asus EEEPC 1008ha Rev 1.3G 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkRRZF80VGpsV3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHRrX3JiN1ItQnc", "createdOn":"", "firstName":"dell FM9 A1A 0226 SCOTT(RO) 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHRrX3JiN1ItQnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2tROXo3eG5tNEE", "createdOn":"", "firstName":"hp  HP CQ40 COMPAL LA 4101P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2tROXo3eG5tNEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1MtNE0yYVB4Q00", "createdOn":"", "firstName":"hp  hp probook 4710s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1MtNE0yYVB4Q00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0FKQ3gyNV9KSjA", "createdOn":"", "firstName":"hp  HP ZV6000   COMPAL LA 2421   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0FKQ3gyNV9KSjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnpleHBlUERYWW8", "createdOn":"", "firstName":"hp  hp pavilion zx5000 zv5000 compaq presario r3000 compaq business nx9100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnpleHBlUERYWW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXpPZWY5bGdOVXM", "createdOn":"", "firstName":"dell  6400 FM1 R1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXpPZWY5bGdOVXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEFlUnVMbGJkZG8", "createdOn":"", "firstName":"asus  A3N.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEFlUnVMbGJkZG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0hfTjVxUWluZ3c", "createdOn":"", "firstName":"hp  hp pavilion dm1 mini 311 compaq mini 311.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0hfTjVxUWluZ3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXJHYXJWRXVKU1E", "createdOn":"", "firstName":"hp  hp nc6400 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXJHYXJWRXVKU1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzEzNUhLTXNqemM", "createdOn":"", "firstName":"hp  hp g7000 compaq presario c700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzEzNUhLTXNqemM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXd1eGFKdlNPMjA", "createdOn":"", "firstName":"hp  hp pavilion dv2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXd1eGFKdlNPMjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHJ4WVg1NEIwZEE", "createdOn":"", "firstName":"hp  hp pavilion dx6500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHJ4WVg1NEIwZEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDNqalV5UVRBQjA", "createdOn":"", "firstName":"toshiba tochiba Satellite l500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDNqalV5UVRBQjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3c3QTYzVVBsY3c", "createdOn":"", "firstName":"dell  510.www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3c3QTYzVVBsY3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickU1ZVJEdHVNMHc", "createdOn":"", "firstName":"asus s97v z97v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickU1ZVJEdHVNMHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicU5VTERQWWJlV2c", "createdOn":"", "firstName":"dell  Vostro 1500   COMPAL LA 1452.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicU5VTERQWWJlV2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicThGQkl5c3BCcHM", "createdOn":"", "firstName":"dell latitude lm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicThGQkl5c3BCcHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3RkSlFOZ0V6ZWs", "createdOn":"", "firstName":"hp  hp mini 5101.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3RkSlFOZ0V6ZWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0ZxYzBZdHp4ZmM", "createdOn":"", "firstName":"hp  hp 520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0ZxYzBZdHp4ZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVpuc2VpZTN1SEE", "createdOn":"", "firstName":"hp  hp g7000 compaq presario c700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVpuc2VpZTN1SEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianZlTXA2VGtoSE0", "createdOn":"", "firstName":"asus v1s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianZlTXA2VGtoSE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHFCTWZFM01SXzQ", "createdOn":"", "firstName":"asus  A8t.M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHFCTWZFM01SXzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVNNMGNnZlpKbjA", "createdOn":"", "firstName":"toshiba Toshiba M70 352 rev10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVNNMGNnZlpKbjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUNaN0RyU0NwLVE", "createdOn":"", "firstName":"hp  hp compaq nx6110 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUNaN0RyU0NwLVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU01WlhYWkN1Y2c", "createdOn":"", "firstName":"dell fm9 c2b dis 090608.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU01WlhYWkN1Y2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2JYS0pnSG1WX00", "createdOn":"", "firstName":"asus  F9S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2JYS0pnSG1WX00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX1I0OHBzWFF0MVU", "createdOn":"", "firstName":"hp  nx9040 KT3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX1I0OHBzWFF0MVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlNFbTZWc19TTWc", "createdOn":"", "firstName":"hp  hp elitebook 2530p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlNFbTZWc19TTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWW1BVmZvamlmX3c", "createdOn":"", "firstName":"hp  hp compaq 6515b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWW1BVmZvamlmX3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTdVWFhRQ2UteDg", "createdOn":"", "firstName":"hp  hp 6510B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTdVWFhRQ2UteDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFBDMlRFOWxQd2s", "createdOn":"", "firstName":"asus s62f.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFBDMlRFOWxQd2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnpLZ3ZuRktkZGs", "createdOn":"", "firstName":"dell  m1330 Thurman Discrete VGA nVidia G86.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnpLZ3ZuRktkZGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUxvRnNxbEdHYjA", "createdOn":"", "firstName":"asus A6VC R20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUxvRnNxbEdHYjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEdTQjBSdlZjQ2M", "createdOn":"", "firstName":"asus  A3E R2.2   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEdTQjBSdlZjQ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVC13amlSRHpyQmc", "createdOn":"", "firstName":"hp  hp pavilion tx2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVC13amlSRHpyQmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkR2MU94a1VJTUU", "createdOn":"", "firstName":"hp  HP TX2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkR2MU94a1VJTUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUThCNkxUQ2hhNkk", "createdOn":"", "firstName":"apple LB 820 2879 Schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUThCNkxUQ2hhNkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU29xS2huNlRmV2M", "createdOn":"", "firstName":"toshiba Toshiba Satellite M35 Compal LA 2461.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU29xS2huNlRmV2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU05hUDJvTHJ2UU0", "createdOn":"", "firstName":"asus  M50vm   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU05hUDJvTHJ2UU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmp1TXhRWTdxaWc", "createdOn":"", "firstName":"hp  hp nc6000 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmp1TXhRWTdxaWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkgydzVFRTJjSnc", "createdOn":"", "firstName":"hp  HP NX6120(3).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkgydzVFRTJjSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU9XclBESGhDb1U", "createdOn":"", "firstName":"hp  hp nc8000(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU9XclBESGhDb1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGYxTXY4QzRVU0U", "createdOn":"", "firstName":"asus  F3JR R20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGYxTXY4QzRVU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmFkT0k0eEVvcUE", "createdOn":"", "firstName":"dell  1427.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmFkT0k0eEVvcUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSm9UTHVKeFRTVUk", "createdOn":"", "firstName":"hp  hp hdx 18.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSm9UTHVKeFRTVUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWhjelU2X1RaVHc", "createdOn":"", "firstName":"asus  UL50AT REV2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWhjelU2X1RaVHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWVFV1hKWHpxUGM", "createdOn":"", "firstName":"dell  Inspiron 1100   COMPAL LA 1452   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWVFV1hKWHpxUGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSExacHRKajNpSk0", "createdOn":"", "firstName":"hp  hp compaq nx6110 nc6110 nx6120 nc6120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSExacHRKajNpSk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWdmUTR5eENTZ1k", "createdOn":"", "firstName":"hp  evo620.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWdmUTR5eENTZ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlNud2J4VDUtS0U", "createdOn":"", "firstName":"hp  HP 6525S 540 541 DDD DIS GDDR1 A01 20070621.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlNud2J4VDUtS0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjhYeWlDX1ZOeGc", "createdOn":"", "firstName":"dell  Studio 1735 upload.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjhYeWlDX1ZOeGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2ptMkdwMTlzSUk", "createdOn":"", "firstName":"dell FM9404 01 3A 5 34.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2ptMkdwMTlzSUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzNDd3NVVHhIQlU", "createdOn":"", "firstName":"dell alienware m17x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzNDd3NVVHhIQlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWxMcW1BN3hQZEE", "createdOn":"", "firstName":"hp  hp dv6000 intel quanta at6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWxMcW1BN3hQZEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVlBZERDN0JwUFk", "createdOn":"", "firstName":"hp  hp pavilion tx1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVlBZERDN0JwUFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHJVRWo3TS1CeTQ", "createdOn":"", "firstName":"toshiba Toshiba a200 la 3661.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHJVRWo3TS1CeTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVpGY2VDRnZSaDg", "createdOn":"", "firstName":"hp  HP NX6120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVpGY2VDRnZSaDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM09sTC1yZEw3c1k", "createdOn":"", "firstName":"asus w3000a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM09sTC1yZEw3c1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVpCelFRR09LSVE", "createdOn":"", "firstName":"hp  HP520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVpCelFRR09LSVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHFwSE5aZlpGdE0", "createdOn":"", "firstName":"hp  HP CQ50(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHFwSE5aZlpGdE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmxKcTEtLVRaWWc", "createdOn":"", "firstName":"toshiba 220CDS 480CDT 470CDT 460CDT(CDX) 440CDT(CDX).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmxKcTEtLVRaWWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclVLcTJrbl84ZEU", "createdOn":"", "firstName":"hp  305 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclVLcTJrbl84ZEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTdaalV0bk83c2M", "createdOn":"", "firstName":"hp  OB4150 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTdaalV0bk83c2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2lQSVlvdHZLT3M", "createdOn":"", "firstName":"hp  COMPAQ CONTURA 400 SERIES PC SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2lQSVlvdHZLT3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaV9wcE9UUnU5M28", "createdOn":"", "firstName":"hp  OB4100 mri2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaV9wcE9UUnU5M28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTNDeDl4WmRwVEE", "createdOn":"", "firstName":"hp  ARMADA 100S AND NOTEBOOK 100 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTNDeDl4WmRwVEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYk12RzQzSmJIMW8", "createdOn":"", "firstName":"hp  OBXT6050 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYk12RzQzSmJIMW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1Ffa19uMWU4bW8", "createdOn":"", "firstName":"toshiba Portege3025ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1Ffa19uMWU4bW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2lGOWdNOE1UTDA", "createdOn":"", "firstName":"hp  OBXT1000 IB mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2lGOWdNOE1UTDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEFTamhCelpLQ0E", "createdOn":"", "firstName":"toshiba SATELLITE PRO TE2000 UserMan.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEFTamhCelpLQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUVSYmxnWmVaX0E", "createdOn":"", "firstName":"hp  EVO N110 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUVSYmxnWmVaX0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHBYblFRdjR6T3c", "createdOn":"", "firstName":"hp  HP COMPAQ BUSINESS NOTEBOOK NC6000 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHBYblFRdjR6T3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzZqX0lOTFBGUDQ", "createdOn":"", "firstName":"toshiba SATELLITE 2590 CDT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzZqX0lOTFBGUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGVsd1B0ejdqeFU", "createdOn":"", "firstName":"asus laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGVsd1B0ejdqeFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTBySV9LX294RlE", "createdOn":"", "firstName":"hp  OB7150 VCA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTBySV9LX294RlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTVLSk5fenZxcXM", "createdOn":"", "firstName":"hp  PRESARIO 1900 SERIES 1905 1906 1910 1915 1919 1920 1922 1925 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTVLSk5fenZxcXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEVmQXdxNEpoekU", "createdOn":"", "firstName":"hp  COMPAQ PORTABLE 386 PERSONAL COMPUTER SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEVmQXdxNEpoekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnVaU1YxX1BRSEE", "createdOn":"", "firstName":"toshiba TECRA 520  530  AND 550 CDT SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnVaU1YxX1BRSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2dTdFRDbUtIRGc", "createdOn":"", "firstName":"hp  ch6trouble.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2dTdFRDbUtIRGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFZ3YnduX2tVczg", "createdOn":"", "firstName":"hp  HP Compaq 2710P(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFZ3YnduX2tVczg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFJmalFkWkdnSU0", "createdOn":"", "firstName":"hp  HP compaq 6720(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFJmalFkWkdnSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEJVQW5VVV9VREE", "createdOn":"", "firstName":"hp  OB7150 mri2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEJVQW5VVV9VREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2JyVXR2VjEyMkk", "createdOn":"", "firstName":"toshiba 3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2JyVXR2VjEyMkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTdIWnBSN3VhbXc", "createdOn":"", "firstName":"hp  EVO N200 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTdIWnBSN3VhbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVdlcjdVT1VGU0E", "createdOn":"", "firstName":"hp  OBXE3 GD sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVdlcjdVT1VGU0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUc5UHVac3ZLTWM", "createdOn":"", "firstName":"hp  Win2000 up.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUc5UHVac3ZLTWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFNRUnhVcHdfUlU", "createdOn":"", "firstName":"hp  PROSIGNIA 150 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFNRUnhVcHdfUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidEk5eS02WGNjMGs", "createdOn":"", "firstName":"toshiba SATELLITE 2520 CDS AND 2540 XCDT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidEk5eS02WGNjMGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2dRenVLMHpCU1U", "createdOn":"", "firstName":"hp  PRESARIO 1600 SERIES 1650 and 1655 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2dRenVLMHpCU1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmx2WE14YTlpRnc", "createdOn":"", "firstName":"hp  AERO 8000 H PC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmx2WE14YTlpRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmE3ajVRZ1pXdUU", "createdOn":"", "firstName":"hp  OB7150 ESCS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmE3ajVRZ1pXdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGpSbDYxaU0taEU", "createdOn":"", "firstName":"hp  COMPAQ ARMADA M300 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGpSbDYxaU0taEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3dUTzFib3dtRzg", "createdOn":"", "firstName":"hp  OB800 WIN95 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3dUTzFib3dtRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakhSVU9GT3ctR1E", "createdOn":"", "firstName":"toshiba Portege 7000CT numbers.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakhSVU9GT3ctR1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajdLZlFFdVo3b3M", "createdOn":"", "firstName":"hp  OBXE DA ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajdLZlFFdVo3b3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUJRVlh3NDNxSTA", "createdOn":"", "firstName":"hp  OB800 DD ig.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUJRVlh3NDNxSTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXZrZl9adzdUa0k", "createdOn":"", "firstName":"toshiba 4600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXZrZl9adzdUa0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZW9RMG5uWWc2bHM", "createdOn":"", "firstName":"toshiba Portege610ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZW9RMG5uWWc2bHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTY2VnlQMDd6Mnc", "createdOn":"", "firstName":"hp  EVO N800C N800V N800W PRESARIO 2800 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTY2VnlQMDd6Mnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFBMaEZpUW5EUHc", "createdOn":"", "firstName":"hp  OB3100 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFBMaEZpUW5EUHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2NweW0xUS1BNDA", "createdOn":"", "firstName":"asus  F3Ka F3Ke.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2NweW0xUS1BNDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWpNWTBGYmxyRTA", "createdOn":"", "firstName":"toshiba 4200 4300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWpNWTBGYmxyRTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX1NpOURLWTFmT2M", "createdOn":"", "firstName":"toshiba TECRA 750 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX1NpOURLWTFmT2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlpKcFZXZmFNZzg", "createdOn":"", "firstName":"hp  OBXT6050 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlpKcFZXZmFNZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkVBaUJtdE1uYzQ", "createdOn":"", "firstName":"hp  OB4150 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkVBaUJtdE1uYzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjVSWC1xTjAxS28", "createdOn":"", "firstName":"hp  WinXP cg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjVSWC1xTjAxS28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXZkeWVrR3Zsc0k", "createdOn":"", "firstName":"hp  OBXE DA PR ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXZkeWVrR3Zsc0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVJhTE80MHl4WDQ", "createdOn":"", "firstName":"toshiba SATELLITE 220  440  460  470  AND 480 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVJhTE80MHl4WDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTdOYllyWTlLc2M", "createdOn":"", "firstName":"hp  OB4100 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTdOYllyWTlLc2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzEwdmRuQzJ3YkU", "createdOn":"", "firstName":"toshiba Portege3010ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzEwdmRuQzJ3YkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkRxUmd4eWNpT1E", "createdOn":"", "firstName":"hp  EVO E500 V300 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkRxUmd4eWNpT1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU9rZk9ZT0FSUWM", "createdOn":"", "firstName":"hp  OB800 gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU9rZk9ZT0FSUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEk4Uld1WDJTNkk", "createdOn":"", "firstName":"toshiba Satellite2065CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEk4Uld1WDJTNkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3Z2ZHVNUzR3QzQ", "createdOn":"", "firstName":"hp  PRESARIO 1800 SERIES 1805 1810 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3Z2ZHVNUzR3QzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3JsdC14MTQ2M28", "createdOn":"", "firstName":"toshiba P2000fru.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3JsdC14MTQ2M28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1hmUVZBRUJxQ3M", "createdOn":"", "firstName":"toshiba 2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1hmUVZBRUJxQ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSk56Z2tQVlNUVGc", "createdOn":"", "firstName":"hp  EVO N115.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSk56Z2tQVlNUVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGx6eGZ5enZqNE0", "createdOn":"", "firstName":"hp  OBXT6200 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGx6eGZ5enZqNE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkRLUXRpSy1FUmc", "createdOn":"", "firstName":"hp  OB3100 DP ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkRLUXRpSy1FUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRV95eE5Mb3c1R3M", "createdOn":"", "firstName":"dell D520 QUANTA DM5 SHELBY INTEGRATED SC D520 QUANTA DM5 SHELBY INTEGRATED SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRV95eE5Mb3c1R3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFJiYW51bWxwNGs", "createdOn":"", "firstName":"hp  OB800 5 166 CDROM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFJiYW51bWxwNGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2hlR0YxQmVLNm8", "createdOn":"", "firstName":"hp  OB7150 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2hlR0YxQmVLNm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0hZc0VEZnNUOVk", "createdOn":"", "firstName":"hp  ARMADA 3500 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0hZc0VEZnNUOVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzNvU091dHUwdVk", "createdOn":"", "firstName":"hp  OBXE4100 XE4500 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzNvU091dHUwdVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXY5Vm1KWDM2NVE", "createdOn":"", "firstName":"hp  PRESARIO 2800 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXY5Vm1KWDM2NVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2hZcGE0cWdZU1k", "createdOn":"", "firstName":"hp  OBXT1500 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2hZcGE0cWdZU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHlUeUpjTUxWeE0", "createdOn":"", "firstName":"hp  ch8parts.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHlUeUpjTUxWeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVdnSk8tY3dJSDA", "createdOn":"", "firstName":"toshiba Portege3020ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVdnSk8tY3dJSDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVRrUW1oRHlVaTA", "createdOn":"", "firstName":"hp  HP COMPAQ BUSINESS NOTEBOOK NC4000 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVRrUW1oRHlVaTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVJfRC00cmFlQzA", "createdOn":"", "firstName":"toshiba 2230CDS 2250CDT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVJfRC00cmFlQzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2RYU3RuWjF1b0E", "createdOn":"", "firstName":"toshiba SATELLITE 5000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2RYU3RuWjF1b0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM09VdW5VYWlpYkE", "createdOn":"", "firstName":"toshiba 2140CDS 2180CDT 2100CDS CDT 2060CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM09VdW5VYWlpYkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUVWdktVUENaRUE", "createdOn":"", "firstName":"dell laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUVWdktVUENaRUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekEwUUQxaVFWRkU", "createdOn":"", "firstName":"hp  Ch7Removal1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekEwUUQxaVFWRkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzdoS2tXYXVNN3M", "createdOn":"", "firstName":"hp  PRESARIO 900 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzdoS2tXYXVNN3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGVYbjJSQkdVSGM", "createdOn":"", "firstName":"dell  D520   QUANTA DM5   SHELBY INTEGRATED   SC.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGVYbjJSQkdVSGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFFZQkYyWU90Szg", "createdOn":"", "firstName":"toshiba 2750DVD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFFZQkYyWU90Szg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid29lVzFxUExyR0k", "createdOn":"", "firstName":"hp  hp nx6320(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid29lVzFxUExyR0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicG9pOUpHOUFqZGc", "createdOn":"", "firstName":"hp  OB500 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicG9pOUpHOUFqZGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3JOSmZ0TEIwRnc", "createdOn":"", "firstName":"toshiba SATELLITE 1710 CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3JOSmZ0TEIwRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibi1Lb3Z2NWdiTGs", "createdOn":"", "firstName":"hp  COMPAQ PROLINEA SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibi1Lb3Z2NWdiTGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTMyV1d1Q0ZPWnM", "createdOn":"", "firstName":"hp  OB7100 7150 HDD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTMyV1d1Q0ZPWnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTMxZmU1d2NBOGs", "createdOn":"", "firstName":"hp  Compaq F700 upload(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTMxZmU1d2NBOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialduTEVobVVhV0k", "createdOn":"", "firstName":"toshiba SATELLITE 1410  1415.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialduTEVobVVhV0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXhOWUFFNEdMNzA", "createdOn":"", "firstName":"hp  OBXT1000 IB rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXhOWUFFNEdMNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVRZU09JdkNXVXc", "createdOn":"", "firstName":"hp  PRESARIO 1200 SERIES 1245 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVRZU09JdkNXVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHBBVXp4eE1kQUE", "createdOn":"", "firstName":"toshiba 7020CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHBBVXp4eE1kQUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEtqOHJ3WV9uMm8", "createdOn":"", "firstName":"toshiba PORTEGE 3400 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEtqOHJ3WV9uMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3lRVW1tcTI3NE0", "createdOn":"", "firstName":"toshiba 9000FRU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3lRVW1tcTI3NE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXJpaTliZGNiUm8", "createdOn":"", "firstName":"dell  510  510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXJpaTliZGNiUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVJYZC03SFlNN28", "createdOn":"", "firstName":"hp  OB800 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVJYZC03SFlNN28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2FVTWlvblRiSWs", "createdOn":"", "firstName":"toshiba SATELLITE 300  310  320 AND 330.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2FVTWlvblRiSWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVV3Tm1fZGJJS28", "createdOn":"", "firstName":"hp  OBXT6050 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVV3Tm1fZGJJS28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU1aeHFOLUhtZ1U", "createdOn":"", "firstName":"toshiba PORTEGE 3110 CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU1aeHFOLUhtZ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY01xOVFhZmQ1d2c", "createdOn":"", "firstName":"hp  OB7100 VCA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY01xOVFhZmQ1d2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWllzYVZmR0hOWnc", "createdOn":"", "firstName":"hp  OBXE3 GF mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWllzYVZmR0hOWnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGhTLTVMN1ZWYkU", "createdOn":"", "firstName":"toshiba SATELLITE 2430  2435.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGhTLTVMN1ZWYkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlAySGxBVWdQTXc", "createdOn":"", "firstName":"toshiba PORTEGE 7020 CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlAySGxBVWdQTXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVM1b2VfcVBPQ0E", "createdOn":"", "firstName":"toshiba PROTEGE P2000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVM1b2VfcVBPQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1B2UEFScWE3YU0", "createdOn":"", "firstName":"hp  OB900 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1B2UEFScWE3YU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzcybzJCaTI1X1E", "createdOn":"", "firstName":"hp  EVO N180 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzcybzJCaTI1X1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWY2bTB0b1JPSzQ", "createdOn":"", "firstName":"asus  A6J(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWY2bTB0b1JPSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDhhM0xITGlBSVE", "createdOn":"", "firstName":"hp  ARMADA 7800 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDhhM0xITGlBSVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2o2MXhfS1BxUk0", "createdOn":"", "firstName":"toshiba SATELLITE 2230  2250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2o2MXhfS1BxUk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjZEMk1VdUFtajQ", "createdOn":"", "firstName":"hp  PRESARIO 3000 SERIES Notebook SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjZEMk1VdUFtajQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSE5aRjlUQlRQSkE", "createdOn":"", "firstName":"toshiba PORTEGE 3010 CT AND 3020 CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSE5aRjlUQlRQSkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1lXaVh6QWo4ZDg", "createdOn":"", "firstName":"hp  OB4100 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1lXaVh6QWo4ZDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzgtQlc2aTlaWFk", "createdOn":"", "firstName":"toshiba Portege 7010CTnumbers.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzgtQlc2aTlaWFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzV1VWxzV2dXOEE", "createdOn":"", "firstName":"hp  COMPAQ LTE ELITE SMARTSTATION SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzV1VWxzV2dXOEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGE1M2ZQR2c1eGM", "createdOn":"", "firstName":"hp  EVO D51 E PC TECH REF.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGE1M2ZQR2c1eGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWJsdDlJeTEwRWs", "createdOn":"", "firstName":"hp  OB3100 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWJsdDlJeTEwRWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0tkS2QzTWllSnc", "createdOn":"", "firstName":"toshiba S1900fru.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0tkS2QzTWllSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWl4c0VsZ3BqX3c", "createdOn":"", "firstName":"hp  ch5battery&power.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWl4c0VsZ3BqX3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnprYXliRHpMa0E", "createdOn":"", "firstName":"toshiba fru8100 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnprYXliRHpMa0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTFQNXhVdUMyblE", "createdOn":"", "firstName":"toshiba Satellite300CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTFQNXhVdUMyblE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDZJN21lS1ZoZXc", "createdOn":"", "firstName":"toshiba TECRA 9000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDZJN21lS1ZoZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3hSSVFhUzVlRTA", "createdOn":"", "firstName":"hp  ch1before.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3hSSVFhUzVlRTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0Jkcm5KdEZmNnM", "createdOn":"", "firstName":"toshiba 4000 4010 4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0Jkcm5KdEZmNnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0FXeTJWcnB1c00", "createdOn":"", "firstName":"toshiba TECRA 8200 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0FXeTJWcnB1c00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFV5N01zZ1hjR0E", "createdOn":"", "firstName":"toshiba SATELLITE 1700 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFV5N01zZ1hjR0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1NyWTAzV2VNdnM", "createdOn":"", "firstName":"toshiba Libretto110CT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1NyWTAzV2VNdnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1BUYTNSMmkzWFk", "createdOn":"", "firstName":"hp  EVO N150 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1BUYTNSMmkzWFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVQyQm9MSV95QUE", "createdOn":"", "firstName":"hp  OB7100 WIN9598NTV2 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVQyQm9MSV95QUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGJTR1NUcG5NaU0", "createdOn":"", "firstName":"toshiba Satellite320CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGJTR1NUcG5NaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkRIdnpaXzBRdUU", "createdOn":"", "firstName":"hp  EVO N1020v N1000v SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkRIdnpaXzBRdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUFBQ2JrVVpkSnM", "createdOn":"", "firstName":"hp  COMPAQ LTE5000 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUFBQ2JrVVpkSnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTFTSU91bHdnU3c", "createdOn":"", "firstName":"hp  COMPAQ CONCERTO SERIES PC SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTFTSU91bHdnU3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidE9hTFVxaG5ZTk0", "createdOn":"", "firstName":"hp  OB500 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidE9hTFVxaG5ZTk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidE9YUDdFdGFkanM", "createdOn":"", "firstName":"hp  OB4100 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidE9YUDdFdGFkanM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjlnd3NGY25aWUE", "createdOn":"", "firstName":"hp  ARMADA 1700 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjlnd3NGY25aWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVN2MURzZ1JJdEU", "createdOn":"", "firstName":"toshiba Satellite320CDT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVN2MURzZ1JJdEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFE1NENaellzc00", "createdOn":"", "firstName":"hp  OB4150 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFE1NENaellzc00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzlDWkFWYnFsV2M", "createdOn":"", "firstName":"hp  PRESARIO 1270, 1670, and 1675 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzlDWkFWYnFsV2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibml2XzREbGh5ZUE", "createdOn":"", "firstName":"hp  PRESARIO SM 1900 SERIES XL1, XL160, XL161, XL162, XL163, and XL165 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibml2XzREbGh5ZUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjY4Z0MyU19oYzQ", "createdOn":"", "firstName":"hp  HP COMPAQ NC8000 BUSINESS NOTEBOOK SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjY4Z0MyU19oYzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibElfZDJVN2ZkZjQ", "createdOn":"", "firstName":"hp  ARMADA 7400 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibElfZDJVN2ZkZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1oyU2FEMHpzazg", "createdOn":"", "firstName":"hp  PRESARIO 1660 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1oyU2FEMHpzazg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1lHQ01hTzZaLXM", "createdOn":"", "firstName":"hp  OBXE DA DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1lHQ01hTzZaLXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianlwQTIzQTNhNkU", "createdOn":"", "firstName":"toshiba Libretto50CT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianlwQTIzQTNhNkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajFvMVBKM3RZZ2M", "createdOn":"", "firstName":"toshiba PORTEGE 4000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajFvMVBKM3RZZ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZS1KcU9WNTBRbWc", "createdOn":"", "firstName":"toshiba Portege7200ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZS1KcU9WNTBRbWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG5PVmhmUEE4SUk", "createdOn":"", "firstName":"hp  PRESARIO 1800 SERIES 1800t 1825 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG5PVmhmUEE4SUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0lRM1VPb00xQTA", "createdOn":"", "firstName":"hp  ch7removal.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0lRM1VPb00xQTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlFGbElwbUFzaDg", "createdOn":"", "firstName":"toshiba 2060CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlFGbElwbUFzaDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlA0LWJqQWJBTzA", "createdOn":"", "firstName":"hp  ARMADA 7000 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlA0LWJqQWJBTzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWpzN2otLW1ublE", "createdOn":"", "firstName":"toshiba 3020CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWpzN2otLW1ublE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3dudk13dVpEMDg", "createdOn":"", "firstName":"hp  OB4150 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3dudk13dVpEMDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0VVckZ1ZXRUX3M", "createdOn":"", "firstName":"toshiba Satellite200CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0VVckZ1ZXRUX3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkxpNmRtWV94dHM", "createdOn":"", "firstName":"hp  OB4100 mri1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkxpNmRtWV94dHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkRhU3lETXpoMG8", "createdOn":"", "firstName":"toshiba 8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkRhU3lETXpoMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUpqaWo0T2JMVnc", "createdOn":"", "firstName":"hp  OB4150 HDD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUpqaWo0T2JMVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjMxTFd2SFhGbmM", "createdOn":"", "firstName":"hp  OB7150 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjMxTFd2SFhGbmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHJteGhtVU8yRzg", "createdOn":"", "firstName":"hp  HP compaq 6910p Compal LA 3261p(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHJteGhtVU8yRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFpUSW1UeV80WEE", "createdOn":"", "firstName":"hp  OBXE4100 XE4500 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFpUSW1UeV80WEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3Rlb3Yxdm1aTnM", "createdOn":"", "firstName":"toshiba 5000ser.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3Rlb3Yxdm1aTnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjh3ZlFJN3ZSOXc", "createdOn":"", "firstName":"hp  OBXT6200 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjh3ZlFJN3ZSOXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVdPRzBFbEVfS2c", "createdOn":"", "firstName":"toshiba Satellite110CT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVdPRzBFbEVfS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlNMbmh1RHpicUk", "createdOn":"", "firstName":"toshiba 220CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlNMbmh1RHpicUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDVRMWNETnA2UzQ", "createdOn":"", "firstName":"toshiba Portege3110ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDVRMWNETnA2UzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjlleVE3Y0NJQms", "createdOn":"", "firstName":"hp  COMPAQ CONTURA SERIES PC SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjlleVE3Y0NJQms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWYtbUIwYWVwUzQ", "createdOn":"", "firstName":"toshiba Portege 7020CTnumbers.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWYtbUIwYWVwUzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWM0ZkdJb0V3UFk", "createdOn":"", "firstName":"hp  OBXE DA dpa.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWM0ZkdJb0V3UFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSF9VX2EwcWhUNGs", "createdOn":"", "firstName":"toshiba PORTEGE 7200 CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSF9VX2EwcWhUNGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnlJZ0xFYlF4NE0", "createdOn":"", "firstName":"toshiba Portege650ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnlJZ0xFYlF4NE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmtNdFQ0VUQxN1U", "createdOn":"", "firstName":"toshiba Satellite100CS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmtNdFQ0VUQxN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDRPdDFVT08xejg", "createdOn":"", "firstName":"toshiba Portege3015ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDRPdDFVT08xejg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQm4wX2RFamZpVjA", "createdOn":"", "firstName":"hp  ARMADA 4100 4200 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQm4wX2RFamZpVjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQi1CVkx3X0N2aHM", "createdOn":"", "firstName":"hp  ch5battery.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQi1CVkx3X0N2aHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEd4U0dPUHJzb28", "createdOn":"", "firstName":"hp  EVO N600C N610C N620C SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEd4U0dPUHJzb28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzJhdUZzRExHVGc", "createdOn":"", "firstName":"toshiba Satellite110CS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzJhdUZzRExHVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXpIczI0T0Z0cVU", "createdOn":"", "firstName":"hp  hp nc6000 www.lqv77.com(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXpIczI0T0Z0cVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0JYYkJOVTRVMXc", "createdOn":"", "firstName":"toshiba 1405 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0JYYkJOVTRVMXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMndDRGp6Q21wLTA", "createdOn":"", "firstName":"toshiba SATELLITE 2060 CDS AND 2100 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMndDRGp6Q21wLTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekRUSFN4ekFWWVE", "createdOn":"", "firstName":"hp  OB4100 WIN95NTV2 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekRUSFN4ekFWWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekFYX090WmU1a00", "createdOn":"", "firstName":"toshiba 520 530 550.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekFYX090WmU1a00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieU1EYmthVjlxMFE", "createdOn":"", "firstName":"toshiba 2500cds.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieU1EYmthVjlxMFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmRTSWwzRzJhX0k", "createdOn":"", "firstName":"toshiba SATELLITE PRO TE2100 UserMan.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmRTSWwzRzJhX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkZaMm1mS0g1djA", "createdOn":"", "firstName":"toshiba 780dvd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkZaMm1mS0g1djA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclkxLVpJY2FKejA", "createdOn":"", "firstName":"hp  PRESARIO 1200 SERIES 1255 1257 1260 1262 1266 1267 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclkxLVpJY2FKejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFdPT2VNVS1KMXM", "createdOn":"", "firstName":"toshiba SATELLITE 1900 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFdPT2VNVS1KMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDVtTThaVEVrQ28", "createdOn":"", "firstName":"hp  OB7100 7150 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDVtTThaVEVrQ28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2JLNVlOekR1aFk", "createdOn":"", "firstName":"hp  HP COMPAQ BUSINESS NOTEBOOK NW8000 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2JLNVlOekR1aFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1k1NXhXT2dKWDQ", "createdOn":"", "firstName":"hp  OBXT6200 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1k1NXhXT2dKWDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakdPczJsMl9FWU0", "createdOn":"", "firstName":"toshiba Satellite220CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakdPczJsMl9FWU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakc2SjlMNEROTmc", "createdOn":"", "firstName":"hp  HP520(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakc2SjlMNEROTmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUJPN1JQZFNIeXM", "createdOn":"", "firstName":"toshiba Satellite2100CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUJPN1JQZFNIeXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHFBRXhhNEN3eVU", "createdOn":"", "firstName":"hp  ARMADA 1100 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHFBRXhhNEN3eVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEdGTFhqa0NRZ1k", "createdOn":"", "firstName":"toshiba Portege300ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEdGTFhqa0NRZ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3RNVlVrY2p0VDA", "createdOn":"", "firstName":"toshiba 2520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3RNVlVrY2p0VDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3N3V2l0aU9FQ1U", "createdOn":"", "firstName":"hp  OB800 5 166 WIN95 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3N3V2l0aU9FQ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0dLSDM1UXQ2ZFE", "createdOn":"", "firstName":"hp  OB900 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0dLSDM1UXQ2ZFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVRlcGk1cy1XVVU", "createdOn":"", "firstName":"hp  OB4100 HDD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVRlcGk1cy1XVVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWlBaGduZFdFYUk", "createdOn":"", "firstName":"asus F3T REV2.0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWlBaGduZFdFYUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjRIOFozVGRqNG8", "createdOn":"", "firstName":"hp  OB7100 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjRIOFozVGRqNG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXZvYV9tdU5OWTg", "createdOn":"", "firstName":"hp  ch2product.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXZvYV9tdU5OWTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUtwWnU2bzdOejQ", "createdOn":"", "firstName":"hp  EVO 1050v N1010v SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUtwWnU2bzdOejQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUJlckxHY09Yd2M", "createdOn":"", "firstName":"toshiba SATELLITE PRO 6000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUJlckxHY09Yd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGlNTU5wVFlvZ1k", "createdOn":"", "firstName":"hp  OB4150 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGlNTU5wVFlvZ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlBJaGdiRWRFRDg", "createdOn":"", "firstName":"toshiba Satellite310CDT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlBJaGdiRWRFRDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEFzYWlDazludEk", "createdOn":"", "firstName":"hp  OB7150 HDD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEFzYWlDazludEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU19uY1c2YnVDZ2s", "createdOn":"", "firstName":"toshiba Satellite315CDT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU19uY1c2YnVDZ2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlVPT01CSzlwQzg", "createdOn":"", "firstName":"toshiba 6000FRU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlVPT01CSzlwQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEROb3NTOGc4OFU", "createdOn":"", "firstName":"toshiba SATELLITE 1100 USER GUIDE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEROb3NTOGc4OFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3NnM0tGSklCN3c", "createdOn":"", "firstName":"toshiba Satellite310CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3NnM0tGSklCN3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXY1Z0lFWEJoUmM", "createdOn":"", "firstName":"toshiba Libretto70CT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXY1Z0lFWEJoUmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVQ2djlCT0VtVVE", "createdOn":"", "firstName":"hp  ARMADA 6500 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVQ2djlCT0VtVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTJEd3pMZjVIeDg", "createdOn":"", "firstName":"toshiba 2800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTJEd3pMZjVIeDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHdUaGVobktJVWs", "createdOn":"", "firstName":"hp  OB800 5 166 DD ig.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHdUaGVobktJVWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEs0d2hoNDhCeUk", "createdOn":"", "firstName":"hp  COMPAQ PORTABLE II PERSONAL COMPUTER SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEs0d2hoNDhCeUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS25MbHFlQ0NnQTA", "createdOn":"", "firstName":"toshiba Portege620ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS25MbHFlQ0NnQTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzlDc013QVdSS28", "createdOn":"", "firstName":"hp  OBXT6050 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzlDc013QVdSS28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQy1yYndkakNXb28", "createdOn":"", "firstName":"hp  OB800 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQy1yYndkakNXb28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmhjaHRaTDA2ZVk", "createdOn":"", "firstName":"toshiba 1730 1750cdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmhjaHRaTDA2ZVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTdHRWdwU1dGWmc", "createdOn":"", "firstName":"hp  EVO D51 E PC TECH REF.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTdHRWdwU1dGWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHF6ajE0amtWSjA", "createdOn":"", "firstName":"hp  OBXE3 GD rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHF6ajE0amtWSjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGc4c25mS19zWVk", "createdOn":"", "firstName":"hp  OBXE XE2 series tips.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGc4c25mS19zWVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEs4b24wU1lUVG8", "createdOn":"", "firstName":"toshiba 3000 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEs4b24wU1lUVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2tuUzNNRVdCcWs", "createdOn":"", "firstName":"toshiba 8200ser.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2tuUzNNRVdCcWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2dLS3pvQ2xrT2c", "createdOn":"", "firstName":"hp  OB4100 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2dLS3pvQ2xrT2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2EwVGdSeDdtWEk", "createdOn":"", "firstName":"hp  OB4100 DP ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2EwVGdSeDdtWEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDcxZWhLUlEtMG8", "createdOn":"", "firstName":"toshiba SATELLITE 2610 AND 2750 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDcxZWhLUlEtMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLS1CTEg5a2t0TWc", "createdOn":"", "firstName":"toshiba PORTEGE 7010 CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLS1CTEg5a2t0TWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3pKc3RsZmtibWM", "createdOn":"", "firstName":"toshiba 565.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3pKc3RsZmtibWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWFnMDZHRmFnQ3M", "createdOn":"", "firstName":"hp  EVO N160 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWFnMDZHRmFnQ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUNVNXUwX2xkb1E", "createdOn":"", "firstName":"hp  HP 6525S 540 541 DDD DIS GDDR1 A01 20070621(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUNVNXUwX2xkb1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGRjVEgyQmRJc28", "createdOn":"", "firstName":"hp  COMPAQ PORTABLE 486C .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGRjVEgyQmRJc28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2h2UjdpOVZCbGM", "createdOn":"", "firstName":"hp  ARMADA 1500c SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2h2UjdpOVZCbGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblFoSHlkYnk3LTQ", "createdOn":"", "firstName":"hp  OB7100 7150 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblFoSHlkYnk3LTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFdVNl9QMkdPaUU", "createdOn":"", "firstName":"hp  OB800 CDROM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFdVNl9QMkdPaUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0ZQb0VTMU5MWWM", "createdOn":"", "firstName":"toshiba 2610 2750DVD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0ZQb0VTMU5MWWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0FGZ3IydUI2REE", "createdOn":"", "firstName":"dell  D520   QUANTA DM5   SHELBY INTEGRATED   SC D520 QUANTA DM5 SHELBY INTEGRATED SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0FGZ3IydUI2REE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakw5dGVFemxFUFE", "createdOn":"", "firstName":"toshiba 1730cdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakw5dGVFemxFUFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUsyVUh6cUlJRnc", "createdOn":"", "firstName":"hp  OB4150 DP ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUsyVUh6cUlJRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3o5TmpSS1V3Ylk", "createdOn":"", "firstName":"toshiba 2590CDT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3o5TmpSS1V3Ylk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia21xY25kTVZod1U", "createdOn":"", "firstName":"hp  PRESARIO 1600 SERIES 1624 1625 1635 1636 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia21xY25kTVZod1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1BIbVp4ajVWQkU", "createdOn":"", "firstName":"toshiba SATELLITE 2500 CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1BIbVp4ajVWQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0o1amlYd29RcW8", "createdOn":"", "firstName":"toshiba Satellite2060CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0o1amlYd29RcW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmRFWGYzRHI4a3M", "createdOn":"", "firstName":"hp  COMPAQ ARMADASTATION EXPANSION BASE SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmRFWGYzRHI4a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0R0MlJpSjc5eDA", "createdOn":"", "firstName":"hp  OB4100 WIN95NTV1 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0R0MlJpSjc5eDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYy1tVkJrWGw1Mkk", "createdOn":"", "firstName":"hp  hp 6510B(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYy1tVkJrWGw1Mkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTJoYkNHRERqaWs", "createdOn":"", "firstName":"dell D520 QUANTA DM5 SHELBY INTEGRATED SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTJoYkNHRERqaWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3U4a3dhLTVXQVk", "createdOn":"", "firstName":"hp  PROSIGNIA 170 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3U4a3dhLTVXQVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0draE02dE5STHM", "createdOn":"", "firstName":"hp  OB4100 ESCS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0draE02dE5STHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX09Ec2JtdldTUW8", "createdOn":"", "firstName":"hp  ARMADA M700 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX09Ec2JtdldTUW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmM4VnZSX1BfMEk", "createdOn":"", "firstName":"hp  OBXE4100 XE4500 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmM4VnZSX1BfMEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkhBWW1JdVBqdUU", "createdOn":"", "firstName":"hp  OB7150 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkhBWW1JdVBqdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkJNOERDbDFwX0U", "createdOn":"", "firstName":"toshiba Satellite330CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkJNOERDbDFwX0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGVfeG96REc2N3M", "createdOn":"", "firstName":"toshiba 2510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGVfeG96REc2N3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmhTaDA3OHdPZHc", "createdOn":"", "firstName":"toshiba 4030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmhTaDA3OHdPZHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXNoMmlpeE9yZ3M", "createdOn":"", "firstName":"hp  OBXT1500 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXNoMmlpeE9yZ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnJ5Tm5IMVFYTEk", "createdOn":"", "firstName":"toshiba SATELLITE PRO 4600 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnJ5Tm5IMVFYTEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmw1bEFfTWM4RFU", "createdOn":"", "firstName":"hp  OB7100 7150 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmw1bEFfTWM4RFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXVKRlAwWnA0UzQ", "createdOn":"", "firstName":"toshiba TECRA 780 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXVKRlAwWnA0UzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXBVVVFpVDNVdFE", "createdOn":"", "firstName":"hp  EVO N400C SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXBVVVFpVDNVdFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEdhZjdaa2pVYk0", "createdOn":"", "firstName":"toshiba 7200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEdhZjdaa2pVYk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3N2Y0JFR0V4cHM", "createdOn":"", "firstName":"toshiba SATELLITE 4030  4060  4070  4080  4090  AND 4100 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3N2Y0JFR0V4cHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2FKT1BtZ0NUMzA", "createdOn":"", "firstName":"toshiba 7010CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2FKT1BtZ0NUMzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnlWYWlwaW1aR2M", "createdOn":"", "firstName":"hp  HP520(3).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnlWYWlwaW1aR2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWRrWXNNcXNsTGs", "createdOn":"", "firstName":"hp  OBXE3 GF ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWRrWXNNcXNsTGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRU9VU3dGLWUwQzQ", "createdOn":"", "firstName":"hp  OB500 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRU9VU3dGLWUwQzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1Fnck5IMERaaTA", "createdOn":"", "firstName":"hp  Compaq 800 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1Fnck5IMERaaTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTZjN2lSWXBhY2M", "createdOn":"", "firstName":"hp  OB4100 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTZjN2lSWXBhY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWpjVFRrc0dZeDQ", "createdOn":"", "firstName":"hp  PRESARIO 1200 SERIES 1230 1232 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWpjVFRrc0dZeDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVo2cWsya2hDSkk", "createdOn":"", "firstName":"dell D500 D500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVo2cWsya2hDSkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNE5QbkdPbU9hc0U", "createdOn":"", "firstName":"hp  HP NX6120(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNE5QbkdPbU9hc0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNE1vQjR1NWFUWVU", "createdOn":"", "firstName":"hp  OB7100 WIN9598NTV1 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNE1vQjR1NWFUWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2dfMkNBZGtrNVE", "createdOn":"", "firstName":"hp  PRESARIO 1500 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2dfMkNBZGtrNVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1o3N3YwSG5kR1k", "createdOn":"", "firstName":"hp  PRESARIO 1200 SERIES 1234 1235 1236 1237 1238 1240 1242 1250 1252.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1o3N3YwSG5kR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmxxRlZtZGxuRzg", "createdOn":"", "firstName":"hp  OBXT1000 IB sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmxxRlZtZGxuRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjR2dWNOZ0M4ZEU", "createdOn":"", "firstName":"toshiba Satellite305CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjR2dWNOZ0M4ZEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMi0xNzJvYzNFdTQ", "createdOn":"", "firstName":"toshiba TECRA 8100 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMi0xNzJvYzNFdTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVJmam01TVh4aUE", "createdOn":"", "firstName":"toshiba Libretto100CT.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVJmam01TVh4aUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU9wS1RwMXZEb28", "createdOn":"", "firstName":"hp  OB3100 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU9wS1RwMXZEb28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienJlV3laZFJCM2s", "createdOn":"", "firstName":"hp  OB800 5 166 insg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienJlV3laZFJCM2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekNHU01jRUNOYXc", "createdOn":"", "firstName":"hp  OBXE4100 XE4500 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekNHU01jRUNOYXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieW9oaDd6WEtqRzA", "createdOn":"", "firstName":"hp  OBXE3 GF sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieW9oaDd6WEtqRzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEdVTWQ1QlpBd1U", "createdOn":"", "firstName":"hp  OBXE3 GF rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEdVTWQ1QlpBd1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlM3Zy1BMG1LTGc", "createdOn":"", "firstName":"hp  ARMADA 110 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlM3Zy1BMG1LTGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkZPRzJXbmEtRlk", "createdOn":"", "firstName":"hp  PROSIGNIA 190 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkZPRzJXbmEtRlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWVjS001bkpya3M", "createdOn":"", "firstName":"hp  ch3specs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWVjS001bkpya3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDZwTl9TUF9xOVk", "createdOn":"", "firstName":"toshiba 3400series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDZwTl9TUF9xOVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVdtckFOSkdxdFE", "createdOn":"", "firstName":"toshiba Satellite1555CDS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVdtckFOSkdxdFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEVqVWpYbmRWUFk", "createdOn":"", "firstName":"hp  OB800 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEVqVWpYbmRWUFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamVTM0ZSb2NXalE", "createdOn":"", "firstName":"toshiba 4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamVTM0ZSb2NXalE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamJtYnJVdWVlcmM", "createdOn":"", "firstName":"dell D500 point view D500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamJtYnJVdWVlcmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXNPWjY4Rkx0WTg", "createdOn":"", "firstName":"hp  EVO N1005 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXNPWjY4Rkx0WTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVhncV9mVTY0Mjg", "createdOn":"", "firstName":"dell Inspiron 1545 WISTRON DR1 ROBERTS REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVhncV9mVTY0Mjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmwwRkVyTnJNcEU", "createdOn":"", "firstName":"hp  OB4100 4150 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmwwRkVyTnJNcEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWlvY2NjNHpSd28", "createdOn":"", "firstName":"toshiba 2230CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWlvY2NjNHpSd28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2pJN05wVEIyMmc", "createdOn":"", "firstName":"hp  ARMADASTATION, MINISTATION E, MINISTATION EX SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2pJN05wVEIyMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnRjYzBvcWo4Vmc", "createdOn":"", "firstName":"hp  OB4100 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnRjYzBvcWo4Vmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYl9PT1QwWmNXeFE", "createdOn":"", "firstName":"hp  OB7100 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYl9PT1QwWmNXeFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVBGdVZOQTZISnM", "createdOn":"", "firstName":"hp  OBXE DA sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVBGdVZOQTZISnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTFYR0pKQnVncDg", "createdOn":"", "firstName":"toshiba 4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTFYR0pKQnVncDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0dOOW9CY1NUUDg", "createdOn":"", "firstName":"toshiba 3110CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0dOOW9CY1NUUDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlp1R0NXSm5vVTQ", "createdOn":"", "firstName":"hp  OB3100 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlp1R0NXSm5vVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWtKWFBEaVktOW8", "createdOn":"", "firstName":"hp  PRESARIO 1600 SERIES 1683 1685 1687 1688 1690 1694 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWtKWFBEaVktOW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUFzQWhZa05zQ1k", "createdOn":"", "firstName":"hp  HP OmniBook XE3 COMPAL LA 1012.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUFzQWhZa05zQ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFBXREtHcU1RdTA", "createdOn":"", "firstName":"hp  OB3100 HDD gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFBXREtHcU1RdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzNGaEcxLXo5cm8", "createdOn":"", "firstName":"hp  COMPAQ CONTURA AERO SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzNGaEcxLXo5cm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVndBVEJCT2lzTlU", "createdOn":"", "firstName":"hp  HP COMPAQ BUSINESS NOTEBOOK NX7000 X1000 ZT3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVndBVEJCT2lzTlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUJUU241bnBLZVk", "createdOn":"", "firstName":"hp  OBXT1500 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUJUU241bnBLZVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2puZThKWTRCbFE", "createdOn":"", "firstName":"toshiba 569.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2puZThKWTRCbFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzFwVFNzZS11SjQ", "createdOn":"", "firstName":"hp  OB7100 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzFwVFNzZS11SjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkR2YTVpMXY5cE0", "createdOn":"", "firstName":"hp  ch4pins.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkR2YTVpMXY5cE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0poQXc3aF8tMHM", "createdOn":"", "firstName":"toshiba 1800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0poQXc3aF8tMHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlFsSGVOTy1EUGc", "createdOn":"", "firstName":"hp  ch4pin.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlFsSGVOTy1EUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkN3T2lueFBhUzg", "createdOn":"", "firstName":"toshiba SATELLITE 3000 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkN3T2lueFBhUzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS290WWdGYVZqVXc", "createdOn":"", "firstName":"toshiba SATELLITE PRO TE2300 UserMan.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS290WWdGYVZqVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmoyN0xseE9FTkU", "createdOn":"", "firstName":"toshiba 310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmoyN0xseE9FTkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUV5YmlGMkdwQVU", "createdOn":"", "firstName":"hp  ARMADA E700 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUV5YmlGMkdwQVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTFQOHplaThEeXM", "createdOn":"", "firstName":"toshiba 2520 2540.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTFQOHplaThEeXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlRoQjhER0xrOU0", "createdOn":"", "firstName":"hp  OBXT6200 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlRoQjhER0xrOU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWVxTWdVVGNEMGs", "createdOn":"", "firstName":"hp  PROSIGNIA NOTEBOOKS SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWVxTWdVVGNEMGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2x0amZBZVEtUTA", "createdOn":"", "firstName":"toshiba Portege320ct.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2x0amZBZVEtUTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2ZudzZWdUF1dkU", "createdOn":"", "firstName":"hp  EVO D510 E PC REMOVE REPLACE PARTS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2ZudzZWdUF1dkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmlZeHNodG9nWjg", "createdOn":"", "firstName":"toshiba SATELLITE 4200 AND 4300 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmlZeHNodG9nWjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUhZSlQ5b19xNjg", "createdOn":"", "firstName":"hp  PRESARIO 1200 SERIES 1246 1277 1278 1279 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUhZSlQ5b19xNjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFNZMVJPekZuNU0", "createdOn":"", "firstName":"hp  EVO N1000 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFNZMVJPekZuNU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEJqUjlwQ1p5WE0", "createdOn":"", "firstName":"hp  ARMADA 7400 SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEJqUjlwQ1p5WE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDBWeTJfamp4a2s", "createdOn":"", "firstName":"toshiba 4030 4060 4070 4080 4090 4100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDBWeTJfamp4a2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmdua2U2cGRnTWc", "createdOn":"", "firstName":"hp  hp compaq 6515b(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmdua2U2cGRnTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTJPWU03QS1xeEE", "createdOn":"", "firstName":"hp  PRESARIO 1100 2100 2500 SERIES SM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTJPWU03QS1xeEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejBMNnBwbjluTGM", "createdOn":"", "firstName":"dell  Inspiron 1501   QUANTA KIRIN   FX2 with NS   REV 1A  Inspiron 1501   QUANTA KIRIN   FX2 with NS   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejBMNnBwbjluTGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnZOM2dPZ3hvcFU", "createdOn":"", "firstName":"hp  OB7100 DP ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnZOM2dPZ3hvcFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEZXUm56RFI3ajA", "createdOn":"", "firstName":"hp  OB3000 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEZXUm56RFI3ajA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFhFYXI3OHp1NnM", "createdOn":"", "firstName":"asus A7Sv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFhFYXI3OHp1NnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFFRZHExYk5rZlE", "createdOn":"", "firstName":"toshiba satellite satellite pro 2060CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFFRZHExYk5rZlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0pKWjRpc0Q5RTA", "createdOn":"", "firstName":"hp  OB2000 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0pKWjRpc0Q5RTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFoteVFfcDR0dzQ", "createdOn":"", "firstName":"hp  OB2000 Acc ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFoteVFfcDR0dzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHlHZ0x0NmRkR3M", "createdOn":"", "firstName":"dell  INSPIRON 1427 Compal LA 4841P  INSPIRON 1427 Compal LA 4841P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHlHZ0x0NmRkR3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlUxdFMwOWs0Mms", "createdOn":"", "firstName":"toshiba satellite satellite pro 2590CDT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlUxdFMwOWs0Mms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjhkZkZwUVVuaWM", "createdOn":"", "firstName":"asus S6Fm Chapter 02 v1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjhkZkZwUVVuaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2QxRF9KTFhGVnM", "createdOn":"", "firstName":"dell STUDIO 1555 QUANTA FM8 DISCRETE REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2QxRF9KTFhGVnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0FLR2ctUVhMWkk", "createdOn":"", "firstName":"hp  OB5700 Acc ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0FLR2ctUVhMWkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWhyaVVxcjY1bFk", "createdOn":"", "firstName":"dell  1427  1427.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWhyaVVxcjY1bFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVZUYkxHLTE1X1k", "createdOn":"", "firstName":"asus UX30 PWR LED BD R120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVZUYkxHLTE1X1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUoxdGpmV3p4UDQ", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUoxdGpmV3p4UDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzlHa2JXemVDNnc", "createdOn":"", "firstName":"asus UX30 TOUCH PAD BD R200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzlHa2JXemVDNnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWVjSnZPN2E1QmM", "createdOn":"", "firstName":"toshiba PS10A 6050A2174501 MB A03 20080124 bottom value.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWVjSnZPN2E1QmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidU1VSXpoS1pCMmM", "createdOn":"", "firstName":"dell 3538U0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidU1VSXpoS1pCMmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDFPX3djOUZVb2c", "createdOn":"", "firstName":"dell 3959U.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDFPX3djOUZVb2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0c5aGJ2S29DRUk", "createdOn":"", "firstName":"dell  Studio 1735  Studio 1735 upload.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0c5aGJ2S29DRUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGkzOU5ieENtTFk", "createdOn":"", "firstName":"hp  OB300 425 430 530 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGkzOU5ieENtTFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamFJUHB3M01nRlE", "createdOn":"", "firstName":"hp  OB7100 ESCS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamFJUHB3M01nRlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVdTWVdjRnB0Vk0", "createdOn":"", "firstName":"hp  OB3000 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVdTWVdjRnB0Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTAxMVgybWxaa0k", "createdOn":"", "firstName":"dell 6945T.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTAxMVgybWxaa0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDljVjdTVUc4S0k", "createdOn":"", "firstName":"dell V710 740.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDljVjdTVUc4S0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGpQd1hjMGlleUE", "createdOn":"", "firstName":"hp  1800XL280 390.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGpQd1hjMGlleUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1BrbkctQklwMW8", "createdOn":"", "firstName":"hp  OBXT1500 tsrg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1BrbkctQklwMW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ05TV25za2w4Y28", "createdOn":"", "firstName":"hp  OB3000 Acc ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ05TV25za2w4Y28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3RYZXBfZ2UxR3c", "createdOn":"", "firstName":"toshiba Sacramento Phoenix 10A Build 0123.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3RYZXBfZ2UxR3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX21OX09mWGtHaWM", "createdOn":"", "firstName":"hp  Modem Command Guidelines.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX21OX09mWGtHaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWc3anI3TzEzckU", "createdOn":"", "firstName":"toshiba satellite satellite pro 1730cdt.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWc3anI3TzEzckU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWtYWFd4R0ZBMEk", "createdOn":"", "firstName":"asus UX30 IO BD R120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWtYWFd4R0ZBMEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVF8xN096dTBpU0U", "createdOn":"", "firstName":"asus Z96S R2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVF8xN096dTBpU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEdiVUFaeFczUE0", "createdOn":"", "firstName":"hp  OB3000 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEdiVUFaeFczUE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmlvMnNfMDByc0U", "createdOn":"", "firstName":"hp  Compaq Presario 1500 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmlvMnNfMDByc0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzhhcHRxblRLb0k", "createdOn":"", "firstName":"hp  OBXE2 sg1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzhhcHRxblRLb0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSS1MeVJqaUpMWWM", "createdOn":"", "firstName":"hp  Prosignia Notebook Family.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSS1MeVJqaUpMWWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWxOOGpmcVZ5c1k", "createdOn":"", "firstName":"hp  OB3000 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWxOOGpmcVZ5c1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRW1TZ1RXNlkyc1k", "createdOn":"", "firstName":"dell  Inspiron 1440   WISTRON ALBA UMA   REV  1 06ABR2009Sec  Inspiron 1440   WISTRON ALBA UMA   REV  1 06ABR2009Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRW1TZ1RXNlkyc1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVRCVGttVHNEUkU", "createdOn":"", "firstName":"hp  OB6000 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVRCVGttVHNEUkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFN5WFFIZ09HZTQ", "createdOn":"", "firstName":"hp  OB4000 fg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFN5WFFIZ09HZTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3RnZHNDUkdQWTQ", "createdOn":"", "firstName":"toshiba M200 MA10 miami MA10G CS3 20070510 Gerber.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3RnZHNDUkdQWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1dMWGNpVUZmMmM", "createdOn":"", "firstName":"dell C800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1dMWGNpVUZmMmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0ZScmhsc3I5MUE", "createdOn":"", "firstName":"hp  OB7100 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0ZScmhsc3I5MUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQllkNWI1UnNyaEk", "createdOn":"", "firstName":"toshiba satellite satellite pro 2800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQllkNWI1UnNyaEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkZJdkZ3QWpfRUE", "createdOn":"", "firstName":"hp  OB3000 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkZJdkZ3QWpfRUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUZrN2NTbjY0dGs", "createdOn":"", "firstName":"dell  Inpiron 1318  Inpiron 1318.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUZrN2NTbjY0dGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2FMaUNWYkNjc1U", "createdOn":"", "firstName":"hp  OB2100 mri2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2FMaUNWYkNjc1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmwzVHNTYzA4bGs", "createdOn":"", "firstName":"asus UX30 MB R200 SKU1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmwzVHNTYzA4bGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXJiSkZHalVmZzA", "createdOn":"", "firstName":"hp  OB5700 insg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXJiSkZHalVmZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHd4X0lLT1ZIX0k", "createdOn":"", "firstName":"hp  OBSJ DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHd4X0lLT1ZIX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWNlMWlKcUlObEk", "createdOn":"", "firstName":"hp  OBSJ Acc in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWNlMWlKcUlObEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTl4T1VETmV5M0U", "createdOn":"", "firstName":"hp  OB2100 HDD gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTl4T1VETmV5M0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUpFMHdnYU1DT1k", "createdOn":"", "firstName":"hp  Compaq Presario 1200 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUpFMHdnYU1DT1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDk0eWhMTXliVnM", "createdOn":"", "firstName":"dell 64PTN EN 2.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDk0eWhMTXliVnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUJCNmtjOERtUUE", "createdOn":"", "firstName":"hp  OBDockingSystem ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUJCNmtjOERtUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFg1TVJNVlVqMVE", "createdOn":"", "firstName":"hp  Presario1600.series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFg1TVJNVlVqMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFFYMGFmdmtxODQ", "createdOn":"", "firstName":"toshiba tecra 750dvd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFFYMGFmdmtxODQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUVTT3ZPTmFpYjQ", "createdOn":"", "firstName":"hp  Presario1600.series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUVTT3ZPTmFpYjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFI5b2tDMERrck0", "createdOn":"", "firstName":"hp  OBXE3 GD mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFI5b2tDMERrck0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRm1ZN0plY3ZrQWs", "createdOn":"", "firstName":"hp  OBSJ tg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRm1ZN0plY3ZrQWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDc2OGlQeHJkVWM", "createdOn":"", "firstName":"hp  OB5500 Acc ug1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDc2OGlQeHJkVWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN044YWZCZnVqMXc", "createdOn":"", "firstName":"dell d630.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN044YWZCZnVqMXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielhNRGRJU2k5OG8", "createdOn":"", "firstName":"hp  OB2100 3100 HD2 gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielhNRGRJU2k5OG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFJ1OHZ4c2IyeHM", "createdOn":"", "firstName":"hp  OB2000 5700 insg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFJ1OHZ4c2IyeHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3E4RFhpUDhwQ00", "createdOn":"", "firstName":"asus S6Fm Chapter 03 v1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3E4RFhpUDhwQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkI5TE4yeFhfcTQ", "createdOn":"", "firstName":"hp  OB5500 fg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkI5TE4yeFhfcTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWtvcjBNYTY0bzg", "createdOn":"", "firstName":"hp  Maintenence Manual.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWtvcjBNYTY0bzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFNfVnZpTE04bkk", "createdOn":"", "firstName":"dell C810.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFNfVnZpTE04bkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1piVmJwWXpOenc", "createdOn":"", "firstName":"dell C540 640 2.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1piVmJwWXpOenc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYm1IRC1pc2ZOOW8", "createdOn":"", "firstName":"hp  OB900 ESCS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYm1IRC1pc2ZOOW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzRxY3RRUnBjWm8", "createdOn":"", "firstName":"hp  OB3000 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzRxY3RRUnBjWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2pZZkVreTl2Yjg", "createdOn":"", "firstName":"dell  Inspiron 5150 LA 1682 Inspiron 5150 LA 1682.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2pZZkVreTl2Yjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2JnOHdvU1ZZZDg", "createdOn":"", "firstName":"toshiba satellite satellite pro 220CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2JnOHdvU1ZZZDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGc3bUZZRXVmYnM", "createdOn":"", "firstName":"hp  OB2100 3100 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGc3bUZZRXVmYnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTBCLVNWcWhqakU", "createdOn":"", "firstName":"hp  Compaq Prosignia 170.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTBCLVNWcWhqakU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEhGRWhVTlZzWTg", "createdOn":"", "firstName":"dell 8000.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEhGRWhVTlZzWTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTERNQW1NZVVYMTg", "createdOn":"", "firstName":"toshiba portege P2000fru.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTERNQW1NZVVYMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSlJVWFc0amdXTWc", "createdOn":"", "firstName":"dell START.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSlJVWFc0amdXTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFVYMFpCU3ZHcEU", "createdOn":"", "firstName":"dell 2100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFVYMFpCU3ZHcEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2MtLVBZUDFwUmc", "createdOn":"", "firstName":"hp  OB5700 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2MtLVBZUDFwUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUV5R2dlTlUwTzA", "createdOn":"", "firstName":"hp  OB5000 gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUV5R2dlTlUwTzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFlXd0p0NDU1M3c", "createdOn":"", "firstName":"hp  OB2100 WIN95NTV2 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFlXd0p0NDU1M3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2hta0l0Nm9EWVU", "createdOn":"", "firstName":"hp  Compaq Tablet PC TC1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2hta0l0Nm9EWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1NKLWRvSDJKOE0", "createdOn":"", "firstName":"hp  OBXE2 DC mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1NKLWRvSDJKOE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejlzMVVDSHNFbXc", "createdOn":"", "firstName":"toshiba portege 7200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejlzMVVDSHNFbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFhwR0lJZWJmTzg", "createdOn":"", "firstName":"hp  OB5000 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFhwR0lJZWJmTzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1dPRGE5bF9lbG8", "createdOn":"", "firstName":"asus UX30 DCIN R200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1dPRGE5bF9lbG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0NjMmc1dkl2Vk0", "createdOn":"", "firstName":"hp  OB5500 WIN95 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0NjMmc1dkl2Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUNIRExKczh1SE0", "createdOn":"", "firstName":"hp  OBXE2 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUNIRExKczh1SE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHkxVVRLakNTZWM", "createdOn":"", "firstName":"toshiba Toshiba Memory Install Guide Libretta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHkxVVRLakNTZWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGZVZ0NqZU8wM1U", "createdOn":"", "firstName":"hp  OB6000 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGZVZ0NqZU8wM1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiai1fcHJXYUc4QUU", "createdOn":"", "firstName":"dell 1530 dh3 07212 sa 0508.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiai1fcHJXYUc4QUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUwyTkhFWGJpSzQ", "createdOn":"", "firstName":"hp  OBXE3 GC mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUwyTkhFWGJpSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUR3WG9WdlU2Rkk", "createdOn":"", "firstName":"hp  OB7100 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUR3WG9WdlU2Rkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkZtR01fejhWNFU", "createdOn":"", "firstName":"hp  OB900 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkZtR01fejhWNFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDhDejBBNEE5VWM", "createdOn":"", "firstName":"asus S6Fm Chapter 05 v1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDhDejBBNEE5VWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnRQajYzYjRvems", "createdOn":"", "firstName":"hp  OB2100 3000 3100 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnRQajYzYjRvems/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0NtNWdQLUJleVU", "createdOn":"", "firstName":"toshiba satellite satellite pro 4600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0NtNWdQLUJleVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzZVZlVrOV9Hdk0", "createdOn":"", "firstName":"hp  OBXE2 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzZVZlVrOV9Hdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0FoajVTbmVNeVk", "createdOn":"", "firstName":"asus K40 T.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0FoajVTbmVNeVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjRhTVUzM3NlWlE", "createdOn":"", "firstName":"dell V700 SME.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjRhTVUzM3NlWlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXpITnRMNnpjN2s", "createdOn":"", "firstName":"dell 4100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXpITnRMNnpjN2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWpCWU1KeXktbzg", "createdOn":"", "firstName":"hp  OB900 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWpCWU1KeXktbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmt5NHZ3bXAwdEk", "createdOn":"", "firstName":"dell 5169T EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmt5NHZ3bXAwdEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWtXTHJhc3Npblk", "createdOn":"", "firstName":"hp  OB2100 3100 HD1 gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWtXTHJhc3Npblk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1RkMll3OEgwOW8", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1RkMll3OEgwOW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmpCRWdRWXhKTnc", "createdOn":"", "firstName":"dell Inspiron 1545 WISTRON DR1 ROBERTS NEW CARD BOARD REV SB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmpCRWdRWXhKTnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmkza0MwbjB3N2c", "createdOn":"", "firstName":"dell d630集成.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmkza0MwbjB3N2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDl3ZGxDUUstR0E", "createdOn":"", "firstName":"hp  OB csni.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDl3ZGxDUUstR0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWpfb0phdzdaWWs", "createdOn":"", "firstName":"hp  OB2100 3100 ESCS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWpfb0phdzdaWWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFZZby14dzJfMzQ", "createdOn":"", "firstName":"hp  OB510 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFZZby14dzJfMzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLThYd1FVSWhqWVk", "createdOn":"", "firstName":"dell d630 独立.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLThYd1FVSWhqWVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieko0TFgzVTNLRm8", "createdOn":"", "firstName":"toshiba satellite satellite pro 4030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieko0TFgzVTNLRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUFGMUIwWEpReFk", "createdOn":"", "firstName":"dell C840.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUFGMUIwWEpReFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzZFN09GdUtDTTg", "createdOn":"", "firstName":"hp  1900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzZFN09GdUtDTTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjdGQmktYkJkX1k", "createdOn":"", "firstName":"dell C540 640.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjdGQmktYkJkX1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFZwSzVWTXJ5Y1E", "createdOn":"", "firstName":"hp  OB2000 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFZwSzVWTXJ5Y1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0NWaFJiWThSU1E", "createdOn":"", "firstName":"toshiba satellite satellite pro 2520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0NWaFJiWThSU1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialdybXVVRXF0bkU", "createdOn":"", "firstName":"toshiba PT10G CS 20080225 gerber.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialdybXVVRXF0bkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaG5ETXgyc3RTYW8", "createdOn":"", "firstName":"dell XPS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaG5ETXgyc3RTYW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWVyUDVJWkNSVjQ", "createdOn":"", "firstName":"dell X200.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWVyUDVJWkNSVjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZU8weGxRRkZQelE", "createdOn":"", "firstName":"hp  OBXE2 DC sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZU8weGxRRkZQelE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXg1SWhtZklmLVk", "createdOn":"", "firstName":"hp  OBXE2 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXg1SWhtZklmLVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU1abjJGVUxZbUU", "createdOn":"", "firstName":"hp  OB5500 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU1abjJGVUxZbUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmVWbHhad1hHZG8", "createdOn":"", "firstName":"dell D600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmVWbHhad1hHZG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUNVX1g3S3ZZcEU", "createdOn":"", "firstName":"dell XPS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUNVX1g3S3ZZcEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFhxXy1lUEttWDg", "createdOn":"", "firstName":"toshiba satellite satellite pro 3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFhxXy1lUEttWDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFZOY0ZlemhKRkE", "createdOn":"", "firstName":"dell UPDATE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFZOY0ZlemhKRkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTE9RY2dCcDNSUlU", "createdOn":"", "firstName":"hp  OB5000 fg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTE9RY2dCcDNSUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2Zzckx6S25CQlk", "createdOn":"", "firstName":"dell P RGD.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2Zzckx6S25CQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkstUGZRZUs1V00", "createdOn":"", "firstName":"dell SOLGDE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkstUGZRZUs1V00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVJLaTlNUGE5eFE", "createdOn":"", "firstName":"toshiba satellite satellite pro 2510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVJLaTlNUGE5eFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHhzQ3JSNnM5T2s", "createdOn":"", "firstName":"hp  Compaq Presario 1230 1250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHhzQ3JSNnM5T2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRjlvOUNHckJUTWs", "createdOn":"", "firstName":"hp  CL57, L405X, N45SL, N51XX SERIES.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRjlvOUNHckJUTWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWZyQXZpV0hRbTQ", "createdOn":"", "firstName":"toshiba satellite satellite pro 6000FRU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWZyQXZpV0hRbTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREUxZC1XWloxbGs", "createdOn":"", "firstName":"hp  OB5000 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREUxZC1XWloxbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2ZwNU9DRTdTdjg", "createdOn":"", "firstName":"hp  OBSJ HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2ZwNU9DRTdTdjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODJ5Vmw4bDl2U28", "createdOn":"", "firstName":"dell  D600  D600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODJ5Vmw4bDl2U28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXdscEJha2tqbFE", "createdOn":"", "firstName":"hp  OBXE2 dpa.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXdscEJha2tqbFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWpZWlZFNm5pZTA", "createdOn":"", "firstName":"toshiba portege 7020CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWpZWlZFNm5pZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem5CbXVnTWxDX1E", "createdOn":"", "firstName":"dell C400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem5CbXVnTWxDX1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieDFfWGRqT1JhRGM", "createdOn":"", "firstName":"dell 6233DBK0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieDFfWGRqT1JhRGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic184a0xmZURSMzg", "createdOn":"", "firstName":"hp  OB500 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic184a0xmZURSMzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzgxRFU3bVJ6SFE", "createdOn":"", "firstName":"toshiba satellite satellite pro 1800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzgxRFU3bVJ6SFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibS1fRzdFSVZrN2c", "createdOn":"", "firstName":"hp  OBDockingProducts ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibS1fRzdFSVZrN2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3l3eXZWS3ROeUk", "createdOn":"", "firstName":"hp  OBXE3 GC sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3l3eXZWS3ROeUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2hyNTRsT2E2aG8", "createdOn":"", "firstName":"hp  OB2100 3100 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2hyNTRsT2E2aG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzJJWjRlVUtTTVU", "createdOn":"", "firstName":"hp  Compaq Presario 1200XL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzJJWjRlVUtTTVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFVOWV9ONUgydmc", "createdOn":"", "firstName":"hp  OB7100 mri2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFVOWV9ONUgydmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0N0SF9wamlMSkU", "createdOn":"", "firstName":"dell  Inspiron 1525   WISTRON SPEARS   AMD UMA DS2   REV 1  Inspiron 1525   WISTRON SPEARS   AMD UMA DS2   REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0N0SF9wamlMSkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3dhSm5Cd1owSzA", "createdOn":"", "firstName":"dell  m1330 Thurman Discrete VGA nVidia G86  m1330 Thurman Discrete VGA nVidia G86.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3dhSm5Cd1owSzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUFzNzlLSzBheEk", "createdOn":"", "firstName":"dell 70KHU.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUFzNzlLSzBheEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGRwT1BtalJQMEU", "createdOn":"", "firstName":"hp  Compaq Troubleshooter Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGRwT1BtalJQMEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkF3TlJlVU1SSU0", "createdOn":"", "firstName":"dell 2526T.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkF3TlJlVU1SSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1lXNDdDTlMxR2s", "createdOn":"", "firstName":"dell 0708R EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1lXNDdDTlMxR2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2pBZFdNU0duZjQ", "createdOn":"", "firstName":"hp  OB5700 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2pBZFdNU0duZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0tUZXVva0VDa1k", "createdOn":"", "firstName":"hp  OB2100 mri1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0tUZXVva0VDa1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzRBR0FYTS0tZFk", "createdOn":"", "firstName":"toshiba portege 3020CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzRBR0FYTS0tZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlk0YjN5aURpRGs", "createdOn":"", "firstName":"dell D505.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlk0YjN5aURpRGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjJLMFB1VTJqRUE", "createdOn":"", "firstName":"toshiba satellite satellite pro S1900fru.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjJLMFB1VTJqRUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjY5cE03ZWZ1MWs", "createdOn":"", "firstName":"toshiba M200 MA10 miami 10M 20070125 WS gerber out.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjY5cE03ZWZ1MWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTFnS0s4WVRrVGc", "createdOn":"", "firstName":"asus S6Fm Chapter 06 v1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTFnS0s4WVRrVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidERoWlh3RmpNbDA", "createdOn":"", "firstName":"hp  OB6000 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidERoWlh3RmpNbDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3JZSl9WMkZvVXM", "createdOn":"", "firstName":"dell 30269.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3JZSl9WMkZvVXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm1CSmpDRi1SakE", "createdOn":"", "firstName":"dell  Vostro  1088 VM8G F3B 0608 1400 RAY  Vostro  1088 VM8G F3B 0608 1400 RAY.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm1CSmpDRi1SakE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHgzRHNGbkxyd0k", "createdOn":"", "firstName":"dell Inspiron 2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHgzRHNGbkxyd0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG9MV1VPVm5DbXc", "createdOn":"", "firstName":"dell C510 610.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG9MV1VPVm5DbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEZEOE10ZkxkZDQ", "createdOn":"", "firstName":"hp  OB510 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEZEOE10ZkxkZDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0M0dXJUT2h4U3c", "createdOn":"", "firstName":"toshiba portege 7010CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0M0dXJUT2h4U3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWllsZkM3R3Vrc2c", "createdOn":"", "firstName":"dell  PDF.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWllsZkM3R3Vrc2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVExUOEpaLXpwRHM", "createdOn":"", "firstName":"hp  OB5500 DS ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVExUOEpaLXpwRHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEtGNVF1NDRobk0", "createdOn":"", "firstName":"hp  OBXE2 rmf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEtGNVF1NDRobk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUy1xRkh1T09VSDQ", "createdOn":"", "firstName":"hp  OBXE4100 XE4500 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUy1xRkh1T09VSDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFFKSFRXcTd5SlU", "createdOn":"", "firstName":"asus K40 B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFFKSFRXcTd5SlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDk5cGlNNDFodVk", "createdOn":"", "firstName":"hp  OB2000 5700 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDk5cGlNNDFodVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0taS2w2ajVIZjQ", "createdOn":"", "firstName":"hp  OB3000 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0taS2w2ajVIZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2NjTDUzdDBnY2s", "createdOn":"", "firstName":"dell 3800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2NjTDUzdDBnY2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOU9YWlpobTF2b1E", "createdOn":"", "firstName":"toshiba satellite satellite pro 1710.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOU9YWlpobTF2b1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnNzVUtIVDdxMjg", "createdOn":"", "firstName":"hp  OB6100 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnNzVUtIVDdxMjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVFRUk5UYzcxeFE", "createdOn":"", "firstName":"hp  OB500 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVFRUk5UYzcxeFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmlETjZSend3cXc", "createdOn":"", "firstName":"hp  OB6100 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmlETjZSend3cXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUNTT2pGOGRZVFk", "createdOn":"", "firstName":"dell STUDIO 1555 QUANTA FM8 DC JACK USB BOARD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUNTT2pGOGRZVFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieU1uY2p0WVZQeW8", "createdOn":"", "firstName":"hp  OB5000 5500 DS fg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieU1uY2p0WVZQeW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidm12dDhjbWU2UWM", "createdOn":"", "firstName":"hp  OB900 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidm12dDhjbWU2UWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXd5ajVUWDdzMHM", "createdOn":"", "firstName":"hp  OB3000 PR ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXd5ajVUWDdzMHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGtEUVlPVGlBMUE", "createdOn":"", "firstName":"hp  OB6100 ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGtEUVlPVGlBMUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczVaUEpaSFFTLVU", "createdOn":"", "firstName":"dell 4150.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczVaUEpaSFFTLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTM2UmsxUGptcVE", "createdOn":"", "firstName":"hp  OB4100 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTM2UmsxUGptcVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVByemRIX210bDg", "createdOn":"", "firstName":"toshiba PS10A 6050A2174501 MB A03 20080124 top ref.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVByemRIX210bDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWxJYl9vSEVEZWM", "createdOn":"", "firstName":"hp  OB600 fg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWxJYl9vSEVEZWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVBkelVBNm5vQkU", "createdOn":"", "firstName":"hp  OB7100 mri1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVBkelVBNm5vQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXZWYU5xd0haNWM", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXZWYU5xd0haNWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0NxWFNfa2QxOXc", "createdOn":"", "firstName":"hp  OB2100 DT ug1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0NxWFNfa2QxOXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXdWalM0U1NTYjA", "createdOn":"", "firstName":"hp  OB5500 gs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXdWalM0U1NTYjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFpyeVlsOFpzV1E", "createdOn":"", "firstName":"dell  Inspiron 1420 ELSA LANAI UMA Laptop Schematics  Inspiron 1420 ELSA LANAI UMA Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFpyeVlsOFpzV1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3cxSlp3M1MyM00", "createdOn":"", "firstName":"hp  OB7100 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3cxSlp3M1MyM00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDl0eUZ5Y1llVDA", "createdOn":"", "firstName":"dell  c600  c600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDl0eUZ5Y1llVDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3ltdENNV1NpSzQ", "createdOn":"", "firstName":"dell  Inpiron 1150 COMPAL LA 1684  Inpiron 1150 COMPAL LA 1684.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3ltdENNV1NpSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmlxd0Yya3REVTA", "createdOn":"", "firstName":"dell D400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmlxd0Yya3REVTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjlBV2o0c0ljSjQ", "createdOn":"", "firstName":"hp  OB2000 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjlBV2o0c0ljSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjVXYnZydVJTbDQ", "createdOn":"", "firstName":"dell 8500 8600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjVXYnZydVJTbDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXVGUWlnWlFmUUU", "createdOn":"", "firstName":"hp  Compaq Presario 1230 1232.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXVGUWlnWlFmUUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnQ5YldGTW9kQTg", "createdOn":"", "firstName":"hp  OB4100 4150 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnQ5YldGTW9kQTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjdjNVNVX2ozcWc", "createdOn":"", "firstName":"toshiba satellite satellite pro 2230CDS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjdjNVNVX2ozcWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVV0MTJjdnczT3c", "createdOn":"", "firstName":"toshiba satellite satellite pro 310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVV0MTJjdnczT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWpKdkV2TXFIaWc", "createdOn":"", "firstName":"toshiba tecra 520 530 550.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWpKdkV2TXFIaWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnFXWjdhNFpCeEk", "createdOn":"", "firstName":"dell  Inspiron 1525  Inspiron 1525.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnFXWjdhNFpCeEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXhKdjNnMXhMSkk", "createdOn":"", "firstName":"dell STUDIO 1555 QUANTA FM8B UMA REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXhKdjNnMXhMSkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUpkSjR4ckNad1E", "createdOn":"", "firstName":"toshiba tecra 780dvd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUpkSjR4ckNad1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNU9qV295N2hXbVU", "createdOn":"", "firstName":"toshiba satellite satellite pro 2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNU9qV295N2hXbVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTd6cEJrZ0JQT3c", "createdOn":"", "firstName":"hp  OBXE2 PR ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTd6cEJrZ0JQT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM29KYXZfSkk2UGM", "createdOn":"", "firstName":"hp  OBXE2 DI mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM29KYXZfSkk2UGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVhpOURzdmdfdHM", "createdOn":"", "firstName":"hp  Compaq Presario 1200xl Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVhpOURzdmdfdHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHZybDhfWV93UG8", "createdOn":"", "firstName":"hp  Quick Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHZybDhfWV93UG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicm02U2VRWXl3d0k", "createdOn":"", "firstName":"dell D800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicm02U2VRWXl3d0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicld6Sy11TUNwMGc", "createdOn":"", "firstName":"toshiba tecra 8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicld6Sy11TUNwMGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblJmVDVVRlhhUjA", "createdOn":"", "firstName":"hp  Compaq Prosignia 190.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblJmVDVVRlhhUjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibThndDVOOG8yWk0", "createdOn":"", "firstName":"hp  M300 stripdown.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibThndDVOOG8yWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamlCWk4xaElYekU", "createdOn":"", "firstName":"asus S6Fm Chapter 04 v1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamlCWk4xaElYekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaE5mMFRJaGl5Z2M", "createdOn":"", "firstName":"hp  THINKPAD A30  A30P  A31  A31P  THINKPAD DOCK.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaE5mMFRJaGl5Z2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkVsSzZvYVJpa00", "createdOn":"", "firstName":"hp  OBXE2 ON ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkVsSzZvYVJpa00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZk1QMDlRN01tc1E", "createdOn":"", "firstName":"toshiba tecra 8200ser.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZk1QMDlRN01tc1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTNacDFWM1Y2U2M", "createdOn":"", "firstName":"dell 98085.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTNacDFWM1Y2U2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3JvZWE5OENtNDQ", "createdOn":"", "firstName":"hp  OB2100 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3JvZWE5OENtNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0lRQUpDZjJIZms", "createdOn":"", "firstName":"hp  OB2100 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0lRQUpDZjJIZms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWG1BUlVKeWdWcTg", "createdOn":"", "firstName":"dell D500.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWG1BUlVKeWdWcTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjctMDRWeWFaaEk", "createdOn":"", "firstName":"dell 1530 dh3 sb pwr on sequence 0730.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjctMDRWeWFaaEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlh4cThKc0FFS1k", "createdOn":"", "firstName":"toshiba satellite satellite pro 5000ser.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlh4cThKc0FFS1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1BNNTFHY2EzekE", "createdOn":"", "firstName":"toshiba Toshiba Memory Install Guide Portege.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1BNNTFHY2EzekE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUVQbnN0TlMwLWc", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUVQbnN0TlMwLWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEZMc28zSWxfVVE", "createdOn":"", "firstName":"hp  1900xl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEZMc28zSWxfVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjd0US1wT3BBa28", "createdOn":"", "firstName":"hp  Compaq Prosignia 150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjd0US1wT3BBa28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzNoTDVwcWdXX0E", "createdOn":"", "firstName":"toshiba M200 MA10 miami MA10G PreMP 20070518.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzNoTDVwcWdXX0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnkwYlM5NVN4a00", "createdOn":"", "firstName":"toshiba satellite satellite pro 2750DVD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnkwYlM5NVN4a00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREYwWWVIVjJvWUE", "createdOn":"", "firstName":"hp  OBXE3 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREYwWWVIVjJvWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREJ0Ui1pV2NJWkk", "createdOn":"", "firstName":"hp  OBXE3 GC rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREJ0Ui1pV2NJWkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjY5MVRhR3ZpbUk", "createdOn":"", "firstName":"hp  OB510 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjY5MVRhR3ZpbUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXB5MXM1ZkdWazA", "createdOn":"", "firstName":"asus UX30 IO BD R200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXB5MXM1ZkdWazA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXIzcTdGdUIxR2M", "createdOn":"", "firstName":"hp  OB800 sm1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXIzcTdGdUIxR2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekJxVkNuVGdoSHM", "createdOn":"", "firstName":"asus UX30 MB R140.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekJxVkNuVGdoSHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejJ6TFlyN3QxS0E", "createdOn":"", "firstName":"toshiba M200 MA10 miami MA10 MP A04 960327.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejJ6TFlyN3QxS0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieS0yZ1E3N1lpOFE", "createdOn":"", "firstName":"toshiba portege 4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieS0yZ1E3N1lpOFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTJQUnRCbkdfRlE", "createdOn":"", "firstName":"hp  Compaq Presario 1100 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTJQUnRCbkdfRlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2R2Tmo1NjJvUHc", "createdOn":"", "firstName":"toshiba tecra fru8100 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2R2Tmo1NjJvUHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0ZrMDlEX0xXMWs", "createdOn":"", "firstName":"dell C500 600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0ZrMDlEX0xXMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlBMRGVSdW9jM0k", "createdOn":"", "firstName":"hp  OB900 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlBMRGVSdW9jM0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWx3eXZleDdUM0E", "createdOn":"", "firstName":"hp  OBSJ HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWx3eXZleDdUM0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVYzVEhvc0sxMGs", "createdOn":"", "firstName":"hp  OBXE2 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVYzVEhvc0sxMGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3RLMEsxMXZsdkk", "createdOn":"", "firstName":"hp  OB2100 3100 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3RLMEsxMXZsdkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX01yYnlLb3QwTmc", "createdOn":"", "firstName":"hp  OB900 PIM ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX01yYnlLb3QwTmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGJtWTVkZWFaVjg", "createdOn":"", "firstName":"hp  OBDiagTools ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGJtWTVkZWFaVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFg4RExlYzBMcm8", "createdOn":"", "firstName":"hp  OB5700 WIN95 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFg4RExlYzBMcm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDh1TkJ0emJxMGM", "createdOn":"", "firstName":"hp  TROUBLESHOOTING.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDh1TkJ0emJxMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0UxbkdOc1lmdVE", "createdOn":"", "firstName":"hp  OB900 HD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0UxbkdOc1lmdVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2Q5SmJhUkZHT3c", "createdOn":"", "firstName":"toshiba satellite satellite pro 4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2Q5SmJhUkZHT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTktZHlLcFhFZkk", "createdOn":"", "firstName":"hp  OB2100 MEM is.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTktZHlLcFhFZkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHBHQkw2aFJJQkE", "createdOn":"", "firstName":"hp  OB900 mri.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHBHQkw2aFJJQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlhMTEtEa1h0MVk", "createdOn":"", "firstName":"hp  OB900 DT ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlhMTEtEa1h0MVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR25hUHJTYmpubGM", "createdOn":"", "firstName":"hp  Maintenance.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR25hUHJTYmpubGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUZxT2ZjSUE1NUE", "createdOn":"", "firstName":"hp  OB2100 DP ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUZxT2ZjSUE1NUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXd3bG5xMERfOUk", "createdOn":"", "firstName":"hp  compaq 7710.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXd3bG5xMERfOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUplWE1jVW9rNFk", "createdOn":"", "firstName":"asus UX30 TOUCH PAD BD R120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUplWE1jVW9rNFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGd1b3FPX1lWaFE", "createdOn":"", "firstName":"hp  OBXE2 DD sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGd1b3FPX1lWaFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFpJZVkweF9ScEE", "createdOn":"", "firstName":"dell Inspiron 5150 LA 1682.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFpJZVkweF9ScEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXVRWk9fZEMwd2M", "createdOn":"", "firstName":"hp  HP NC6230.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXVRWk9fZEMwd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWdpRXBsV1B2eEU", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWdpRXBsV1B2eEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidU04ZHdQYUt2aEU", "createdOn":"", "firstName":"hp  OB5500 HD ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidU04ZHdQYUt2aEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUtfd3UybkR2dDA", "createdOn":"", "firstName":"asus eee pc 4g 701 Eee PC 4G 701 Chapter 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUtfd3UybkR2dDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicU9ZQzlMSTYwSms", "createdOn":"", "firstName":"hp  OB2100 3100 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicU9ZQzlMSTYwSms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicG9DWm9FNGtHdHM", "createdOn":"", "firstName":"dell REMOVE 2.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicG9DWm9FNGtHdHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0NzLUpZc3dYcUU", "createdOn":"", "firstName":"asus S6Fm Chapter 01 v1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0NzLUpZc3dYcUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjdsVFBwanU5Ync", "createdOn":"", "firstName":"hp  OB2100 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjdsVFBwanU5Ync/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUtid0lsMzY3UEU", "createdOn":"", "firstName":"dell 5648PTB0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUtid0lsMzY3UEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibElNa19OU2I1Y0k", "createdOn":"", "firstName":"hp  OB7100 HDD in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibElNa19OU2I1Y0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiall0cXRFczRlRjQ", "createdOn":"", "firstName":"hp  OB7100 HD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiall0cXRFczRlRjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajg5Rm81c3lCaEU", "createdOn":"", "firstName":"hp  OB2000 5700 PR ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajg5Rm81c3lCaEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0V6R2xwUTlkM3M", "createdOn":"", "firstName":"toshiba PS10A 6050A2174501 MB A03 20080124 bottom ref.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0V6R2xwUTlkM3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGpkOU5DSmlKemc", "createdOn":"", "firstName":"hp  OB2000 5700 WIN95 ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGpkOU5DSmlKemc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGZoTVViWTFBaUE", "createdOn":"", "firstName":"hp  OB5500 Acc ug.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGZoTVViWTFBaUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEFneWdsaTBfdVU", "createdOn":"", "firstName":"hp  OB6000 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEFneWdsaTBfdVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDB6MlF6cERGSFk", "createdOn":"", "firstName":"hp  OB6000 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDB6MlF6cERGSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzYzZ1hnVV9CMDQ", "createdOn":"", "firstName":"hp  OBXE3 GC ceg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzYzZ1hnVV9CMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWtEUVg2OFR3RTg", "createdOn":"", "firstName":"asus UX30 PWR LED BD R200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWtEUVg2OFR3RTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWNwT1NzU0w5d0E", "createdOn":"", "firstName":"hp  OB2100 3100 rg WIN95NTV1 rg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWNwT1NzU0w5d0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWV9oLTl4SEVwdHc", "createdOn":"", "firstName":"hp  OB6100 sg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWV9oLTl4SEVwdHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzhkejVzSUV5a1U", "createdOn":"", "firstName":"hp  OB900 uh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzhkejVzSUV5a1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVJZUUlFajQ2U0E", "createdOn":"", "firstName":"hp  OB2000 5500 5700 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVJZUUlFajQ2U0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFNycWVOT2tEQVE", "createdOn":"", "firstName":"dell 679DCBK0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFNycWVOT2tEQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnc3M3FRYWliWTg", "createdOn":"", "firstName":"asus S96J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnc3M3FRYWliWTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkR0MGdSeTE1aE0", "createdOn":"", "firstName":"dell  6400 FM1 R1A  6400 FM1 R1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkR0MGdSeTE1aE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHplbEJjSklBMUk", "createdOn":"", "firstName":"toshiba M200 MA10 miami MA10 powersequence 951220.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHplbEJjSklBMUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUG9BYzhPeklpTW8", "createdOn":"", "firstName":"hp  SALVIA.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUG9BYzhPeklpTW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU5DM2QzVzdrcHM", "createdOn":"", "firstName":"dell 3800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU5DM2QzVzdrcHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1lIZWhwTGRjM2s", "createdOn":"", "firstName":"dell  D410  D410 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1lIZWhwTGRjM2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmVIMTF2dmFBRTA", "createdOn":"", "firstName":"hp  Compaq Worldwide Telephone Dir.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmVIMTF2dmFBRTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSks5ZW42RmczWGs", "createdOn":"", "firstName":"dell  Inspiron 1545  Inspiron 1545.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSks5ZW42RmczWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXBUUExIVkpRdjA", "createdOn":"", "firstName":"dell 8200.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXBUUExIVkpRdjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3ZIMlBzYi10Wmc", "createdOn":"", "firstName":"hp  OB800 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3ZIMlBzYi10Wmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS09mU1NTOEt3YTA", "createdOn":"", "firstName":"toshiba Toshiba Memory Install Guid.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS09mU1NTOEt3YTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE5RRVdNN3k4bkE", "createdOn":"", "firstName":"hp  SAA.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE5RRVdNN3k4bkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmJZa1dfb1RrODg", "createdOn":"", "firstName":"toshiba satelliteTE2000fru.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmJZa1dfb1RrODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjR1NjhVX21RSUU", "createdOn":"", "firstName":"toshiba portege 3110CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjR1NjhVX21RSUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVZ0MzZGbWRWbUE", "createdOn":"", "firstName":"dell REMOVE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVZ0MzZGbWRWbUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnBmRkEyODZQdUU", "createdOn":"", "firstName":"dell 67CUJ0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnBmRkEyODZQdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWpnR0VtX2p1UG8", "createdOn":"", "firstName":"asus K40AB R1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWpnR0VtX2p1UG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVAybWFXYUVwRmM", "createdOn":"", "firstName":"asus UX30 DCIN R120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVAybWFXYUVwRmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXc1TW91NkRTY2c", "createdOn":"", "firstName":"toshiba PS10A 6050A2174501 MB A03 20080124 top value.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXc1TW91NkRTY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMExKdW0zTm1KUWs", "createdOn":"", "firstName":"toshiba portege 3400series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMExKdW0zTm1KUWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM25MYUxxQ2FVZjA", "createdOn":"", "firstName":"toshiba tecra 9000FRU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM25MYUxxQ2FVZjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1NOdGtTcmU4c1U", "createdOn":"", "firstName":"dell 2600 50.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1NOdGtTcmU4c1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWY2RzRjLWwxdHc", "createdOn":"", "firstName":"dell 55900A3.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWY2RzRjLWwxdHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTZMS0dMX19KdkE", "createdOn":"", "firstName":"dell 1100 5100 5150.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTZMS0dMX19KdkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiek5jTE1oU0lxV1E", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N1010v Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiek5jTE1oU0lxV1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzcxOUZZVDFQSDQ", "createdOn":"", "firstName":"hp  Compaq Armada M700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzcxOUZZVDFQSDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlY4YjIwdWdEZmM", "createdOn":"", "firstName":"dell INSPIRON 4000 SOLGDE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlY4YjIwdWdEZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkUwQkRwMDAwQ1k", "createdOn":"", "firstName":"hp  Compaq Notebook Evo N150 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkUwQkRwMDAwQ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVZGdFprRFM1NDQ", "createdOn":"", "firstName":"dell LATITUDE C400 C400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVZGdFprRFM1NDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicl9JbHgyM2luRE0", "createdOn":"", "firstName":"hp  HP Pavilion zt1100xz100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicl9JbHgyM2luRE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHhsV1pMalI0QTg", "createdOn":"", "firstName":"dell INSPIRON 85 8600 8500 8600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHhsV1pMalI0QTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1lKeGpNR2ZMd2s", "createdOn":"", "firstName":"hp  1600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1lKeGpNR2ZMd2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnpvNTVVNnFVUnM", "createdOn":"", "firstName":"hp  hp pavillion ze5200 ze4200 ze4100 compaq N1050v N1010v 2500 2100 1100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnpvNTVVNnFVUnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkpNU3hpRTF4SkE", "createdOn":"", "firstName":"dell INSPIRON 2100 2100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkpNU3hpRTF4SkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2FmUkh1QmFxNkU", "createdOn":"", "firstName":"hp  Omnibook xt1500ic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2FmUkh1QmFxNkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0RQTFp0T2JqLWc", "createdOn":"", "firstName":"hp  HP Omnibook XE4100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0RQTFp0T2JqLWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzhXdmFMSmNOdEE", "createdOn":"", "firstName":"dell LATITUDE C800 C800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzhXdmFMSmNOdEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmRzVWFtV3NXOXc", "createdOn":"", "firstName":"hp  Compaq Evo N620c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmRzVWFtV3NXOXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlk5czYtWkJoT0U", "createdOn":"", "firstName":"hp  1800XL180 192.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlk5czYtWkJoT0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjh3MUJYQTkyZ2c", "createdOn":"", "firstName":"dell LATITUDE D400 D400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjh3MUJYQTkyZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ29XX3JfY3MtVUk", "createdOn":"", "firstName":"dell LATITUDE X300 X300.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ29XX3JfY3MtVUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzBiVkpxaXNZM3M", "createdOn":"", "firstName":"hp  HP OmniBook 41004150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzBiVkpxaXNZM3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlQydjhpc09UWlk", "createdOn":"", "firstName":"dell INSPIRON 3800 3800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlQydjhpc09UWlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYklia3RmTFdpRGM", "createdOn":"", "firstName":"dell LATITUDE C810 C810.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYklia3RmTFdpRGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjVQWWE1YjhVN3M", "createdOn":"", "firstName":"hp  Compaq Armada E500 & V300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjVQWWE1YjhVN3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjFMRG9LWkpOTlU", "createdOn":"", "firstName":"dell INSPIRON 7500 679DCBK0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjFMRG9LWkpOTlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXI5TDNyMVBzemM", "createdOn":"", "firstName":"hp  1800xl2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXI5TDNyMVBzemM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3BoSGtfZzBROFk", "createdOn":"", "firstName":"dell INSPIRON 8100 8100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3BoSGtfZzBROFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjB2UHloN09FSDA", "createdOn":"", "firstName":"dell INSPIRON 7500 6945T.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjB2UHloN09FSDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVllFdjFGN2ZoU3c", "createdOn":"", "firstName":"hp  1700xl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVllFdjFGN2ZoU3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVktCNzhuVy1IODA", "createdOn":"", "firstName":"toshiba toshiba m200 and m205 service manual chapter3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVktCNzhuVy1IODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjhVdW5XM3FZUkk", "createdOn":"", "firstName":"hp  Presario 2800 Mobile PC Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjhVdW5XM3FZUkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUFUajJsUzluM2s", "createdOn":"", "firstName":"hp  Compaq 800 Notebook series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUFUajJsUzluM2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTZNaUlkaUJQMkE", "createdOn":"", "firstName":"hp  Omnibook xt1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTZNaUlkaUJQMkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWVVc2dnaHBmbXM", "createdOn":"", "firstName":"hp  OmniBook 300 425 430 530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWVVc2dnaHBmbXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3BLbVZpdHBQTXM", "createdOn":"", "firstName":"hp  Compaq Evo N610c and Evo N600c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3BLbVZpdHBQTXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGNfTFRCeWhUSG8", "createdOn":"", "firstName":"dell LATITUDE LM UPDATE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGNfTFRCeWhUSG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1A4dERqY3RzVmc", "createdOn":"", "firstName":"hp  Compaq Evo N200 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1A4dERqY3RzVmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmd6QklEWUZDU00", "createdOn":"", "firstName":"toshiba satellite m200part1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmd6QklEWUZDU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWh3M3hQMEFIYkk", "createdOn":"", "firstName":"toshiba satellite m200part4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWh3M3hQMEFIYkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1hxdnd5eWpyVFk", "createdOn":"", "firstName":"dell INSPIRON 5000 70KHU.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1hxdnd5eWpyVFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnRBUWZLQ2RSeTg", "createdOn":"", "firstName":"hp  1683 1694.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnRBUWZLQ2RSeTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjV3Z3lwMy0xMkU", "createdOn":"", "firstName":"hp  OmniBook 4000C CT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjV3Z3lwMy0xMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1lIQnJucmlqV1k", "createdOn":"", "firstName":"toshiba toshiba m200 and m205 service manual chapter1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1lIQnJucmlqV1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHZSMEZXWDc0a1E", "createdOn":"", "firstName":"dell D510 DM3D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHZSMEZXWDc0a1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkRxcHYyX0p1N1U", "createdOn":"", "firstName":"hp  1800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkRxcHYyX0p1N1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUM3U2x3bXRqWGs", "createdOn":"", "firstName":"dell INSPIRON 3000 3200 55900A3.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUM3U2x3bXRqWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGFlck5JYVRacW8", "createdOn":"", "firstName":"hp  XE2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGFlck5JYVRacW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFR5WEIxU2Vubkk", "createdOn":"", "firstName":"dell LATITUDE D600 D600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFR5WEIxU2Vubkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXBJWWhLQXdjNUk", "createdOn":"", "firstName":"hp  Compaq Notebook Evo N160 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXBJWWhLQXdjNUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMW1wQ2hfY2ZHcnM", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N800 xx series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMW1wQ2hfY2ZHcnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGp1V1FtY19YZjQ", "createdOn":"", "firstName":"dell INSPIRON 1100 5100 5150 1100 5100 5150.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGp1V1FtY19YZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0tnRGtPQlBWdU0", "createdOn":"", "firstName":"dell INSPIRON 3700 2526T.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0tnRGtPQlBWdU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieV9DNU8xR19nTGc", "createdOn":"", "firstName":"dell LATITUDE X200 X200.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieV9DNU8xR19nTGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTVIZlJMc3cyNUU", "createdOn":"", "firstName":"hp  HP OmniBook 800CSCT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTVIZlJMc3cyNUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFFXc3doS195YW8", "createdOn":"", "firstName":"dell LATITUDE LS 3538U0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFFXc3doS195YW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkhMcnN1VGJHU28", "createdOn":"", "firstName":"toshiba toshiba m200 and m205 service manual chapter2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkhMcnN1VGJHU28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidU1kNzJWckp2SzA", "createdOn":"", "firstName":"toshiba satellite m200part2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidU1kNzJWckp2SzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDR4aEpoak9qWUU", "createdOn":"", "firstName":"dell INSPIRON 8000 REMOVE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDR4aEpoak9qWUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3ZOcU5fN1k0Ync", "createdOn":"", "firstName":"toshiba 1405.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3ZOcU5fN1k0Ync/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjhyd016dFpWOVE", "createdOn":"", "firstName":"hp  1650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjhyd016dFpWOVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUtqMEhUS1JNWE0", "createdOn":"", "firstName":"dell INSPIRON 4150 4150.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUtqMEhUS1JNWE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHQ2aWhsOUZrcjg", "createdOn":"", "firstName":"hp  XE3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHQ2aWhsOUZrcjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2MxTnhfbnJkQkU", "createdOn":"", "firstName":"dell LATITUDE LT P RGD.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2MxTnhfbnJkQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmk0NVV2MVhBVjA", "createdOn":"", "firstName":"dell LATITUDE C510 610 C510 610.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmk0NVV2MVhBVjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibktCXzdKZHN0ME0", "createdOn":"", "firstName":"hp  Compaq Armada M300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibktCXzdKZHN0ME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUpvNHhadXIxcWc", "createdOn":"", "firstName":"hp  Compaq Presario 2800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUpvNHhadXIxcWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2VyaVd0eDlPcXM", "createdOn":"", "firstName":"dell LATITUDE C840 C840.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2VyaVd0eDlPcXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWRvdUtaUHFwVGM", "createdOn":"", "firstName":"toshiba SATELLITE 300, 310, 320 AND 330.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWRvdUtaUHFwVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWJpQnpiVldnOWM", "createdOn":"", "firstName":"dell INSPIRON 4100 4100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWJpQnpiVldnOWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzVJenduRVNNNnc", "createdOn":"", "firstName":"dell LATITUDE CP CPI 54724.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzVJenduRVNNNnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2YyMUxlT0hLTG8", "createdOn":"", "firstName":"hp  1800t 1825.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2YyMUxlT0hLTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0psX3E3Y3loZmM", "createdOn":"", "firstName":"dell LATITUDE C500 600 C500 600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0psX3E3Y3loZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlRZLU50aVFEZjQ", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N400c Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlRZLU50aVFEZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0tFdW5VcHBnMlE", "createdOn":"", "firstName":"hp  XE3ge gd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0tFdW5VcHBnMlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVk90b1BCM0prcTg", "createdOn":"", "firstName":"hp  Compaq Evo N600c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVk90b1BCM0prcTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlVyNThQWURCcE0", "createdOn":"", "firstName":"hp  1270 1675.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlVyNThQWURCcE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUG1yNURYY1F0aW8", "createdOn":"", "firstName":"hp  Compaq Presario 900 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUG1yNURYY1F0aW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUF9IUmNHTXRpN1E", "createdOn":"", "firstName":"hp  HP Omnibook XE4500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUF9IUmNHTXRpN1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2prRDZaekxtVlE", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N800c Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2prRDZaekxtVlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDVTb1M1YmtSNU0", "createdOn":"", "firstName":"toshiba SATELLITE 220, 440, 460, 470, AND 480 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDVTb1M1YmtSNU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3Ixa0JsTjNBQ28", "createdOn":"", "firstName":"hp  OmniBook 300 425 430 530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3Ixa0JsTjNBQ28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSngtOHB3QUgxd3c", "createdOn":"", "firstName":"hp  1255 1275.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSngtOHB3QUgxd3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXRNU3NmNU5HaHc", "createdOn":"", "firstName":"dell INSPIRON 5000 3959U.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXRNU3NmNU5HaHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTdDbEpWdGw0Q2s", "createdOn":"", "firstName":"hp  1800xl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTdDbEpWdGw0Q2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGpXWU9WWFk5N28", "createdOn":"", "firstName":"hp  HP Pavilion zt1000xz300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGpXWU9WWFk5N28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSG4ybmpxUTNobDA", "createdOn":"", "firstName":"hp  Compaq Armada M300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSG4ybmpxUTNobDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlN3cmxoc1ExUU0", "createdOn":"", "firstName":"hp  HP OmniBook 900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlN3cmxoc1ExUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHloQ3ZNNE0xY1U", "createdOn":"", "firstName":"hp  Compaq Evo N110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHloQ3ZNNE0xY1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGRONThVTU5fZ00", "createdOn":"", "firstName":"hp  Omnibook xt1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGRONThVTU5fZ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDVOdHo1c0FuQTA", "createdOn":"", "firstName":"hp  Compaq Armada 100S and.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDVOdHo1c0FuQTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDA5TnowOWpnSVk", "createdOn":"", "firstName":"hp  HP Omnibook XT6050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDA5TnowOWpnSVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVFnMjNwVFNCY3M", "createdOn":"", "firstName":"hp  Compaq Notebook 100 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVFnMjNwVFNCY3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1hRSG9nanBoVkk", "createdOn":"", "firstName":"hp  1660.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1hRSG9nanBoVkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVk4c3pqSWJhT1E", "createdOn":"", "firstName":"dell LATITUDE CPIR 5648PTB0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVk4c3pqSWJhT1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTZSTm5hV0MtOXM", "createdOn":"", "firstName":"dell LATITUDE CPXH J 64PTN EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTZSTm5hV0MtOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHQ4VFdpYV9LRzA", "createdOn":"", "firstName":"dell LATITUDE D800 D800.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHQ4VFdpYV9LRzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnVHTVNJNUtibEU", "createdOn":"", "firstName":"dell INSPIRON 4000 REMOVE.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnVHTVNJNUtibEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzVGMzA5UE8xck0", "createdOn":"", "firstName":"dell LATITUDE CPTS 64PTN EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzVGMzA5UE8xck0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmlOVVNmVTRSSVE", "createdOn":"", "firstName":"dell LATITUDE V710 740 V710 740.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmlOVVNmVTRSSVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMU00ZVBmYUMyT1E", "createdOn":"", "firstName":"hp  Compaq LTE 5000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMU00ZVBmYUMyT1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3lwS0JILU16Qk0", "createdOn":"", "firstName":"hp  Compaq Presario 3000 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3lwS0JILU16Qk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXFUeVN5Q3FyTW8", "createdOn":"", "firstName":"dell LATITUDE D505 D505.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXFUeVN5Q3FyTW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkQ4ZjJPNS1yU1k", "createdOn":"", "firstName":"hp  Compaq Evo N115.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkQ4ZjJPNS1yU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnJHUGZ3d2U4azg", "createdOn":"", "firstName":"dell INSPIRON 9100 9100.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnJHUGZ3d2U4azg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic05jejY1RjUtbHc", "createdOn":"", "firstName":"dell LATITUDE LM 98085.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic05jejY1RjUtbHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmloM1dELTJDRTg", "createdOn":"", "firstName":"dell LATITUDE C540 640 C540 640.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmloM1dELTJDRTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm9CUFZEb0s1N0E", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N1020v Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm9CUFZEb0s1N0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDZ1N2pZXy1NQmM", "createdOn":"", "firstName":"dell INSPIRON XPS XPS.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDZ1N2pZXy1NQmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazVKdlZCZjE2ekk", "createdOn":"", "firstName":"dell LATITUDE D500 D500.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazVKdlZCZjE2ekk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVhKQXlVMEpUNXc", "createdOn":"", "firstName":"dell LATITUDE V700 V700 SME.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVhKQXlVMEpUNXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHZsTjA2UUdCNXM", "createdOn":"", "firstName":"hp  HP Pavilion zt1100xz200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHZsTjA2UUdCNXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDFwWm5lU0tqWlE", "createdOn":"", "firstName":"dell LATITUDE CPTV 5169T EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDFwWm5lU0tqWlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUtoU1l1b08yQVk", "createdOn":"", "firstName":"dell LATITUDE XPI CD 30269.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUtoU1l1b08yQVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTl3SUJNT1pSVjg", "createdOn":"", "firstName":"hp  Compaq Armada 110 and.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTl3SUJNT1pSVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTNWMzRTZVFucE0", "createdOn":"", "firstName":"toshiba SATELLITE 2430, 2435.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTNWMzRTZVFucE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGpvcHFEemRaelk", "createdOn":"", "firstName":"toshiba satellite m200part3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGpvcHFEemRaelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFF5b1lWX3NBREU", "createdOn":"", "firstName":"hp  Compaq LTE Elite.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFF5b1lWX3NBREU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEVQS3hzX1l0eUE", "createdOn":"", "firstName":"hp  HP Pavilion ze4100 Notebook PC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEVQS3hzX1l0eUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnZmMW5naXViN0U", "createdOn":"", "firstName":"dell LATITUDE X300 X300.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnZmMW5naXViN0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWlJbG5USnpIN1U", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N1005 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWlJbG5USnpIN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTY4bVNRX0M5MzQ", "createdOn":"", "firstName":"dell INSPIRON 8200 8200.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTY4bVNRX0M5MzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3BRVUhuSGkxUm8", "createdOn":"", "firstName":"hp  Compaq Armada 4100 and 4200 Families.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3BRVUhuSGkxUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUFROVR4MkZFMUk", "createdOn":"", "firstName":"toshiba satellite m100part1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUFROVR4MkZFMUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFVZaXJpVmtzMGc", "createdOn":"", "firstName":"dell INSPIRON 8000 START.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFVZaXJpVmtzMGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTN6eUFtNDVsMUU", "createdOn":"", "firstName":"toshiba SATELLITE 4030, 4060, 4070, 4080, 4090, AND 4100 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTN6eUFtNDVsMUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHkzZlZEdG1BQzg", "createdOn":"", "firstName":"dell INSPIRON 8000 8000.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHkzZlZEdG1BQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWNvM2huS0dTcE0", "createdOn":"", "firstName":"hp  1600xl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWNvM2huS0dTcE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFEzMHZ5OEs4czQ", "createdOn":"", "firstName":"dell LATITUDE LATITUDE C540 640.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFEzMHZ5OEs4czQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEt2UFp5YUlqVFE", "createdOn":"", "firstName":"toshiba SATELLITE 4000, 4010, AND 4020 SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEt2UFp5YUlqVFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3NZMUY0VGllYTQ", "createdOn":"", "firstName":"dell INSPIRON 7000 6086C.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3NZMUY0VGllYTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTi1POFVONlYyclE", "createdOn":"", "firstName":"hp  Compaq Armada M300 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTi1POFVONlYyclE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHlSaDd2dmg1TjQ", "createdOn":"", "firstName":"hp  1400 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHlSaDd2dmg1TjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGliLV9QdDlTMWM", "createdOn":"", "firstName":"hp  Compaq Armada 110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGliLV9QdDlTMWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2RQNXhzS21JbVE", "createdOn":"", "firstName":"hp  XE3gf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2RQNXhzS21JbVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzRYbUFvSmc5dlE", "createdOn":"", "firstName":"hp  Compaq Armada E700 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzRYbUFvSmc5dlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkhLa2k3aUdzZnM", "createdOn":"", "firstName":"dell INSPIRON 2600 50 2600 50.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkhLa2k3aUdzZnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjJlWk9uMFJvT1k", "createdOn":"", "firstName":"toshiba SATELLITE 2230, 2250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjJlWk9uMFJvT1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmkzWUxIZjd2SDQ", "createdOn":"", "firstName":"toshiba SATELLITE 1410, 1415.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmkzWUxIZjd2SDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHNhbkVTZUlkSE0", "createdOn":"", "firstName":"dell INSPIRON 2500 Inspiron 2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHNhbkVTZUlkSE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHJBR1FaM25saFk", "createdOn":"", "firstName":"hp  Armada Station.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHJBR1FaM25saFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGtja0xSWnIyM1E", "createdOn":"", "firstName":"toshiba satellite m100part2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGtja0xSWnIyM1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnJlV0ZnbGlxc1E", "createdOn":"", "firstName":"hp  Compaq Contura 400 Family.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnJlV0ZnbGlxc1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjJXV2ZxX0hjeHc", "createdOn":"", "firstName":"dell LATITUDE L400 67CUJ0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjJXV2ZxX0hjeHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWtPZW9Ya09lOG8", "createdOn":"", "firstName":"dell INSPIRON 3700 2526T.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWtPZW9Ya09lOG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVhpSzZwYzU1U3M", "createdOn":"", "firstName":"hp  Presario 305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVhpSzZwYzU1U3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2RyQ284Wkp1eW8", "createdOn":"", "firstName":"hp  HP Omnibook 60006100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2RyQ284Wkp1eW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFdiQmZHVG9uZFE", "createdOn":"", "firstName":"hp  HP Omnibook 500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFdiQmZHVG9uZFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTlGTUE1OE5rTWc", "createdOn":"", "firstName":"dell INSPIRON 3500 6233DBK0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTlGTUE1OE5rTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlRLcEFrQkIxUU0", "createdOn":"", "firstName":"hp  1270 1675.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlRLcEFrQkIxUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMENRRWRFTWVhWjQ", "createdOn":"", "firstName":"hp  HP Omnibook XTVT6200 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMENRRWRFTWVhWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3doSDVRd2Y1bzg", "createdOn":"", "firstName":"dell LATITUDE CS 0708R EN.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3doSDVRd2Y1bzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTdoa3V6eWJzSlU", "createdOn":"", "firstName":"hp  Compaq Evo Notebook N1000 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTdoa3V6eWJzSlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWczRTd6ZHhsNjQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite P25 S526 Compal LA 1841 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWczRTd6ZHhsNjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHhvTWJIdTg5VjQ", "createdOn":"", "firstName":"hp  HP Compaq NC6220 (Inventec ASPEN UMA MV) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHhvTWJIdTg5VjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGtkVFkyRkFoSzQ", "createdOn":"", "firstName":"hp  HP Compaq CQ40 Intel (Compal LA 4101P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGtkVFkyRkFoSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid21LeVcyR29rc0E", "createdOn":"", "firstName":"hp  HP Compaq CQ41 (Compal LA 4107P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid21LeVcyR29rc0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjJ0Y3FZaWpWaHc", "createdOn":"", "firstName":"hp  HP Probook 4520s Wistron S Class Intel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjJ0Y3FZaWpWaHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY25BU3FRcFFaek0", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300D   INVENTEC PS10A   6050A2174501   REV X01Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY25BU3FRcFFaek0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2d2V0l0X2o3OEE", "createdOn":"", "firstName":"hp  hp pavilion dv2000 akita wistron sch [ET].pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2d2V0l0X2o3OEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUdSNGlPOWctMmc", "createdOn":"", "firstName":"toshiba Toshiba Satellite A655 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUdSNGlPOWctMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTENic29FRlRtWlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite P200   COMPAL LA 3711P   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTENic29FRlRtWlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVdPTEpSVVhaaHc", "createdOn":"", "firstName":"hp  HP Compaq NX7400 (Inventec Gallo).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVdPTEpSVVhaaHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0xaMVkzYUwwMk0", "createdOn":"", "firstName":"hp  Quanta AT6 AT7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0xaMVkzYUwwMk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVFVYzNHVUlScWM", "createdOn":"", "firstName":"toshiba Toshiba Dynabook Qosmio F40 (Inventec Honolulu) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVFVYzNHVUlScWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzNfdTBQWmQyVHc", "createdOn":"", "firstName":"toshiba Toshiba Satellite a70 la 2301.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzNfdTBQWmQyVHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid29IcU1rYWIyYnM", "createdOn":"", "firstName":"hp  hp6710b maintenance.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid29IcU1rYWIyYnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1F3Z0tzeEVqVjA", "createdOn":"", "firstName":"hp  hp compaq 2230s Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1F3Z0tzeEVqVjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGdMUW5zNEYxZWc", "createdOn":"", "firstName":"toshiba Toshiba Satellite M55 Compal LA 2721.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGdMUW5zNEYxZWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGZSV3AxeVRDV0k", "createdOn":"", "firstName":"hp  hp nc6000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGZSV3AxeVRDV0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0FwV2dubFhWcjA", "createdOn":"", "firstName":"toshiba Toshiba Satellite A80 (Compal LA 2811) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0FwV2dubFhWcjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkdiUHE3WHFrQzg", "createdOn":"", "firstName":"toshiba Toshiba M86 M VGA board   QUANTA BD3Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkdiUHE3WHFrQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibThveFhZX0RaQlk", "createdOn":"", "firstName":"hp  hp compaq 625 cq325 cq326 (inventec valima 2010 amd c2 uma vv10au2 6050a2346901 rev.a01).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibThveFhZX0RaQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXBRTzFCcWRQQm8", "createdOn":"", "firstName":"hp  hp pavilion dv9000 amd quanta at8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXBRTzFCcWRQQm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFBOc0IyYURFbUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L300 L305D (Inventec PS10AP) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFBOc0IyYURFbUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaE9mRk1VQnZqbnM", "createdOn":"", "firstName":"toshiba Satellite L730 (Quanta Bu5) 95964.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaE9mRk1VQnZqbnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3V5T2w4LVNMdlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite C660 Compal LA 6842P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3V5T2w4LVNMdlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3JMcXJvYm1ZNzQ", "createdOn":"", "firstName":"hp  HP Compaq CQ516 (Inventec VOLNA AMD Discrete) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3JMcXJvYm1ZNzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2F3MFRlRUcwaTQ", "createdOn":"", "firstName":"hp  Pavillion G6 Quanta R23 SI AMD Sabin UMA R1A 0128.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2F3MFRlRUcwaTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY04zOUgyRDV0LUk", "createdOn":"", "firstName":"hp  hp pavilion dv9260 intel quanta at5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY04zOUgyRDV0LUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWllaRVZid29mNms", "createdOn":"", "firstName":"hp  HP Pavillion dv6000 MnS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWllaRVZid29mNms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTQ1UzNCOFVDUEk", "createdOn":"", "firstName":"toshiba Satellite L655 L750 L755 7a061 Quanta BLB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTQ1UzNCOFVDUEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHBjNUwwakZ4d0U", "createdOn":"", "firstName":"hp  HP Compaq CQ60 CQ70 HP G50 G60 G60T (Wistron WARRIOR) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHBjNUwwakZ4d0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFNtWjRJNzE5Vkk", "createdOn":"", "firstName":"hp  hp pavilion dv9000 dv6000 amd quanta at1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFNtWjRJNzE5Vkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUxPQWtfTkhOSUE", "createdOn":"", "firstName":"toshiba Sony Vaio PCG 61611Quanta NE7    REV 3A 22MAR2010Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUxPQWtfTkhOSUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTdGZGxkeWU1M1E", "createdOn":"", "firstName":"hp  HP pavilion DV7t Intel COMPAL LA 4082P  VADER DISCRETE   REV 0.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTdGZGxkeWU1M1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGprM2hBcnBqbk0", "createdOn":"", "firstName":"hp  HP NX6110 NX6120 6050A0055001 A05 DAVOS DF PV 1 BUILD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGprM2hBcnBqbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVERMTU9rYjExcFU", "createdOn":"", "firstName":"hp  HP Compaq nx7010 (Compal LA 1701R2.0).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVERMTU9rYjExcFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV25acW56N0FyVGM", "createdOn":"", "firstName":"hp  hp pavilion DV7 AMD (UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV25acW56N0FyVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1JVQWE2bk9STUE", "createdOn":"", "firstName":"hp  HP Compaq 6910p (Compal LA 3261p) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1JVQWE2bk9STUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzZxaVUzRTFDSmc", "createdOn":"", "firstName":"toshiba NEC Tolkin.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzZxaVUzRTFDSmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUG1SSm5DNzdYTDA", "createdOn":"", "firstName":"toshiba Toshiba L30 QUANTA BL1.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUG1SSm5DNzdYTDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1UtMVRrMXVGYm8", "createdOn":"", "firstName":"toshiba Toshiba Satellite C660D COMPAL LA 6843P PWWAE REV 1.0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1UtMVRrMXVGYm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1A1T0VvMDNTZlU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L670 L675 Compal LA 6041P NALAA Hamburg10 Rev1.0pdf (1).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1A1T0VvMDNTZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzFWWFJhR1o4RW8", "createdOn":"", "firstName":"hp  HP Compaq NC8000 (Inventec Ruby) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzFWWFJhR1o4RW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEdsOE1VZnBMSzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite M300 M305 (Quanta TE1) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEdsOE1VZnBMSzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWtZZFRfZl8wOFE", "createdOn":"", "firstName":"toshiba Toshiba Satellite M305, Toshiba Satellite M305D, Toshiba Satellite U400D, Toshiba Satellite U405.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWtZZFRfZl8wOFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVVmYjlQWWRoODg", "createdOn":"", "firstName":"hp  hp 625 compaq presario cq325 cq326 inventec vv10au2 valima 2010 amd c2 uma rev a01 ch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVVmYjlQWWRoODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHZkWlZkOXNjY28", "createdOn":"", "firstName":"toshiba Toshiba Satellite M65 (Compal LA 2741) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHZkWlZkOXNjY28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFFleXp2LTZTMzg", "createdOn":"", "firstName":"hp  HP 510 511 Inventec Vulcain UMA laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFFleXp2LTZTMzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0lTVmE4eGdvek0", "createdOn":"", "firstName":"toshiba Toshiba Satellite A110 (Compal LA 3171P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0lTVmE4eGdvek0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0JXUVNxd05nVXc", "createdOn":"", "firstName":"hp  HP PAVILION DV9000 Service Manual.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0JXUVNxd05nVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmlpNEZxNEcwbDg", "createdOn":"", "firstName":"hp  Quanta R62 DAOR62MB6E0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmlpNEZxNEcwbDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmRaWEpEbXlpWmc", "createdOn":"", "firstName":"hp  hp pavilion dv6000 intel quanta at6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmRaWEpEbXlpWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXJMSlpFRzNGcjQ", "createdOn":"", "firstName":"toshiba Tosh C855 Quanta ZY9B Hannstar j mv 4 Hannstar e89382.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXJMSlpFRzNGcjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVdWdDVvMHJ5bE0", "createdOn":"", "firstName":"toshiba Toshiba Satellite A505 S6025 Quanta TW3A Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVdWdDVvMHJ5bE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFExMXNoNGUxYnM", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500 (Inventec 10M Perugia) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFExMXNoNGUxYnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmZ6ZGZxUXh5Z28", "createdOn":"", "firstName":"toshiba Toshiba Satellite a300 inventec potomac 10sg rev x01 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmZ6ZGZxUXh5Z28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlFudW9MZUVJLXc", "createdOn":"", "firstName":"hp  HP Compaq Presario C300 (Compal LA 3342P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlFudW9MZUVJLXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkpkaUNnX2dlanc", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L450 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkpkaUNnX2dlanc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVVnb3pfRXpITFU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A80 Compal LA 2811.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVVnb3pfRXpITFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzB2TzN6akpVeVE", "createdOn":"", "firstName":"hp  HP Compaq Presario C700 (Compal LA 4031) schematis.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzB2TzN6akpVeVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnhpd1NMMEExNlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L300 (Inventec PT10SC) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnhpd1NMMEExNlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3B4cndabWtTUXc", "createdOn":"", "firstName":"hp  HP ProBook 4410s 4411s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3B4cndabWtTUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieU9IaHRrcUZwNGc", "createdOn":"", "firstName":"toshiba Satellite C840 PSC6EL zqta zqsa unlocked.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieU9IaHRrcUZwNGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUdBeDR3X0dieEk", "createdOn":"", "firstName":"hp  hp pavilion DV5 AMD (Quanta QT8).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUdBeDR3X0dieEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGZkZXV6aHp6alk", "createdOn":"", "firstName":"hp  hp compaq nx7400 inventec gallo 1.0 rev a01 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGZkZXV6aHp6alk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1RGZmtWeGJNblU", "createdOn":"", "firstName":"hp  hp probook 4415s 4416s inventec piaget p09c2.0d rev a02 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1RGZmtWeGJNblU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1J1b0tpU1BrNW8", "createdOn":"", "firstName":"hp  HP Compaq 6530B 6730B Inventec DD08 Laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1J1b0tpU1BrNW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEpLNVc1R01XYVU", "createdOn":"", "firstName":"toshiba Satellite L750 (Quanta BLBD).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEpLNVc1R01XYVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm00WTJleHVtd2s", "createdOn":"", "firstName":"hp  quanta ax3 winbledon ax3.5 da0ax3mb6c2 ddr3 rev 1a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm00WTJleHVtd2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblBySTQ4LWNZWUk", "createdOn":"", "firstName":"hp  HP Compaq F700 (Quanta AT1) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblBySTQ4LWNZWUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVYtc2N4STVBakk", "createdOn":"", "firstName":"toshiba C850 10c PLABX CSABX inventec dakar 10f, 10fg rx01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVYtc2N4STVBakk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEVlUFl6Q3lWbU0", "createdOn":"", "firstName":"hp  HP Pavilion zv5000 zx5000 COMPAL LA 1811   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEVlUFl6Q3lWbU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmhyUGdRdnVJemc", "createdOn":"", "firstName":"toshiba Toshiba Satellite L310   QUANTA TE1M   REV E3D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmhyUGdRdnVJemc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkxqZkJtcDJoNm8", "createdOn":"", "firstName":"toshiba Toshiba Satellite M300 M305 Quanta TE1 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkxqZkJtcDJoNm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkJyV0I0UnBoWFU", "createdOn":"", "firstName":"hp  HP Compaq 6530s 6531S 6730s 6820s 6830s Inventec ZZI MV Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkJyV0I0UnBoWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUhBanVJRzdpRE0", "createdOn":"", "firstName":"hp  Quanta AT5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUhBanVJRzdpRE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnFuN3JDYlVMUFE", "createdOn":"", "firstName":"hp  HP Pavilion DV2000 (Winstron Pamris UMA) 3cb75 Pamirs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnFuN3JDYlVMUFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlNfOG1BSzlRcUU", "createdOn":"", "firstName":"hp  HP Compaq 2510P (Quanta OT2), laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlNfOG1BSzlRcUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlFMakdoNk9tMDQ", "createdOn":"", "firstName":"hp  hp g42 g56 g62 compaq cq56 cq62 quanta ax2 ax7 rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlFMakdoNk9tMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHhPV25QUVRyRzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite C850 C855 DAKAR10F FG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHhPV25QUVRyRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDN0RDBueThSV0U", "createdOn":"", "firstName":"toshiba Toshiba Satellite M65 COMPAL LA 2741   REV 0.3Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDN0RDBueThSV0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmo1X25sMkMwbFk", "createdOn":"", "firstName":"hp  HP OmniBook XE3 ad144 LA 1011.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmo1X25sMkMwbFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkt3NlZzT1hWdEE", "createdOn":"", "firstName":"hp  HP Compaq 2230s Laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkt3NlZzT1hWdEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXZvX1RQYlY4dGs", "createdOn":"", "firstName":"toshiba Toshiba Satellite X200 X205   COMPAL LA 3441P ISRAA   REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXZvX1RQYlY4dGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDBqNXFCdWxub00", "createdOn":"", "firstName":"toshiba Satellite C650 INVENTEC Manaus 10AD 5299f Inventec MAS10AD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDBqNXFCdWxub00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGxyY3llU0J6Z1E", "createdOn":"", "firstName":"toshiba L505D RT10M 6050A2302901 MB A02 MP 20090914.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGxyY3llU0J6Z1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUExqTDVfVUtwMTA", "createdOn":"", "firstName":"toshiba Toshiba NB510 (DOLPHIN10) 6050A2488301 MB A02 pago.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUExqTDVfVUtwMTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU254RVNGaFhFem8", "createdOn":"", "firstName":"toshiba Toshiba Satellite L200 M200 M203 M205 Laptop Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU254RVNGaFhFem8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXM1eGdLdmhHWU0", "createdOn":"", "firstName":"toshiba Toshiba Satellite C850 C855 INVENTEC DAKAR10F DAKAR10FG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXM1eGdLdmhHWU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTW5KZ3FsMHlFRTQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite M211 M215 (Inventec MIAMI 10G) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTW5KZ3FsMHlFRTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1FONE5zUEF4Sk0", "createdOn":"", "firstName":"hp  HP Compaq NC6000 (Inventec Diamond) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1FONE5zUEF4Sk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSl8tZzB1LXUtanM", "createdOn":"", "firstName":"hp  quanta jm3 power sequence rev 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSl8tZzB1LXUtanM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjZJbE55SXQ2SWc", "createdOn":"", "firstName":"hp  hp g62 compaq cq62 foxconn star federer rev 1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjZJbE55SXQ2SWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0h3N1RGQTh4b0E", "createdOn":"", "firstName":"toshiba Toshiba Satellite M211 M215   INVENTEC MIAMI 10G   REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0h3N1RGQTh4b0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDJtSUhhWkFCenM", "createdOn":"", "firstName":"toshiba Toshiba Satellite A80 COMPAL LA 2491.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDJtSUhhWkFCenM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2NUYmJzUzFTNFE", "createdOn":"", "firstName":"hp  hp pavilion g6 2025sr g6 2211sr g6 2318er g7 2114sr g7 2050 quanta r53 amd uma rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2NUYmJzUzFTNFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlFiYzduMWt4M3M", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300 A305 (Inventec Preliminary TEST) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlFiYzduMWt4M3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2F1aENJdUtkVXM", "createdOn":"", "firstName":"toshiba Toshiba Satellite P20 Compal LA 2041 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2F1aENJdUtkVXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0VnZkxjcl9SYTQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite C660 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0VnZkxjcl9SYTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ09UYUxwWWlMdGM", "createdOn":"", "firstName":"toshiba Toshiba Satellite M45 INVENTEC SAN ANTONIO 10 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ09UYUxwWWlMdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUpna1FLbERNTGc", "createdOn":"", "firstName":"hp  quanta jm3 power sequence rev 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUpna1FLbERNTGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzdqWTROVXJEUVU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A100   INVENTEC SAN ANTONIO.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzdqWTROVXJEUVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkNaakdrdXhNUGs", "createdOn":"", "firstName":"toshiba Toshiba Satellite A200 LA 3661P Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkNaakdrdXhNUGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3JkeU5NelRmNHc", "createdOn":"", "firstName":"hp  HP Compaq NX6320 (Quanta OT1), laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3JkeU5NelRmNHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2lHU3c0Ym9Db1U", "createdOn":"", "firstName":"hp  Inventec RKY15CP (6050A2450801 MB A02) Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2lHU3c0Ym9Db1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0dZYTV6TzF4R3c", "createdOn":"", "firstName":"toshiba L675D..Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0dZYTV6TzF4R3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlpxYXY2UDBoRUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite C850 C855 L850 L855 Inventec DK10FG MP 6050A2491301 rX01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlpxYXY2UDBoRUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlY2M3RZTXdRdjg", "createdOn":"", "firstName":"hp  hp pavilion dv4 ICH9 VGA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlY2M3RZTXdRdjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVBoXzQ4blc2N1E", "createdOn":"", "firstName":"hp  Inventec RAMONES 6050A2408801 X01 0830 FINAL 2010.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVBoXzQ4blc2N1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGN6ZFFwTkRoaDQ", "createdOn":"", "firstName":"hp  HP pavilion DV7 AMD COMPAL LA 4093P JBK00 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGN6ZFFwTkRoaDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGN4Smd5TDZwZ2c", "createdOn":"", "firstName":"hp  QUANTA GC9A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGN4Smd5TDZwZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXJPRVRIQUZka1k", "createdOn":"", "firstName":"hp  HP Compaq 6510B (Inventec DD1.0) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXJPRVRIQUZka1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVBoa2FlQmFVOUk", "createdOn":"", "firstName":"hp  HP Compaq NX6110 (Inventec Davos DF) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVBoa2FlQmFVOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUQ4c2hsNm9acUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite a665.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUQ4c2hsNm9acUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHV0M09lZHVFd1k", "createdOn":"", "firstName":"toshiba Toshiba Satellite L630 L635 INTENTEC Bremen10R Rev X01 (2010 12 03).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHV0M09lZHVFd1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFRrNHdwNlVnTjA", "createdOn":"", "firstName":"hp  HP Pavilion DV2000 Intel 945 akita schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFRrNHdwNlVnTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDZSLVc3VXdQVnM", "createdOn":"", "firstName":"toshiba Toshiba Satellite P25 S526 (Compal LA 1841) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDZSLVc3VXdQVnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWtQZnVzbm93SDQ", "createdOn":"", "firstName":"hp  hp mini 110 Arima CP10 VIA RevA00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWtQZnVzbm93SDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDkzNGxYMXJPcGs", "createdOn":"", "firstName":"hp  hp omnibook xt6200 quanta rt6.0 rev a da0rt6mbae8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDkzNGxYMXJPcGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1JTMk9uY01aUWM", "createdOn":"", "firstName":"hp  HP Compaq Presario CQ35 Pavilion DV3 (Discrete) schematic LA 4731P Rhett discrete Montevina Consumer discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1JTMk9uY01aUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1Bub19ZSUpUTVk", "createdOn":"", "firstName":"hp  HP MINI a0nm3mb6e0 210 DDR2.unlocked.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1Bub19ZSUpUTVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnBRWWFmXzN3dlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite C660 (Compal LA 6842P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnBRWWFmXzN3dlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVdxb2g5X1lYMm8", "createdOn":"", "firstName":"toshiba Satellite NM520 Compal LA 6851P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVdxb2g5X1lYMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVJJQ0lvT3MwR0U", "createdOn":"", "firstName":"toshiba SATELLITE L300 L305 INVENTEC PS10S (6050A2170401 MB A03) bdae1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVJJQ0lvT3MwR0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0tkU095Nk5ER3c", "createdOn":"", "firstName":"toshiba TOSHIBA SATELLITE L750 (Quanta BLBD) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0tkU095Nk5ER3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazMyUlZmZHJMWWM", "createdOn":"", "firstName":"hp  Pavilion DV6 6000 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazMyUlZmZHJMWWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXl3cVJEZklwUUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A210 A215   COMPAL LA 3631P IALAA   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXl3cVJEZklwUUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUF0OXNVblJoWk0", "createdOn":"", "firstName":"toshiba Toshiba Satellite a200 la 3661.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUF0OXNVblJoWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2VjakJabHVidkE", "createdOn":"", "firstName":"hp  Quanta AT3U.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2VjakJabHVidkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0xsRGRCNWdlXzA", "createdOn":"", "firstName":"toshiba Toshiba c650 5299f Inventec MAS10AD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0xsRGRCNWdlXzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlZBdXJIU2xuWm8", "createdOn":"", "firstName":"hp  HP Compaq 2710p (Wistron Norn).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlZBdXJIU2xuWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFMyS2lLM0xySXM", "createdOn":"", "firstName":"toshiba Toshiba Satellite A215 6050a2127101.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFMyS2lLM0xySXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1hLMXZYS2RkOHc", "createdOn":"", "firstName":"hp  HP Pavilion DV6000 DV6500 DV6600 DV6700 (Intel) quanta at3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1hLMXZYS2RkOHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzNPTnVrVnVTR3M", "createdOn":"", "firstName":"toshiba Satellite C650 Manaus 10 CS BUILD (Inventec Berlin 10) 6184a Manaus 10 CS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzNPTnVrVnVTR3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUJnMk03WC1wdkU", "createdOn":"", "firstName":"toshiba Toshiba Satellite U400D   QUANTA BU2   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUJnMk03WC1wdkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1hzcHlkYWF3dDg", "createdOn":"", "firstName":"hp  HP Compaq CQ42 (Quanta AX1) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1hzcHlkYWF3dDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2VMU2VfQjRoNEk", "createdOn":"", "firstName":"hp  HP Compaq NX9040 (Quanta KT2) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2VMU2VfQjRoNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0lNd01Qd08xek0", "createdOn":"", "firstName":"hp  LAPTOP POWER SEQUENCE FINAL BY INTERSOT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0lNd01Qd08xek0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlExamJ3aEc2VXc", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ61 QUANTA OP6 OP7 Tango Ballet DA00P6MB6D0 0P6 0P7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlExamJ3aEc2VXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVFUVmZGbUNaUkE", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO NX6320 (Inventec DAVOS) laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVFUVmZGbUNaUkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTVNVkNOMnM1U3c", "createdOn":"", "firstName":"hp  hp pavilion g4 g6 g7 quanta r23 sabin rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTVNVkNOMnM1U3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVm5ZQnhUMHdxaVE", "createdOn":"", "firstName":"hp  HP Pavilion DV4 INTEL(DISCRETE).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVm5ZQnhUMHdxaVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjBPeWRIR043UkE", "createdOn":"", "firstName":"hp  hp pavilion dv3000 inventec diablo 13.3 rev ax1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjBPeWRIR043UkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGNjQk5ZZDN1bXc", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300D   QUANTA BD3G   REV 2ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGNjQk5ZZDN1bXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1pIQlhuaGdSZUk", "createdOn":"", "firstName":"hp  HP ProBook 4415s 4416s   INVENTEC PIAGET   6050A2268301   REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1pIQlhuaGdSZUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzJ2eHBLdG41UTg", "createdOn":"", "firstName":"hp  HP Pavilion DV4 INTEL(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzJ2eHBLdG41UTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlBNNS1uRkc3aGM", "createdOn":"", "firstName":"hp  HP Compaq 520 schematics (Compal LA 3491P).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlBNNS1uRkc3aGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3pjQU1IMExsMzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L750 L755 Quanta BLBD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3pjQU1IMExsMzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWdjRk9vNDFQdzA", "createdOn":"", "firstName":"toshiba Toshiba Satellite L630 L635 INTENTEC Bremen10R Rev X01 BM10 6050A2338402 MB A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWdjRk9vNDFQdzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXV5enBYeDVWeGs", "createdOn":"", "firstName":"toshiba scheme toshiba satelite l500 (la 5322p).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXV5enBYeDVWeGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWNUZG9ZY3VYTUE", "createdOn":"", "firstName":"hp  hp pavilion g6 g7 quanta r24 uma 6050A2450801 MB A02 rev 1a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWNUZG9ZY3VYTUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUdCQTNIODRGeFU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUdCQTNIODRGeFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOU5Ndk03R3NZUkE", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300 L305D   INVENTEC PS10AP   6050A2175001   REV X01 25FEV2008Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOU5Ndk03R3NZUkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnFmcWJzd0tPQjQ", "createdOn":"", "firstName":"toshiba toshiba satellite l500 compal la 4982p kswaaktwaa schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnFmcWJzd0tPQjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNU5zdnVqb2kyQTg", "createdOn":"", "firstName":"hp  INVENTEC VAIL 1.0 build SI2 Rev AX2 Info 6050A0052301 MB A03 PartNo. (SPS) 382688 001.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNU5zdnVqb2kyQTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFFmV3RBSElFOUU", "createdOn":"", "firstName":"hp  hp pavilion dv1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFFmV3RBSElFOUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzh2UUQ0Q3FUTG8", "createdOn":"", "firstName":"hp  V2000 POWER ON SEQUENCE STEP WISE FINAL NOTES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzh2UUQ0Q3FUTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlYxbm51bjB1M1k", "createdOn":"", "firstName":"hp  Presario 2200 QUANTA KT2 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlYxbm51bjB1M1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVMwN01xUkw1Sm8", "createdOn":"", "firstName":"hp  HP Compaq NX7000 HP Pavilion ZT3000 (Compal LA 1701) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVMwN01xUkw1Sm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMENSRW1hYmRRYm8", "createdOn":"", "firstName":"hp  HP Compaq 2133 (Inventec Galileo) laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMENSRW1hYmRRYm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDM3b3V3ek15a1k", "createdOn":"", "firstName":"hp  HP Compaq CQ50 AMD (Wistron Astrosphere) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDM3b3V3ek15a1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVBtLWh6VW9vSEU", "createdOn":"", "firstName":"toshiba Toshiba M70 352 rev10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVBtLWh6VW9vSEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHR0ekltRTRocHc", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500 COMPAL LA 4982P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHR0ekltRTRocHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid19uZDVObzdndHM", "createdOn":"", "firstName":"toshiba Toshiba Tecra m3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid19uZDVObzdndHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGY3VEpvVU1rcG8", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGY3VEpvVU1rcG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFlkZlJIX3NydXM", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFlkZlJIX3NydXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicE96Tlk5WTNYSWc", "createdOn":"", "firstName":"toshiba Toshiba Satellite L310 (Quanta TE1M) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicE96Tlk5WTNYSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzdGMVFUZzZTSU0", "createdOn":"", "firstName":"hp  scheme hp compaq 625 cq325 cq326 (inventec valima 2010 amd c2 uma vv10au2 6050a2346901 rev.a01).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzdGMVFUZzZTSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibE1NcUt2REt6ODA", "createdOn":"", "firstName":"toshiba satellite T110 T115 Quanta TL1 BU3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibE1NcUt2REt6ODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTlDT18tOGY1d0U", "createdOn":"", "firstName":"hp  Power Sequence (DC).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTlDT18tOGY1d0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFcxS2hxb2piMDA", "createdOn":"", "firstName":"toshiba Toshiba Satellite L200   Inventec Miami 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFcxS2hxb2piMDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFVZTGswd3lqdkU", "createdOn":"", "firstName":"hp  HP Pavilion DV4, Compaq Presario CQ40 AMD (Discrete) LA 4112P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFVZTGswd3lqdkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEVKaFlCd0VxQW8", "createdOn":"", "firstName":"toshiba Toshiba Satellite A200 A205 (Inventec MILWAUKEE 10) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEVKaFlCd0VxQW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVdjdkNhQzh2U28", "createdOn":"", "firstName":"toshiba Toshiba Satellite A135 S2686 Compal LA 3391P Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVdjdkNhQzh2U28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2NydGFhVUdKSDQ", "createdOn":"", "firstName":"toshiba Satellite C650D C655D L650D (Inventec Manaus 10AB 10ABG).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2NydGFhVUdKSDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0s0al9HejVnNmM", "createdOn":"", "firstName":"toshiba 19d46 Quanta TE4 (DAOTE4MB6D0)   Satellite L700 L740.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0s0al9HejVnNmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlZmWGFDaWFjUGc", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L40   REV 1.1   II com erros.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlZmWGFDaWFjUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkJHU2RPb05rdDA", "createdOn":"", "firstName":"toshiba Toshiba Satellite a300 a305 inventec potomac 10s pt10s rev x01 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkJHU2RPb05rdDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYk9iVGNzWTEtaW8", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L40   ASUS TERESA   REV 1.1.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYk9iVGNzWTEtaW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGxTQlJ1X1I5NVE", "createdOn":"", "firstName":"toshiba Toshiba Satellite A30 Compal LA 2051 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGxTQlJ1X1I5NVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGJ3UXJValNBUVE", "createdOn":"", "firstName":"toshiba c660 compal la 7202p r1 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGJ3UXJValNBUVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlBicGNCWmxHZVU", "createdOn":"", "firstName":"toshiba Toshiba Satellite 1100 Compal LA 1421 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlBicGNCWmxHZVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEoyc0VvSEJ5Y2s", "createdOn":"", "firstName":"toshiba C660D PWWBE f9c06 Compal LA 6849P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEoyc0VvSEJ5Y2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2pNVEt6LW11QzQ", "createdOn":"", "firstName":"hp  HP Pavilion DV4 AMD, Compaq Presario CQ40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2pNVEt6LW11QzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2NlQlphTHRFYUE", "createdOn":"", "firstName":"hp  HP 541 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2NlQlphTHRFYUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUxheGl0MzVXR00", "createdOn":"", "firstName":"toshiba Toshiba Satellite P10 Compal LA 2101 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUxheGl0MzVXR00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2N3VVkzalZiWjQ", "createdOn":"", "firstName":"hp  hp compaq presario 2100 nx9005 quanta kt3i rev 3d sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2N3VVkzalZiWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGxrd1B4bkp0Vk0", "createdOn":"", "firstName":"hp  HP Compaq NX6325 (Inventec TAOS) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGxrd1B4bkp0Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGh1YnF5Z1VzOE0", "createdOn":"", "firstName":"hp  HP pavilion DV9000   QUANTA CT6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGh1YnF5Z1VzOE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1ZBYmNtNDNjSTg", "createdOn":"", "firstName":"hp  HP OmniBook XE3 7113d LA 733B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1ZBYmNtNDNjSTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0hGYXFtMTRoNmc", "createdOn":"", "firstName":"toshiba Toshiba Satellite L600D P205D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0hGYXFtMTRoNmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSktIWHI0V1lsQkE", "createdOn":"", "firstName":"toshiba Toshiba P30 P35 la 2371.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSktIWHI0V1lsQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFNKNlhTRDN0ck0", "createdOn":"", "firstName":"hp  HP Compaq 4520S (Quanta GC9A) ​​Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFNKNlhTRDN0ck0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnhVMnpIdFUyaU0", "createdOn":"", "firstName":"toshiba Satellite A500 Bradford 10AT KSWAA LA 4981P REV1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnhVMnpIdFUyaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRi1lYU5fei1DRDA", "createdOn":"", "firstName":"toshiba Toshiba Satellite M45 (Inventec SAN ANTONIO 10) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRi1lYU5fei1DRDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3RKYUpieFpaRXc", "createdOn":"", "firstName":"toshiba toshiba L650 INVENTEC BL10G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3RKYUpieFpaRXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQl9saUhYNDFsMmc", "createdOn":"", "firstName":"hp  hp pavilion dv1000 [ET].pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQl9saUhYNDFsMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQW5hNVByOWRDTjQ", "createdOn":"", "firstName":"toshiba Satellite L700 (Quanta TE5) df2e1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQW5hNVByOWRDTjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1BZd0VtUUtNV28", "createdOn":"", "firstName":"hp  HP Compaq 320 (GM45, 15 ) schematic Villemont Intel UMA schematic 1310A23646 0 MTR Villemont 2010 (Intel Montevina DIS) DDR3 MV Build (A01).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1BZd0VtUUtNV28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUV3eENuRHYzTDA", "createdOn":"", "firstName":"hp  Pavilion dv2000 Compaq V3000 WISTRON AKITA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUV3eENuRHYzTDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnhxaFRhMGFmNlE", "createdOn":"", "firstName":"hp  Power Sequence (AC).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnhxaFRhMGFmNlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNm11WmItWFNZdHM", "createdOn":"", "firstName":"toshiba Toshiba Satellite A200 A205 (Compal LA 3661P) Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNm11WmItWFNZdHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXJGTzYyaW9BcE0", "createdOn":"", "firstName":"toshiba Toshiba Satellite L655 L750 L755 Quanta BLB DA0BLGMB6D0 7a061.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXJGTzYyaW9BcE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHdqdWJMT1dwQjA", "createdOn":"", "firstName":"hp  hp pavilion g4 g6 g7 quanta r22 rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHdqdWJMT1dwQjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHdFUXNXWFdjem8", "createdOn":"", "firstName":"hp  HP ProBook 4510s (pn FN068UT) Laptop Motherboard Schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHdFUXNXWFdjem8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzM3ZkpPdWFSTDQ", "createdOn":"", "firstName":"toshiba Toshiba L755D 21J Quanta BLF BLFD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzM3ZkpPdWFSTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkdzMUdwQ3JPekE", "createdOn":"", "firstName":"toshiba Toshiba Satellite 1130 1135 Compal LA 1641 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkdzMUdwQ3JPekE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0FhYV9EMUxpYnc", "createdOn":"", "firstName":"toshiba Toshiba c650d 5299f Inventec MAS10AD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0FhYV9EMUxpYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM05MQ2djbzIwcE0", "createdOn":"", "firstName":"toshiba Inventec PT10g POTOMAC 10g 6050a2171501 rev a01 a300 a305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM05MQ2djbzIwcE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWc1emF5UURZYmc", "createdOn":"", "firstName":"toshiba Toshiba Satellite A60 A65 (Inventec OSAKA 30) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWc1emF5UURZYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU1oZWJVdzh1ZkU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A505 S6025 (Quanta TW3A) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU1oZWJVdzh1ZkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTZXRVZlVG5wc1E", "createdOn":"", "firstName":"toshiba Toshiba NB510 NB515 DOLPHIN10 6050A2488301 MB A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTZXRVZlVG5wc1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXNpaXY2aVRxdGc", "createdOn":"", "firstName":"toshiba Toshiba NB200 NB205 (Compal LA 5121) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXNpaXY2aVRxdGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWpCSXJrclFtMkE", "createdOn":"", "firstName":"toshiba Satellite L730 (Quanta BU5D) 1f040.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWpCSXJrclFtMkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTNHcmJ2OV9ObVk", "createdOn":"", "firstName":"hp  hp compaq cq320 321 inventec villemont 2010 intel uma rev a02 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTNHcmJ2OV9ObVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzNMbTVCNW9KbzA", "createdOn":"", "firstName":"hp  hp probook 4524s 4525s wistron patek pv1 dis rev pv 01 sa sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzNMbTVCNW9KbzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2s1aWZwRDlHdms", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L40 (ASUS TERESA) Laptop Schematic.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2s1aWZwRDlHdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0IyY2MzUnlQMGM", "createdOn":"", "firstName":"hp  HP Compaq 6720s LaptopComputer MnSG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0IyY2MzUnlQMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmNMVnlUaDhhWDA", "createdOn":"", "firstName":"hp  hp pavilion dv6 intel Quanta UT3 UT5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmNMVnlUaDhhWDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUM1YWlSYXh1cGM", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUM1YWlSYXh1cGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFFSSW1TSlFjdEU", "createdOn":"", "firstName":"hp  Pavilion DV6 6000 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFFSSW1TSlFjdEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0RLT3VlVFIxSE0", "createdOn":"", "firstName":"toshiba Toshiba Satellite A30 (Compal LA 2051) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0RLT3VlVFIxSE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnQzUFFPaTZYejg", "createdOn":"", "firstName":"toshiba Toshiba L640 Quanta TE2 DA0TE2MB6F0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnQzUFFPaTZYejg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmhETmFaRjl3UEU", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A505 Quanta TW3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmhETmFaRjl3UEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFRzOVozbG1ya3c", "createdOn":"", "firstName":"hp  HP Compaq Presario CQ45 (Wistron Vitas) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFRzOVozbG1ya3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU9ZSUVBOWdzbDA", "createdOn":"", "firstName":"toshiba Toshiba Satellite M100 COMPAL LA 3141   REV 0.3Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU9ZSUVBOWdzbDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWll3WjBPQWlyY2c", "createdOn":"", "firstName":"toshiba Toshiba Satellite A135 S2686   COMPAL LA 3391P IAYAA   REV 0.3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWll3WjBPQWlyY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHZnRzExQmVwWTg", "createdOn":"", "firstName":"toshiba toshiba satellite c850 c855 inventec dakar10f .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHZnRzExQmVwWTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVU9zWHBwa3FwSFk", "createdOn":"", "firstName":"hp  HP Mini 311, HP Pavilion DM1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVU9zWHBwa3FwSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFBCQWZudUJZYWM", "createdOn":"", "firstName":"hp  HP Compaq 320 (GM45, 13 14) schematic Villemont Intel UMA 1310A23446 0 MTR Villemont 2010 (Intel Montevina UMA) DDR3 MV Build (A02).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFBCQWZudUJZYWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVExHWEJKZUVXaFE", "createdOn":"", "firstName":"hp  HP Pavilion dv2000 Notebook PC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVExHWEJKZUVXaFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3VMMGF3RVpKNVk", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite L450D COMPAL LA 5831P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3VMMGF3RVpKNVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1V1V3F3MFJGZFk", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L300 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1V1V3F3MFJGZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWRzelN1VGNtOGs", "createdOn":"", "firstName":"hp  HP Compaq NC6220 (Inventec ASPEN DIS PV) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWRzelN1VGNtOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0c2Q3NyckVSdHc", "createdOn":"", "firstName":"hp  HP Compaq nc6120nx6120 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0c2Q3NyckVSdHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0V4SzduUTBxcDQ", "createdOn":"", "firstName":"hp  HP Compaq 6535S 6735S AMD (Inventec Prince Pearl) laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0V4SzduUTBxcDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHY2dURySGpodjA", "createdOn":"", "firstName":"toshiba Toshiba Satellite A110 Compal LA 3171P Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHY2dURySGpodjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFBnQkJBNnRtOGs", "createdOn":"", "firstName":"hp  HP Compaq Presario C300 (Compal LA 3342P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFBnQkJBNnRtOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE5WR2RUZXF3azg", "createdOn":"", "firstName":"toshiba Toshiba Satellite M100 (Compal LA 3141) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE5WR2RUZXF3azg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1NsMkdINHE0cHc", "createdOn":"", "firstName":"hp  HP Compaq CQ40 AMD (Compal LA 4111P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1NsMkdINHE0cHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR01aR2I1YmZuU1E", "createdOn":"", "firstName":"toshiba Toshiba Satellite A200 INVENTEC MILWAUKEE 10 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR01aR2I1YmZuU1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQV9TODZLTWVqdWs", "createdOn":"", "firstName":"hp  HP MINI a0nm3mb6e0 210 DDR3.unlocked.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQV9TODZLTWVqdWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEhwdjk1Q0xISlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite P10 (Compal LA 2101) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEhwdjk1Q0xISlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGFSaXNpVG96QUk", "createdOn":"", "firstName":"hp  HP Pavilion DX6600 QUANTA AT3U.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGFSaXNpVG96QUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGEydEMxM1A2bjA", "createdOn":"", "firstName":"hp  hp pavilion 14b065br 14b050 quanta da0u33mb6d0 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGEydEMxM1A2bjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1czSkF0ekdpUkk", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300D (Quanta BD3G) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1czSkF0ekdpUkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnNXZTR5OVc2S1k", "createdOn":"", "firstName":"toshiba Toshiba satellite a300   inventec potomac 10s pt10s   6050a2169401 mb a02   rev x01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnNXZTR5OVc2S1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWItNnRNZzNqeG8", "createdOn":"", "firstName":"hp  Quanta AT8 AT9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWItNnRNZzNqeG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEpCVEkxSkNLRk0", "createdOn":"", "firstName":"hp  HP Compaq Presario C500 (Compal LA 3341P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEpCVEkxSkNLRk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUJ2dW5GUlVVTUk", "createdOn":"", "firstName":"hp  hp probook 4411s 4510s inventec invicta cycle1 rev a03 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUJ2dW5GUlVVTUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWFqZzNrX1Z4YWs", "createdOn":"", "firstName":"toshiba Toshiba Satellite T110 Quanta BU3 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWFqZzNrX1Z4YWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEJhaDZjOV9DVnc", "createdOn":"", "firstName":"hp  HP Compaq 540 6520s 6720s schematics (Inventec DDD UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEJhaDZjOV9DVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib042M0JHZVhvN1U", "createdOn":"", "firstName":"toshiba P875 GL10FG 6050A2492401 MB 20110831.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib042M0JHZVhvN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0pCOWJlVVhBSzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L700 QUANTA TE5D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0pCOWJlVVhBSzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjZkLVpNaEM2Nk0", "createdOn":"", "firstName":"hp  quanta jm2 jm3 training.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjZkLVpNaEM2Nk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmNRNWNLTFZIVjg", "createdOn":"", "firstName":"toshiba Toshiba L300 INVENTEC PS10 6050A2264901 MB A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmNRNWNLTFZIVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHFMOUJlYXFJVm8", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L450   COMPAL LA 5821P   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHFMOUJlYXFJVm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmlUR0Q0cFVxTDQ", "createdOn":"", "firstName":"hp  hp g4 g6 amd dis quanta r53 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmlUR0Q0cFVxTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTB3S0REZkNNT1U", "createdOn":"", "firstName":"toshiba Toshiba M100   COMPAL LA 3011.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTB3S0REZkNNT1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS05lcDNjVmdRbUE", "createdOn":"", "firstName":"toshiba Toshiba Satellite A210 A215 (AMD).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS05lcDNjVmdRbUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlJGcHdKeUdLM3M", "createdOn":"", "firstName":"toshiba L750 14h DA0BLEMB6E0 Quanta BLE BLED.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlJGcHdKeUdLM3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNThRSnJkem1XSlU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A665   compal la 6062p nwqaa   rev 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNThRSnJkem1XSlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieW41OFVPNDdHXzQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite L510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieW41OFVPNDdHXzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieV9zV29EY3pkQ00", "createdOn":"", "firstName":"hp  Quanta AT1 AT2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieV9zV29EY3pkQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFJJbUUzdTBwZU0", "createdOn":"", "firstName":"toshiba Toshiba Satellite L10 Quanta EW3 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFJJbUUzdTBwZU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEJIYjZGYkdnQVE", "createdOn":"", "firstName":"toshiba Toshiba Satellite A215 AMD (Inventec Milwaukee 10A) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEJIYjZGYkdnQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieE9seGY3dXRzaTA", "createdOn":"", "firstName":"hp  hp pavilion hdx18 quanta ut7d rev 3a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieE9seGY3dXRzaTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidm1fVndZbEVYZ00", "createdOn":"", "firstName":"toshiba Toshiba Satellite M35 Compal LA 2461.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidm1fVndZbEVYZ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDJmcTYyV3VFbFk", "createdOn":"", "firstName":"hp  HP Mini 210 Quanta NM6 Annika DANM6AMB6G0 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDJmcTYyV3VFbFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczNGcWVsLUFVOFk", "createdOn":"", "firstName":"hp  HP Compaq CQ515 (Inventec VOLNA AMD UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczNGcWVsLUFVOFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjBRYUFaZ1ZUY1E", "createdOn":"", "firstName":"toshiba Toshiba N500 N520 (Compal LA 6858P).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjBRYUFaZ1ZUY1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXlVbE1ZZktWWVU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXlVbE1ZZktWWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblRrTUFfMU1jU1k", "createdOn":"", "firstName":"toshiba Satelite P200D 8b839 Compal LA 3831P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblRrTUFfMU1jU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUN4SHhtSm1nTEk", "createdOn":"", "firstName":"hp  HP PROBOOK 4510S Inventec Zenith UMA DDR3 6050A2297401.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUN4SHhtSm1nTEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFh1eFRfNjI2VEU", "createdOn":"", "firstName":"toshiba Toshiba C650d c600 l630 INVENTEC MANAUS 10 CS BUILD REV AX1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFh1eFRfNjI2VEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2NZQ0RHWnk5VzQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite L650 BERLIN 10G  BL10G  power.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2NZQ0RHWnk5VzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajVXNl9iUlhnekk", "createdOn":"", "firstName":"hp  hp pavilion hdx quanta ut7 rev e3a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajVXNl9iUlhnekk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWlPeHFGdnRPNms", "createdOn":"", "firstName":"toshiba Toshiba Satellite a30 la 1931 dbl10 sapporo X.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWlPeHFGdnRPNms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEJobUUzMWJOSU0", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEJobUUzMWJOSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaE54dFlKTHgyM00", "createdOn":"", "firstName":"hp  hp pavilion DV2000 intel 945akita.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaE54dFlKTHgyM00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzBOaXpfNjFXTEE", "createdOn":"", "firstName":"toshiba Satellite A60 A65 INVENTEC OSAKA 30 6050A0059801 MB A07 TC7778 MB 44A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzBOaXpfNjFXTEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXZtUl8tUWc3U00", "createdOn":"", "firstName":"toshiba Toshiba Satellite A60 A65 INVENTEC OSAKA 30 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXZtUl8tUWc3U00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGFUdUdBQ1E3aVE", "createdOn":"", "firstName":"hp  HP pavilion dv4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGFUdUdBQ1E3aVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3NRazlPSlN5akk", "createdOn":"", "firstName":"hp  NX5000 CRYSTAL 1.0 PV R.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3NRazlPSlN5akk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnlKNHZCTFRyVUk", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C300   COMPAL LA 3342P IBL30   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnlKNHZCTFRyVUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmFQNWhZT0ZwcWc", "createdOn":"", "firstName":"toshiba L500 KSWAA KTWAA LA 4982P LA 4981P .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmFQNWhZT0ZwcWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWllGalFHUll0QTg", "createdOn":"", "firstName":"hp  hp.compaq.mini.110.inventec.BIXBY.6050A2262301 MB A03.rev.1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWllGalFHUll0QTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3hCaGpkcVIzalk", "createdOn":"", "firstName":"hp  Quanta AT3 AT4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3hCaGpkcVIzalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGdpeVJiZUctT3M", "createdOn":"", "firstName":"toshiba Toshiba Satellite A665 (Compal LA 6062p) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGdpeVJiZUctT3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2xvYWZpVjZMWVE", "createdOn":"", "firstName":"toshiba Toshiba Satellite M50 Compal LA 2861.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2xvYWZpVjZMWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0Q3M1pLQWJKXzA", "createdOn":"", "firstName":"toshiba Toshiba Satellite A100 A105 (Inventec San Antonio) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0Q3M1pLQWJKXzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVNIV0p3M2x6VFU", "createdOn":"", "firstName":"toshiba l745 df2e1 TE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVNIV0p3M2x6VFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNtRGVlaFZxM2c", "createdOn":"", "firstName":"toshiba Toshiba Satellite C660 Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNtRGVlaFZxM2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTYxdWtxMzRHWVE", "createdOn":"", "firstName":"hp  HP PAVILION G4 R13 UMA DIS .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTYxdWtxMzRHWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTFaS2FPWjkwWEE", "createdOn":"", "firstName":"toshiba Toshiba Satellite T210   COMPAL LA 6031P NDU00   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTFaS2FPWjkwWEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnA3a2xpQmFaWkE", "createdOn":"", "firstName":"hp  HP 510 511 Inventec Vulcain discrete laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnA3a2xpQmFaWkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWdaSnZ4bTlYazA", "createdOn":"", "firstName":"toshiba Toshiba Satellite P20 (Compal LA 2041) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWdaSnZ4bTlYazA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDhVTEo2M0hmZGM", "createdOn":"", "firstName":"hp  KF14CHR 6050A2493101 MB X01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDhVTEo2M0hmZGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjJXSF9HWk5nMFE", "createdOn":"", "firstName":"toshiba AM4825P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjJXSF9HWk5nMFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXNEaU04b3lhWE0", "createdOn":"", "firstName":"toshiba Satellite C650 655 D Inventec Manaus 10R 56e92.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXNEaU04b3lhWE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQU5LM3dRelQ3NG8", "createdOn":"", "firstName":"hp  HP Compaq Mini 700 (Inventec HARBOUR) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQU5LM3dRelQ3NG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzhoUTl6N01ndmM", "createdOn":"", "firstName":"hp  hp compaq presario cq60 cq70 hp g50 g60 g60t wistron warrior 91.4H501.001.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzhoUTl6N01ndmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzAzb3JfT1lGRDQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite 1130 1135 (Compal LA 1641) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzAzb3JfT1lGRDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHNEaFdNMmFiUXM", "createdOn":"", "firstName":"toshiba Satellite C640 PSC02G 01400G. 6050A2357502 MB A02 TI.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHNEaFdNMmFiUXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFFSZkRlVWJNaTg", "createdOn":"", "firstName":"hp  HP Pavilion DV1000 DV4000 ZE2000 Compaq M2000 (Quanta CT3) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFFSZkRlVWJNaTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2VSX1RGNnNkTUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L450D   COMPAL LA 5831P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2VSX1RGNnNkTUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN29VOFU3T3N5Xzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300D (Inventec Phoenix Sacramento 10A) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN29VOFU3T3N5Xzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0l2UzlWeU1VYkU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A135 S2686 (Compal LA 3391P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0l2UzlWeU1VYkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3JqWnExaHVqa2c", "createdOn":"", "firstName":"toshiba Satellite a350 KTKAA Los Angeles 10 10G LA 4571P REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3JqWnExaHVqa2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3A2aDlUMGViZmc", "createdOn":"", "firstName":"hp  HP Pavilion DV4 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3A2aDlUMGViZmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1RZU3Y4YXotNE0", "createdOn":"", "firstName":"hp  HP Compaq 6520s 6525s, HP 540, HP 541 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1RZU3Y4YXotNE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUdVQ3M3Z3JyTTQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite L700 QUANTA TE5D DATE5DMB8F0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUdVQ3M3Z3JyTTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekNfMXVwT1ZsaU0", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Processor Clamp 863.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekNfMXVwT1ZsaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTFKaGE4bUVmTms", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Hard Drive 26.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTFKaGE4bUVmTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkNhUGlDUUN0ZVU", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Teardown 598.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkNhUGlDUUN0ZVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidW15Wkl2TXB5T1k", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Speaker Replacement 866.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidW15Wkl2TXB5T1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicl9kZWlBbTIxV3M", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Sound Card 54.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicl9kZWlBbTIxV3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzBmajZMR2ZIN0U", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Framework 53.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzBmajZMR2ZIN0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianR6dzNqY1haOHc", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Framework 34.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianR6dzNqY1haOHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWYxN1NZLWlkbjg", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Hard Drive Replacement 47.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWYxN1NZLWlkbjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTUtS18wekhmQ1E", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing DC In Board 94.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTUtS18wekhmQ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlhxU1JiTEVUN1k", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Optical Drive 39.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlhxU1JiTEVUN1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjh1am4zMTg3RkU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Keyboard 72.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjh1am4zMTg3RkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjJBXzQteWFLcTA", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Hard Drive Replacement 90.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjJBXzQteWFLcTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGlYR0VyN09JSFk", "createdOn":"", "firstName":"apple MacBook Pro (15 inch 2.53 GHz Mid 2009) mbp15 253 mid09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGlYR0VyN09JSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkFGdWtidUd2SFk", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing RAM 86.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkFGdWtidUd2SFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3ZqNk9Sc2EtczA", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Hard Drive 859.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3ZqNk9Sc2EtczA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWG96U09KTGZjOUE", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Lower Case 87.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWG96U09KTGZjOUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFo0MFk5eFNJa2s", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Fan 15.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFo0MFk5eFNJa2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFhteVJmQkRCNEk", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Modem 65.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFhteVJmQkRCNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWENuU25COHBXYmc", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Audio Cable 861.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWENuU25COHBXYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDVkeDBqS0g5SjA", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Keyboard 85.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDVkeDBqS0g5SjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlIyMklKWWJhVjg", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI G4 Ti DVI Screw Guide uki2UanF1WXFRdjG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlIyMklKWWJhVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGh3MGhUaTFWS00", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Battery 848.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGh3MGhUaTFWS00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEJLV0EtalNGWjA", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Upper Case 622.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEJLV0EtalNGWjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3RYWVhhcHBTVDA", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Upper Case 84.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3RYWVhhcHBTVDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGk3NVZhU0szS2s", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Inverter Board 70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGk3NVZhU0szS2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGR0bjR0Q1NITVU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Hard Drive Replacement 77.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGR0bjR0Q1NITVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3pVRE1mNmcwcVU", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Hard Drive 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3pVRE1mNmcwcVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3FFWnJ1ZzBpdXc", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing RAM 45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3FFWnJ1ZzBpdXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXdVbmFha2FJX0k", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Airport Card 61.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXdVbmFha2FJX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRW14SW9uVUhZNEk", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing DC Sound Card 14.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRW14SW9uVUhZNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDVDcFBFQ1BEdXc", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Modem 43.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDVDcFBFQ1BEdXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0gwVy1EMmQwVFE", "createdOn":"", "firstName":"apple MacBook Air (11 inch Late 2010) mba 11 late2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0gwVy1EMmQwVFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkF6djdWVHo0T1E", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Clutch Cover 8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkF6djdWVHo0T1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2VmajJ5ekV4UE0", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Heat Shield 41.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2VmajJ5ekV4UE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0JjVkxZNXVZWlk", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing PC Card Cage 68.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0JjVkxZNXVZWlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1lxWV91UW9sSjQ", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Logic Board 854.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1lxWV91UW9sSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMm16YjkzZzRpSGs", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing PMU 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMm16YjkzZzRpSGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGZkTU5PbUtxUXM", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Power Card 52.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGZkTU5PbUtxUXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem5qVi1mN01TMkU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Inverter 93.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem5qVi1mN01TMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielBtMFh4YjU0UWc", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Hard Drive Replacement 4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielBtMFh4YjU0UWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzNHOU8zZDlMN0k", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Inverter Board 83.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzNHOU8zZDlMN0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidm1mZ2dkMUdzQU0", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Port Hatch Assembly 851.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidm1mZ2dkMUdzQU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3hCa0xhVmVBRnM", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Latch 101.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3hCa0xhVmVBRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2hQWWFwSzJKSjQ", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Logic Board Bracket 865.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2hQWWFwSzJKSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmd5MmNaOVp1Q28", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing PC Card Cage 37.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmd5MmNaOVp1Q28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicW1mR2xMam5ISWM", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Display 69.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicW1mR2xMam5ISWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2lrRE1tc215Zzg", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Power Card 13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2lrRE1tc215Zzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXlZWUtZR3pGbzg", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Heat Shield 19.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXlZWUtZR3pGbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVNEbHhCTkZVLTA", "createdOn":"", "firstName":"apple MacBook Pro (15 inch Mid 2009) mbp15 mid09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVNEbHhCTkZVLTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUcxU3FPQ0VIUTQ", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Hard Drive 62.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUcxU3FPQ0VIUTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiangybDhZQ0lZbk0", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Upper Case 31.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiangybDhZQ0lZbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHA4T2NnQXdWUmM", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Airport Card 88.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHA4T2NnQXdWUmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFpjQ09LeDJOcEk", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet G3 Wallstreet Screw Guide uMByVeMRY2vUPNFv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFpjQ09LeDJOcEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaENoNzVvLUpGM28", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing PRAM Battery 102.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaENoNzVvLUpGM28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0ZKajdQZDR5TDA", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Lower Case 847.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0ZKajdQZDR5TDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkRhQkpvZVpiams", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing PC Card Cage 56.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkRhQkpvZVpiams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWZNUkdiVTdQTWs", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Clutch Cover 48.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWZNUkdiVTdQTWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEs0dms4eW5uX0k", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Fan 858.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEs0dms4eW5uX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkxfaDZvakhiNW8", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Power Card 13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkxfaDZvakhiNW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYW8yRHJtMHNIMzQ", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Hard Drive 89.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYW8yRHJtMHNIMzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2JuUlZDdGVKNFE", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing PC Card Cage 81.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2JuUlZDdGVKNFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2Z2OWl4Y01qSVk", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Inverter 49.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2Z2OWl4Y01qSVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEpLazMtZFdwZlU", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Keyboard 40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEpLazMtZFdwZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHdiVUdDV2Qxcms", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing PRAM Battery 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHdiVUdDV2Qxcms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUW9tVGdPdmFhTUE", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing PRAM Battery 42.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUW9tVGdPdmFhTUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVJnYl9jTkRpUGM", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Lower Case 57.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVJnYl9jTkRpUGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUV2eDNfelVsLWM", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Audio Board Replacement 857.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUV2eDNfelVsLWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHYxLU1iUDZEd2M", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Display 9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHYxLU1iUDZEd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHJGUkNoVk0tWjA", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing PRAM Battery 21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHJGUkNoVk0tWjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTjNBVTlqSE9mbUk", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury G4 Ti Mercury Screw Guide YnRVsvZWcruuxhw4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTjNBVTlqSE9mbUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1lmbGIzVzZaSTQ", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Power Card 32.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1lmbGIzVzZaSTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjBTczMybVdDWWs", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Optical Drive Removal 91.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjBTczMybVdDWWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRk8zNjJaWDNwRVU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Hard Drive Replacement 63.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRk8zNjJaWDNwRVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXdCMkJfdEd6RWs", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Lower Case 60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXdCMkJfdEd6RWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUdVQXdVajZfTHc", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Display 30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUdVQXdVajZfTHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQU4zWDhubmhYUkU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Upper Case 71.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQU4zWDhubmhYUkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEZxTTVqUldjQzg", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing RAM 73.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEZxTTVqUldjQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODhoVXZFb1pLRnc", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Heat Sink 853.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODhoVXZFb1pLRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzhlYU01OHVEUkU", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing AirPortBluetooth Bracket 864.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzhlYU01OHVEUkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlNWQ2piUm5icDA", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Trackpad Control Cable 862.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlNWQ2piUm5icDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFdxUnRKa0RBZW8", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Clutch Cover 28.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFdxUnRKa0RBZW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFV1OVBlMjh5UWM", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing PMU 66.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFV1OVBlMjh5UWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDZZbDc3bGZWb3M", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Battery 628.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDZZbDc3bGZWb3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXYxWnBMTTB5c2s", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Lower Case 38.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXYxWnBMTTB5c2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXBoVnFqZjAwTkU", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Processor 44.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXBoVnFqZjAwTkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG50U3ZUMEQ5VkU", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing AirPortBluetooth Board 849.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG50U3ZUMEQ5VkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVlLaUU0V0dLNU0", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Display Assembly 855.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVlLaUU0V0dLNU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUhMQm9RSEU1RWM", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Processor 23.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUhMQm9RSEU1RWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXFmMGktU3VvNFU", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing DC In Board 852.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXFmMGktU3VvNFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWpjZlh1bjN2Z0k", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Logic Board 36.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWpjZlh1bjN2Z0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGJ6cFBiVGdKY1U", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing DVD Drive 64.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGJ6cFBiVGdKY1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHl2ZzBsZk1wUmc", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Modem 79.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHl2ZzBsZk1wUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTNKVEhyTFlFY28", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Airport Card 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTNKVEhyTFlFY28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibE84ZjVLRUNPUUk", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Upper Case 856.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibE84ZjVLRUNPUUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVJwTERRRnpCTms", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing PC Card Cage 97.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVJwTERRRnpCTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmo5UnFhV1RZNGc", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing RAM 24.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmo5UnFhV1RZNGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFVtNHRQTkRHcms", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing DVD Drive 78.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFVtNHRQTkRHcms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTJRanI1dndNRm8", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Modem 25.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTJRanI1dndNRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnZRSm0xX0I3eDA", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Display 50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnZRSm0xX0I3eDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkdRdXhxa1NkQ3M", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Logic Board 67.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkdRdXhxa1NkQ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUtGdFVjYzlJVWc", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Speaker 850.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUtGdFVjYzlJVWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGZER1J2ZVNpS1U", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Hard Drive Replacement 27.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGZER1J2ZVNpS1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGN3NHlRRG5kdFk", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Modem 43.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGN3NHlRRG5kdFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0EzcEFTY2pYVkU", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Heat Sink 22.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0EzcEFTY2pYVkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzBZZ3o5dkxudk0", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Heat Shield 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzBZZ3o5dkxudk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnAyeFkwclNBSlk", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Inverter 29.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnAyeFkwclNBSlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXhSMGgwZTlkZ0k", "createdOn":"", "firstName":"apple PowerBook G3 Pismo G3 Pismo Screw Guide jpmgwC6ALo6WJLwf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXhSMGgwZTlkZ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGRtS0dqcVlHY00", "createdOn":"", "firstName":"apple PowerBook G3 Lombard G3 Lombard Screw Guide oOUEIM2LfonHMS6J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGRtS0dqcVlHY00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVNKMlRiY0pMWm8", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Processor 5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVNKMlRiY0pMWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHVVX2xTZEY3Wmc", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing RAM 59.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHVVX2xTZEY3Wmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTG9LUXprLWJpa00", "createdOn":"", "firstName":"apple MacBook Air (13 inch Late 2010) mba 13 late2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTG9LUXprLWJpa00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjRpWk5UM3VRS2c", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Sound Card 35.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjRpWk5UM3VRS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVZ6ZmtHRXZueGc", "createdOn":"", "firstName":"apple MacBook (13 inch Mid 2010) mb13 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVZ6ZmtHRXZueGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHRFcWZSUE9aMlE", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Modem 92.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHRFcWZSUE9aMlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFg2YkNTUVhRN2M", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Upper Case 51.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFg2YkNTUVhRN2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2dsLUFOUVhLTEE", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Heat Sink Replacement 867.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2dsLUFOUVhLTEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2Y0TlljTlN0Tzg", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Keyboard 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2Y0TlljTlN0Tzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzA1UVg0eTBXN2c", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Logic Board 55.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzA1UVg0eTBXN2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRjQzeTJwSExvSnc", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Airport Card 75.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRjQzeTJwSExvSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1d2VFpneTNMbms", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing Keyboard 18.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1d2VFpneTNMbms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkpaT3h6X1hyazA", "createdOn":"", "firstName":"apple MacBook Pro (15 inch Mid 2010) mbp15 mid2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkpaT3h6X1hyazA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkhUQmhNVEhJZEk", "createdOn":"", "firstName":"apple PowerBook G3 Lombard Installing Hard Drive 46.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkhUQmhNVEhJZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWQ2MENHZFBscGM", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Hard Drive 76.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWQ2MENHZFBscGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGxkWm1rdzJKN3c", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Logic Board 96.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGxkWm1rdzJKN3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEYwYUVWeWJhN28", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Logic Board 16.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEYwYUVWeWJhN28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXhneU5fODR4LWs", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing PC Card Cage 17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXhneU5fODR4LWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUhJZHI4N1ltM2c", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Fan 98.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUhJZHI4N1ltM2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNS1XSndaTzV2QlE", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Upper Case 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNS1XSndaTzV2QlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGlwVElYem9XQkE", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Optical Drive 100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGlwVElYem9XQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3NFS0k1aW9OeE0", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Mercury Installing Keyboard 58.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3NFS0k1aW9OeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnNIVVNVMHphYUU", "createdOn":"", "firstName":"apple MacBook Air Models A1237 and A1304 Installing Hard Drive Replacement 860.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnNIVVNVMHphYUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk5qeVBLWjc0THc", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Logic Board 80.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk5qeVBLWjc0THc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXpleTBYbWg3WTQ", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Lower Case 74.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXpleTBYbWg3WTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGczTlZySENUNWs", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing RAM 6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGczTlZySENUNWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEdlM0FSZWl5SU0", "createdOn":"", "firstName":"apple PowerBook G3 Pismo Installing IO EMI Shield 33.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEdlM0FSZWl5SU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMENHbXg0OGFQTG8", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Display 99.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMENHbXg0OGFQTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUxETU9qRG14MUU", "createdOn":"", "firstName":"apple PowerBook G4 Titanium DVI Installing Modem Filter Board 95.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUxETU9qRG14MUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUs4ZWdEbzRIdlk", "createdOn":"", "firstName":"apple PowerBook G3 Wallstreet Installing Modem 7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUs4ZWdEbzRIdlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiendVekRyZjJYejA", "createdOn":"", "firstName":"dell Inspiron 1545 (Roberts) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiendVekRyZjJYejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTRZWTNYNGd0TkE", "createdOn":"", "firstName":"dell XPS M1530 Intel Discrete Wistron Hawke laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTRZWTNYNGd0TkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFN5SlA5TG1TOFk", "createdOn":"", "firstName":"hp  HP DV6DV7 (AMD Discrete) schematic UT12 Discrete UT1UT2 (Discrete) Motherboard schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFN5SlA5TG1TOFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidURpZi1YamRYdGs", "createdOn":"", "firstName":"dell Inspiron N4010 (Quanta discrete UM8B) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidURpZi1YamRYdGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidE43MUNYOHNwVTQ", "createdOn":"", "firstName":"asus T76S schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidE43MUNYOHNwVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1dSM1VfUW5oLWc", "createdOn":"", "firstName":"dell Inspiron 1440 (Alba Discrete) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1dSM1VfUW5oLWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0xIS2pnYThCdUE", "createdOn":"", "firstName":"dell Latitude D630 (Compal LA 3302P discrete) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0xIS2pnYThCdUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTNHOVZvQlpucEU", "createdOn":"", "firstName":"dell XPS M1710 (Compal LA 2881P) laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTNHOVZvQlpucEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2ZNcXFxVkYtWmc", "createdOn":"", "firstName":"asus F5N laptop F5U schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2ZNcXFxVkYtWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1U5M252QVJveE0", "createdOn":"", "firstName":"asus F80S F81S Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1U5M252QVJveE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnpYWDVBUVpjZjA", "createdOn":"", "firstName":"hp  HP Pavilion DV 4 HP Compaq CQ40 AMD (Compal LA 4112p) Laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnpYWDVBUVpjZjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHhzQm5WLVZHb1k", "createdOn":"", "firstName":"dell Inspiron 1464 1564 1764 (Dis) schematic, UM3UM6B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHhzQm5WLVZHb1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWtsR2JhYmNtaEk", "createdOn":"", "firstName":"hp  HP Pavilion DV6700 Intel (Quanta AT3) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWtsR2JhYmNtaEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWk42dDRIeDVxdXc", "createdOn":"", "firstName":"dell Inspiron 6000 COMPAL LA 2151 TOBAGO REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWk42dDRIeDVxdXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUi1FTWN2QmJCU1k", "createdOn":"", "firstName":"dell Vostro 1200 (Compal LA 3821P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUi1FTWN2QmJCU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1I2c3Z2Vkc2QnM", "createdOn":"", "firstName":"asus A8T M schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1I2c3Z2Vkc2QnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSk9mekVkQUNodG8", "createdOn":"", "firstName":"hp  HP ProBook 4311s laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSk9mekVkQUNodG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHg1N19VTFQ4U1U", "createdOn":"", "firstName":"dell Inspiron 1427 (Wistron Foose Intel).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHg1N19VTFQ4U1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDVrOS10UmlucDA", "createdOn":"", "firstName":"hp  HP zv6000 Compal LA 2421 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDVrOS10UmlucDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE1JNVRHWWlNTTg", "createdOn":"", "firstName":"dell Vostro 1310 (Compal LA 4231P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE1JNVRHWWlNTTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUk4MDJqYktXUXc", "createdOn":"", "firstName":"hp  HP Mini 311 DM1 (Quanta FP7) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUk4MDJqYktXUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2ktS1Q3aktWUDg", "createdOn":"", "firstName":"hp  HP Pavilion DV7 (Quanta LX6 LX7) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2ktS1Q3aktWUDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiek1yWTlhSVNwd28", "createdOn":"", "firstName":"hp  HP DV7 AMD (Compal LA 4093P) laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiek1yWTlhSVNwd28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieS1yNFB0R2hvamc", "createdOn":"", "firstName":"asus N50A N51A netbook schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieS1yNFB0R2hvamc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUY5dHpYcjRXbGs", "createdOn":"", "firstName":"dell Latitude D600 QUANTA JM2 BONDI II REV 2E.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUY5dHpYcjRXbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUU4eWdKaTgxSGM", "createdOn":"", "firstName":"dell Inspiron 1318 (Beyonce UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUU4eWdKaTgxSGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTROcGFCYTczdlU", "createdOn":"", "firstName":"dell Inspiron 1100 (Compal LA 1452) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTROcGFCYTczdlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHVYTkI5X2ZDQUk", "createdOn":"", "firstName":"dell Inspiron 1525 (Wistron Spears AMD UMA DS2) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHVYTkI5X2ZDQUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm4yNXRhVmk3ODA", "createdOn":"", "firstName":"dell Inspiron 8200 (Compal LA 1221) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm4yNXRhVmk3ODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm1tQjdNejZQUXc", "createdOn":"", "firstName":"hp  HP Pavilion ZE2000 (AMD), Pavilion dv1000 (AMD), HP Compaq Presario M2000 (AMD) schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm1tQjdNejZQUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTBNMXpfMFlWVTg", "createdOn":"", "firstName":"dell Inspiron N4010 (Quanta UM8 UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTBNMXpfMFlWVTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHJtaGx2WlRaTTg", "createdOn":"", "firstName":"hp  HP Pavilion DV3000 (Inventec Diablo 2.0) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHJtaGx2WlRaTTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDk2bVNmWHpZNFk", "createdOn":"", "firstName":"hp  HP Pavilion DV1000 (Quanta CT1).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDk2bVNmWHpZNFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib055azFOTmFZckE", "createdOn":"", "firstName":"asus F9S schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib055azFOTmFZckE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajFERFJVM3ZQQWc", "createdOn":"", "firstName":"hp  HP ProBook 43214321s schematic SX6 discrete schematic Hamilton 1.0 (SX6 DIS).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajFERFJVM3ZQQWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGhlT3pPUWZiZXc", "createdOn":"", "firstName":"hp  HP Mini 210 (Quanta Annika) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGhlT3pPUWZiZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3paM25ySHctYlk", "createdOn":"", "firstName":"dell Inspiron 9300 (Compal LA 2171) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3paM25ySHctYlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmczeW9haFFGemc", "createdOn":"", "firstName":"dell Inspiron 1501 QUANTA KIRIN FX2 with NS REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmczeW9haFFGemc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGxndEE2aWZoaVU", "createdOn":"", "firstName":"dell Inspiron 1520 1720 (Quanta FM5) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGxndEE2aWZoaVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3VWRk0xOEs2X3c", "createdOn":"", "firstName":"asus laptop A6VC schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3VWRk0xOEs2X3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYllDUFEyVEJlVzg", "createdOn":"", "firstName":"hp  HP Pavilion DV7 (Quanta UP6 UP7) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYllDUFEyVEJlVzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlJ3UkdPS3B0U0E", "createdOn":"", "firstName":"hp  HP DV6DV7 (AMD UMA) schematic UT12 UMA UT1UT2 (UMA) Motherboard schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlJ3UkdPS3B0U0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzlBNUlfVHo3eGs", "createdOn":"", "firstName":"hp  HP dv7t Intel Compal LA 4082P Vader discrete laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzlBNUlfVHo3eGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGluc1dGZUp2R2s", "createdOn":"", "firstName":"hp  HP Pavilion DV4 (Compal LA 4117P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGluc1dGZUp2R2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnNEYzV1OWZMeGs", "createdOn":"", "firstName":"dell Latitude D410 (BA41 00454A) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnNEYzV1OWZMeGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmF3WlRBVmRRd1U", "createdOn":"", "firstName":"dell Latitude D600 (Quanta JM2) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmF3WlRBVmRRd1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkxIaU04TkdLTjA", "createdOn":"", "firstName":"dell Vostro 1400 (ELSA Lanai UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkxIaU04TkdLTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2V1NmZIMjVUNWs", "createdOn":"", "firstName":"asus T76S laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2V1NmZIMjVUNWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjZwcmlBOUJfR2s", "createdOn":"", "firstName":"dell Inspiron 17R N7110 (Quanta V03A DIS UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjZwcmlBOUJfR2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTNaYlIyQnpjNTg", "createdOn":"", "firstName":"hp  HP EliteBook 8840 8840W (Compal LA 4902P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTNaYlIyQnpjNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFV5Z01DQkc5b3M", "createdOn":"", "firstName":"hp  HP Pavilion DV2000 (Wistron Akita) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFV5Z01DQkc5b3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzJQMUpOZTRkYVU", "createdOn":"", "firstName":"dell Latitude 120L WISTRON KEY WEST KINNEY REV 2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzJQMUpOZTRkYVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSW83UEtqakFXMjA", "createdOn":"", "firstName":"hp  HP Pavilion DV5 AMD (Quanta QT8) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSW83UEtqakFXMjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGxpZnFZeXBvSnc", "createdOn":"", "firstName":"asus K50IJ laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGxpZnFZeXBvSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlFDV05xdHRwdUk", "createdOn":"", "firstName":"dell Latitude L400 (Quanta SS3 3B) Laptop Schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlFDV05xdHRwdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWhBb1lrbDNWNlU", "createdOn":"", "firstName":"dell Vostro 1000 (Quanta FX2) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWhBb1lrbDNWNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWZ4VDBrbkxTUUE", "createdOn":"", "firstName":"asus EeePC 1003HA laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWZ4VDBrbkxTUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUt4WHNvWjdQWkU", "createdOn":"", "firstName":"asus P80VCAQ Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUt4WHNvWjdQWkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFUtODQwQks2WGM", "createdOn":"", "firstName":"asus A8N A8Dc laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFUtODQwQks2WGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0g4SF9uQ1lfWGc", "createdOn":"", "firstName":"dell Inspiron 1501 (Quanta Kirin FX2 with NS).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0g4SF9uQ1lfWGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzNlUjVCWkprelk", "createdOn":"", "firstName":"hp  HP Pavilion DV6 (Quanta LX3 LX5 Huron River) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzNlUjVCWkprelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3hNN094ZTRaaGM", "createdOn":"", "firstName":"dell Latitude D620 (Compal LA 2792) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3hNN094ZTRaaGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFNHazBHWDFZNjA", "createdOn":"", "firstName":"hp  HP Pavilion DV6 laptop AMD schematics Quanta LX89.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFNHazBHWDFZNjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODFSeXZESjVjQkE", "createdOn":"", "firstName":"hp  HP Pavilion DV6000 DV9000 AMD (Quanta AT8 = AT9) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODFSeXZESjVjQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmlIN05rcFFVUG8", "createdOn":"", "firstName":"dell Inspiron B120 B130 1300 WISTRON KEY WEST DK1 REV SDSec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmlIN05rcFFVUG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlg0eVlGTUFQb28", "createdOn":"", "firstName":"dell Inspiron 14R N4020 Wistron DJ1 Montevina UMA laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlg0eVlGTUFQb28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEw0SWE1bmtNc1U", "createdOn":"", "firstName":"asus A3H schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEw0SWE1bmtNc1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2ZZSkloV0p0YlU", "createdOn":"", "firstName":"hp  HP TouchSmart tx2 schematic Quanta TT3 (Soyuz 3.0) schematic 31TT3MB0020 DA0TT3MB8D0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2ZZSkloV0p0YlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGYtb3dfZ0xVQ2s", "createdOn":"", "firstName":"asus laptop F3JR schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGYtb3dfZ0xVQ2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDc5dmRLMGE4N1E", "createdOn":"", "firstName":"dell Inspiron 1464 1564 1764 (Dis) schematic, UM3UM6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDc5dmRLMGE4N1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2laWWpNOXdLZlU", "createdOn":"", "firstName":"dell Latitude D420 (Compal LA 3071P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2laWWpNOXdLZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1kweHJmcUdLcFk", "createdOn":"", "firstName":"dell Inspiron 1525 WISTRON SPEARS AMD UMA DS2 REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1kweHJmcUdLcFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3hKOEZMeWF2TWM", "createdOn":"", "firstName":"asus A6T schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3hKOEZMeWF2TWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibG9YQlRkU1RSS0k", "createdOn":"", "firstName":"dell Latitude D610 (Quanta JM5B) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibG9YQlRkU1RSS0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0ZMblNOUHUyOWM", "createdOn":"", "firstName":"asus A8J F schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0ZMblNOUHUyOWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialBlTE8xUFUtNHc", "createdOn":"", "firstName":"dell Inspiron 6400 (Quanta FM1) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialBlTE8xUFUtNHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2NMR19iR0lGUXM", "createdOn":"", "firstName":"hp  HP Pavilion DV2000 Compaq V3000 Intel (Wistron Pamirs Discrete) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2NMR19iR0lGUXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlphRkxNWkFLa28", "createdOn":"", "firstName":"dell Studio 1435 1535 (Quanta FM6 UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlphRkxNWkFLa28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ08zbjVkeHhkZ2M", "createdOn":"", "firstName":"dell Vostro 1500 (Compal LA 1452) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ08zbjVkeHhkZ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUllS3ZUS2dQck0", "createdOn":"", "firstName":"dell Inspiron 1440 (Wistron Alba discrete) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUllS3ZUS2dQck0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUhLN3lLM0lyaG8", "createdOn":"", "firstName":"hp  HP EliteBook 6440b 6540b (Compal LA 4891P KELL00 DIOR Discrete) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUhLN3lLM0lyaG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzhVMjhoeUVCY0U", "createdOn":"", "firstName":"hp  HP Pavilion DV4000 (leopard2) laptop schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzhVMjhoeUVCY0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3ZCZGRiLTRySFk", "createdOn":"", "firstName":"dell Inspiron 2200 QUANTA VM7 TONGA & TYLER REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3ZCZGRiLTRySFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGdKbnF0bHFrNFE", "createdOn":"", "firstName":"dell Vostro 1720 (Compal LA 4671P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGdKbnF0bHFrNFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDhKVWI0dHdJSVE", "createdOn":"", "firstName":"asus P5BW MB mainboard schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDhKVWI0dHdJSVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1dsWnZ5bnlFUE0", "createdOn":"", "firstName":"dell Latitude D630 (Quanta JM7B discrete 128MB) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1dsWnZ5bnlFUE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnZmN1d0Q190Y00", "createdOn":"", "firstName":"dell Inspiron 17R N7110 (Quanta UMA R03V03) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnZmN1d0Q190Y00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3lhbUZOY0M2ZjA", "createdOn":"", "firstName":"hp  HP Pavilion DV4 ICH9 VGA (Compal LA 4102P) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3lhbUZOY0M2ZjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzNEUV9rZUVrRlE", "createdOn":"", "firstName":"dell Studio 1555 (Quanta FM9) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzNEUV9rZUVrRlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3QzUW9acjFLSk0", "createdOn":"", "firstName":"dell Latitude D820 (Quanta JM6) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3QzUW9acjFLSk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2l5eTVfRDlYVXM", "createdOn":"", "firstName":"asus A3E schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2l5eTVfRDlYVXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1VZdWVDZEJwZWs", "createdOn":"", "firstName":"hp  HP Pavilion EZ4900 (Quanta KT2) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1VZdWVDZEJwZWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSW5SOC1xVm1VcXc", "createdOn":"", "firstName":"dell Vostro 1014 (Quanta VM8M) davm8mmb6e0 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSW5SOC1xVm1VcXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFo5aDI3dVo4Vms", "createdOn":"", "firstName":"dell Inspiron 1520 1720 (Quanta Cosica Gilligan UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFo5aDI3dVo4Vms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEdSMnMwWkoxOTA", "createdOn":"", "firstName":"dell Latitude D400 (Wistron Pebble) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEdSMnMwWkoxOTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkRtY0E1Z1NKbWM", "createdOn":"", "firstName":"asus UX50 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkRtY0E1Z1NKbWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR254UUJTdGhKQ1U", "createdOn":"", "firstName":"dell Studio XPS 1330 (Thurman UMA) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR254UUJTdGhKQ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVpXMjJQZEthaVk", "createdOn":"", "firstName":"dell Latitude 120L (Wistron KEY WEST Kinney) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVpXMjJQZEthaVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlE5clRBT1dsR0k", "createdOn":"", "firstName":"dell Vostro 3450 (Quanta V02ARO1A) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlE5clRBT1dsR0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjJsd1dyMk5LLVU", "createdOn":"", "firstName":"dell Vostro A840 A860 A1088 (Quanta VM9 VM8 UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjJsd1dyMk5LLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXUzWEpYRXFDdzg", "createdOn":"", "firstName":"dell Inspiron 1440 WISTRON ALBA DISCRETE REV SB 23MAR2009Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXUzWEpYRXFDdzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDhrRkxVVnNrbEE", "createdOn":"", "firstName":"asus A6F schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDhrRkxVVnNrbEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3JXdUdQQ2JxblU", "createdOn":"", "firstName":"asus Z62HA schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3JXdUdQQ2JxblU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmJvRVppUDV4Nzg", "createdOn":"", "firstName":"dell Inspiron 1440 WISTRON ALBA UMA REV 1 06ABR2009Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmJvRVppUDV4Nzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWRUS1JjeGkwVDQ", "createdOn":"", "firstName":"hp  HP ProBook 4310s laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWRUS1JjeGkwVDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczZrd2twbjl2ODA", "createdOn":"", "firstName":"asus x83v laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczZrd2twbjl2ODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicU9BOXJ0ZTc0Mms", "createdOn":"", "firstName":"hp  HP Pavilion DV4 onboard VGA (Compal LA 4101P) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicU9BOXJ0ZTc0Mms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEplYXdicGgxSEE", "createdOn":"", "firstName":"dell Inspiron 1525 (Wistron Spears Intel) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEplYXdicGgxSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGRXR3BxRkUtbjQ", "createdOn":"", "firstName":"hp  HP Pavilion DV9000 AMD (Quanta AT1) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGRXR3BxRkUtbjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUtLOGJvU1lCaEE", "createdOn":"", "firstName":"dell Inspiron 1150 (Compal LA 1684) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUtLOGJvU1lCaEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzlWaHg0Mkt5Qms", "createdOn":"", "firstName":"dell Inspiron 5100 (Compal LA 1452) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzlWaHg0Mkt5Qms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVy1UdnVTY0tfLU0", "createdOn":"", "firstName":"hp  HP Pavilion DV4 Compaq Presario CQ41 (Compal LA 4106P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVy1UdnVTY0tfLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHdyY0lXR1N4S0k", "createdOn":"", "firstName":"dell Latitude D620 (Compal LA 2791) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHdyY0lXR1N4S0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU292VVQ4YkQ5UkU", "createdOn":"", "firstName":"hp  HP Pavilion DV2000 Compaq V3000 AMD (Wistron Shiba) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU292VVQ4YkQ5UkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXdLYUN4bm1PS0E", "createdOn":"", "firstName":"dell Vostro 1220 (Quanta AM3) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXdLYUN4bm1PS0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1N4dldWYzFkRnM", "createdOn":"", "firstName":"dell Studio XPS M1330 (Thurman Discrete VGA nVidia G86) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1N4dldWYzFkRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3N4M2tCUlpfWUU", "createdOn":"", "firstName":"dell Latitude D510 (Quanta DM1) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3N4M2tCUlpfWUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3oxYTktMUZSZzA", "createdOn":"", "firstName":"hp  HP HDX X16 (Quanta UT6) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3oxYTktMUZSZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2xPMUJjMmhvMVk", "createdOn":"", "firstName":"dell Mini 10 (Compal LA 5091P KIU20) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2xPMUJjMmhvMVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUY0eFotaEEyb1E", "createdOn":"", "firstName":"dell Inspiron 1000 (Quanta VM5) Laptop Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUY0eFotaEEyb1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEt0Qkw1ZTBUT1k", "createdOn":"", "firstName":"dell Vostro 1088 (Quanta VM8G) laptop schematcis.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEt0Qkw1ZTBUT1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVItbzYybFp5WEU", "createdOn":"", "firstName":"asus A6Jc schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVItbzYybFp5WEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidndPTVVwdl9vOWc", "createdOn":"", "firstName":"dell Latitude D630 (Compal LA 3301P) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidndPTVVwdl9vOWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmtqZW9hemVwaW8", "createdOn":"", "firstName":"dell Inspiron 1545 (Wistron ROBERTS discrete) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmtqZW9hemVwaW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkltOU1kZmFIS3M", "createdOn":"", "firstName":"dell Studio 1435 1535 (Quanta FM6 discrete) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkltOU1kZmFIS3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjd1QThuWWdXQzg", "createdOn":"", "firstName":"asus S96F laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjd1QThuWWdXQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXdkS01YbkdMSTA", "createdOn":"", "firstName":"hp  HP Compaq Presario CQ40 (LA 4101P) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXdkS01YbkdMSTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTJOMHU0RDlhRGs", "createdOn":"", "firstName":"dell Latitude C600 (Quanta TM6), laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTJOMHU0RDlhRGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmZEREYyV0VnRFE", "createdOn":"", "firstName":"hp  HP Pavilion DV6000 Intel (Quanta AT6) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmZEREYyV0VnRFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWsteEl1RGNyeVE", "createdOn":"", "firstName":"asus A3N schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWsteEl1RGNyeVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWd2LUtDaG8tNFU", "createdOn":"", "firstName":"asus Z62H schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWd2LUtDaG8tNFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianVoTWNCOC0wZzg", "createdOn":"", "firstName":"dell Latitude C640 (Quanta TM8), laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianVoTWNCOC0wZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzg4R3k1MmxzVVU", "createdOn":"", "firstName":"dell Inspiron 1440 (Wistron ALBA UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzg4R3k1MmxzVVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjNzb04yVFJZTWs", "createdOn":"", "firstName":"hp  HP ProBook 4410s 4411s laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjNzb04yVFJZTWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTlLdHRTZGpFNk0", "createdOn":"", "firstName":"dell Inspiron 8600 (Compal LA 1901) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTlLdHRTZGpFNk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZF9FZEtvYWJkVG8", "createdOn":"", "firstName":"dell Inspiron 2200 (Quanta VM7 Tonga & TYLER) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZF9FZEtvYWJkVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDBjY3ViOHJoQUU", "createdOn":"", "firstName":"dell Inspiron N4050 (Wistron Enrico Caruso 14) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDBjY3ViOHJoQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmZJV3lqNEF3Tjg", "createdOn":"", "firstName":"asus EEEPC 1002 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmZJV3lqNEF3Tjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYk1VOVdYY19rUzQ", "createdOn":"", "firstName":"dell Inspiron M5030 (Wistron Chelsea DJ2 AMD UMA) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYk1VOVdYY19rUzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2V3ak1mckRrMTg", "createdOn":"", "firstName":"dell Inspiron 1525.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2V3ak1mckRrMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWm0yVHJKZUNxRm8", "createdOn":"", "firstName":"dell Studio 1735 (Quanta GM3), laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWm0yVHJKZUNxRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWktjSjEzX1FrN1U", "createdOn":"", "firstName":"dell Vostro 3300 (Wistron Winery13 MB DIS) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWktjSjEzX1FrN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWx2b2VIREk5RGc", "createdOn":"", "firstName":"hp  HP Pavilion DV5 Intel (QT6) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWx2b2VIREk5RGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWW01MFZwbDc5U0k", "createdOn":"", "firstName":"asus A6Rp schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWW01MFZwbDc5U0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDVQRlUtZVZ2RDA", "createdOn":"", "firstName":"dell Inspiron 1420 (ELSA Lanai UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDVQRlUtZVZ2RDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjRLTUN4eTVoREE", "createdOn":"", "firstName":"dell Inspiron N5010 (Wistron Berry DG15 Discrete UMA) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjRLTUN4eTVoREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXkxQW02aFNobzg", "createdOn":"", "firstName":"hp  hp probook inventec piaget p09c2.0d rev a02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXkxQW02aFNobzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUW1DRHVhNVhBTmM", "createdOn":"", "firstName":"dell Vostro 1510 1520 (Compal LA 4592P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUW1DRHVhNVhBTmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHF6SmpyOU9JUGc", "createdOn":"", "firstName":"dell Vostro 1510 (Compal LA 4121P JAL30) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHF6SmpyOU9JUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzNjRTdqenI4bXM", "createdOn":"", "firstName":"dell Vostro V13 (Inventec V13TL) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzNjRTdqenI4bXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXJHU1FKVXFjMHc", "createdOn":"", "firstName":"asus laptop UL50AT schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXJHU1FKVXFjMHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU1DYnBjS21qZTQ", "createdOn":"", "firstName":"hp  HP EliteBook 6930p (Wistron Karia) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU1DYnBjS21qZTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHl0QmxDTEhhd1U", "createdOn":"", "firstName":"dell Vostro 1320 (Compal LA 4232P KAL80) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHl0QmxDTEhhd1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHRUT0U2NzZ5QzQ", "createdOn":"", "firstName":"hp  HP Pavilion DV7 (Compal LA 4081P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHRUT0U2NzZ5QzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTVhdW5PdzhHa1k", "createdOn":"", "firstName":"dell LCD Monitor 1503FP schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTVhdW5PdzhHa1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE1OdEExeWEtR0k", "createdOn":"", "firstName":"asus F5R laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE1OdEExeWEtR0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3llQlFyZHd6cms", "createdOn":"", "firstName":"asus Z84FM schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3llQlFyZHd6cms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3RNdHNkSDBNQUU", "createdOn":"", "firstName":"asus laptop A6K schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3RNdHNkSDBNQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2NHNldkMlRJcjA", "createdOn":"", "firstName":"asus eee pc laptop T91 R12G Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2NHNldkMlRJcjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQy16WXlUWnVKR1k", "createdOn":"", "firstName":"hp  HP EliteBook 2560P (Inventec Styx MV) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQy16WXlUWnVKR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkl5M2NVcndhUFk", "createdOn":"", "firstName":"hp  HP EliteBook 8530W 8530P laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkl5M2NVcndhUFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUVSZnN4QWZ1Qlk", "createdOn":"", "firstName":"dell Inspiron 6000 (Compal LA 2151 TOBAGO) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUVSZnN4QWZ1Qlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTdvZnktNXR2TGs", "createdOn":"", "firstName":"hp  HP Pavilion DV9260 Intel (Quanta AT5) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTdvZnktNXR2TGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHg4eWpEeGZBNEE", "createdOn":"", "firstName":"hp  HP Pavilion DV7 AMD (UMA) JBK00 LA 4091P laptop schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHg4eWpEeGZBNEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGRHVG90b09rcDg", "createdOn":"", "firstName":"dell Inspiron 2600 (Compal LA 1181) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGRHVG90b09rcDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnNKQjRUWERJcUU", "createdOn":"", "firstName":"dell Inspiron 2650 Compal LA 1271 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnNKQjRUWERJcUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3czcXVYLVFJdk0", "createdOn":"", "firstName":"hp  HP Pavilion DV6000 QUANTA AT3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3czcXVYLVFJdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHplV25zQzZ4ekk", "createdOn":"", "firstName":"dell Latitude D800 (LA 1901) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHplV25zQzZ4ekk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGh0SlRMS2lVYVk", "createdOn":"", "firstName":"hp  HP ProBook 4415s 4416s Inventec Piaget Laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGh0SlRMS2lVYVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXczSVFma3Noc2s", "createdOn":"", "firstName":"dell Vostro 3700 (Wistron Vostro Calpella) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXczSVFma3Noc2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLW9zUTRER1JqOGc", "createdOn":"", "firstName":"dell Studio 1535 1537 (Quanta FM7) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLW9zUTRER1JqOGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU1YQ2NNdDNQQnM", "createdOn":"", "firstName":"dell f15b0 Acer Travelmate 2440 AS3640 Schematics GARDA5  1 0426.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU1YQ2NNdDNQQnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREhSbjBHTFNaVEU", "createdOn":"", "firstName":"apple  Error Codes.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREhSbjBHTFNaVEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXpqRGpzb2JDQXc", "createdOn":"", "firstName":"compal cl56 CL561 CH4 rev3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXpqRGpzb2JDQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVZQZENKb3YwVGc", "createdOn":"", "firstName":"jvc mini note mp xp741de.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVZQZENKb3YwVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGZHRFN3UENiNjg", "createdOn":"", "firstName":"msi ms 7050 130.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGZHRFN3UENiNjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnJnUU42YUdHNzA", "createdOn":"", "firstName":"compal cy23 ch 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnJnUU42YUdHNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3dfRnE1MEdPbzA", "createdOn":"", "firstName":"msi msi a6200 ms 1682 rev 0b sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3dfRnE1MEdPbzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0hpeEZjY0I2dDA", "createdOn":"", "firstName":"samsung 47259  FIRENZE2 R NP R40plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0hpeEZjY0I2dDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakF1VTlERkhkRW8", "createdOn":"", "firstName":"samsung q1 User’s Guide manual.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakF1VTlERkhkRW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVZ1THNrLWFzOTA", "createdOn":"", "firstName":"samsung q45 cover1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVZ1THNrLWFzOTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnk0c18xREdtYkE", "createdOn":"", "firstName":"compal Vostro 1310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnk0c18xREdtYkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1pzc1ItUENTQkE", "createdOn":"", "firstName":"samsung NP R50 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1pzc1ItUENTQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1ZmdmVHZERsM1U", "createdOn":"", "firstName":"benq JoyBook S41 QUANTA CH3 REV 1ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1ZmdmVHZERsM1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3VGNHFVdGhrQjg", "createdOn":"", "firstName":"packardbell easynote v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3VGNHFVdGhrQjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnNVUTYwOWdjNEk", "createdOn":"", "firstName":"compal cl51 CL51 table.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnNVUTYwOWdjNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWG9reW40NU8tREE", "createdOn":"", "firstName":"msi MSI MS 7211 rev. 0A schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWG9reW40NU8tREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEtncWtJUlVDRHM", "createdOn":"", "firstName":"samsung  NP R410 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEtncWtJUlVDRHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1drR2laMGxmYUE", "createdOn":"", "firstName":"quanta QUANTA ED2L   REV E3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1drR2laMGxmYUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkwtWXg5SE1BV1k", "createdOn":"", "firstName":"samsung  r18.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkwtWXg5SE1BV1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkNyYV9lV1gwdk0", "createdOn":"", "firstName":"packardbell easynote v mv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkNyYV9lV1gwdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEZfRFVscC1zWmM", "createdOn":"", "firstName":"gateway convertible notebook cx200 cx2000 m280 m285 s 7200 ta1 ta6 ta7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEZfRFVscC1zWmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDJqMFFGMXBjeTg", "createdOn":"", "firstName":"compal 80A .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDJqMFFGMXBjeTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVNoLTV2cXVvc00", "createdOn":"", "firstName":"samsung Istanbul np r610.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVNoLTV2cXVvc00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ252ZGhONVFxMjA", "createdOn":"", "firstName":"compal cl51 CL51 CH5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ252ZGhONVFxMjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1lMWHNFeEp4MnM", "createdOn":"", "firstName":"msi MSI Megabook M510 M510C MS 1003 0C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1lMWHNFeEp4MnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjA2cm5Nb0ZVRmc", "createdOn":"", "firstName":"msi MSI PR321 MS 13311 REV 0A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjA2cm5Nb0ZVRmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzloM01ES0M0aHM", "createdOn":"", "firstName":"samsung  SENS X20 14ed6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzloM01ES0M0aHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHM4YXg3cGFaOWs", "createdOn":"", "firstName":"samsung 32fb0  np m55 cichlid 3 rev 1.4 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHM4YXg3cGFaOWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYklROGU4Vk9vcU0", "createdOn":"", "firstName":"benq S52 DisassemblyFlowChart F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYklROGU4Vk9vcU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3phSTUzaUtreWM", "createdOn":"", "firstName":"samsung nc10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3phSTUzaUtreWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkt5dEk0N3F6a0E", "createdOn":"", "firstName":"quanta Advent 7107 Quanta TW3M B2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkt5dEk0N3F6a0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWZieUZPbWFFS2c", "createdOn":"", "firstName":"benq JoyBook R55 QUANTA TW3A REV 3ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWZieUZPbWFFS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVdMM1BFMGFnRWs", "createdOn":"", "firstName":"samsung q45 precaution.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVdMM1BFMGFnRWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejM5RkVXNGRweEk", "createdOn":"", "firstName":"COMPAL LA 1181.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejM5RkVXNGRweEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHRrWW5rcXpiWTQ", "createdOn":"", "firstName":"packardbell easynote w3 dragon a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHRrWW5rcXpiWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGpEX2NIdmR2c0E", "createdOn":"", "firstName":"benq S52 C425 Trouble Shooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGpEX2NIdmR2c0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHBuTTVJdUZNY3c", "createdOn":"", "firstName":"benq JOYBOOK A51E quanta BQ2L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHBuTTVJdUZNY3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2IyUTMtaWNDdWM", "createdOn":"", "firstName":"packardbell Easynote TJ72 RB 909NC a6e54 Gateway NV53 Series SJV50 TR(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2IyUTMtaWNDdWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicy1WR0FCS1ExNWc", "createdOn":"", "firstName":"lg LG T280 L.ARB1T QUANTA QL1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicy1WR0FCS1ExNWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzhta3o0RXh2NjA", "createdOn":"", "firstName":"samsung x460 08 Wiring Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzhta3o0RXh2NjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibW8yRVJFYXFCV3c", "createdOn":"", "firstName":"Gateway M series M 1412, M 1622, M 1624, M 1625, M 1626, M 1628, M 1628, M 1629, M 1630j, M 1631j, M 1632j QUANTA SA1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibW8yRVJFYXFCV3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTNvdmcycDhLdjQ", "createdOn":"", "firstName":"ecs a901 1 4 01 r2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTNvdmcycDhLdjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakZCajUtQ0Z0Tlk", "createdOn":"", "firstName":"packardbell 2b252 Packard Bell Easynote MH36 Hera G (Quanta PE2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakZCajUtQ0Z0Tlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajR1QzlfWEtvTzA", "createdOn":"", "firstName":"samsung  q35.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajR1QzlfWEtvTzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia205NWtXRjFQMmc", "createdOn":"", "firstName":"packardbell easynote dt85.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia205NWtXRjFQMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0VidTNVREkzaU0", "createdOn":"", "firstName":"packardbell easynote sl81 sl51 ml61 Quanta PF1 2 PF1Q.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0VidTNVREkzaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjJTR3B1QVVDczA", "createdOn":"", "firstName":"compal cy23 ch 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjJTR3B1QVVDczA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVdrU3oxd1oxRkk", "createdOn":"", "firstName":"lg ls40 ls50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVdrU3oxd1oxRkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDBERTY5RzBDRnM", "createdOn":"", "firstName":"compal hel81 HEL81 ch1 System description spec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDBERTY5RzBDRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3BUX3hCN3BsOU0", "createdOn":"", "firstName":"lg lw60 lw70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3BUX3hCN3BsOU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1dGcHFua2JmYkk", "createdOn":"", "firstName":"samsung q40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1dGcHFua2JmYkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnZQMmlKTDYxWTQ", "createdOn":"", "firstName":"GATEWAY SA1 QUANTA SA1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnZQMmlKTDYxWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTZCWE9IRjctTjg", "createdOn":"", "firstName":"samsung Q1 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTZCWE9IRjctTjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0MtZTlWUERfdzQ", "createdOn":"", "firstName":"packardbell easynote butterfly xs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0MtZTlWUERfdzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzNNV05SbVMwRUU", "createdOn":"", "firstName":"gateway nv53.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzNNV05SbVMwRUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX09xQlNMZUpRb3c", "createdOn":"", "firstName":"nec Nec Versa 6050 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX09xQlNMZUpRb3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmI3OUhVVUZLNHc", "createdOn":"", "firstName":"packardbell Gateway ID53a – EasyNote TX82 WISTRON SJM50 DN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmI3OUhVVUZLNHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjg0aWZVek1waFk", "createdOn":"", "firstName":"quanta TM2420.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjg0aWZVek1waFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXIxdkttNVVXU1k", "createdOn":"", "firstName":"samsung  np r510 Troubleshooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXIxdkttNVVXU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVW9zM2ViRV9JaUU", "createdOn":"", "firstName":"packardbell easynote l.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVW9zM2ViRV9JaUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlhWMDREQnVCdDA", "createdOn":"", "firstName":"gateway 6000 6100 6500 6600 m360 mx6000 mx6100 mx6200 mx6400 mx6500 mx6600 mx6900 nx500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlhWMDREQnVCdDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHFSclhXazdLejA", "createdOn":"", "firstName":"samsung da1c4 NP R428.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHFSclhXazdLejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFRVdThXV2tjaTA", "createdOn":"", "firstName":"msi MS96B9 v1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFRVdThXV2tjaTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWtNYVA5d3lkNlE", "createdOn":"", "firstName":"samsung  p10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWtNYVA5d3lkNlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkwxQXBoRTVoOWc", "createdOn":"", "firstName":"samsung NP RV411.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkwxQXBoRTVoOWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVhlY25tcGFzR1k", "createdOn":"", "firstName":"gateway ec34 ec38.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVhlY25tcGFzR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWp4NmluR0dPVVE", "createdOn":"", "firstName":"compal 4059X5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWp4NmluR0dPVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXVnVUFfNTZyMlk", "createdOn":"", "firstName":"msi MS 9620 V.0A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXVnVUFfNTZyMlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVVuUm5RRHBDUlU", "createdOn":"", "firstName":"samsung 8b5c6  Dresden INT r1.00.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVVuUm5RRHBDUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUtNM1hqUXFMRmM", "createdOn":"", "firstName":"samsung NP R60FE01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUtNM1hqUXFMRmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2pTdUNINnVGYWs", "createdOn":"", "firstName":"samsung R522.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2pTdUNINnVGYWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmlDR2twMjVSd1E", "createdOn":"", "firstName":"benq s72.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmlDR2twMjVSd1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjFSdkl2aHgxTGs", "createdOn":"", "firstName":"msi MSI laptop schematic diagram.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjFSdkl2aHgxTGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWpSbGp3di0xRlE", "createdOn":"", "firstName":"packardbell easynote b3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWpSbGp3di0xRlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNC1Bc3BLUFRXZ00", "createdOn":"", "firstName":"samsung NP R60 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNC1Bc3BLUFRXZ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk80YzBWWHNvZXc", "createdOn":"", "firstName":"gateway 600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk80YzBWWHNvZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWhaR2JXNk11SG8", "createdOn":"", "firstName":"msi MS 9615.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWhaR2JXNk11SG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVFyeTVLeGxzeDg", "createdOn":"", "firstName":"samsung  np r510 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVFyeTVLeGxzeDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG1wTkJYUkhuSVE", "createdOn":"", "firstName":"compal cl50 CL50 CH6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG1wTkJYUkhuSVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG1EZ3IzVkRTZmM", "createdOn":"", "firstName":"compal cl50 CL50 CH4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG1EZ3IzVkRTZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWxDa2Q5SWYzME0", "createdOn":"", "firstName":"samsung  np r510 Product Specification.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWxDa2Q5SWYzME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWNWMEw5YVVtdGM", "createdOn":"", "firstName":"samsung p560 03 Exploded View.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWNWMEw5YVVtdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUxpY2t5cnhvX1E", "createdOn":"", "firstName":"packardbell easynote lj65.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUxpY2t5cnhvX1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3RMXzdpM3ZvZkk", "createdOn":"", "firstName":"packardbell EasyNote ML65 QUANTA PB5,PB6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3RMXzdpM3ZvZkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXFHYzZkWGNROVE", "createdOn":"", "firstName":"msi MSI MS 12221 PR210.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXFHYzZkWGNROVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDZZNFJGWmpNS2c", "createdOn":"", "firstName":"compal cy23 ch a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDZZNFJGWmpNS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0tHT0x2elBGRGM", "createdOn":"", "firstName":"lg tx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0tHT0x2elBGRGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianh2VG9MSjVHM0U", "createdOn":"", "firstName":"msi msi megabook gx710 ms 171a1 11 rev 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianh2VG9MSjVHM0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlFwd0FPYVJrNDQ", "createdOn":"", "firstName":"quanta quanta BQ2L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlFwd0FPYVJrNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkpiRFlDd01OcEk", "createdOn":"", "firstName":"ecs 331 1 4 01 r20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkpiRFlDd01OcEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU9UelNJMVNmb2c", "createdOn":"", "firstName":"benq S52 DisassemblyDescription F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU9UelNJMVNmb2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGx4WUxQSklRRlk", "createdOn":"", "firstName":"lg lw20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGx4WUxQSklRRlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFlrM3pFOTdDTkk", "createdOn":"", "firstName":"jvc mini note mp xv941de 841de 841gb 841gbex 841us.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFlrM3pFOTdDTkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFA4RUJhbUZRVkE", "createdOn":"", "firstName":"quanta z60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFA4RUJhbUZRVkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmRiOWhaTTJjbWc", "createdOn":"", "firstName":"samsung NP M70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmRiOWhaTTJjbWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0xoZEQ1OFIzSEk", "createdOn":"", "firstName":"gateway lt31.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0xoZEQ1OFIzSEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmJZWGNJWVZDSHc", "createdOn":"", "firstName":"msi ms 7046M1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmJZWGNJWVZDSHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjVwWHNaNnFGaFE", "createdOn":"", "firstName":"samsung p560 08 Wiring Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjVwWHNaNnFGaFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXNmal9qMXNwSnc", "createdOn":"", "firstName":"samsung d5397  NP R467 NP R469 (QingDao ULCPC) Laptop Schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXNmal9qMXNwSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTm93a1c3OFM5MlU", "createdOn":"", "firstName":"compal cy23 ch 4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTm93a1c3OFM5MlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTldmME9xY1V6dzA", "createdOn":"", "firstName":"packardbell easynote e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTldmME9xY1V6dzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXBRbEh1Qk1nNDA", "createdOn":"", "firstName":"lg LG laptop motherboard schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXBRbEh1Qk1nNDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnlrQWVPeDBjOUk", "createdOn":"", "firstName":"gateway p 79.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnlrQWVPeDBjOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRk5heVBqc0d5ZTA", "createdOn":"", "firstName":"packardbell laptop motherboard schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRk5heVBqc0d5ZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDE3bGZFWkpwb0E", "createdOn":"", "firstName":"packardbell easynote t5j65 126759812 WISTRON SJV50 MV REV SA pdf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDE3bGZFWkpwb0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmlXM3dUU2RoaWs", "createdOn":"", "firstName":"samsung np r780 bremen m.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmlXM3dUU2RoaWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHlzNWEtVTdCeEU", "createdOn":"", "firstName":"compal cl50 CL50 CH2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHlzNWEtVTdCeEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFNFcDFKQ0d4c3c", "createdOn":"", "firstName":"msi MSI MS 6382 schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFNFcDFKQ0d4c3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemp4cVBEeXBsNFE", "createdOn":"", "firstName":"samsung  R40HAINAN3 SRE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemp4cVBEeXBsNFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzlTYkNXT1MwbmM", "createdOn":"", "firstName":"packardbell dot mr u mr.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzlTYkNXT1MwbmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzZScnI1Y3hfWGM", "createdOn":"", "firstName":"samsung r510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzZScnI1Y3hfWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFBMVDhDV2UzdjA", "createdOn":"", "firstName":"lg le50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFBMVDhDV2UzdjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2xDUG82SS11ZHM", "createdOn":"", "firstName":"gateway ec14 ec18.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2xDUG82SS11ZHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibllieW5sYWZDbEE", "createdOn":"", "firstName":"samsung p560 02 Product Specification.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibllieW5sYWZDbEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibi0tUGswVEhDdDA", "createdOn":"", "firstName":"compal hel81 HEL81 ch3 Hardware.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibi0tUGswVEhDdDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXU4N2JGbnpiLXc", "createdOn":"", "firstName":"packardbell easynote lj61 (kbyf0,la 5051p) DA60000B600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXU4N2JGbnpiLXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9zZ0hSV0tUNjA", "createdOn":"", "firstName":"packardbell easynote r.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9zZ0hSV0tUNjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib25xSVoxZVE3bDg", "createdOn":"", "firstName":"samsung n418 n420.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib25xSVoxZVE3bDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWUtMllGQlBCOEk", "createdOn":"", "firstName":"benq S52 Product Spec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWUtMllGQlBCOEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDhuUC1JS1RmZjg", "createdOn":"", "firstName":"samsung p560 10 Precaution.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDhuUC1JS1RmZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmNPckdmWlB5Y28", "createdOn":"", "firstName":"benq Joybook R23 MITAC 8889 REV 0.2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmNPckdmWlB5Y28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVZkOUE5b2dSMzA", "createdOn":"", "firstName":"nec Nec Versa 6000 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVZkOUE5b2dSMzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjhzMGpnTDdFRlU", "createdOn":"", "firstName":"ecs 400 1 4 01 ra.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjhzMGpnTDdFRlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWENERjIyd1dTNms", "createdOn":"", "firstName":"packardbell easynote t5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWENERjIyd1dTNms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEIyUkEtd25fc0E", "createdOn":"", "firstName":"samsung x460 04 Part List.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEIyUkEtd25fc0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1VQLW9sc3BDejQ", "createdOn":"", "firstName":"samsung WISTRON Aegean 6410 533MHz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1VQLW9sc3BDejQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzV3bVJiZ3JhYkE", "createdOn":"", "firstName":"compal cl51 CL51 CH2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzV3bVJiZ3JhYkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlFtSVpoVkNkUGc", "createdOn":"", "firstName":"gateway m275.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlFtSVpoVkNkUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHZ3WTlORFc0eW8", "createdOn":"", "firstName":"packardbell Wistron JE70 DN SJV71 DN HM72 DN Rev SB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHZ3WTlORFc0eW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkMtdjV1akdrNms", "createdOn":"", "firstName":"samsung NP X65.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkMtdjV1akdrNms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWxqc3lVbVM1eGc", "createdOn":"", "firstName":"lg ls70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWxqc3lVbVM1eGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUlYNzFLNW0zeWc", "createdOn":"", "firstName":"quanta Quanta zl2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUlYNzFLNW0zeWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUlyVlA3ckVlQk0", "createdOn":"", "firstName":"packardbell versa vx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUlyVlA3ckVlQk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1djRVhidXBrQWM", "createdOn":"", "firstName":"gateway p 78.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1djRVhidXBrQWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1JJU3ozang3TVk", "createdOn":"", "firstName":"nec Nec Versa 4000 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1JJU3ozang3TVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnJrdE1PS2RMUG8", "createdOn":"", "firstName":"packardbell EasyNote TJ61 TJ62 TJ65 TJ66.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnJrdE1PS2RMUG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0Zqa1hGc1d0a3M", "createdOn":"", "firstName":"packardbell Minos GP2 W Easynote SB85 SB88 QUANTA PB3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0Zqa1hGc1d0a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2pIWG9kdE9yOGM", "createdOn":"", "firstName":"quanta AS7100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2pIWG9kdE9yOGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmtYWGpYaGdYeDA", "createdOn":"", "firstName":"samsung 035f1 R423.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmtYWGpYaGdYeDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXBnUVRZMFdFeUE", "createdOn":"", "firstName":"quanta TM2440 AS3640 Schematics GARDA5  1 0426.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXBnUVRZMFdFeUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVpBR1NOeFRCdWc", "createdOn":"", "firstName":"compal cy23 ch 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVpBR1NOeFRCdWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzV3YkRmbEJtcG8", "createdOn":"", "firstName":"msi msi 7024 1.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzV3YkRmbEJtcG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHloYW4zMVNRUkE", "createdOn":"", "firstName":"samsung NP R410 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHloYW4zMVNRUkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGtBNWJqbzdvVEE", "createdOn":"", "firstName":"samsung R580 R780.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGtBNWJqbzdvVEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWxiTjFURWdUeWM", "createdOn":"", "firstName":"gateway m675.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWxiTjFURWdUeWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFN4V0swRU54cUE", "createdOn":"", "firstName":"samsung q45 troubleshooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFN4V0swRU54cUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMktuNkk2MlItWGs", "createdOn":"", "firstName":"samsung r50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMktuNkk2MlItWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWdibjZyZWhjU3c", "createdOn":"", "firstName":"samsung  np r510 Cover.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWdibjZyZWhjU3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejFJYVlUTlY4Slk", "createdOn":"", "firstName":"compal 401636.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejFJYVlUTlY4Slk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEhleXhxcXd6VEU", "createdOn":"", "firstName":"benq JoyBook A52E QUANTA AK2 REV 1ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEhleXhxcXd6VEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkJyX0xVNHMxdU0", "createdOn":"", "firstName":"nec Nec Versa 6260 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkJyX0xVNHMxdU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickZZMVdpaDEzR0U", "createdOn":"", "firstName":"samsung  Q1 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickZZMVdpaDEzR0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2JhVHBlOExzVG8", "createdOn":"", "firstName":"msi msi megabook s262 ms 1057 rev 3.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2JhVHBlOExzVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVlVTXZCQWxCTVU", "createdOn":"", "firstName":"ecs a928 1 4 01 r3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVlVTXZCQWxCTVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTFPN2NPS2VOLU0", "createdOn":"", "firstName":"samsung NP M70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTFPN2NPS2VOLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianRocklyZGR2RUU", "createdOn":"", "firstName":"lg LG XNOTE E510 (Quanta PL3) laptop schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRocklyZGR2RUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHo4S2ZIRGlhOFk", "createdOn":"", "firstName":"msi MSI EX630 ms 1671 rev 0a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHo4S2ZIRGlhOFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDhJUVM1LVNoYU0", "createdOn":"", "firstName":"packardbell EasyNote S 6980650000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDhJUVM1LVNoYU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWVqU3VIQU90cWs", "createdOn":"", "firstName":"lg LG R580 QUANTA QL5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWVqU3VIQU90cWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUpaX0R1VGRMSXc", "createdOn":"", "firstName":"msi MS96B9 v1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUpaX0R1VGRMSXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0Zrbk1NZ2dLRWM", "createdOn":"", "firstName":"compal hel81 HEL81 ch6 Testing and Troubleshooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0Zrbk1NZ2dLRWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX05MZ01Gd2UyU1U", "createdOn":"", "firstName":"packardbell easynote mz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX05MZ01Gd2UyU1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVE3V3gzX1FpcTg", "createdOn":"", "firstName":"packardbell easynote bu.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVE3V3gzX1FpcTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzdxcjFBbE1BQlU", "createdOn":"", "firstName":"packardbell easynote sb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzdxcjFBbE1BQlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUDZFRUFwUV9DTnM", "createdOn":"", "firstName":"quanta BENQ r55 Quanta TW3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUDZFRUFwUV9DTnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2FhaEYyc1pUMzA", "createdOn":"", "firstName":"Gateway Nv3717u (kbyf0,la 5051p) DA60000B600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2FhaEYyc1pUMzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnVDZi1pU3RyaDg", "createdOn":"", "firstName":"nec Nec Versa 6060 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnVDZi1pU3RyaDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0h6WktNQjVnblE", "createdOn":"", "firstName":"compal cl51 CHAPTER A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0h6WktNQjVnblE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0N5Y0NrNFBmMDQ", "createdOn":"", "firstName":"samsung NP Q40 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0N5Y0NrNFBmMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzFwVFBvVXpyWVk", "createdOn":"", "firstName":"compal cy23 CH 6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzFwVFBvVXpyWVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkNEaEJOaC1YV1U", "createdOn":"", "firstName":"ecs g332 1 4 01 r2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkNEaEJOaC1YV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2hBNUROd0VXMTg", "createdOn":"", "firstName":"samsung q45 cover.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2hBNUROd0VXMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHRvbEJ4cjl5ME0", "createdOn":"", "firstName":"packardbell easynote lj61.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHRvbEJ4cjl5ME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFZzc2JITGptWGM", "createdOn":"", "firstName":"jvc mini note mp xp7230gb 5230gb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFZzc2JITGptWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODBOcWxuUV9YRG8", "createdOn":"", "firstName":"msi MS 9623.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODBOcWxuUV9YRG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkUxdXI5aTR4R0E", "createdOn":"", "firstName":"quanta AS5510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkUxdXI5aTR4R0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkFlOVAxNkNhRVU", "createdOn":"", "firstName":"compal hel81 HEL81 ch5 Disassembly Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkFlOVAxNkNhRVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNW1XbUxfSTV3aFk", "createdOn":"", "firstName":"benq S52 AssyDrawing(ExploadeChart) F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNW1XbUxfSTV3aFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUpHc05Qd20xUHM", "createdOn":"", "firstName":"nec Nec Versa 5000 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUpHc05Qd20xUHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNU1DN2s2QjY5OGc", "createdOn":"", "firstName":"samsung q45 Q45 exploded view  part list.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNU1DN2s2QjY5OGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2lVQnZiV0lBcW8", "createdOn":"", "firstName":"nec Nec Versa 2000 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2lVQnZiV0lBcW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmR3ci1BZFQ4WHc", "createdOn":"", "firstName":"gateway profile 4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmR3ci1BZFQ4WHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWh3clBpdEJaOWM", "createdOn":"", "firstName":"gateway ec14d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWh3clBpdEJaOWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielFnV29ySjVsVVk", "createdOn":"", "firstName":"nec Nec Versa 6200 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielFnV29ySjVsVVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVVBQXhFT0M5RTA", "createdOn":"", "firstName":"compal cl56 CL561 CH1 rev3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVVBQXhFT0M5RTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUo5WmZ4bTB2Z28", "createdOn":"", "firstName":"msi MSI Megabook M620 MS 1010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUo5WmZ4bTB2Z28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidG5NWEZjZnBodms", "createdOn":"", "firstName":"packardbell easynote mb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidG5NWEZjZnBodms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0Z6SkdlRkc1STg", "createdOn":"", "firstName":"msi MS 1251.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0Z6SkdlRkc1STg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0Q1YzdlWUcyVE0", "createdOn":"", "firstName":"packardbell EasyNote TR81 TR82 TR83 WISTRON SJM50 PU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0Q1YzdlWUcyVE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0MwUmpvSk1XTm8", "createdOn":"", "firstName":"samsung d051c Q208 Q210 Q308.MADRID EXT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0MwUmpvSk1XTm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnAzVTRMdjhyQmM", "createdOn":"", "firstName":"quanta AS5670.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnAzVTRMdjhyQmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVdlYUtrLWptSzA", "createdOn":"", "firstName":"packardbell easynote c3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVdlYUtrLWptSzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUNJcGRBWUx6RzA", "createdOn":"", "firstName":"samsung p560 06 Disassembly & Reassembly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUNJcGRBWUx6RzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibC1MY0VPNUNCS0k", "createdOn":"", "firstName":"msi MS 9621.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibC1MY0VPNUNCS0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamd0cWU0YURXSUE", "createdOn":"", "firstName":"gateway m305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamd0cWU0YURXSUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiak5WaWQyaThpaTg", "createdOn":"", "firstName":"samsung NP Q70 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiak5WaWQyaThpaTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajRxcVJfTFR4MWc", "createdOn":"", "firstName":"msi MSI Wind U100 U92 U90 MS N011.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajRxcVJfTFR4MWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmJZdHRPSmFfMjg", "createdOn":"", "firstName":"packardbell easynote tj75 tj76 tj77 tj78.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmJZdHRPSmFfMjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlRudkRZT0dwdEk", "createdOn":"", "firstName":"packardbell easynote sj.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlRudkRZT0dwdEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkVDRGI3eENfaUE", "createdOn":"", "firstName":"msi KBC U100.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkVDRGI3eENfaUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjNNdFUweFBzNlU", "createdOn":"", "firstName":"samsung x460 05 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjNNdFUweFBzNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYW5jS3ZvUXRIdjA", "createdOn":"", "firstName":"gateway solo 1450.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYW5jS3ZvUXRIdjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3dXeUZ6Y3RzdFE", "createdOn":"", "firstName":"ecs 321 1 4 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3dXeUZ6Y3RzdFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3Y2U0RobDFJaEU", "createdOn":"", "firstName":"samsung  X360 Samoa.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3Y2U0RobDFJaEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0NTUF9hcXNqcVk", "createdOn":"", "firstName":"ecs 558 1 4 01 r21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0NTUF9hcXNqcVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWduOXVWcTV4VEE", "createdOn":"", "firstName":"quanta quanta twh rev a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWduOXVWcTV4VEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTRNSVQ5TWtKbGc", "createdOn":"", "firstName":"gateway nv59.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTRNSVQ5TWtKbGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlpvd1dsZDZ5TlE", "createdOn":"", "firstName":"quanta Aristo Prestige 1800 Quanta TW7 Rev3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlpvd1dsZDZ5TlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjAwZmREZ3J6UEU", "createdOn":"", "firstName":"msi msi cr400 ms 1451 rev 1.2 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjAwZmREZ3J6UEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVBWMzRfVWQxdFE", "createdOn":"", "firstName":"msi MSI GX600 MS 163A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVBWMzRfVWQxdFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTy1DX21jYkk0SnM", "createdOn":"", "firstName":"samsung  NP R60FE01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTy1DX21jYkk0SnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHBzQk5LUzk2Rjg", "createdOn":"", "firstName":"msi MSI MegaBook M610 MS 1004.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHBzQk5LUzk2Rjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVdHWGdVQmhrQkk", "createdOn":"", "firstName":"benq JoyBook A51 A51E QUANTA BQ2L REV 1ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVdHWGdVQmhrQkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVRDV3JIbjlpTXc", "createdOn":"", "firstName":"samsung scheme np n220,n210,n150,nb30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVRDV3JIbjlpTXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFBDUC1TWkpjMm8", "createdOn":"", "firstName":"gateway 450rgh.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFBDUC1TWkpjMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzVXY1FMOWNvb2s", "createdOn":"", "firstName":"samsung 300E4A Petronas 14 DC Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzVXY1FMOWNvb2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWpOV1AwS0g0Snc", "createdOn":"", "firstName":"msi MSI PR200 MSI MS 12211 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWpOV1AwS0g0Snc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRW5jb2VhWFItXzg", "createdOn":"", "firstName":"samsung  np rv420 520 720 scala2 r rev 0.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRW5jb2VhWFItXzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmEzTHNOdW5ydzA", "createdOn":"", "firstName":"samsung p560 07 Troubleshooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmEzTHNOdW5ydzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXNpSVpnbW0tdGs", "createdOn":"", "firstName":"packardbell easynote bg.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXNpSVpnbW0tdGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOV83V1ljOVZiTGc", "createdOn":"", "firstName":"msi MSI EX310 MS 13331 DVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOV83V1ljOVZiTGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNURnQi00dmEzQzA", "createdOn":"", "firstName":"COMPAL LA 1121.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNURnQi00dmEzQzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUJ3OTBkV2dNOXM", "createdOn":"", "firstName":"msi MS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUJ3OTBkV2dNOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTJBbXNRZ3lkUDA", "createdOn":"", "firstName":"compal cl56 CL561 CH3 rev2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTJBbXNRZ3lkUDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNHVRNjdxM3BKSjQ", "createdOn":"", "firstName":"packardbell easynote sw w.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNHVRNjdxM3BKSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEJhUXZxNkF6WjA", "createdOn":"", "firstName":"msi MSI MS 168x R0A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEJhUXZxNkF6WjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN25nR2hKVWE3OEE", "createdOn":"", "firstName":"Compal LA3481P 965G KB926.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN25nR2hKVWE3OEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlpXM1R4dGxBOEk", "createdOn":"", "firstName":"nec NEC laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlpXM1R4dGxBOEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkVGQmQ5dzRlWkE", "createdOn":"", "firstName":"samsung  NP R560.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkVGQmQ5dzRlWkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHd6dVN4QmZUUms", "createdOn":"", "firstName":"packardbell versa m340 e2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHd6dVN4QmZUUms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFB6Qmg0SVdZMGM", "createdOn":"", "firstName":"samsung R719 R519.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFB6Qmg0SVdZMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3hGd29fb1hBT3c", "createdOn":"", "firstName":"packardbell  EasyNote H3 Series (Triton A) 00321564.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3hGd29fb1hBT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1UtbFRySFk0Y2c", "createdOn":"", "firstName":"gateway 400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1UtbFRySFk0Y2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemhSSHhRcklTdEU", "createdOn":"", "firstName":"packardbell easynote r7 versa m540.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemhSSHhRcklTdEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem1NX3h2MWZ5Wlk", "createdOn":"", "firstName":"samsung NP Q330 (Houston13).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem1NX3h2MWZ5Wlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEllWHRaXzZWck0", "createdOn":"", "firstName":"jvc mini note mp xp7220kr 5220kr.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEllWHRaXzZWck0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjZISlItYmpaRXc", "createdOn":"", "firstName":"compal dv4 ICH9 VGA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjZISlItYmpaRXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXJqRE1URmhVcnM", "createdOn":"", "firstName":"samsung x460 06 Disassembly & Reassembly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXJqRE1URmhVcnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3hZd0g1aEFMNWs", "createdOn":"", "firstName":"nec Nec Versa 2700 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3hZd0g1aEFMNWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmI2eEVjVS1iTlU", "createdOn":"", "firstName":"msi MSI EX310 MS 13331 MVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmI2eEVjVS1iTlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXk5bVhuTkpsMjQ", "createdOn":"", "firstName":"packardbell easynote tm85 tm86 tm89.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXk5bVhuTkpsMjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHRJcnNsbDJhMWs", "createdOn":"", "firstName":"Gateway MX6128 MX6650 MX6635b (Quanta MA2A) REV 3C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHRJcnNsbDJhMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHJXUVZZMEIwbHc", "createdOn":"", "firstName":"benq inventec 00afa 5000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHJXUVZZMEIwbHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2pNYXhmN2NDQms", "createdOn":"", "firstName":"samsung x460 03 Exploded View.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2pNYXhmN2NDQms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkdzTHQwbE96WDQ", "createdOn":"", "firstName":"samsung  np r510 Precaution.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkdzTHQwbE96WDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiang0QUFOdW1HVnc", "createdOn":"", "firstName":"packardbell ipower gx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiang0QUFOdW1HVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiai11eUx3OWlacWs", "createdOn":"", "firstName":"quanta Advent 7090 Quanta RW3 Rev3B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiai11eUx3OWlacWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWttU2xBQmo0UlE", "createdOn":"", "firstName":"packardbell EasyNote TJ75   WISTRON SJV50 CP   REV SB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWttU2xBQmo0UlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUpGS1ZCTGhCdms", "createdOn":"", "firstName":"gateway lt21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUpGS1ZCTGhCdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEtxdGhnVFNIMDA", "createdOn":"", "firstName":"lg s1 p1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEtxdGhnVFNIMDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2t5REthMElRWjQ", "createdOn":"", "firstName":"ecs a535 1 4 01 r23.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2t5REthMElRWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2l1X3FDS1RZQ2c", "createdOn":"", "firstName":"benq a33.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2l1X3FDS1RZQ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzkzTnhZREcwUlU", "createdOn":"", "firstName":"compal cl50 CL50 CH5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzkzTnhZREcwUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzZzcm9WZkNNazA", "createdOn":"", "firstName":"samsung q45 product specification.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzZzcm9WZkNNazA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzM1OU0wSFRfRU0", "createdOn":"", "firstName":"packardbell easynote m3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzM1OU0wSFRfRU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3ItaWxFWkFUU0k", "createdOn":"", "firstName":"lg LG R510 (Quanta QL8) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3ItaWxFWkFUU0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWms0ckpwU3piQVU", "createdOn":"", "firstName":"samsung R40 HAINAN3 SRE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWms0ckpwU3piQVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWml3VWhlRm9KU0U", "createdOn":"", "firstName":"samsung np n220 n210 n150 nb30 bloomington rev 0.9 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWml3VWhlRm9KU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWk1vbi1HRFZUNzQ", "createdOn":"", "firstName":"msi MSI MS 16331 MS 16332 MS 16323 MS 16351 (MSI 677 Crystal).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWk1vbi1HRFZUNzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWG9VTDZHTU1lOTQ", "createdOn":"", "firstName":"samsung NP R410 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWG9VTDZHTU1lOTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFhxa3ViWWg4a3M", "createdOn":"", "firstName":"quanta Quanta ZG5.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFhxa3ViWWg4a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWludjd0aUo0VEk", "createdOn":"", "firstName":"benq P51 QUANTA TW2Q REV 1ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWludjd0aUo0VEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjRLS2ZnSlVvalk", "createdOn":"", "firstName":"samsung p560 01 Cover.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjRLS2ZnSlVvalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTh4M2xsTmltM3M", "createdOn":"", "firstName":"compal cy23 Table contents.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTh4M2xsTmltM3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzdSQVVsV3p0SEk", "createdOn":"", "firstName":"msi msi 7031.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzdSQVVsV3p0SEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3c2M0Jhd183c28", "createdOn":"", "firstName":"samsung x460 10 Precaution.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3c2M0Jhd183c28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmxiNDE2V2Raamc", "createdOn":"", "firstName":"quanta quanta 18d08 Quanta BDBE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmxiNDE2V2Raamc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXZvZEVybzFOQmM", "createdOn":"", "firstName":"samsung NP X06 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXZvZEVybzFOQmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRExPcXhWbkRFWnc", "createdOn":"", "firstName":"samsung q45 Q45 disassembly  reassembly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRExPcXhWbkRFWnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRElfb3c2ZnlsOFE", "createdOn":"", "firstName":"packardbell easynote w7 dragon sn.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRElfb3c2ZnlsOFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2tiY1dkX2c2aU0", "createdOn":"", "firstName":"packardbell EasyNote BG Series disass enote bg horus g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2tiY1dkX2c2aU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3YzQnZGZFNhV0E", "createdOn":"", "firstName":"samsung p560 04 Part List.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3YzQnZGZFNhV0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2NCT0VyVE1tcDA", "createdOn":"", "firstName":"samsung q45 wiring diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2NCT0VyVE1tcDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWdCLWpWU2NIaW8", "createdOn":"", "firstName":"packardbell  EasyNoteH3 DM 1.0beta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWdCLWpWU2NIaW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOU8xbVF4SV84N28", "createdOn":"", "firstName":"samsung p560 09 Electrical Part List.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOU8xbVF4SV84N28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGM4RV8yU0Z4OUE", "createdOn":"", "firstName":"compal cl51 CL51 CH4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGM4RV8yU0Z4OUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFE1UkdhbWxWYmc", "createdOn":"", "firstName":"compal hel81 HEL81 ch2 Software Specification.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFE1UkdhbWxWYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmh5X1FkclJyQ00", "createdOn":"", "firstName":"packardbell EasyNote ML65 WISTRON SJM50 PU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmh5X1FkclJyQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmJFZW1Ob1Jmd1E", "createdOn":"", "firstName":"packardbell easynote lj75 lj77.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmJFZW1Ob1Jmd1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM29Ud3JoMWlza0E", "createdOn":"", "firstName":"msi MSI EX310 MS 13331 EVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM29Ud3JoMWlza0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1dOdTZQZnJoZm8", "createdOn":"", "firstName":"quanta AS6935 Kilimanjaro2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1dOdTZQZnJoZm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLW9kREJjNUdOdms", "createdOn":"", "firstName":"samsung  SENS X20 14ed6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLW9kREJjNUdOdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlAzaWlxMlhJTUU", "createdOn":"", "firstName":"samsung  np x11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlAzaWlxMlhJTUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienA5TnZhQWk4Z00", "createdOn":"", "firstName":"msi msi ms 168a r0a 135 cx623.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienA5TnZhQWk4Z00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXd1bDZvNEZnSnM", "createdOn":"", "firstName":"benq  r55 Quanta TW3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXd1bDZvNEZnSnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWYwMGZ4RDBmYU0", "createdOn":"", "firstName":"Compal LA 2363.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWYwMGZ4RDBmYU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieExxX2o5NVFLcWc", "createdOn":"", "firstName":"Gateway W350DI..pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieExxX2o5NVFLcWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUxRN3hCNXFIQk0", "createdOn":"", "firstName":"ecs t5800 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUxRN3hCNXFIQk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFZYelNRRm1LRlk", "createdOn":"", "firstName":"samsung Q308 Q310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFZYelNRRm1LRlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnhyS3U0Tk9CcFk", "createdOn":"", "firstName":"samsung r520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnhyS3U0Tk9CcFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclNBby0zUnpmd2s", "createdOn":"", "firstName":"compal cl51 CL51 CH3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclNBby0zUnpmd2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWR1SzM4MHhvcXM", "createdOn":"", "firstName":"samsung  q20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWR1SzM4MHhvcXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVVtRndHV0d2RUU", "createdOn":"", "firstName":"quanta AS 6920 Kilimanjaro.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVVtRndHV0d2RUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2pNS3EzN3hsTVE", "createdOn":"", "firstName":"msi MSI MS 7345 schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2pNS3EzN3hsTVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianQ2b05HWWp3Vjg", "createdOn":"", "firstName":"nec Nec Versa 2500 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianQ2b05HWWp3Vjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialhPS3FIalBlckE", "createdOn":"", "firstName":"packardbell versa p520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialhPS3FIalBlckE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialFIM3ozX3FsOUU", "createdOn":"", "firstName":"gateway ec14t ec18t.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialFIM3ozX3FsOUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTRfWW5ZY0dqTFU", "createdOn":"", "firstName":"packardbell easynote butterfly touch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTRfWW5ZY0dqTFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1NQNjNyWnNLbVk", "createdOn":"", "firstName":"quanta z60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1NQNjNyWnNLbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0Z1TGpqa1R5Q00", "createdOn":"", "firstName":"packardbell easynote m5 m7 versa m400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0Z1TGpqa1R5Q00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZm82RnNaXzlPUFk", "createdOn":"", "firstName":"samsung SENS V20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZm82RnNaXzlPUFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEhHWFp4T3VkSDA", "createdOn":"", "firstName":"nec Nec Versa 2400 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEhHWFp4T3VkSDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEVpSmZ4YWpNQ0k", "createdOn":"", "firstName":"gateway ec54 ec58.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEVpSmZ4YWpNQ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDlrd1FVQ1l2ZDA", "createdOn":"", "firstName":"msi MS 96C4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDlrd1FVQ1l2ZDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDRpTDBHcVp0LVk", "createdOn":"", "firstName":"packardbell easynote a7 versa s940.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDRpTDBHcVp0LVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1JoX0E1ZnVjQkU", "createdOn":"", "firstName":"compal cl50 CL50 table.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1JoX0E1ZnVjQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEVOUzVJVmswclE", "createdOn":"", "firstName":"packardbell dot s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEVOUzVJVmswclE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXZFUzdSZS1XOUk", "createdOn":"", "firstName":"benq r23.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXZFUzdSZS1XOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGtnUFJVVjJXZms", "createdOn":"", "firstName":"samsung R530C, R730C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGtnUFJVVjJXZms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVG1ubWhPUEo1SE0", "createdOn":"", "firstName":"lg t1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVG1ubWhPUEo1SE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFpSZDZEbVlUUDQ", "createdOn":"", "firstName":"packardbell easy lite versa lite.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFpSZDZEbVlUUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV21CRk9WWm12Qk0", "createdOn":"", "firstName":"quanta AS6530  ZK3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV21CRk9WWm12Qk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1RIQjE3SU5mV28", "createdOn":"", "firstName":"samsung p560 05 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1RIQjE3SU5mV28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV01IOGFPc2YxdVk", "createdOn":"", "firstName":"samsung x460 07 Troubleshooting.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV01IOGFPc2YxdVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnU1OS1hd24ySDQ", "createdOn":"", "firstName":"COMPAL COMANECI X05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnU1OS1hd24ySDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjhLc2dBMzBzQVU", "createdOn":"", "firstName":"msi MS 96A9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjhLc2dBMzBzQVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVVPNF8yWEZvaEE", "createdOn":"", "firstName":"msi MS 9618.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVVPNF8yWEZvaEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFhINWFUSUVtazQ", "createdOn":"", "firstName":"quanta Quanta zl6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFhINWFUSUVtazQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnFTNWpVQllaU00", "createdOn":"", "firstName":"packardbell easynote mx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnFTNWpVQllaU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmdVa0hGbllKZVU", "createdOn":"", "firstName":"COMPAL 300P   SAPPORO.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmdVa0hGbllKZVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnB1WUpMMlBxVk0", "createdOn":"", "firstName":"msi msi wind u100 u90 ms n011 rev 1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnB1WUpMMlBxVk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSlpwei1YWkEyOUk", "createdOn":"", "firstName":"samsung NP Q330 (Houston13).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSlpwei1YWkEyOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVI3dVV0ZDBPMkE", "createdOn":"", "firstName":"samsung q1u.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVI3dVV0ZDBPMkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRm1PQjdzR3o5cDg", "createdOn":"", "firstName":"samsung NP R710.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRm1PQjdzR3o5cDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWZsNWhCYURjVmM", "createdOn":"", "firstName":"samsung  x60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWZsNWhCYURjVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVh6SHV6Tk5zVjA", "createdOn":"", "firstName":"msi MSI MS 6380e   K7T266.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVh6SHV6Tk5zVjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXpNZU5GN0xLQUk", "createdOn":"", "firstName":"compal cl56 CL561 CH6 rev2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXpNZU5GN0xLQUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXlFcWppVmsyRnc", "createdOn":"", "firstName":"samsung x460 01 Cover.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXlFcWppVmsyRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzdrTlVDNDVYVDg", "createdOn":"", "firstName":"ecs 223 1 4 0 1 r10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzdrTlVDNDVYVDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkJZbDdnMmJNUHc", "createdOn":"", "firstName":"msi ms 96B6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkJZbDdnMmJNUHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk1hb055SDZ2ZEE", "createdOn":"", "firstName":"packardbell easynote xs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk1hb055SDZ2ZEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVZuZjl3dERnVnc", "createdOn":"", "firstName":"samsung 355V4C, 355V5C, 355USC Compal LA 8868P LA 8863P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVZuZjl3dERnVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXh3V2YyN0Q2VzA", "createdOn":"", "firstName":"ecs A980 1 4 01.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXh3V2YyN0Q2VzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejJVNXppYnI3dlE", "createdOn":"", "firstName":"samsung NP R428.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejJVNXppYnI3dlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXRqdUl3YzRGdm8", "createdOn":"", "firstName":"quanta TM4220 AS5600 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXRqdUl3YzRGdm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVIzYmU4c0lmUFU", "createdOn":"", "firstName":"samsung NP R20 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVIzYmU4c0lmUFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHhHbEUyZTIwWlk", "createdOn":"", "firstName":"packardbell easynote s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHhHbEUyZTIwWlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlZJUlVWX1c3QVE", "createdOn":"", "firstName":"nec Nec Versa 2600 Series Laptop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlZJUlVWX1c3QVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWZRMTNtU0ZLd3c", "createdOn":"", "firstName":"gateway profile 5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWZRMTNtU0ZLd3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicllIY3Z4ampKTnc", "createdOn":"", "firstName":"compal cl56 CL561 CH5 rev3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicllIY3Z4ampKTnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickdTc04yb1AtOVE", "createdOn":"", "firstName":"samsung  np r510 Wiring Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickdTc04yb1AtOVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFlMMGpBb0RPWXc", "createdOn":"", "firstName":"packardbell easynote v mv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFlMMGpBb0RPWXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblFRVGFzQmRMSjg", "createdOn":"", "firstName":"compal hel81 HEL81 ch4 DC DC Converter.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblFRVGFzQmRMSjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTk4NHJTdnVHZUU", "createdOn":"", "firstName":"gateway 450rog.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTk4NHJTdnVHZUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHEtcDJ0TXJvWnM", "createdOn":"", "firstName":"gateway m350.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHEtcDJ0TXJvWnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3RTSVBCTzlYemc", "createdOn":"", "firstName":"samsung x460 02 Product Specification.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3RTSVBCTzlYemc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialBRdk5oRjM2eDg", "createdOn":"", "firstName":"samsung  np r510 Part List.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialBRdk5oRjM2eDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2hOQmVEcGthams", "createdOn":"", "firstName":"samsung x460 09 Electrical Part List.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2hOQmVEcGthams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmIyR2lXRzdaNUk", "createdOn":"", "firstName":"compal cl50 CL50 CH1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmIyR2lXRzdaNUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlluaXJ3TjVOT0U", "createdOn":"", "firstName":"samsung NP R70A001 SER SM EN 20070602092538656 04 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlluaXJ3TjVOT0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1J5YjVtUVNlQlU", "createdOn":"", "firstName":"compal AMAZON AMZ L81 Compal LA 3161P HEL80 Desert Eagle Rev0.3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1J5YjVtUVNlQlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmNBcDZCT3RWeE0", "createdOn":"", "firstName":"samsung  np r540 r780 bremen2 l rev 0.9 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmNBcDZCT3RWeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1pUcXYyVnNWckE", "createdOn":"", "firstName":"samsung p560 06 Disassembly & Reassembly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1pUcXYyVnNWckE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1J4cXJOSzI5TlU", "createdOn":"", "firstName":"msi MSI Megabook M520 MS 1016.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1J4cXJOSzI5TlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3lUMkEwa0VTb1k", "createdOn":"", "firstName":"gateway nv59c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3lUMkEwa0VTb1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2EySFZuWUx0ZzA", "createdOn":"", "firstName":"samsung np n220,n210,n150,nb30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2EySFZuWUx0ZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUdfSkdSSU85TVE", "createdOn":"", "firstName":"compal cl51 CL51 CH6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUdfSkdSSU85TVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHJRNHdLbnpzUmc", "createdOn":"", "firstName":"quanta Quanta TW3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHJRNHdLbnpzUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGhYU2xPWU5EU3M", "createdOn":"", "firstName":"msi Wind Top AE1900 ms 6638 7438 rev 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGhYU2xPWU5EU3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXJMLVZ6R2dSaXM", "createdOn":"", "firstName":"gateway nv42.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXJMLVZ6R2dSaXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVVuNFhjQVViRk0", "createdOn":"", "firstName":"compal cl56 CL561 CH2 rev3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVVuNFhjQVViRk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0dFZ3c1QVB6dFk", "createdOn":"", "firstName":"samsung NP X20 X25 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0dFZ3c1QVB6dFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTVHWWo2ZVVaWXM", "createdOn":"", "firstName":"COMPAL LA 1371.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTVHWWo2ZVVaWXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEFSV0I1MzRPY1E", "createdOn":"", "firstName":"samsung NP R25 PLUS PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEFSV0I1MzRPY1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmxPRGFjZEQ2Mzg", "createdOn":"", "firstName":"compal cl50 CL50 CH3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmxPRGFjZEQ2Mzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUNxQnFtSDNJWVU", "createdOn":"", "firstName":"lg lm40 lm50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUNxQnFtSDNJWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFc2VXdVTEJLME0", "createdOn":"", "firstName":"samsung  np p30 p35 corona rev 0.3 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFc2VXdVTEJLME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjZuOGluZ3JzcUE", "createdOn":"", "firstName":"samsung 7d9c0  FIRENZE II REV X03 R40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjZuOGluZ3JzcUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWdJdzVmMmZ0cUE", "createdOn":"", "firstName":"samsung  np r510 Disassembly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWdJdzVmMmZ0cUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRi1PeEs4SHU4WXM", "createdOn":"", "firstName":"samsung NP X06 PCB Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRi1PeEs4SHU4WXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHRXSEdCY1BGV3c", "createdOn":"", "firstName":"quanta QT8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHRXSEdCY1BGV3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRF8wZnI4bjlabDQ", "createdOn":"", "firstName":"samsung  np r510 Electrical.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRF8wZnI4bjlabDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlVKNVpBd000WFU", "createdOn":"", "firstName":"msi MSI 96B6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlVKNVpBd000WFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0lzUHMzZ1FyRVU", "createdOn":"", "firstName":"packardbell easynote me.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0lzUHMzZ1FyRVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEdGTnV5VjJxVWs", "createdOn":"", "firstName":"msi MSI CX500 (MS 1682).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEdGTnV5VjJxVWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOC1ZaVJlaGlaTjg", "createdOn":"", "firstName":"samsung  740n ET.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOC1ZaVJlaGlaTjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmhHbU1IMTV4Qlk", "createdOn":"", "firstName":"compal cl51 CL51 CH1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmhHbU1IMTV4Qlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNm5WNHE2bGw1NkU", "createdOn":"", "firstName":"compal cl50 CL50 A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNm5WNHE2bGw1NkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNjQ3RnVwcF84dWs", "createdOn":"", "firstName":"compal LA3401P 945G KB910QF A135.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNjQ3RnVwcF84dWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN29XSEN3V2RFUnc", "createdOn":"", "firstName":"samsung  np r510 Exploded View .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN29XSEN3V2RFUnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlpsQUtHVGdlQWM", "createdOn":"", "firstName":"lg LG R590 gigabyte q1585n forsa f7685 quanta ql4 rev e sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlpsQUtHVGdlQWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM25Xa1EwaFV2b2M", "createdOn":"", "firstName":"compal cy23 CH 5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM25Xa1EwaFV2b2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU1jYXByZ2VTTE0", "createdOn":"", "firstName":"samsung  np r510 Wiring Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU1jYXByZ2VTTE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFp3SW44dFZ0R3c", "createdOn":"", "firstName":"sony SONY VGN C22CH MS60 MB SONY VGN C22CH MS60 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFp3SW44dFZ0R3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnlCT3hVVldqU0k", "createdOn":"", "firstName":"sony Sony Vaio VPC L Series M920 PVT  M920 PVT .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnlCT3hVVldqU0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiako0YVVVRXNGMTA", "createdOn":"", "firstName":"sony vgnS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiako0YVVVRXNGMTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUpUSk4wRmh4Y1E", "createdOn":"", "firstName":"wistron X40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUpUSk4wRmh4Y1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnlYaVFuQWFUSjg", "createdOn":"", "firstName":"sony SONY PCG GRS175.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnlYaVFuQWFUSjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlNmOXFaTjRXdXc", "createdOn":"", "firstName":"sony C22CH MS60 1 05 FOXCONN MBX 163 C22CH MS60 1 05 FOXCONN MBX 163.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlNmOXFaTjRXdXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX19LWnc1dlRVNEE", "createdOn":"", "firstName":"sony CR13 MBX 177 QUANTA GD1 REV 1A CR13 MBX 177 QUANTA GD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX19LWnc1dlRVNEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjZDVzVSWXdjZFU", "createdOn":"", "firstName":"sony SONY VAIO VPCF136FM MBX 238.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjZDVzVSWXdjZFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHlyeENWd2ZOUEE", "createdOn":"", "firstName":"sony vgn fe.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHlyeENWd2ZOUEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVVvTUpBT1NoLVU", "createdOn":"", "firstName":"sony 438.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVVvTUpBT1NoLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFFueGlaS2RabnM", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFFueGlaS2RabnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3ZjMHRJUld5QTg", "createdOn":"", "firstName":"sony ux30 unlocked.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3ZjMHRJUld5QTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0l2LUh2OXo5cDg", "createdOn":"", "firstName":"sony Sony VGN FSxxxx laptopschematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0l2LUh2OXo5cDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkFYMGN6UElPams", "createdOn":"", "firstName":"sony SONY VGN C11 C21 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkFYMGN6UElPams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTFIa3FDSjBOUVE", "createdOn":"", "firstName":"sony SONY VPCF11 M931 (IRX 5300) MBX 215 M931 (IRX 5300) MBX 215.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTFIa3FDSjBOUVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTBuek1mdnFZM1U", "createdOn":"", "firstName":"sony vgnN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTBuek1mdnFZM1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjhrT052S2tyelk", "createdOn":"", "firstName":"sony SONY VAIO MS80 REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjhrT052S2tyelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVpZRmZRX3lIbm8", "createdOn":"", "firstName":"sony PCG505F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVpZRmZRX3lIbm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTg4WHUzaHNTQUU", "createdOn":"", "firstName":"sony 479.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTg4WHUzaHNTQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQk00NUN6d0lFOTA", "createdOn":"", "firstName":"sony Sony VGN AR130  AR320E MBX 164   FOXCONN MS21   REV 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQk00NUN6d0lFOTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3luMGRxVmlQQUU", "createdOn":"", "firstName":"sony MBX 247 Quanta HK1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3luMGRxVmlQQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ05vVGxjXzJPcE0", "createdOn":"", "firstName":"sony vgn fj.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ05vVGxjXzJPcE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWF6dTFTX29KMWs", "createdOn":"", "firstName":"sony Sony VGN BZ Series (MBX 193 Quanta TW1) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWF6dTFTX29KMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2Y0ejBFNkpCcnc", "createdOn":"", "firstName":"sony Sony MBX 269 MBX 268 HK5 HK6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2Y0ejBFNkpCcnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieU8yRmZWWkdJclE", "createdOn":"", "firstName":"sony pgc grz530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieU8yRmZWWkdJclE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUplVDZsSmV6WWM", "createdOn":"", "firstName":"sony SONY VAIO VPCEB15 MBX 223 SONY VAIO VPCEB15 MBX 223.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUplVDZsSmV6WWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2d4bURVSjdQMlE", "createdOn":"", "firstName":"sony d6ab6 Foxconn m850 1 01 mbx 204 rev 1.0 sch   5f054 sony m851 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2d4bURVSjdQMlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2Zud29HMGh6TDA", "createdOn":"", "firstName":"sony PCG FXA53 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2Zud29HMGh6TDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFVhaUxXTENjY2c", "createdOn":"", "firstName":"sony Sony Vaio PCG 61611 Quanta NE7 REV 3A 22MAR2010 DA0NE7MB6D0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFVhaUxXTENjY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2xWZ25nSC1ZWW8", "createdOn":"", "firstName":"sony MBX226 M9A0 MP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2xWZ25nSC1ZWW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnAwVHg5UjJjWkU", "createdOn":"", "firstName":"sony Sony MBX 208 Quanta SY2 mb 0409c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnAwVHg5UjJjWkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmhXMUpzamYzcFk", "createdOn":"", "firstName":"sony vgnSZ.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmhXMUpzamYzcFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUxSM3hMSExkeGs", "createdOn":"", "firstName":"sony 481.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUxSM3hMSExkeGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2k2WFVxUlBXTFU", "createdOn":"", "firstName":"sony sony vaio vgn c22ch ms60 1 05 foxconn mbx 163.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2k2WFVxUlBXTFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia016OEROQm5HemM", "createdOn":"", "firstName":"sony SONY VGN C22CH MS60 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia016OEROQm5HemM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDZOeFl4cmhjcHM", "createdOn":"", "firstName":"sony sony ms01 sony ms01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDZOeFl4cmhjcHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHBiZVdXWHp5UE0", "createdOn":"", "firstName":"sony Sony Vaio VGN SR Series Foxconn M750 Foxconn M750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHBiZVdXWHp5UE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejVtYlFPdHZTTk0", "createdOn":"", "firstName":"sony Sony Vaio PCG 61611 Quanta NE7 REV 3A 22MAR2010 AMD Danube Descrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejVtYlFPdHZTTk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTl5T3c5SmxpN0k", "createdOn":"", "firstName":"sony sony mbx 185 m730 m730 1 01 rev 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTl5T3c5SmxpN0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTkyMC05dkxrZDg", "createdOn":"", "firstName":"sony PCG 5G2T VGN CR13 QUANTA GD1 MBX 177 REV 1A PCG 5G2T VGN CR13 QUANTA GD1 MBX 177 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTkyMC05dkxrZDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1czRS1nNHM4ekU", "createdOn":"", "firstName":"sony QUANTA RJ6 QUANTA RJ6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1czRS1nNHM4ekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickttaGZkcmlTTDQ", "createdOn":"", "firstName":"sony Quanta NE7 AMD Danube 31NE7MB0000 DA0NE7MB6D0 Sony Vaio VPC EE2E1E VPC EE22FXVPC EE PCG 61611 R3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickttaGZkcmlTTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickJ6SzFWX2pzaWM", "createdOn":"", "firstName":"sony MBX 224 M960 M970.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickJ6SzFWX2pzaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmFiSzVBYVdJbnc", "createdOn":"", "firstName":"sony Sony VGN FZ Series (MBX 165 MS90) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmFiSzVBYVdJbnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibldRUUJaQnZ1eWc", "createdOn":"", "firstName":"sony SONY mbx 194 PVT MB 0701.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibldRUUJaQnZ1eWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXNSVXhEQ1FJYTA", "createdOn":"", "firstName":"sony Sony Vaio mbx 143.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXNSVXhEQ1FJYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzhkN0R6bUpUWVE", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3 DVT REV 1A 02.09.2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzhkN0R6bUpUWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlU2WXNrUEUxTms", "createdOn":"", "firstName":"sony SONY VGN SR5 M750 MBX 190   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlU2WXNrUEUxTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWx3ZmlfZVk2S2M", "createdOn":"", "firstName":"sony Sony Vaio VGN AR Series (MBX 176 M610) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWx3ZmlfZVk2S2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnRGRzB3UnJIS1E", "createdOn":"", "firstName":"sony pgc grz530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnRGRzB3UnJIS1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzNFdng2Uk9PX2s", "createdOn":"", "firstName":"sony SONY BX Series rj1 mb m26 0528a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzNFdng2Uk9PX2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjdfZUVpdDllOTg", "createdOn":"", "firstName":"sony sony vgn ar130 ar320e mbx 164 foxconn ms21 rev 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjdfZUVpdDllOTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXFsZlg5aWdYYWs", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3 DVT ATHEROS REV 1A 18.08.2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXFsZlg5aWdYYWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWlueTJRa1VpVnM", "createdOn":"", "firstName":"sony vgn s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWlueTJRa1VpVnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTJaQ1pMTTl5S0k", "createdOn":"", "firstName":"sony Sony MBX 178 m620 pvt mb 0608 1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTJaQ1pMTTl5S0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGpkZF9Gak9GVXc", "createdOn":"", "firstName":"sony Sony Vaio VGN AW Series M780 MBX194 M780 MBX194.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGpkZF9Gak9GVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzdkWVVwZ1VHY1E", "createdOn":"", "firstName":"sony SONY MBX 153 VGN TX56C SONY MBX 153 VGN TX56C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzdkWVVwZ1VHY1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVU0yN2RnYndtVkU", "createdOn":"", "firstName":"sony VGN FS SERIES MBX 143 MS03 VGN FS SERIES MBX 143 MS03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVU0yN2RnYndtVkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHNxMFUwRnI4VGc", "createdOn":"", "firstName":"sony Sony Vaio VGN SR55E schematic, M750 MBX 190.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHNxMFUwRnI4VGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFpLUE9hQjJaWkE", "createdOn":"", "firstName":"sony Sony MS60 1 01 (MBX 159 r1.0).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFpLUE9hQjJaWkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzRJQ0tXY1pxdEk", "createdOn":"", "firstName":"sony 421.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzRJQ0tXY1pxdEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXZUTE5OR0I1VFU", "createdOn":"", "firstName":"sony 79186 MBX 247 Quanta HK1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXZUTE5OR0I1VFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHhyUl9nYkxxUzA", "createdOn":"", "firstName":"sony pgc .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHhyUl9nYkxxUzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT29OMVhYRGNWMVE", "createdOn":"", "firstName":"sony SONY VAIO PCG NVR23 MBX 67 QUANTA NE4 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT29OMVhYRGNWMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkkwM3RZczN1Rjg", "createdOn":"", "firstName":"sony SONY VGN CR MBX 177 QUANTA GD1 COMPLETO SONY VGN CR MBX 177 QUANTA GD1 CHARGER & POWER SUPPLY DC IN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkkwM3RZczN1Rjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkJGekhFZjBoWE0", "createdOn":"", "firstName":"sony SONY VAIO MBX 126   QUANTA JE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkJGekhFZjBoWE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWJUbU5YSG9OQ3c", "createdOn":"", "firstName":"sony SONY BX Series RJ1 and RJ5 CB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWJUbU5YSG9OQ3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHlrT2JJb3RLa0k", "createdOn":"", "firstName":"sony pcg fx210.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHlrT2JJb3RLa0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDhqc0NJaXZGcUE", "createdOn":"", "firstName":"sony Sony Vaio VPC W215A VPC W217JC VPC W211AXSY3 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDhqc0NJaXZGcUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3VCOFZsVkRHTjQ", "createdOn":"", "firstName":"sony SVE151A11W Z50CR MB S1202 2 48.4RM01 . 021 MBX 266 4a41b FOXCONN M9A0 MP Sony Vaio VPC CW.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3VCOFZsVkRHTjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzM1aUFRSzZYaXM", "createdOn":"", "firstName":"sony sony FJ67C FJseries rd1 mb 0702a ntel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzM1aUFRSzZYaXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVYzSmp3U2I3MEU", "createdOn":"", "firstName":"sony VGN FZ25 MBX 165 MS91 REV 1.0 VGN FZ25 MBX 165 MS91 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVYzSmp3U2I3MEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGwzY2dpTm1yYUk", "createdOn":"", "firstName":"sony MBX 237 v030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGwzY2dpTm1yYUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGRDanJJVTFVMDQ", "createdOn":"", "firstName":"sony SONY VAIO PCG NVR23   MBX 67   QUANTA NE4   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGRDanJJVTFVMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRExfLS02YUwtVTQ", "createdOn":"", "firstName":"sony SONY Vaio VGN BX195 BX196 BX500 RJ1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRExfLS02YUwtVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDBNZlJnUExDOFk", "createdOn":"", "firstName":"sony Sony Vaio VPC F Series, M930 MBX 215 (IRX 5100) REV SB .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDBNZlJnUExDOFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVJZQzhWNlpBWE0", "createdOn":"", "firstName":"sony SONY GD1 Charger Board SONY GD1 Charger Board.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVJZQzhWNlpBWE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0NSS3l0enF0dVU", "createdOn":"", "firstName":"sony Sony Vaio VGN AX RJ5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0NSS3l0enF0dVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMm1fWDA0NVRMU00", "createdOn":"", "firstName":"sony M851 MBX 217.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMm1fWDA0NVRMU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlV4QnB2bno3VUU", "createdOn":"", "firstName":"sony SONY VAIO MS12 MBX 149 REV 2.0 SONY VAIO MS12 MBX 149 REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlV4QnB2bno3VUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjd5SVM5VXBtaU0", "createdOn":"", "firstName":"sony Sony VGN AR Sony VGN AR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjd5SVM5VXBtaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGNXdVZEY2JLQnM", "createdOn":"", "firstName":"sony SONY VGN SR28.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGNXdVZEY2JLQnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3Z1M2dlQmF4Sk0", "createdOn":"", "firstName":"sony Sony Vaio VGN AW series MBX 194 M780  sd FOXCONN M780 CantigaP WPCE775L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3Z1M2dlQmF4Sk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM19nX0xzdDFIWUE", "createdOn":"", "firstName":"sony 452.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM19nX0xzdDFIWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVdTTDFBNUdBbGM", "createdOn":"", "firstName":"sony SONY GD1B SONY GD1B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVdTTDFBNUdBbGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVFZQW4yVnluckU", "createdOn":"", "firstName":"sony vgnT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVFZQW4yVnluckU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVEzZnlyaFFMaUE", "createdOn":"", "firstName":"sony SONY QUANTA WK1 MBX175 mb 1227b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVEzZnlyaFFMaUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0ZtbmFYdkhHV2s", "createdOn":"", "firstName":"sony Sony VGN BX Series Sony VGN BX Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0ZtbmFYdkhHV2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmRpS1U1MHd5cWs", "createdOn":"", "firstName":"sony Sony VPC S Series – MBX 216 Sony VPC S Series – MBX 216.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmRpS1U1MHd5cWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0hRWHVPS2RFVDg", "createdOn":"", "firstName":"sony SONY RJ6   QUANTA RJ6   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0hRWHVPS2RFVDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblFub2lLR2FXcVk", "createdOn":"", "firstName":"sony VgnC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblFub2lLR2FXcVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2M0YloyWWRFMEk", "createdOn":"", "firstName":"sony vgn bx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2M0YloyWWRFMEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzFWRW9tRmY4MjA", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3 DVT REV 1A 29.08.2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzFWRW9tRmY4MjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkNFLVhhRHRqbTQ", "createdOn":"", "firstName":"sony NE7 SONY PCG 61611 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkNFLVhhRHRqbTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWZIcXRPWUJVeVk", "createdOn":"", "firstName":"sony SONY mbx 194 PVT MB 0701 SONY mbx 194 PVT MB 0701.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWZIcXRPWUJVeVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0w4ZHNQMEFENTg", "createdOn":"", "firstName":"sony Wistron Tucana MBX 238.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0w4ZHNQMEFENTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzFiVG5Ia29HNGs", "createdOn":"", "firstName":"sony SONY VGN CR SERIES MBX 177 QUANTA GD1 REV 1A SONY VGN CR SERIES MBX 177 QUANTA GD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzFiVG5Ia29HNGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmZNN1d3T3lWdGM", "createdOn":"", "firstName":"sony pgc grv550.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmZNN1d3T3lWdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGlRZUFzTFlKdDg", "createdOn":"", "firstName":"sony Sony Vaio VGN N11S MS70 1 01 R2.0(MBX 160) R2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGlRZUFzTFlKdDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEs4Snctc0hPckU", "createdOn":"", "firstName":"sony SONY BX Series rj5 mb m26 0518a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEs4Snctc0hPckU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVy1hSXNVUDdKbU0", "createdOn":"", "firstName":"sony SONY M720 MBX 182 REV 1.0 SONY M720 MBX 182 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVy1hSXNVUDdKbU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUxJR3RWUGxjNWs", "createdOn":"", "firstName":"sony M851 MBX 217 alone significant.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUxJR3RWUGxjNWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3FhWGQwc2RIU1U", "createdOn":"", "firstName":"sony 449.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3FhWGQwc2RIU1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzNCMFlXTGVJMGM", "createdOn":"", "firstName":"sony SONY PCG 61611.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzNCMFlXTGVJMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlpoRE9Id2xYM2M", "createdOn":"", "firstName":"sony 418.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlpoRE9Id2xYM2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGNFekh4aWY2WTA", "createdOn":"", "firstName":"sony Sony Vaio VPC W215A – VPC W217JC – VPC W211AX SY3  SY3 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGNFekh4aWY2WTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2lIallmbXhBQjQ", "createdOn":"", "firstName":"sony 435.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2lIallmbXhBQjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXk2NmlLRkIySlE", "createdOn":"", "firstName":"sony 468.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXk2NmlLRkIySlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFpLYXlMQ25Db2c", "createdOn":"", "firstName":"sony VPCSB1X9E MBX 237 v030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFpLYXlMQ25Db2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEJPNTN5RmtLRUU", "createdOn":"", "firstName":"sony Sony MBX 247 QUANTA HK1 REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEJPNTN5RmtLRUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDJRd2h4VjE3aWs", "createdOn":"", "firstName":"sony M930 (IRX 5100) MBX 215 REV SB  M930 (IRX 5100) MBX 215 REV SB .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDJRd2h4VjE3aWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3AxOTJVVjdPejA", "createdOn":"", "firstName":"sony 415.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3AxOTJVVjdPejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT09SNTUzN1lCNk0", "createdOn":"", "firstName":"sony pfg fx777.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT09SNTUzN1lCNk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSktNdlFYMlltR2M", "createdOn":"", "firstName":"sony Sony VGC RT2SRY Nettop M841 DVT M841 DVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSktNdlFYMlltR2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjhfXzg1b0FvWVk", "createdOn":"", "firstName":"sony 422.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjhfXzg1b0FvWVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXE3ck0tOUJDS2c", "createdOn":"", "firstName":"wistron X60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXE3ck0tOUJDS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSU9JSUhZbTFkdk0", "createdOn":"", "firstName":"sony 439.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSU9JSUhZbTFkdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFNKajZDX0hpTWc", "createdOn":"", "firstName":"sony vgn fj.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFNKajZDX0hpTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDlxYm1kajZRN0E", "createdOn":"", "firstName":"sony sony mbx143 ms03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDlxYm1kajZRN0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3EzbXowTEtrZm8", "createdOn":"", "firstName":"sony Sony VGN NR Seri (MBX 182) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3EzbXowTEtrZm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2VSRklrZS1VRW8", "createdOn":"", "firstName":"sony sony FJ67C FJseries rd1 mb 0702a ntel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2VSRklrZS1VRW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS214WWktdzlycDg", "createdOn":"", "firstName":"sony VGN S36C S360 S38 S350 S52 S62 S370 mbx 109 mbx 110 VGN S36C S360 S38 S350 S52 S62 S370 mbx 109.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS214WWktdzlycDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXZVQ0FKeXVrSk0", "createdOn":"", "firstName":"sony SONY VAIO VGN FJ SERIES   QUANTA RD1   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXZVQ0FKeXVrSk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRG8yZzMzVnV4ODg", "createdOn":"", "firstName":"sony MBX 149 MS11 MB 1 MBX 149 MS11 MB 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRG8yZzMzVnV4ODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjRuelR4aWU1bmc", "createdOn":"", "firstName":"sony M931 (IRX 5300) MBX 215  M931 (IRX 5300) MBX 215 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjRuelR4aWU1bmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjBPNU1SQXMwUTg", "createdOn":"", "firstName":"sony SONY MBX 196   QUANTA GD2   REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjBPNU1SQXMwUTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQi0wckdtaWxjNUE", "createdOn":"", "firstName":"sony MBX 224 M960 M970.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQi0wckdtaWxjNUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUgySXNUMUFCRWc", "createdOn":"", "firstName":"sony vgnBX.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUgySXNUMUFCRWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTg4RHpvOXM2aWs", "createdOn":"", "firstName":"sony Vaio M630 M640 MBX 179.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTg4RHpvOXM2aWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmNJNzlNWFBzYzA", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 TOUCHPAD REV 0.20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmNJNzlNWFBzYzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXJ0WHVpN3IwN1U", "createdOn":"", "firstName":"sony TROUBLESHOOTING.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXJ0WHVpN3IwN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUE2aDNXV0RjVUk", "createdOn":"", "firstName":"sony Sony MBX 229   WISTRON CADIZ CP   REV  1M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUE2aDNXV0RjVUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMS1CUDQtRWIxcVE", "createdOn":"", "firstName":"sony sony vgn n365e foxconn ms72 mbx 160 rev 0.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMS1CUDQtRWIxcVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVgxMnZ3dlJfUDg", "createdOn":"", "firstName":"sony Sony CS series MBX 196 GD2 Motherboard.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVgxMnZ3dlJfUDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTM1c3pYZmF2RWc", "createdOn":"", "firstName":"sony MBX 163 MS60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTM1c3pYZmF2RWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFUwSVJTMXo2Wms", "createdOn":"", "firstName":"sony SY3  SY3 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFUwSVJTMXo2Wms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjE2Q0Z1LWFxNnM", "createdOn":"", "firstName":"sony Sony RJ rd1 mb MBX 145.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjE2Q0Z1LWFxNnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibThhNVEtTWh0Z2M", "createdOn":"", "firstName":"sony PCG FR825CP QUANTA RB1 REV 1A PCG FR825CP QUANTA RB1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibThhNVEtTWh0Z2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazcxbVg4SmNjTkE", "createdOn":"", "firstName":"sony PCGF150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazcxbVg4SmNjTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazJreVl0LWs4Mjg", "createdOn":"", "firstName":"sony pgc grs175.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazJreVl0LWs4Mjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajZQWkFfUE9sSHM", "createdOn":"", "firstName":"wistron x41 SNOTE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajZQWkFfUE9sSHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVVmTi1HU0g3b2s", "createdOn":"", "firstName":"sony SONY VGN FZ25 MBX 165 MS91 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVVmTi1HU0g3b2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHdPb01OQWZ3cjg", "createdOn":"", "firstName":"sony Sony Vaio PCG 61611Quanta NE7    REV 3A 22MAR2010Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHdPb01OQWZ3cjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYl9naWI5R1VESTA", "createdOn":"", "firstName":"sony Sony VPC S Series E28093 MBX 216 Free Laptop Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYl9naWI5R1VESTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2pUd3VLOGZIUk0", "createdOn":"", "firstName":"sony sony vgn nr series mbx 182 foxconn m720 rev1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2pUd3VLOGZIUk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWdMYm5tZ01yWTQ", "createdOn":"", "firstName":"sony SONY VPCY2 mbx 229 1 09941 1M CADIZ CP  1M 0424.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWdMYm5tZ01yWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGRPMWl5Ylo5UVE", "createdOn":"", "firstName":"sony VGN AR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGRPMWl5Ylo5UVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUR6UWVEVGw2aDQ", "createdOn":"", "firstName":"sony SONY M720   MBX 182   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUR6UWVEVGw2aDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXJ2dFdnLXNkUHc", "createdOn":"", "firstName":"sony Sony Vaio VGN FS series MBX 130 MS01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXJ2dFdnLXNkUHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVRydzVpdE5VaUk", "createdOn":"", "firstName":"sony Sony MBX 226 Foxconn M9A0 MP FOXCONN M9A0 MP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVRydzVpdE5VaUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFpmcFBBdmZ2UVU", "createdOn":"", "firstName":"sony vgn sz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFpmcFBBdmZ2UVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3gtZjNtRGZULTA", "createdOn":"", "firstName":"sony Sony VGN FSxxxx laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3gtZjNtRGZULTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWV5UWoxcGlHdTQ", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3 A REV 1A 18.08.2009.pdf .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWV5UWoxcGlHdTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTRSUS1DSDdLVnc", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 1.0 SONY MS70 MBX 160 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTRSUS1DSDdLVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHJLRFVfSC1UQ0U", "createdOn":"", "firstName":"sony pcg fx290 290k.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHJLRFVfSC1UQ0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFYxbjAwcUtDNVk", "createdOn":"", "firstName":"sony Sony MBX 194 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFYxbjAwcUtDNVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2VWbk5oYzM5b2M", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3 PVT REV 1A 29.08.2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2VWbk5oYzM5b2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0hnanNaeV9tWm8", "createdOn":"", "firstName":"sony Sony Vaio VGN NS Series MBX 202 M790 MBX 202 M790.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0hnanNaeV9tWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3NCdnhpeHhkVG8", "createdOn":"", "firstName":"sony vpceg28fg d63a8 Wistron Z40HR MBX 250.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3NCdnhpeHhkVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0RVLV9hbndVVjg", "createdOn":"", "firstName":"sony pgc c1vp.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0RVLV9hbndVVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXg5cDNqQmlWamM", "createdOn":"", "firstName":"sony pcg fx777 877.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXg5cDNqQmlWamM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzB0dFJfWGdWZzg", "createdOn":"", "firstName":"sony MBX 202 M790 schematic MBX 202 M790 schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzB0dFJfWGdWZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnlqdXVwNzB2Z2M", "createdOn":"", "firstName":"sony SONY MBX 224 VPC EA SERIES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnlqdXVwNzB2Z2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUtiUjNDMC1LbUk", "createdOn":"", "firstName":"sony AR130 AR320E MBX 164 FOXCONN MS21 REV 1.1 AR130 AR320E MBX 164 FOXCONN MS21 REV 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUtiUjNDMC1LbUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUdlU3FRZS14Rjg", "createdOn":"", "firstName":"sony sony vaio vgn fs series mbx 130 MS02sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUdlU3FRZS14Rjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWJ5WFNrT2VsRFE", "createdOn":"", "firstName":"sony pcga dsd5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWJ5WFNrT2VsRFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGFMOUhQQkdzZFU", "createdOn":"", "firstName":"sony SONY MS04 MBX 143 REV 1.0 SONY MS04 MBX 143 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGFMOUhQQkdzZFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEVnbW9OMS1OaVU", "createdOn":"", "firstName":"sony Sony SVF15 Quanta HKC (DA0HK9MB6D0) HK9 rev1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEVnbW9OMS1OaVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0FKdWVDYkJhams", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 0.30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0FKdWVDYkJhams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2xZZTdSRkdhdk0", "createdOn":"", "firstName":"sony pcg r505afe.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2xZZTdSRkdhdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzZ0aHAxZlhjUVE", "createdOn":"", "firstName":"sony vgn t.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzZ0aHAxZlhjUVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzVlZ3B4NHRnTkE", "createdOn":"", "firstName":"sony Sony MBX 193   QUANTA TW1   REV 3E.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzVlZ3B4NHRnTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzR6TlowTldFMm8", "createdOn":"", "firstName":"sony 486.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzR6TlowTldFMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVy1mWXVoQzltWFE", "createdOn":"", "firstName":"sony vgn fz25 mbx 165 MS91 1 01 R1 vgn fz25 mbx 165 MS91 1 01 R1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVy1mWXVoQzltWFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTlaOXZUdkdsOVk", "createdOn":"", "firstName":"sony Sony Vaio PCG 61611 Quanta NE7 REV 3A 22MAR2010 AMD Danube UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTlaOXZUdkdsOVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlNpZmVDYUtpMmc", "createdOn":"", "firstName":"sony SONY VGN C22CH MS60 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlNpZmVDYUtpMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzBxNi0zcjQwZU0", "createdOn":"", "firstName":"sony PCG 5G2T VGN CR13 QUANTA GD1 MBX 177 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzBxNi0zcjQwZU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHh6Q19ERjQ2WDg", "createdOn":"", "firstName":"sony Sony VPC S Series – MBX 216.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHh6Q19ERjQ2WDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS21MRldXNU9WSGs", "createdOn":"", "firstName":"sony Sony VGN FSxxxx PCG 7M1L CNX336 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS21MRldXNU9WSGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGxQSy1GLW1uODA", "createdOn":"", "firstName":"sony pcg c1vp c1vpk.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGxQSy1GLW1uODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNS04NFNaZWhEa0U", "createdOn":"", "firstName":"sony pgc vx89.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNS04NFNaZWhEa0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGlWR3F5bnpEQms", "createdOn":"", "firstName":"sony pcg sr27 sr27k.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGlWR3F5bnpEQms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0l6TmlXRlFVb3c", "createdOn":"", "firstName":"sony SONY VAIO VGN FJ SERIES QUANTA RD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0l6TmlXRlFVb3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0lNN0J6T250Wms", "createdOn":"", "firstName":"sony service manual sony vaio vgn FJ.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0lNN0J6T250Wms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWM4R0R2d0VmYWs", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 2.0 SONY MS70 MBX 160 REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWM4R0R2d0VmYWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmdtcklyeER1ZkE", "createdOn":"", "firstName":"sony PCG808.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmdtcklyeER1ZkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkZJdDNmTXhUWGs", "createdOn":"", "firstName":"sony 472.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkZJdDNmTXhUWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXAzMkRIM21lS2M", "createdOn":"", "firstName":"sony SONY MBX 165 MS90   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXAzMkRIM21lS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWlJUDRJUUVudjg", "createdOn":"", "firstName":"sony PCG FR310 MBX 80 QUANTA NE5 PCG FR310 MBX 80 QUANTA NE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWlJUDRJUUVudjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3lJTElPOG5BdWc", "createdOn":"", "firstName":"sony 427.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3lJTElPOG5BdWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1VpSEtwQXVpaXc", "createdOn":"", "firstName":"sony MBX 159 MS60 1 01 0.3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1VpSEtwQXVpaXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0lLYl9fdjlvRDA", "createdOn":"", "firstName":"sony vgnX505.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0lLYl9fdjlvRDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVlmWi1vOGFSWVE", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 TOUCHPAD REV 0.20 SONY MS70 MBX 160 TOUCHPAD REV 0.20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVlmWi1vOGFSWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1JlbzUyQ2ZmeFE", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1JlbzUyQ2ZmeFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakdfeVYzZGI5Vkk", "createdOn":"", "firstName":"sony SONY MBX 215 MBX 235 FOXCONN M931 (IRX 5300) REV SA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakdfeVYzZGI5Vkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVRXdjJkZDk2VVk", "createdOn":"", "firstName":"sony SONY MSS1 MBX 155 REV 0.30Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVRXdjJkZDk2VVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlBGUzdWRmRFUEU", "createdOn":"", "firstName":"sony Sony GD1B (MBX 177A) Sony GD1B (MBX 177A).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlBGUzdWRmRFUEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkpheEtIVlREVFk", "createdOn":"", "firstName":"sony MBX 202 M790 schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkpheEtIVlREVFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWF3a2dKNVhxeVU", "createdOn":"", "firstName":"sony vgn tx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWF3a2dKNVhxeVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUptZWF2c1U3NW8", "createdOn":"", "firstName":"sony Sony Vaio VPC F Series, M931 MBX 215 (IRX 5300).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUptZWF2c1U3NW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3VoMHJqdzBPQUk", "createdOn":"", "firstName":"sony 423.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3VoMHJqdzBPQUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkU4V1FuRzhMZ00", "createdOn":"", "firstName":"sony Sony VGN FS Series (MBX 155 MSS1) laptop schematics1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkU4V1FuRzhMZ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXdVZThYYVhjY2c", "createdOn":"", "firstName":"sony vgn n.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXdVZThYYVhjY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXRqRW5BTkVERG8", "createdOn":"", "firstName":"sony vgnTX.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXRqRW5BTkVERG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWhoOThQNTVHSEE", "createdOn":"", "firstName":"sony SONY MBX 196 QUANTA GD2 REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWhoOThQNTVHSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnJXQzlMa3plRTQ", "createdOn":"", "firstName":"sony SONY PCG FR310   MBX 80   QUANTA NE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnJXQzlMa3plRTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlluMEs0bkp6MEk", "createdOn":"", "firstName":"sony SONY VAIO MS80 REV 0.1 SONY VAIO MS80 REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlluMEs0bkp6MEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjdkS3dIejgxRFk", "createdOn":"", "firstName":"sony Sony VPCY2 MBX 229  sony VPCY2 MBX 229 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjdkS3dIejgxRFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDR0UUhEVFRERjg", "createdOn":"", "firstName":"sony SONY MBX 165 MS90 POWER SEQUENCE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDR0UUhEVFRERjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXR3SURjdXhSdDQ", "createdOn":"", "firstName":"sony 498.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXR3SURjdXhSdDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUDNRUnZvUVdJMWc", "createdOn":"", "firstName":"sony SONY VGN TX Series MBX 153 VGN TX56C SONY MBX 153 VGN TX56C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUDNRUnZvUVdJMWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3FySTNJak1vWlk", "createdOn":"", "firstName":"sony SONY VGN CR13 MBX 177 QUANTA GD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3FySTNJak1vWlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnZORzNFdmVTMEE", "createdOn":"", "firstName":"wistron x41 S3A FINAL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnZORzNFdmVTMEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTjl1QjJPd05zUk0", "createdOn":"", "firstName":"sony M9A0 MP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTjl1QjJPd05zUk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXJSSzlMZE1zVGc", "createdOn":"", "firstName":"sony vgnFJ.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXJSSzlMZE1zVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEtaVVkyazFkSlk", "createdOn":"", "firstName":"sony SONY PCG 5G2T VGN CR13 GD1 MBX 177.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEtaVVkyazFkSlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT25FenJocmVOWnM", "createdOn":"", "firstName":"sony Vaio VGN NR Series Vaio VGN NR Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT25FenJocmVOWnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzAzOXFhVXlCdHc", "createdOn":"", "firstName":"sony Sony ms60 MBX 159.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzAzOXFhVXlCdHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGN5LVlqRXdJUTQ", "createdOn":"", "firstName":"sony sony vaio vgn tz mbx 168 foxconn ms72 1 01 rev 0.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGN5LVlqRXdJUTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDhGZDFLNndOR3c", "createdOn":"", "firstName":"sony vgnFE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDhGZDFLNndOR3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSC14ZWRrdkFQWEE", "createdOn":"", "firstName":"sony sony vaio vpc sa foxconn v030 mbx 237 rev 1.3 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSC14ZWRrdkFQWEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1ZyV1p1aTUtbk0", "createdOn":"", "firstName":"sony SONY SVE14AA11V Vaio Foxconn V030 MP MB MBX 273 Schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1ZyV1p1aTUtbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzZ4bHduTW05UXc", "createdOn":"", "firstName":"sony QUANTA AK1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzZ4bHduTW05UXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlZSQ3ppa1R5VFU", "createdOn":"", "firstName":"sony sony ms01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlZSQ3ppa1R5VFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUxYWGNZbGY5dWc", "createdOn":"", "firstName":"sony PCG K2T VGN CR322H VGN CR490 QUANTA GD1B MBX 177A REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUxYWGNZbGY5dWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDN6WHVGUl9MNDQ", "createdOn":"", "firstName":"sony 485.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDN6WHVGUl9MNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1E4WHRqSFoycEE", "createdOn":"", "firstName":"sony SONY VAIO MBX 126 QUANTA JE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1E4WHRqSFoycEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzUtT1B1TkR5YkE", "createdOn":"", "firstName":"wistron DV2000 intel 945akita.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzUtT1B1TkR5YkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFUwTHlfRm1RMnM", "createdOn":"", "firstName":"sony SONY VGN CR MBX 177 QUANTA GD1 COMPLETO SONY VGN CR MBX 177 QUANTA GD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFUwTHlfRm1RMnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODdJREV6T2toME0", "createdOn":"", "firstName":"sony PCG K2T VGN CR322H VGN CR490 QUANTA GD1B MBX 177A REV 2A PCG K2T VGN CR322H VGN CR490 QUANTA GD1B MBX 177A REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODdJREV6T2toME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0NieFBaLVVVQ2M", "createdOn":"", "firstName":"sony PCG NVR23 MBX 67 QUANTA NE4 REV 1A PCG NVR23 MBX 67 QUANTA NE4 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0NieFBaLVVVQ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkhwaHdFMVNNT3c", "createdOn":"", "firstName":"sony vgn ax.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkhwaHdFMVNNT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXd6S09PT0YyU28", "createdOn":"", "firstName":"sony vgn UX.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXd6S09PT0YyU28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWlleDMtUDNKbXc", "createdOn":"", "firstName":"sony SONY VAIO MBX 126 QUANTA JE5 SONY VAIO MBX 126 QUANTA JE5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWlleDMtUDNKbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielNxVDdlRVEydmc", "createdOn":"", "firstName":"wistron CQ45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielNxVDdlRVEydmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2JYUGFvanFaaE0", "createdOn":"", "firstName":"sony SONY VAIO RJ9 QUANTA RJ9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2JYUGFvanFaaE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUtmVEctbkxueXM", "createdOn":"", "firstName":"sony Sony Vaio VPCY2 CADIZ CP  CADIZ CP .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUtmVEctbkxueXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDZSZEJ3U0VJaEU", "createdOn":"", "firstName":"sony sony ms01 www.lqv77.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDZSZEJ3U0VJaEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVBocjNSQ1ctWVU", "createdOn":"", "firstName":"sony SONY MBX 142 rj1 mb m26 0528a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVBocjNSQ1ctWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibG1wZDFtOGo3ZzQ", "createdOn":"", "firstName":"sony SONY BX Series rj5 ms evt 0516a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibG1wZDFtOGo3ZzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEEteDltSUxqVzg", "createdOn":"", "firstName":"sony SONY MS04 MBX 143   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEEteDltSUxqVzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTVLQzNGUnFBOEk", "createdOn":"", "firstName":"sony 444.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTVLQzNGUnFBOEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHI0OHAxYUNtaHc", "createdOn":"", "firstName":"sony SONY PCG 5G2T VGN CR13 QUANTA GD1 MBX 177 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHI0OHAxYUNtaHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFQ5b01wOWxZUzA", "createdOn":"", "firstName":"sony DA0HK2MB6E0 79186 MBX 247 Quanta HK1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFQ5b01wOWxZUzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWt3MFEtay01c0U", "createdOn":"", "firstName":"sony Sony Viao VPCEG18FG MBX 250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWt3MFEtay01c0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVpxdnFtd1g3bjg", "createdOn":"", "firstName":"sony Sony Vaio PCG K13 Quanta JE2 Sony Vaio PCG K13 Quanta JE2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVpxdnFtd1g3bjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZC1ka2phalZnSnc", "createdOn":"", "firstName":"sony pcg fsr27.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZC1ka2phalZnSnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0d0YUtNQ3JrcTQ", "createdOn":"", "firstName":"sony SONY MS70 MBX 160 REV 0.20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0d0YUtNQ3JrcTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWk8wUGZXNjBpMEE", "createdOn":"", "firstName":"sony PCG FXA32 sm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWk8wUGZXNjBpMEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjRZalFQd29QZm8", "createdOn":"", "firstName":"sony 489.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjRZalFQd29QZm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXUtN3ZsV3hoVkk", "createdOn":"", "firstName":"sony pcg r505je jek jep jl jlk jlp js jsk jsp.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXUtN3ZsV3hoVkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWRJQUpCZE1RU0U", "createdOn":"", "firstName":"sony SONY PCG FR825CP   QUANTA RB1   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWRJQUpCZE1RU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU5Ua2JNY29qaWM", "createdOn":"", "firstName":"sony pcg fxa32 33 35 35d 36.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU5Ua2JNY29qaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHE5OUh0NkZvSms", "createdOn":"", "firstName":"sony Sony NW M851 MBX 217.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHE5OUh0NkZvSms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2J5aHRHcVJkVGM", "createdOn":"", "firstName":"sony vgnA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2J5aHRHcVJkVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmZtaG95Q1h4WDg", "createdOn":"", "firstName":"sony NE7 SONY PCG 61611.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmZtaG95Q1h4WDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWwzd2hjSEwzN2M", "createdOn":"", "firstName":"sony sony vgn ar130 ar320e mbx 164 foxconn ms21 rev 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWwzd2hjSEwzN2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkdxbUk3TWdSOGs", "createdOn":"", "firstName":"sony pcg fx220.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkdxbUk3TWdSOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUt6RGtULXBrdms", "createdOn":"", "firstName":"sony SONY MSS1 MBX 155   REV 0.30Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUt6RGtULXBrdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHFwMkUyUzc3T0U", "createdOn":"", "firstName":"sony HK5 mb pvt 0202a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHFwMkUyUzc3T0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEZNNHRWaGtWV1U", "createdOn":"", "firstName":"sony FJ SERIES QUANTA RD1 REV 1A FJ SERIES QUANTA RD1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEZNNHRWaGtWV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkRkbV9SZXUzbGs", "createdOn":"", "firstName":"sony vgn a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkRkbV9SZXUzbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVp5djk5STVYS28", "createdOn":"", "firstName":"sony pcga dsd5 dsm5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVp5djk5STVYS28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWh5S1E0bTdTY00", "createdOn":"", "firstName":"sony PCGC1MV.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWh5S1E0bTdTY00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUVRX2gxdkxpajA", "createdOn":"", "firstName":"sony SONY MS70 MBX 160   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUVRX2gxdkxpajA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkF3bVN2aGtlenM", "createdOn":"", "firstName":"sony 411.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkF3bVN2aGtlenM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ25TNTd3QnNyaVk", "createdOn":"", "firstName":"sony SONY PCG K2T VGN CR322H VGN CR490 QUANTA GD1B MBX 177A REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ25TNTd3QnNyaVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0hUS0F6bzN3YjA", "createdOn":"", "firstName":"sony pcg nv290.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0hUS0F6bzN3YjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWno5N0FBTjVGLTg", "createdOn":"", "firstName":"sony Sony Vaio VGN BX 195 196 500 Quanta c836c RJ1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWno5N0FBTjVGLTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDkweU9GTTR1dGs", "createdOn":"", "firstName":"sony Sony Vaio PCG K13 Quanta JE2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDkweU9GTTR1dGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjdhQlhMSWtJWmc", "createdOn":"", "firstName":"sony IRX 5040 MBX 187.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjdhQlhMSWtJWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWJ2VGxob1E3ajg", "createdOn":"", "firstName":"sony pcg fx290.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWJ2VGxob1E3ajg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVVOQ3U2bFZvQzA", "createdOn":"", "firstName":"sony vgn b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVVOQ3U2bFZvQzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUU1VZllWcHk0U28", "createdOn":"", "firstName":"sony SONY VAIO RJ6 QUANTA RJ6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUU1VZllWcHk0U28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFJYckhWcnFrTzQ", "createdOn":"", "firstName":"sony SONY MBX 80 ne5 mb 3e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFJYckhWcnFrTzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFItNXZwbHQ2c2c", "createdOn":"", "firstName":"sony MBX 196 VGN CS SR MBX 196 VGN CS SR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFItNXZwbHQ2c2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT05ORmhVUC01d1k", "createdOn":"", "firstName":"sony Sony Vaio VPC Y mbx 238 mbx 244 sony TUCANA SB 0706A DVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT05ORmhVUC01d1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlZrMFNfZnJHWnM", "createdOn":"", "firstName":"sony SONY PCG FR310 (MBX 80 QUANTA NE5) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlZrMFNfZnJHWnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTdZV3NOV0JqUG8", "createdOn":"", "firstName":"sony Sony Vaio VPCY2 CADIZ CP .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTdZV3NOV0JqUG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDJVWEFHV2dENTQ", "createdOn":"", "firstName":"sony pgc grs150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDJVWEFHV2dENTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2lad1VHRzRwb3c", "createdOn":"", "firstName":"sony sony MX2 1207 FOR NETIN 1208.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2lad1VHRzRwb3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1l2NmlUd1RPLWM", "createdOn":"", "firstName":"sony SONY MBX 147.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1l2NmlUd1RPLWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkFNcDFSVEtWd3c", "createdOn":"", "firstName":"sony sony svf15 da0hk9mb6d0hkd hkc hk9embhsw .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkFNcDFSVEtWd3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU1adWUySGEyOUk", "createdOn":"", "firstName":"sony Sony VGN FE(MBX 152)   Sony VGN FE(MBX 152) .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU1adWUySGEyOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejJwQnBDbFotM28", "createdOn":"", "firstName":"sony 467.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejJwQnBDbFotM28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXhXSUdoWC1UNmc", "createdOn":"", "firstName":"sony SONY VGN CR MBX 177 QUANTA GD1 COMPLETO SONY VGN CR MBX 177 QUANTA GD1 FINGERPRINT BOARD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXhXSUdoWC1UNmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWJjNjJSd3UzZFk", "createdOn":"", "firstName":"sony 477.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWJjNjJSd3UzZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHZXdHQ3WW1YWjQ", "createdOn":"", "firstName":"sony vgnB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHZXdHQ3WW1YWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFZmaU0yNWVQNHM", "createdOn":"", "firstName":"sony Sony IRX 5040 MBX 187.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFZmaU0yNWVQNHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0h2QUJLSEgzVjQ", "createdOn":"", "firstName":"sony vaio fit 14 DA0HK8MB6E0 76132 Quanta HK8 PVT MB 20130117.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0h2QUJLSEgzVjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUhZQVUxQ3AwOEk", "createdOn":"", "firstName":"sony SONY VAIO MS12 MBX 149 REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUhZQVUxQ3AwOEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGM5eWVXN0dwLU0", "createdOn":"", "firstName":"sony Vaio M630 M640 Vaio M630 M640.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGM5eWVXN0dwLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmRfYjdtUTdyc0E", "createdOn":"", "firstName":"sony sony vgn fs series mbx 143 foxconn ms04 1 01 rev 1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmRfYjdtUTdyc0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDRocGZGOWtCN2s", "createdOn":"", "firstName":"sony SONY PCG 5J5M VGN CR21S   QUANTA GD1A MBX 177A   REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDRocGZGOWtCN2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianRwQmhiVDBabTA", "createdOn":"", "firstName":"sony pcg fx220 220k 240 240k 250 250k 270 270k.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRwQmhiVDBabTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialRRdVFzeU56Vjg", "createdOn":"", "firstName":"sony Sony Vaio PCG K13 (Quanta JE2) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialRRdVFzeU56Vjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajRfQXE5Nm9NNlU", "createdOn":"", "firstName":"sony SONY MBX 163 VGN C11 C21 MS60 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajRfQXE5Nm9NNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTh6bTRmZGM1Ukk", "createdOn":"", "firstName":"sony vgn ux SERİES.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTh6bTRmZGM1Ukk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTM4OWVrT3o3clk", "createdOn":"", "firstName":"sony vgn c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTM4OWVrT3o3clk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHJqd1hZZTBVSGc", "createdOn":"", "firstName":"sony M780 MBX194 M780 MBX194.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHJqd1hZZTBVSGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia200X1o5Q2U3akk", "createdOn":"", "firstName":"sony PCGFXA32.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia200X1o5Q2U3akk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmVub2phX0lSN0k", "createdOn":"", "firstName":"sony sony mbx 193 quanta tw1 rev 3e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmVub2phX0lSN0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWl1dzhaQlRNMzQ", "createdOn":"", "firstName":"sony NP R525 BREMEN D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWl1dzhaQlRNMzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGhvcGtGRVNwUkU", "createdOn":"", "firstName":"sony SONY GD1A SONY GD1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGhvcGtGRVNwUkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFVJTWJmVm05RW8", "createdOn":"", "firstName":"sony sony vaio vgn aw m780 foxconn mbx 194.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFVJTWJmVm05RW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZE5PNS04SmRQT1U", "createdOn":"", "firstName":"sony mbx 237 v030 docking db mp 0104  2030 f.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZE5PNS04SmRQT1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDNxdWdmMXE3SjA", "createdOn":"", "firstName":"sony Sony Vaio VGN AR71MR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDNxdWdmMXE3SjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX2ZVQU9nZEVXbW8", "createdOn":"", "firstName":"sony vgn U.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX2ZVQU9nZEVXbW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEd0Qkw0U1BHQnc", "createdOn":"", "firstName":"sony fcg r505afe.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEd0Qkw0U1BHQnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzdkZ0pPdFNCdUE", "createdOn":"", "firstName":"sony vgn fs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzdkZ0pPdFNCdUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlE4VUlUNFdzN00", "createdOn":"", "firstName":"sony PCG 5J5M VGN CR21S QUANTA GD1A MBX 177A REV 2A PCG 5J5M VGN CR21S QUANTA GD1A MBX 177A REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlE4VUlUNFdzN00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlBfdU1BRlNTMnM", "createdOn":"", "firstName":"sony DAGD1ABB8B0gd1a cb 0711a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlBfdU1BRlNTMnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVJfRnVtUVBHTG8", "createdOn":"", "firstName":"sony Schematics SONY SZ series mbx147 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVJfRnVtUVBHTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2M4QlBLekUxVTQ", "createdOn":"", "firstName":"sony Sony MBX 193 QUANTA TW1 REV 3E Sony MBX 193 QUANTA TW1 REV 3E.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2M4QlBLekUxVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0JvaGZteE5FaGs", "createdOn":"", "firstName":"sony Sony Vaio VGN C22CH MS60 MBX163 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0JvaGZteE5FaGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzlwcXdfSURmZ2M", "createdOn":"", "firstName":"sony R505 PCG K23 MBX114.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzlwcXdfSURmZ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkttM2NJM2ZCdGM", "createdOn":"", "firstName":"sony SONY VGN FS SERIES MBX 143 MS03 SONY VGN FS SERIES MBX 143 MS03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkttM2NJM2ZCdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjlvZUk5WjNra00", "createdOn":"", "firstName":"sony pcg grx670.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjlvZUk5WjNra00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3VhR2w0UkNNRm8", "createdOn":"", "firstName":"sony Sony PCG FR130 MBX 80.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3VhR2w0UkNNRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1NNSnlzSXVyY00", "createdOn":"", "firstName":"sony RJ6 QUANTA RJ6 REV 1A RJ6 QUANTA RJ6 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1NNSnlzSXVyY00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjVFc1ZxTjdVdW8", "createdOn":"", "firstName":"sony SONY PCG 5G2T VGN CR13 QUANTA GD1 MBX 177 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjVFc1ZxTjdVdW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2VKVS1xSERYckU", "createdOn":"", "firstName":"sony SONY BX Series rj1 usbhdd dvt 0504a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2VKVS1xSERYckU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWFCNE1XMXNxWEU", "createdOn":"", "firstName":"sony vgnFS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWFCNE1XMXNxWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRW5oaUhURWFwbTg", "createdOn":"", "firstName":"sony Sony Vaio VGN AW series MBX 194 M780  sd FOXCONN M780 CantigaP WPCE775L Sony Vaio VGN AW series MBX 194 M780  sd FOXCONN M780 CantigaP WPCE775L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRW5oaUhURWFwbTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE94NlkxWndCZzQ", "createdOn":"", "firstName":"sony SONY PCG 5J5M VGN CR21S QUANTA GD1A MBX 177A REV 2A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE94NlkxWndCZzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWp5N2U1OVNtMWs", "createdOn":"", "firstName":"sony Sony MBX 223   M960 M970   L MODEL   REV SA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWp5N2U1OVNtMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTVsb1hDSGcwTkk", "createdOn":"", "firstName":"sony M870(MBX 214) REV 1.0 M870(MBX 214) REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTVsb1hDSGcwTkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVUyUE1Jb3E0a3M", "createdOn":"", "firstName":"sony SONY MBX 216 QUANTA GD3.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVUyUE1Jb3E0a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNzVsUFU4V3Z1eG8", "createdOn":"", "firstName":"sony sony mbx 229 wistron cadiz cp rev  1m sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNzVsUFU4V3Z1eG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnNXM2szcDV5b3c", "createdOn":"", "firstName":"sony SONY VGN CR MBX 177 QUANTA GD1 COMPLETO SONY VGN CR MBX 177 QUANTA GD1 EXPRESS CARD & 3V 5VPCU.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnNXM2szcDV5b3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGFrZUlxZmt3c0U", "createdOn":"", "firstName":"sony pgc gr150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGFrZUlxZmt3c0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFdoY0pBTVBaUms", "createdOn":"", "firstName":"sony FE5 SERIES MBX 149 MS10 FE5 SERIES MBX 149 MS10.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFdoY0pBTVBaUms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnZpOXE5RVp4d0U", "createdOn":"", "firstName":"sony Sony MBX 226 Foxconn M9A0 FOXCONN M9A0 MP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnZpOXE5RVp4d0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMm43WlRkT0xqRFk", "createdOn":"", "firstName":"sony SONY MBX 224 M960 M970 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMm43WlRkT0xqRFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicV9mcjQ4SUxmejg", "createdOn":"", "firstName":"apple Xserve xserve early2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicV9mcjQ4SUxmejg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1pOeEdCcDhkakk", "createdOn":"", "firstName":"apple Xserve xserve.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1pOeEdCcDhkakk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0I0eTNpZ2tSNlU", "createdOn":"", "firstName":"apple Xserve xserve.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0I0eTNpZ2tSNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWwyMWpLY0RKR2s", "createdOn":"", "firstName":"apple Xserve xserveraid.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWwyMWpLY0RKR2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFpBNHpMcXJwY0U", "createdOn":"", "firstName":"apple Xserve xserve late2006.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFpBNHpMcXJwY0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2VIa3piTVFQbWs", "createdOn":"", "firstName":"apple Xserve xserve g5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2VIa3piTVFQbWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFF4Q3Jvc0Y0Mms", "createdOn":"", "firstName":"apple Xserve xserve late2006 ja.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFF4Q3Jvc0Y0Mms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnZTMzRSMW9zb1E", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx G4 Ti Onyx Screw Guide LGMPZUKaULZ3ydmN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnZTMzRSMW9zb1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZm1rLXVoYzlmQXc", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx G4 Ti Onyx Screw Guide LGMPZUKaULZ3ydmN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZm1rLXVoYzlmQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjBlckQ4Q0ZNeFE", "createdOn":"", "firstName":"apple PowerBook G4 Titanium Onyx Installing Display 82.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjBlckQ4Q0ZNeFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2FhbTA1V1N1OVk", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Battery Connector 762.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2FhbTA1V1N1OVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWFXZm80aFVSNUk", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Access Door 771.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWFXZm80aFVSNUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMTlTdkFVMnRqaXM", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Battery 754.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMTlTdkFVMnRqaXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2hydnZkakFmWGc", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing DC In Board 768.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2hydnZkakFmWGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGp1Sl9ET2FiSWc", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Clutch Cover 1429.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGp1Sl9ET2FiSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWm9rR2ppMkl5UGM", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Clutch Cover 1429.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWm9rR2ppMkl5UGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXB4TFRScHlSZWM", "createdOn":"", "firstName":"apple MacBook Unibody Model A1278 Installing Display Assembly 781.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXB4TFRScHlSZWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEkydEtMR05vYnc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Battery Connector 293.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEkydEtMR05vYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2dMNENTN2xKS2M", "createdOn":"", "firstName":"apple MacBook Core Duo Installing AirPort Card 287.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2dMNENTN2xKS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFJ1eDRDOVBYQ28", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Battery 278.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFJ1eDRDOVBYQ28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmFWbC01MFhGVVE", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Bluetooth Board 299.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmFWbC01MFhGVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTC14U3ZESUpCdTA", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Bluetooth Antenna 298.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTC14U3ZESUpCdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidi1pV0ExVVMtSGc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Clutch Cover 307.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidi1pV0ExVVMtSGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFd5WkUzeHlOQ0E", "createdOn":"", "firstName":"apple MacBook Core Duo Installing C Channel 300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFd5WkUzeHlOQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGhPbTNQVmlWQXc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Display 304.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGhPbTNQVmlWQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUJ3alZOdWp2d00", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Front Bezel 306.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUJ3alZOdWp2d00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEdjT0czVEdhcDQ", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Fan 290.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEdjT0czVEdhcDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVi01SEhfWllwZ0U", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Hard Drive 281.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVi01SEhfWllwZ0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVS10UnlVUF9aX2s", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Hard Drive Connector 291.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVS10UnlVUF9aX2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXdvX0JBdnc2SW8", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Hinges 309.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXdvX0JBdnc2SW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTJJQ1pub1l0WTQ", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Hard Drive Replacement 282.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTJJQ1pub1l0WTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkpFOGw1aHhNNFU", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Heat Sink 292.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkpFOGw1aHhNNFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlBOUUxxQU1qWVU", "createdOn":"", "firstName":"apple MacBook Core Duo Installing LCD Panel 311.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlBOUUxxQU1qWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTJ0eVluWDlQVWc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Inverter 308.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTJ0eVluWDlQVWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWlpSVVWWEh4NTQ", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Left Hinge Mount 302.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWlpSVVWWEh4NTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGE4TW53a1lMN2c", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Left IO Frame 294.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGE4TW53a1lMN2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkRVc2VzQW1Belk", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Logic Board 295.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkRVc2VzQW1Belk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVphWkwzSEtObGc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Left Speaker 289.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVphWkwzSEtObGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3pnSWRoVGRQZlk", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Lower Case 305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3pnSWRoVGRQZlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazBoWHY5cnRmQ1E", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Logic Board Replacement 296.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazBoWHY5cnRmQ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2VNbTVvOGVsUU0", "createdOn":"", "firstName":"apple MacBook Core Duo Installing MagSafe Board 288.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2VNbTVvOGVsUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUo2azZrUmdLTnM", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Optical Drive 284.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUo2azZrUmdLTnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWlaUS01SUlNaW8", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Memory Cover 279.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWlaUS01SUlNaW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3hYTXY2bFM5Vk0", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Optical Drive Cable 285.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3hYTXY2bFM5Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGxGZ3EyVnRMQnc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Optical Drive Replacement 286.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGxGZ3EyVnRMQnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakE2VWdIRUZLa1E", "createdOn":"", "firstName":"apple MacBook Core Duo Installing PRAM Battery 297.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakE2VWdIRUZLa1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSE90dVRxNWF3SU0", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Rear Bezel 310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSE90dVRxNWF3SU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTZ0V0pGdmM0Nkk", "createdOn":"", "firstName":"apple MacBook Core Duo Installing RAM 280.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTZ0V0pGdmM0Nkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2RxVGdlc1lyOTQ", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Right Speaker 301.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2RxVGdlc1lyOTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUpGLXQwLXdZUGc", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Right Hinge Mount 303.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUpGLXQwLXdZUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHlJRDdzcFhOSEE", "createdOn":"", "firstName":"apple MacBook Core Duo Installing Upper Case 283.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHlJRDdzcFhOSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWElxU3ZUcFVaa28", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing AirPort Card 519.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWElxU3ZUcFVaa28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRWSFE4T1VlV28", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Battery Connector 525.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRWSFE4T1VlV28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHRpdmNYcWF4WDg", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Battery 510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHRpdmNYcWF4WDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVFHU1I0djJENHM", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Bluetooth Board 531.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVFHU1I0djJENHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem51S3RTUlc1QWs", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Bluetooth Antenna 530.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem51S3RTUlc1QWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieE52cU5EXzZvSWc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing C Channel 532.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieE52cU5EXzZvSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkNTMmsxNFpRVzA", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Clutch Cover 1494.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkNTMmsxNFpRVzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicW9oYTNhdXFFVzg", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Display 536.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicW9oYTNhdXFFVzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTBFVTlSZDFhVXc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Front Bezel 1495.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTBFVTlSZDFhVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHNxRjEyS05MU0U", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Fan 522.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHNxRjEyS05MU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFdhRWlGNXJEODg", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Hinges 1496.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFdhRWlGNXJEODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUpPZmFYU2liU0U", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Hard Drive 513.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUpPZmFYU2liU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX01aOHBYQVViNE0", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Hard Drive Connector 523.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX01aOHBYQVViNE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmJOQS1sOEFzV1E", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Hard Drive Replacement 514.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmJOQS1sOEFzV1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjd5YlBMcG9IVGM", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Heat Sink 524.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjd5YlBMcG9IVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamJrX1U2anpxVVE", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Inverter 1497.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamJrX1U2anpxVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWQ2bmRrcHdIWGM", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing LCD Panel 1498.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWQ2bmRrcHdIWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEcyZmc3YU5ocVk", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Left Hinge Mount 534.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEcyZmc3YU5ocVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickEzdGlBNnBlaUU", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Logic Board 527.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickEzdGlBNnBlaUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXVraVZrdmxFdTA", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Left IO Frame 526.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXVraVZrdmxFdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHVtTnp3bTlYVTQ", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Left Speaker 521.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHVtTnp3bTlYVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHBZMjlYQ1I0bUU", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Lower Case 537.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHBZMjlYQ1I0bUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXl6ZTRXSk9tRjA", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Logic Board Replacement 528.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXl6ZTRXSk9tRjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYW5vSl9RSnk3Vm8", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Magsafe Board 520.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYW5vSl9RSnk3Vm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTY5N3RLRVpUbXc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Optical Drive 516.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTY5N3RLRVpUbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlJ2bEpFVmpGQWc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Memory Cover 511.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlJ2bEpFVmpGQWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFhZdEsyNUtjWGM", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing PRAM Battery 529.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFhZdEsyNUtjWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEYzVmxYc2FadE0", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Optical Drive Cable 517.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEYzVmxYc2FadE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1VqTEVpcFhHLXM", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Optical Drive Replacement 518.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1VqTEVpcFhHLXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieDFqVElDQUxlTUE", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Rear Bezel 1499.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieDFqVElDQUxlTUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHFHanZfaTdpVGs", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing PRAM Battery Santa RosaPenryn 689.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHFHanZfaTdpVGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiai1Edy11VWljdGc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing RAM 512.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiai1Edy11VWljdGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0Jkd0FTSnZWaTg", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Right Hinge Mount 535.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0Jkd0FTSnZWaTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1dOajJlMnU5VWc", "createdOn":"", "firstName":"apple Mac Pro Server (Mid 2010) macpro mid2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1dOajJlMnU5VWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFcwLS1YQVN3VVU", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Right Speaker 533.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFcwLS1YQVN3VVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVY2Z0FOU21nUHc", "createdOn":"", "firstName":"apple MacBook Core 2 Duo Installing Upper Case 515.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVY2Z0FOU21nUHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXlTNTFlWEZ6Sm8", "createdOn":"", "firstName":"apple Mac Pro (Early 2009) macpro early2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXlTNTFlWEZ6Sm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM00yQzhTRzVJcTA", "createdOn":"", "firstName":"apple Mac mini (Mid 2010) mac mini mid 2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM00yQzhTRzVJcTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzdRRFkwY2J5emM", "createdOn":"", "firstName":"apple iMac G5 (17 inch) imacg5 17in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzdRRFkwY2J5emM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazJBeG15Y29OVFU", "createdOn":"", "firstName":"apple Mac mini (Early 2009) mac mini early09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazJBeG15Y29OVFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGVuNzdXZ2d5b1E", "createdOn":"", "firstName":"apple iPad (1st Generation) ipad quick check.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGVuNzdXZ2d5b1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNy0xcGhlWTFwTzA", "createdOn":"", "firstName":"apple iPad (1st Generation) ipad w 3g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNy0xcGhlWTFwTzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR21tRWY0VFpiMWc", "createdOn":"", "firstName":"apple iMac G5 (20 inch) imacg5 20in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR21tRWY0VFpiMWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTJaaWtJZlZibms", "createdOn":"", "firstName":"apple iMac (27 inch Mid 2010) imac 27 mid10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTJaaWtJZlZibms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXBiR1piTW81c2s", "createdOn":"", "firstName":"apple iMac (27 inch Late 2009) imac 27 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXBiR1piTW81c2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUFlNEZsRnlOVUE", "createdOn":"", "firstName":"apple iMac (21.5 inch Mid 2010) imac 21 mid10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUFlNEZsRnlOVUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVVKZFc1bTZPNDA", "createdOn":"", "firstName":"apple iMac (21.5 inch Late 2009) imac 21 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVVKZFc1bTZPNDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVAybkxmX3VKR2s", "createdOn":"", "firstName":"apple iMac (20 inch Mid 2009) imac 20 early mid 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVAybkxmX3VKR2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNW0xOEVGNGtvbzA", "createdOn":"", "firstName":"apple Safety.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNW0xOEVGNGtvbzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUURRM0tKMjk2SDA", "createdOn":"", "firstName":"apple SecretROMStuff.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUURRM0tKMjk2SDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHp3UGZfTFdkUFU", "createdOn":"", "firstName":"apple SecretROMStuff.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHp3UGZfTFdkUFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDg4V0tZdU9jb2M", "createdOn":"", "firstName":"apple Ports Pinouts.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDg4V0tZdU9jb2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRm1iV081cllBZlk", "createdOn":"", "firstName":"apple  Memory Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRm1iV081cllBZlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlEzMDVRS2pIOWs", "createdOn":"", "firstName":"dell  XPS M1530 Intel Discrete   WISTRON Hawke   REV SA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlEzMDVRS2pIOWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2w2NFJCOXRZZmc", "createdOn":"", "firstName":"dell Vostro A840 A860 A1088 QUANTA VM9 VM8 UMA REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2w2NFJCOXRZZmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVVGQzlkUFl4aW8", "createdOn":"", "firstName":"dell Vostro 1510 COMPAL LA 4121P JAL30 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVVGQzlkUFl4aW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXN4emtTODRweTg", "createdOn":"", "firstName":"dell Vostro 1510 COMPAL LA 4121P JAL30 REV 0.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXN4emtTODRweTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjlfV2FmQWhZa0E", "createdOn":"", "firstName":"dell Vostro 1320 COMPAL LA 4232P KAL80 REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjlfV2FmQWhZa0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUhGZkd5dF9EOWM", "createdOn":"", "firstName":"dell Vostro 1310 COMPAL LA 4231P JAL80 REV 0.2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUhGZkd5dF9EOWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVpPU0YyR3M3R2c", "createdOn":"", "firstName":"dell N5010 WISTRON Berry INTEL Discrete UMA REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVpPU0YyR3M3R2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVk1ybWhwU3R2UDA", "createdOn":"", "firstName":"dell N5010 WISTRON Berry INTEL IO Board REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVk1ybWhwU3R2UDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXMwc09LbTNTM28", "createdOn":"", "firstName":"dell Latitude L400 QUANTA SS3 3B REV 3A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXMwc09LbTNTM28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1JmcGlvZGM1QXc", "createdOn":"", "firstName":"dell Latitude D630 QUANTA JM7B DISCRETE 128MB REV 2B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1JmcGlvZGM1QXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXVxeWY3V2JlN0E", "createdOn":"", "firstName":"dell Latitude D630 COMPAL LA 3302P DISCRETE REV 0.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXVxeWY3V2JlN0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHRFeVhNVWNwWFU", "createdOn":"", "firstName":"dell Latitude D610 QUANTA JM5B REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHRFeVhNVWNwWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFJpNzBvWlhDNmM", "createdOn":"", "firstName":"dell Latitude D620 COMPAL LA 2791 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFJpNzBvWlhDNmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2ZkS3BwbkRHbGs", "createdOn":"", "firstName":"hp  HP DV6 (Quanta UT3 UT5) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2ZkS3BwbkRHbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0c4THFob3pOdlk", "createdOn":"", "firstName":"hp  HP DV4000 (Wistron LEOPARD FF) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0c4THFob3pOdlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnNLZE9JVktOdG8", "createdOn":"", "firstName":"hp  HP DV4 CQ40 CQ45 INTEL Discrete (Compal LA 4102P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnNLZE9JVktOdG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkV0TmdCX0d3MDQ", "createdOn":"", "firstName":"hp  HP DV4000 (Wistron LEOPARD DF) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkV0TmdCX0d3MDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkpsYTVtOVNxS0k", "createdOn":"", "firstName":"hp  HP DV3000 (Inventec Diablo) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkpsYTVtOVNxS0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTBVbi10Q3BnNkk", "createdOn":"", "firstName":"hp  HP DV1000 (Wistron LEOPARD3) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTBVbi10Q3BnNkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieE9WSUphbFNzdTQ", "createdOn":"", "firstName":"hp  HP DV1000 DV1600 DV1700 DV9000 (Quanta CT6) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieE9WSUphbFNzdTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTJsWWNZeE01MTQ", "createdOn":"", "firstName":"hp  HP Compaq V5000 (Compal LA 2771) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTJsWWNZeE01MTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzZLaTVoZDNoQUk", "createdOn":"", "firstName":"hp  HP CQ57 (Foxconn Chicago) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzZLaTVoZDNoQUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlFvMnpFZE80V0k", "createdOn":"", "firstName":"hp  HP COMPAQ V3500 AMD (Wistron TIBET) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlFvMnpFZE80V0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjZvVmpUclRRQUU", "createdOn":"", "firstName":"hp  HP COMPAQ V3500 WISTRON TIBET   SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjZvVmpUclRRQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1ZJOVVHM2NaTHc", "createdOn":"", "firstName":"hp  HP Compaq R3000 (AMD) ZV5000 (Compal LA 1851) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1ZJOVVHM2NaTHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnFScGhRdjZCdms", "createdOn":"", "firstName":"hp  HP Mini 110 BIXBY.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnFScGhRdjZCdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnhzM1NVY2dlekE", "createdOn":"", "firstName":"hp  HP Mini 110 INVENTEC BIXBY 1.1 6050A2290801 REV AX1Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnhzM1NVY2dlekE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkNhMEVXUkJONEk", "createdOn":"", "firstName":"hp  HP laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkNhMEVXUkJONEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnRmWlZIMnhfQjA", "createdOn":"", "firstName":"hp  HP HDX9000 INVENTEC ORION.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnRmWlZIMnhfQjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlhvWWQ3UlNGU00", "createdOn":"", "firstName":"hp  HP G62 G72 Compaq Presario CQ42 CQ62 AX3 5 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlhvWWQ3UlNGU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUxSUzZ0aU03ZVE", "createdOn":"", "firstName":"hp  HP G62 G72 Compaq CQ42 CQ45 CQ62 DAAX3MB16A1 Wimbledon AX3 5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUxSUzZ0aU03ZVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3VSclVvSFQ4QWs", "createdOn":"", "firstName":"hp  HP G62 Compaq Presario CQ62 (AMD) AX2 7 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3VSclVvSFQ4QWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnhkcFA2cmkwbDQ", "createdOn":"", "firstName":"hp  HP G62 G72 Compaq Presario CQ42 CQ62 AX3 5 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnhkcFA2cmkwbDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUNVeXRxUVhEaU0", "createdOn":"", "firstName":"hp  HP G42 G62 Compaq CQ42 CQ62 Intel UMA Discrete (Quanta AX1) DA0AX1MB6H1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUNVeXRxUVhEaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3pHeEVucnB4QkU", "createdOn":"", "firstName":"hp  HP ENVY 17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3pHeEVucnB4QkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEQxeUhCT3ZXSTA", "createdOn":"", "firstName":"hp  HP Envy 14 Inventec Romeo20 6050A2443401 MB A02 MV.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEQxeUhCT3ZXSTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGhvekZWNUVJLUU", "createdOn":"", "firstName":"hp  HP ELITEBOOK 8840 8840W COMPAL LA 4902P REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGhvekZWNUVJLUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWndiSmd1S0MwRXM", "createdOn":"", "firstName":"hp  HP EliteBook 8530W 8530P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWndiSmd1S0MwRXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGh2U2dCNUJGdWs", "createdOn":"", "firstName":"hp  HP DV7 AMD (UMA) LA 4092P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGh2U2dCNUJGdWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzE1c24zYjJHSFU", "createdOn":"", "firstName":"hp  HP Elitebook 6555b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzE1c24zYjJHSFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRnZMTE0tbWhadzg", "createdOn":"", "firstName":"hp  HP DV6 7 Quanta UP67 Discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRnZMTE0tbWhadzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieE5VUzVpS1V0OFU", "createdOn":"", "firstName":"hp  HP DV6 DV7 LX6 7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieE5VUzVpS1V0OFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2h1MGd4WFJlZjQ", "createdOn":"", "firstName":"hp  HP Compaq Presario CQ62 HP G62 SAFINA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2h1MGd4WFJlZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib08tc2p1LVpIcFU", "createdOn":"", "firstName":"hp  HP DV6 Quanta LX89 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib08tc2p1LVpIcFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMW8zTkNETDBCdjA", "createdOn":"", "firstName":"hp  hp compaq pavilion zd8000 quanta nt2 3b DA0NT2MB6F6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMW8zTkNETDBCdjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmp6RFRYT2RlVW8", "createdOn":"", "firstName":"hp  HP Compaq Presario CQ20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmp6RFRYT2RlVW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjlENDB2NjN4UkU", "createdOn":"", "firstName":"hp  HP Compaq nx6110 nc6110 nx6120 nc6120 Notebook.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjlENDB2NjN4UkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2ptZ3plVVZ3VWs", "createdOn":"", "firstName":"hp  hp compaq pavilion zd8000 quanta nt2 2a DA0NT2MB6F6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2ptZ3plVVZ3VWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejB5YWRwdk1WY0U", "createdOn":"", "firstName":"hp  HP Compaq NX9000 NX9030 NX9040 & Presario 2100 (Quanta KT7I) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejB5YWRwdk1WY0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHBCc0RDWFpJV0E", "createdOn":"", "firstName":"hp  hp compaq nx7300 nx7400 inventec gallo 1.0 6050a2042401.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHBCc0RDWFpJV0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnROazlMOHhVMVk", "createdOn":"", "firstName":"hp  HP Compaq NC8000 (Inventec Ruby mv1) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnROazlMOHhVMVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVdxeW9ESFkzekk", "createdOn":"", "firstName":"hp  HP COMPAQ F700 QUANTA AT1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVdxeW9ESFkzekk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXJfOWNDWVdNUTQ", "createdOn":"", "firstName":"hp  HP Compaq NC6230 6230 8230 Compaq Evo Notebook N410c (Inventec Vail) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXJfOWNDWVdNUTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnFjbUZWT0MwNWM", "createdOn":"", "firstName":"hp  HP Compaq CQ57 FOXCONN CHICAGO HR HPC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnFjbUZWT0MwNWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2FTbEQtbWxXSlE", "createdOn":"", "firstName":"hp  HP Compaq CQ42 Quanta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2FTbEQtbWxXSlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1hwT2ZMcUZRdTA", "createdOn":"", "firstName":"hp  HP Compaq 6910p (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1hwT2ZMcUZRdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFBWUmI4MkJvS2M", "createdOn":"", "firstName":"hp  HP Compaq CQ36 LA 4743P .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFBWUmI4MkJvS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVNNcnJRcms1Q1U", "createdOn":"", "firstName":"hp  HP Compaq 6535s 6735s Inventec Prince Pearl SI2 6050A2235601 MB A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVNNcnJRcms1Q1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXg2aFA1QkNPREE", "createdOn":"", "firstName":"hp  HP Compaq 6530s 6531S 6730s 6820s 6830s INVENTEC ZZI MV rev A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXg2aFA1QkNPREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFlraWxQNnE3cW8", "createdOn":"", "firstName":"hp  HP Compaq 6530B 6730B INVENTEC DD08 REV AX1Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFlraWxQNnE3cW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX003WFQzZkNFcXc", "createdOn":"", "firstName":"hp  HP COMPAQ 6515B INVENTEC TT1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX003WFQzZkNFcXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEFCWWJDOG85VDg", "createdOn":"", "firstName":"hp  HP COMPAQ 6510B INVENTEC DD1.0 DosXX Dunkel 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEFCWWJDOG85VDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidm5wbkpvNlVlX0U", "createdOn":"", "firstName":"hp  HP Compaq 515 516 615 (Volna AMD UMA) schematic – Volna 09 AMD UMA – 1310A22587 0 MTR – 6050A2258701 MB A03 REV AX1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidm5wbkpvNlVlX0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDdkSFppQ0R0ZmM", "createdOn":"", "firstName":"hp  HP Compaq 515 516 615 (Volna AMD UMA) schematic Volna 09 AMD UMA 1310A22587 0 MTR 6050A225.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDdkSFppQ0R0ZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3VwT21uX2JXSmM", "createdOn":"", "firstName":"hp  HP Compaq 510 511 610 (UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3VwT21uX2JXSmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmxRZ2xDZjc3eUU", "createdOn":"", "firstName":"hp  HP COMPAQ 2133 INVENTEC Galileo REV SI.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmxRZ2xDZjc3eUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid085YXpTa3UyUWM", "createdOn":"", "firstName":"hp  HP Compaq 2230s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid085YXpTa3UyUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSk4zQS1XQUQ3djg", "createdOn":"", "firstName":"hp  HP 8710W LA 3331P V1.0 0515.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSk4zQS1XQUQ3djg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOC0xX1RTRDNjZTA", "createdOn":"", "firstName":"hp  HP COMPAQ 2133 INVENTEC Galileo REV MV.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOC0xX1RTRDNjZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmNLMnd2RDkxUVk", "createdOn":"", "firstName":"hp  HP 541 INVENTEC DDD UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmNLMnd2RDkxUVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2xEeFNueHVORkE", "createdOn":"", "firstName":"hp  HP 6715b, 6515b Inventec TT1.0 MV2 Rev A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2xEeFNueHVORkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVYwVHM0cXFhdFk", "createdOn":"", "firstName":"hp  HP 541 INVENTEC DDD DISCRETE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVYwVHM0cXFhdFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUW91RFo0cGZBSEE", "createdOn":"", "firstName":"hp  HP 520 COMPAL LA 3491P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUW91RFo0cGZBSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibi14Y3d6Qld5RFU", "createdOn":"", "firstName":"hp  HP 500 510 COMPAL LA 3361P REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibi14Y3d6Qld5RFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGlnczU0ckptNGM", "createdOn":"", "firstName":"hp  hp 510 511 610 (UMA) .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGlnczU0ckptNGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGltTnFEUkE1OTQ", "createdOn":"", "firstName":"hp  HP 4520s QUANTA GC9A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGltTnFEUkE1OTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGFVYkYtVllPODQ", "createdOn":"", "firstName":"hp  HP 4520S 4720S QUANTA GC9A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGFVYkYtVllPODQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclRsSjNCYWk2dkk", "createdOn":"", "firstName":"hp  HP 4520S 3c73b QUANTA GC9A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclRsSjNCYWk2dkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0NRSHd0c09RdTg", "createdOn":"", "firstName":"hp  g7 DA0R33MB6F1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0NRSHd0c09RdTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTljRzJLUEMxb28", "createdOn":"", "firstName":"hp  g4 g6 G6 DA0R53MB6E0 r53 dis.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTljRzJLUEMxb28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDFOZnY4MkNyR1k", "createdOn":"", "firstName":"hp  G6 Inventec AMD ROCKY15 MB 0809.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDFOZnY4MkNyR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWE5XTXZzcHZvVmM", "createdOn":"", "firstName":"hp  G6 Inventec AMD ROCKY15 MB 0729.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWE5XTXZzcHZvVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemlrdy05VkFRSEE", "createdOn":"", "firstName":"hp  EliteBook 8840P 8840W.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemlrdy05VkFRSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidC14dVFmUUc1Wjg", "createdOn":"", "firstName":"hp  EliteBook 6930P (Wistron KARIA UMA) 91.4V901.001 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidC14dVFmUUc1Wjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0VSS0pVNW9xLTA", "createdOn":"", "firstName":"hp  EliteBook 6930P (Wistron KARIA DESCRETE) 91.4V901.001 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0VSS0pVNW9xLTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekk0SVBjMGo5WGs", "createdOn":"", "firstName":"hp  cq56 winbledon ax3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekk0SVBjMGo5WGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjZIUGJIcEJQREU", "createdOn":"", "firstName":"hp  CQ56 Pavilion G56 DAAX3MB16A1 623909 001 rev a AX3E DDR2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjZIUGJIcEJQREU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3pXdTZWaW5wcjQ", "createdOn":"", "firstName":"hp  Compaq Presario C700 Service manual c01301275.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3pXdTZWaW5wcjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3pxUjR6cTlEdG8", "createdOn":"", "firstName":"hp  COMPAQ V3000 V3500 DV2000 DV2500 AMD wistron TIBET.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3pxUjR6cTlEdG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieG5vVHV0a1ctVFE", "createdOn":"", "firstName":"hp  Compaq Presario CQ61 OP6 OP7 Tango Ballet DA00P6MB6D0 0P6 0P7 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieG5vVHV0a1ctVFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGczOGhRUHJlRWM", "createdOn":"", "firstName":"hp  Compaq Presario C300 IBL30 LA 3342P R1 0727.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGczOGhRUHJlRWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDV2N3A3U000V1k", "createdOn":"", "firstName":"hp  Compaq F500 F700 AMD quanta AT1 dv6000 dv6500 dv6700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDV2N3A3U000V1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2lqUC05ajJ4WHc", "createdOn":"", "firstName":"hp  Compaq laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2lqUC05ajJ4WHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDgtSy05VnZwS3c", "createdOn":"", "firstName":"hp  Compaq 8710p LA 3331P V1.0 0515.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDgtSy05VnZwS3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTNPbGZlMjlqYjA", "createdOn":"", "firstName":"hp  Compaq A900 (JBW00 LA 3981P) R0.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTNPbGZlMjlqYjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3JLeUhQNl9rNlU", "createdOn":"", "firstName":"hp  compal la 4732p r1 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3JLeUhQNl9rNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1lTVkZ4eEtmQTQ", "createdOn":"", "firstName":"hp  COMPAL LA 1851   REV 0.5Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1lTVkZ4eEtmQTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0VaZlJsSTI4YlU", "createdOn":"", "firstName":"hp  COMPAL LA 3491P (IAT50) 2007 03 23 Rev 1.0 Schematic.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0VaZlJsSTI4YlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWVqWWtHa3BNalU", "createdOn":"", "firstName":"hp  COMPAL LA 3491P (IAT50) 2007 03 20 Rev 0.5 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWVqWWtHa3BNalU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWVQNTh0NG5WTlE", "createdOn":"", "firstName":"hp  c660 compal la 7202p r1 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWVQNTh0NG5WTlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmg0bW01WVRNWmc", "createdOn":"", "firstName":"hp  COMPAL LA 3491P (IAT50) 2006 12 11 Rev 0.1 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmg0bW01WVRNWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmFvbmFkWnlySzQ", "createdOn":"", "firstName":"hp  a2422 compal la 4732p hp presario cq35 pavilion dv3 montevina uma rev1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmFvbmFkWnlySzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWU1LU04YUpJMWs", "createdOn":"", "firstName":"hp  at3 power.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWU1LU04YUpJMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibExRRmZZbk9Ocmc", "createdOn":"", "firstName":"hp  681ab hp pavilion dv4 4000 inventec kitty14i uma rev a02 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibExRRmZZbk9Ocmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1BQUlEwWDBZQnM", "createdOn":"", "firstName":"hp  506f1 DV3000 6050A2215501 DIABLO MP .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1BQUlEwWDBZQnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGRNRVNlQTljQUU", "createdOn":"", "firstName":"dell Charger app177.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGRNRVNlQTljQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDZiejJIaWdERUE", "createdOn":"", "firstName":"dell Charger DS2501 2502 datasheet.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDZiejJIaWdERUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWE1pbVdXdUNyRFU", "createdOn":"", "firstName":"dell Charger DS2502.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWE1pbVdXdUNyRFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0FNdTQyZHhTcDQ", "createdOn":"", "firstName":"dell quanta ot2 r1a schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0FNdTQyZHhTcDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaU1UbWcxZXZySlk", "createdOn":"", "firstName":"dell lenovo G480 QIWG5 QIWG6 DIS la 7981p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaU1UbWcxZXZySlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNE4yVkE5MmRocUE", "createdOn":"", "firstName":"dell Inspiron 1470 (14z)1570 (15z) UMA QUANTA UM2 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNE4yVkE5MmRocUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDFMTnEzd2dtVzA", "createdOn":"", "firstName":"dell  XPS M1530 Intel Discrete   WISTRON Hawke   REV  1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDFMTnEzd2dtVzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejloTXVGc3R6Rk0", "createdOn":"", "firstName":"dell DJ1 Intel CP Discrete 13873 N4030 alone 2088622619.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejloTXVGc3R6Rk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmR0cktHMk1raDQ", "createdOn":"", "firstName":"dell  studio 1535 quanta fm7b hepburn intel uma rev d3b sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmR0cktHMk1raDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVNHMkFYRDctYUE", "createdOn":"", "firstName":"dell  Studio 1435 1535   QUANTA FM6 UMA   REV 3B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVNHMkFYRDctYUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicS1vOVd4WmstajQ", "createdOn":"", "firstName":"dell  latitude d830 quanta jm7b discrete rev 2a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicS1vOVd4WmstajQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMl9KNXFwZzd5eG8", "createdOn":"", "firstName":"dell  latitude d531 quanta jx6 rev d3b sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMl9KNXFwZzd5eG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidncxaE8xMkxsVGc", "createdOn":"", "firstName":"dell  latitude d520 quanta dm5 shelby integrated rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidncxaE8xMkxsVGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEUwamlvbV9QZ0k", "createdOn":"", "firstName":"dell  latitude d500 d505 d510 quanta dm1 rev 1a sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEUwamlvbV9QZ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUJ2LUhQVjZOUUE", "createdOn":"", "firstName":"dell  inspiron n5110 m5110 dq15 wistron queen 15 intel discrete uma sandy bridge rev a00 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUJ2LUhQVjZOUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFdFVHZwb0trQ28", "createdOn":"", "firstName":"dell  inspiron m5030 wistron chelsea dj2 cp uma rev a00 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFdFVHZwb0trQ28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY0o0ZkllV1N6R1E", "createdOn":"", "firstName":"dell  inspiron m5110 dq15 wistron queen 15 rev a00 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY0o0ZkllV1N6R1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXBMLUkwOTFnOU0", "createdOn":"", "firstName":"dell  Inspiron 6000 Compal LA 2151 TOBAGO Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXBMLUkwOTFnOU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlRkNEh3S3ZKeTg", "createdOn":"", "firstName":"dell  Inspiron 2200 QUANTA VM7 TONGA  TYLER Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlRkNEh3S3ZKeTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTVoZG1iQ0x5emM", "createdOn":"", "firstName":"dell  inspiron 1520 1720 quanta fm5 corsica gilligan discrete rev x02 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTVoZG1iQ0x5emM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDd3Zi15dkNSWm8", "createdOn":"", "firstName":"dell  inspiron 1464 1564 1764 quanta um3b um6b rev1a c3b sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDd3Zi15dkNSWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzNHZ1JtcEcwOFE", "createdOn":"", "firstName":"dell  inspiron 1464 1564 1764 quanta um3 um6 rev1a c3b sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzNHZ1JtcEcwOFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUluWlNNdzZEcWs", "createdOn":"", "firstName":"dell  Inspiron 1440   Wisron Alba Discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUluWlNNdzZEcWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3RLSExkc1p5M2s", "createdOn":"", "firstName":"dell  Inspiron 1440   Wistron ALBA UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3RLSExkc1p5M2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWxJMlBNTWtXV1U", "createdOn":"", "firstName":"dell  d630 LA 3301P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWxJMlBNTWtXV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWtnMG5yaTd0WFk", "createdOn":"", "firstName":"dell  6400 FM1 R1A 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWtnMG5yaTd0WFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE5PTFJmb0pfNUU", "createdOn":"", "firstName":"dell vostro 1014 quanta vm8m intel uma davm8mmb6e0 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE5PTFJmb0pfNUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX09meEpXbDAzNXM", "createdOn":"", "firstName":"dell Inspiron1440.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX09meEpXbDAzNXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXphX3EydnowRWM", "createdOn":"", "firstName":"dell LCD Monitor 1503FP Service Manual.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXphX3EydnowRWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUlDOThXVF94cTA", "createdOn":"", "firstName":"dell XPS M1530 Wistron Hawke Intel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUlDOThXVF94cTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUdmX3NTNU44MlE", "createdOn":"", "firstName":"dell XPS M170, 9400 Compal LA 2881P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUdmX3NTNU44MlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjVqQ0RlRDRERWs", "createdOn":"", "firstName":"dell XPS M1330 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjVqQ0RlRDRERWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzFrR3lyVUh2dDg", "createdOn":"", "firstName":"dell XPS 15Z Quanta SS8 Rev3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzFrR3lyVUh2dDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlJTR3FjNkswZ0k", "createdOn":"", "firstName":"dell Vostro 1310 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlJTR3FjNkswZ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVJFVXF3QUxzWmM", "createdOn":"", "firstName":"dell Vostro 1000 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVJFVXF3QUxzWmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3NMQW4xVWtLMjQ", "createdOn":"", "firstName":"dell Studio XPS 1640 RM3 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3NMQW4xVWtLMjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFVpdVdkeTFpeEU", "createdOn":"", "firstName":"dell STUDIO XPS 1340 QUANTA IM3 (Jolie).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFVpdVdkeTFpeEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlNJQ3J2WFh2SnM", "createdOn":"", "firstName":"dell Studio 1535 1537 (FM7).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlNJQ3J2WFh2SnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSU1uZTVjV2Zwb00", "createdOn":"", "firstName":"dell Studio 1535 1537 (Quanta FM7).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSU1uZTVjV2Zwb00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1FDRzZlby1xTlE", "createdOn":"", "firstName":"dell N5050 WISTRON EnricoCaruso 15 UMA DV15 RX01 10316 1 HR 0602.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1FDRzZlby1xTlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOF84TTYxal9tR0E", "createdOn":"", "firstName":"dell N7110 Vostro 3750 QUANTA R03 V03 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOF84TTYxal9tR0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialppQlo5dkpmeUk", "createdOn":"", "firstName":"dell Latitude D820 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialppQlo5dkpmeUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjUtQ1Nja3Jvbms", "createdOn":"", "firstName":"dell Latitude D630 COMPAL LA 3301P INTEGRATED REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjUtQ1Nja3Jvbms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjJPanVleWtfVDQ", "createdOn":"", "firstName":"dell Latitude D620 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjJPanVleWtfVDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUs2c0xlakVzalk", "createdOn":"", "firstName":"dell Latitude D610 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUs2c0xlakVzalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGZWSExQdW52bWs", "createdOn":"", "firstName":"dell Latitude D610 QUANTA JM5B SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGZWSExQdW52bWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXo0WFlRdlVLT00", "createdOn":"", "firstName":"dell Latitude D510 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXo0WFlRdlVLT00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVRJRG5oTGhmbVk", "createdOn":"", "firstName":"dell Latitude D600 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVRJRG5oTGhmbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmJoM2x0MUp1UTA", "createdOn":"", "firstName":"dell Insprion 17R (N7010) QUANTA UM9 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmJoM2x0MUp1UTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUQteExEWS1Zc0k", "createdOn":"", "firstName":"dell Inspiron N4050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUQteExEWS1Zc0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieW1qVE16UjhkTnc", "createdOn":"", "firstName":"dell Inspiron N4050 (Wistron Enrico Caruso 14) HM67 Core i5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieW1qVE16UjhkTnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnFwcWlNSVRfZ3c", "createdOn":"", "firstName":"dell Inspiron N4030 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnFwcWlNSVRfZ3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2pZdjJfV2ctbzQ", "createdOn":"", "firstName":"dell Inspiron N4010 (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2pZdjJfV2ctbzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlprbnJ2ZG5MZVk", "createdOn":"", "firstName":"dell Inspiron N4010(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlprbnJ2ZG5MZVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ244TnN4eU52Rlk", "createdOn":"", "firstName":"dell Inspiron AMD M301Z Flex H320UA 40GAB4900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ244TnN4eU52Rlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0RsWjh4SXVBMEk", "createdOn":"", "firstName":"dell Inspiron N3010 (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0RsWjh4SXVBMEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNU9KdXRobjlLR2M", "createdOn":"", "firstName":"dell Inspiron 8200 Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNU9KdXRobjlLR2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHZYbC1kUHVyQzQ", "createdOn":"", "firstName":"dell Inspiron 6400 Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHZYbC1kUHVyQzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiam9ZcUZSZTVscEE", "createdOn":"", "firstName":"dell Inspiron 1535 1537 Quanta FM6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiam9ZcUZSZTVscEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0VXQjFleEo5OEk", "createdOn":"", "firstName":"dell Inspiron 1427 Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0VXQjFleEo5OEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWp0RFJVRWxVX1k", "createdOn":"", "firstName":"dell Inspiron 1420 ELSA LANAI UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWp0RFJVRWxVX1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlZnQkFfZUJPZTg", "createdOn":"", "firstName":"dell Inspiron 1420.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlZnQkFfZUJPZTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX1ZqdmZZOGREbVU", "createdOn":"", "firstName":"dell Inspiron 1420 ELSA LANAI DISCRETE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX1ZqdmZZOGREbVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVM4d2JtdGVEV1U", "createdOn":"", "firstName":"dell Inspiron 1318 Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVM4d2JtdGVEV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUMyaW9VYlJYUDg", "createdOn":"", "firstName":"dell Inspiron 13z .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUMyaW9VYlJYUDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3YwcGo5OG16bTg", "createdOn":"", "firstName":"dell D810 Compal LA 2112 Laguna.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3YwcGo5OG16bTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmpTOGVsR1hVTjA", "createdOn":"", "firstName":"dell D630 DISCRETE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmpTOGVsR1hVTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0FPWTlHZW9JWFU", "createdOn":"", "firstName":"dell Alienware M11x R3 LA 6961P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0FPWTlHZW9JWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNC1yaGY5OHBkWUU", "createdOn":"", "firstName":"dell COMPAL LA 1181.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNC1yaGY5OHBkWUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0Vkd01mY05PQ1U", "createdOn":"", "firstName":"dell Compal LA 8241P QCL00 QCL20 Rev 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0Vkd01mY05PQ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkVXSlp2MEVLSDA", "createdOn":"", "firstName":"dell b2f74 Compal LA 9104P VAW00 Inspiron 3521.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkVXSlp2MEVLSDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlJRcmtMR1h2N3c", "createdOn":"", "firstName":"dell compal la 3071p r1 HAU30 DA800004H1L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlJRcmtMR1h2N3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlFUX0pPYXc2RWM", "createdOn":"", "firstName":"dell 14fc7  Inspiron Mini 10 1012   COMPAL LA 5732P NIM10 UMA   REV 0.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlFUX0pPYXc2RWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDRrRE5tdE80ZU0", "createdOn":"", "firstName":"dell 7e38e  INSPIRON 1370 (Compal LA 5541P).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDRrRE5tdE80ZU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjREM29Xc2hyUU0", "createdOn":"", "firstName":"asus F5SL Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjREM29Xc2hyUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialIyRk4tWmxXQ2c", "createdOn":"", "firstName":"asus UX50 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialIyRk4tWmxXQ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzJUVTItSE5vLU0", "createdOn":"", "firstName":"asus N50A,N51A .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzJUVTItSE5vLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUG1yMFc1bS1yWnc", "createdOn":"", "firstName":"asus K53U PBL60 b6a2f Compal LA 7322P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUG1yMFc1bS1yWnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLW54Z3FfVEQtRWc", "createdOn":"", "firstName":"asus K43U 7ae1a Compal LA 7321P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLW54Z3FfVEQtRWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzBiaUxxOGdEdEU", "createdOn":"", "firstName":"asus k40in .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzBiaUxxOGdEdEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTlWWG5sdWhqdmM", "createdOn":"", "firstName":"asus  X51L REV2.0 5855.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTlWWG5sdWhqdmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFRqdkgzZVRMNW8", "createdOn":"", "firstName":"asus  x51c t12c rev 1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFRqdkgzZVRMNW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXctOU9DS2pTbnc", "createdOn":"", "firstName":"asus  n61jv rev 2.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXctOU9DS2pTbnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGFPbGhobm1BUGs", "createdOn":"", "firstName":"asus  m50s x55s rev 2.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGFPbGhobm1BUGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEdEN2QwYlVVeGM", "createdOn":"", "firstName":"asus  m52v pegatron g60vx rev r1.2 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEdEN2QwYlVVeGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVc2eUVoX0hDTWc", "createdOn":"", "firstName":"asus  k53t u53f compal la 7552p qbl50 qbl60 amd sabina LA 7552P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVc2eUVoX0hDTWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGhBRld4c19HZmc", "createdOn":"", "firstName":"asus  k52n r1.0 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGhBRld4c19HZmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkVvRWZEU2M4MTA", "createdOn":"", "firstName":"asus  K50IJ laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkVvRWZEU2M4MTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVA3MVZqYmtOdk0", "createdOn":"", "firstName":"asus  f5r rev 2.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVA3MVZqYmtOdk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWRRN3J3aEdEd0k", "createdOn":"", "firstName":"asus  f5z rev 2.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWRRN3J3aEdEd0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlBYN2hsZHBONkU", "createdOn":"", "firstName":"asus  F5N F5U.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlBYN2hsZHBONkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDNmb09HUnp2bWc", "createdOn":"", "firstName":"asus  F3Sc F3Sv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDNmb09HUnp2bWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmpkclk2d3hQS0U", "createdOn":"", "firstName":"asus  a9rp z94rp rev 1.2 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmpkclk2d3hQS0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3plN2Nnc3lqZXc", "createdOn":"", "firstName":"asus  A8N A8Dcrev1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3plN2Nnc3lqZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczAyS3IxSmZrSU0", "createdOn":"", "firstName":"asus  a8n a8dc rev 1.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczAyS3IxSmZrSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3kweFpmYURob1k", "createdOn":"", "firstName":"asus Z94RP r1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3kweFpmYURob1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGdmX1NiN3F4LUU", "createdOn":"", "firstName":"asus  1001px rev 1.2g sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGdmX1NiN3F4LUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2VteU1pU28xVXM", "createdOn":"", "firstName":"asus Elsa Power Sequence.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2VteU1pU28xVXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFN4RTVaLWszY2c", "createdOn":"", "firstName":"asus X51C (T12C) Schematic Diagrams.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFN4RTVaLWszY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVQ4aW5lNEJpZTA", "createdOn":"", "firstName":"asus z94rp r1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVQ4aW5lNEJpZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlRzRmVaZElvUWc", "createdOn":"", "firstName":"asus X51 T12 T12R.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlRzRmVaZElvUWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmthX3FQc01xenc", "createdOn":"", "firstName":"asus UX50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmthX3FQc01xenc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmJjN05Pd2V6RlU", "createdOn":"", "firstName":"asus UX50 laptop schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmJjN05Pd2V6RlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNW1UUjZJZTBSdHM", "createdOn":"", "firstName":"asus UL50AT REV2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNW1UUjZJZTBSdHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRS1RRzA2bGpoc28", "createdOn":"", "firstName":"asus UL50AT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRS1RRzA2bGpoc28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXZ5Z1BuS2N4T2c", "createdOn":"", "firstName":"asus T12J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXZ5Z1BuS2N4T2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEZQWUxWZTMxUGs", "createdOn":"", "firstName":"asus T91MT ASUS T91 R12G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEZQWUxWZTMxUGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjFrZWVhbWZrR1U", "createdOn":"", "firstName":"asus P80V C A Q P80VC.A.Q.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjFrZWVhbWZrR1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjV2ZndybUNxREE", "createdOn":"", "firstName":"asus n61jv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjV2ZndybUNxREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnFLbHhHVjctTnc", "createdOn":"", "firstName":"asus N50A N51A .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnFLbHhHVjctTnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUNrdzV6WlNtV2s", "createdOn":"", "firstName":"asus N50A N51A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUNrdzV6WlNtV2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ01CUUxYZlVkVHc", "createdOn":"", "firstName":"asus M50vm schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ01CUUxYZlVkVHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZmc1Tk15Tl9ZYkU", "createdOn":"", "firstName":"asus k50ij mb r20 0309.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZmc1Tk15Tl9ZYkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHkwU29Kcm1NYUU", "createdOn":"", "firstName":"asus k50ii mb r20 0309.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHkwU29Kcm1NYUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkc2NzFxYzdUVjA", "createdOn":"", "firstName":"asus K42Jv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkc2NzFxYzdUVjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2FKUzBmaExHQlk", "createdOn":"", "firstName":"asus K42Jv Laptop Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2FKUzBmaExHQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiallUXzdMTU9tSzQ", "createdOn":"", "firstName":"asus K42F r1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiallUXzdMTU9tSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFJoY0U2V1A4Y2c", "createdOn":"", "firstName":"asus K42Jr r2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFJoY0U2V1A4Y2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2h4aFgyOWpFeDg", "createdOn":"", "firstName":"asus k40ij k50ij rev 1.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2h4aFgyOWpFeDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmdmTTFyTXpKWk0", "createdOn":"", "firstName":"asus K40IJ K50IJ Schematic Diagrams.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmdmTTFyTXpKWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHZ2dU50ZkcxNTQ", "createdOn":"", "firstName":"asus K40AA K50AA Schematic Diagrams.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHZ2dU50ZkcxNTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZk1ZMGlERE9ZUXc", "createdOn":"", "firstName":"asus G71G K40IN.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZk1ZMGlERE9ZUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3BXRFpMVFhHNTA", "createdOn":"", "firstName":"asus F9J schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3BXRFpMVFhHNTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzAtRmp1ZXBaSWc", "createdOn":"", "firstName":"asus F8v(a) L80v N80 N81 Schematic Diagrams.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzAtRmp1ZXBaSWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaF9vdHlYZ1JGY3M", "createdOn":"", "firstName":"asus F3S v F3S c R20 QIMONDA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaF9vdHlYZ1JGY3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVU82ZjRwc1RUNHc", "createdOn":"", "firstName":"asus Elsa Power Sequence.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVU82ZjRwc1RUNHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS09fd1kyMmN1Q2M", "createdOn":"", "firstName":"asus EeePC P900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS09fd1kyMmN1Q2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVRHdGJpVE45c2s", "createdOn":"", "firstName":"asus Eee PC T91 R12G .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVRHdGJpVE45c2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVFqVzlDQ3JvT28", "createdOn":"", "firstName":"asus eee pc S101 R1.2G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVFqVzlDQ3JvT28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXJlQWU4ejN5MVU", "createdOn":"", "firstName":"asus eee PC s101 r1 1g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXJlQWU4ejN5MVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidm9Qb055OW9uU0E", "createdOn":"", "firstName":"asus eee pc P901 R1.3G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidm9Qb055OW9uU0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2k2MXNkOFhjU0E", "createdOn":"", "firstName":"asus eee pc S101 REV 1.1G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2k2MXNkOFhjU0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2ZxdVg0RmthLTA", "createdOn":"", "firstName":"asus eee pc P901 R1.00G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2ZxdVg0RmthLTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTN1cDk4YUQtTzg", "createdOn":"", "firstName":"asus eee pc P901 R1.1G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTN1cDk4YUQtTzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmpBZlJJYWRsSFE", "createdOn":"", "firstName":"asus eee pc p901 r1 3g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmpBZlJJYWRsSFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVpUYzcwMkh5RjA", "createdOn":"", "firstName":"asus eee pc p901 r1 1g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVpUYzcwMkh5RjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZU5rdFp0elo2WDA", "createdOn":"", "firstName":"asus eee pc p901 r1 1g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZU5rdFp0elo2WDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkQ0SlFXWHI3M2M", "createdOn":"", "firstName":"asus eee pc p901 r1 00g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkQ0SlFXWHI3M2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHBfR3VfWm1hcnc", "createdOn":"", "firstName":"asus eee pc p900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHBfR3VfWm1hcnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHM5aE8tbEpXbXM", "createdOn":"", "firstName":"asus eee pc p703.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHM5aE8tbEpXbXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFFhbmdyZTZ4Tk0", "createdOn":"", "firstName":"asus eee pc P1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFFhbmdyZTZ4Tk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzltcWI5aTVEX1U", "createdOn":"", "firstName":"asus eee pc 904h.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzltcWI5aTVEX1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTS1VZ0lxS2FFQzA", "createdOn":"", "firstName":"asus eee pc 701sdx mb rev 1.1g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTS1VZ0lxS2FFQzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWZhb3QwMklvdWM", "createdOn":"", "firstName":"asus eee pc 900PV (PINEVIEW).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWZhb3QwMklvdWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibERxMkVqLTM0OWc", "createdOn":"", "firstName":"asus eee pc 1201t r2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibERxMkVqLTM0OWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkdBTXAtOWlyR1U", "createdOn":"", "firstName":"asus eee pc 1215T.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkdBTXAtOWlyR1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2pqMWQ4STBwWmc", "createdOn":"", "firstName":"asus eee pc 1201T r2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2pqMWQ4STBwWmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTZwWlN6YXhZZXc", "createdOn":"", "firstName":"asus eee pc 1101hag.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTZwWlN6YXhZZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTE9abk1DcG9aTkE", "createdOn":"", "firstName":"asus eee pc 1015p rev 1.2g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTE9abk1DcG9aTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXlLZFNiOUFBWmM", "createdOn":"", "firstName":"asus eee pc 1008HA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXlLZFNiOUFBWmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiay11N1l5bk90YVU", "createdOn":"", "firstName":"asus eee pc 1005HA REV 1.1G SCH.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiay11N1l5bk90YVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGJURnNpVzF3aVk", "createdOn":"", "firstName":"asus Eee pc 1003HA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGJURnNpVzF3aVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamhVQmw1QjVPTDQ", "createdOn":"", "firstName":"asus eee pc 1002.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamhVQmw1QjVPTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUhna0Uzb2l5dHc", "createdOn":"", "firstName":"asus eee pc 1000HE MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUhna0Uzb2l5dHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXZRWlpydk1RdUk", "createdOn":"", "firstName":"asus eee pc 1000 rev 1.2g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXZRWlpydk1RdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmdUbXFvZlZnUmc", "createdOn":"", "firstName":"asus A8J.F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmdUbXFvZlZnUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHAzQUpsd0pJSGM", "createdOn":"", "firstName":"asus A6K laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHAzQUpsd0pJSGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVBPcEdZMFRlR0E", "createdOn":"", "firstName":"asus A6K SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVBPcEdZMFRlR0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2tDNEdRRFpmTmc", "createdOn":"", "firstName":"asus a6j mb 1122.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2tDNEdRRFpmTmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3htcEhjN1M1d0k", "createdOn":"", "firstName":"asus A42J K42JR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3htcEhjN1M1d0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkxLZ0N5WTd5TkE", "createdOn":"", "firstName":"asus a6f rev 1.1 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkxLZ0N5WTd5TkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGNmb0RPcXZTNXc", "createdOn":"", "firstName":"asus 11896 K42Jv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGNmb0RPcXZTNXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREZ0MXJ2SktjMTQ", "createdOn":"", "firstName":"asus eee pc 904HD 1.3g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREZ0MXJ2SktjMTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVFDMEZqejBpMXM", "createdOn":"", "firstName":"apple M97 051 7537 A000[1].schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVFDMEZqejBpMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkYxOW44OXhNcFk", "createdOn":"", "firstName":"apple FA255 Macbook M42C MLB schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkYxOW44OXhNcFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNElwSmk3ZVZSZXc", "createdOn":"", "firstName":"apple cca28  Macbook Pro 13 A1278 (K24, 820 2530).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNElwSmk3ZVZSZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic294ekFzSDdvdlE", "createdOn":"", "firstName":"apple Macbook Pro 13 A1278.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic294ekFzSDdvdlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXJiempWYkpyMVE", "createdOn":"", "firstName":"apple Ipad 3 Tablet Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXJiempWYkpyMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0k1ZFU2MW43b0E", "createdOn":"", "firstName":"apple 051 7225 resolved1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0k1ZFU2MW43b0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1NqSlNnUGRkM1U", "createdOn":"", "firstName":"apple MacBook Air 820 2179.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1NqSlNnUGRkM1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0J4cWdHZUFMUkE", "createdOn":"", "firstName":"apple ad197 18341 051 7150 M59 15.4” A1211 MLB M59.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0J4cWdHZUFMUkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEpYeXZ4QU9Kbms", "createdOn":"", "firstName":"apple ac484 051 7164 resolved.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEpYeXZ4QU9Kbms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWU94UnhEd2lNaDA", "createdOn":"", "firstName":"apple A2186 820 2850 A 5cbdb While Arrow MLB K18.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWU94UnhEd2lNaDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTVQYVBFNnR6RlE", "createdOn":"", "firstName":"apple a520f  MacBook Unibody A1342 (K84, 820 2567).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTVQYVBFNnR6RlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMW9PZWVQLWh5azg", "createdOn":"", "firstName":"apple A1342 635c2 K87 MLB 051 8561 820 2877 C00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMW9PZWVQLWh5azg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0ZTYXYzZDZTQkU", "createdOn":"", "firstName":"apple A1278 820 2879.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0ZTYXYzZDZTQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFlpZGZoaWZSYTQ", "createdOn":"", "firstName":"apple A1278 6.12.09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFlpZGZoaWZSYTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2Jja1pfSXh1cFk", "createdOn":"", "firstName":"apple a1278 J30 820 3115 B 051 9058.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2Jja1pfSXh1cFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRElNZy02azhLQXc", "createdOn":"", "firstName":"apple 99208  Macbook Pro A1386 (MBP 15MLB) schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRElNZy02azhLQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnl1enhqVXJKcmM", "createdOn":"", "firstName":"apple 95cbc 820 2796 051 8379 Air A1370 K99(1).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnl1enhqVXJKcmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXpYSFZYUm5KMGM", "createdOn":"", "firstName":"apple 820 3209 A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXpYSFZYUm5KMGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTU5UOWM1OEZVNjA", "createdOn":"", "firstName":"apple 87cd6 Macbook Air A1304 M96 MLB 051 7631 230.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTU5UOWM1OEZVNjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFh2NF9CdHdOd0E", "createdOn":"", "firstName":"apple 788481843 051 8563.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFh2NF9CdHdOd0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSlE3OGNFWlBZUVE", "createdOn":"", "firstName":"apple 41df2  MacBook Pro A1226 EVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSlE3OGNFWlBZUVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVB6RTE2Z1RoS1U", "createdOn":"", "firstName":"apple 4c3e9  Macbook A1181 K36C MLB SCHEMATIC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVB6RTE2Z1RoS1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTE1LbU1tV2IzNUE", "createdOn":"", "firstName":"apple 245d1  MacBook Pro A1226 DVT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTE1LbU1tV2IzNUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWotSUY3ajdlSjA", "createdOn":"", "firstName":"toshiba Toshiba laptop schematic diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWotSUY3ajdlSjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWF9BZHVYOEFvVTg", "createdOn":"", "firstName":"toshiba Toshiba Satellite P300 P305 (Quanta BL5M) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWF9BZHVYOEFvVTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzR4R1A5S2dHeXc", "createdOn":"", "firstName":"apple powermac g4cube.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzR4R1A5S2dHeXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG1remRLSldKdEE", "createdOn":"", "firstName":"apple powermac powermac g3 all in one.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG1remRLSldKdEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZm9BM3ZZMHc1M28", "createdOn":"", "firstName":"apple powermac pmg4 mir fw800.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZm9BM3ZZMHc1M28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWNkb2xnUDFkUUE", "createdOn":"", "firstName":"apple powermac powermac g3 blue.white.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWNkb2xnUDFkUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlNtTFpiYkV3VDg", "createdOn":"", "firstName":"apple powermac powermac g3 desktop.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlNtTFpiYkV3VDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmtRMnhMdTR3dkU", "createdOn":"", "firstName":"apple powermac powermac g4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmtRMnhMdTR3dkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2ZRVjB2a0NPMTg", "createdOn":"", "firstName":"apple powermac powermac g5 late2005.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2ZRVjB2a0NPMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHBucmVvZUlUZmM", "createdOn":"", "firstName":"apple powermac powermac g5 late2004.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHBucmVvZUlUZmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHprWmxWNWJtYTA", "createdOn":"", "firstName":"apple powermac powermac server g3 minitow.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHprWmxWNWJtYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVAyUjZ0LU1jRFk", "createdOn":"", "firstName":"apple powerbook pbg4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVAyUjZ0LU1jRFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjRyTWtmWkY3eTQ", "createdOn":"", "firstName":"apple powerbook pbg4 12in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjRyTWtmWkY3eTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXVycFY1NWE5a3c", "createdOn":"", "firstName":"apple powerbook pbg4 12in 1 5ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXVycFY1NWE5a3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU28tcVNXdDhiTm8", "createdOn":"", "firstName":"apple powerbook pbg4 12in 1ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU28tcVNXdDhiTm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWNfU0lSQkE2dGM", "createdOn":"", "firstName":"apple powerbook pbg4 15 dlsd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWNfU0lSQkE2dGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmRjWldJQlo4cUU", "createdOn":"", "firstName":"apple powerbook pbg4 15 167ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmRjWldJQlo4cUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHZBUUVWRjBGZWs", "createdOn":"", "firstName":"apple powerbook pbg4 15 fw800 15ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHZBUUVWRjBGZWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGxYWmdVVTlGazQ", "createdOn":"", "firstName":"apple powerbook pbg4 17 dl 167 15 133ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGxYWmdVVTlGazQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHU0OEJnaDV1aXM", "createdOn":"", "firstName":"apple powerbook pbg4 17in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHU0OEJnaDV1aXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienA0MXRveUE0QVk", "createdOn":"", "firstName":"apple powerbook pbg4 1ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienA0MXRveUE0QVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVRIdEl5ZlI3anM", "createdOn":"", "firstName":"apple powerbook pbg4 dvi.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVRIdEl5ZlI3anM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0hObVZFY2lhdnc", "createdOn":"", "firstName":"apple powerbook pb g3 series bronze.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0hObVZFY2lhdnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTUNYcFRfUjZvdDQ", "createdOn":"", "firstName":"apple powerbook pbg4 ge.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTUNYcFRfUjZvdDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTc5TGlfZDVGU3M", "createdOn":"", "firstName":"apple powerbook powerbook 1400 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTc5TGlfZDVGU3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTIzWGlVdGJhWHc", "createdOn":"", "firstName":"apple powerbook powerbook 100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTIzWGlVdGJhWHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDBla3RVYTJXTEE", "createdOn":"", "firstName":"apple powerbook powerbook 140.145.b.170.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDBla3RVYTJXTEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHF1a2xBRnZ4SEU", "createdOn":"", "firstName":"apple powerbook powerbook 150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHF1a2xBRnZ4SEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN21aUkdMTHdjRkk", "createdOn":"", "firstName":"apple powerbook powerbook 150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN21aUkdMTHdjRkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzYtWk9GYWZBVjg", "createdOn":"", "firstName":"apple powerbook powerbook 160.165.180.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzYtWk9GYWZBVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDJ5aUNhVHF6RWc", "createdOn":"", "firstName":"apple powerbook powerbook 165c.180c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDJ5aUNhVHF6RWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWW9HTERXaW5wVnc", "createdOn":"", "firstName":"apple powerbook powerbook 190.5300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWW9HTERXaW5wVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnJrWWthMHpKWVk", "createdOn":"", "firstName":"apple powerbook powerbook 190.5300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnJrWWthMHpKWVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0hpeWlDUndQSVk", "createdOn":"", "firstName":"apple powerbook powerbook 200 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0hpeWlDUndQSVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajdabUd3SE9tQmM", "createdOn":"", "firstName":"apple powerbook powerbook 190.5300 rea.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajdabUd3SE9tQmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXFCaHdjRVJIZzg", "createdOn":"", "firstName":"apple powerbook powerbook 2300 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXFCaHdjRVJIZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVU9raTk0cDUxRGM", "createdOn":"", "firstName":"apple powerbook powerbook 3400c.g3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVU9raTk0cDUxRGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTV9XR2xxSWsyNmc", "createdOn":"", "firstName":"apple powerbook powerbook 2400c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTV9XR2xxSWsyNmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmx6Z3dXemJhTEk", "createdOn":"", "firstName":"apple powerbook powerbook 500 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmx6Z3dXemJhTEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUElyc0NFRlFYeE0", "createdOn":"", "firstName":"apple powerbook powerbook 550c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUElyc0NFRlFYeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDZvT2tzVXhzRnc", "createdOn":"", "firstName":"apple powerbook powerbook fw.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDZvT2tzVXhzRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTndlWVN4cHAtckU", "createdOn":"", "firstName":"apple powerbook powerbook duo dock.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTndlWVN4cHAtckU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3JXbUowUURCelk", "createdOn":"", "firstName":"apple powerbook powerbook duo minidock.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3JXbUowUURCelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3ItZTluTkpYZDA", "createdOn":"", "firstName":"apple powerbook powerbook g3 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3ItZTluTkpYZDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnRHcmNQTmJQLW8", "createdOn":"", "firstName":"apple Powerbook PowerBook (FireWire) 01 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnRHcmNQTmJQLW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFhRWDVwTVRrSms", "createdOn":"", "firstName":"apple Powerbook PowerBook 1400 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFhRWDVwTVRrSms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjZOenQyUHJGV1U", "createdOn":"", "firstName":"apple Powerbook PowerBook 100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjZOenQyUHJGV1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSUhUUjU3eXE4VlE", "createdOn":"", "firstName":"apple Powerbook PowerBook 140 145 145B 170.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSUhUUjU3eXE4VlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUFYeS1MSWdXbzg", "createdOn":"", "firstName":"apple Powerbook PowerBook 150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUFYeS1MSWdXbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVpfdFZBV0ZVZ2c", "createdOn":"", "firstName":"apple Powerbook Powerbook 160 165 180.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVpfdFZBV0ZVZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVG5IcGxZd3RhcDg", "createdOn":"", "firstName":"apple Powerbook PowerBook 165c 180c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVG5IcGxZd3RhcDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGFXNW9mY0NBWm8", "createdOn":"", "firstName":"apple Powerbook PowerBook 190 series 5300 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGFXNW9mY0NBWm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3BiUGlIV0Jnbzg", "createdOn":"", "firstName":"apple Powerbook PowerBook 200 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3BiUGlIV0Jnbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1R2TDFtREVxOFU", "createdOn":"", "firstName":"apple Powerbook PowerBook 2300 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1R2TDFtREVxOFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV19yUV9uOGIybGM", "createdOn":"", "firstName":"apple Powerbook PowerBook 2400c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV19yUV9uOGIybGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM05oVDBWNFE2djA", "createdOn":"", "firstName":"apple Powerbook PowerBook 2400c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM05oVDBWNFE2djA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialV3WjQ4VXZyTDg", "createdOn":"", "firstName":"apple Powerbook PowerBook 3400c G3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialV3WjQ4VXZyTDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVhqTFBFN0NZbkk", "createdOn":"", "firstName":"apple Powerbook PowerBook 3400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVhqTFBFN0NZbkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSElKQTVCSV96Qms", "createdOn":"", "firstName":"apple Powerbook PowerBook G3 Series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSElKQTVCSV96Qms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1R3STdiREZGbzQ", "createdOn":"", "firstName":"apple Powerbook PowerBook 500 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1R3STdiREZGbzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGNrSm1oaHg3cHM", "createdOn":"", "firstName":"apple Powerbook PowerBook 550c.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGNrSm1oaHg3cHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUndYVDZZRGQwcHM", "createdOn":"", "firstName":"apple Powerbook PowerBook G3 Series (Bronze).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUndYVDZZRGQwcHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjJ1cXQyWmNCTkE", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (12 inch 1.33 GHz) 05 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjJ1cXQyWmNCTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTY1OHpDeWVtTUE", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (12 inch 1.5 GHz) 05 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTY1OHpDeWVtTUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXN3OGUxbzh0MVU", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (15 inch Double Layer SD) 05 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXN3OGUxbzh0MVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUpEUUxpWDBtbk0", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (12 inch and DVI) 03 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUpEUUxpWDBtbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGJMTVhJUUtRcXM", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (12 inch and DVI) 05 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGJMTVhJUUtRcXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSk93TFRSVU9EY2M", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (12 inch) 03 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSk93TFRSVU9EY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWZLTnk1VmtzUjA", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (15 inch FW 800, 1.5 and 1.33GHz) 04 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWZLTnk1VmtzUjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidy0wMl9GUmdDTFE", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (17 inch Double Layer SD 1.67 1.5 1.33GHz) 05 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidy0wMl9GUmdDTFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiel9QQm9RSjVLTkk", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (15 inch FW800) 03 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiel9QQm9RSjVLTkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEwtM2IwUzdBRUU", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (17 inch 1.33GHz) 03 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEwtM2IwUzdBRUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEloeUlnUFZ4NzQ", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (1GHz, 867MHz) 02 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEloeUlnUFZ4NzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUp3aklkMVhxWk0", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (17 inch) 03 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUp3aklkMVhxWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianBNZG5tTlhLLUU", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (1GHz, 867MHz) 03 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianBNZG5tTlhLLUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0RYYjExLTZNLTA", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (1GHz, 867MHz) 03 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0RYYjExLTZNLTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekdnaS1ObURaaWM", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (DVI 667 and 800MHz) 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekdnaS1ObURaaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTNZc2dFR2JUeGc", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (DVI) 03 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTNZc2dFR2JUeGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXM4UWlHSUJGUk0", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (DVI) 02 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXM4UWlHSUJGUk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlJjbHZpSlZHd2M", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (Gigabit Ethernet 550 667 MHz) 02 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlJjbHZpSlZHd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTZ6OXlaTFFwc1U", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (Gigabit Ethernet) 02 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTZ6OXlaTFFwc1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmFrTWtSeHFWQ00", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 (Titanium 400 and 500MHz) 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmFrTWtSeHFWQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejJQdlcwS0FhbjA", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 02 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejJQdlcwS0FhbjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRm4yNkRUU21yMTg", "createdOn":"", "firstName":"apple Mini Mac mini 05 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRm4yNkRUU21yMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUJzOWJYWWxwQlk", "createdOn":"", "firstName":"apple Powerbook PowerBook G4 03 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUJzOWJYWWxwQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjlnZ2o5UlM3NnM", "createdOn":"", "firstName":"apple Mini Mac mini (Early 2006) 06 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjlnZ2o5UlM3NnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZi1Ua1JMdVlsWWs", "createdOn":"", "firstName":"apple Mini Mac mini 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZi1Ua1JMdVlsWWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM04zdDU1cGs2RlE", "createdOn":"", "firstName":"apple Mini Mac mini 06 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM04zdDU1cGs2RlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidG1mMlFSUXQyZzQ", "createdOn":"", "firstName":"apple Macbook MacBook (13 inch and late 2006) 06 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidG1mMlFSUXQyZzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXJJeHBwZjlkbmM", "createdOn":"", "firstName":"apple Macbook MacBook (13 inch Late 2006 Mid 2007) 07 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXJJeHBwZjlkbmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlk0R2EzTFhvcHc", "createdOn":"", "firstName":"apple Macbook MacBook (13 inch Late 2007 Early 2008) 08 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlk0R2EzTFhvcHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnR1WTFMTEo5bHM", "createdOn":"", "firstName":"apple Macbook MacBook (13 inch) 06 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnR1WTFMTEo5bHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9ERzRhV3BLM28", "createdOn":"", "firstName":"apple Macbook MacBook (13 inch, Aluminum, Late 2008) 08 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9ERzRhV3BLM28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3VYS2lLTzVLR1k", "createdOn":"", "firstName":"apple Macbook MacBook Air 08 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3VYS2lLTzVLR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkFPWlRVUWFuNkk", "createdOn":"", "firstName":"apple Macbook MacBook Pro (15 inch Core 2 Duo) 06 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkFPWlRVUWFuNkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkFuUVZiVHdCR0E", "createdOn":"", "firstName":"apple Macbook MacBook Pro (15 inch 2.4 2.2GHz) 07 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkFuUVZiVHdCR0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzFfVEgxRFRneEk", "createdOn":"", "firstName":"apple Macbook MacBook Pro (15 inch Early 2008) 08 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzFfVEgxRFRneEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTIySXZuazFYUm8", "createdOn":"", "firstName":"apple Macbook Macbook Pro (17 inch & 17 inch Core 2 Duo) 06 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTIySXZuazFYUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTY3ZG1aTGNub1k", "createdOn":"", "firstName":"apple Macbook MacBook Pro (17 inch) 06 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTY3ZG1aTGNub1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjFVOEVrdDU4OU0", "createdOn":"", "firstName":"apple Macbook MacBook Pro (17 inch, 17 inch Core 2 Duo and 17 inch 2.4GHz) 07 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjFVOEVrdDU4OU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUVVSXNWTVpFTW8", "createdOn":"", "firstName":"apple Macbook MacBook Pro 06 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUVVSXNWTVpFTW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkExSnZhRy0wR0U", "createdOn":"", "firstName":"apple iMac iMac (20 inch Mid 2007) 07 08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkExSnZhRy0wR0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1Y0REFlMDJOMXM", "createdOn":"", "firstName":"apple iMac iMac (17 inch Flat Panel) 02 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1Y0REFlMDJOMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVF6YmFfd3Vzc2s", "createdOn":"", "firstName":"apple iMac iMac (17 inch Flat Panel, 1GHz) 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVF6YmFfd3Vzc2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTVhM2w4TW5fRk0", "createdOn":"", "firstName":"apple iMac iMac (17 inch Flat Panel, 1GHz) 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTVhM2w4TW5fRk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlBuQlZqR3BqWEk", "createdOn":"", "firstName":"apple iMac iMac (Early 2001) 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlBuQlZqR3BqWEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTYyWGJnZl9mMzQ", "createdOn":"", "firstName":"apple iMac iMac (Early 2006 20 inch) 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTYyWGJnZl9mMzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3dqLTRtWnNPTjg", "createdOn":"", "firstName":"apple iMac iMac (Summer 2001) 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3dqLTRtWnNPTjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0JXSHRrTkhXQlU", "createdOn":"", "firstName":"apple iMac iMac (USB 2.0) 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0JXSHRrTkhXQlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibG80eDdJYXEwWEU", "createdOn":"", "firstName":"apple iMac iMac 233 266 333MHz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibG80eDdJYXEwWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXYzMlVud2RnYTA", "createdOn":"", "firstName":"apple iMac iMac 233 266 333MHz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXYzMlVud2RnYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFBTek9uZWVWdjg", "createdOn":"", "firstName":"apple iMac iMac DV 01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFBTek9uZWVWdjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVdaRVV0VDdWMnc", "createdOn":"", "firstName":"apple iMac iMac G5 (20 inch, iSight) 06 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVdaRVV0VDdWMnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGhYSF9MS2xpRkE", "createdOn":"", "firstName":"apple iMac iMac G5 (17 inch iSight) 06 08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGhYSF9MS2xpRkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkNvd0VrcVdsbXc", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD 16 VRAM 32 VRAM) 02 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkNvd0VrcVdsbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGQxU3g1MWhob2s", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD 16 VRAM 700 MHz) 02 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGQxU3g1MWhob2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiempmdTdCajNyZFU", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD 600 MHz) 02 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiempmdTdCajNyZFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVNsbXgzVUY2S3M", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD 16 VRAM) 02 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVNsbXgzVUY2S3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmVCWjNvalJJUDQ", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD) 03 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmVCWjNvalJJUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDFWMlJOZWVTMVU", "createdOn":"", "firstName":"apple iBook iBook (14.1 LCD) 03 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDFWMlJOZWVTMVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVoyZUNYR0syY0k", "createdOn":"", "firstName":"apple iBook iBook (14.1 inch 16 VRAM, 32 VRAM, 900MHz 32 VRAM) 03 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVoyZUNYR0syY0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTNmaTc4NzJ1QXc", "createdOn":"", "firstName":"apple iBook iBook (16 VRAM 600 700 MHz) 02 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTNmaTc4NzJ1QXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUh0VmR6MXViUjg", "createdOn":"", "firstName":"apple iBook iBook (14.1 inch) 03 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUh0VmR6MXViUjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkZTUDU3NjlPZjQ", "createdOn":"", "firstName":"apple iBook iBook (16 VRAM) 02 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkZTUDU3NjlPZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2dKUXJMeDZuLWs", "createdOn":"", "firstName":"apple iBook iBook (Dual USB 500 MHz) 02 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2dKUXJMeDZuLWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREM2VElIN0UxNVE", "createdOn":"", "firstName":"apple iBook iBook (16 VRAM) 03 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREM2VElIN0UxNVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUJqVjJ5am1XR0k", "createdOn":"", "firstName":"apple iBook iBook (Dual USB) 03 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUJqVjJ5am1XR0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFpMdW95NmpybzQ", "createdOn":"", "firstName":"apple iBook iBook (FireWire) 02 12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFpMdW95NmpybzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVU1TFlGcDBPUFE", "createdOn":"", "firstName":"apple iBook iBook (Late 2001 500 600 MHz) 02 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVU1TFlGcDBPUFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3FEd0o3YWplVGs", "createdOn":"", "firstName":"apple iBook iBook G4 (12 inch Mid 2005) 06 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3FEd0o3YWplVGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib29kRjBONG4tcGM", "createdOn":"", "firstName":"apple iBook iBook (Late 2001) 03 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib29kRjBONG4tcGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQV8tSDJZX0EzaU0", "createdOn":"", "firstName":"apple iBook iBook (Opaque 16 VRAM, 32 VRAM) 02 11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQV8tSDJZX0EzaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkNmRkJVN2szWDQ", "createdOn":"", "firstName":"apple iBook iBook (Opaque 16 VRAM, 32 VRAM, 800MHz 32 VRAM, 900MHZ 32 VRAM) 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkNmRkJVN2szWDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEdTYWs0Y1YyekU", "createdOn":"", "firstName":"apple iBook iBook G4 (14 inch Late 2004) 06 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEdTYWs0Y1YyekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0VVMUtUZ1Q1VFE", "createdOn":"", "firstName":"apple iBook iBook G4 (14.1 LCD) 03 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0VVMUtUZ1Q1VFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlAtQTk2b3hZRTA", "createdOn":"", "firstName":"apple iBook iBook G4 (Early 2004) 05 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlAtQTk2b3hZRTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjh4dlp2Zm50dHM", "createdOn":"", "firstName":"apple iBook iBook G4 03 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjh4dlp2Zm50dHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjZYdWJuVEtiNlU", "createdOn":"", "firstName":"apple iBook iBook.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjZYdWJuVEtiNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWo3cmstZ1pnQmc", "createdOn":"", "firstName":"apple eMac eMac (ATI Graphics and USB 2.0) 04 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWo3cmstZ1pnQmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWQ3bk5mZ0JjWk0", "createdOn":"", "firstName":"apple eMac eMac (ATI Graphics and USB 2.0) 06 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWQ3bk5mZ0JjWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUDM0bmZuVmQ4elk", "createdOn":"", "firstName":"apple eMac eMac (ATI Graphics and USB 2.0) 05 05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUDM0bmZuVmQ4elk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnNtak4yNl9YcXc", "createdOn":"", "firstName":"apple eMac eMac (ATI Graphics) 03 07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnNtak4yNl9YcXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRjVPOVQwSF85aVE", "createdOn":"", "firstName":"apple eMac eMac 02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRjVPOVQwSF85aVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkJ3UVBtRXlVU00", "createdOn":"", "firstName":"apple misc adb devices.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkJ3UVBtRXlVU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRG4wZXdJeHpIWDQ", "createdOn":"", "firstName":"apple misc airport.ts.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRG4wZXdJeHpIWDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHhZMmp4Ylo0a1k", "createdOn":"", "firstName":"apple misc cd 150.300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHhZMmp4Ylo0a1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzZqTldWSVhkZk0", "createdOn":"", "firstName":"apple misc cd sc.sc plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzZqTldWSVhkZk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmdQSWtaNHpkVFU", "createdOn":"", "firstName":"apple misc cd 300e plus.600e.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmdQSWtaNHpkVFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSl8tams1ZVM5WW8", "createdOn":"", "firstName":"apple misc design powered speaker.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSl8tams1ZVM5WW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQURabGVOU0h2Qjg", "createdOn":"", "firstName":"apple misc  5F400k drive.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQURabGVOU0h2Qjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODk5bnM0MXFCQTQ", "createdOn":"", "firstName":"apple misc color laserwriter 12.600 ps.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODk5bnM0MXFCQTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGtyM0JkNVpoVnc", "createdOn":"", "firstName":"apple misc  800k drive.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGtyM0JkNVpoVnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTdieEtKU0pEbjQ", "createdOn":"", "firstName":"apple misc  color printer.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTdieEtKU0pEbjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVpPeDdXUV8yTzg", "createdOn":"", "firstName":"apple misc  pc 5.25 drive.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVpPeDdXUV8yTzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkhBWEdXWmI2amc", "createdOn":"", "firstName":"apple misc  scanner products.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkhBWEdXWmI2amc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlc1b0pPTlJYT2c", "createdOn":"", "firstName":"apple misc  superdrive.hdi 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlc1b0pPTlJYT2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVVvUFlRN08xNDg", "createdOn":"", "firstName":"apple misc  tape backup 5F40sc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVVvUFlRN08xNDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkxHQm0wcXZ2c3M", "createdOn":"", "firstName":"apple misc  tv.fm radio system.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkxHQm0wcXZ2c3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE1QV1l5cTNPZGs", "createdOn":"", "firstName":"apple misc color onescanner.b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE1QV1l5cTNPZGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXlZTGFSb01lN1k", "createdOn":"", "firstName":"apple misc color onescanner 1200.30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXlZTGFSb01lN1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaU5GcXJMOHBtakk", "createdOn":"", "firstName":"apple misc color onescanner.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaU5GcXJMOHBtakk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYW01Q0dVejJkTkE", "createdOn":"", "firstName":"apple misc color onescanner 600.27.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYW01Q0dVejJkTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFhsUW9Fel9qTnM", "createdOn":"", "firstName":"apple misc color stylewriter 1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFhsUW9Fel9qTnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQU9HeWllNDlzNEU", "createdOn":"", "firstName":"apple misc color stylewriter 2200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQU9HeWllNDlzNEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNNeTIyWG1Pc1k", "createdOn":"", "firstName":"apple misc color stylewriter 2400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNNeTIyWG1Pc1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic004ZHdxMzkzOXM", "createdOn":"", "firstName":"apple misc color stylewriter 4500.4100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic004ZHdxMzkzOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRThKa2ZQSjQtdVE", "createdOn":"", "firstName":"apple misc color stylewriter 6500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRThKa2ZQSjQtdVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1dnb3I0UjNCM1k", "createdOn":"", "firstName":"apple misc color stylewriter 5F2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1dnb3I0UjNCM1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0VncmlCUWh0MmM", "createdOn":"", "firstName":"apple misc color stylewriter pro.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0VncmlCUWh0MmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnRhVFYzZlI0MHM", "createdOn":"", "firstName":"apple misc emate.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnRhVFYzZlI0MHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkJNeXNJbDJpV2M", "createdOn":"", "firstName":"apple misc communications cards.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkJNeXNJbDJpV2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWZVcTZqMmZrSkE", "createdOn":"", "firstName":"apple misc envelope feeder.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWZVcTZqMmZrSkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickFnX3BDWlBVOTQ", "createdOn":"", "firstName":"apple misc ethernet and localtalk prod.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickFnX3BDWlBVOTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDBnUDFpNHFzWHc", "createdOn":"", "firstName":"apple misc hard disk 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDBnUDFpNHFzWHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNi02UjJ1MjU3SEU", "createdOn":"", "firstName":"apple misc external hard drive sc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNi02UjJ1MjU3SEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3VzYnJJQlVyQk0", "createdOn":"", "firstName":"apple misc hard drives.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3VzYnJJQlVyQk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianhlY242OHBZRUk", "createdOn":"", "firstName":"apple misc laserwriter 8500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianhlY242OHBZRUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlQ4eGd3Wkxadnc", "createdOn":"", "firstName":"apple misc hdi20 1.4 drive.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlQ4eGd3Wkxadnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2ozWV9peE1JeVk", "createdOn":"", "firstName":"apple misc hdi20 1.4 drive.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2ozWV9peE1JeVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidl9fcXZDU0pMYlk", "createdOn":"", "firstName":"apple misc imagewriter ii.l.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidl9fcXZDU0pMYlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFdYbGpBUVJYQlE", "createdOn":"", "firstName":"apple misc imagewriter ii.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFdYbGpBUVJYQlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGJzaFhybXM2bGM", "createdOn":"", "firstName":"apple misc imagewriter lq.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGJzaFhybXM2bGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUtQV2lkeFF0TXc", "createdOn":"", "firstName":"apple misc laserwriter 10.600 a3plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUtQV2lkeFF0TXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibE0tUEFFUi1jTlE", "createdOn":"", "firstName":"apple misc laserwriter 12.640 ps.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibE0tUEFFUi1jTlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHVrVlpUVTRBams", "createdOn":"", "firstName":"apple misc laserwriter 16.600 ps.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHVrVlpUVTRBams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGtjM0VzZkp6OXM", "createdOn":"", "firstName":"apple misc laserwriter ii.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGtjM0VzZkp6OXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEpxcE1MWnVlNjA", "createdOn":"", "firstName":"apple misc pc compatibility card.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEpxcE1MWnVlNjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWZNTlo5MmV2SzA", "createdOn":"", "firstName":"apple misc laserwriter plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWZNTlo5MmV2SzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzZYLVBBUVFYNEk", "createdOn":"", "firstName":"apple misc laserwriter pro 600.630.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzZYLVBBUVFYNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1dKbXctV0J0T1E", "createdOn":"", "firstName":"apple misc laserwriter pro 810.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1dKbXctV0J0T1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1EwZUlwcC1rZjg", "createdOn":"", "firstName":"apple misc laserwriter select.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1EwZUlwcC1rZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGdHV3lCRE5wc2s", "createdOn":"", "firstName":"apple misc macintosh processor upgrade.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGdHV3lCRE5wc2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaURkb1dUTDgweTQ", "createdOn":"", "firstName":"apple misc messagepad 100.110.120.130.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaURkb1dUTDgweTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEVjMUItUDJVVzQ", "createdOn":"", "firstName":"apple misc messagepad 2000.2100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEVjMUItUDJVVzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGNjbjUyMEdjOE0", "createdOn":"", "firstName":"apple misc modems.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGNjbjUyMEdjOE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk5DNGxKbUpyWUE", "createdOn":"", "firstName":"apple macpro macpro.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk5DNGxKbUpyWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHVlYy10LUxEQlE", "createdOn":"", "firstName":"apple misc plw 300.320 lw 4.600 ps.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHVlYy10LUxEQlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEhPcU1xRlh5Wm8", "createdOn":"", "firstName":"apple misc plw sc.nt.ntr.ls.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEhPcU1xRlh5Wm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3Q3eG1Zc3JPbFk", "createdOn":"", "firstName":"apple misc portable stylewriter.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3Q3eG1Zc3JPbFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienJHMWJXQUpUeVk", "createdOn":"", "firstName":"apple misc powercd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienJHMWJXQUpUeVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFNmc2tsUzY5TG8", "createdOn":"", "firstName":"apple misc powermac upgrade card.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFNmc2tsUzY5TG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamRsb2hYdDY0X1E", "createdOn":"", "firstName":"apple misc quicktake 100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamRsb2hYdDY0X1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFFxMHNDMXNaTDg", "createdOn":"", "firstName":"apple misc quicktake 150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFFxMHNDMXNaTDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDhaYjh6eDZBYnM", "createdOn":"", "firstName":"apple misc quicktake 200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDhaYjh6eDZBYnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTThqRWFXTzlySlE", "createdOn":"", "firstName":"apple misc sheet feeder.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTThqRWFXTzlySlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGVLemtrcDB1eEE", "createdOn":"", "firstName":"apple misc sound cards.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGVLemtrcDB1eEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1E1OUJOeHpSdjQ", "createdOn":"", "firstName":"apple misc stylewriter.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1E1OUJOeHpSdjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDQwOTJfNmlMaGM", "createdOn":"", "firstName":"apple misc stylewriter 1200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDQwOTJfNmlMaGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTNMWDdjWUtwSjA", "createdOn":"", "firstName":"apple misc stylewriter ii.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTNMWDdjWUtwSjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFVIQ0VMNGV2RTQ", "createdOn":"", "firstName":"apple misc token ring products.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFVIQ0VMNGV2RTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1hUSXg0aFlmeUE", "createdOn":"", "firstName":"apple misc video cards.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1hUSXg0aFlmeUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0l5VTJPVjNtLWc", "createdOn":"", "firstName":"apple misc video conferencing.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0l5VTJPVjNtLWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXVreUJlXzZPOVk", "createdOn":"", "firstName":"apple macpro macpro 8x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXVreUJlXzZPOVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXAxd05lS1Nwd28", "createdOn":"", "firstName":"apple macpro macpro early2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXAxd05lS1Nwd28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzhQNGw0cFI4Snc", "createdOn":"", "firstName":"apple macpro macpro early2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzhQNGw0cFI4Snc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUIzMXdMZjJnZ2c", "createdOn":"", "firstName":"apple macpro macpro mid2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUIzMXdMZjJnZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2Z1T1ZXVVFQbzg", "createdOn":"", "firstName":"apple macbook macbook pro 17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2Z1T1ZXVVFQbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGtmRVR5ZTF5OHc", "createdOn":"", "firstName":"apple macmini mac mini.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGtmRVR5ZTF5OHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHhCV1NnVThUWEU", "createdOn":"", "firstName":"apple macmini mac mini early late 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHhCV1NnVThUWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGhfLVdZdXlZUUE", "createdOn":"", "firstName":"apple macmini mac mini late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGhfLVdZdXlZUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibW10QmJiX0l2VFU", "createdOn":"", "firstName":"apple macmini mac mini mid 2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibW10QmJiX0l2VFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkV3YjZwTzV0Qzg", "createdOn":"", "firstName":"apple macbook macbook pro.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkV3YjZwTzV0Qzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUR6U0dLcHBOZlU", "createdOn":"", "firstName":"apple macbook MacBookAir.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUR6U0dLcHBOZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNndXVmRjMktZNzA", "createdOn":"", "firstName":"apple macbook macbook 13in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNndXVmRjMktZNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWhiaENkQm1IcEk", "createdOn":"", "firstName":"apple macbook macbookpro 2.4 2.2GHz 15.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWhiaENkQm1IcEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTlRdnhacklodG8", "createdOn":"", "firstName":"apple macbook macbookpro core2duo 15.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTlRdnhacklodG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemZwWEhqUXFDbmM", "createdOn":"", "firstName":"apple macbook mb13 al late08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemZwWEhqUXFDbmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHEzczlxcFRrTXM", "createdOn":"", "firstName":"apple macbook mb13 early09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHEzczlxcFRrTXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGpabXc1VTQySzQ", "createdOn":"", "firstName":"apple macbook mb13 late07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGpabXc1VTQySzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDhqaUpTa0U5amc", "createdOn":"", "firstName":"apple macbook mb15 late08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDhqaUpTa0U5amc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTQ4REk4UWZEOU0", "createdOn":"", "firstName":"apple macbook mb13 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTQ4REk4UWZEOU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSUo4TDUtclo1TzQ", "createdOn":"", "firstName":"apple macbook mbp 15early2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSUo4TDUtclo1TzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiby1DRDFfUGNPUjQ", "createdOn":"", "firstName":"apple macbook mbp13 mid09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiby1DRDFfUGNPUjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienZuY3hQal9SNXc", "createdOn":"", "firstName":"apple macbook mbp15 5F253 mid09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienZuY3hQal9SNXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRpbEJmQWhxZnc", "createdOn":"", "firstName":"apple macbook mbp15 mid09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRpbEJmQWhxZnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1FhTkY4c3FQcGc", "createdOn":"", "firstName":"apple macbook mbp15 mid2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1FhTkY4c3FQcGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUhzU2t1QjBXUTg", "createdOn":"", "firstName":"apple macbook mbp17 early09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUhzU2t1QjBXUTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGl4Tkp1TlhuaUk", "createdOn":"", "firstName":"apple macbook mbp17 mid10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGl4Tkp1TlhuaUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTIwRDg3UnI5dGs", "createdOn":"", "firstName":"apple legacy classic ii.performa 200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTIwRDg3UnI5dGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEYtbEc5Um83V1E", "createdOn":"", "firstName":"apple legacy color classic ii.perf 275.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEYtbEc5Um83V1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianlJN0RyWlFmaXM", "createdOn":"", "firstName":"apple legacy color classic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianlJN0RyWlFmaXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUI0RzRFQ1ZhNzA", "createdOn":"", "firstName":"apple legacy lc 520.550.575.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUI0RzRFQ1ZhNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiME04UFVrc2FmeHM", "createdOn":"", "firstName":"apple legacy lc 580.performa 580cd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiME04UFVrc2FmeHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDVjZDh1cGlyOUk", "createdOn":"", "firstName":"apple legacy macintosh 128k.512k.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDVjZDh1cGlyOUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGFkTjVTRGV6U0k", "createdOn":"", "firstName":"apple legacy macintosh ii.iix.iifx.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGFkTjVTRGV6U0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU1rTWt1QlNmd28", "createdOn":"", "firstName":"apple legacy macintosh iisi.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU1rTWt1QlNmd28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVlCWjJWaEtYeTQ", "createdOn":"", "firstName":"apple legacy macintosh iivx.vi.perf 600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVlCWjJWaEtYeTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFRUUHltMlhwUUU", "createdOn":"", "firstName":"apple legacy macintosh plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFRUUHltMlhwUUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN21aUDlJRm1RYmc", "createdOn":"", "firstName":"apple legacy network server 500.700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN21aUDlJRm1RYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia1ZnSllPOXowUUE", "createdOn":"", "firstName":"apple legacy macintosh portable.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia1ZnSllPOXowUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHoteWNybG11VXM", "createdOn":"", "firstName":"apple legacy macintosh se.30.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHoteWNybG11VXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUpfRGhvWmphTG8", "createdOn":"", "firstName":"apple legacy macintosh se.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUpfRGhvWmphTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUFxYUFwNkY1ME0", "createdOn":"", "firstName":"apple legacy macintosh tv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUFxYUFwNkY1ME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTE5Z1Iybk5JWVU", "createdOn":"", "firstName":"apple legacy performa 500 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTE5Z1Iybk5JWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSllPMmdOZGd3TW8", "createdOn":"", "firstName":"apple legacy performa 5F400 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSllPMmdOZGd3TW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHJCMk9HWENva2s", "createdOn":"", "firstName":"apple legacy performa 6100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHJCMk9HWENva2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRHpITGUyXzR3OVE", "createdOn":"", "firstName":"apple legacy performa 6200.6300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRHpITGUyXzR3OVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkgwNm9oUjZ3WW8", "createdOn":"", "firstName":"apple legacy performa 630 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkgwNm9oUjZ3WW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWs4OE5qNmFwMG8", "createdOn":"", "firstName":"apple legacy powermac.perf 5200.5300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWs4OE5qNmFwMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0dLMlJHYVdhMEk", "createdOn":"", "firstName":"apple legacy pm7300.7500.7600.ws7350.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0dLMlJHYVdhMEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibG9URFF1WG1qZTQ", "createdOn":"", "firstName":"apple legacy pm8600.9600.ws9650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibG9URFF1WG1qZTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTRRVmI2NnpSTm8", "createdOn":"", "firstName":"apple legacy powermac.perf 5400.5500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTRRVmI2NnpSTm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTjVrY3N0U0U0ZGc", "createdOn":"", "firstName":"apple legacy powermac.perf 5260.5280.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTjVrY3N0U0U0ZGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGduMG1od2ZZU1k", "createdOn":"", "firstName":"apple legacy powermac.perf 6400.6500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGduMG1od2ZZU1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlhyNnlNY3J4WWs", "createdOn":"", "firstName":"apple legacy powermac 4400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlhyNnlNY3J4WWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjN5R2lRcFdrRkU", "createdOn":"", "firstName":"apple legacy powermac 6100 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjN5R2lRcFdrRkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFBQcjE4VkNlU3c", "createdOn":"", "firstName":"apple legacy powermac 7100 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFBQcjE4VkNlU3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3FhMVZuNF9idGM", "createdOn":"", "firstName":"apple legacy powermac 7200 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3FhMVZuNF9idGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTlodE5fT2FNdWs", "createdOn":"", "firstName":"apple legacy powermac 8500 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTlodE5fT2FNdWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXNXeUJrVnNmTkk", "createdOn":"", "firstName":"apple legacy powermac 8100.ws 8150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXNXeUJrVnNmTkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWM3NDk0dTRFcXc", "createdOn":"", "firstName":"apple legacy powermac 9500 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWM3NDk0dTRFcXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmRBaFBXcmlRVDQ", "createdOn":"", "firstName":"apple legacy twentieth anniversary mac.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmRBaFBXcmlRVDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzZhN0ZIZnVvQ0U", "createdOn":"", "firstName":"apple legacy quadra.centris 610.ws 60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzZhN0ZIZnVvQ0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFhQSm52VEp5X1k", "createdOn":"", "firstName":"apple legacy quadra.centris 650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFhQSm52VEp5X1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiem9yWlhmTjJqVDg", "createdOn":"", "firstName":"apple legacy quadra.centris 660av.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiem9yWlhmTjJqVDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmtPVlpEOUpVUjg", "createdOn":"", "firstName":"apple legacy quadra.lc 630.performa 640.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmtPVlpEOUpVUjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2VNMnZaSDI4QkE", "createdOn":"", "firstName":"apple legacy quadra 605.lc series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2VNMnZaSDI4QkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnh1anZrM010akk", "createdOn":"", "firstName":"apple legacy quadra 700.mac iicx.iici.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnh1anZrM010akk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1FkeVV1N1NiS2M", "createdOn":"", "firstName":"apple legacy quadra 800.ws 80.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1FkeVV1N1NiS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnoxMFNieUpjNDQ", "createdOn":"", "firstName":"apple legacy quadra 840av.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnoxMFNieUpjNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlZkUm5SY3lGeE0", "createdOn":"", "firstName":"apple legacy quadra 900.950.ws 95.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlZkUm5SY3lGeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieU15U3VSbTRyUkk", "createdOn":"", "firstName":"apple legacy workgroup server 9150.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieU15U3VSbTRyUkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFIybDdzSUhVblE", "createdOn":"", "firstName":"apple imac imac.17 inch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFIybDdzSUhVblE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiby1ZUnRTYzVNaWM", "createdOn":"", "firstName":"apple ipad ipad w 3g.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiby1ZUnRTYzVNaWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3RYQW94LVBxN00", "createdOn":"", "firstName":"apple imac imacg5 17in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3RYQW94LVBxN00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUxLN1hQbVpWcEE", "createdOn":"", "firstName":"apple imac imac.flatpanel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUxLN1hQbVpWcEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHU0N1V0dXFoUWc", "createdOn":"", "firstName":"apple imac imac.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHU0N1V0dXFoUWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUJIaHNoNHNPY1k", "createdOn":"", "firstName":"apple imac imacdv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUJIaHNoNHNPY1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaV9veXBOdkJDZlE", "createdOn":"", "firstName":"apple imac imacg5 17 ALS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaV9veXBOdkJDZlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWI3d2hxTWFNMmc", "createdOn":"", "firstName":"apple imac imacg5 17 isight.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWI3d2hxTWFNMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaW5xZEFKRUYxc1k", "createdOn":"", "firstName":"apple imac imacg5 20in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaW5xZEFKRUYxc1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjNpbGZ0eld0ckk", "createdOn":"", "firstName":"apple imac imacg5 20 ALS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjNpbGZ0eld0ckk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTl5RUpiOG1JU0U", "createdOn":"", "firstName":"apple imac imacg5 20 isight.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTl5RUpiOG1JU0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidURKVWl6ajNnR3c", "createdOn":"", "firstName":"apple imac imac 17 late 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidURKVWl6ajNnR3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmtMZmxXUUZkdE0", "createdOn":"", "firstName":"apple imac imac 17in 1ghz.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmtMZmxXUUZkdE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianpob1VMNi1DTFU", "createdOn":"", "firstName":"apple imac imac 20 early 08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianpob1VMNi1DTFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHBKajBYeERBMnM", "createdOn":"", "firstName":"apple 5f874 iPhone 5 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHBKajBYeERBMnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZERoYmZRVzN6cTQ", "createdOn":"", "firstName":"apple imac imac 17 mid latecd 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZERoYmZRVzN6cTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUJMVEpLSjZEM00", "createdOn":"", "firstName":"apple imac iMac 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUJMVEpLSjZEM00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1ViajF1UG1QM0E", "createdOn":"", "firstName":"apple imac imac 20 mid2007.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1ViajF1UG1QM0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWNWZUJYQ1BlUVk", "createdOn":"", "firstName":"apple imac imac 20 early mid 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWNWZUJYQ1BlUVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0c0UWxycTFDNU0", "createdOn":"", "firstName":"apple imac imac 20 late 06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0c0UWxycTFDNU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXJnU2EtbTRtQ0E", "createdOn":"", "firstName":"apple imac imac 21 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXJnU2EtbTRtQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGFON1BIWmMzcmM", "createdOn":"", "firstName":"apple imac imac 21 mid10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGFON1BIWmMzcmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0dadllpZmNURk0", "createdOn":"", "firstName":"apple imac imac 24 early 08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0dadllpZmNURk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2s4dlJ4Uk9saEk", "createdOn":"", "firstName":"apple imac imac 24in.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2s4dlJ4Uk9saEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibER2QXVhX2QtbXM", "createdOn":"", "firstName":"apple imac imac 24 early 09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibER2QXVhX2QtbXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYk1mSWtGSXltZzA", "createdOn":"", "firstName":"apple imac imac 24 mid2007.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYk1mSWtGSXltZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZldPU1JVam9UdGM", "createdOn":"", "firstName":"apple imac imac 27 mid10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZldPU1JVam9UdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEE1T3RIUG95STQ", "createdOn":"", "firstName":"apple imac imac 27 late09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEE1T3RIUG95STQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk5XUDhGb0FXSFE", "createdOn":"", "firstName":"apple imac imac early 2006 17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk5XUDhGb0FXSFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMTBQRGVaek9VTW8", "createdOn":"", "firstName":"apple imac imac early2001.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMTBQRGVaek9VTW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblV0ckRxUGdZbmM", "createdOn":"", "firstName":"apple imac imac sl.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblV0ckRxUGdZbmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlVmanp3bWdrbXM", "createdOn":"", "firstName":"apple imac iMac Early 2006 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlVmanp3bWdrbXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGpTbXd4TFYxVWc", "createdOn":"", "firstName":"apple imac imac summer01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGpTbXd4TFYxVWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDgwYzBYaExYNFk", "createdOn":"", "firstName":"apple imac imac usb2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDgwYzBYaExYNFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEwxZzh2Mkp6WGc", "createdOn":"", "firstName":"apple ibook ib14 1632v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEwxZzh2Mkp6WGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS29IS1kzMV9rNk0", "createdOn":"", "firstName":"apple ibook ibg4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS29IS1kzMV9rNk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0QwZ0l0MUowR1U", "createdOn":"", "firstName":"apple ibook ibg4 12 mid05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0QwZ0l0MUowR1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2x6Ml9xTnFVVXc", "createdOn":"", "firstName":"apple ibook ibg4 12 late04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2x6Ml9xTnFVVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUdUcTA1SWhNQkU", "createdOn":"", "firstName":"apple ibook ibg4 14.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUdUcTA1SWhNQkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSG5tVnF5ZWk1RTg", "createdOn":"", "firstName":"apple ibook ibg4 14 mid05.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSG5tVnF5ZWk1RTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXN6MFRmSGtmc3c", "createdOn":"", "firstName":"apple ibook ibg4 14 late04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXN6MFRmSGtmc3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUk2a1pnanI1cUU", "createdOn":"", "firstName":"apple ibook ibk01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUk2a1pnanI1cUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialNZQjZJNXhob00", "createdOn":"", "firstName":"apple ibook ibk 16v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialNZQjZJNXhob00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczg3QnlPX3NIMUU", "createdOn":"", "firstName":"apple ibook ibk14.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczg3QnlPX3NIMUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMUhmSTRidjhNcnc", "createdOn":"", "firstName":"apple ibook ibk dusb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMUhmSTRidjhNcnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDlxMVl6UXozQ1k", "createdOn":"", "firstName":"apple ibook ibop1632v.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDlxMVl6UXozQ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzF3a1g1Y01vbk0", "createdOn":"", "firstName":"apple ibook ibk ibkfw.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzF3a1g1Y01vbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczlfR3ZFdHQ1NE0", "createdOn":"", "firstName":"apple emac eMac ati usb2 2005.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczlfR3ZFdHQ1NE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUZRaXc0UUtYTDQ", "createdOn":"", "firstName":"apple emac eMac.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUZRaXc0UUtYTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0FEdFhMSTYyTmM", "createdOn":"", "firstName":"apple displays 12 monochrome display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0FEdFhMSTYyTmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidlFmV0dmQmJJRDA", "createdOn":"", "firstName":"apple displays 12 rgb display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidlFmV0dmQmJJRDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHVDUnNpeVJ0X28", "createdOn":"", "firstName":"apple displays 16 color display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHVDUnNpeVJ0X28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVklBOWZqM1g1TG8", "createdOn":"", "firstName":"apple displays 21 color display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVklBOWZqM1g1TG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlhoTmRVQmFiV0E", "createdOn":"", "firstName":"apple displays vision 1710av display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlhoTmRVQmFiV0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHo3ZGlBdlh5Vmc", "createdOn":"", "firstName":"apple displays color highres rgb mon.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHo3ZGlBdlh5Vmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV0hqZFRjMmdOaVE", "createdOn":"", "firstName":"apple displays  studio display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV0hqZFRjMmdOaVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUhsLUM5dHVoOFE", "createdOn":"", "firstName":"apple displays audiovision 14 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUhsLUM5dHVoOFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMXR4QWgyMVJfQ2c", "createdOn":"", "firstName":"apple displays cinema display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMXR4QWgyMVJfQ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkVuM21QcnpqVE0", "createdOn":"", "firstName":"apple displays basic color monitor.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkVuM21QcnpqVE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjdwSVJGVDJxeUE", "createdOn":"", "firstName":"apple displays cinema display 20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjdwSVJGVDJxeUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1lzYkpUQ3dGajg", "createdOn":"", "firstName":"apple displays cinema display 22.dvi.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1lzYkpUQ3dGajg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0ZYeldXUkpBVms", "createdOn":"", "firstName":"apple displays colorsync 17 displays.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0ZYeldXUkpBVms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQk9rWFlBNDloSjQ", "createdOn":"", "firstName":"apple displays cinema display 22 lcd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQk9rWFlBNDloSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1NNYVBKaUFGWWM", "createdOn":"", "firstName":"apple displays cinema hd display 23.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1NNYVBKaUFGWWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmlkdWRlT2N1ZXM", "createdOn":"", "firstName":"apple displays colorsync 20 displays.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmlkdWRlT2N1ZXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHpiMVg3VFBOWW8", "createdOn":"", "firstName":"apple displays led cinema display 24.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHpiMVg3VFBOWW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFZBaFpvYk1INzg", "createdOn":"", "firstName":"apple displays color plus 14 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFZBaFpvYk1INzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUnRwZWduLXlXSmc", "createdOn":"", "firstName":"apple displays highres monochrome monitor.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUnRwZWduLXlXSmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickJ2M01NeEJmS3c", "createdOn":"", "firstName":"apple displays multiple scan 15av display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickJ2M01NeEJmS3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTIzOTVFUVJiQkE", "createdOn":"", "firstName":"apple displays macintosh color display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTIzOTVFUVJiQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOE42anJjUXVNWGs", "createdOn":"", "firstName":"apple displays multiple scan 14 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOE42anJjUXVNWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVG5KTUdLc2ZNeEU", "createdOn":"", "firstName":"apple displays multiple scan 1705 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVG5KTUdLc2ZNeEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVBNSTFuNUd3cU0", "createdOn":"", "firstName":"apple displays multiple scan 15 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVBNSTFuNUd3cU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1V6UGYwdFpURTQ", "createdOn":"", "firstName":"apple displays multiple scan 17 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1V6UGYwdFpURTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDEteXhWTHJWems", "createdOn":"", "firstName":"apple displays multiple scan 20 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDEteXhWTHJWems/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFdzQ3Bvc3o1elU", "createdOn":"", "firstName":"apple displays multiple scan 720 display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFdzQ3Bvc3o1elU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLTh1YWhMbmhlSUU", "createdOn":"", "firstName":"apple displays portrait display.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLTh1YWhMbmhlSUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1FmaU41U2Vqcmc", "createdOn":"", "firstName":"apple displays performa display.plus.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1FmaU41U2Vqcmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkRxcWhBZTQ1SzA", "createdOn":"", "firstName":"apple displays studio17adc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkRxcWhBZTQ1SzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2RiZnpnaVRJZjA", "createdOn":"", "firstName":"apple displays sd17adc adj guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2RiZnpnaVRJZjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid2lzdmx3WGRrUlU", "createdOn":"", "firstName":"apple displays studio.15dvi.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid2lzdmx3WGRrUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0pzRExzRGdqbWc", "createdOn":"", "firstName":"apple displays studio17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0pzRExzRGdqbWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0VrbEE2ODU3SUE", "createdOn":"", "firstName":"apple displays studio display 21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0VrbEE2ODU3SUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3AzeHB5RDJTNHM", "createdOn":"", "firstName":"apple displays studio display 15 adc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3AzeHB5RDJTNHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1M2Q2UzMGtKRm8", "createdOn":"", "firstName":"apple displays studio display 17 lcd.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1M2Q2UzMGtKRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWpqUnJNbXRPelk", "createdOn":"", "firstName":"apple displays twopage monochrome monitor.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWpqUnJNbXRPelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieS1QZGlKOU9GcDQ", "createdOn":"", "firstName":"apple iMac 20 M60 EVT MLB 051 7124 Rev13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieS1QZGlKOU9GcDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibld2UGhaemoxSEU", "createdOn":"", "firstName":"apple iMAC A1195 M50 DVT VALLCO 051 7032.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibld2UGhaemoxSEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXVXYUc2MWxJQm8", "createdOn":"", "firstName":"apple iMac A1207 M60 PVT MLB 051 7124 RevH.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXVXYUc2MWxJQm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkoyUVRPZUlxR2c", "createdOn":"", "firstName":"apple iMac G4 800  Q59 MLB DVT 051 6497 Rev13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkoyUVRPZUlxR2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWtDSnA3bWI2QXM", "createdOn":"", "firstName":"apple iMac G4 Q26C DVT MLB GEN X 051 6490 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWtDSnA3bWI2QXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWdRUlRkUmFRZjA", "createdOn":"", "firstName":"apple iMAC G5 A1058 SEEDY MLB 051 6772 Rev04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWdRUlRkUmFRZjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHplT1BNNWM3LUU", "createdOn":"", "firstName":"apple iMAC G5 A1058 SEEDY MLB 051 6772 Rev11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHplT1BNNWM3LUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNFVuUjNDSU0tLUU", "createdOn":"", "firstName":"apple iMAC G5 iSight FINO M23 DVT2 MLB 051 6790 Rev19.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNFVuUjNDSU0tLUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFdJM2ZFWXcxRXc", "createdOn":"", "firstName":"apple iMAC G5 iSight FINO M33 MLB 051 6863 Rev07.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFdJM2ZFWXcxRXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRm5fYjBKYVNCQzQ", "createdOn":"", "firstName":"apple iMAC G5 iSight IMG5 17 MLB 051 6790 RevE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRm5fYjBKYVNCQzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkN6QXNsVk96SWM", "createdOn":"", "firstName":"apple iMac G5 iSight M38 DVT 051 6949 16.11.2005 Rev09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkN6QXNsVk96SWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidE5LY0hpdzRrZEk", "createdOn":"", "firstName":"apple iMac G5 iSight M38 DVT 051 6949 08.12.2005 Rev09.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidE5LY0hpdzRrZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRF80M3ZROEdwQW8", "createdOn":"", "firstName":"apple iMAC G5 iSight M39 DVT 051 6950  07.12.2005 Rev06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRF80M3ZROEdwQW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXBuQTM4akoyQ0k", "createdOn":"", "firstName":"apple iMAC G5 iSight M39 DVT 051 6950 16.11.2005 Rev06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXBuQTM4akoyQ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEpZN19FQUZmMEU", "createdOn":"", "firstName":"apple iMAC G5 FINO M23 PROTO2 MLB 051 6790 Rev08.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEpZN19FQUZmMEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTRTZ3FweDBIdUU", "createdOn":"", "firstName":"apple iMac G5 GILLA EVT1 MLB 051 6482 Rev13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTRTZ3FweDBIdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjh0dmxxZ1E2UXM", "createdOn":"", "firstName":"apple iMAC G5 IMG5 20 MLB 051 6863 RevF.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjh0dmxxZ1E2UXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGpocjlOUmJnYjA", "createdOn":"", "firstName":"apple iMAC G5 MLB IMG5 051 6482 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGpocjlOUmJnYjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjNPVzVneUZITmM", "createdOn":"", "firstName":"apple IPAD1 VICE MLB PVT 051 8245 RevB00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjNPVzVneUZITmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTFvZFMteGlqczA", "createdOn":"", "firstName":"apple Macbook A1181 K36A MLB 051 7559 RevH.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTFvZFMteGlqczA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHhYRzFZZG5JVlU", "createdOn":"", "firstName":"apple IPAD2 K94 CHOPIN MLB PVT 051 8962 RevA00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHhYRzFZZG5JVlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDV1SjBjNzgxUmM", "createdOn":"", "firstName":"apple Macbook A1181 K36C MLB 051 8089 Rev02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDV1SjBjNzgxUmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDYySmNOV2VQSzQ", "createdOn":"", "firstName":"apple Macbook Air A1304 M96 MLB EVT 051 7631 Rev2.3.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDYySmNOV2VQSzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV01TeElrV0RaQ0E", "createdOn":"", "firstName":"apple Macbook A1181 M42B MLB NO LDO 051 7374  RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV01TeElrV0RaQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmVBNE8tWmVSQjQ", "createdOn":"", "firstName":"apple Macbook Air A1369 K16 MLB 051 8467 Rev3.3.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmVBNE8tWmVSQjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmRxdk1JQnZQTDA", "createdOn":"", "firstName":"apple Macbook Air A1370 MLB DVT K99 051 8379 Rev4.4.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmRxdk1JQnZQTDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzh3YkJVblFCWms", "createdOn":"", "firstName":"apple Macbook FA255 M42C MLB MACBOOK 051 7173 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzh3YkJVblFCWms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMTNVYmFxRTVIeGs", "createdOn":"", "firstName":"apple MacBook Pro A1150 MLB M1 051 7099 RevD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMTNVYmFxRTVIeGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0o0SXZoRU1CYWM", "createdOn":"", "firstName":"apple Macbook Pro A1150 Mullet M1 MLB 051 6941 Rev07001.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0o0SXZoRU1CYWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1FxV1ZKLWxlUHM", "createdOn":"", "firstName":"apple Macbook Pro A1150 Mullet M1 MLB Pansy 051 6941 Rev03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1FxV1ZKLWxlUHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0lWck1tYzdDT2c", "createdOn":"", "firstName":"apple Macbook Pro A1151 Sully M9 MLB DVT  051 7023 Rev06.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0lWck1tYzdDT2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNNeW5SSWJiSGs", "createdOn":"", "firstName":"apple Macbook Pro A1181 K36 MLB DVT 051 7455 Rev01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNNeW5SSWJiSGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialBkQ3F1WDVqWnc", "createdOn":"", "firstName":"apple Macbook Pro A1151 SYMPHONY M9 EVT NEW 051 7066 Rev02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialBkQ3F1WDVqWnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHdTdHlaUHM2LVE", "createdOn":"", "firstName":"apple Macbook Pro A1229 MANTARO DVT M76 051 7261 Rev16.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHdTdHlaUHM2LVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWZVdHpuNFItN2s", "createdOn":"", "firstName":"apple Macbook Pro A1226 OROYA DVT M75 051 7225 Rev14.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWZVdHpuNFItN2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWtvYjdjSnBvOHc", "createdOn":"", "firstName":"apple Macbook Pro A1229 MANTARO M76 051 7261 Rev10.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWtvYjdjSnBvOHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1NMZWxsSDVkc0k", "createdOn":"", "firstName":"apple Macbook Pro A1229 MBP17 MLB 051 7261 RevA.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1NMZWxsSDVkc0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUNUdjUwejZtUUk", "createdOn":"", "firstName":"apple Macbook Pro A1261 MBP17 MLB PVT 051 7431 RevA.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUNUdjUwejZtUUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXFoeG1Xc3Iycnc", "createdOn":"", "firstName":"apple Macbook Pro A1278 FLYING CLOUD MLB K90i EVT3 051 8658 RevD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXFoeG1Xc3Iycnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDc0bnQzVW1ILTA", "createdOn":"", "firstName":"apple Macbook Pro A1278 CORNHOLE K19 PVT MBP 15MLB 051 7892 RevA00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDc0bnQzVW1ILTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3FHOTFMb213a28", "createdOn":"", "firstName":"apple Macbook Pro A1278 K24 MLB 051 7898 RevC.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3FHOTFMb213a28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlJpZ243OUFKbm8", "createdOn":"", "firstName":"apple MacBook Pro A1297 CANNAREGIO K20 DVT1 051 7656 Rev31.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlJpZ243OUFKbm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTFkYXJTT2prZ1E", "createdOn":"", "firstName":"apple Macbook Unibody A1278 M97A MLB 051 7918 Rev.C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTFkYXJTT2prZ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclNXbm1jVTBUYm8", "createdOn":"", "firstName":"apple Macbook Unibody A1278 M97 MLB PVT T18 051 7537 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclNXbm1jVTBUYm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVU5zcFAxR2Nfdms", "createdOn":"", "firstName":"apple Macbook Unibody A1278 MLB LDO K6 PVT 051 8563 RevA.13.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVU5zcFAxR2Nfdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkxiLTdZNGlJVjQ", "createdOn":"", "firstName":"apple Macbook Unibody A1286 CORNHOLIO K19 K19i PVT 051 7903 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkxiLTdZNGlJVjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieC1lUnA4aEN1OFk", "createdOn":"", "firstName":"apple Macbook Unibody A1342 K84 MLB PROD OK2FAB 051 7982 RevC.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieC1lUnA4aEN1OFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXN5dXVRUE1weGM", "createdOn":"", "firstName":"apple Macbook Unibody A1342 K87 MLB LDO SCRATCHO 051 8561 RevC.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXN5dXVRUE1weGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidW9rVDkxNUloYXc", "createdOn":"", "firstName":"apple Powerbook G4 A1025 PBG4 MLB P88 051 6403 RevE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidW9rVDkxNUloYXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWRwbEpmOGx3NFk", "createdOn":"", "firstName":"apple Powerbook G4 A1107 SAPPHIRE Q41B 051 6694 Rev02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWRwbEpmOGx3NFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUJKNmxQNDJSQlk", "createdOn":"", "firstName":"apple  IM4.2 VALLCO 051 7032 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUJKNmxQNDJSQlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGVtbFQ0ZVc3QUk", "createdOn":"", "firstName":"apple  IM4.2 VALLCO 051 7032 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGVtbFQ0ZVc3QUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWJCVVY4RnlHS00", "createdOn":"", "firstName":"apple  IMAC 5.2 VALLCO 051 7199 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWJCVVY4RnlHS00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmdJTlRUWVNmcUE", "createdOn":"", "firstName":"apple  LINK Q51 EVT1 051 6532 Rev03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmdJTlRUWVNmcUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3ZtUWJpMjJzMWs", "createdOn":"", "firstName":"apple  IMAC 5.2 VALLCO 051 7199 RevD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3ZtUWJpMjJzMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUEybmxxS2lfT2c", "createdOn":"", "firstName":"apple  M38A DVT MLB 051 7148 Rev13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUEybmxxS2lfT2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3gtQVFfampaVmM", "createdOn":"", "firstName":"apple  M38A PVT MLB 051 7148 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3gtQVFfampaVmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0RBX3JNQ1NQTms", "createdOn":"", "firstName":"apple  M38A PVT MLB 051 7148 RevD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0RBX3JNQ1NQTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemFZd3dLWXlxSUU", "createdOn":"", "firstName":"apple  M60 PVT MLB 051 7124 RevD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemFZd3dLWXlxSUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1QxbUY2VXlmZEk", "createdOn":"", "firstName":"apple  M42C MLB GM CS PVT 051 7173 Rev0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1QxbUY2VXlmZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDhkZWNCMVZBWVU", "createdOn":"", "firstName":"apple  Q26B DVT MLB GEN X 051 6490 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDhkZWNCMVZBWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzBFT3J0dTl6SzQ", "createdOn":"", "firstName":"apple  Q59 MLB CONFIG A B C 051 6569 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzBFT3J0dTl6SzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0d6dTlLU3VvNTg", "createdOn":"", "firstName":"apple  SANTANA M51 MLB EVT 051 7039 Rev17.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0d6dTlLU3VvNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGl6YjE5Z0dmZjg", "createdOn":"", "firstName":"apple  SANTANA M51 MLB DVT 051 7039 Rev21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGl6YjE5Z0dmZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkRJSEVNY2R4UUU", "createdOn":"", "firstName":"apple  SANTANA M51 MLB DVT 051 7039 Rev21.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkRJSEVNY2R4UUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVlWRUFXLW5NQW8", "createdOn":"", "firstName":"apple  SANTANA M51 PVT 051 7039 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVlWRUFXLW5NQW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmlzN0RmMmNDNmM", "createdOn":"", "firstName":"asus 1002 Schematic Diagram 1.3G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmlzN0RmMmNDNmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1ljNGN4M01xWW8", "createdOn":"", "firstName":"asus 1005HA Schematic Diagram 1.1G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1ljNGN4M01xWW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVQtcXU1bEttUWM", "createdOn":"", "firstName":"asus 1003HA Schematic Diagram 1.3G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVQtcXU1bEttUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2lYZFpxcWdDZ3M", "createdOn":"", "firstName":"asus 1015P2 Schematic Diagram 1.0G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2lYZFpxcWdDZ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakRvdEt2SGxLNDQ", "createdOn":"", "firstName":"asus 1101HA Schematic diagram. rev 1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakRvdEt2SGxLNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkVBNUtHLUpia1k", "createdOn":"", "firstName":"asus 1201I N Rev 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkVBNUtHLUpia1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHRYd29ob1R0NXc", "createdOn":"", "firstName":"asus 701SDX MB. Schematic diagram. REV 1.1G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHRYd29ob1R0NXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRV9VNHRsZE9pclE", "createdOn":"", "firstName":"asus A3E Rev.2.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRV9VNHRsZE9pclE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWpqMm0xUXlaMVE", "createdOn":"", "firstName":"asus 900pv PINEVIEW. Schematic diagram. REV 1.0G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWpqMm0xUXlaMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHpFMGZlajI4cjg", "createdOn":"", "firstName":"asus A3E Rev.1.1 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHpFMGZlajI4cjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkdwLXdYMll2UVk", "createdOn":"", "firstName":"asus A3G Rev.1.2 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkdwLXdYMll2UVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGcyN0lPbXgxZE0", "createdOn":"", "firstName":"asus A3F Rev.2.0 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGcyN0lPbXgxZE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDg3WmF3Rmx4RmM", "createdOn":"", "firstName":"toshiba Compal LA3481P 965G KB926.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDg3WmF3Rmx4RmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVN0cnZWeHRWdms", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite X200 X205   COMPAL LA 3441P ISRAA   REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVN0cnZWeHRWdms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDQwaHI3ai1SQ1E", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite U400D   QUANTA BU2   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDQwaHI3ai1SQ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUJtekNoYUVBQWs", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite T210   COMPAL LA 6031P NDU00   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUJtekNoYUVBQWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY3pZVzl1TDdrYVk", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite Pro L450   COMPAL LA 5821P   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY3pZVzl1TDdrYVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzlkWWE5QUJHeHM", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite Pro L40   REV 1.1   II com erros.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzlkWWE5QUJHeHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjFXVDgyVTlvTHM", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite Pro L40   ASUS TERESA   REV 1.1.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjFXVDgyVTlvTHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGhvV2x5VTZVQVk", "createdOn":"", "firstName":"toshiba Toshiba Satellite P300 P305 Quanta BL5M Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGhvV2x5VTZVQVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3Q0Mlp5ZlFVaE0", "createdOn":"", "firstName":"toshiba Toshiba Satellite P25 S526 Compal LA 1841 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3Q0Mlp5ZlFVaE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEVlaUt1R19mRDQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite P100 P105 Quanta BD1 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEVlaUt1R19mRDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR3lWMTA1c0RfLVk", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite P200   COMPAL LA 3711P   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR3lWMTA1c0RfLVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVm84aEJlYTRsZ1U", "createdOn":"", "firstName":"toshiba Toshiba Satellite P10 Compal LA 2101 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVm84aEJlYTRsZ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWldiMG1PNTFFWW8", "createdOn":"", "firstName":"toshiba Toshiba Satellite M65 COMPAL LA 2741   REV 0.3Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWldiMG1PNTFFWW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibU9iVE9IYktzT1E", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite M300 TE1M RAMP2 FINAL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibU9iVE9IYktzT1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGJ0UEg2Z09XYXM", "createdOn":"", "firstName":"toshiba Toshiba Satellite M45 INVENTEC SAN ANTONIO 10 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGJ0UEg2Z09XYXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRENmR09tQVlmUnM", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite M211 M215   INVENTEC MIAMI 10G   REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRENmR09tQVlmUnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianRwR2JzcEdfczQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite M100 COMPAL LA 3141   REV 0.3Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianRwR2JzcEdfczQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHo1d015YlpwRHc", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite L450D   COMPAL LA 5831P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHo1d015YlpwRHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibURNVVp4d1l1Tlk", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite L310   QUANTA TE1M   REV E3D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibURNVVp4d1l1Tlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDJLVzdTalVIODg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300D   INVENTEC PS10A   6050A2174501   REV X01Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDJLVzdTalVIODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG5CaUZkeW9TbUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300 L305D   INVENTEC PS10AP   6050A2175001   REV X01 25FEV2008Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG5CaUZkeW9TbUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieER5eHFmT01BY2s", "createdOn":"", "firstName":"toshiba Toshiba Satellite L10 Quanta EW3 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieER5eHFmT01BY2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3ZjSWJSbjI0U1k", "createdOn":"", "firstName":"toshiba Toshiba Satellite A80 Compal LA 2811.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3ZjSWJSbjI0U1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWw5aHhsVHpndFU", "createdOn":"", "firstName":"toshiba toshiba satellite a665   compal la 6062p nwqaa   rev 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWw5aHhsVHpndFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTBFSDltaFZuLU0", "createdOn":"", "firstName":"toshiba toshiba satellite a500 l500 compal la 4971p kswae liverpool 10ar 10arg rev 0.3 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTBFSDltaFZuLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGJVcFNuOEFqZW8", "createdOn":"", "firstName":"toshiba Toshiba Satellite A300D   QUANTA BD3G   REV 2ASec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGJVcFNuOEFqZW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTi1EcEVud29aZUk", "createdOn":"", "firstName":"toshiba toshiba satellite a300   inventec potomac 10s pt10s   6050a2169401 mb a02   rev x01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTi1EcEVud29aZUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDBhRjMtRGlHaG8", "createdOn":"", "firstName":"toshiba Toshiba Satellite A210 A215   COMPAL LA 3631P IALAA   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDBhRjMtRGlHaG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1VibFpZZVBoWFU", "createdOn":"", "firstName":"toshiba Toshiba Satellite A215.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1VibFpZZVBoWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2xqa0FnYnVuaGs", "createdOn":"", "firstName":"toshiba Toshiba Satellite A200 INVENTEC MILWAUKEE 10 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2xqa0FnYnVuaGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDBrNzVOSFh0RWs", "createdOn":"", "firstName":"toshiba Toshiba Satellite A135 S2686 Compal LA 3391P Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDBrNzVOSFh0RWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEdhRElVenRWdTA", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A135 S2686   COMPAL LA 3391P IAYAA   REV 0.3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEdhRElVenRWdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2RtelhGUkNCZVk", "createdOn":"", "firstName":"toshiba Toshiba Satellite A110 Compal LA 3171P Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2RtelhGUkNCZVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFlDTHpLamRiT2s", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A100   INVENTEC SAN ANTONIO 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFlDTHpLamRiT2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTJKcjBaQlE3anc", "createdOn":"", "firstName":"toshiba Toshiba Satellite 1130 1135 Compal LA 1641 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTJKcjBaQlE3anc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1IxQ3ZPaEIwbEU", "createdOn":"", "firstName":"toshiba Toshiba Satellite 1100 Compal LA 1421 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1IxQ3ZPaEIwbEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1lMV2JYVEtDUzA", "createdOn":"", "firstName":"toshiba Toshiba Portege M600 M610   QUANTA BU1   REV 1C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1lMV2JYVEtDUzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkNyMk9qX2RDOEk", "createdOn":"", "firstName":"toshiba Toshiba NB200 NB205 Compal LA 5121 Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkNyMk9qX2RDOEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVh3VFJSZVpKYWM", "createdOn":"", "firstName":"toshiba TOSHIBA M100   COMPAL LA 3011.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVh3VFJSZVpKYWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFdVdUlyQkVsZ3M", "createdOn":"", "firstName":"toshiba TOSHIBA L500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFdVdUlyQkVsZ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHFWOVdIMEtBZ3M", "createdOn":"", "firstName":"toshiba Toshiba+L750+Quanta+BLBD+Schematic+Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHFWOVdIMEtBZ3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTlfOWtOLUhIR0k", "createdOn":"", "firstName":"toshiba Toshiba L300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTlfOWtOLUhIR0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGMyRWJDWlFfWTQ", "createdOn":"", "firstName":"toshiba Toshiba U305 M600 BU1 QD BU1 MB REV 3A 0401.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGMyRWJDWlFfWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1M0LW5rZmlobUE", "createdOn":"", "firstName":"toshiba Toshiba Schemetic Satellite L30 (QUANTA BL1).PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1M0LW5rZmlobUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXQ2TkJvQlFhX2s", "createdOn":"", "firstName":"toshiba TOSHIBA u305 BU1 QD BU1 MB REV 3A 0401.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXQ2TkJvQlFhX2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFhWTWZIdkpwQm8", "createdOn":"", "firstName":"toshiba Toshiba Schematic Satellite A300 14S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFhWTWZIdkpwQm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2FXRzNrX3hwZE0", "createdOn":"", "firstName":"toshiba Toshiba Schematic Satellite A135.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2FXRzNrX3hwZE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjJfOHRnUnVTeTA", "createdOn":"", "firstName":"toshiba Toshiba Schematic A200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjJfOHRnUnVTeTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlFxU1dxZzZxbEU", "createdOn":"", "firstName":"toshiba Toshiba Satellite U400D (Quanta BU2) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlFxU1dxZzZxbEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX1JQMC1kRHg1a1U", "createdOn":"", "firstName":"toshiba Toshiba Satellite T110 (Quanta BU3) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX1JQMC1kRHg1a1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0tleDl2NU9ERnc", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L450 (Compal LA 5821P) Laptop Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0tleDl2NU9ERnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXJSYkJvM21SU2s", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite Pro L450 L455 COMPAL LA 5821P REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXJSYkJvM21SU2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFg2Nmx4dkpseDQ", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L40 laptop schematics.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFg2Nmx4dkpseDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWE1YSHNnOHBZcTA", "createdOn":"", "firstName":"toshiba Toshiba Satellite Pro L300 INVENTEC PS10AP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWE1YSHNnOHBZcTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkNMRzd4S2cybGc", "createdOn":"", "firstName":"toshiba Toshiba Satellite P100 P105 (Quanta BD1) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkNMRzd4S2cybGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNllKaG5BejJZWlE", "createdOn":"", "firstName":"toshiba Toshiba Satellite L600D Toshiba Satellite P205D Series P205D S7436 P205D S7438 Q.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNllKaG5BejJZWlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1FWUG5yVGZsdVU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L450D (Compal LA 5831P) Laptop Sematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1FWUG5yVGZsdVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOVN0UGhQQ2pkRFE", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500 (INVENTEC PERUGIA 10M) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOVN0UGhQQ2pkRFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclBiSm1rVUk3Q0k", "createdOn":"", "firstName":"toshiba Toshiba Satellite L310 (TE1M).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclBiSm1rVUk3Q0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEQ0dXUtYUNuaTg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300D (INVENTEC PS10A 6050A2174501) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEQ0dXUtYUNuaTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSUZWTy1qYnp1ejg", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300 L305D (INVENTEC PS10AP 6050A2175001) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSUZWTy1qYnp1ejg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWt0SnNuQTlXVm8", "createdOn":"", "firstName":"toshiba Toshiba Satellite L300 L305D INVENTEC PS10AP 6050A2175001 REV X01 25FEV2008Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWt0SnNuQTlXVm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicV9YME5TUzdUZ2c", "createdOn":"", "firstName":"toshiba Toshiba Satellite L200 Inventec Miami 10 Laptop schematics diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicV9YME5TUzdUZ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjhSYzJfdjFXYUU", "createdOn":"", "firstName":"toshiba Toshiba Satellite L10 (Quanta EW3) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjhSYzJfdjFXYUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjZVdy1IWDR1YjQ", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A300 QUANTA BL5S SANTA ROSA REV 1A SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjZVdy1IWDR1YjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVUycmxqSTQyT28", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite A210 A215 COMPAL LA 3631P IALAA REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVUycmxqSTQyT28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDFrUEFNSDh0TzQ", "createdOn":"", "firstName":"toshiba Toshiba Portege M600 M610 (Quanta BU1)REV 1C laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDFrUEFNSDh0TzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1BtbnFTY1NBSFU", "createdOn":"", "firstName":"toshiba Toshiba L750 Quanta BLBD Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1BtbnFTY1NBSFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0VBVnVzM2FYbTA", "createdOn":"", "firstName":"toshiba TOSHIBA L700 TE5D INTEL DISCRETE 11 0105 V1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0VBVnVzM2FYbTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlNTWThuaHpaWGM", "createdOn":"", "firstName":"toshiba Toshiba C650d c600 l630.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlNTWThuaHpaWGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFZMVWJyUERwajg", "createdOn":"", "firstName":"toshiba Toshiba A135 la 3391p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFZMVWJyUERwajg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFBMNW0zNkR2Yzg", "createdOn":"", "firstName":"toshiba TOSHIBA A135 (la 3391p).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFBMNW0zNkR2Yzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmJ2ckhTeXVjcUk", "createdOn":"", "firstName":"toshiba TE5 TOSHIBA SATELLITE L700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmJ2ckhTeXVjcUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEtoa2Fidjh6djA", "createdOn":"", "firstName":"toshiba SATELLITE L300 L305 INVENTEC PS10S (6050A2170401 MB A03).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEtoa2Fidjh6djA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic21UUzZDTXpoa3M", "createdOn":"", "firstName":"toshiba Satellite L500 L510 L531.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic21UUzZDTXpoa3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHlUb2FqTmoyY2M", "createdOn":"", "firstName":"toshiba SANWA CX506A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHlUb2FqTmoyY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWJPaHZJLTZBUzQ", "createdOn":"", "firstName":"toshiba SANWA CX506A(2).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWJPaHZJLTZBUzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHg1SktJUXlnT0k", "createdOn":"", "firstName":"toshiba M600 LA 6072.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHg1SktJUXlnT0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUVQUUQ2Wm5FMW8", "createdOn":"", "firstName":"toshiba M600 BU1 QD BU1 MB REV 3A 0401.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUVQUUQ2Wm5FMW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVlidkZwZVBSOEE", "createdOn":"", "firstName":"toshiba L645 L650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVlidkZwZVBSOEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVVMblktLW80alU", "createdOn":"", "firstName":"toshiba L600D TE3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVVMblktLW80alU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWYwMlVhVU1nRFk", "createdOn":"", "firstName":"toshiba L510 PM45 ATI DDR3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWYwMlVhVU1nRFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3l6azZPZG5fWTQ", "createdOn":"", "firstName":"toshiba Compal LA 6352P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3l6azZPZG5fWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3NNbEIwNHJpSTg", "createdOn":"", "firstName":"toshiba COMPAL LA 3481P   ISKAA   REV .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3NNbEIwNHJpSTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWJzNUxfVEMtSW8", "createdOn":"", "firstName":"toshiba Compal ISRAE LA 3711P.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWJzNUxfVEMtSW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmxLS2FPbzVSWG8", "createdOn":"", "firstName":"toshiba COMPAL LA 4982P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmxLS2FPbzVSWG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiand2MG5Ma2NWYU0", "createdOn":"", "firstName":"toshiba CD731a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiand2MG5Ma2NWYU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRzluTlgyQ1JiUlk", "createdOn":"", "firstName":"dell X300 blade intel uma 0101.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRzluTlgyQ1JiUlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWhDdG5YV2JzRGs", "createdOn":"", "firstName":"dell VOSTRO V13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWhDdG5YV2JzRGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibl9WeHp6WE9LRHM", "createdOn":"", "firstName":"dell VOSTRO 3700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibl9WeHp6WE9LRHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3prX3FTU0xkLU0", "createdOn":"", "firstName":"dell VOSTRO 3450.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3prX3FTU0xkLU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEM3b1pkVmJLcDg", "createdOn":"", "firstName":"dell Vostro 1310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEM3b1pkVmJLcDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmZqQ0drOXI2d3c", "createdOn":"", "firstName":"dell VOSTRO 1720.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmZqQ0drOXI2d3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHVLYUo1MVFQVjQ", "createdOn":"", "firstName":"dell VOSTRO 1720.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHVLYUo1MVFQVjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFlXbjdGUGRkLUk", "createdOn":"", "firstName":"dell VOSTRO 1220.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFlXbjdGUGRkLUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUE5QLXpma1ctVHc", "createdOn":"", "firstName":"dell VOSTRO 1014 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUE5QLXpma1ctVHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzQ1Vy00Y0U0QjA", "createdOn":"", "firstName":"dell VOSTRO 1088.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzQ1Vy00Y0U0QjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXktTzlZVWJxSEE", "createdOn":"", "firstName":"dell VOSTRO+3450.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXktTzlZVWJxSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTdJVlU3WjNuYmM", "createdOn":"", "firstName":"dell VM9M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTdJVlU3WjNuYmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTNPNGZSUlRKTUU", "createdOn":"", "firstName":"dell Troubleshooting ICH9 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTNPNGZSUlRKTUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkFiNEU5eks3ZXc", "createdOn":"", "firstName":"dell The 2200 VM7MB F3C 0714  latest. Pdf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkFiNEU5eks3ZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclEzVllpeElUUHM", "createdOn":"", "firstName":"dell Studio 14z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclEzVllpeElUUHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEl0YUp0VXlhdkk", "createdOn":"", "firstName":"dell Shematic VOSTRO 3450 Insprion 14R (N4110).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEl0YUp0VXlhdkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDZVWUx5UE14R0E", "createdOn":"", "firstName":"dell service manual for  Inspiron 5150 b22ed7eafe  Inspiron 5150 (Compal Abacus MT).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDZVWUx5UE14R0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGdIRExnZUJ3dFE", "createdOn":"", "firstName":"dell QD UM7B INTEL DIS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGdIRExnZUJ3dFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFJIcXhsMXU4eU0", "createdOn":"", "firstName":"dell rc4559.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFJIcXhsMXU4eU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1l6MlRPeGQ1ZFU", "createdOn":"", "firstName":"dell N5010 INTEL .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1l6MlRPeGQ1ZFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDhRQ2hCeWJMZUU", "createdOn":"", "firstName":"dell QD xet TN SV cu.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDhRQ2hCeWJMZUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblpHbVMyd2d1M28", "createdOn":"", "firstName":"dell NE SA4558.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblpHbVMyd2d1M28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTVaS0NyNzhJREE", "createdOn":"", "firstName":"dell N4030 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTVaS0NyNzhJREE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRmN5dUVKckh1TVE", "createdOn":"", "firstName":"dell N4020 DJ1 100224 ( N4020).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRmN5dUVKckh1TVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXZVaUhSUF9KRmc", "createdOn":"", "firstName":"dell N4010(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXZVaUhSUF9KRmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmo3bjg2b21QYjg", "createdOn":"", "firstName":"dell N4010 Wistron Arsenal DJ1 AMD Dis.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmo3bjg2b21QYjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUVUOHMyMHEwbEU", "createdOn":"", "firstName":"dell MARGAUX UMA A00 0121 GERBER BOM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUVUOHMyMHEwbEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblJkZzZiZjlBV2c", "createdOn":"", "firstName":"dell MC14553B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblJkZzZiZjlBV2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicTEza2Rzb3lrb2c", "createdOn":"", "firstName":"dell M4010 (AMD UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicTEza2Rzb3lrb2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWVFR0s0Z3QzRnM", "createdOn":"", "firstName":"dell Latitude E4310 LA 5691P PR01 0713 MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWVFR0s0Z3QzRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVJuVnUzX0VJTEk", "createdOn":"", "firstName":"dell Latitude D600 Inspiron 600M Quanta JM2 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVJuVnUzX0VJTEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEhfMkxnN25fUG8", "createdOn":"", "firstName":"dell Latitude D600 Inspiron 600M Quanta JM2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEhfMkxnN25fUG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTXM0d1JXZU5ldDg", "createdOn":"", "firstName":"dell Laptop  Model D600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTXM0d1JXZU5ldDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWItS083VEcyZUk", "createdOn":"", "firstName":"dell LA 6611P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWItS083VEcyZUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRE5nTHBRTVhrb0U", "createdOn":"", "firstName":"dell LA 5573P DIS LATITUDE E6510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRE5nTHBRTVhrb0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnM5RU1qSEE1QTQ", "createdOn":"", "firstName":"dell LA 5571P UMA LATITUDE E6510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnM5RU1qSEE1QTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmR6c0dBeXgtUEU", "createdOn":"", "firstName":"dell LA 5154 1749.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmR6c0dBeXgtUEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2llZlVBNGhwNnc", "createdOn":"", "firstName":"dell LA 2791 R06 0207  Latitude D620 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2llZlVBNGhwNnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFZTUFdSMkU0bmc", "createdOn":"", "firstName":"dell Inspiron M5030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFZTUFdSMkU0bmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMllZT1ZQZVdnOGs", "createdOn":"", "firstName":"dell JM5B power sequence.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMllZT1ZQZVdnOGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkJqM09nVTRkRGs", "createdOn":"", "firstName":"dell hef4556b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkJqM09nVTRkRGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzRraDBZSHJkMGc", "createdOn":"", "firstName":"dell fx2mb d3a ns 0907a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzRraDBZSHJkMGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1VsV3VvejB1V00", "createdOn":"", "firstName":"dell fx2mb a1a ns 050506.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1VsV3VvejB1V00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOTBlV2JqLWFuUVE", "createdOn":"", "firstName":"dell Enrico14 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOTBlV2JqLWFuUVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYWRPdGFuY19WUU0", "createdOn":"", "firstName":"dell E6400 LA 3803P(DAA00000O1L0 JBL01 ROUSH DIS A00 0612 Gerber.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYWRPdGFuY19WUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTNxV2JnOXJ4R2c", "createdOn":"", "firstName":"dell E6410andE6510Brochure.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTNxV2JnOXJ4R2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUtNdGNGczl6QzQ", "createdOn":"", "firstName":"dell  XPS M1710 COMPAL LA 2881P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUtNdGNGczl6QzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUm5yX3RGRVRNWFk", "createdOn":"", "firstName":"dell  Vostro A840 A860 A1088   QUANTA VM9 VM8 UMA   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUm5yX3RGRVRNWFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLS1ydThwckh1Vms", "createdOn":"", "firstName":"dell  Vostro 1510   COMPAL LA 4121P JAL30   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLS1ydThwckh1Vms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNl9xMVY3d25QR2c", "createdOn":"", "firstName":"dell  Vostro 1320   COMPAL LA 4232P KAL80   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNl9xMVY3d25QR2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzI1d1ZCeWpzTmc", "createdOn":"", "firstName":"dell  vostro 1500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzI1d1ZCeWpzTmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic09mZmNob2hqa0k", "createdOn":"", "firstName":"dell  Studio 1735 upload 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic09mZmNob2hqa0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDFGT2Y0cGVGZ0E", "createdOn":"", "firstName":"dell  VOSTRO 3500 Winery15.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDFGT2Y0cGVGZ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0JrWFdoNjZCLXM", "createdOn":"", "firstName":"dell  Studio 1735.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0JrWFdoNjZCLXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0hQUjBFcGVWVEk", "createdOn":"", "firstName":"dell  Studio 1555   Quanta FM9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0hQUjBFcGVWVEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDVaM243OTNsNm8", "createdOn":"", "firstName":"dell  Studio 1435 1535   QUANTA FM6 DISCRETE   REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDVaM243OTNsNm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2hreEJCTkFQMWM", "createdOn":"", "firstName":"dell  Schemetic 1720 fm5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2hreEJCTkFQMWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmpYTXdna045ckE", "createdOn":"", "firstName":"dell  parker mb a00 0814w.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmpYTXdna045ckE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFVIOVFxMEVtNTg", "createdOn":"", "firstName":"dell  N5010 WISTRON Berry AMD Discrete UMA   REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFVIOVFxMEVtNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0YyTU93NzRYbVk", "createdOn":"", "firstName":"dell  N4050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0YyTU93NzRYbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieklsa3M2OUJhN3c", "createdOn":"", "firstName":"dell  N4020 DJ1 09275.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieklsa3M2OUJhN3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDRxWE1SMU1faUk", "createdOn":"", "firstName":"dell  MINI 10   COMPAL LA 5091P KIU20   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDRxWE1SMU1faUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidVpPRktod0pGVWc", "createdOn":"", "firstName":"dell  m1330 Thurman Discrete VGA nVidia G86 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidVpPRktod0pGVWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFlYTVJJdW5mTlk", "createdOn":"", "firstName":"dell  mini 1018 1012 compal la 6501p la 5732P pim10 Nim10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFlYTVJJdW5mTlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlRLLVhmblRoY2M", "createdOn":"", "firstName":"dell  Latitude L400   QUANTA SS3 3B   REV 3A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlRLLVhmblRoY2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjRyQm5xNWdLemM", "createdOn":"", "firstName":"dell  Latitude D630   QUANTA JM7B DISCRETE 128MB   REV 2B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjRyQm5xNWdLemM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1VKY1M4cGZhODA", "createdOn":"", "firstName":"dell  Latitude D630   QUANTA JM7B DISCRETE 128MB   REV 2B 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1VKY1M4cGZhODA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFB5WUQ5bC1iMmM", "createdOn":"", "firstName":"dell  Latitude D620   COMPAL LA 2791   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFB5WUQ5bC1iMmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnJpUWFYelNMZkU", "createdOn":"", "firstName":"dell  Latitude D630   COMPAL LA 3302P   DISCRETE   REV 0.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnJpUWFYelNMZkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTJSNXl1ZGdTQmM", "createdOn":"", "firstName":"dell  Latitude D400   Wistron Pebble.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTJSNXl1ZGdTQmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmpyWGNuQmFWNGs", "createdOn":"", "firstName":"dell  Latitude D420 COMPAL LA 3071P   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmpyWGNuQmFWNGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUndTOG5TbWJYOWc", "createdOn":"", "firstName":"dell  Latitude C640 QUANTA TM8   AVO   REV 2B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUndTOG5TbWJYOWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTHhnY1RlWDRyQ1U", "createdOn":"", "firstName":"dell  Latitude 120L   WISTRON KEY WEST KINNEY   REV  2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTHhnY1RlWDRyQ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG0yazVQak0tNzQ", "createdOn":"", "firstName":"dell  Inspiron 1545   WISTRON ROBERTS DISCRETE   REV  1Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG0yazVQak0tNzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3R3ZU1uQm9Sbms", "createdOn":"", "firstName":"dell  INSPIRON Z AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3R3ZU1uQm9Sbms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnJ1WTZUMHNLNWM", "createdOn":"", "firstName":"dell  Inspiron N4010   QUANTA UM8B DISCRETE   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnJ1WTZUMHNLNWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTllNNTd2ZEtzNzA", "createdOn":"", "firstName":"dell  inspiron 2650   COMPAL LA 1271 schematics .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTllNNTd2ZEtzNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmZiZm40YkFuTTA", "createdOn":"", "firstName":"dell  Inspiron 1525   WISTRON SPEARS   AMD UMA DS2   REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmZiZm40YkFuTTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEZxdlA3S3lOOXM", "createdOn":"", "firstName":"dell  Inspiron 1525   WISTRON SPEARS   AMD UMA DS2   REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEZxdlA3S3lOOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHhacUY1SVZzM2c", "createdOn":"", "firstName":"dell  Inspiron 1501   QUANTA KIRIN   FX2 with NS   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHhacUY1SVZzM2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZjhHZVhHZ1VWa00", "createdOn":"", "firstName":"dell  Inspiron 1501   QUANTA KIRIN   FX2 with NS   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZjhHZVhHZ1VWa00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3cyaDlHT2hiSGM", "createdOn":"", "firstName":"dell  Inspiron 14R N4020  Wistron DJ1 Montevina UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3cyaDlHT2hiSGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1RMeDYwUGVGbGs", "createdOn":"", "firstName":"dell  Inspiron 1440   WISTRON ALBA UMA   REV  1 06ABR2009Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1RMeDYwUGVGbGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3Zacks5LTRUNE0", "createdOn":"", "firstName":"dell  Inspiron 1420 ELSA LANAI UMA Laptop Schematics 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3Zacks5LTRUNE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSTRUTGhqaDBXdjg", "createdOn":"", "firstName":"dell  Inspiron 1420 ELSA LANAI UMA Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSTRUTGhqaDBXdjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZk1pUEMzQk9OTlE", "createdOn":"", "firstName":"dell  Inspiron 1100   COMPAL LA 1452   SC 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZk1pUEMzQk9OTlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEd3ZzhnS0NROWc", "createdOn":"", "firstName":"dell  INSPIRON 1000   QUANTA VM5   REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEd3ZzhnS0NROWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXFKZ2R2N2hWQ0E", "createdOn":"", "firstName":"dell  D820.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXFKZ2R2N2hWQ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR28yMDFndGpyT0U", "createdOn":"", "firstName":"dell  d630.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR28yMDFndGpyT0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFdBWV90Mkl0dEU", "createdOn":"", "firstName":"dell  d620.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFdBWV90Mkl0dEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGhFSUF4MkpyV00", "createdOn":"", "firstName":"dell  d610.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGhFSUF4MkpyV00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWFZySDZEdU1YWVE", "createdOn":"", "firstName":"dell  D600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWFZySDZEdU1YWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnk3Zm1MRmxkQ1U", "createdOn":"", "firstName":"dell  D410 laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnk3Zm1MRmxkQ1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZW5ncmQxNkZRTGs", "createdOn":"", "firstName":"dell  c600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZW5ncmQxNkZRTGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWg1SFU5Q1d5YUk", "createdOn":"", "firstName":"dell  5100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWg1SFU5Q1d5YUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjAzeWxkd3JDSUk", "createdOn":"", "firstName":"dell  510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjAzeWxkd3JDSUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzJYNHhiT3Y4bHc", "createdOn":"", "firstName":"dell  2410.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzJYNHhiT3Y4bHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG9MQUhfNGU4RUU", "createdOn":"", "firstName":"dell  1427 KFW11LA 4841P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG9MQUhfNGU4RUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTdUYTh6NHZCM0E", "createdOn":"", "firstName":"dell  1330.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTdUYTh6NHZCM0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTdpZ1ZVYlBxcUE", "createdOn":"", "firstName":"dell 1464 um3 dis 20091015.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTdpZ1ZVYlBxcUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOThEUFFNVEhBWXc", "createdOn":"", "firstName":"dell 1330.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOThEUFFNVEhBWXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0VvODRFLTdQa28", "createdOn":"", "firstName":"dell XPS M2010 Greenland Napa REV X03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0VvODRFLTdQa28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHVVcTNNV25QZnM", "createdOn":"", "firstName":"dell XPS M1530 Intel Discrete WISTRON Hawke REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHVVcTNNV25QZnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaWFDZGx4VDFPakU", "createdOn":"", "firstName":"dell XPS M1330 WISTRON Thurman.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaWFDZGx4VDFPakU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickpxZENIY0tVWU0", "createdOn":"", "firstName":"dell X300 drawing blade JAL50 dis 0506.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickpxZENIY0tVWU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWRhWklYQXQ5dEk", "createdOn":"", "firstName":"dell Vostro V3700 Wistron Winery DW70.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWRhWklYQXQ5dEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXNNUHQ1elZLWEU", "createdOn":"", "firstName":"dell Vostro V3700 Wistron Winery DW70 IO BD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXNNUHQ1elZLWEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTlqM0d4VEtEQ1E", "createdOn":"", "firstName":"dell Vostro 3700 WISTRON Winery Rev X01 2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTlqM0d4VEtEQ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3dxYXNhRTNyZkk", "createdOn":"", "firstName":"dell vostro 1520 compal la 4596p kml50 rev 1.0sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3dxYXNhRTNyZkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnJ4R2lEVzZWazg", "createdOn":"", "firstName":"dell studio1450 1458 unprotected.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnJ4R2lEVzZWazg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmpvY3dPSE8yZGs", "createdOn":"", "firstName":"dell studio1450 1458 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmpvY3dPSE8yZGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXpQY0JVZTlNd0k", "createdOn":"", "firstName":"dell Studio XPS 1645 QUANTA Callpella REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXpQY0JVZTlNd0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjdRWC16aW1JTlU", "createdOn":"", "firstName":"dell Studio XPS 1640 QUANTA RM3 REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjdRWC16aW1JTlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkVsM2RYVXBlNzQ", "createdOn":"", "firstName":"dell Studio 14z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkVsM2RYVXBlNzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQkFNSm1lMTNQQkE", "createdOn":"", "firstName":"dell Studio 1435 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQkFNSm1lMTNQQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0VBNGtDWWsxdkk", "createdOn":"", "firstName":"dell Studio 1435 Discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0VBNGtDWWsxdkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUndpeEJaQWN2bGM", "createdOn":"", "firstName":"dell Schemetic Studio 1735.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUndpeEJaQWN2bGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmdKWC1QbjhjRFk", "createdOn":"", "firstName":"dell Schemetic Model D600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmdKWC1QbjhjRFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVllReU5ZUDBERVU", "createdOn":"", "firstName":"dell Schemetic Power D400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVllReU5ZUDBERVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVJGY0JZOWJ4aTA", "createdOn":"", "firstName":"dell Schemetic Inpiron 1318.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVJGY0JZOWJ4aTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSW5XS1VTdFlFWVE", "createdOn":"", "firstName":"dell Schemetic d400.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSW5XS1VTdFlFWVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmxBRTlmamV1bk0", "createdOn":"", "firstName":"dell Schemetic Anote2 SC 0112 1330 final.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmxBRTlmamV1bk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWwwNXBtbnBmQnM", "createdOn":"", "firstName":"dell Schemetic 8200 MB LA 1221.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWwwNXBtbnBmQnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNLdDh2dnpRNlU", "createdOn":"", "firstName":"dell Schemetic 710m sc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNLdDh2dnpRNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVBtVm5FWmJoTWM", "createdOn":"", "firstName":"dell Schemetic 6400 FM1 R1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVBtVm5FWmJoTWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVFOOUNpRWthbkk", "createdOn":"", "firstName":"dell Schemetic 600M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVFOOUNpRWthbkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1FSdTBxSmV0UHc", "createdOn":"", "firstName":"dell Schemetic 1720 fm5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1FSdTBxSmV0UHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYjVjTzF1VDkteVk", "createdOn":"", "firstName":"dell Schemetic 1510 fx2mb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYjVjTzF1VDkteVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3lJcG9RbHNSclU", "createdOn":"", "firstName":"dell Schemetic 1427.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3lJcG9RbHNSclU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTduWFUwc0tNNm8", "createdOn":"", "firstName":"dell Schemetic 1400 QUANTA fm5 corsica.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTduWFUwc0tNNm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVERzX1g3b0dRYk0", "createdOn":"", "firstName":"dell Schematic Inspiron 6400 1505.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVERzX1g3b0dRYk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWE2RTYwcU5BUm8", "createdOn":"", "firstName":"dell N5110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWE2RTYwcU5BUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUVmOGJKQ003ZGM", "createdOn":"", "firstName":"dell N5110 (of Wistron DQ15).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUVmOGJKQ003ZGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3dYMVkxYVM2M0k", "createdOn":"", "firstName":"dell N5010 Berry INTEL Discrete UMA(09909 1 4HH01).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3dYMVkxYVM2M0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWNSSEZNRm04ZEE", "createdOn":"", "firstName":"dell N4110 dav02amb 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWNSSEZNRm04ZEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVmxmeExnbFFVWUE", "createdOn":"", "firstName":"dell N4110 dav02amb.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVmxmeExnbFFVWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzd2ejY3a2Zsb0E", "createdOn":"", "firstName":"dell N4030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzd2ejY3a2Zsb0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUYyTnFvaFdSUVU", "createdOn":"", "firstName":"dell N4030 card share.pdf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUYyTnFvaFdSUVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamxtUFBPbDBDMWc", "createdOn":"", "firstName":"dell N4030 card share.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamxtUFBPbDBDMWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjBRYlpEaDRPbkU", "createdOn":"", "firstName":"dell N4030 alone.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjBRYlpEaDRPbkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY2Yzc3BYdl9nZjg", "createdOn":"", "firstName":"dell N4030 DJ1 10212.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY2Yzc3BYdl9nZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXdzbkRlQXdvb00", "createdOn":"", "firstName":"dell Mini11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXdzbkRlQXdvb00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlpWYWRIbWM1bXM", "createdOn":"", "firstName":"dell Mini10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlpWYWRIbWM1bXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX1ozMmRKNXcxb00", "createdOn":"", "firstName":"dell Mini 1210.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX1ozMmRKNXcxb00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjNNWUZKT3M2UTA", "createdOn":"", "firstName":"dell Mini 1018.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjNNWUZKT3M2UTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidDhmQzdPU3FKMDg", "createdOn":"", "firstName":"dell mini 10 compal ls 4764p rev 1.0 02dez2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidDhmQzdPU3FKMDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVZ4blQtNENOR2s", "createdOn":"", "firstName":"dell MINI 10 COMPAL LA 5091P KIU20 REV 1.0Sec 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVZ4blQtNENOR2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGtxVGJSMkxjdGM", "createdOn":"", "firstName":"dell MINI 10 COMPAL LA 5091P KIU20 REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGtxVGJSMkxjdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVBqMnhpUFVJMmM", "createdOn":"", "firstName":"dell mini 10 compal la 4761p rev 1.0 13jan2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVBqMnhpUFVJMmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWVXTDJISkh4SWM", "createdOn":"", "firstName":"dell M5110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWVXTDJISkh4SWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkNTRXpoMkx6ZnM", "createdOn":"", "firstName":"dell M4040 DV14 AMD Brazos 4IU01 10265 1 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkNTRXpoMkx6ZnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzZtMGJXdk9FRlk", "createdOn":"", "firstName":"dell M4040 DV14 AMD Brazos 4IU01 10265 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzZtMGJXdk9FRlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1FaeG5BQi0zZDQ", "createdOn":"", "firstName":"dell M11XR2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1FaeG5BQi0zZDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejU5bmc0ekpTQk0", "createdOn":"", "firstName":"dell Latitude E6510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejU5bmc0ekpTQk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzNWVjdWMUVPdDg", "createdOn":"", "firstName":"dell Latitude E6510 (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzNWVjdWMUVPdDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3kwVVJZRVRJc0E", "createdOn":"", "firstName":"dell Latitude E6500 LA 4043.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3kwVVJZRVRJc0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXy1odlhyNG94Z3c", "createdOn":"", "firstName":"dell Latitude E6410 LA 5472P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXy1odlhyNG94Z3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSUZkSU1CX1pselE", "createdOn":"", "firstName":"dell Latitude E6410 LA 5471P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSUZkSU1CX1pselE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOF9aUzRJb0VnOHM", "createdOn":"", "firstName":"dell Latitude E6320 (Compal LA 6611P) laptop schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOF9aUzRJb0VnOHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUZRUUZ1ak41Rzg", "createdOn":"", "firstName":"dell Latitude E4310.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUZRUUZ1ak41Rzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUF3RUxVeGJGbVk", "createdOn":"", "firstName":"dell Latitude D630.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUF3RUxVeGJGbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT09ad2ZvTkhnWG8", "createdOn":"", "firstName":"dell Latitude D630 COMPAL LA 3302.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT09ad2ZvTkhnWG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFZZb3FIZVlHOW8", "createdOn":"", "firstName":"dell Latitude D630 COMPAL LA 3301P SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFZZb3FIZVlHOW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRncwMGRmcGJEclE", "createdOn":"", "firstName":"dell Latitude D620.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRncwMGRmcGJEclE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1FTWkxxdEZmeTA", "createdOn":"", "firstName":"dell Latitude D420 COMPAL LA 3071P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1FTWkxxdEZmeTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUW5ZdHVUUWlsZjg", "createdOn":"", "firstName":"dell Inspiron M102Z Compal LA 7161P PLM00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUW5ZdHVUUWlsZjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazBWLTlHLUhKcXM", "createdOn":"", "firstName":"dell Inspiron M102Z (Compal LA 7161P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazBWLTlHLUhKcXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiemVTREk3M3hvdm8", "createdOn":"", "firstName":"dell inspiron b120 b130 1300 wistron key west dk1 rev scsec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiemVTREk3M3hvdm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkVaNHZjbkNBTG8", "createdOn":"", "firstName":"dell Inspiron 17R N7110 QUANTA V03A DIS UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkVaNHZjbkNBTG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXdZWnM1dUw2Ujg", "createdOn":"", "firstName":"dell Inspiron 17R N7110 QUANTA R03 V03 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXdZWnM1dUw2Ujg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3pGaHY2N3VjYjQ", "createdOn":"", "firstName":"dell Inspiron 1420 (ELSA LANAI DISCRETE) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3pGaHY2N3VjYjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlZHOUpCSmJyelk", "createdOn":"", "firstName":"dell inspirion 1530 NoRestriction.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlZHOUpCSmJyelk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1dTZ21leDRqbG8", "createdOn":"", "firstName":"dell Inpiron 8500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1dTZ21leDRqbG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGtDX3l4emVFaVU", "createdOn":"", "firstName":"dell E6400 HBL51 LA 3081P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGtDX3l4emVFaVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ09DbnFmVW5NalU", "createdOn":"", "firstName":"dell Inpiron 1318.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ09DbnFmVW5NalU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTRaNUdTYmVpbHM", "createdOn":"", "firstName":"dell D630 LA3301P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTRaNUdTYmVpbHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUhxZllTcHBMT2M", "createdOn":"", "firstName":"dell D620 LA 2792P DIS A00 0209.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUhxZllTcHBMT2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWY4bXBQTktsazQ", "createdOn":"", "firstName":"dell d505.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWY4bXBQTktsazQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzFpT09VU1N1ZlE", "createdOn":"", "firstName":"dell D500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzFpT09VU1N1ZlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjlZMDlxemxNVlU", "createdOn":"", "firstName":"dell 700m.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjlZMDlxemxNVlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2pqaFVTWTQ3WHc", "createdOn":"", "firstName":"dell 1749 LA 5154P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2pqaFVTWTQ3WHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGZYUU1XWTBRSTQ", "createdOn":"", "firstName":"dell 1450 FOXCONN H901L Arrandale 911HG A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGZYUU1XWTBRSTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaDVvQklKRERnR28", "createdOn":"", "firstName":"dell 1450 Foxconn H830 L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaDVvQklKRERnR28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmFRRFNKMEFkSGc", "createdOn":"", "firstName":"dell 1450 drawing Foxconn H830 L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmFRRFNKMEFkSGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWdBQmp2QTlXVlU", "createdOn":"", "firstName":"dell 1440 alba uma  1 0406 02 6layer.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWdBQmp2QTlXVlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDJvUFprMkJQeE0", "createdOn":"", "firstName":"dell 1427.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDJvUFprMkJQeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVVTZloxQXcxbEk", "createdOn":"", "firstName":"dell 1000 1501 Kirin FX2 Quanta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVVTZloxQXcxbEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWFYUnNBUV9WTkE", "createdOn":"", "firstName":"dell 1000 1501 Kirin FX2 Quanta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWFYUnNBUV9WTkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0VNb2FwRkp3Q1E", "createdOn":"", "firstName":"dell datasheet 4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0VNb2FwRkp3Q1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMThQakd4SzV0Q0k", "createdOn":"", "firstName":"dell D830 JM7BMB A1A 0628.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMThQakd4SzV0Q0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGkweUNBb3dOelU", "createdOn":"", "firstName":"dell datasheet 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGkweUNBb3dOelU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGo2M1oyWlJtWlU", "createdOn":"", "firstName":"dell datasheet 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGo2M1oyWlJtWlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVdTaXIybmpfa2s", "createdOn":"", "firstName":"dell datasheet.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVdTaXIybmpfa2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEtkcXFIZXdiOTA", "createdOn":"", "firstName":"dell d800 COMPAL LA 1901   REV A02Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEtkcXFIZXdiOTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXlrcW1ZVHVwSzA", "createdOn":"", "firstName":"dell D505.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXlrcW1ZVHVwSzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1dSOFBjYU9JaUk", "createdOn":"", "firstName":"dell d630 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1dSOFBjYU9JaUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNEs4UkpISkRUcG8", "createdOn":"", "firstName":"dell d630 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNEs4UkpISkRUcG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHFXd0dySHctdTg", "createdOn":"", "firstName":"dell Compal LA 5152P KAT00 UMA POITIER Montevina DA80000E510 0G913P Studio 1745.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHFXd0dySHctdTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTEtYTZIOGtBMzQ", "createdOn":"", "firstName":"dell Compal LA 5151P KAT00 Discrete VGA POITIER Montevina M96 M92 Studio 1745.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTEtYTZIOGtBMzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWw0ajJUdDU0TDA", "createdOn":"", "firstName":"dell Berry dg15 amd a00 m96 09913.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWw0ajJUdDU0TDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSmw1ZEw2aGZ1Z00", "createdOn":"", "firstName":"dell AO4601.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSmw1ZEw2aGZ1Z00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSWZ2eFV5RURQcnM", "createdOn":"", "firstName":"dell AO4600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSWZ2eFV5RURQcnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3NwRTcya2xDRHc", "createdOn":"", "firstName":"dell Alienware   M17x.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3NwRTcya2xDRHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFA5RDNLdWRxcVU", "createdOn":"", "firstName":"dell 70633.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFA5RDNLdWRxcVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGpOaWc3ZGI4NGc", "createdOn":"", "firstName":"dell 1510 1520ICH9.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGpOaWc3ZGI4NGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNk94WVBSd3p3V0k", "createdOn":"", "firstName":"dell 70633.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNk94WVBSd3p3V0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3NNWHZPWTFtbnc", "createdOn":"", "firstName":"dell 1510 1520(ICH9).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3NNWHZPWTFtbnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiay1oa3NhcEt5c00", "createdOn":"", "firstName":"dell 1464 1564 1764 b.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiay1oa3NhcEt5c00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXpPT1NjQWYxVzA", "createdOn":"", "firstName":"dell 1464 1564 1764.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXpPT1NjQWYxVzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaThHY19menJ0U0U", "createdOn":"", "firstName":"dell 1435 (Wistron Diaz UMA 08217 A00 0819).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaThHY19menJ0U0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXU1aFhXRm1ob0k", "createdOn":"", "firstName":"dell 1458.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXU1aFhXRm1ob0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmlReDVzZ0ZDQ2c", "createdOn":"", "firstName":"dell 1088 vm9 a00 0725 uma.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmlReDVzZ0ZDQ2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmRVUFh6eE9XN0U", "createdOn":"", "firstName":"dell 1000 1501 Kirin FX2 Quanta.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmRVUFh6eE9XN0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFhZbVFPeTNwbGc", "createdOn":"", "firstName":"hp  R13 UMA DIS .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFhZbVFPeTNwbGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTRFQ3JDWWZ1YTA", "createdOn":"", "firstName":"hp  R13 UMA DIS .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTRFQ3JDWWZ1YTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSG1LZG9nWFJxLWs", "createdOn":"", "firstName":"hp  R12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSG1LZG9nWFJxLWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWJqU0JXM2pSQXc", "createdOn":"", "firstName":"hp  Quanta UT3 UT5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWJqU0JXM2pSQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWNzTW9wTHhmY3c", "createdOn":"", "firstName":"hp  QUANTA BQ2L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWNzTW9wTHhmY3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWZsSjdFNmxlYlE", "createdOn":"", "firstName":"hp  Quanta+UT8A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWZsSjdFNmxlYlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDVkYzZnWXVaMm8", "createdOn":"", "firstName":"hp  quanta sx7 hp 4325S 4425s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDVkYzZnWXVaMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUU1ONVYyWjB3VHc", "createdOn":"", "firstName":"hp  Quanta R23.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUU1ONVYyWjB3VHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmswNlkyUlBodkE", "createdOn":"", "firstName":"hp  QT8.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmswNlkyUlBodkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEgzbmtxa01oRjA", "createdOn":"", "firstName":"hp  NC6400 Compal LA 2952P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEgzbmtxa01oRjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFZIX3VmQXdqZU0", "createdOn":"", "firstName":"hp  LX8 AMD alone significantly.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFZIX3VmQXdqZU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMnZkWTJONm1MVzQ", "createdOn":"", "firstName":"hp  Lenovo Y480 COMPAL LA 8001P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMnZkWTJONm1MVzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVGtfbGRtVldxN28", "createdOn":"", "firstName":"hp  la4902p r10 20091207 mv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVGtfbGRtVldxN28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTI4ZmktU2F6cGc", "createdOn":"", "firstName":"hp  LA 4107P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTI4ZmktU2F6cGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGlydkh5WUItaFk", "createdOn":"", "firstName":"hp  LA 4731P CQ35.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGlydkh5WUItaFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWJ1eDRicVlwaEk", "createdOn":"", "firstName":"hp  LA 3331P V1.0 0515.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWJ1eDRicVlwaEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTJlZ1FJcGNacDQ", "createdOn":"", "firstName":"hp  HPCQ43 FOXCONNCHICAGO MONTEVINAUMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTJlZ1FJcGNacDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjRfb1UxY3VWbUU", "createdOn":"", "firstName":"hp  HPCQ43 FOXCONNCHICAGO MONTEVINAUMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjRfb1UxY3VWbUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibF9PUjdwcnNjZEE", "createdOn":"", "firstName":"hp  HP ZE2000   QUANTA CT8   REV 3B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibF9PUjdwcnNjZEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGpoTXUtWUloSFk", "createdOn":"", "firstName":"hp  HP TX1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGpoTXUtWUloSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDNWQmtvcm9yNmc", "createdOn":"", "firstName":"hp  HP ProBook 4410s 4411s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDNWQmtvcm9yNmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUdBTEt5N0c4Wms", "createdOn":"", "firstName":"hp  hp pavilion dv7 maintenance and service guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUdBTEt5N0c4Wms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjN6TkZId0ZuVjg", "createdOn":"", "firstName":"hp  HP PROBOOK 4320s 4321s   QUANTA SX6 DISCRETE   REV 2BSec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjN6TkZId0ZuVjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkZ2ZlNCcHhBZ2s", "createdOn":"", "firstName":"hp  HP ProBook 4311s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkZ2ZlNCcHhBZ2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFJqbXdNQnloU00", "createdOn":"", "firstName":"hp  HP ProBook 4310S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFJqbXdNQnloU00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXdSZXhVZ19lMVE", "createdOn":"", "firstName":"hp  hp pavillon ez4900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXdSZXhVZ19lMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVG8wSTZpcVlad2s", "createdOn":"", "firstName":"hp  HP Pavilion DV7   QUANTA UP6 7 JONES CUJO 2.0 DIS   REV 1.0 26OUT2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVG8wSTZpcVlad2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEJHRTJQdzRJRkU", "createdOn":"", "firstName":"hp  HP Pavilion dv6000 service guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEJHRTJQdzRJRkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3ZaaEJaN2lSSU0", "createdOn":"", "firstName":"hp  HP Pavilion DV5 DV7   QUANTA UT12 UMA   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3ZaaEJaN2lSSU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnFKT1JNMElDeU0", "createdOn":"", "firstName":"hp  HP Pavilion DV4 IC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnFKT1JNMElDeU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVkxWl9DbjY3b3c", "createdOn":"", "firstName":"hp  HP Pavilion DV5 DV7   QUANTA UT12 DISCRETE   REV 1A.pdf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVkxWl9DbjY3b3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidFRXVWJjU2tqOVU", "createdOn":"", "firstName":"hp  hp nx9040.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidFRXVWJjU2tqOVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDRINlYwQkpsdUk", "createdOn":"", "firstName":"hp  hp nx900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDRINlYwQkpsdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnBKMDhtaG1YNzA", "createdOn":"", "firstName":"hp  hp nx900.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnBKMDhtaG1YNzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV25NV2hoczZFbVk", "createdOn":"", "firstName":"hp  hp nc6400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV25NV2hoczZFbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM013dHZ5c2J5MlU", "createdOn":"", "firstName":"hp  HP HDX X16   QUANTA UT6   REV E3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM013dHZ5c2J5MlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkFkYjZQbUtrM0U", "createdOn":"", "firstName":"hp  HP Mini 210   QUANTA Annika 1.1  REV 1.A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkFkYjZQbUtrM0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlJTclFVVURSUk0", "createdOn":"", "firstName":"hp  HP ELITEBOOK 8840 8840W   COMPAL LA 4902P   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlJTclFVVURSUk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVFtTHBEWTE4bTg", "createdOn":"", "firstName":"hp  hp evo620.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVFtTHBEWTE4bTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODNrUW5pN2V3bWM", "createdOn":"", "firstName":"hp  HP ELITEBOOK 6440b 6540b   COMPAL LA 4891P KELL00   DIOR DISCRETE   REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODNrUW5pN2V3bWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVgzWWZIbUNUR1E", "createdOn":"", "firstName":"hp  HP EliteBook 8530W 8530P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVgzWWZIbUNUR1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVllvaTZMZFM4RVE", "createdOn":"", "firstName":"hp  HP DV9260.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVllvaTZMZFM4RVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVlyY0lXRklERHM", "createdOn":"", "firstName":"hp  HP DV7t Intel COMPAL LA 4082P   VADER DISCRETE   REV 0.4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVlyY0lXRklERHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0FJRWpCZk5pSlU", "createdOn":"", "firstName":"hp  HP DV7 AMD   COMPAL LA 4093P   JBK00   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0FJRWpCZk5pSlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWi10NFVkVjR6Vlk", "createdOn":"", "firstName":"hp  HP DV6000 AT3 upload.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWi10NFVkVjR6Vlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibERTdTFqdUJ2X1U", "createdOn":"", "firstName":"hp  HP DV6700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibERTdTFqdUJ2X1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidWd1d1NmdlJXaU0", "createdOn":"", "firstName":"hp  HP DV6000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidWd1d1NmdlJXaU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUTZUanpMbWZ0UUE", "createdOn":"", "firstName":"hp  HP DV5 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUTZUanpMbWZ0UUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHFGdEljQ01DeXM", "createdOn":"", "firstName":"hp  HP DV6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHFGdEljQ01DeXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaHE2RXZWUDM2Mjg", "createdOn":"", "firstName":"hp  HP dv4 ICH9 VGAonboard.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaHE2RXZWUDM2Mjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGI3dzkyS0VvLUU", "createdOn":"", "firstName":"hp  HP DV4 CQ40 CQ45   INTEL DISCRETE Compal LA 4102P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGI3dzkyS0VvLUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGs4Z3g0b3FLV1E", "createdOn":"", "firstName":"hp  HP DV4000   WISTRON LEOPARD FF   REV  4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGs4Z3g0b3FLV1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibDJVTmFaNU9fWDg", "createdOn":"", "firstName":"hp  HP DV2000 V3000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibDJVTmFaNU9fWDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekQ4MEprMUxZUmc", "createdOn":"", "firstName":"hp  HP DV2000 V3000 INTEL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekQ4MEprMUxZUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakJZaVlwTXFlQ00", "createdOn":"", "firstName":"hp  HP DV2000 V3000 AMD SHIBA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakJZaVlwTXFlQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUVZaG5wa1JxY0E", "createdOn":"", "firstName":"hp  hp dv1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUVZaG5wa1JxY0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0ZDdHJnc1hfRlk", "createdOn":"", "firstName":"hp  HP CQ62 HP G62 SAFINA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0ZDdHJnc1hfRlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlRBV1pPOTVxTzQ", "createdOn":"", "firstName":"hp  HP CQ516   INVENTEC VOLNA AMD DISCRETE   6050A2258801   REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlRBV1pPOTVxTzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHY3elJJNnR2U28", "createdOn":"", "firstName":"hp  HP CQ515   INVENTEC VOLNA AMD UMA   6050A2258701   REV AX1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHY3elJJNnR2U28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDRMTzJYcGp5aFU", "createdOn":"", "firstName":"hp  HP CQ40 VITAS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDRMTzJYcGp5aFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFBwZmFxek5OTGc", "createdOn":"", "firstName":"hp  HP CQ42 AX1 INTEL UMA DISCRETE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFBwZmFxek5OTGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXJsMU9QOHJtYUU", "createdOn":"", "firstName":"hp  HP CQ36 LA 4743P calpella dis uma 090413.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXJsMU9QOHJtYUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiME1UQWRNTE1MRjA", "createdOn":"", "firstName":"hp  HP CQ36 LA 4743P 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiME1UQWRNTE1MRjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTZIZS1CUElNY3M", "createdOn":"", "firstName":"hp  HP Compaq X1000 COMPAL LA 1701R1.0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTZIZS1CUElNY3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG90ODZSM0wyeG8", "createdOn":"", "firstName":"hp  HP CQ36 LA 4743P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG90ODZSM0wyeG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjBmMnF2Y0pWaUk", "createdOn":"", "firstName":"hp  HP Compaq V5000 COMPAL LA 2771   REV 0.8Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjBmMnF2Y0pWaUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjFHQnpJOGNna0E", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO NX6320   INVENTEC DAVOS 3.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjFHQnpJOGNna0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSVJuN043TGE0YW8", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ60 CQ70 WISTRON WARRIOR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSVJuN043TGE0YW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSE9hNHcySHJ2RW8", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ61 QUANTA OP6 OP7.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSE9hNHcySHJ2RW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEZicVF5ZjZRVTQ", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ42   QUANTA AX1   REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEZicVF5ZjZRVTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0JvcHJYUnVJcDg", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ41 Compal LA 4107P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0JvcHJYUnVJcDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSGVwM1NlamY5d1U", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ35 INTEL DISCRETE   COMPAL LA 4731P   REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSGVwM1NlamY5d1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVJMWk9jcFk3ZVk", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ36   COMPAL LA 4743P   REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVJMWk9jcFk3ZVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid1dkb1R6Q3Vzams", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C700   COMPAL LA 4031 JBL81   REV 1.0   ZOUAVE 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid1dkb1R6Q3Vzams/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFROWXRCbkhERVU", "createdOn":"", "firstName":"hp  HP COMPAQ NX6325   INVENTEC TAOS 2.0   REV AX02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFROWXRCbkhERVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlJpdC1Dc0ZlV0k", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C500   COMPAL LA 3341P IBL30   REV 0.2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlJpdC1Dc0ZlV0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1VlMHhsS09YajA", "createdOn":"", "firstName":"hp  hp compaq nx6110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1VlMHhsS09YajA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXJaSkpocER2ckE", "createdOn":"", "firstName":"hp  HP Compaq NC6220   INVENTEC ASPEN DIS PV   REV A01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXJaSkpocER2ckE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUxvcjFSMGtIYmc", "createdOn":"", "firstName":"hp  HP Compaq NC6220   INVENTEC ASPEN UMA MV   REV AX1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUxvcjFSMGtIYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3JLSFBqMkVfZUk", "createdOn":"", "firstName":"hp  HP Compaq CQ40 Intel Compal LA 4101P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3JLSFBqMkVfZUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzZiZG51bTRlVzA", "createdOn":"", "firstName":"hp  HP COMPAQ MINI 700   INVENTEC HARBOUR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzZiZG51bTRlVzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib21YVVRaM1UzbzA", "createdOn":"", "firstName":"hp  HP compaq CQ40 AMD Compal LA 4112P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib21YVVRaM1UzbzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUdia1JnRFFBZXc", "createdOn":"", "firstName":"hp  HP compaq CQ40 AMD Compal LA 4111P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUdia1JnRFFBZXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVVFsZFVoV1RiSW8", "createdOn":"", "firstName":"hp  HP COMPAQ CQ320 CQ321   INVENTEC VILLEMONT VV10   INTEL UMA 6050A2364601   REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVVFsZFVoV1RiSW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWk9CYk53dy1oWjg", "createdOn":"", "firstName":"hp  HP COMPAQ CQ320 CQ321   INVENTEC VILLEMONT VV10   INTEL DIS 6050A2364401   REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWk9CYk53dy1oWjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickFIUlVkcEtuLWs", "createdOn":"", "firstName":"hp  HP compaq 6910p Compal LA 3261p 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickFIUlVkcEtuLWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3VDXzl5UG5Lcm8", "createdOn":"", "firstName":"hp  HP compaq 6720 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3VDXzl5UG5Lcm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSFgzWHh4R0JwUFE", "createdOn":"", "firstName":"hp  HP COMPAQ 6535S 6735S AMD Inventec Prince Pearl laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSFgzWHh4R0JwUFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaEdabnF5VVRVR1k", "createdOn":"", "firstName":"hp  HP COMPAQ 6531S   INVENTEC ZZI MV   REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaEdabnF5VVRVR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkoyWFZiUTVSTEk", "createdOn":"", "firstName":"hp  HP Compaq 6530B 6730B   INVENTEC DD08   REV AX1Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkoyWFZiUTVSTEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY05WR1NBUXR2UUE", "createdOn":"", "firstName":"hp  hp compaq 2510P Quanta OT2 schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY05WR1NBUXR2UUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX3lfR2dTbV93WDQ", "createdOn":"", "firstName":"hp  HP Compaq 2230s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX3lfR2dTbV93WDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkRCQVQtdVdzN3c", "createdOn":"", "firstName":"hp  HP COMPAQ 2133   INVENTEC Galileo   REV SI 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkRCQVQtdVdzN3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3RzUWc2UHBMUWs", "createdOn":"", "firstName":"hp  HP COMPAQ 2133   INVENTEC Galileo   REV SI.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3RzUWc2UHBMUWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiczFBWWNhQUZ2RVU", "createdOn":"", "firstName":"hp  hp compaq nc8000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiczFBWWNhQUZ2RVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQianJoQllJSmFDUlU", "createdOn":"", "firstName":"hp  HP 510 511   INVENTEC VULCAIN UMA   REV AX1 26DEZ2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQianJoQllJSmFDUlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGI1bEhvbktrRWc", "createdOn":"", "firstName":"hp  HP 515 Volna 09 AMD UMA MV 20090428 A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGI1bEhvbktrRWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNGRteFZEdXVneU0", "createdOn":"", "firstName":"hp  HP 510 511   INVENTEC VULCAIN DISCRETE   REV AX1 29DEZ2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNGRteFZEdXVneU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnRKZ21BTVBfdTA", "createdOn":"", "firstName":"hp  HP6910P LA3261P REV1A UMA 0328.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnRKZ21BTVBfdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiODJfUVJfYUprRWs", "createdOn":"", "firstName":"hp  HP500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiODJfUVJfYUprRWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlhOX0FuZWpLQVk", "createdOn":"", "firstName":"hp  hp4411s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlhOX0FuZWpLQVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1VJbEwwU3J5bWM", "createdOn":"", "firstName":"hp  HP430 DAOQL 6MB8F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1VJbEwwU3J5bWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2Z5QW5yZC1Rc3c", "createdOn":"", "firstName":"hp  HP430 DAOQL 6MB8F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2Z5QW5yZC1Rc3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicldUS2E1VDI4T1E", "createdOn":"", "firstName":"hp  hp nc6000 circuit diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicldUS2E1VDI4T1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1lVM214b1BQWHc", "createdOn":"", "firstName":"hp  HP Pavilion Dv4 Compaq Presario CQ41 LA 4106P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1lVM214b1BQWHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYmdGTEpKQURzS00", "createdOn":"", "firstName":"hp  HP TX2500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYmdGTEpKQURzS00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRUIyLVB3anVxdEU", "createdOn":"", "firstName":"hp  HP CQ45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRUIyLVB3anVxdEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1NSbGppMjZEdDA", "createdOn":"", "firstName":"hp  HP Probook 5320 (Compal LA 6161P) Laptop Schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1NSbGppMjZEdDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXN2aGlFazU5c1U", "createdOn":"", "firstName":"hp  HP ProBook 5310M Compal LA 5221.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXN2aGlFazU5c1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1Bib2tlRjVoM2c", "createdOn":"", "firstName":"hp  HP ProBook 4415s 4416s INVENTEC PIAGET 6050A2268301 REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1Bib2tlRjVoM2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicG9kODB2MzFKVFE", "createdOn":"", "firstName":"hp  hp probook 4410s 4411s 4510s service manual.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicG9kODB2MzFKVFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUhSd0hnTmtib0k", "createdOn":"", "firstName":"hp  HP ProBook 4411S INVENTEC ZENITH UMA REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUhSd0hnTmtib0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDdYbDZPeXVwNkU", "createdOn":"", "firstName":"hp  HP ProBook 4411s (Inventec Zenith UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDdYbDZPeXVwNkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTBEM2RocEJFZ2s", "createdOn":"", "firstName":"hp  HP ProBook 4410s 4411s.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTBEM2RocEJFZ2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNk1VNWdCZnlGUmM", "createdOn":"", "firstName":"hp  HP PROBOOK 4320s 4321s QUANTA SX6 DISCRETE REV 2BSec 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNk1VNWdCZnlGUmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjRVcHVIWk51eWs", "createdOn":"", "firstName":"hp  HP PROBOOK 4320s 4321s QUANTA SX6 DISCRETE REV 2BSec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjRVcHVIWk51eWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnlSOXpMTE8xQUU", "createdOn":"", "firstName":"hp  HP Pavilion g4 R13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnlSOXpMTE8xQUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWG5MdTlHbWlRUWs", "createdOn":"", "firstName":"hp  HP Pavilion DV5 DV7 QUANTA UT12 UMA REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWG5MdTlHbWlRUWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2JrZnhxbVFJWFU", "createdOn":"", "firstName":"hp  HP Pavilion DV5 DV7 QUANTA UT12 DISCRETE REV 1A.pdf.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2JrZnhxbVFJWFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN05TMjA1Mm9XbVE", "createdOn":"", "firstName":"hp  HP Pavilion DV4000 WISTRON Leopard2 REV 1.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN05TMjA1Mm9XbVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVdDZkI1dzI0UFU", "createdOn":"", "firstName":"hp  HP PAVILION DV4 COMPAQ CQ40 COMPAL LA 4117P REV 0.3 16MAR2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVdDZkI1dzI0UFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSE1pRTAwc1FZZ1E", "createdOn":"", "firstName":"hp  HP Pavilion DV4 ICH9 VGA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSE1pRTAwc1FZZ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2NTTDgtWkxKYjg", "createdOn":"", "firstName":"hp  HP Pavilion DM3 diagram H310UA1 HPMH 40GAB4000 D000 revD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2NTTDgtWkxKYjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDR0TmF5R2o3YUU", "createdOn":"", "firstName":"hp  hp nc6230 A6050A0053201 MB A03(1).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDR0TmF5R2o3YUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmdsYkNnVVJ0bUk", "createdOn":"", "firstName":"hp  HP G60 COMPAQ CQ60 WISTRON HBU16 1.2 REV 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmdsYkNnVVJ0bUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0loUjA5T2RWTms", "createdOn":"", "firstName":"hp  HP G42.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0loUjA5T2RWTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRXlDdDF6M1ZRUXc", "createdOn":"", "firstName":"hp  HP Elitebook 2740p Wistron NORN 3.0 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRXlDdDF6M1ZRUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHdLX25TajZaMm8", "createdOn":"", "firstName":"hp  Hp DVfor AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHdLX25TajZaMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlpXOVo3aHN4RnM", "createdOn":"", "firstName":"hp  HP DV9260 QUANTA AT5 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlpXOVo3aHN4RnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaTJLWVlIQW1nSmM", "createdOn":"", "firstName":"hp  HP DV9000 QUANTA AT8 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaTJLWVlIQW1nSmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiejdLMHV2cTJMYjg", "createdOn":"", "firstName":"hp  HP DV9000 QUANTA AT1 REV MV.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiejdLMHV2cTJMYjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibTBNbVBPMVdPRzg", "createdOn":"", "firstName":"hp  HP DV6000 QUANTA AT3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibTBNbVBPMVdPRzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQienU0WXVIM3VXS2c", "createdOn":"", "firstName":"hp  HP DV6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQienU0WXVIM3VXS2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaU5IZHEwTmtzVEk", "createdOn":"", "firstName":"hp  HP DV6 HPMH 40GAB6300 D (AMD).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaU5IZHEwTmtzVEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWFEeUdXOVZBZVU", "createdOn":"", "firstName":"hp  HP DV6 7 QUANTA UP6 UP7 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWFEeUdXOVZBZVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVE12SzhSbDFiUDA", "createdOn":"", "firstName":"hp  HP DV6 QUANTA LX6 LX7 REV 1A 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVE12SzhSbDFiUDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSW93NkJKMFY2UG8", "createdOn":"", "firstName":"hp  HP DV6 QUANTA LX89 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSW93NkJKMFY2UG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFhTVVZzNVJuUTQ", "createdOn":"", "firstName":"hp  HP DV6 QUANTA LX6 LX7 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFhTVVZzNVJuUTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSjFQdWZEZmllWTQ", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT8 REV 1A 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSjFQdWZEZmllWTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFl1ZkRDR1VpNlU", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT8 REV 1A 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFl1ZkRDR1VpNlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnMza2hkaTEyNTg", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT6 REV 1A 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnMza2hkaTEyNTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOUpfczhXT3lyWkU", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT8 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOUpfczhXT3lyWkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicjBuVk1GU2hzVEk", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT6 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicjBuVk1GU2hzVEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFExWTRoNUhkdU0", "createdOn":"", "firstName":"hp  HP DV5 QUANTA QT6 REV 1A 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFExWTRoNUhkdU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUZFS19tekh2TG8", "createdOn":"", "firstName":"hp  HP DV4 CQ40 CQ45 INTEL DISCRETE COMPAL LA 4102P REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUZFS19tekh2TG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkJUSjk0S0t2TkE", "createdOn":"", "firstName":"hp  HP DV4000 QUANTA CT3 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkJUSjk0S0t2TkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiamRIVl9aajJrVUU", "createdOn":"", "firstName":"hp  HP DV4 CQ40 AMD DISCRETE COMPAL LA 4112P REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiamRIVl9aajJrVUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGxfRy1BMjJjU2c", "createdOn":"", "firstName":"hp  HP DV4 LA 4112P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGxfRy1BMjJjU2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUi1uNHJMVFM0eTQ", "createdOn":"", "firstName":"hp  HP DV4 COMPAL LA 4102P ICH9 VGA REV 04.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUi1uNHJMVFM0eTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFA2WGxFV043Z2M", "createdOn":"", "firstName":"hp  HP DV4 COMPAL LA 4101P ICH9 REV 03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFA2WGxFV043Z2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2VTTWF3bnBjcFU", "createdOn":"", "firstName":"hp  HP DV3000 DIABLO SI Build AX1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2VTTWF3bnBjcFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1UtdnVyU2ozaTg", "createdOn":"", "firstName":"hp  HP DV3000 Compal LA 4494P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1UtdnVyU2ozaTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmppUGJkZkpGQ0k", "createdOn":"", "firstName":"hp  HP DV3000 DIABLO20 60502215501.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmppUGJkZkpGQ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWHMwTmhLWWFyaE0", "createdOn":"", "firstName":"hp  HP DV3000 DIABLO20 60502215501.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWHMwTmhLWWFyaE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmlKNlVqMDU2c0U", "createdOn":"", "firstName":"hp  HP DV3 LA 4732P UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmlKNlVqMDU2c0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDUtVFBoeWxwSjg", "createdOn":"", "firstName":"hp  HP DV3 CQ35 LA 4731P R10 DIS 0216.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDUtVFBoeWxwSjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnRmaFMxRmJZQkE", "createdOn":"", "firstName":"hp  HP DV2000 WISTRON Pamirs Discrete REV SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnRmaFMxRmJZQkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMk9WSjFkT0sxTFE", "createdOn":"", "firstName":"hp  HP DV1000,DV1700.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMk9WSjFkT0sxTFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWNVbmNRazJZMkU", "createdOn":"", "firstName":"hp  HP DV2000 (965GM) WISTRON PAMIRS UMA REV 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWNVbmNRazJZMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmJ5aDN6TW43OU0", "createdOn":"", "firstName":"hp  HP CQ57 FOXCONN CHICAGO.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmJ5aDN6TW43OU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEVHbTZFLVluSWs", "createdOn":"", "firstName":"hp  HP CQ57 Foxconn CHICAGO.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEVHbTZFLVluSWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVJKS2U5c2xNWkk", "createdOn":"", "firstName":"hp  HP CQ43 CHICAGO HR HPC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVJKS2U5c2xNWkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHBPVlBqby0zN3M", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ60 CQ70 WISTRON WARRIOR REV SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHBPVlBqby0zN3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGJYdXNEd003NDg", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ61 QUANTA OP6 OP7 REV A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGJYdXNEd003NDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVFqUUNhUjljSjg", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ50 WISTRON ASTROSPHERE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVFqUUNhUjljSjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnVtQW5oZ3lhUVU", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ42 QUANTA AX1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnVtQW5oZ3lhUVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ1RfY1VoZ21NbTg", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ41 COMPAL LA 4107P REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ1RfY1VoZ21NbTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHE0Y0ROUlA0cjg", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ40 AMD UMA COMPAL LA 4111P JBL20 REV 0.2 03DEZ2007.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHE0Y0ROUlA0cjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkJCNkI3elJSalk", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ40 COMPAL LA 4101P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkJCNkI3elJSalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkh5b01ESVlrLXc", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ35 INTEL DISCRETE COMPAL LA 4731P REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkh5b01ESVlrLXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS054Rmxhbi1QeGc", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO CQ36 COMPAL LA 4743P REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS054Rmxhbi1QeGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzJzSl8tOG02V1E", "createdOn":"", "firstName":"hp  HP Compaq Presario C700 HP G7000 COMPAL LA 3732P IBL80 REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzJzSl8tOG02V1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSE9HWDdHOFhlYU0", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C700 COMPAL LA 4031 JBL81 REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSE9HWDdHOFhlYU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEc5X0FSUDdHZU0", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C500 COMPAL LA 3341P IBL30 REV 0.2Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEc5X0FSUDdHZU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWo5SDJvbC1Yc3M", "createdOn":"", "firstName":"hp  HP COMPAQ PRESARIO C300 COMPAL LA 3342P IBL30 REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWo5SDJvbC1Yc3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVgtclNuaENnbnc", "createdOn":"", "firstName":"hp  HP Compaq Notebook nc8000 SERVICE MANUAL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVgtclNuaENnbnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXAyTUtMUXlya00", "createdOn":"", "firstName":"hp  HP COMPAQ NX7000 Presario x1000 COMPAL LA 1701 REV 1.0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXAyTUtMUXlya00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1pFNDZ5Q1lvRXc", "createdOn":"", "firstName":"hp  HP Compaq NC6400 (Compal LA 2952P) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1pFNDZ5Q1lvRXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUZ1VWRjNGo5Z3M", "createdOn":"", "firstName":"hp  HP COMPAQ NC6230 INVENTEC VAIL1.0 REV AX2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUZ1VWRjNGo5Z3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1JSSTRMTWwxOUE", "createdOn":"", "firstName":"hp  HP COMPAQ EVO N410C INVENTEC VAIL 1.0 www.NotebookReparos.com.br.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1JSSTRMTWwxOUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkpjeXl1WDFtd28", "createdOn":"", "firstName":"hp  HP COMPAQ CQ320 CQ321 INVENTEC VILLEMONT VV10 INTEL DIS 6050A2364401 REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkpjeXl1WDFtd28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzdOdkJGOGNnLUk", "createdOn":"", "firstName":"hp  HP COMPAQ CQ320 CQ321 INVENTEC VILLEMONT VV10 INTEL UMA 6050A2364601 REV A02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzdOdkJGOGNnLUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlk0aThQejlhTDQ", "createdOn":"", "firstName":"hp  HP compaq 6910p (Compal LA 3261p).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlk0aThQejlhTDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ1ZpTmtTTW1ta3M", "createdOn":"", "firstName":"hp  HP Compaq 6515B schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ1ZpTmtTTW1ta3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibWxlUDV6TUpsUWM", "createdOn":"", "firstName":"hp  HP compaq 6720 CQ510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibWxlUDV6TUpsUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ29vdkNmbUJOS0E", "createdOn":"", "firstName":"hp  HP Compaq 6510B schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ29vdkNmbUJOS0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRG8xMk1SOGx6c3c", "createdOn":"", "firstName":"hp  HP Compaq 6320 (Quanta OT1) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRG8xMk1SOGx6c3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0hDanQxemN6UWs", "createdOn":"", "firstName":"hp  HP Compaq 6230 – 8230 – Compaq Evo Notebook N410c (Inventec Vail) schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0hDanQxemN6UWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0d5M09lVHhETWc", "createdOn":"", "firstName":"hp  HP Compaq 2710P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0d5M09lVHhETWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM19mNGYzRmM0czA", "createdOn":"", "firstName":"hp  HP Compaq 2710P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM19mNGYzRmM0czA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3V2Q1EwSnZLNnc", "createdOn":"", "firstName":"hp  HP Compaq 540 – 6520s – 6720s schematics (Inventec DDD UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3V2Q1EwSnZLNnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWw3aFBiNXRXS0U", "createdOn":"", "firstName":"hp  HP 540 DV2 Quanta QL6 Rev 2A 2008.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWw3aFBiNXRXS0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNURITkEzd1A3dEU", "createdOn":"", "firstName":"hp  hp 625 326 325 6050a2346901.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNURITkEzd1A3dEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkE0cWtqU1VsX0k", "createdOn":"", "firstName":"hp  HP 5220M qd SX1A E3C 0323.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkE0cWtqU1VsX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnZnT2RnU1VIVDA", "createdOn":"", "firstName":"hp  HP 540 HP6720S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnZnT2RnU1VIVDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidms4b1o2ZXRnNkU", "createdOn":"", "firstName":"hp  hp 4431s 6050A2259301.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidms4b1o2ZXRnNkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSW5mOG92ckNFVVE", "createdOn":"", "firstName":"hp  HP 326 AMD .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSW5mOG92ckNFVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNVJlTVFBdDlCTjA", "createdOn":"", "firstName":"hp  G4 DA0R12MB6E0 R12 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNVJlTVFBdDlCTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2N6YjRhLVVvMWM", "createdOn":"", "firstName":"hp  ENVY13 QUATA SP6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2N6YjRhLVVvMWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGNqU0ZSb0tlZkk", "createdOn":"", "firstName":"hp  ENVY13 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGNqU0ZSb0tlZkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUVraU8xUFlUYmc", "createdOn":"", "firstName":"hp  DV9000 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUVraU8xUFlUYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTi1nZjNkajBuYVk", "createdOn":"", "firstName":"hp  DV7 AMD UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTi1nZjNkajBuYVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ3dGQXJGa1Q0bjQ", "createdOn":"", "firstName":"hp  DV6 DV7 I3 I5 UP67 N10M 0227 MODULE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ3dGQXJGa1Q0bjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnBsX0ZLMFpkTHM", "createdOn":"", "firstName":"hp  DV7 AMD (UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnBsX0ZLMFpkTHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVRKcHM4ZnlTOXc", "createdOn":"", "firstName":"hp  DV6000 at8AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVRKcHM4ZnlTOXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmpJeGhBTWtpQXc", "createdOn":"", "firstName":"hp  DV6000 AT3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmpJeGhBTWtpQXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlhZcjBRZ3MzQjA", "createdOn":"", "firstName":"hp  DV6 DV7 LX6.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlhZcjBRZ3MzQjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFNvcTBlXzltTlk", "createdOn":"", "firstName":"hp  DV6 UT3 UT5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFNvcTBlXzltTlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEJqRmJLaGZTeFU", "createdOn":"", "firstName":"hp  dv5 1222er Quanta QT8G r1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEJqRmJLaGZTeFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTdIZ3FaU1p3VFk", "createdOn":"", "firstName":"hp  dv4 ICH9 VGA ROI.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTdIZ3FaU1p3VFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEI5QjFNWU8yU3M", "createdOn":"", "firstName":"hp  DV4 I3 4106P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEI5QjFNWU8yU3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFJwNGNsQzJ2T2M", "createdOn":"", "firstName":"hp  DV4 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFJwNGNsQzJ2T2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUU3RGJ4d3JZRVk", "createdOn":"", "firstName":"hp  dv4 LA 4117P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUU3RGJ4d3JZRVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRl9ma2ZTcGc5SFk", "createdOn":"", "firstName":"hp  DV1000 power on timing.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRl9ma2ZTcGc5SFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmp5YUVaRC03Zk0", "createdOn":"", "firstName":"hp  DV2000 INTEL 945.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmp5YUVaRC03Zk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzB6cWxFLXZRMFU", "createdOn":"", "firstName":"hp  dell studio1450 1458 new.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzB6cWxFLXZRMFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEZRRm9Hdzlad0U", "createdOn":"", "firstName":"hp  CT8 1213 B2A 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEZRRm9Hdzlad0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTzlmTzZFWlpsOUE", "createdOn":"", "firstName":"hp  CQ70 LA 5752p r03 1029a.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTzlmTzZFWlpsOUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0x1SHZRbURuODg", "createdOn":"", "firstName":"hp  CQ42  core I3 laptop717.com.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0x1SHZRbURuODg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlB6VS1CQjZsS2M", "createdOn":"", "firstName":"hp  CQ42 CQ62 AMD AX2 7 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlB6VS1CQjZsS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMng4bTRUYmh6blE", "createdOn":"", "firstName":"hp  CQ42 CQ62 AMD AX2 7 2 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMng4bTRUYmh6blE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib3AxdURGcUR6dTQ", "createdOn":"", "firstName":"hp  CQ42 CQ45 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib3AxdURGcUR6dTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVzBYTkJaZnpQOEE", "createdOn":"", "firstName":"hp  CQ40 DV6000 mat nguon.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVzBYTkJaZnpQOEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEVfUE9MamxTM1k", "createdOn":"", "firstName":"hp  Cq40 alone significant.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEVfUE9MamxTM1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEdTU1QycU0zV0U", "createdOn":"", "firstName":"hp  CQ 40 INTEL alone significantly LA 4103p.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEdTU1QycU0zV0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYnpWRFNRNmF2VEE", "createdOn":"", "firstName":"hp  compaq presario2200.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYnpWRFNRNmF2VEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnRaYkRHandEUE0", "createdOn":"", "firstName":"hp  Compaq n610c v n620 service guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnRaYkRHandEUE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieDdoLTQwaUYyMXM", "createdOn":"", "firstName":"hp  Compaq Presario CQ61 (Intel) QUANTA OP6 OP7 REV A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieDdoLTQwaUYyMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2ZZejd1U1V5bHc", "createdOn":"", "firstName":"hp  Compaq Presario CQ61 (AMD) QUANTA OP8 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2ZZejd1U1V5bHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVVkQWV5ZE5QOWc", "createdOn":"", "firstName":"hp  COMPAQ PRESARIO 2500.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVVkQWV5ZE5QOWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkZaVXpENmw3dUU", "createdOn":"", "firstName":"hp  Compaq Evo N610C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkZaVXpENmw3dUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0hlU2x4S0NnUEU", "createdOn":"", "firstName":"hp  COMPAL LA 1811   REV 1.0Sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0hlU2x4S0NnUEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXZveS1MN3U1dk0", "createdOn":"", "firstName":"hp  COMPAQ 510 511 610 (UMA) .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXZveS1MN3U1dk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjM5WXFTOGlVMG8", "createdOn":"", "firstName":"hp  AX2 7 R1A 1224 PV PARK LP HP G62.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjM5WXFTOGlVMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieUZMV2xzTmhSTmc", "createdOn":"", "firstName":"hp  6535s inventec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieUZMV2xzTmhSTmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSlhwREcxX0cta0U", "createdOn":"", "firstName":"hp  6531S 6050A2161401 REV A03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSlhwREcxX0cta0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkNFOFBuRElFcTg", "createdOn":"", "firstName":"hp  6050A2327701 VILLEMONT VV10 INTEL DIS HP COMPAQ CQ320 CQ321.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkNFOFBuRElFcTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlNISldjSHRwbW8", "createdOn":"", "firstName":"hp  6520S INVENTEC DDD UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlNISldjSHRwbW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0ZHck0xZ1lleDA", "createdOn":"", "firstName":"hp  6050a0066801 mb a02 hp6220.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0ZHck0xZ1lleDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEZYNDRKZ0lSYWM", "createdOn":"", "firstName":"hp  510 511 610 (UMA) .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEZYNDRKZ0lSYWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidExEXzRLTFFrQVE", "createdOn":"", "firstName":"hp  4510s 4416s  INVENTEC 6050A2252701 MB A3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidExEXzRLTFFrQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicWVfTTRacFBHd1E", "createdOn":"", "firstName":"hp  1HP DV4 CQ40 CQ45 INTEL DISCRETE COMPAL LA 4102P REV 0.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicWVfTTRacFBHd1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTDA5SUZ6V293a3M", "createdOn":"", "firstName":"hp  2008129131956425.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTDA5SUZ6V293a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkNKRVljUjJRMG8", "createdOn":"", "firstName":"asus Z96Jm REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkNKRVljUjJRMG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVc0anRmU0s0U2M", "createdOn":"", "firstName":"asus Z94RP.Rev.1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVc0anRmU0s0U2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVWF5TkZiaTZiVkU", "createdOn":"", "firstName":"asus Z94Rp.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVWF5TkZiaTZiVkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYk96ZXFzQjJJaHM", "createdOn":"", "firstName":"asus Z94 R 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYk96ZXFzQjJJaHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzVSWkQyYU9JLVU", "createdOn":"", "firstName":"asus Z84J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzVSWkQyYU9JLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2VIdXZESlVySjQ", "createdOn":"", "firstName":"asus Z84FM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2VIdXZESlVySjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOE9MY3lMUHo4Z2c", "createdOn":"", "firstName":"asus Z84F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOE9MY3lMUHo4Z2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXM0aWJOV2pIY1U", "createdOn":"", "firstName":"asus Z65.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXM0aWJOV2pIY1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFR5Ynp5MFdQb1k", "createdOn":"", "firstName":"asus Z62HA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFR5Ynp5MFdQb1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmRURmwtaEx1UjA", "createdOn":"", "firstName":"asus z61ae.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmRURmwtaEx1UjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQV9jaU9zcE1GYlE", "createdOn":"", "firstName":"asus Z62H.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQV9jaU9zcE1GYlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3NFc1dHLVQ5OTQ", "createdOn":"", "firstName":"asus Z37S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3NFc1dHLVQ5OTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUItWDJ6Z2pEN3c", "createdOn":"", "firstName":"asus X51RL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUItWDJ6Z2pEN3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmtsYTRlZlc5eEE", "createdOn":"", "firstName":"asus W7J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmtsYTRlZlc5eEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ3NTX3EyWVlTNEk", "createdOn":"", "firstName":"asus X51C T12C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ3NTX3EyWVlTNEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic09QNDV4MEVpeEk", "createdOn":"", "firstName":"asus W3V A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic09QNDV4MEVpeEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQialJGczl3V2N2MkU", "createdOn":"", "firstName":"asus V6J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQialJGczl3V2N2MkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGZXMU1lRzlFYVk", "createdOn":"", "firstName":"asus UX50.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGZXMU1lRzlFYVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjJwMERTSDlrb2c", "createdOn":"", "firstName":"asus UL50AT.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjJwMERTSDlrb2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlREMThZcFVzMVE", "createdOn":"", "firstName":"asus U6V.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlREMThZcFVzMVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGVBQ3ZaWmFHcG8", "createdOn":"", "firstName":"asus UL20A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGVBQ3ZaWmFHcG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFhLN0RJeEs0SmM", "createdOn":"", "firstName":"asus U5A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFhLN0RJeEs0SmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUU5TRXY2MUVJQWM", "createdOn":"", "firstName":"asus TERESA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUU5TRXY2MUVJQWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidEJaSjhHVXcwUEU", "createdOn":"", "firstName":"asus TERESA20.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidEJaSjhHVXcwUEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibnRIMG45bFh0RlU", "createdOn":"", "firstName":"asus T76S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibnRIMG45bFh0RlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFNobjVjdFI2eEU", "createdOn":"", "firstName":"asus T76J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFNobjVjdFI2eEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1FRaGFLQ2M4QUk", "createdOn":"", "firstName":"asus T76J R2.0(HAIER).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1FRaGFLQ2M4QUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibm9tUHBrYUpWUXc", "createdOn":"", "firstName":"asus T19R.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibm9tUHBrYUpWUXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0x1end5d0Jsd0E", "createdOn":"", "firstName":"asus T13Fv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0x1end5d0Jsd0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzVtbW5DQXk0a3M", "createdOn":"", "firstName":"asus T12RG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzVtbW5DQXk0a3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUd4OUFZaWxadzg", "createdOn":"", "firstName":"asus T12M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUd4OUFZaWxadzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkROaUNQM05seE0", "createdOn":"", "firstName":"asus T12J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkROaUNQM05seE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEtwU3ZHOXZzb2s", "createdOn":"", "firstName":"asus T12F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEtwU3ZHOXZzb2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGllcnhRNGpUQnc", "createdOn":"", "firstName":"asus T12EG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGllcnhRNGpUQnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0JFVWxmcE5zNVU", "createdOn":"", "firstName":"asus QUANTA ED5.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0JFVWxmcE5zNVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWRSN2ZGMXdldlE", "createdOn":"", "firstName":"asus M9F M9J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWRSN2ZGMXdldlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1BYZFA3ZHlEQk0", "createdOn":"", "firstName":"asus M9V.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1BYZFA3ZHlEQk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0dqdjA0NVYwejA", "createdOn":"", "firstName":"asus M7V.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0dqdjA0NVYwejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3RoOGtEUmF0YVU", "createdOn":"", "firstName":"asus M60J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3RoOGtEUmF0YVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHQzYkpVd2Q3bms", "createdOn":"", "firstName":"asus K72JK.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHQzYkpVd2Q3bms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmNGVnRSSm9DR00", "createdOn":"", "firstName":"asus K42JV MB 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmNGVnRSSm9DR00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUlJaSEVTTDcxRGc", "createdOn":"", "firstName":"asus K42Jv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUlJaSEVTTDcxRGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2Mxc3oyQUV5Z0k", "createdOn":"", "firstName":"asus K42JR.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2Mxc3oyQUV5Z0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTnZNVDhCSU1CNmc", "createdOn":"", "firstName":"asus K42Jr SCHEMATIC Revision 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTnZNVDhCSU1CNmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUE05OC01c1NSOTg", "createdOn":"", "firstName":"asus K40IN G71G 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUE05OC01c1NSOTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGk0MVVjQ0Z6cVU", "createdOn":"", "firstName":"asus K42F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGk0MVVjQ0Z6cVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnBoYTEtZXQ0YUU", "createdOn":"", "firstName":"asus K40IN BLOCK DIAGRAM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnBoYTEtZXQ0YUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNl9WWGZGelBVYW8", "createdOn":"", "firstName":"asus K40 series K40AB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNl9WWGZGelBVYW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2Y4ZVlXX3oxZ0E", "createdOn":"", "firstName":"asus F9E.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2Y4ZVlXX3oxZ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmVJUS1BRGhmV28", "createdOn":"", "firstName":"asus f9s mb r13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmVJUS1BRGhmV28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQzBPTFFnOTRSc00", "createdOn":"", "firstName":"asus F9J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQzBPTFFnOTRSc00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2JQX2ZiSXFfMmc", "createdOn":"", "firstName":"asus F8Tr A8Z X80Z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2JQX2ZiSXFfMmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS29QelRfamRKTk0", "createdOn":"", "firstName":"asus F8Va.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS29QelRfamRKTk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieTNnc2RGb2NhV2c", "createdOn":"", "firstName":"asus f83vf mb r11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieTNnc2RGb2NhV2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2VzUEtYTTFzbUk", "createdOn":"", "firstName":"asus F83T.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2VzUEtYTTFzbUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEw2T2VLUzFDRDA", "createdOn":"", "firstName":"asus F83VF.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEw2T2VLUzFDRDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajVNSnJtWmtpOUU", "createdOn":"", "firstName":"asus F80Q.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajVNSnJtWmtpOUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3NQQ3FxUmxFbkU", "createdOn":"", "firstName":"asus F7Sr.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3NQQ3FxUmxFbkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlVTWVB6QktoQzA", "createdOn":"", "firstName":"asus F7Se.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlVTWVB6QktoQzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVkhIS1R6VVEzVWs", "createdOn":"", "firstName":"asus F7K.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVkhIS1R6VVEzVWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0RwME1XdnRFdUU", "createdOn":"", "firstName":"asus F7F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0RwME1XdnRFdUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGx4MlZRSHpPVG8", "createdOn":"", "firstName":"asus F70SL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGx4MlZRSHpPVG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOG9xTi1BMWdkbGM", "createdOn":"", "firstName":"asus Emachines D725.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOG9xTi1BMWdkbGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaThxYkJzUnU5R0k", "createdOn":"", "firstName":"asus Emachine E627 COMPAL LA 5481P   REV 1.0Sec.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaThxYkJzUnU5R0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFhreWQzaDdnb1k", "createdOn":"", "firstName":"asus CARMEL.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFhreWQzaDdnb1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOHNBeGUwMTJXdE0", "createdOn":"", "firstName":"asus C90S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOHNBeGUwMTJXdE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0FXeFM0ci1ORmc", "createdOn":"", "firstName":"asus  Z62HA NB SIS672 SB SIS968.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0FXeFM0ci1ORmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWTFGTUFnWkxyQTQ", "createdOn":"", "firstName":"asus  k42jr rev 2.0 sch.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWTFGTUFnWkxyQTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3VUeFM2Y1hsYlU", "createdOn":"", "firstName":"asus  F80S F81S   REV 1.1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3VUeFM2Y1hsYlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajNwa0plNTc2TXM", "createdOn":"", "firstName":"asus  F5Z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajNwa0plNTc2TXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXNGME42QVNibDQ", "createdOn":"", "firstName":"asus  eee pc T91 R12G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXNGME42QVNibDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN3hiZXFQQ0Fubms", "createdOn":"", "firstName":"asus K43T(la 7551p).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN3hiZXFQQ0Fubms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMVp0VFc3YUY2MEk", "createdOn":"", "firstName":"asus Z96H Schematic Diagrams.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMVp0VFc3YUY2MEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlk4Y1pZajJkTjA", "createdOn":"", "firstName":"asus X8AS K40C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlk4Y1pZajJkTjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHR1YkZOSmY5azQ", "createdOn":"", "firstName":"asus SCHEMATIC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHR1YkZOSmY5azQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUhNNk1oWGx0c28", "createdOn":"", "firstName":"asus not power ON.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUhNNk1oWGx0c28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFJJQm0xNk9NMVk", "createdOn":"", "firstName":"asus N20A MB R1.2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFJJQm0xNk9NMVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicUgzVjd5UkVaT2c", "createdOn":"", "firstName":"asus m50s x55s rev 2.0sec.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicUgzVjd5UkVaT2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHZVcFVvc1pPUUE", "createdOn":"", "firstName":"asus M50 series.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHZVcFVvc1pPUUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlJJZDh4cnhnMm8", "createdOn":"", "firstName":"asus K53 U LA 7322pr10 0217d PBL60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlJJZDh4cnhnMm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDBpRDhKZk5acjg", "createdOn":"", "firstName":"asus K70IJ Rev1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDBpRDhKZk5acjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGMzeVcyQzc3TFU", "createdOn":"", "firstName":"asus K53 U drawings la 7322pr10 0217d PBL60.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGMzeVcyQzc3TFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTy1jV2cycTlCRVU", "createdOn":"", "firstName":"asus K42F R2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTy1jV2cycTlCRVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicElMU2FMQXZITVU", "createdOn":"", "firstName":"asus G1S CAP.02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicElMU2FMQXZITVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZzBnNmxkSXM1bTA", "createdOn":"", "firstName":"asus K40 series K40AB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZzBnNmxkSXM1bTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMThXRUpqMEVrdUk", "createdOn":"", "firstName":"asus F7Z REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMThXRUpqMEVrdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3hRdkgyeDR5ekU", "createdOn":"", "firstName":"asus f83vf mb r11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3hRdkgyeDR5ekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDZhQm1zZ0ZrOXM", "createdOn":"", "firstName":"asus F5Z REV 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDZhQm1zZ0ZrOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMGJQSDNHNmpXVm8", "createdOn":"", "firstName":"asus F3T MB R2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMGJQSDNHNmpXVm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS0haaTBFVzJUOXM", "createdOn":"", "firstName":"asus A8N DC MB R11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS0haaTBFVzJUOXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUjh5akhIN0NwTFE", "createdOn":"", "firstName":"asus EeePC 1000H REV 1.3G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUjh5akhIN0NwTFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT0gtMjM3ZG9VNG8", "createdOn":"", "firstName":"asus A8M REV 2.1 SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT0gtMjM3ZG9VNG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWlyZWV3Q25ETFk", "createdOn":"", "firstName":"asus A7V8X.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWlyZWV3Q25ETFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUxKYkVIRDBMYW8", "createdOn":"", "firstName":"asus A8F SC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUxKYkVIRDBMYW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib25QZTFUQ1hSZkE", "createdOn":"", "firstName":"asus A6J Intel 945PM schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib25QZTFUQ1hSZkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3F4MmY5Q2pjVm8", "createdOn":"", "firstName":"asus A8S MB rev 2.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3F4MmY5Q2pjVm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRU5mYVNnTDIxaW8", "createdOn":"", "firstName":"asus A8T.M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRU5mYVNnTDIxaW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQick5rTkt6WmdBSUk", "createdOn":"", "firstName":"asus A8N A8Dc.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQick5rTkt6WmdBSUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickVmY1lmMWV6Rm8", "createdOn":"", "firstName":"asus a8j.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickVmY1lmMWV6Rm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFhISWlIa1pqOG8", "createdOn":"", "firstName":"asus A8E A8S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFhISWlIa1pqOG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmFFOGVCMzM2eG8", "createdOn":"", "firstName":"asus A7T, A7M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmFFOGVCMzM2eG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHc3T1haM0dPRFU", "createdOn":"", "firstName":"asus A7S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHc3T1haM0dPRFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWVhdG92QWRKcFk", "createdOn":"", "firstName":"asus A7K.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWVhdG92QWRKcFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVFMcFN3RGhjYnc", "createdOn":"", "firstName":"asus A7J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVFMcFN3RGhjYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXBCdE5UcmoxTVE", "createdOn":"", "firstName":"asus A6KM R10 080205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXBCdE5UcmoxTVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNlFNTGVxcFk3RnM", "createdOn":"", "firstName":"asus A6G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNlFNTGVxcFk3RnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREtIb0Q2NVhabFE", "createdOn":"", "firstName":"asus 1000HE MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREtIb0Q2NVhabFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU0dMQ3BsQ0pfLVU", "createdOn":"", "firstName":"asus K42Jr.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU0dMQ3BsQ0pfLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXp2aUktbDlfX0k", "createdOn":"", "firstName":"Apple iphone 4s guide 7277 tr.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXp2aUktbDlfX0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTGhiblNVTnNHN3M", "createdOn":"", "firstName":"apple scheme apple macbook pro a1229 17 mb schemmantarom76.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTGhiblNVTnNHN3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXJCeUk5dnJhdFE", "createdOn":"", "firstName":"apple ipad air icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXJCeUk5dnJhdFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjQ2V05OcVAxOGc", "createdOn":"", "firstName":"apple ipad mini retina icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjQ2V05OcVAxOGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidW5UclB6VUlNb1k", "createdOn":"", "firstName":"apple ipad mini1 icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidW5UclB6VUlNb1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWEtMbVFqZUpHUUU", "createdOn":"", "firstName":"apple ipad2 icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWEtMbVFqZUpHUUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTQ3SlE3MzJidlk", "createdOn":"", "firstName":"apple ipad4 icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTQ3SlE3MzJidlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR0h0a0UzOTlPd2s", "createdOn":"", "firstName":"apple ipad3 icloud unlock by pasha4ur.png", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR0h0a0UzOTlPd2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS19OWGc3T3JvRDA", "createdOn":"", "firstName":"apple iPhone 3G N82 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS19OWGc3T3JvRDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlFjdl9sajZhQVU", "createdOn":"", "firstName":"apple iphone5s schematic2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlFjdl9sajZhQVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibzdIUHMzOU9jS0E", "createdOn":"", "firstName":"apple iPhone 3GS N88 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibzdIUHMzOU9jS0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzQzUWs0RGlJUkU", "createdOn":"", "firstName":"apple iPhone 4 N90 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzQzUWs0RGlJUkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM0g3ZV9qNU5FdkE", "createdOn":"", "firstName":"apple iPhone 4S N94 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM0g3ZV9qNU5FdkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN2tSOEROeTRYT2s", "createdOn":"", "firstName":"apple iPhone 2G M86 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN2tSOEROeTRYT2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiREdlTGFiRjZmMWM", "createdOn":"", "firstName":"apple iPad mini schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiREdlTGFiRjZmMWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRG5TaC1zVTlyLWs", "createdOn":"", "firstName":"apple iPad 4 Schematic.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRG5TaC1zVTlyLWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieDFzdkRkWTIzaGs", "createdOn":"", "firstName":"apple iPad 3 J2 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieDFzdkRkWTIzaGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTEplWVNLRnk0Tm8", "createdOn":"", "firstName":"apple iPad 2 K94 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTEplWVNLRnk0Tm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX19VR0dQRlJSWEE", "createdOn":"", "firstName":"apple iPad VICE schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX19VR0dQRlJSWEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidGtzVGFuQmpIalk", "createdOn":"", "firstName":"apple iPhone 5 N41 schematics.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidGtzVGFuQmpIalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiekJiWXdEZ3RfcjQ", "createdOn":"", "firstName":"hp  HP Compaq 6910P   Compal LA 3262P IBT00 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiekJiWXdEZ3RfcjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYzFpUUNXdnA1UDQ", "createdOn":"", "firstName":"apple MacBook Pro A1278 (J30, 820 3115).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYzFpUUNXdnA1UDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGR3Z3hBQk1XVXc", "createdOn":"", "firstName":"dell QUANTA FM9C ATI PARK REV A1A 06OUT2009.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGR3Z3hBQk1XVXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibV9JN1JkTnhsXzg", "createdOn":"", "firstName":"dell Inspiron N4030 WISTRON BERRY DG15 DISCRETE UMA 09909 SA REV X00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibV9JN1JkTnhsXzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMzExM1RSRVplcXc", "createdOn":"", "firstName":"hp  HP G42 G62 CQ42 QUANTA AX1 INTEL DA0AX1MB6H1 REV 1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMzExM1RSRVplcXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNm9wMmNpUFhZS1E", "createdOn":"", "firstName":"toshiba Toshiba Satellite C850 C855 INVENTEC DAKAR10F DAKAR10FG 6050A2491301 MB A02 MP 20110905.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNm9wMmNpUFhZS1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnZJckJUZFgwU2s", "createdOn":"", "firstName":"toshiba Toshiba Satellite C850 C855 INVENTEC DAKAR10F DAKAR10FG 6050A2491301 MB A02 MP 20120323.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnZJckJUZFgwU2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVFoRkVwcjZSeE0", "createdOn":"", "firstName":"apple  Q16C  MARIAS STD EVT Q16C 051 6929 Rev03 Macbook Q16C  MARIAS STD EVT Q16C 051 6929 Rev03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVFoRkVwcjZSeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3phZmZrM2IxNVE", "createdOn":"", "firstName":"apple  Q16C  MARIAS STD EVT Q16C 051 6929 Rev03 Macbook Q16C  MARIAS STD EVT Q16C 051 6929 Rev03.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3phZmZrM2IxNVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUzBiLTluMEM5X1k", "createdOn":"", "firstName":"apple Powerbook G4 A1139 BOZEMAN EVT Q41C 051 6839 Rev02 Powerbook G4 A1139 BOZEMAN EVT Q41C 051 6839 Rev02.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUzBiLTluMEM5X1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlhZNGE1UDB6VGs", "createdOn":"", "firstName":"apple Powerbook G4 A1139 MLB PB17 051 6839 RevE Powerbook G4 A1139 MLB PB17 051 6839 RevE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlhZNGE1UDB6VGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakJlbl9kbWI5d0U", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevG Macbook Q41B  MLB PB17 051 6694 RevG.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakJlbl9kbWI5d0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicm1lby11dmFIVkE", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevC Macbook Q41B  MLB PB17 051 6694 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicm1lby11dmFIVkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQVRiRUFlMGdsYXc", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevB Macbook Q41B  MLB PB17 051 6694 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQVRiRUFlMGdsYXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSHl2blRjZzNUeU0", "createdOn":"", "firstName":"apple Powerbook G4 A1085 SINCLAIR MLB Q41A 051 6598 Rev01 Powerbook G4 A1085 SINCLAIR MLB Q41A 051 6598 Rev01.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSHl2blRjZzNUeU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXhUMEE5RXFVVkU", "createdOn":"", "firstName":"apple Powerbook G4 A1138 MARIAS STD Q16C 051 6929 RevC Powerbook G4 A1138 MARIAS STD Q16C 051 6929 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXhUMEE5RXFVVkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQTBseHFmclFQOUE", "createdOn":"", "firstName":"apple  Q16A MLB PB15 051 6570 RevB Macbook Q16A  MLB PB15 051 6570 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQTBseHFmclFQOUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnhjWDc4T2hNZ00", "createdOn":"", "firstName":"apple Powerbook G4 A1095 MLB PB15 051 6809 RevB Powerbook G4 A1095 MLB PB15 051 6809 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnhjWDc4T2hNZ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXJBZmFpMzVEdTA", "createdOn":"", "firstName":"apple Powerbook G4 A1046 MLB PB15 051 6338 RevC Powerbook G4 A1046 MLB PB15 051 6338 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXJBZmFpMzVEdTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUDltZmVsVlgwSEk", "createdOn":"", "firstName":"apple  Q16 MLB PB15 051 6680 RevE Macbook Q16  MLB PB15 051 6680 RevE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUDltZmVsVlgwSEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmdfb01naFdWc0U", "createdOn":"", "firstName":"apple Powerbook G4 A1106 MLB PB15 051 6680 RevA Powerbook G4 A1106 MLB PB15 051 6680 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmdfb01naFdWc0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSzMzVENUc1VXeHc", "createdOn":"", "firstName":"apple Macbook Unibody A1286 MBP15 MLB 051 7546 18.08.2008 RevA.0.0 Macbook Unibody A1286 MBP15 MLB 051 7546 18.08.2008 RevA.0.0.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSzMzVENUc1VXeHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielVCN0tST2RsaTA", "createdOn":"", "firstName":"apple Macbook Pro A1226 MLB MBP15 051 7225 24.04.2007 RevA.0.0 Macbook Pro A1226 MLB MBP15 051 7225 24.04.2007 RevA.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielVCN0tST2RsaTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR1RrQk1hcDRHVVE", "createdOn":"", "firstName":"apple Macbook Pro A1150 Mullet M1 MLB DVT 051 6941 Rev12.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR1RrQk1hcDRHVVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXM5UDQ4ZFYxdXM", "createdOn":"", "firstName":"apple Macbook Pro A1150  MLB M1 051 6941 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXM5UDQ4ZFYxdXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVDdvWEdOVElQTDA", "createdOn":"", "firstName":"apple Macbook Pro A1212 MACBOOK PRO17 051 7164 Rev06004 Macbook Pro A1212 MACBOOK PRO17 051 7164 Rev06004.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVDdvWEdOVElQTDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid3F1U0t1RlhRNEE", "createdOn":"", "firstName":"apple Powerbook G4 MLB PB17 INCH 051 6531 RevB Powerbook G4 MLB PB17 INCH 051 6531 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid3F1U0t1RlhRNEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzBuMzVrenVmeUE", "createdOn":"", "firstName":"apple Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0 Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzBuMzVrenVmeUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNmtrTS1uSWlHTnc", "createdOn":"", "firstName":"apple iMAC Aluminium A1225 M78 EVT MLB 051 7229 Rev28.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNmtrTS1uSWlHTnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGxXbjZwZHhFWnM", "createdOn":"", "firstName":"apple iMAC A1225 M78 DVT MLB 051 7229 Rev33.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGxXbjZwZHhFWnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3BiLWZxM3V4Vk0", "createdOn":"", "firstName":"apple iMAC Aluminium A1224 M72 EVT MLB 051 7228 Rev27.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3BiLWZxM3V4Vk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2VJLXBkTGNHakE", "createdOn":"", "firstName":"apple iMAC G5 A1224 M72 DVT MLB 051 7228 Rev34.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2VJLXBkTGNHakE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQick51ZkE5Z0JQMXM", "createdOn":"", "firstName":"apple iMAC G4 SANTANA M51 MLB 051 7039 RevH.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQick51ZkE5Z0JQMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibGVaeV9rWllDTHc", "createdOn":"", "firstName":"apple IMAC G5  MLB PB15 051 6338 RevC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibGVaeV9rWllDTHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibk1Rck9ZbVdsdEE", "createdOn":"", "firstName":"apple iMAC G5 iSight IMG5 17 MLB 051 6790 RevE 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibk1Rck9ZbVdsdEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSU0yVERmR1FkTms", "createdOn":"", "firstName":"apple Macbook Pro A1150 M9 MLB PVT 051 7023 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSU0yVERmR1FkTms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFM3V3RfYVR0UVE", "createdOn":"", "firstName":"apple LEFT I O AUDIO M9 PVT 051 7066 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFM3V3RfYVR0UVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVg1YWpZRU45LTA", "createdOn":"", "firstName":"apple IR M9 PVT 051 7031 RevA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVg1YWpZRU45LTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2tURGplMm81TEE", "createdOn":"", "firstName":"apple PowerBook G4 A1106 MLB PB15 051 6680 RevB PowerBook G4 A1106 MLB PB15 051 6680 RevB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2tURGplMm81TEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWNaZnVDYWtFUm8", "createdOn":"", "firstName":"apple Macbook Air A1370 K78 MLB 051 8871 Rev2.5.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWNaZnVDYWtFUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXgxdlVUQWllVEE", "createdOn":"", "firstName":"apple k78 PCB LIO EVT 1 051 8925 Rev400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXgxdlVUQWllVEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRkRjaVl1WWFXUUk", "createdOn":"", "firstName":"apple Macbook Air A1370 K78 LIO 051 8925 r400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRkRjaVl1WWFXUUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYkVFeE5MU0p3NGs", "createdOn":"", "firstName":"apple Macbook Air A1370 K78 MLB 051 8871 r250.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYkVFeE5MU0p3NGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGtUdXliRzQyTEE", "createdOn":"", "firstName":"asus A6M Rev.2.0 Schematic Diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGtUdXliRzQyTEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWpiRm04NkhEb0E", "createdOn":"", "firstName":"dell p10s daoss5cg0 a00 0223.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWpiRm04NkhEb0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2g4M0F1ZVNDRm8", "createdOn":"", "firstName":"dell D630 INTEGRATED D630 INTEGRATED.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2g4M0F1ZVNDRm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVW02Nzd6Q1doUmc", "createdOn":"", "firstName":"toshiba C600 Inventec Calcuta 10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVW02Nzd6Q1doUmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWxkUWNsZ2MwN0E", "createdOn":"", "firstName":"toshiba manual tecra m3 40.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWxkUWNsZ2MwN0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidUxZU2FLQmszMVk", "createdOn":"", "firstName":"dell  N301Z N301Z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidUxZU2FLQmszMVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUUwS2d6NllTRms", "createdOn":"", "firstName":"apple K94 CHOPIN MLB 820 3069 A iPad2 schematic, circuit diagram.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUUwS2d6NllTRms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib2tzdnpnTE5FbjQ", "createdOn":"", "firstName":"apple 0e94c K94 CHOPIN MLB 820 3069 A  iPad2 820 3069 A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib2tzdnpnTE5FbjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZW56cG81RzgtcG8", "createdOn":"", "firstName":"apple  VICE MLB 820 2740 05 BOTTOM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZW56cG81RzgtcG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXE0TkxtU05PcmM", "createdOn":"", "firstName":"apple  VICE MLB 820 2740 05 TOP.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXE0TkxtU05PcmM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT2hPTEJQT3E3VlE", "createdOn":"", "firstName":"apple  VICE MLB 820 2740 A iPad1 www.mycomp.su .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT2hPTEJQT3E3VlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMFBxUmE5anB3ZlU", "createdOn":"", "firstName":"hp  cq40 unlocked.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMFBxUmE5anB3ZlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOFRLMkFzSUtlVzQ", "createdOn":"", "firstName":"dell 17R(N7010) QUANTA UM9 UMA QUANTA UM9 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOFRLMkFzSUtlVzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUNWVWlrRGw2eG8", "createdOn":"", "firstName":"toshiba QUANTA TE5D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUNWVWlrRGw2eG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZV9VdVZQZEdIQTg", "createdOn":"", "firstName":"asus f5vl hyx[64393a1].pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZV9VdVZQZEdIQTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFZXTmFqbElzazA", "createdOn":"", "firstName":"asus P80VC.A.Q.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFZXTmFqbElzazA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWZ5N2tkdFNKWWs", "createdOn":"", "firstName":"dell M11x13 LA 6961P LA 6961P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWZ5N2tkdFNKWWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNTB5SHc1ZzBMZjQ", "createdOn":"", "firstName":"asus U35JC.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNTB5SHc1ZzBMZjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT1NBU1JDVUpMbFk", "createdOn":"", "firstName":"asus  900pv.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT1NBU1JDVUpMbFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV3ZHcDBFTFE2NTQ", "createdOn":"", "firstName":"dell VOSTRO V130 WISTRON RYU2 13 UMA WISTRON RYU2 13 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV3ZHcDBFTFE2NTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibjFHV01uYUtRaDA", "createdOn":"", "firstName":"dell Inspiron M4040 Enrico14 AMD Enrico14 AMD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibjFHV01uYUtRaDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZGxGYm5iQ0dJNEU", "createdOn":"", "firstName":"asus P1000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZGxGYm5iQ0dJNEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTkluLS1kaS16T1E", "createdOn":"", "firstName":"asus 900SD MB.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTkluLS1kaS16T1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN1Z3cnRUdVNOZ0k", "createdOn":"", "firstName":"toshiba Toshiba Satellite L650 L650D BERLIN 10G BL10G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN1Z3cnRUdVNOZ0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajl4N3BxNnJUTUU", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite C650 INVENTEC Manaus 10AD .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajl4N3BxNnJUTUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia0gxNU9GWjB2RW8", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite C650 MANAUS 10AD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia0gxNU9GWjB2RW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibHAzVWNxX1NYZTQ", "createdOn":"", "firstName":"toshiba TOSHIBA Satellite C650 Manaus 10 CS BUILD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibHAzVWNxX1NYZTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidkJWS0F6U2dReFU", "createdOn":"", "firstName":"apple M1 DVT SIDEBURN 051 6990.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidkJWS0F6U2dReFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidU1kZTc0TmxTSjQ", "createdOn":"", "firstName":"apple Powerbook G4 A1095 MLB PB15 051 6809 RevB PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidU1kZTc0TmxTSjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQickl3YWZZQ2tJVms", "createdOn":"", "firstName":"apple PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQickl3YWZZQ2tJVms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2E5SjVXalJCalk", "createdOn":"", "firstName":"apple  Q16A MLB PB15 051 6570 RevB PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2E5SjVXalJCalk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFRGbUFOdmU1RlU", "createdOn":"", "firstName":"apple Powerbook G4 A1106 MLB PB15 051 6680 RevA PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFRGbUFOdmU1RlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRFVEMlBHdzl6WU0", "createdOn":"", "firstName":"apple PowerBook G4 A1106 MLB PB15 051 6680 RevB PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRFVEMlBHdzl6WU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNnZzQzNxbTIzamc", "createdOn":"", "firstName":"apple Powerbook G4 A1046 MLB PB15 051 6338 RevC PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNnZzQzNxbTIzamc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2JBb0tOV1ltQ28", "createdOn":"", "firstName":"apple  Q16 MLB PB15 051 6680 RevE PB15 USB BRD 051 6688.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2JBb0tOV1ltQ28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmpHcjJadjI4dkk", "createdOn":"", "firstName":"apple Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0 M87 LEFT ALS 051 7462.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmpHcjJadjI4dkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmQxTmVKbmdEcGc", "createdOn":"", "firstName":"apple M1 LIO AUDIO 051 6951 REV C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmQxTmVKbmdEcGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWlBkRFE0dkFBc2s", "createdOn":"", "firstName":"apple Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0 M87 PVT LIO 051 7447.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWlBkRFE0dkFBc2s/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjdkMzdTaVl6d3M", "createdOn":"", "firstName":"apple Powerbook G4 A1138 MARIAS STD Q16C 051 6929 RevC Q16C SPRINT 051 6846.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjdkMzdTaVl6d3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHlLS1J5YUlrR1k", "createdOn":"", "firstName":"apple  Q16C  MARIAS STD EVT Q16C 051 6929 Rev03 Q16C SPRINT 051 6846.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHlLS1J5YUlrR1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGVJVXJFa1VzSVU", "createdOn":"", "firstName":"apple Macbook Pro A1226 MLB MBP15 051 7225 24.04.2007 RevA.0.0 MBP15 IRB MBP15 051 7287.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGVJVXJFa1VzSVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLVZLTlAxVjVWNUE", "createdOn":"", "firstName":"apple Macbook Unibody A1286 MBP15 MLB 051 7546 18.08.2008 RevA.0.0 MBP15 IRB MBP15 051 7287.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLVZLTlAxVjVWNUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib29SSEFUbUVSVE0", "createdOn":"", "firstName":"apple M1 LIO AUDIO 051 6951 REV A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib29SSEFUbUVSVE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0Z2ZHJPTXdqY2c", "createdOn":"", "firstName":"apple Powerbook G4 A1085 SINCLAIR MLB Q41A 051 6598 Rev01 Q41A DINO USB 051 6600.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0Z2ZHJPTXdqY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiajYzUjNjdi1rbU0", "createdOn":"", "firstName":"apple Powerbook G4 A1139 BOZEMAN EVT Q41C 051 6839 Rev02 Q41C HARP 051 6852.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiajYzUjNjdi1rbU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibno1NHlRdlg5YnM", "createdOn":"", "firstName":"apple Powerbook G4 A1085 SINCLAIR MLB Q41A 051 6598 Rev01 Q41A DOB 051 6601 REV 01.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibno1NHlRdlg5YnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibXhqNDh5M2M2dTg", "createdOn":"", "firstName":"apple  Q16C  MARIAS STD EVT Q16C 051 6929 Rev03 Q16C TATIC EVT 051 6847.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibXhqNDh5M2M2dTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2VTLWMtZ3RpaFE", "createdOn":"", "firstName":"apple Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0 M87 LED DRIVER BOARD 051 7482.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2VTLWMtZ3RpaFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHJCOWdkcGZ2VFU", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevG PB17 AUDIO BRD PB17 051 6752.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHJCOWdkcGZ2VFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlpRMHdZZHkxM2M", "createdOn":"", "firstName":"apple Powerbook G4 MLB PB17 INCH 051 6531 RevB PB17 AUDIO BRD PB17 051 6752.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlpRMHdZZHkxM2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYXh5RTdGVmM0R3c", "createdOn":"", "firstName":"apple Powerbook G4 A1139 MLB PB17 051 6839 RevE PB17 AUDIO BRD PB17 051 6752.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYXh5RTdGVmM0R3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiX0ZsZzE2Ni11a2M", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevC PB17 AUDIO BRD PB17 051 6752.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiX0ZsZzE2Ni11a2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLUZreFBibFI3Tms", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevB PB17 AUDIO BRD PB17 051 6752.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLUZreFBibFI3Tms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFN3SlBtdzlsdGs", "createdOn":"", "firstName":"apple M72 IR BOARD 051 7279.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFN3SlBtdzlsdGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidElnUWU0RnNzb0E", "createdOn":"", "firstName":"apple  Q16A MLB PB15 051 6570 RevB PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidElnUWU0RnNzb0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaC1hZWNTdzV4TGs", "createdOn":"", "firstName":"apple Powerbook G4 A1046 MLB PB15 051 6338 RevC PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaC1hZWNTdzV4TGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZnJ0TXMxT1d6RVE", "createdOn":"", "firstName":"apple  Q16 MLB PB15 051 6680 RevE PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZnJ0TXMxT1d6RVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiY1FNNExkSmdFTEE", "createdOn":"", "firstName":"apple PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiY1FNNExkSmdFTEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVEgwUXhJMWZ2aFU", "createdOn":"", "firstName":"apple PowerBook G4 A1106 MLB PB15 051 6680 RevB PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVEgwUXhJMWZ2aFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2pkNW1YV0Q3OHM", "createdOn":"", "firstName":"apple Powerbook G4 A1095 MLB PB15 051 6809 RevB PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2pkNW1YV0Q3OHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkJHa3pQUDEwTFk", "createdOn":"", "firstName":"apple PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkJHa3pQUDEwTFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHExLWNwZlNJdGM", "createdOn":"", "firstName":"apple Powerbook G4 A1106 MLB PB15 051 6680 RevA PB15 LIO 051 6686 REV B.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHExLWNwZlNJdGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVdnM1hobEdlT0E", "createdOn":"", "firstName":"apple M1 SIDEBURN 051 6990.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVdnM1hobEdlT0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN0J0N3lnSTVRN2M", "createdOn":"", "firstName":"apple M72 M78 HOP DVT AUDIO BOARD 051 7265 Audio Board 051 7265.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN0J0N3lnSTVRN2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMkIwSGRLNDBEYTA", "createdOn":"", "firstName":"apple M72 M78 HOP EVT AUDIO BOARD 051 7246.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMkIwSGRLNDBEYTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTFIOFl4WjliUlk", "createdOn":"", "firstName":"apple Macbook Pro A1212 MACBOOK PRO17 051 7164 Rev06004 MACBOOK PRO 17 LIO AUDIO 051 7165 RESOLVED.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTFIOFl4WjliUlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSkRXUnFkQmp1aGs", "createdOn":"", "firstName":"apple Powerbook G4 A1139 BOZEMAN EVT Q41C 051 6839 Rev02 Q41C FLUTE EVT 051 6850.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSkRXUnFkQmp1aGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0xfekh4RUZlUEE", "createdOn":"", "firstName":"apple Powerbook G4 A1139 BOZEMAN EVT Q41C 051 6839 Rev02 Q41C BASSOON 051 6851.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0xfekh4RUZlUEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2RLQ2oxNlA0YWs", "createdOn":"", "firstName":"apple Macbook Pro A1260 MBP 15 MLB TAUPO M87 051 7413 Rev16.0.0 M87 IR BOARD 051 7494.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2RLQ2oxNlA0YWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNS1kRzhwdElza1U", "createdOn":"", "firstName":"apple M1 DVT GOATEE DVT 051 7007.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNS1kRzhwdElza1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicEZDTmp1Qm9xU0k", "createdOn":"", "firstName":"apple Powerbook G4 A1139 MLB PB17 051 6839 RevE PB17 BKUP BATT RT USB PB17 051 6753.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicEZDTmp1Qm9xU0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYm8wampKNVJ3OVU", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevB PB17 BKUP BATT RT USB PB17 051 6753.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYm8wampKNVJ3OVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRVRiTUpyRGU1Nk0", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevC PB17 BKUP BATT RT USB PB17 051 6753.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRVRiTUpyRGU1Nk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRDR5QmNmeHZTZzA", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevG PB17 BKUP BATT RT USB PB17 051 6753.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRDR5QmNmeHZTZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMjBULTZxZnFzUDg", "createdOn":"", "firstName":"apple Powerbook G4 MLB PB17 INCH 051 6531 RevB PB17 BKUP BATT RT USB PB17 051 6753.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMjBULTZxZnFzUDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFVnc2Z3bHh5elU", "createdOn":"", "firstName":"apple Powerbook G4 A1139 MLB PB17 051 6839 RevE PB17 DC IN LT USB PB17 051 6474.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFVnc2Z3bHh5elU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkx6TWJHX1dYSVU", "createdOn":"", "firstName":"apple Powerbook G4 MLB PB17 INCH 051 6531 RevB PB17 DC IN LT USB PB17 051 6474.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkx6TWJHX1dYSVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWpwNWFNMjNJMWs", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevC PB17 DC IN LT USB PB17 051 6474.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWpwNWFNMjNJMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR21FRHVxMkFZSTA", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevB PB17 DC IN LT USB PB17 051 6474.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR21FRHVxMkFZSTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3Q4c1lNRjV3U3c", "createdOn":"", "firstName":"apple  Q41B MLB PB17 051 6694 RevG PB17 DC IN LT USB PB17 051 6474.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3Q4c1lNRjV3U3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU1J5cUR6dTZ3SEU", "createdOn":"", "firstName":"apple M51 HEATSINK AMBIENT TEMP SENSOR 051 7127.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU1J5cUR6dTZ3SEU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZWRTS05oVTlYZXM", "createdOn":"", "firstName":"apple Powerbook G4 A1095 MLB PB15 051 6809 RevB PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZWRTS05oVTlYZXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0RJaDB3UTdYNTQ", "createdOn":"", "firstName":"apple  Q16A MLB PB15 051 6570 RevB PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0RJaDB3UTdYNTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmx3UHRrcjZHczQ", "createdOn":"", "firstName":"apple Powerbook G4 A1046 MLB PB15 051 6338 RevC PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmx3UHRrcjZHczQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1RIRjBkbVk4R2M", "createdOn":"", "firstName":"apple PowerBook G4 A1106 MLB PB15 051 6680 RevB PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1RIRjBkbVk4R2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUkdhbGpsZzJ3ZDg", "createdOn":"", "firstName":"apple Powerbook G4 A1106 MLB PB15 051 6680 RevA PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUkdhbGpsZzJ3ZDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDJGLTVnbUtHeDQ", "createdOn":"", "firstName":"apple PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDJGLTVnbUtHeDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUlkdVRxYkxIc2M", "createdOn":"", "firstName":"apple  Q16 MLB PB15 051 6680 RevE PB15 RUM 051 6702.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUlkdVRxYkxIc2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidHk3VUI0T2YzMms", "createdOn":"", "firstName":"apple Macbook Pro A1226 MLB MBP15 051 7225 24.04.2007 RevA.0.0 MBP15 LIO MBP15 051 7226.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidHk3VUI0T2YzMms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZlBYVTQ3V2pQVDQ", "createdOn":"", "firstName":"apple  Q16A MLB PB15 051 6570 RevB PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZlBYVTQ3V2pQVDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjJibDFQZDZlVVk", "createdOn":"", "firstName":"apple Powerbook G4 A1046 MLB PB15 051 6338 RevC PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjJibDFQZDZlVVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVXhLcmRhS1c1NTQ", "createdOn":"", "firstName":"apple Powerbook G4 A1095 MLB PB15 051 6809 RevB PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVXhLcmRhS1c1NTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUXBzckdBY1dIV0E", "createdOn":"", "firstName":"apple PowerBook G4 A1106 MLB PB15 051 6680 RevB PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUXBzckdBY1dIV0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTmR1TE1ZUGZacWc", "createdOn":"", "firstName":"apple  Q16 MLB PB15 051 6680 RevE PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTmR1TE1ZUGZacWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnVmTFY4Vjc0X3c", "createdOn":"", "firstName":"apple PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnVmTFY4Vjc0X3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNWF1NlZ2WXhlYTg", "createdOn":"", "firstName":"apple Macbook Unibody A1286 MBP15 MLB 051 7546 18.08.2008 RevA.0.0 MBP15 LIO MBP15 051 7226.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNWF1NlZ2WXhlYTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWtoMjBQMHR5MHM", "createdOn":"", "firstName":"apple Powerbook G4 A1106 MLB PB15 051 6680 RevA PB15 LIO 051 6686 REV A.PDF", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWtoMjBQMHR5MHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQmNFMlJ4SDVYME0", "createdOn":"", "firstName":"apple M1 DVT AUDIO LEFT IO BOARD 051 6951.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQmNFMlJ4SDVYME0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnJVU29YMnFfZWc", "createdOn":"", "firstName":"apple IMG5 17 DC DC BOARD 051 6869 REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnJVU29YMnFfZWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmltZDRNaXVuNWc", "createdOn":"", "firstName":"apple Macbook Pro A1226 MLB MBP15 051 7225 24.04.2007 RevA.0.0 MBP15 LED BOARD MBP15 051 7271.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmltZDRNaXVuNWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTFVpZFBTcTBUdUk", "createdOn":"", "firstName":"apple Macbook Unibody A1286 MBP15 MLB 051 7546 18.08.2008 RevA.0.0 MBP15 LED BOARD MBP15 051 7271.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTFVpZFBTcTBUdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZTQyOVpwYmNaTE0", "createdOn":"", "firstName":"apple  Q16C  MARIAS STD EVT Q16C 051 6929 Rev03 Q16C FLASH 051 6849.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZTQyOVpwYmNaTE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXFqMklFOUhYNWc", "createdOn":"", "firstName":"apple Powerbook G4 A1138 MARIAS STD Q16C 051 6929 RevC Q16C FLASH 051 6849.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXFqMklFOUhYNWc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVHc0N0xyY3c2b2M", "createdOn":"", "firstName":"dell  mini 1018 1012 compal la 6501p la 5732P pim10 Nim10  mini 1018 1012 compal la 6501p la 5732P pim10 Nim10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVHc0N0xyY3c2b2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWkJQWmpnemNRZTA", "createdOn":"", "firstName":"dell Latitude E6320 LA 6611P LA 6611P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWkJQWmpnemNRZTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUUZhY2JzZ3hHN0k", "createdOn":"", "firstName":"toshiba Toshiba Satellite P750 COMPAL LA 6832P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUUZhY2JzZ3hHN0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQid0FEQno4bE1lanM", "createdOn":"", "firstName":"dell New Figure N4050 新图N4050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQid0FEQno4bE1lanM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaVdHeWktaEpNc2c", "createdOn":"", "firstName":"asus 1015P Schematic Diagram 1.2G 1015P IO BOARD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaVdHeWktaEpNc2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRTFJT0YzMURrUTg", "createdOn":"", "firstName":"asus 1015P Rev1.2G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRTFJT0YzMURrUTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0U0ektaNWNId0U", "createdOn":"", "firstName":"dell  915 power  915 power.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0U0ektaNWNId0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWENoVU5oT2NpejA", "createdOn":"", "firstName":"toshiba TOSHIBA SATELLITE L750 QUANTA BLBD.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWENoVU5oT2NpejA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMHhRSlJpamp4SGc", "createdOn":"", "firstName":"dell  PP41L PP41L.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMHhRSlJpamp4SGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU2ZMVHVtckdxYnc", "createdOn":"", "firstName":"toshiba Toshiba Tecra 2100 FMNSY2 VP TE2100 4.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU2ZMVHVtckdxYnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFVPc1Z0Q3Y4Sjg", "createdOn":"", "firstName":"toshiba Toshiba Tecra 2100 FMNSY2 VP TE2100 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFVPc1Z0Q3Y4Sjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2RYSURzN2diZDA", "createdOn":"", "firstName":"toshiba Toshiba Tecra 2100 FMNSY2 VP TE2100 3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2RYSURzN2diZDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVN4SkFzYjNGM1E", "createdOn":"", "firstName":"toshiba Toshiba Tecra 2100 FMNSY2 VP TE2100 1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVN4SkFzYjNGM1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMW53eWFoVkNnbXM", "createdOn":"", "firstName":"asus EEEPC 1008ha Power Board.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMW53eWFoVkNnbXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiN01HTlpaVlF1OTA", "createdOn":"", "firstName":"asus EEEPC 1008ha Rev 1.3G.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiN01HTlpaVlF1OTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNDAwRnB6Ym1tZDg", "createdOn":"", "firstName":"dell XPS L502X QUANTA GM6C QUANTA GM6C.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNDAwRnB6Ym1tZDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ09uTVFCZlRxY2c", "createdOn":"", "firstName":"dell Inspiron M5030 Intel Inspiron M5030 Intel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ09uTVFCZlRxY2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYU44YjRuWnM4UVU", "createdOn":"", "firstName":"dell Inspiron M5030 Intel Inspiron M5030 Intel.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYU44YjRuWnM4UVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0l6bldVUGtkUDQ", "createdOn":"", "firstName":"dell Inspiron M5030 AMD Inspiron M5030.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0l6bldVUGtkUDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEdHOWlkek9YeE0", "createdOn":"", "firstName":"asus G1S 2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEdHOWlkek9YeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSXhpcWRGYWRndGc", "createdOn":"", "firstName":"toshiba Toshiba Satellite L500 L505 COMPAL LA 5322.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSXhpcWRGYWRndGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaF9lUjVIYkNRV0U", "createdOn":"", "firstName":"dell Studio 14z Studio 14z.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaF9lUjVIYkNRV0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWUF3ZWd5Mk82Uzg", "createdOn":"", "firstName":"dell M11XR2 M11XR2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWUF3ZWd5Mk82Uzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGRFM2YteHp6Qlk", "createdOn":"", "firstName":"dell M5110 M5110.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGRFM2YteHp6Qlk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia2lzSVg0T3RDN2M", "createdOn":"", "firstName":"dell INSPIRON 1370.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia2lzSVg0T3RDN2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWVlkTUJGRm5RRHM", "createdOn":"", "firstName":"dell 1370 La 5541P la 5541P.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWVlkTUJGRm5RRHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaXlvejVqLWVZUm8", "createdOn":"", "firstName":"toshiba TOSHIBA SATELLITE A665 S6050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaXlvejVqLWVZUm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEtxN2JxUDhnWjQ", "createdOn":"", "firstName":"dell Studio 1435 UMA Studio 1435 UMA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEtxN2JxUDhnWjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVk1fWTRVLUZ4eTg", "createdOn":"", "firstName":"dell Studio 1435 Discrete Studio 1435 Discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVk1fWTRVLUZ4eTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDk4M20xNlhlcFE", "createdOn":"", "firstName":"dell Latitude E6500 Latitude E6500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDk4M20xNlhlcFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicDBxQjdtM1doS00", "createdOn":"", "firstName":"dell +Mini+1018 Mini 1018.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicDBxQjdtM1doS00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZkNkTzl5RjVwVFE", "createdOn":"", "firstName":"dell Mini 1018 Mini 1018.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZkNkTzl5RjVwVFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWmdMM3FaeWktbzA", "createdOn":"", "firstName":"dell Latitude E6400 Discrete Latitude E6400 Discrete.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWmdMM3FaeWktbzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVJneE9fTTllSEE", "createdOn":"", "firstName":"dell Inspiron 1464 1564 1764 Inspiron 1464 1564 1764.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVJneE9fTTllSEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3NYd292YUJEdTg", "createdOn":"", "firstName":"dell Inspiron 14 N4050 intel alone significantly DV14 HR MB Inspiron 14 N4050 intel独显.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3NYd292YUJEdTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTVplSW1nTmk0MWM", "createdOn":"", "firstName":"dell Wistron DB13 DIS Wistron DB13 DIS.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTVplSW1nTmk0MWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM1lreGtnQ2ZmT3c", "createdOn":"", "firstName":"dell Latitude E5500.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM1lreGtnQ2ZmT3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWNSeUVWQ3pZelE", "createdOn":"", "firstName":"dell Inspiron 1750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWNSeUVWQ3pZelE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVBDMUphLTM1cEE", "createdOn":"", "firstName":"toshiba Satellite P300 P305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVBDMUphLTM1cEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMEc2cWJNcTNnSTg", "createdOn":"", "firstName":"toshiba Satellite A200 MW10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMEc2cWJNcTNnSTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieEYyV3JvejNPNk0", "createdOn":"", "firstName":"toshiba Satellite A200 MW10M.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieEYyV3JvejNPNk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU44RWt5LVlNYVE", "createdOn":"", "firstName":"asus M52V (G60VX) PEGATRON M52V (G60VX).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU44RWt5LVlNYVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibUM4QUs3WV83Wms", "createdOn":"", "firstName":"dell Mini 1210 Mini 1210.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibUM4QUs3WV83Wms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiakNKckczWGt3TDg", "createdOn":"", "firstName":"dell Mini1011(10v) Mini1011(10v).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiakNKckczWGt3TDg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmNJOFZPTll2dG8", "createdOn":"", "firstName":"dell Mini11 Mini11.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmNJOFZPTll2dG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicnF1N2d0QWpuWUE", "createdOn":"", "firstName":"dell Mini10 Mini10.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicnF1N2d0QWpuWUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaFMxTW1zQk9JNWM", "createdOn":"", "firstName":"dell N3010(UMA) N3010(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaFMxTW1zQk9JNWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUS04MW04R3hWNTA", "createdOn":"", "firstName":"dell N3010(UMA) N3010(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUS04MW04R3hWNTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWtWb1JyMTRFc2c", "createdOn":"", "firstName":"dell XPS M2010 XPS M2010.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWtWb1JyMTRFc2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWjlZcW9hVFdxcWM", "createdOn":"", "firstName":"dell M4010 (AMD UMA) M4010 (AMD UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWjlZcW9hVFdxcWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSk5kOS13bW5mN1U", "createdOn":"", "firstName":"dell XPS1730 XPS1730.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSk5kOS13bW5mN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSEVYb1psX1pFR2M", "createdOn":"", "firstName":"dell Precision M6500 XM2 XM2.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSEVYb1psX1pFR2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1R3TUdraklYM1E", "createdOn":"", "firstName":"dell Precision M6400 XM1 XM1.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1R3TUdraklYM1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS2JyWHpzcklfYTg", "createdOn":"", "firstName":"dell Studio XPS 1645 Studio XPS 1645.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS2JyWHpzcklfYTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHhFdVZjRzEtWDQ", "createdOn":"", "firstName":"asus Z96Jm.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHhFdVZjRzEtWDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3d6UGU0cnF1SzA", "createdOn":"", "firstName":"asus Z96J.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3d6UGU0cnF1SzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3ozVHl6UHJMVTA", "createdOn":"", "firstName":"asus Z96H.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3ozVHl6UHJMVTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidXJweUFCdWNoOUU", "createdOn":"", "firstName":"asus Z96FM.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidXJweUFCdWNoOUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSnA0NnRIRXlYZW8", "createdOn":"", "firstName":"asus Z96F.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSnA0NnRIRXlYZW8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQUg1cnNiYXRMcTQ", "createdOn":"", "firstName":"asus Z96S.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQUg1cnNiYXRMcTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTS1BMjJXS25OZms", "createdOn":"", "firstName":"asus Z97V.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTS1BMjJXS25OZms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTTNxU3o1TnpabjA", "createdOn":"", "firstName":"dell Insprion 17R (N7010).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTTNxU3o1TnpabjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMWxVTlFVWUlaNHc", "createdOn":"", "firstName":"toshiba Toshiba Satellite M305 M305D U400D U405 U405D U400D.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMWxVTlFVWUlaNHc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibEwwd04wMXBpWkU", "createdOn":"", "firstName":"toshiba Toshiba X200X205, P200P205.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibEwwd04wMXBpWkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaUV3cmg4Mm1vZzg", "createdOn":"", "firstName":"toshiba Toshiba Satellite T110 T130 T135.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaUV3cmg4Mm1vZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWl0QTVMRGYtQm8", "createdOn":"", "firstName":"toshiba NB300 305.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWl0QTVMRGYtQm8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielpsbDY5R2NWaGM", "createdOn":"", "firstName":"toshiba TOSHIBA AC100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielpsbDY5R2NWaGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMW9RWU5XVDdya0E", "createdOn":"", "firstName":"dell N4050 N4050.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMW9RWU5XVDdya0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibG1mY0lVMGRpVVU", "createdOn":"", "firstName":"dell Latitude E6410 (UMA) Latitude E6410 (UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibG1mY0lVMGRpVVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHZDU3VGdTZuUG8", "createdOn":"", "firstName":"dell Latitude E6410 (Discrete) Latitude E6410 (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHZDU3VGdTZuUG8/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieGRzLUFrUTJFX28", "createdOn":"", "firstName":"dell Latitude E6510 (Discrete) Latitude E6510 (Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieGRzLUFrUTJFX28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOWFVYlJVdTh6Y0U", "createdOn":"", "firstName":"dell Latitude E6510 Latitude E6510.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOWFVYlJVdTh6Y0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZG05NWMzSEF1Zkk", "createdOn":"", "firstName":"dell Studio XPS 1640 RM3 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZG05NWMzSEF1Zkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1FEMlc5akJua0k", "createdOn":"", "firstName":"dell N4010(UMA) N4010(UMA).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1FEMlc5akJua0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibkxwOThOMUhnS2M", "createdOn":"", "firstName":"dell N4010(Discrete) N4010(Discrete).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibkxwOThOMUhnS2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic3JGTTYzZTY5X0k", "createdOn":"", "firstName":"dell Adamo 13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic3JGTTYzZTY5X0k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTm1qaWZPVDNkRnc", "createdOn":"", "firstName":"asus 5327 ASUS A8H  TroubleshootingGuide .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTm1qaWZPVDNkRnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYllCTnRIbF9PdUk", "createdOn":"", "firstName":"toshiba C660 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYllCTnRIbF9PdUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib1FBSG5JRTNmYnM", "createdOn":"", "firstName":"dell VOSTRO 1014 VOSTRO 1014 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib1FBSG5JRTNmYnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidE5JM1k5VlhzdEE", "createdOn":"", "firstName":"toshiba L645, L650.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidE5JM1k5VlhzdEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT3RIdE9TZElmMDQ", "createdOn":"", "firstName":"dell Alienware M17x .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT3RIdE9TZElmMDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieFh5YzR3UlJ1RlE", "createdOn":"", "firstName":"dell STUDIO M1330 M1330 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieFh5YzR3UlJ1RlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVJMZl9qYWxSNVk", "createdOn":"", "firstName":"dell STUDIO 1450 1458 1450 1458 .pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVJMZl9qYWxSNVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEFTUU9TZjUxckk", "createdOn":"", "firstName":"dell VOSTRO V13 VOSTRO V13.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEFTUU9TZjUxckk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVFFBQk9VVWZmZ0E", "createdOn":"", "firstName":"dell VOSTRO 1510(ICH8) 1510(ICH8).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVFFBQk9VVWZmZ0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTk1jV2VoRml2WkU", "createdOn":"", "firstName":"asus K42JR MB R20 ER 1112 1822.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTk1jV2VoRml2WkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNkpaN1NMcF9YWGs", "createdOn":"", "firstName":"hp  HP+CQ32.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNkpaN1NMcF9YWGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM3BEZlJjaWF3VGM", "createdOn":"", "firstName":"dell VOSTRO 3450 14R N4110 DDR3 V02A DIS MB A01 20110119.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM3BEZlJjaWF3VGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSUE4NjBFS0Y4UGc", "createdOn":"", "firstName":"dell VOSTRO 3450 14R N4110 DDR3 V02A IO BOARD(NEC) 0120.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSUE4NjBFS0Y4UGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaGJOSFB5TmwtajQ", "createdOn":"", "firstName":"dell V13TL MB A01 schematic 0917 final.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaGJOSFB5TmwtajQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVUJJbFJhRFhlQkk", "createdOn":"", "firstName":"dell Studio 1435 1535 QUANTA FM6 DISCRETE REV 3A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVUJJbFJhRFhlQkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWlJS3hGd25scWM", "createdOn":"", "firstName":"dell Studio 1435 1535 QUANTA FM6 UMA REV 3B.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWlJS3hGd25scWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidjhjNEU0RTlES3M", "createdOn":"", "firstName":"dell Inspiron 640M WISTRON BERMUDA POWER SEQUENCE.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidjhjNEU0RTlES3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibFlLaTg5eTNUSFk", "createdOn":"", "firstName":"dell Inspiron 640M WISTRON BERMUDA.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibFlLaTg5eTNUSFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV2ZXbElSV2NxWVU", "createdOn":"", "firstName":"dell Inspiron N4020 N4030 Wistron DJ1 Montevina UMA N4020.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV2ZXbElSV2NxWVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUlIbUl3SHpvT1k", "createdOn":"", "firstName":"hp  HP G42 G62 G72 Compaq Presario CQ42 CQ62 QUANTA AX3 WINBLEDON AX3.5 DA0AX3MB6C2 REV1A.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUlIbUl3SHpvT1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSV9oZ1RSczFsZGM", "createdOn":"", "firstName":"asus Z96FM REV 1.0.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSV9oZ1RSczFsZGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWtSVF9TOXFOd2M", "createdOn":"", "firstName":"dell 1464 quanta UM6B UM3BcoreI3 1464 quanta UM6B UM3BcoreI3.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWtSVF9TOXFOd2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiU3pWOFdjdnluUU0", "createdOn":"", "firstName":"toshiba A300 GM45 (6050a2171301 mb a02).pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiU3pWOFdjdnluUU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXFLa0I1cjJFcGs", "createdOn":"", "firstName":"hp  HP Compaq 6730b 6735b Notebook Service.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXFLa0I1cjJFcGs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLXNLSEp2R2thekU", "createdOn":"", "firstName":"dell N5010 WISTRON Berry AMD Discrete UMA REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLXNLSEp2R2thekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGlZT0tJalRoZFk", "createdOn":"", "firstName":"dell N5010 WISTRON Berry AMD IO Board REV A00.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGlZT0tJalRoZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiSDNONmpHM0RxZk0", "createdOn":"", "firstName":"asus F3Jv Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiSDNONmpHM0RxZk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZFc5QmdGcVVHVnM", "createdOn":"", "firstName":"asus F3Sg Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZFc5QmdGcVVHVnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ0JRNHFVZzNGOXc", "createdOn":"", "firstName":"asus F3Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ0JRNHFVZzNGOXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiR2ZTQlhGUEdBM0U", "createdOn":"", "firstName":"asus F3L Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiR2ZTQlhGUEdBM0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmVFTVVyZ2s2c1k", "createdOn":"", "firstName":"asus F3Sa Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmVFTVVyZ2s2c1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXVuWmlBcUhuemc", "createdOn":"", "firstName":"asus F3Se Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXVuWmlBcUhuemc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicFBoWDNITW5MWEE", "createdOn":"", "firstName":"asus F3Sc Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicFBoWDNITW5MWEE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQielVFX3ZGSGFGUWM", "createdOn":"", "firstName":"asus F3E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQielVFX3ZGSGFGUWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlBVWDNMTWpaWnc", "createdOn":"", "firstName":"asus F3Jr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlBVWDNMTWpaWnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRERFYi1vS01pSDA", "createdOn":"", "firstName":"asus F3H Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRERFYi1vS01pSDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWnQ0QWJtODdMZzg", "createdOn":"", "firstName":"asus M9J Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWnQ0QWJtODdMZzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidi1kYzRPekZjQ00", "createdOn":"", "firstName":"asus M9F Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidi1kYzRPekZjQ00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic1VMRXNiOUM1dDA", "createdOn":"", "firstName":"asus A6Jm Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic1VMRXNiOUM1dDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiaW5iYzdNdmdMZVU", "createdOn":"", "firstName":"asus A6F Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiaW5iYzdNdmdMZVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicmdlWklUdjItMTg", "createdOn":"", "firstName":"asus A8Le Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicmdlWklUdjItMTg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMlFjYlBuRG94TVk", "createdOn":"", "firstName":"asus A8Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMlFjYlBuRG94TVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZDZqQUxjTlgzWEk", "createdOn":"", "firstName":"asus A8E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZDZqQUxjTlgzWEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMmFGNDFub3U1X0E", "createdOn":"", "firstName":"asus A8Sc Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMmFGNDFub3U1X0E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYlB5N3E5cS1SRTA", "createdOn":"", "firstName":"asus A8Jr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYlB5N3E5cS1SRTA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWU2d0VEcTMxOHM", "createdOn":"", "firstName":"asus A8He Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWU2d0VEcTMxOHM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUVBacDJORzNncDA", "createdOn":"", "firstName":"asus A8H Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUVBacDJORzNncDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUEdyUU1IbEpXbk0", "createdOn":"", "firstName":"asus A8Jn Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUEdyUU1IbEpXbk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ2psOVFmRGFPdnM", "createdOn":"", "firstName":"asus VX2Se Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ2psOVFmRGFPdnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0JDaWdMQ0NTN1U", "createdOn":"", "firstName":"asus VX2 Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0JDaWdMQ0NTN1U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic0JVU0picTVTQ2M", "createdOn":"", "firstName":"asus F9E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic0JVU0picTVTQ2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUGU0WHYzQkRVSkk", "createdOn":"", "firstName":"asus F9Dc Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUGU0WHYzQkRVSkk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblFLN0pQV1QxdXc", "createdOn":"", "firstName":"asus F9S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblFLN0pQV1QxdXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUmd4U2FPM2x4dDA", "createdOn":"", "firstName":"asus F9J Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUmd4U2FPM2x4dDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZVBNdUNHWkVrbXc", "createdOn":"", "firstName":"asus U1E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZVBNdUNHWkVrbXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiXzUySDMtREY2MWM", "createdOn":"", "firstName":"asus U1F Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiXzUySDMtREY2MWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUtFZ1pYbGxjeWs", "createdOn":"", "firstName":"asus T12Kg Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUtFZ1pYbGxjeWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieWNzc2tHZ3pCQVE", "createdOn":"", "firstName":"asus T12Eg Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieWNzc2tHZ3pCQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidTBLMVZaQm90YkE", "createdOn":"", "firstName":"asus T12Ug Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidTBLMVZaQm90YkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzFINDJsQU5tTWM", "createdOn":"", "firstName":"asus A7K Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzFINDJsQU5tTWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiM2JSQ2h5OWt5TXM", "createdOn":"", "firstName":"asus A7Sv Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiM2JSQ2h5OWt5TXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQnFYeXBQbFBOVms", "createdOn":"", "firstName":"asus A7S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQnFYeXBQbFBOVms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmxHVE9adngyaVE", "createdOn":"", "firstName":"asus G2S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmxHVE9adngyaVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWGhIcVp0NDhOSFE", "createdOn":"", "firstName":"asus G2K Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWGhIcVp0NDhOSFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUHRyRUdOS0JzZFk", "createdOn":"", "firstName":"asus W7S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUHRyRUdOS0JzZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQia3FQWHB3UGFqbnc", "createdOn":"", "firstName":"asus G1S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQia3FQWHB3UGFqbnc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZUpXd3NSXzQ2YlU", "createdOn":"", "firstName":"asus F7E L Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZUpXd3NSXzQ2YlU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOXhqeXM2ekxoekU", "createdOn":"", "firstName":"asus F7Kr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOXhqeXM2ekxoekU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUFFdjFHcjBiVGM", "createdOn":"", "firstName":"asus F7Se Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUFFdjFHcjBiVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUV9XZUJiNEl0aDQ", "createdOn":"", "firstName":"asus F7Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUV9XZUJiNEl0aDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicHpWTnhQMnFlYjg", "createdOn":"", "firstName":"asus F7F Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicHpWTnhQMnFlYjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVklYSi15YjlnQzQ", "createdOn":"", "firstName":"asus U3S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVklYSi15YjlnQzQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVjJ3dzl1ZkxOYXM", "createdOn":"", "firstName":"asus F8Sp Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVjJ3dzl1ZkxOYXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS1UwelloMjBtbzg", "createdOn":"", "firstName":"asus F8Sn Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS1UwelloMjBtbzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMG5GTDI3bEpmNDQ", "createdOn":"", "firstName":"asus F8P Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMG5GTDI3bEpmNDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEhRM29GaU8tZ1E", "createdOn":"", "firstName":"asus F8Sv Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEhRM29GaU8tZ1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNXowVmJBUUZLQzg", "createdOn":"", "firstName":"asus F8Sa Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNXowVmJBUUZLQzg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOGlyQWdJNmxHcUU", "createdOn":"", "firstName":"asus F8Dc Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOGlyQWdJNmxHcUU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZXlkM0FBcHJSZkE", "createdOn":"", "firstName":"asus F5RL Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZXlkM0FBcHJSZkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidmVhRWNkeURHa3M", "createdOn":"", "firstName":"asus X51L Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidmVhRWNkeURHa3M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieHBuQ3BkQTlraTQ", "createdOn":"", "firstName":"asus X51H Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieHBuQ3BkQTlraTQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTWJCMGxiLUFzZFk", "createdOn":"", "firstName":"asus X51RL Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTWJCMGxiLUFzZFk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidzAtSzJEMndoSXc", "createdOn":"", "firstName":"asus R1E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidzAtSzJEMndoSXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQidnd1R19GQVVpMXM", "createdOn":"", "firstName":"asus V1S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQidnd1R19GQVVpMXM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicXdfMmotSXRad2M", "createdOn":"", "firstName":"asus V2S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicXdfMmotSXRad2M/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYUJDUGxDTkltV00", "createdOn":"", "firstName":"asus W2W Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYUJDUGxDTkltV00/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiT203ZG51Z19KUGc", "createdOn":"", "firstName":"asus P701 Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiT203ZG51Z19KUGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYTJ1NUFveWM4YjQ", "createdOn":"", "firstName":"asus U6E S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYTJ1NUFveWM4YjQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWXBZazNiZ2VRdDQ", "createdOn":"", "firstName":"asus M50Sv Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWXBZazNiZ2VRdDQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQjRjSTV6Ynh0ak0", "createdOn":"", "firstName":"asus M50Sa Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQjRjSTV6Ynh0ak0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLWZ0b05CbGdUbU0", "createdOn":"", "firstName":"asus M50Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLWZ0b05CbGdUbU0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRGlTNTNiR0VnWk0", "createdOn":"", "firstName":"asus M51Sn Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRGlTNTNiR0VnWk0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclI3ZDB4T3hDZzA", "createdOn":"", "firstName":"asus M51Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclI3ZDB4T3hDZzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQWdxaG5FbmZSMWs", "createdOn":"", "firstName":"asus M51kr F3Kr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQWdxaG5FbmZSMWs/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicVMyeHJzdkhRQ0U", "createdOn":"", "firstName":"asus M51E Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicVMyeHJzdkhRQ0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQXRuTjk2c3RjYjA", "createdOn":"", "firstName":"asus M51Se Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQXRuTjk2c3RjYjA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWWR0UzFjejlPVzA", "createdOn":"", "firstName":"asus M51Va Vr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWWR0UzFjejlPVzA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWW9vb3I0NERlRnM", "createdOn":"", "firstName":"asus X55Sv Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWW9vb3I0NERlRnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiblowVTRhSTFMRjg", "createdOn":"", "firstName":"asus X55Sr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiblowVTRhSTFMRjg/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQic2htOUNBckF5T28", "createdOn":"", "firstName":"asus F6E S Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQic2htOUNBckF5T28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZHhCMUxPc1hKQ0U", "createdOn":"", "firstName":"asus C90P Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZHhCMUxPc1hKQ0U/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRWhJZFRBQzFWRWM", "createdOn":"", "firstName":"asus X71Sr M70Sa Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRWhJZFRBQzFWRWM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiald1LXp4N1NKOUE", "createdOn":"", "firstName":"asus VX3 Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiald1LXp4N1NKOUE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiRlFfTTB6bXJaeE0", "createdOn":"", "firstName":"asus VX3 Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiRlFfTTB6bXJaeE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUFU2YU9XTEcxMkU", "createdOn":"", "firstName":"asus Z96Sp Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUFU2YU9XTEcxMkU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZEZsTVdsaHRFLVU", "createdOn":"", "firstName":"asus M70Vm Vr Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZEZsTVdsaHRFLVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibmhyZjMyU1h6STQ", "createdOn":"", "firstName":"asus F8vrTroubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibmhyZjMyU1h6STQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQicGhHdnJzM2hkNkE", "createdOn":"", "firstName":"asus F6V Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQicGhHdnJzM2hkNkE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiUWVabVYtTW9oQVE", "createdOn":"", "firstName":"asus F80L Troubleshooting Guide.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiUWVabVYtTW9oQVE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3YxQnRuTEY3ZEk", "createdOn":"", "firstName":"toshiba equium a60 satellite a60 pro a60 a65.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3YxQnRuTEY3ZEk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib05sS2J0Q1ZhdVU", "createdOn":"", "firstName":"toshiba 100cs 110cs.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib05sS2J0Q1ZhdVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiazZxTkNKR1JlcnM", "createdOn":"", "firstName":"toshiba equium a210 satego a210 satellite a210 a215 pro a210.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiazZxTkNKR1JlcnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiYVI4TWxpZWJJa3c", "createdOn":"", "firstName":"toshiba dynabook v1 v2 satellite p300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiYVI4TWxpZWJJa3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTlZOSnEzUlNUZ1k", "createdOn":"", "firstName":"toshiba equium l300 satego l300 satellite l300 l305 pro l300 pslb0123.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTlZOSnEzUlNUZ1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVnE3R0EtdlB5Wms", "createdOn":"", "firstName":"toshiba equium a300 satego a300 satellite a300 pro a300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVnE3R0EtdlB5Wms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOG9xQm9uRzdTVGM", "createdOn":"", "firstName":"toshiba equium l300 satego l300 satellite l300 l305 pro l300 pslb89ab.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOG9xQm9uRzdTVGM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQibVptTlkzSTRTTFE", "createdOn":"", "firstName":"toshiba equium l300d satego l300d satellite l300d l305d pro l300d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQibVptTlkzSTRTTFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiTE4wVWxCLXl4VFE", "createdOn":"", "firstName":"toshiba equium l350d satego l350d satellite l350d pro l350d.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiTE4wVWxCLXl4VFE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVTVZV2NLOTBSTE0", "createdOn":"", "firstName":"toshiba equium m40 m45 satellite m40 m45.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVTVZV2NLOTBSTE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiNUJuYmxIcFlOV2c", "createdOn":"", "firstName":"toshiba equium l350 satego l350 satellite l350 pro l350.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiNUJuYmxIcFlOV2c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieV9FQVNnVW1qZGc", "createdOn":"", "firstName":"toshiba nb250 nb255.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieV9FQVNnVW1qZGc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWDhZQ3BtdE4wS28", "createdOn":"", "firstName":"toshiba libretto l100 l105 nb100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWDhZQ3BtdE4wS28/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiand2cFI2eklTYmc", "createdOn":"", "firstName":"toshiba nb300.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiand2cFI2eklTYmc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiOEs3Nm42d3I3eE0", "createdOn":"", "firstName":"toshiba libretto 100ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiOEs3Nm42d3I3eE0/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMU1la0lUNEVaM1E", "createdOn":"", "firstName":"toshiba portege 3400.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMU1la0lUNEVaM1E/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiZ0xGZTczRzZWaUk", "createdOn":"", "firstName":"toshiba libretto u100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiZ0xGZTczRzZWaUk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiS3dnTld0NTV3V3c", "createdOn":"", "firstName":"toshiba portege 4000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiS3dnTld0NTV3V3c/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiV1czQ2oxc2JzSnM", "createdOn":"", "firstName":"toshiba portege 2000.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiV1czQ2oxc2JzSnM/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQlQ5UnFrbi1NY1k", "createdOn":"", "firstName":"toshiba portege a600.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQlQ5UnFrbi1NY1k/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQib0hVVkgzdlZUbVk", "createdOn":"", "firstName":"toshiba portege 3010ct 3020ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQib0hVVkgzdlZUbVk/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiLU9wc3hkTUE2ODQ", "createdOn":"", "firstName":"toshiba portege 3110ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiLU9wc3hkTUE2ODQ/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieXFxQmFsV0JIcFU", "createdOn":"", "firstName":"toshiba portege 610ct 620ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieXFxQmFsV0JIcFU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiVlBfbkV5aEZRWXc", "createdOn":"", "firstName":"toshiba portege 7010ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiVlBfbkV5aEZRWXc/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiclMtalBmWkR4dlE", "createdOn":"", "firstName":"toshiba portege 7200ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiclMtalBmWkR4dlE/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQieVQwLXVwUl9iNms", "createdOn":"", "firstName":"toshiba portege 7020ct.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQieVQwLXVwUl9iNms/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiMDdHV2xzYXREbVU", "createdOn":"", "firstName":"toshiba portege a100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiMDdHV2xzYXREbVU/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiWl9yejhLaWZXcDA", "createdOn":"", "firstName":"toshiba portege m100.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiWl9yejhLaWZXcDA/preview"
}),
			
new Contact({"id":"0B_JDYj6vtQQiQ2RlNExUbGtCZFE", "createdOn":"", "firstName":"toshiba portege m700 m750.pdf", "email":"https://drive.google.com/file/d/0B_JDYj6vtQQiQ2RlNExUbGtCZFE/preview"
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