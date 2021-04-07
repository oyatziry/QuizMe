const url = 'http://localhost:4000';

class AuthModel {
  static create = (formData) => {
    return fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then( res => res.json() )
  }
}

export default AuthModel;