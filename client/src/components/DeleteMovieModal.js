import React from "react";
import { useHistory, useParams } from "react-router-dom";

const DeleteMovieModal = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const deleteHandler = () => {
    props.deleteMovie(id);
    push("/movies");
  };

  const cancelHandler = () => {
    props.modalHandler();
  };
  return (
    <div id="deleteMovieModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Movie</h4>
              <button
                onClick={cancelHandler}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                onClick={cancelHandler}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                onClick={deleteHandler}
                type="submit"
                className="btn btn-danger"
                value="Delete"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;
