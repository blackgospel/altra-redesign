export function NoteIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path
        d="M4 4h20v20l-4 4H4V4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 20v4l4-4h-4z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function VoiceIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path
        d="M16 2a6 6 0 0 1 6 6v8a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 14a10 10 0 0 0 20 0M16 24v6M12 30h8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect
        x="4"
        y="6"
        width="24"
        height="20"
        rx="2"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 2v8M22 2v8M4 12h24" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export function MessageIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path
        d="M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4l-4 4-4-4H8a4 4 0 0 1-4-4V8z"
        fill="currentColor"
      />
      <path d="M10 12h12M10 16h8" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export function GraphIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path
        d="M4 28V8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M8 20l4-4 4 2 8-6" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="8" cy="20" r="2" fill="white" />
      <circle cx="12" cy="16" r="2" fill="white" />
      <circle cx="16" cy="18" r="2" fill="white" />
      <circle cx="24" cy="12" r="2" fill="white" />
    </svg>
  );
}
