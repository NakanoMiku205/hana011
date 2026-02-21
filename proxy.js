export default async function handler(req, res) {
    try {
        const { url } = req.query;

        if (!url) {
            return res.status(400).json({ error: "URL kosong" });
        }

        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const text = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");

        res.status(200).send(text);

    } catch (err) {
        res.status(500).json({ error: "Proxy error" });
    }
}