import { ExpandMoreIcon } from "@/components/icons/icons";

const Select = () => {
  return (
    <div>
      <select
        id="default"
        className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-form-input dark:border-gray-600 dark:placeholder-gray-400 block w-18 appearance-auto rounded-lg border p-2 text-sm hover:appearance-none focus:border-blue-500 focus:ring-blue-500 dark:text-form-input dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  );
};

export default Select;
