import { useState } from "react";
import axios from "axios";

const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export default function Main() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleFormData(e) {
    const isPublic =
      e.target.type === "checkbox" ? e.target.value : e.target.checked;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(apiUrl, formData).then((res) => {
      console.log(res);
    });

    setFormData(initialFormData);
  }

  return (
    <main>
      <div className="container">
        <form>
          <label htmlFor="author" className="form-label mt-3">
            Autore
          </label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleFormData}
            placeholder="Inserisci il nome dell'autore del post"
          />

          <label htmlFor="title" className="form-label mt-3">
            Titolo
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormData}
            placeholder="Inserisci il titolo del post"
          />

          <label htmlFor="body" className="form-label mt-3">
            Testo
          </label>
          <textarea
            className="form-control"
            name="body"
            value={formData.body}
            onChange={handleFormData}
            placeholder="Inserisci il testo del post"
          ></textarea>

          <input
            type="checkbox"
            name="public"
            value={true}
            onChange={handleFormData}
          />
          <label htmlFor="public" className="form-check-label m-2">
            Rendi pubblico
          </label>

          <button
            className="btn btn-primary d-block m-auto"
            onClick={handleSubmit}
          >
            Invia i dati
          </button>
        </form>
      </div>
    </main>
  );
}
