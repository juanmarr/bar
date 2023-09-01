export default function AddTopic() {
  return (
    <form className=" p-3">
      <div className="mb-3">
        <label  className="form-label">
          Drink
        </label>
        <input
          type="text"
          className="form-control w-25" 
        />
      </div>
      <div class="mb-3">
        <label className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control w-25"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
