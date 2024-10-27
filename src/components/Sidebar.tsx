import { FiBell, FiMenu } from "solid-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const mockProjects = [
    "Project Alpha",
    "Project Beta",
    "Project Gamma",
    "Project Delta",
  ];

  return (
    <>
      {/* Only show floating button when sidebar is closed */}
      {!props.isOpen && (
        <button
          onClick={props.onToggle}
          class="fixed top-4 left-4 p-2 hover:bg-background-secondary rounded-lg bg-background shadow-md"
        >
          <FiMenu size={24} />
        </button>
      )}

      <div
        class={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 ${
          props.isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div class="p-4 border-b">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-background-secondary rounded-full"></div>
            <div>
              <div class="font-medium text-text">John Doe</div>
              <div class="text-sm text-text-secondary">john@example.com</div>
            </div>
            <div class="ml-auto flex items-center gap-2">
              <button class="p-2 hover:bg-background-secondary rounded-lg text-text">
                <FiBell size={20} />
              </button>
              {/* Menu button moved to the right */}
              {props.isOpen && (
                <button
                  onClick={props.onToggle}
                  class="p-2 hover:bg-background-secondary rounded-lg text-text"
                >
                  <FiMenu size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div class="p-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search projects..."
              class="w-full px-4 py-2 border rounded-lg bg-background text-text placeholder-text-secondary"
            />
          </div>

          <div class="mt-4">
            <h3 class="text-sm font-medium text-text-secondary mb-2">
              Projects
            </h3>
            <ul class="space-y-2">
              {mockProjects.map((project) => (
                <li class="px-2 py-1.5 hover:bg-background-secondary rounded-lg cursor-pointer text-text">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
