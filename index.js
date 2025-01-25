require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// const tweet = async () => {
//   try {
//     await twitterClient.v2.tweet("Hello world!");
//   } catch (e) {
//     console.log(e)
//   }
// }
// const cronTweet = new CronJob("30 * * * * *", async () => {
//   tweet();
// });

const search = async () => {
    try {
        const response = await twitterClient.v2.search("nodejs", { max_results: 10 });
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}
const postTweet = async () => {
    try {
        await twitterClient.v2.tweet("Hello world!");
    } catch (e) {
        console.log(e)
    }
}
postTweet();
// search();
