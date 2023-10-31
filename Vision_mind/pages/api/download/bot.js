import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from 'next';
// import dotenv from 'dotenv';

// dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req,res) {
  
  if (req.method === 'POST') {
    const { question } = req.query;
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "assistant", content: question
        }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const data = response.data.choices[0].message.content;

      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}


// datas={  
//     "employee": {  
//         "name":       "sonoo",   
//         "salary":      56000,   
//         "married":    true  
//     }  
// } 
// function convertToXml(data) {
//     return json2xml(data, { compact: true, spaces: 4 });
//   } 