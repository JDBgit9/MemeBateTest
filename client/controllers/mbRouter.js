// const db = require("../");


// module.exports = {
//     findAll: function(req, res) {
//         db.Media
//           .find(req.query)
//           .sort({ date: -1 })
//           .then(media => res.json(media))
//           .catch(err => res.status(422).json(err));
//       },
 
//   findUser: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(user => res.json(user))
//       .catch(err => res.status(422).json(err));
//   },
//   createMedia: function(req, res) {
//     db.Media
//       .create(req.body)
//       .then(media=> res.json(media))
//       .catch(err => res.status(422).json(err));
//   },
//   findMedia: function(req, res) {
//     db.Media
//       .findById(req.params.id)
//       .then(media => res.json(media))
//       .catch(err => res.status(422).json(err));
//   },
//   updateMedia: function(req, res) {
//     db.Media
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(media => res.json(media))
//       .catch(err => res.status(422).json(err));
//   },
//   removeMedia: function(req, res) {
//     db.Media
//       .findMedia({ _id: req.params.id })
//       .then(media => post.remove())
//       .then(media => res.json(media))
//       .catch(err => res.status(422).json(err));
//   }
// };
