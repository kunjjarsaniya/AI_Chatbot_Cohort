const app = require("./src/app");
const {createServer} = require("http");
const {Server} = require("socket.io");
const generateResponse = require("./src/services/ai.services");

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("ai-message", async(data) => {
        console.log("Received message from client: ", data.prompt);
        const response = await generateResponse(data.prompt);
        console.log("Response from AI: ", response);
        socket.emit("ai-message-response", response);
    });

});

httpServer.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

