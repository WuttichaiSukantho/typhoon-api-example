const axios = require('axios');

exports.serch = async (req: any, res: any) => {
    const searchTerm = JSON.stringify(req.body)
    if (!searchTerm) {
        return res.status(400).json({ message: "Please enter a search term." })
    }
    try {
        const requestData = {
            model: 'typhoon-instruct',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant. You must answer only in Thai.',
                },
                {
                    role: 'user',
                    content: searchTerm,
                },
            ],
            max_tokens: 500,
            temperature: 0.7,
            top_p: 1,
            top_k: 50,
            repetition_penalty: 1.15,
            stream: false,
        }
        const response = await axios.post(
            'https://api.opentyphoon.ai/v1/chat/completions',
            requestData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.API_KEY}`,
                },
            }
        )
        return res.status(200).json(response.data.choices[0].message.content)
    }
    catch (err) {
        return res.status(400).json(err)
    }
}
