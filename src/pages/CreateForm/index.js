import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../store/slice/userSlice";
import DisplayData from "../../components/DisplayData";

const CreateForm = () => {
  const [users, setUsers] = useState({
    name: "",
    title: "",
    description: "",
    // gender:''
  });
  const { loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      ...users,
    };
    dispatch(createUser(params));
    setUsers({
      name: "",
      title: "",
      description: "",
      // gender:''
    });
  };
  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={users?.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            type="title"
            name="title"
            class="form-control"
            value={users?.title}
            onChange={handleChange}
            placeholder="Enter Title"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <input
            type="text"
            name="description"
            class="form-control"
            value={users?.description}
            placeholder="Enter Description"
            onChange={handleChange}
            required
          />
        </div>
        {/* <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={users?.gender==='Male'}
            onChange={handleChange}
            required
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={users?.gender==='Female'}
            onChange={handleChange}
          />
          <label class="form-check-label">Female</label>
        </div> */}

        <button type="submit" class="btn btn-primary">
          {loading ? "Submiting..." : "Submit"}
        </button>
      </form>
      <DisplayData />
    </div>
  );
};

export default CreateForm;
