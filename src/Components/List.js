import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newAdd } from "./Selecters/Selecter";
import { deletedList } from "./Redux/Actions/Action";
import { removeId } from "./Selecters/Selecter";
import { removedList } from "./Redux/Actions/Action";
import { editList } from "./Redux/Actions/Action";
import { searchList } from "./Redux/Actions/Action";
import { statusList } from "./Redux/Actions/Action";

function List() {
  const data = useSelector(newAdd);
  const dataId = useSelector(removeId);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removedList(dataId));
  };
  const handleSearch = (e) => {
    dispatch(searchList(e.target.value));
  };
  const [search, setSearch] = useState();
  const handleStatus = () => {
    dispatch(statusList(search));
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "900px",
          marginTop: "50px",
          backgroundColor: "rgb(249, 241, 241)",
        }}
      >
        <div className="header" style={{ textAlign: "center" }}>
          <h3 style={{ fontWeight: "bold" }}>To Do List</h3>
          <p> Author: Ninh Van Hieu</p>
        </div>
        <br />
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search name..."
              onChange={handleSearch}
            />
          </div>
          <div className="col-3">
            <select
              className="form-control"
              id="status"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <option value="Complete">Complete</option>
              <option value="UnComplete">UnComplete</option>
            </select>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-info btn-block"
              onClick={handleStatus}
            >
              Search
            </button>
          </div>
          <div className="col-2" />
          <div className="col-2">
            <button type="button" className="btn btn-success btn-block">
              <Link
                to="/add"
                style={{ textDecoration: "none", color: "white" }}
              >
                New Add
              </Link>
            </button>
          </div>
          <table className="table table-bordered" style={{ marginTop: "60px" }}>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Start day</th>
                <th scope="col"> Finished day</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                      <th scope="row">{item.id.slice(0, 2)}</th>
                      <td>{item.user.name}</td>
                      <td>{item.user.status}</td>
                      <td>{item.user.start}</td>
                      <td>{item.user.finish}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-block"
                        >
                          <Link
                            to="/edit"
                            style={{ textDecoration: "none", color: "white" }}
                            onClick={(e) => dispatch(editList(item.id))}
                          >
                            Edit
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-block"
                          data-toggle="modal"
                          data-target="#deleteModal"
                          onClick={(e) => dispatch(deletedList(item.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal delete*/}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                You definitely want to delete this note!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal delete */}
    </>
  );
}

export default List;
