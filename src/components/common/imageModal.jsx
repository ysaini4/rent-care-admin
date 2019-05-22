import React from "react";

const ImageModal = ({ imageSrc }) => {
  return (
    <div className="modal fade" id="modal-default">
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
            <img src={imageSrc} alt="Property" style={{ width: "100%" }} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default pull-left"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
        {/* <!-- /.modal-content --> */}
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
  );
};

export default ImageModal;
