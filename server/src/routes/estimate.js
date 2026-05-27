const express = require('express');
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

router.get('/test', async (req, res) => {
  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: 'List the main materials needed to cosplay as Naruto Uzumaki from Naruto. Include estimated costs and build time.',
        },
      ],
    });

    console.log(message.content);
    res.status(200).json({ response: message.content });
  } catch (error) {
    console.error('Anthropic API error:', error);
    res.status(500).json({ error: 'Failed to reach Anthropic API' });
  }
});

module.exports = router;