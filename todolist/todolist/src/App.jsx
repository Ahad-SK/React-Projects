
function App() {
  return (
    <center>
      <h1>To Do List</h1>
      <div class="container text-center">
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <input type="text" placeholder="Enter tasks" class="form-control" />
            </div>
            <div class="col-4">
              <input type="date" class="form-control" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-primary">Add</button>
            </div>
          </div>

          <div class="row justify-content-center mt-3">
            <div class="col-4">
              <span>Add Milk</span>
            </div>
            <div class="col-4">
              <span>24/09/2024</span>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
