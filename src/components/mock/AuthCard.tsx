export function AuthCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Login / Signup</h2>
      <p className="mt-1 text-sm text-slate-600">Enter mobile number to get OTP</p>
      <label htmlFor="mobile" className="mt-4 block text-left text-xs font-semibold text-slate-600">
        Mobile Number
      </label>
      <input
        id="mobile"
        type="tel"
        placeholder="+91 98XXXXXX12"
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 focus:ring-2"
      />
      <button type="button" className="mt-3 w-full rounded-2xl bg-blue-800 px-4 py-3 text-sm font-semibold text-white">
        Send OTP
      </button>
      <label htmlFor="otp" className="mt-4 block text-left text-xs font-semibold text-slate-600">
        OTP
      </label>
      <input
        id="otp"
        type="text"
        placeholder="6-digit OTP"
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 focus:ring-2"
      />
      <div className="mt-4 grid gap-2">
        <p className="text-left text-xs font-semibold text-slate-600">Select Role</p>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <button type="button" className="rounded-xl border border-slate-200 px-2 py-2 hover:bg-slate-50">
            Student
          </button>
          <button type="button" className="rounded-xl border border-slate-200 px-2 py-2 hover:bg-slate-50">
            Parent
          </button>
          <button type="button" className="rounded-xl border border-slate-200 px-2 py-2 hover:bg-slate-50">
            CSR
          </button>
        </div>
      </div>
      <button type="button" className="mt-4 w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white">
        Verify & Continue
      </button>
    </div>
  )
}
