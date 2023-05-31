// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Filter out any bad methods that we aren't handling.
  if (!["GET", "POST"].includes(req.method)) return res.status(405).json({error: "Method not allowed."});
  // Switch from the method in question.
  if (req.method === 'POST') {
    console.log("POST");
    // Return a set response status code and body affixed to the "res" (response) object.
    return res.status(200).json({ message: "[HOME] Hello [POST] from the API!" });
  }
  if (req.method === 'GET') {
    console.log("GET");
    console.log(req.headers);
    if (req.headers["content-type"] == "application/json") return res.status(200).json({ message: "[HOME] Hello [GET] from the API!" });
    else return res.status(200).send("[HOME] Hello [GET] from the API!");
  }
  return res.status(500).json({ error: "Reached the end of the API method with no response." });
}

/*
Routing

Next.js has a file-system based router built on the concept of pages.
index.js is loaded if the slug provided leads to a folder.
If the slug provided leads to a file, that file is loaded instead.
Dynamic slugs can be formed using square brackets [name] - in the API, this can be accessed with req.query.name.
Global dynamic slugs are the same, prefixed by an elipses [...name]. This will also catch subfolders, slugs are split into an array.
*/