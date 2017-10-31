Meteor.startup(() => {
  if (!Meteor.users.findOne({ username: 'admin' })) {
    Accounts.createUser(Meteor.settings.admin_user || {
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin',
      plan: 'business'
    });
  }
});
