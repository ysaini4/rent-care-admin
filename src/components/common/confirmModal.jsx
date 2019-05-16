import React from "react";

const ConfirmModal = ({ onDelete, deleteId }) => {
  return (
    <div className="modal fade" id="modal-confirm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>Are You Sure to delete</h4>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn bg-green pull-left"
              data-dismiss="modal"
              onClick={() => onDelete(deleteId)}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-danger pull-left"
              data-dismiss="modal"
            >
              No
            </button>
          </div>
        </div>
        {/* <!-- /.modal-content --> */}
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
  );
};

export default ConfirmModal;
