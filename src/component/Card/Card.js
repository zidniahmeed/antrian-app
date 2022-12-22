import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
  const [nomor, nomorchange] = useState(props.id);
  const [update, updatechange] = useState(props.id);
  const navigate = useNavigate();
  const { empid } = useParams();

  const handlesubmitNonActive = (e) => {
    e.preventDefault();
    const emptdata = { nomor };
    console.log(emptdata);
    fetch("http://127.0.0.1:8000/api/update-antrian/" + emptdata.nomor, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(emptdata),
    }).then((res) => {
      // alert("create data success");
      window.location.reload(false);
    });
  };
  const handlesubmitActive = (e) => {
    e.preventDefault();
    const emptdata = { update };
    console.log(emptdata.update);
    fetch("http://127.0.0.1:8000/api/undo-antrian/" + emptdata.update, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(emptdata),
    }).then((res) => {
      // alert("create data success");
      window.location.reload(false);
    });
  };
  const status =  props.status 
  console.log(status) 
  return (
    <>
      <div className="col-md-2">
        <div className="card p-2">
          <div className="card-title">
            <p>{props.type}</p>
          </div>
          <div className="card-body">
            <h5>{props.nomor}</h5>
            <div className="row">
              <div className="col-6">          
                  <form action="" onSubmit={handlesubmitNonActive}>
                    <input
                      type="hidden"
                      value={props.id}
                      className="form-control"
                      name="nomor"
                      onChange={(e) => nomorchange(e.target.value)}
                    />
                    <button className="btn btn-primary btn-sm">Selesai</button>
                  </form>     
              </div>
              <div className="col-6">
                <form action="" onSubmit={handlesubmitActive}>
                  <input
                    type="hidden"
                    value={props.id}
                    className="form-control"
                    name="update"
                    onChange={(e) => updatechange(e.target.value)}
                  />
                  <button className="btn btn-primary btn-sm">Undo</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
