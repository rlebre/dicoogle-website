import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  valid: boolean;
};

const validateCaptcha = (response_key: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const secret_key = process.env.RECAPTCHA_SECRET;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
      method: 'post',
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { token } = req.body;

  console.log(token);
  validateCaptcha(token)
    .then((valid: boolean) => {
      res.status(200).json({ valid });
    })
    .catch(() => {
      res.status(404);
    });
}
