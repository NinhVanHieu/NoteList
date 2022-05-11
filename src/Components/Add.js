import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "./Redux/Actions/Action";

function Add() {
  const today = new Date().toISOString().slice(0, 10);
  const [statusName, setStatusName] = useState(false);
  const [statusDes, setStatusDes]=useState(false)
  const [user, setUser] = useState({
    name: "",
    start: today,
    finish: "",
    des: "",
    status: "UnComplete",
  });
  const dispatch = useDispatch();
  const [info, setInfo]=useState(()=>{
    return JSON.parse(localStorage.getItem('noteList')) ?? []
  })
  const handleAdd = () => {
    setStatusName(user.name===''?true:false)
    setStatusDes(user.des===''?true:false)
    user.name &&
      user.des &&
      dispatch(
        addList({
          id: uuidv4(),
          user,
        })
      );
      user.name &&
      user.des &&
      setInfo((prev)=>{
        const newInfo=[...prev,{ id: uuidv4(),
          user}]
          localStorage.setItem('noteList', JSON.stringify(newInfo))
        return newInfo
      })
      setUser({
        name: "",
        start: today,
        finish: "",
        des: "",
        status: "UnComplete",
      })
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
          <h3 style={{ fontWeight: "bold" }}>Add To Do List</h3>
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
                aria-describedby="name"
                placeholder="Add..."
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
              {statusName && user.name === "" && (
                <small id="name" style={{ color: "red" }}>
                  Please enter the note name
                </small>
              )}
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
                    onChange={(e) => {
                      setUser({ ...user, start: e.target.value });
                    }}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="finished" style={{ fontWeight: "bold" }}>
                    Finished day
                  </label>
                  <input
                    type="date"
                    min={today}
                    className="form-control"
                    id="finished"
                    value={user.finish}
                    onChange={(e) => {
                      setUser({ ...user, finish: e.target.value });
                    }}
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
                aria-describedby="des"
                value={user.des}
                onChange={(e) => {
                  setUser({ ...user, des: e.target.value });
                }}
              />
              {statusDes && user.des === "" && (
                <small id="des" style={{ color: "red" }}>
                  Please enter a detailed description
                </small>
              )}
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
                onChange={(e) => {
                  setUser({ ...user, status: e.target.value });
                }}
              >
                <option value="Complete">Complete</option>
                <option value="UnComplete">UnComplete</option>
              </select>
              <div className="row" style={{ paddingTop: "270px" }}>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={handleAdd}
                  >
                    Save
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

export default Add;
