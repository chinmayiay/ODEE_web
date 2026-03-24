import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
      {(['en', 'kn'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            language === item ? 'bg-blue-700 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {item === 'en' ? 'English' : 'ಕನ್ನಡ'}
        </button>
      ))}
    </div>
  )
}
