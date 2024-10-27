import { FiBell, FiHelpCircle, FiSettings } from "solid-icons/fi";

export default function Navbar() {
  return (
    <nav class="bg-white shadow-md px-4 h-16 flex items-center justify-end">
      <div class="flex items-center gap-4">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <FiBell size={20} />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <FiSettings size={20} />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <FiHelpCircle size={20} />
        </button>
      </div>
    </nav>
  );
}
