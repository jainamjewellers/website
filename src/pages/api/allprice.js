const puppeteer = require('puppeteer');

const handler = async (req, res) => {
    if (req.method == 'GET') {
        let data = await apiCall(req)
        res.json(data);
    } else {
        res.json({ "status": false, "message": "invalid request" })
    }
}

async function apiCall(req) {
    try {
        console.log(req.query)
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://www.spngold.in/');

        let selector = ''
        if (req.query.type == '995') {
            selector = '#symbol_411 > div.content > div.sell.label'
        }
        if (req.query.type == '999') {
            selector = '#symbol_412 > div.content > div.sell.label'
        }
        console.log("selector: ", selector)
        const options = await page.$$eval(selector, (options) =>
            options.map((option) => option.textContent)
        );
        console.log(page)
        //#symbol_412 > div.content > div.sell.label
        console.log(options);
        await browser.close();
        return options[0]
    } catch (error) {
        console.log(error)
        return error
    }
}

export default handler;