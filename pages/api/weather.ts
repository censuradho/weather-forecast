import queryString from 'querystring'

import { NextApiRequest, NextApiResponse } from 'next'

import weatherAPI from 'services/weatherAPI'

async function weather (req: NextApiRequest, res: NextApiResponse) {
  const language = req.query.lang || 'pt'
  const city = req.query.city || 'Porto Alegre'
  const days = req.query.days || 5
 
  try {
    const query = queryString.stringify({
      key: process.env.WEATHER_API_KEY,
      lang: language,
      q: city,
      days,
    })

    const { data } = await weatherAPI.get(`/forecast.json?${query}`)
  
    return res.json(data)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
    
  }
}

export default weather