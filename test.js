const rnp = require('./index.js');

const http = require('http');


let user = { 
   "first_name":"abdou",
   "last_name":"mjr",
   "services":[ 
      { 
         "id":"1",
         "name":"yassir"
      },
      { 
         "id":"3",
         "name":"X"
      },
      { 
         "id":"2",
         "name":"yafood"
      }
   ],
   "regions":[ 
      { 
         "id":"1",
         "name":"oran"
      },
      { 
         "id":"2",
         "name":"alger"
      }
   ],
   "countries":[ 
      { 
         "id":"1",
         "name":"algeria"
      },
      { 
         "id":"3",
         "name":"adzdzdzdzlgeria"
      },
      { 
         "id":"2",
         "name":"tunisia"
      }
   ],
   "permissions":[ 
      { 
         "id":"1",
         "name":"create-user"
      },
      { 
         "id":"2",
         "name":"delete-user"
      }
   ]
}



let app = http.createServer((req, res) => {
  //  res.writeHead(200, {'Content-Type': 'text/plain'});
    let test = rnp(user).can(["create-user"]).inTeam(["yassir","yafood"]).inRegion(["alger","oran"]).inCountry(["algeria","tunisia","test"]).exec();
    res.end('<h1>'+test+'</h1>');
});

app.listen(3000, '127.0.0.1');



