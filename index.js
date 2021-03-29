Hooks.once("createChatMessage", (chatMessage) => {
    if ((chatMessage.isRoll) ||
        !chatMessage.isContentVisible ||
        game.system.data.name != "CoC7") {
        return;
    }

    console.log(chatMessage)

});


const something = () => {
    (async () => {
        await new Roll('1d100').toMessage()
    })()
};