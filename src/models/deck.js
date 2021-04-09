const url = 'http://localhost:4000';

class DeckModel {
  static all = () => {
    return fetch(`${url}/`).then(res => res.json());
  }

  static findOne = (id) => {
    return fetch(`${url}/deck/${id}`).then(res => res.json());
  }
}

export default DeckModel;