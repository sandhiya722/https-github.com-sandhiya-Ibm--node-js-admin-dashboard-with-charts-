// src/components/EditItem.js
import React, { useState, useEffect } from 'react';

const EditItem = ({ item, onUpdate }) => {
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    if (item) {
      setForm({ title: item.title, description: item.description });
    }
  }, [item]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(item.id, form);
  };

  if (!item) return <div>Select an item to edit</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Item</h3>
      <div>
        <label>Title:</label>
        <input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditItem;
