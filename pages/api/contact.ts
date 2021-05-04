import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Wraps call to external email sending API (AWS API Gateway, in this case) to allow for secret API key to be used securely in deployment
 * 
 * @param req HTTP request
 * @param res Server response
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const result = await fetch(process.env.CONTACT_FORM_API_ENDPOINT, {
            method: "POST",
            headers: { "x-api-key": process.env.CONTACT_FORM_API_KEY },
            body: req.body
        });
        const json = await result.json();
        res.status(result.status).json(json);
    } else {
        res.status(405).json({ message: "Invalid HTTP method" });
    }
};

export default handler;