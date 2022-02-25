export default function ServerConnect () {
  const url = process.env.REACT_APP_BACKEND_URL;

    async function postData (path: string, obj: object) {
      const res = await fetch(
        `${url}/${path}`,
        {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(obj)
        }
      );
      const body = await res.json();
      return body
    }

    async function login (name: string, pass: string) {
      throw new Error('not implemented')
    }

  return {
    postData,
    login
  }
};