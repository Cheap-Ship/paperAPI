const sql = require("./db.js"); // get DB connection
// define ESTADOS model constructor
const Estados = function (tutorial) {
    this.title = tutorial.email;
    this.description = tutorial.description;
    this.published = tutorial.published;
};

// define method getAll to handle getting all Tutorials from DB
// result = "(error, data)", meaning it will return either an error message or some sort of data
Estados.getAll = (result) => {
    sql.query("SELECT * FROM estados", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res); // the result will be sent to the CONTROLLER
    });
};

// Tutorial.getAllByTitle = (title, result) => {
//     sql.query("SELECT * FROM tutorials WHERE title LIKE ?", `%${title}%`, (err, res) => {
//         if (err) {
//             result(err, null);
//             return;
//         }
//         result(null, res);
//     });
// };

// Tutorial.create = (newTutorial, result) => {
//     sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
//         if(err) {
//             result(err, null);
//             return;
//         }

//         result(null, {message: "New tutorial created.", location: "/tutorials/" + res.insertid})
//     })
// }

// Tutorial.getAllPublished = (result) => {
//     sql.query("SELECT * FROM tutorials WHERE published = 1", (err, res) => {
//         if (err) {
//             result(err, null);
//             return;
//         }
//         result(null, res);
//     });
// };

// Tutorial.findById = (id, result) => {
//     sql.query("SELECT * FROM tutorials WHERE id = ?", [id], (err, res) => {
//         if (err) {
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             result(null, res[0]);
//             return;
//         }
        
//         result({kind: "not_found"}, null);
//     });
// };

// Tutorial.updateById = (id, tutorial, result) => {
//     sql.query("UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
//                 [tutorial.title, tutorial.description, tutorial.published, id], (err, res) => {
//         if(err) {
//             result(err, null);
//             return;
//         }

//         result(null, {message: `Tutorial ${id} updated successfully.`})
//     })
// }

// Tutorial.remove = (id, result) => {
//     sql.query("DELETE FROM tutorials WHERE id = ?", [id], (err, res) => {
//         if (err) {
//             result(err, null);
//             return;
//         }

//         if (res.affectedRows) {
//             result(null, {message: `Tutorial ${id} removed successfully.`})
//             return;
//         }
        
//         result({kind: "not_found"}, null)
//     })
// }
 
// EXPORT MODEL (required by CONTROLLER)
module.exports = Estados;