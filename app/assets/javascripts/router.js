// For more information see: http://emberjs.com/guides/routing/

WikipagesApp.Router.map(function() {
  this.resource('contacts', { path: '/' }, function() {
    this.resource('new_contact', { path: '/contacts/new' });
  });

  this.resource('contact', { path: '/contacts/:id' });
  this.resource('edit_contact', { path: '/contacts/:id/edit' });
});
