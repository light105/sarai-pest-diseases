PlantProblem = new Mongo.Collection('plantProblem');

// Extended configuration
PlantProblem.initEasySearch(['eng_name','fil_name','sci_name','symptoms'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

if (Meteor.isServer) {
  PlantProblem.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  PlantProblem.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
