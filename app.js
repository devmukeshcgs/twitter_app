const http = require('http');
// const io = require('socket.io')(app);

//Envirnoment Variables
const PORT = process.env.PORT || 3000;
const app = http.createServer();

app.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});