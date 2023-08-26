## Deploy JSON Server to Vercel

A template to deploy [JSON Server](https://github.com/typicode/json-server) to [Vercel](https://vercel.com), allow you to run fake REST API online!

Demo from this repository: 

1. [https://json-server-in.vercel.app](https://codx-json-server.vercel.app/)
2. [https://json-server-in.vercel.app/api/posts](https://codx-json-server.vercel.app/Menu)
3. https://codx-json-server.vercel.app/feedback

### How to use

1. Click "**Use this template**" or clone this repository.
2. Update or use the default [`db.json`](./db.json) in the repository.
3. Sign Up or login into [Vercel](https://vercel.com).
4. From the Vercel dashboard, click "**+ New Project**" then "**Import**" your repository.
5. In the "**Configure Project**" screen, leave everything default and click "**Deploy**".
6. Wait until deployment is done, and your own JSON server is ready to serve!

## Default `db.json`

```json
{
  "Menu": [
    {
        "section_name": "Desserts",
        "items": [
            {
                "name": "Chocolate Lava Cake",
                "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
                "price": 6.99,
                "image": "https://github.com/codx-paradise/Json-Server/blob/main/Images/breakfast1.png"
            }
  ],
  "feedback": [
    {
        "customer_name": "Emily Johnson",
        "rating": 4.8,
        "feedback_text": "I had an amazing stay at Luxury Haven Hotel. The staff was incredibly welcoming, and the room was spacious"
    }
  ]
}
```

