export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
    
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_30%,_#4F46E5_0%,_transparent_25%)] dark:opacity-20 dark:animate-pulse-slow" />
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_80%,_#7C3AED_0%,_transparent_25%)] dark:opacity-20 dark:animate-pulse-slower" />
      <div className="absolute inset-0 dark:bg-[#0f172a] dark:bg-opacity-95 bg-[#f8fafc] bg-opacity-95" />
      
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute top-[5%] left-[0%] h-[250px] w-[250px] rounded-full bg-indigo-500/30 blur-[100px] animate-blob" />
        <div className="absolute top-[60%] left-[80%] h-[200px] w-[200px] rounded-full bg-purple-500/30 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[45%] h-[220px] w-[220px] rounded-full bg-blue-500/30 blur-[110px] animate-blob animation-delay-4000" />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </div>
  );
}