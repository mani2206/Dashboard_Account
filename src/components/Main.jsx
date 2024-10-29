import React from "react";
import DataContext from "../context/DataContext";
import { useContext } from "react";

export default function Main() {
  const {
    filteredExpenses,
    handleSelectAll,
    handleSelectExpense,
    deleteExpense,
    addExpense,
    handleChange,
    selectedExpenses,
    setSelectedExpenses,
    expenses,
    setExpenses,
    formData,
    setFormData,
    searchQuery,
    setSearchQuery,
  } = useContext(DataContext);

  return (
    <div className="flex-1 p-4 lg:p-6">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-700">Accounts</div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="rounded-[20px] border rounded-md px-4 py-2"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <button className="relative flex items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition mx-3">
              <i className="bi bi-bell"></i>
            </button>

            <button className="relative flex items-center gap-2  items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition">
              <i className="bi-gear"></i>
            </button>
            <div className="relative ml-[59px]">
              <img
                src="https://via.placeholder.com/40x40"
                alt="User Avatar"
                className="rounded-full"
              />
              <div className="absolute top-0 right-[35px] px-2">
                <p className="text-sm font-semibold">Nabila</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Add Expense Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
          <div className="md:col-span-1">
            <label
              htmlFor="invoiceNo"
              className=" font-extralight lg:text-sm block text-gray-700 mb-1"
            >
              Invoice No
            </label>
            <input
              type="text"
              id="invoiceNo"
              name="invoiceNo"
              value={formData.invoiceNo}
              onChange={handleChange}
              placeholder=""
              className="p-0.2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="date"
              className="font-extralight  lg:text-smblock text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-0.2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="font-extralight lg:text-sm block text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder=""
              className="p-0.2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="dr"
              className="font-extralight lg:text-sm block text-gray-700 mb-1"
            >
              DR
            </label>
            <input
              type="number"
              id="dr"
              name="dr"
              value={formData.dr}
              onChange={handleChange}
              placeholder=""
              className="p-0.2 border border-gray-300  rounded-md w-full"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="cr"
              className="font-extralight lg:text-sm block text-gray-700 mb-1"
            >
              CR
            </label>
            <input
              type="number"
              id="cr"
              name="cr"
              value={formData.cr}
              onChange={handleChange}
              placeholder=""
              className=" p-0.2 border border-gray-300  rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 border border-purple-600 text-purple-600 bg-transparent py-2 mx-2 px-4 rounded-md hover:bg-purple-600 hover:text-white transition">
            <i className="bi bi-plus"></i>
            Add invoice
          </button>

          <button
            onClick={addExpense}
            className="bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 w-1/4 rounded-[25px]"
          >
            Add
          </button>
        </div>
      </div>

      {/* Expense Table */}
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">
                <input
                  type="checkbox"
                  checked={
                    selectedExpenses.length === expenses.length &&
                    expenses.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="border-b p-2 font-extralight text-sm ">SL No</th>
              <th className="border-b p-2 font-extralight text-sm ">Date</th>
              <th className="border-b p-2 font-extralight text-sm ">
                Invoice No
              </th>
              <th className="border-b p-2 font-extralight text-sm ">
                Description/Remark
              </th>
              <th className="border-b p-2 font-extralight text-sm ">DR</th>
              <th className="border-b p-2 font-extralight text-sm ">CR</th>
              <th className="border-b p-2 font-extralight text-sm ">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense, index) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="border-b p-2">
                    <input
                      type="checkbox"
                      checked={selectedExpenses.includes(expense.id)}
                      onChange={() => handleSelectExpense(expense.id)}
                    />
                  </td>
                  <td className="border-b p-2">{index + 1}</td>
                  <td className="border-b p-2">{expense.date}</td>
                  <td className="border-b p-2">{expense.invoiceNo}</td>
                  <td className="border-b p-2">{expense.description}</td>
                  <td className="border-b p-2">{expense.dr}</td>
                  <td className="border-b p-2">{expense.cr}</td>
                  <td className="border-b p-2 flex">
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className=" px-2 text-red-500 hover:text-red-700"
                    >
                      <i className="bi bi-receipt"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center border-b p-4 text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
