// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="app-wrapper app-form d-flex flex-column align-items-center">
    <h1>RSS-агрегатор</h1>
    <form action="/add-feed" method="post" class="app-form d-flex flex-column align-items-center justify-content-center">
      <label for="rss-url" class="mb-2">Введите URL RSS-потока:</label>
      <input
      id="rss-url"
      type="text"
      name="rss-url"
      required
      placeholder="https://example.com/feed.xml"
      class="mb-2"
      >
      <button type="submit"
      class="btn btn-primary"
      >
        Добавить
      </button>
    </form>
 </div>
`

// setupCounter(document.querySelector('#counter'))
