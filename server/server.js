const express = require('express');
const app = express();
const PORT  = 3425;

const monsters = [ 'Big Foot', 'Loch Ness Monster', 'Mike', 'Sully' ];

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

app.use(express.static('server/public'));

app.get('/monsters', function(req, res) {
    res.send(monsters);
});