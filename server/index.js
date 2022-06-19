'use strict';

const express = require('express');
const router = require('./router');
const cors = require('cors')

const app = express();
const port = 4000;

app.use(express.json())
app.use(cors());
app.use(router);

(async () => {
  try {
    app.listen(port, () => {
      console.log(`server listening on http://localhost:${port} 👾`)
    })

  }
  catch (error) {
    console.error(error)
  }

})();
