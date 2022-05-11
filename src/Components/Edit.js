import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateList } from "./Redux/Actions/Action";

function Edit() {
  const today = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const dataEdit = data.content.find((item) => item.id === data.editId);
  const [user, setUser] = useState(dataEdit.user);
  const handleUpdate = () => {
    dispatch(updateList(dataEdit.id, user));
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "900px",
          backgroundColor: "rgb(249, 241, 241)",
          marginTop: "50px",
        }}
      >
        <div className="header" style={{ textAlign: "center" }}>
          <h3 style={{ fontWeight: "bold" }}>Edit To Do List</h3>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="form-group" style={{ paddingTop: "40px" }}>
              <label htmlFor="name" style={{ fontWeight: "bold" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Add..."
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <br />
              <div className="row">
                <div className="col-6">
                  <label htmlFor="start" style={{ fontWeight: "bold" }}>
                    Start day
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start"
                    min={today}
                    value={user.start}
                    onChange={(e) =>
                      setUser({ ...user, start: e.target.value })
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="finished" style={{ fontWeight: "bold" }}>
                    Finished day
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="finished"
                    min={user.start}
                    value={user.finish}
                    onChange={(e) =>
                      setUser({ ...user, finish: e.target.value })
                    }
                  />
                </div>
              </div>
              <br />
              <label htmlFor="des" style={{ fontWeight: "bold" }}>
                Description
              </label>
              <textarea
                className="form-control"
                id="des"
                rows={6}
                value={user.des}
                onChange={(e) => setUser({ ...user, des: e.target.value })}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group" style={{ paddingTop: "40px" }}>
              <label htmlFor="status" style={{ fontWeight: "bold" }}>
                Status
              </label>
              <select
                className="form-control"
                id="status"
                value={user.status}
                onChange={(e) => setUser({ ...user, status: e.target.value })}
              >
                <option value="Complete">Complete</option>
                <option value="UnComplete">UnComplete</option>
              </select>
              <div className="row" style={{ paddingTop: "270px" }}>
                <div className="col-6">
                  <button type="button" className="btn btn-primary btn-block">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={handleUpdate}
                    >
                      Update
                    </Link>
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-danger btn-block">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Cancel
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
