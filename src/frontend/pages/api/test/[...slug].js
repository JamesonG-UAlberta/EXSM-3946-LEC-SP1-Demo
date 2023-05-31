// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (!["GET", "POST"].includes(req.method)) return res.status(405).json({error: "Method not allowed."});
  if (req.method === 'POST') {
    console.log("POST");
    return res.status(200).json({ message: req.query.slug.toString()+" Hello [POST] from the API!" });
  }
  if (req.method === 'GET') {
    console.log("GET");
    return res.status(200).json({ message: req.query.slug.toString()+" Hello [GET] from the API!" });
  }
  return res.status(500).json({ error: "Reached the end of the API method with no response." });
}
