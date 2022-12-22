import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const[type, typechange] = useState("")
    const[nomor, nomorchange] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const emptdata = {nomor, type}
        fetch('http://127.0.0.1:8000/api/add-antrian',{
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(emptdata)
        }).then((res)=>{
            alert('create data success')
            navigate('/')
        })
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-title">
                <h3>Create Antrian</h3>
              </div>
              <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Type
                    </label>
                    <input
                      type="text"
                      value={type}
                      className="form-control"
                      name="id"
                      onChange={(e) => typechange(e.target.value)}

                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Nomor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={nomor}
                      onChange={(e) => nomorchange(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
