const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);


app.listen(PORT, () => {
  console.log (`API server now on port ${PORT}`);
});



// app.get("/notes", function(req,res) {
//   res.sendFile(path.join(mainDir, "notes.html"));
// });

// app.get("/api/notes", function(req,res) { 
//   res.sendFile(path.join(__dirname, "/db/db/json"));
// });

// app.get("/api/notes/:id", function(req, res) {
//   let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   res.json(savedNotes[Number(req.params.id)]);
// });

// app.get("+", function(req, res) {
//   res.sendFile(path.join(mainDir, "index.html"));
// });

// app.post("/api/notes", function(req, res) {
//   let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   letnewNote = req.body;
//   let uniqueID = (savedNotes.length).toString();
//   newNote.id = uniqueID;
//   savedNotes.push(newNote);

//   fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//   console.log("Note saved to db.json. Content: ", newNote);
//   res.jsson(savedNotes);
// })

// app.delete("/api/notes/:id", function(req,res) {
//   let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   let noteID = req.params.id;
//   let newID = 0;
//   console.log(`Deleting note with ID ${noteID}`);
//   savedNotes = savedNotes.filter(currNote => {
//     return currNote.id != noteID;
//   });

//   for(currNote of savedNotes) {
//     currNote.id = newID.toString();
//     newID++;
//   }
//   fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//   res.json(savedNotes);
// })
