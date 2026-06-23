export default function MainComponent() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="main">
      <form className="main-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. pasta"
          aria-label="Add ingredient"
        />

        <button onClick={handleSubmit} type="submit">
          Add ingredient
        </button>
      </form>
    </main>
  );
}