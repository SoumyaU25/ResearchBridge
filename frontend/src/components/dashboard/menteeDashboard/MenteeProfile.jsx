import { FaRegEdit } from "react-icons/fa";

const MenteeProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center relative">
        <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                      />
          <div className="ml-6">
            <h1 className="text-xl font-bold text-gray-700 mb-4">Mentee-Name <span className="text-gray-400">(They/Them)</span></h1>
            <p className="text-gray-600">Qualification</p>
          </div>
          <FaRegEdit className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-4 text-gray-700 mb-4">
          <Section title="About" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
          <Section title="My Work" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
          <Section title="Contact Me" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
        </div>
      </main>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default MenteeProfile;
