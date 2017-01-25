/*
 *  Inserts "doc" into the collection "movies".
 */


exports.insert = function(db, doc, callback) {
  db.collection('movies').insert(doc, function(error, docs){
    if(error){
      console.log('falla de una'+error);
      process.exit(1);
    }
     callback(null);

  })

};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
 exports.byDirector = function(db, director, callback) {
         // TODO: implement
         var query = {director: director};
         db.collection('movies').find(query).sort({'title': 1}).toArray(function(error, docs) {
             if (error) {
                 console.log(error + 'pepe');
                 process.exit(1);
             }

         console.log("Found Docs:");
         docs.forEach(function(doc){
             console.log('test 2');
             console.log(JSON.stringify(doc));
         });
         callback(null, docs);

       });

};
