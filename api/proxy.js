export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        // Tembak URL tujuan (API Sanka)
        const response = await fetch(decodeURIComponent(url));
        const data = await response.json();
        
        // --- SENJATA RAHASIA CORS ---
        // Ini yang bikin web kamu diizinkan ngambil data tanpa diblokir
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        // Lempar datanya ke web kamu
        res.status(200).json(data);
    } catch (error) {
        console.error("Proxy Error:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
