var restify = require('restify');
let axios = require("axios")
var sub = require('date-fns/sub')
var format = require('date-fns/format')
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
    auth: process.env.notion_token,
})

async function respondToGetRedditToken(req, res) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('grant_type', 'password');
    encodedParams.set('username', process.env.reddit_username);
    encodedParams.set('password', process.env.reddit_password);

    const options = {
        method: 'POST',
        url: 'https://www.reddit.com/api/v1/access_token',
        headers: {
            Authorization: `Basic ${process.env.reddit_auth_key}`,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: encodedParams,
    };

    try {
        const { data } = await axios.request(options);
        res.setHeader('content-type', 'application/json');
        res.send(data);
    } catch (error) {
        console.error(error);
    }
}

async function respondToGetReadingsInLast10Days(req, res) {
    const databaseId = process.env.notion_database_id;
    res.setHeader('content-type', 'application/json');
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            page_size: 10,
            sorts: [
                {
                    "property": "Created",
                    "direction": "descending"
                }
            ],
            filter: {
                "and": [
                    // {
                    //   property: "Created",
                    //   date: {
                    //     after: format(sub(new Date(), {
                    //       days: 20
                    //     }), "yyyy-MM-dd")
                    //   }
                    // },
                    {
                        property: "resource type",
                        multi_select: {
                            does_not_contain: "course"
                        }

                    }
                ]
            }
        });
        const data = response.results.map((page) => {
            return {
                created_time: page.created_time,
                blog_url: page.properties.URL.url,
                blog_title: page.properties.Name.title[0].plain_text
            }
        });
        res.send(data);
    } catch (err) {
        console.log("custom error")
        res.send([])
    }
}

function respondToHelloRoute(req, res, next) {
    res.send({ text: "API Endpoints for Miniprojects" });
    next();
}

var server = restify.createServer();
server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.get('/get-reddit-access-token', respondToGetRedditToken);
server.get('/get-reading-last-10-days', respondToGetReadingsInLast10Days);
server.get('/hello', respondToHelloRoute);
server.get('/', respondToHelloRoute);


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});