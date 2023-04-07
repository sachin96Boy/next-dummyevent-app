import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, text } = req.body;

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).send({
                message: 'Invalid Input'
            });
            return;
        }
        console.log(email, name, text);
        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        };
        res.status(200).send({
            message: "added comment success",
            comment: newComment
        });
    }
    if (req.method === 'GET') {
        const dummyList = [
            {
                id: 'c1',
                name: 'max',
                text: 'first comment from max'
            },
            {
                id: 'c2',
                name: 'samantha',
                text: 'samantha commented on this'
            }
        ];
        res.status(200).send({
            comments: dummyList
        });
    }
}