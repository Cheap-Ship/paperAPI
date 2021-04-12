// get resource model (definition and DB operations)
const Estados = require('../models/estados.model.js');

// EXPORT function to display list of all tutorials (required by ROUTER)
exports.findAll = (req, res) => {
    Estados.getAll( (err, data) => {
            if (err) // send error response
                res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
            else
                res.status(200).json(data); // send OK response with all tutorials data
        });
    };

// exports.create = (req, res) => {
//     if (!req.body || !req.body.title) {
//         res.status(400).json({message: "Title can't be empty."})    
//         return;  
//     }

//     const tutorial = {
//         title: req.body.title,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false
//     }

//     Tutorial.create(tutorial, (err, data) => {
//         if (err) {
//             res.status(500).json({
//                 message: `Error creating Tutorial.`
//             });
//     } else
//         res.status(200).json(data);
//     })
// }

// exports.findAllPublished = (req, res) => {
//     Tutorial.getAllPublished( (err, data) => {
//         if (err) // send error response
//             res.status(500).send({
//             message: err.message || "Some error occurred while retrieving tutorials."
//         });
//         else
//             res.status(200).json(data); // send OK response with all tutorials data
//     });
// };

// exports.findOne = (req, res) => {
//     Tutorial.findById(req.params.tutorialID, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found")
//                 res.status(404).json({
//                     message: `Not found Tutorial with id ${req.params.tutorialID}.`
//                 });
//             else
//                 res.status(500).json({
//                     message: `Error retrieving Tutorial with id ${req.params.tutorialID}.`
//                 });
//         } else
//             res.status(200).json(data);
//     });
// };

// exports.update = (req, res) => {
//     if (!req.body || !req.body.title) {
//         res.status(400).json({message: "Title can't be empty."})    
//         return;  
//     }

//     const tutorial = {
//         title: req.body.title,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false
//     }

//     Tutorial.findById(req.params.tutorialID, (err, data) => {
//         if (err) {
//             res.status(500).json({
//                 message: `Error retrieving Tutorial with id ${req.params.tutorialID}.`
//             });
//         } else
//             Tutorial.updateById(req.params.tutorialID, tutorial, (err, data) => {
//                 if (err) {
//                     res.status(500).json({
//                         message: `Error updating Tutorial with id ${req.params.tutorialID}.`
//                     });
//                 } else
//                     res.status(200).json(data);
//             });
//     });
// };

// exports.delete = (req, res) => {
//     Tutorial.remove(req.params.tutorialID, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found")
//                 res.status(404).json({
//                     message: `Not found Tutorial with id ${req.params.tutorialID}.`
//                 });
//             else
//                 res.status(500).json({
//                     message: `Error deleting Tutorial with id ${req.params.tutorialID}.`
//                 });
//         } else
//             res.status(200).json(data);
//     })
// }