// src/components/AddNewItem.js
import React, { useState } from 'react';

const AddNewItem = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Item</h3>
      <div>
        <label>Title:</label>
        <input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNewItem;
