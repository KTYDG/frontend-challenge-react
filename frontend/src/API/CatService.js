import axios from "axios";

export default class CatService {
  static async getRandomCats() {
    return await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=25",
      {
        headers: {
          "x-api-key":
            "live_rYRVEPVXe5m5QrrNKXHIAEIZrBk7ddRwWMhHSK9fOODZHpqWG2g6D1srIRi8GJLy",
        },
      }
    );
  }

  static async getCat(id) {
    return await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
