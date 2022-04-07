import puppeteer from 'puppeteer';

const Translater = async (input, output, text) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    })

    const page = await browser.newPage()
    await page.goto(`https://translate.google.com/?sl=${input}&tl=${output}&text=${text}&op=translate`)
    let translated = await page.evaluate(() => {
        let results = []
        let texts = document.querySelectorAll("span.Q4iAWc")
        texts.forEach((item) => {
            results.push({
                text: item.textContent
            })
        })
        return results
    })
    
    
    browser.close()
    return await translated
}

// Translater("es", "en", "Juan es el mejor").then(console.log).catch(console.error)

export default Translater