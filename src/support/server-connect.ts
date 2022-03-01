export default function ServerConnect () {
  const url = process.env.REACT_APP_BACKEND_URL;

    async function postData (path: string, obj: object) {
      let res
      try {
        res = await fetch(
          url + path,
          {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
          }
        );
      } catch (e) {
        return null;
      }
      return res.json();
    }

    async function login (name: string, pass: string) {
      throw new Error('not implemented')
    }

  return {
    postData,
    login
  }
};