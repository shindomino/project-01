        var express = require('express'),
          app = express();


        // serve static files from public folder
        app.use(express.static(__dirname + '/public'));


        /**********
        * ROUTES *
        **********/

        /*
         * HTML ENDPOINTS
         */
         app.get('/', function homepage (req, res) {
           res.sendFile(__dirname + '/views/index.html');
         });

        // TODO: Make 'api/sanity' endpoint!

        /*
         * API ENDPOINTS
         */

         app.get('/api/sanity', function sanity(req, res)
         {
           var meesageJSON = {
             message: "KONICHIWA, SEMPAI"
           };
           res.status(200).json({
           });
         });


        /**********
        * SERVER *
        **********/

        // listen on port 3000
        app.listen(process.env.PORT || 3000, function () {
          console.log('Express server is running on http://localhost:3000/');
        });
