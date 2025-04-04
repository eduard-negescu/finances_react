import { React } from "react";
import { FormData } from "../types";

interface Props {
  formData: FormData;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TransactionForm: React.FC<Props> = ({
  formData,
  handleInputChange,
  handleFormSubmit,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          className="form-control"
          id="amount"
          name="amount"
          onChange={handleInputChange}
          value={formData.amount}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          onChange={handleInputChange}
          value={formData.category}
        />
      </div>

      <div className="mb-3 mt-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={handleInputChange}
          value={formData.description}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="isIncome" className="form-label">
          Income?
        </label>
        <input
          type="checkbox"
          id="isIncome"
          name="isIncome"
          onChange={handleInputChange}
          checked={formData.isIncome}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="text"
          className="form-control"
          id="date"
          name="date"
          onChange={handleInputChange}
          value={formData.date}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
