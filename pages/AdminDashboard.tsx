
import React, { useState } from 'react';
import { useApp } from '../App';
import { 
  Save, Plus, Trash2, Edit2, Newspaper, Image as ImageIcon, 
  Contact, LogOut, Home, Info, BookOpen, GraduationCap, 
  Settings, CheckCircle, AlertCircle, Loader2, Globe, X,
  ListPlus
} from 'lucide-react';
import { NewsItem, GalleryItem, StatItem } from '../types';

const AdminDashboard: React.FC = () => {
  const { data, setData, setIsAdmin } = useApp();
  const [activeTab, setActiveTab] = useState<'branding' | 'home' | 'about' | 'academics' | 'admissions' | 'news' | 'gallery' | 'contact'>('branding');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success'>('idle');
  
  // Modals
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(null);

  const handleSave = () => {
    setStatus('saving');
    localStorage.setItem('elyon_school_data', JSON.stringify(data));
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    }, 500);
  };

  const updateContent = (path: string, value: any) => {
    const keys = path.split('.');
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let current = next.content;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const updateStatItem = (index: number, field: keyof StatItem, value: any) => {
    const newItems = [...data.content.home.statsItems];
    newItems[index] = { ...newItems[index], [field]: value };
    updateContent('home.statsItems', newItems);
  };

  // List Management Helpers
  const updateList = (path: string, index: number, value: string) => {
    const keys = path.split('.');
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let current = next.content;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      const newList = [...current[keys[keys.length - 1]]];
      newList[index] = value;
      current[keys[keys.length - 1]] = newList;
      return next;
    });
  };

  const addListItem = (path: string) => {
    const keys = path.split('.');
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let current = next.content;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = [...current[keys[keys.length - 1]], "New Item"];
      return next;
    });
  };

  const removeListItem = (path: string, index: number) => {
    const keys = path.split('.');
    setData(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let current = next.content;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = current[keys[keys.length - 1]].filter((_: any, i: number) => i !== index);
      return next;
    });
  };

  // News/Gallery Actions
  const saveNewsItem = () => {
    if (!editingNews) return;
    const exists = data.news.some(n => n.id === editingNews.id);
    setData(prev => ({
      ...prev,
      news: exists 
        ? prev.news.map(n => n.id === editingNews.id ? editingNews : n)
        : [editingNews, ...prev.news]
    }));
    setEditingNews(null);
  };

  const deleteNews = (id: string) => {
    if (confirm('Delete this post?')) {
      setData(prev => ({ ...prev, news: prev.news.filter(n => n.id !== id) }));
    }
  };

  const saveGalleryItem = () => {
    if (!editingGallery) return;
    const exists = data.gallery.some(g => g.id === editingGallery.id);
    setData(prev => ({
      ...prev,
      gallery: exists 
        ? prev.gallery.map(g => g.id === editingGallery.id ? editingGallery : g)
        : [...prev.gallery, editingGallery]
    }));
    setEditingGallery(null);
  };

  const deleteGallery = (id: string) => {
    if (confirm('Delete this photo?')) {
      setData(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <img src={data.content.general.logoUrl} className="w-8 h-8 rounded-full bg-white object-contain p-0.5" />
            <h2 className="font-bold text-sm truncate uppercase tracking-tight">{data.content.general.schoolName}</h2>
          </div>
          <p className="text-[10px] text-white/30 uppercase font-black">Admin Panel</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-1 custom-scrollbar overflow-y-auto">
          <AdminNavItem active={activeTab === 'branding'} onClick={() => setActiveTab('branding')} icon={<Settings size={18} />} label="Branding" />
          <AdminNavItem active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home size={18} />} label="Home Page" />
          <AdminNavItem active={activeTab === 'about'} onClick={() => setActiveTab('about')} icon={<Info size={18} />} label="About Us" />
          <AdminNavItem active={activeTab === 'academics'} onClick={() => setActiveTab('academics')} icon={<BookOpen size={18} />} label="Academics" />
          <AdminNavItem active={activeTab === 'admissions'} onClick={() => setActiveTab('admissions')} icon={<GraduationCap size={18} />} label="Admissions" />
          <AdminNavItem active={activeTab === 'news'} onClick={() => setActiveTab('news')} icon={<Newspaper size={18} />} label="Blog & News" />
          <AdminNavItem active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={<ImageIcon size={18} />} label="Media Gallery" />
          <AdminNavItem active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} icon={<Globe size={18} />} label="Contact Info" />
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={() => setIsAdmin(false)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-500/10 text-red-400 text-sm font-bold transition-all">
            <LogOut size={18} /> Exit Admin
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col min-h-screen relative">
        <header className="bg-white border-b px-10 py-5 flex justify-between items-center sticky top-0 z-20 shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-slate-800 capitalize">Editing {activeTab}</h1>
            <p className="text-xs text-slate-400">Updates are saved to your local browser storage.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {status === 'saving' && <span className="text-sm text-slate-500 flex items-center gap-2"><Loader2 className="animate-spin" size={16} /> Saving...</span>}
            {status === 'success' && <span className="text-sm text-green-600 flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full font-bold"><CheckCircle size={16} /> Saved Locally!</span>}
            <button 
              onClick={handleSave} 
              disabled={status === 'saving'}
              className="bg-school-green text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </header>

        <div className="p-10 max-w-4xl mx-auto w-full space-y-12 pb-32">
          
          {activeTab === 'branding' && (
            <Section label="Core Identity">
              <Input label="School Name" value={data.content.general.schoolName} onChange={v => updateContent('general.schoolName', v)} />
              <Input label="Tagline" value={data.content.general.schoolTagline} onChange={v => updateContent('general.schoolTagline', v)} />
              <ImageInput label="School Logo URL" value={data.content.general.logoUrl} onChange={v => updateContent('general.logoUrl', v)} />
            </Section>
          )}

          {activeTab === 'home' && (
            <>
              <Section label="Hero Section">
                <Input label="Headline" value={data.content.home.heroTitle} onChange={v => updateContent('home.heroTitle', v)} />
                <TextArea label="Subtext" value={data.content.home.heroSubtitle} onChange={v => updateContent('home.heroSubtitle', v)} />
                <ImageInput label="Hero Image URL" value={data.content.home.heroImage} onChange={v => updateContent('home.heroImage', v)} />
              </Section>
              <Section label="Welcome Section">
                <Input label="Tagline" value={data.content.home.welcomeTagline} onChange={v => updateContent('home.welcomeTagline', v)} />
                <Input label="Heading" value={data.content.home.welcomeHeading} onChange={v => updateContent('home.welcomeHeading', v)} />
                <TextArea label="Message" value={data.content.home.welcomeMessage} onChange={v => updateContent('home.welcomeMessage', v)} />
              </Section>
              <Section label="Stats & Why Choose Us">
                <Input label="Section Title" value={data.content.home.statsHeading} onChange={v => updateContent('home.statsHeading', v)} />
                <ImageInput label="Feature Image" value={data.content.home.statsImage} onChange={v => updateContent('home.statsImage', v)} />
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Key Points</p>
                  {data.content.home.statsItems.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl space-y-2 border">
                      <Input label={`Point ${idx+1} Title`} value={stat.t} onChange={v => updateStatItem(idx, 't', v)} />
                      <Input label={`Point ${idx+1} Desc`} value={stat.d} onChange={v => updateStatItem(idx, 'd', v)} />
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}

          {activeTab === 'about' && (
            <>
              <Section label="History">
                <Input label="History Title" value={data.content.about.historyTitle} onChange={v => updateContent('about.historyTitle', v)} />
                <TextArea label="History Content" value={data.content.about.historyText} onChange={v => updateContent('about.historyText', v)} />
                <ImageInput label="History Image" value={data.content.about.historyImage} onChange={v => updateContent('about.historyImage', v)} />
              </Section>
              <Section label="Vision & Mission">
                <TextArea label="Vision" value={data.content.about.vision} onChange={v => updateContent('about.vision', v)} />
                <TextArea label="Mission" value={data.content.about.mission} onChange={v => updateContent('about.mission', v)} />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-500">Core Values</label>
                    <button onClick={() => addListItem('about.values')} className="text-school-green text-xs font-bold flex items-center gap-1"><Plus size={14}/> Add</button>
                  </div>
                  {data.content.about.values.map((val, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input value={val} onChange={e => updateList('about.values', idx, e.target.value)} className="flex-grow px-4 py-2 bg-slate-50 border rounded-lg text-sm" />
                      <button onClick={() => removeListItem('about.values', idx)} className="p-2 text-red-500"><Trash2 size={16}/></button>
                    </div>
                  ))}
                </div>
              </Section>
              <Section label="Head Teacher Message">
                <Input label="Name" value={data.content.about.headTeacherName} onChange={v => updateContent('about.headTeacherName', v)} />
                <Input label="Title" value={data.content.about.headTeacherTitle} onChange={v => updateContent('about.headTeacherTitle', v)} />
                <TextArea label="Message" value={data.content.about.headTeacherMessage} onChange={v => updateContent('about.headTeacherMessage', v)} />
                <ImageInput label="Profile Photo" value={data.content.about.headTeacherImage} onChange={v => updateContent('about.headTeacherImage', v)} />
              </Section>
            </>
          )}

          {activeTab === 'academics' && (
            <>
              <Section label="Introduction">
                <TextArea label="Page Intro" value={data.content.academics.intro} onChange={v => updateContent('academics.intro', v)} />
              </Section>
              <Section label="Kindergarten">
                <Input label="Title" value={data.content.academics.kinderTitle} onChange={v => updateContent('academics.kinderTitle', v)} />
                <TextArea label="Description" value={data.content.academics.kinderDesc} onChange={v => updateContent('academics.kinderDesc', v)} />
                <ImageInput label="Section Image" value={data.content.academics.kinderImage} onChange={v => updateContent('academics.kinderImage', v)} />
              </Section>
              <Section label="Primary">
                <Input label="Title" value={data.content.academics.primaryTitle} onChange={v => updateContent('academics.primaryTitle', v)} />
                <TextArea label="Description" value={data.content.academics.primaryDesc} onChange={v => updateContent('academics.primaryDesc', v)} />
                <ImageInput label="Section Image" value={data.content.academics.primaryImage} onChange={v => updateContent('academics.primaryImage', v)} />
              </Section>
            </>
          )}

          {activeTab === 'admissions' && (
            <>
              <Section label="Requirements">
                <div className="space-y-3">
                   <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-slate-500 uppercase">Documents Needed</p>
                    <button onClick={() => addListItem('admissions.requirements')} className="text-school-green text-xs font-bold flex items-center gap-1"><Plus size={14}/> Add Requirement</button>
                  </div>
                  {data.content.admissions.requirements.map((req, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input value={req} onChange={e => updateList('admissions.requirements', idx, e.target.value)} className="flex-grow px-4 py-2 bg-slate-50 border rounded-lg text-sm" />
                      <button onClick={() => removeListItem('admissions.requirements', idx)} className="p-2 text-red-500"><Trash2 size={16}/></button>
                    </div>
                  ))}
                </div>
              </Section>
              <Section label="Process Steps">
                <div className="space-y-3">
                   <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-slate-500 uppercase">Enrollment Steps</p>
                    <button onClick={() => addListItem('admissions.process')} className="text-school-green text-xs font-bold flex items-center gap-1"><Plus size={14}/> Add Step</button>
                  </div>
                  {data.content.admissions.process.map((step, idx) => (
                    <div key={idx} className="flex gap-2">
                      <textarea value={step} onChange={e => updateList('admissions.process', idx, e.target.value)} className="flex-grow px-4 py-2 bg-slate-50 border rounded-lg text-sm resize-none" rows={2} />
                      <button onClick={() => removeListItem('admissions.process', idx)} className="p-2 text-red-500 mt-2"><Trash2 size={16}/></button>
                    </div>
                  ))}
                </div>
              </Section>
              <Section label="Call to Action">
                <Input label="CTA Heading" value={data.content.admissions.ctaHeading} onChange={v => updateContent('admissions.ctaHeading', v)} />
                <TextArea label="CTA Text" value={data.content.admissions.ctaText} onChange={v => updateContent('admissions.ctaText', v)} />
              </Section>
            </>
          )}

          {activeTab === 'news' && (
            <div className="space-y-6">
              <button 
                onClick={() => setEditingNews({ id: Date.now().toString(), title: '', date: new Date().toISOString().split('T')[0], excerpt: '', content: '', image: '' })}
                className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-400 font-bold hover:bg-slate-100 transition-all"
              >
                <Plus size={20} /> Create New Blog Post
              </button>
              <div className="grid gap-4">
                {data.news.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-200 flex justify-between items-center group">
                    <div className="flex items-center gap-4">
                      <img src={item.image} className="w-16 h-16 rounded-xl object-cover bg-slate-100" />
                      <div>
                        <h4 className="font-bold text-slate-800">{item.title || 'Untitled'}</h4>
                        <p className="text-xs text-slate-400">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingNews(item)} className="p-3 text-blue-600 bg-blue-50 rounded-xl"><Edit2 size={18} /></button>
                      <button onClick={() => deleteNews(item.id)} className="p-3 text-red-600 bg-red-50 rounded-xl"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <button 
                onClick={() => setEditingGallery({ id: Date.now().toString(), category: 'Activities', url: '', caption: '' })}
                className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-400 font-bold hover:bg-slate-100 transition-all"
              >
                <Plus size={20} /> Add New Gallery Image
              </button>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {data.gallery.map(item => (
                  <div key={item.id} className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm relative group">
                    <img src={item.url} className="w-full h-32 object-cover rounded-xl bg-slate-100" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
                      <button onClick={() => setEditingGallery(item)} className="p-2 bg-white text-blue-600 rounded-lg"><Edit2 size={16} /></button>
                      <button onClick={() => deleteGallery(item.id)} className="p-2 bg-white text-red-600 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <Section label="Contact Details">
              <Input label="Address" value={data.content.contact.address} onChange={v => updateContent('contact.address', v)} />
              <Input label="Phone Numbers" value={data.content.contact.phone} onChange={v => updateContent('contact.phone', v)} />
              <Input label="Email Address" value={data.content.contact.email} onChange={v => updateContent('contact.email', v)} />
              <TextArea label="Google Maps Embed URL" value={data.content.contact.mapUrl} onChange={v => updateContent('contact.mapUrl', v)} />
              <p className="text-[10px] text-slate-400 italic">Pro-tip: Get the embed URL from Google Maps share > Embed a map > src value.</p>
            </Section>
          )}

        </div>
      </div>

      {/* Modals */}
      {editingNews && (
        <Modal title="News Article" onClose={() => setEditingNews(null)} onSave={saveNewsItem}>
          <div className="space-y-4">
            <Input label="Title" value={editingNews.title} onChange={v => setEditingNews({...editingNews, title: v})} />
            <Input label="Date" value={editingNews.date} onChange={v => setEditingNews({...editingNews, date: v})} />
            <ImageInput label="Featured Image URL" value={editingNews.image} onChange={v => setEditingNews({...editingNews, image: v})} />
            <TextArea label="Short Summary" value={editingNews.excerpt} onChange={v => setEditingNews({...editingNews, excerpt: v})} />
            <TextArea label="Full Article Content" value={editingNews.content} onChange={v => setEditingNews({...editingNews, content: v})} />
          </div>
        </Modal>
      )}

      {editingGallery && (
        <Modal title="Gallery Image" onClose={() => setEditingGallery(null)} onSave={saveGalleryItem}>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500">Category</label>
              <select 
                value={editingGallery.category} 
                onChange={e => setEditingGallery({...editingGallery, category: e.target.value as any})}
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              >
                {['Classrooms', 'Events', 'Sports', 'Activities'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <Input label="Caption" value={editingGallery.caption} onChange={v => setEditingGallery({...editingGallery, caption: v})} />
            <ImageInput label="Custom Image URL" value={editingGallery.url} onChange={v => setEditingGallery({...editingGallery, url: v})} />
          </div>
        </Modal>
      )}
    </div>
  );
};

// UI Components
const AdminNavItem = ({ active, onClick, icon, label }: any) => (
  <button onClick={onClick} className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold transition-all ${active ? 'bg-school-green text-white shadow-lg' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
    {icon} <span className="text-sm">{label}</span>
  </button>
);

const Section = ({ label, children }: any) => (
  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
    <div className="bg-slate-50 px-8 py-3 border-b text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
    <div className="p-8 space-y-6">{children}</div>
  </div>
);

const Input = ({ label, value, onChange }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-xs font-bold text-slate-500">{label}</label>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} className="w-full px-5 py-3 rounded-2xl border bg-slate-50/50 outline-none focus:border-school-green transition-all" />
  </div>
);

const TextArea = ({ label, value, onChange }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-xs font-bold text-slate-500">{label}</label>
    <textarea rows={4} value={value} onChange={e => onChange(e.target.value)} className="w-full px-5 py-3 rounded-2xl border bg-slate-50/50 outline-none focus:border-school-green resize-none transition-all" />
  </div>
);

const ImageInput = ({ label, value, onChange }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-xs font-bold text-slate-500">{label}</label>
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-xl border-2 border-slate-100 bg-white overflow-hidden shrink-0 shadow-sm">
        <img src={value} className="w-full h-full object-cover" onError={e => (e.currentTarget.src = 'https://placehold.co/100x100?text=Empty')} />
      </div>
      <input type="text" placeholder="Paste direct image link" value={value} onChange={e => onChange(e.target.value)} className="flex-grow px-5 py-3 rounded-2xl border bg-slate-50/50 outline-none focus:border-school-green transition-all" />
    </div>
  </div>
);

const Modal = ({ title, children, onClose, onSave }: any) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
    <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <div className="px-10 py-6 border-b flex justify-between items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full"><X size={20} /></button>
      </div>
      <div className="p-10 overflow-y-auto custom-scrollbar">{children}</div>
      <div className="px-10 py-6 bg-slate-50 flex justify-end gap-3">
        <button onClick={onClose} className="px-6 py-2 text-slate-500 font-bold">Cancel</button>
        <button onClick={onSave} className="px-10 py-2 bg-school-green text-white rounded-xl font-bold shadow-lg">Save Changes</button>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
