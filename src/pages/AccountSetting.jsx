import React, { useState } from 'react';
import { User, Heart, ShoppingBag, Settings, Plus, Trash2, Camera, Bell, Lock, Package, ChevronRight,Globe } from 'lucide-react';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('Personal Info');
  
  const [errors, setErrors] = useState({});
  const [showAddPet, setShowAddPet] = useState(false);
  const [pets, setPets] = useState([{ name: 'Cooper', breed: 'Golden Retriever', age: '3' }]);
  const [newPet, setNewPet] = useState({ name: '', breed: '', age: '' });
  const handleSave = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Profile updated successfully!");
    }
  };

  const menuItems = [
    { name: 'Personal Info', icon: <User size={20} /> },
    { name: 'My Pets', icon: <Heart size={20} /> },
    { name: 'Orders History', icon: <ShoppingBag size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    preferredName: "", 
    bio: "" 
  });
  const handleOrderAction = (order) => {
  switch (order.status) {
    case 'DELIVERED':
      alert(`Re-ordering items from ${order.id}...`);
      break;
    case 'IN TRANSIT':
      alert(`Redirecting to tracking page for ${order.id}...`);
      break;
    case 'PROCESSING':
      alert(`Your order ${order.id} is being processed. It will ship soon!`);
      break;
    default:
      alert("Action not available.");
  }
};
  

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 gap-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 space-y-2">
        {menuItems.map((item) => (
          <button key={item.name} onClick={() => { setActiveTab(item.name); setShowAddPet(false); }} 
            className={`flex items-center gap-3 w-full p-4 rounded-2xl transition ${activeTab === item.name ? 'bg-red-50 text-red-500 font-bold' : 'hover:bg-gray-100'}`}>
            {item.icon} {item.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border shadow-sm">
        
        {activeTab === 'Personal Info' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Personal Info</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Full Name</label>
        <input name="fullName" value={formData.fullName} onChange={handleInputChange} 
          className={`w-full p-4 border rounded-xl ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`} />
        {errors.fullName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Email Address</label>
        <input name="email" value={formData.email} onChange={handleInputChange} 
          className={`w-full p-4 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />
        {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Phone Number</label>
        <input name="phone" value={formData.phone} onChange={handleInputChange} 
          className={`w-full p-4 border rounded-xl ${errors.phone ? 'border-red-500' : 'border-gray-200'}`} />
        {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
      </div>

      {/* Preferred Name */}
      <div>
        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Preferred Name</label>
        <input name="preferredName" value={formData.preferredName} onChange={handleInputChange} 
          className={`w-full p-4 border rounded-xl ${errors.preferredName ? 'border-red-500' : 'border-gray-200'}`} />
        {errors.preferredName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.preferredName}</p>}
      </div>
    </div>

    {/* Bio - Full width */}
    <div>
      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Bio</label>
      <textarea name="bio" value={formData.bio} onChange={handleInputChange} 
        className={`w-full p-4 border rounded-xl h-24 ${errors.bio ? 'border-red-500' : 'border-gray-200'}`} />
      {errors.bio && <p className="text-red-500 text-xs mt-1 font-bold">{errors.bio}</p>}
    </div>

    <button onClick={handleSave} className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition">
      Save Changes
    </button>
  </div>
)}

      {activeTab === 'My Pets' && (
  !showAddPet ? (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Your Furry</h2>
          <h2 className="text-4xl font-bold text-red-600">Family Members</h2>
          <p className="text-gray-500 mt-2">Manage your pet's health, schedules, and details all in one warm place.</p>
        </div>
        <button 
          onClick={() => setShowAddPet(true)} 
          className="bg-red-500 text-white px-8 py-4 rounded-3xl font-bold flex items-center gap-2 hover:bg-red-600 transition shadow-lg"
        >
          <Plus size={20}/> Add New Pet
        </button>
      </div>
      
      {/* Pets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pets.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-3xl overflow-hidden flex-shrink-0">
               {/* Image placeholder */}
               <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                 <Camera className="text-gray-500" size={32}/>
               </div>
            </div>
            <div className="flex-1">
              <div className="flex gap-2 mb-2">
                <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase">Dog</span>
                <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase">Active</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{p.name}</p>
              <div className="flex gap-4 mt-2">
                <div><p className="text-[10px] text-gray-400 uppercase font-bold">Breed</p><p className="font-bold text-sm text-red-800">{p.breed}</p></div>
                <div><p className="text-[10px] text-gray-400 uppercase font-bold">Age</p><p className="font-bold text-sm text-red-800">{p.age} Years Old</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : ( 
    <div className="space-y-6">
      <button 
        onClick={() => setShowAddPet(false)} 
        className="text-sm font-bold text-gray-500 hover:text-black transition"
      >
        ← Back to My Pets
      </button>
      <h2 className="text-2xl font-bold">Add a New Family Member</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center bg-gray-50 hover:border-red-300 transition cursor-pointer">
          <Camera size={40} className="text-gray-400" />
          <p className="font-bold mt-2 text-sm">Upload Photo</p>
        </div>
        
        <div className="space-y-4">
        {/* Name Input */}
        <div>
          <input placeholder="Pet Name" className={`w-full p-4 border rounded-xl ${errors.name ? 'border-red-500' : ''}`}
            value={newPet.name} onChange={(e) => { setNewPet({...newPet, name: e.target.value}); setErrors({...errors, name: ''}) }} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Breed Input */}
        <div>
          <input placeholder="Breed" className={`w-full p-4 border rounded-xl ${errors.breed ? 'border-red-500' : ''}`}
            value={newPet.breed} onChange={(e) => { setNewPet({...newPet, breed: e.target.value}); setErrors({...errors, breed: ''}) }} />
          {errors.breed && <p className="text-red-500 text-xs mt-1">{errors.breed}</p>}
        </div>

        {/* Age Input */}
        <div>
          <input type="number" placeholder="Age" className={`w-full p-4 border rounded-xl ${errors.breed ? 'border-red-500' : ''}`}
            value={newPet.age} onChange={(e) => { setNewPet({...newPet, age: e.target.value}); setErrors({...errors, age: ''}) }} />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
        </div>
      </div>
    </div>
    
    <button 
      onClick={() => {
        let newErr = {};
        if (!newPet.name) newErr.name = "Name is required!";
        if (!newPet.breed) newErr.breed = "Breed is required!";
        if (!newPet.age) newErr.age = "Age is required!";
        
        if (Object.keys(newErr).length > 0) {
          setErrors(newErr);
        } else {
          setPets([...pets, newPet]);
          setNewPet({ name: '', breed: '', age: '' });
          setShowAddPet(false);
        }
      }}
      className="bg-red-500 text-white px-8 py-3 rounded-full font-bold w-full md:w-auto"
    >
      Save Family Member
    </button>
  </div>
)
)}

        {/* Orders History */}
{activeTab === 'Orders History' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Orders History</h2>
    
    {/* Sample Data */}
    {[
      { id: '#PWL-12345', status: 'DELIVERED', date: 'Oct 12, 2024', price: '$142.50', color: 'bg-teal-100 text-teal-700', btnText: 'Buy Again', btnColor: 'bg-teal-900 text-white' },
      { id: '#PWL-12348', status: 'IN TRANSIT', date: 'Oct 24, 2024', price: '$89.00', color: 'bg-yellow-100 text-yellow-700', btnText: 'Track Order', btnColor: 'bg-red-500 text-white' },
      { id: '#PWL-12352', status: 'PROCESSING', date: 'Yesterday, 4:32 PM', price: '$214.20', color: 'bg-gray-200 text-gray-700', btnText: 'Pending Ship', btnColor: 'bg-gray-300 text-gray-600' }
    ].map((order, i) => (
      <div key={i} className="border border-gray-100 p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Order Info */}
          <div className="flex-1">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.color}`}>{order.status}</span>
            <p className="text-lg font-bold mt-1">{order.id}</p>
            <div className="flex gap-8 mt-2 text-sm text-gray-500">
              <p>DATE PLACED<br /><span className="font-bold text-black">{order.date}</span></p>
              <p>TOTAL PRICE<br /><span className="font-bold text-black">{order.price}</span></p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <button 
    onClick={() => alert(`Showing details for ${order.id}`)} 
    className="text-sm font-bold border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition"
  >
    Order Details
  </button>
  
  <button 
    onClick={() => handleOrderAction(order)}
    className={`text-sm font-bold px-6 py-2 rounded-full transition ${order.btnColor}`}
  >
    {order.btnText}
  </button>
          </div>
        </div>
      </div>
    ))}

    {/* Need help & Refer sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
      <div className="bg-teal-50 p-6 rounded-3xl flex items-center gap-4">
        <div className="bg-white p-3 rounded-2xl"><Package className="text-teal-600"/></div>
        <div><p className="font-bold">Need help with an order?</p><p className="text-sm text-gray-600">Our experts are available 24/7.</p></div>
      </div>
      <div className="bg-red-50 p-6 rounded-3xl flex items-center gap-4">
        <div className="bg-white p-3 rounded-2xl"><Heart className="text-red-600"/></div>
        <div><p className="font-bold">Refer a Pet Parent</p><p className="text-sm text-gray-600">Give $20, get $20.</p></div>
      </div>
    </div>
  </div>
)}

        {/* Settings */}
{activeTab === 'Settings' && (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold">Settings</h2>
    <p className="text-gray-500">Manage your account preferences and security.</p>

    {/* Notification Preferences */}
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="font-bold flex items-center gap-2 mb-4"><Bell size={20} /> Notification Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Email', 'Push', 'SMS'].map((type) => (
          <div key={type} className="p-4 border rounded-2xl flex justify-between items-center bg-gray-50">
            <div>
              <p className="font-bold">{type}</p>
              <p className="text-xs text-gray-500">News and updates</p>
            </div>
            <input type="checkbox" className="toggle border-gray-300" defaultChecked={type !== 'SMS'} />
          </div>
        ))}
      </div>
    </div>

    {/* Language & Security Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold flex items-center gap-2 mb-4"><Globe size={20} /> Language</h3>
        <p className="text-xs text-gray-500 mb-2 uppercase font-bold">Primary Display Language</p>
        <select className="w-full p-3 border rounded-xl bg-gray-50">
          <option>English (United States)</option>
          <option>Tamil (தமிழ்)</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold flex items-center gap-2 mb-4"><Lock size={20} /> Security</h3>
        <p className="text-sm text-gray-500 mb-4">Last updated 3 months ago. We recommend changing your password regularly.</p>
        <button 
          onClick={() => alert("Redirecting to change password...")}
          className="bg-red-500 text-white px-6 py-3 rounded-full font-bold w-full hover:bg-red-600 transition"
        >
          Change Password →
        </button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default AccountSettings;