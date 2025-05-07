import Bun from "bun";

// Start the server
const server = Bun.createServer({
  fetch(req) {
    return new Response('Blooket Cheat Server Running!');
  }
});

// Start listening on port 52134
server.listen(52134);
console.log("Server running at http://localhost:52134");
