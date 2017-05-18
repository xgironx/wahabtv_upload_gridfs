
                // $ npm install gridfs-stream
                // 201705171344L   EL MIERCOLES   GIRO
                // http://excellencenodejsblog.com/         expressjs-file-uploading-gridfs-mongodb/
                // > db.fs.chunks.find();
                // http://stackoverflow.com/questions/10081611/mongoose-schema-creation
                // GridFS Using Mongoose – NodeJS By manish in Express, MongoDB, Mongoose
                // http://excellencenodejsblog.com/         gridfs-using-mongoose-nodejs/


var mongoose = require('mongoose');
                // Writing a File
// var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/wahabtv');
// // mongoose.connect('mongodb://ds143211.mlab.com:43211/heroku_2lg0r3jz');
// var conn = mongoose.connection;

// var mongoURI = "mongodb://heroku_2lg0r3jz:pc3ovpqacvjur8c7sah0r8ehpm@ds143211.mlab.com:43211/heroku_2lg0r3jz"
var fs = require('fs');
// mongoose.connect('mongodb://localhost/wahabtv');

// var                         mongoURI = 'mongodb://ds143211.mlab.com:43211/heroku_2lg0r3jz'
var                            mongoURI = 'mongodb://localhost/wahabtv'
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function (err) { if (err) { console.log('mongodb connection error', err); } else { console.log('mongodb connection successful'); } });
module.exports = function ()
    {
                                                     var uploadSchema = new mongoose.Schema({ filename: String });
                                // mongoose.model('Upload', uploadSchema);
        var uploadSchemaModel = mongoose.model('Upload', uploadSchema);
    };
MongoDB.once('open', function ()
    {
        console.log('11 ABOUT TO ENTER: "conn.once.open.function"');
        console.log('mongodb connection open');
                var Grid = require('gridfs-stream');
                    Grid.mongo = mongoose.mongo;
          var gfs = Grid(MongoDB.db);
                                    // streaming to gridfs
                                    // WRITE TO mongodb
                                    // filename to store in mongodb
                                    // WRITE FILENAME INTO mongodb
                                                           var writeStreamToGfs = gfs.createWriteStream( { filename: 'writeStreamToGfs.txt' });
          fs.createReadStream('createReadStreamFrFs.txt').pipe(writeStreamToGfs);
                                                               writeStreamToGfs.on('close', function (file) { });
                                                  console.log( writeStreamToGfs.filename + 'WRITTEN TO DB');

                    // console.log('11 ABOUT TO ENTER: "conn.once.open.function"');
                    // conn.once('open', function ()
                    //             {
                    //                 console.log('22 GOT INSIDE OF OPEN: "conn.once.open.function"');
                    //                 var gfs = Grid(conn.db);
                    //                             // streaming to gridfs
                    //                             //filename to store in mongodb
                    //                                                                    var writeStreamToGfs = gfs.createWriteStream( { filename: 'writeStreamToGfs.txt' });
                    //                   fs.createReadStream('createReadStreamFrFs.txt').pipe(writeStreamToGfs);
                    //                                                           console.log( writeStreamToGfs.filename + 'WRITTEN TO DB');
                    //                                                                        writeStreamToGfs.on('close', function (file) { });
                    //             }
                    //         );
                // After above is done, you will see two collections added to the database ‘fs.chunks’ and ‘fs.files’
                // Reading a File
                // Reading a file is also easy, you need to know the filename or _id
                //write content to file system
                // READ FILE CONTENTS INTO FS
var writeStreamToFs = fs.createWriteStream('writeStreamToFs.txt');
                         console.log( '||   writeStreamToFs.txt   ||   ' + 'WRITTEN TO FS');                      // Written To FS
                // console.log(file.filename + 'Written To FS');       // console.log(file.filename + 'Written To FS'); ^ ReferenceError: file is not defined
                // console.log(fs_write_stream + 'Written To FS');     // [object Object]Written To FS


                // console.log(Object.prototype.toString.call(program.args), program.args);
                // console.log(program.args)
                //read from mongodb
                // READ FROM MONGODB AND PIPE INTO FS STREAM
var fsCreateReadStream = gfs.createReadStream({ filename: 'mongo_file.txt' });
    fsCreateReadStream.pipe(writeStreamToFs);
                        writeStreamToFs.on('close', function ()
                                                                { console.log('file has been written fully TO FS!'); });
                // Deleting File
                // For Deleting a file you need to know the filename or _id
                // DELETE FILE FROM MONGODB
gfs.remove({ filename: 'mongo_file.txt' }, function (err)
                                            { if (err) return handleError(err); console.log('success'); });
                // or
                // gfs.remove({
                //     // _id : '548d91dce08d1a082a7e6d96'
                //     _id : '548d91dce08d1a082a7e6d96'
                // }, function (err) {
                //   if (err) return handleError(err);
                //   console.log('success');
                // });

                // File Exists
                // To check if a file exists or not
                // FILE IS/NOT IN MONGODB
      var options = {filename : 'mongo_file.txt'};                //can be done via _id as well
gfs.exist(options, function (err, found)
                                        { if (err) return handleError(err); found ? console.log('File exists') : console.log('File does not exist'); });

                //Access File Meta Data
gfs.files.find({ filename: 'mongo_file.txt' }).toArray(function (err, files)
                                        { if (err) { throw (err); } console.log(files); });
                // Gfs can also be piped to a node http s
console.log('33 AFTER "conn.once.open.function"');
});
