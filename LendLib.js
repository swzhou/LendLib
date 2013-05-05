lists = new Meteor.Collection("Lists");

function adminUser(userId) {
    var adminUser = Meteor.users.findOne({username: "admin"});
    return userId && adminUser && userId === adminUser._id;
}

lists.allow({
    insert: function (userId, doc) {
        return adminUser(userId);
    },
    update: function (userId, doc, fields, modifier) {
        return adminUser(userId);
    },
    remove: function (userId, doc) {
        return adminUser(userId);
    }
});