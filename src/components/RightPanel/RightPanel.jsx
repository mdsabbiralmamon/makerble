import { useState } from 'react';
import { BsFillMortarboardFill } from 'react-icons/bs';
import { FaRegCircle } from 'react-icons/fa'; // For task priority indicators
import 'react-tabs/style/react-tabs.css';

const RightSidebar = () => {
  const [isBoardsOpen, setBoardsOpen] = useState(true); // State to toggle Boards section
  const [filter, setFilter] = useState('All'); // State for task filtering

  // Sample task data with priorities
  const tasks = [
    { id: 1, title: 'Task 1', priority: 'high' },
    { id: 2, title: 'Task 2', priority: 'medium' },
    { id: 3, title: 'Task 3', priority: 'low' },
    { id: 4, title: 'Task 4', priority: 'medium' },
    { id: 5, title: 'Task 5', priority: 'high' },
    { id: 6, title: 'Task 6', priority: 'low' },
  ];

  // Filter tasks based on the selected priority filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return task.priority === filter.toLowerCase();
  });

  return (
    <div className="z-10 rounded-lg mt-4 bg-gradient-to-r from-blue-100 via-green-100 to-red-100 h-[calc(100vh-92px)] w-64 shadow-lg p-4 text-[#333] overflow-y-auto">
      
      {/* Boards Section: Collapsible section displaying board names */}
      <div className="collapse collapse-arrow border border-blue-300 bg-white rounded-box mb-4">
        <input type="checkbox" checked={isBoardsOpen} onChange={() => setBoardsOpen(!isBoardsOpen)} />
        <div className="collapse-title text-lg font-semibold flex items-center text-blue-600 hover:text-blue-500">
          <BsFillMortarboardFill className="mr-2" /> Boards
        </div>
        <div className={`collapse-content space-y-2 ${isBoardsOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center text-[#444]">
            <img src='/images/makerbleLogo.png' className="w-8 h-8 mr-2" alt="Board Logo" />
            <span>Production</span>
          </div>
          <div className="flex items-center text-[#444]">
            <img src='/images/makerbleLogo.png' className="w-8 h-8 mr-2" alt="Board Logo" />
            <span>Reporting</span>
          </div>
          <div className="flex items-center text-[#444]">
            <img src='/images/makerbleLogo.png' className="w-8 h-8 mr-2" alt="Board Logo" />
            <span>RYH</span>
          </div>
          <div className="flex space-x-4 mt-2">
            <button className="text-blue-500 text-sm hover:text-blue-700" onClick={() => alert('View All Boards')}>View All</button>
            <button className="text-green-500 text-sm hover:text-green-700" onClick={() => alert('Open Add Board Modal')}>+ Add</button>
          </div>
        </div>
      </div>

      {/* Tasks Section: Displaying tasks with priority filter */}
      <div className="bg-white border border-blue-300 rounded-box p-4 mb-4">
        <h3 className="font-semibold text-lg text-blue-600 mb-2">Tasks</h3>
        
        {/* Filter Dropdown for Task Priority */}
        <div className="flex justify-between items-center mb-2">
          <select 
            className="border border-gray-300 rounded-full p-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
        
        {/* Displaying filtered tasks */}
        {filteredTasks.slice(0, 5).map((task) => (
          <div key={task.id} className="flex items-center mb-2">
            {/* Priority Indicator with color based on task priority */}
            <span className={`mr-2 text-lg ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>
              <FaRegCircle />
            </span>
            <span>{task.title}</span>
          </div>
        ))}
        
        <div className="flex justify-between mt-2">
          <button className="text-blue-500 text-sm hover:text-blue-700" onClick={() => alert('View All Tasks')}>View All</button>
          <button className="text-green-500 text-sm hover:text-green-700" onClick={() => alert('Open Add Task Modal')}>+ Add</button>
        </div>
      </div>

      {/* Personal Progress Section: Visualizing completion and ongoing task percentages */}
      <div className="bg-white border border-blue-300 rounded-box p-4">
        <h3 className="font-semibold text-lg text-blue-600 mb-2">Personal Progress</h3>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
            75%
          </div>
          <span className="ml-2">Completed Tasks</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center text-white font-bold">
            50%
          </div>
          <span className="ml-2">Ongoing Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
