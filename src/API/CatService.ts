import axios from "axios";

export default class CatService {
  static async getCats(page: number) {
    return await axios.get("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key":
          "live_rYRVEPVXe5m5QrrNKXHIAEIZrBk7ddRwWMhHSK9fOODZHpqWG2g6D1srIRi8GJLy",
      },
      params: {
        limit: 25,
        page: page,
      },
    });
  }

  static async getCat(id: string) {
    return await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
