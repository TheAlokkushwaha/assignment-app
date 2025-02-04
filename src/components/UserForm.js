import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { Card } from './ui/card';

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    setIsDirty(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  return (
    <div className="p-8">
      <Card className="max-w-lg mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'address', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label className="block mb-1 capitalize">{field}:</label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
        {isDirty && (
          <Alert className="mt-4">
            <AlertDescription>
              You have unsaved changes. Please save before leaving.
            </AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default UserForm;