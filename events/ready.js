module.exports = (client) => {
    let ls = [
        { name: 'm!help', type: 'STREAMING', url: 'https://twitch.tv/nome' }
        ];

    function st() {
        let rs = ls[Math.floor(Math.random() * ls.length)];
        client.user.setPresence({ game: rs })
    };

    st();
    setInterval(() => st(), 60 * 1000);

    console.log("Bot online !");
}