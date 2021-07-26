import queryString from 'querystring'
import { NextApiRequest, NextApiResponse } from 'next'


import positionStack from "services/positionStack"

async function address (req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'GET')  return res.status(404).send('')

  const query = queryString.stringify({
    access_key: process.env.ADDRESS_API_KEY,
    query: req.query.query,
    limit: 5,
    output: 'json'
  })

  console.log(query)

  const { data } = await positionStack.get(`/forward?${query}`)

  return res.json(data.data)
}

export default address
