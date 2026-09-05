import React, { useState } from "react";

const Employee = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    employeeId: "",
    password: "",
    fullName: "",
    joinDate: "",
    creator: "",
    update: "",
    designation: "",
    phoneNumber: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees([...employees, formData]);

    setFormData({
      email: "",
      employeeId: "",
      password: "",
      fullName: "",
      joinDate: "",
      creator: "",
      update: "",
      designation: "",
      phoneNumber: "",
      department: "",
    });

    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Employees
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your CRM employees
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
        >
          + New Employee
        </button>
      </div>

      {/* Employee List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Employee List
          </h2>
        </div>

        {employees.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <p>No employees added yet.</p>
            <p className="text-sm mt-1">
              Click "New Employee" to add an employee.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-left">Employee ID</th>
                  <th className="px-5 py-3 text-left">Full Name</th>
                  <th className="px-5 py-3 text-left">Email</th>
                  <th className="px-5 py-3 text-left">Designation</th>
                  <th className="px-5 py-3 text-left">Department</th>
                  <th className="px-5 py-3 text-left">Phone</th>
                  <th className="px-5 py-3 text-left">Join Date</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-5 py-3">
                      {employee.employeeId}
                    </td>

                    <td className="px-5 py-3 font-medium">
                      {employee.fullName}
                    </td>

                    <td className="px-5 py-3">
                      {employee.email}
                    </td>

                    <td className="px-5 py-3">
                      {employee.designation}
                    </td>

                    <td className="px-5 py-3">
                      {employee.department}
                    </td>

                    <td className="px-5 py-3">
                      {employee.phoneNumber}
                    </td>

                    <td className="px-5 py-3">
                      {employee.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* New Employee Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  New Employee
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Add a new employee to the CRM portal
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Email */}
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* Employee ID */}
                <InputField
                  label="Employee ID"
                  name="employeeId"
                  placeholder="Enter employee ID"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                />

                {/* Password */}
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                {/* Full Name */}
                <InputField
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                {/* Join Date */}
                <InputField
                  label="Join Date"
                  name="joinDate"
                  type="date"
                  value={formData.joinDate}
                  onChange={handleChange}
                  required
                />

                {/* Creator */}
                <InputField
                  label="Creator"
                  name="creator"
                  placeholder="Enter creator"
                  value={formData.creator}
                  onChange={handleChange}
                />

                {/* Update */}
                <InputField
                  label="Update"
                  name="update"
                  placeholder="Enter update"
                  value={formData.update}
                  onChange={handleChange}
                />

                {/* Designation */}
                <InputField
                  label="Designation"
                  name="designation"
                  placeholder="Enter designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />

                {/* Phone */}
                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                {/* Department */}
                <InputField
                  label="Department"
                  name="department"
                  placeholder="Enter department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-7 pt-5 border-t">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                  Submit
                </button>

              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};


// Reusable Input Component
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg
        outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        placeholder:text-gray-400"
      />
    </div>
  );
};

export default Employee;