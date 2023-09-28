var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('./qdp.services.incidents')
});






// Function to extract head and body
const extractHeadAndBody = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(fileContent);
  return {
    head: $('head').html(),
    body: $('body').html()
  };
};

// Navigation HTML
const commonNavigation = `
  <div>
  <a href="/pages/qdp.services.incidents">incidents</a> |
  <a href="/pages/id.frontend.qtelematics">qtelematics</a>
    <!-- Add more app links here -->
  </div>
`;


// Generic route for all apps
router.get('/:appName', (req, res) => {
  const { appName } = req.params;
  const { head, body } = extractHeadAndBody(path.join(__dirname, `../../${appName}/dist/index.html`));

  console.log(head);
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      ${head}
      <!-- Additional head content specific to this route -->
    </head>
    <body>
      ${commonNavigation}
      ${body}
    </body>
    </html>
  `);
});


module.exports = router;