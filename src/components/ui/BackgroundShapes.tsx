// src/components/ui/BackgroundShapes.tsx
export default function BackgroundShapes() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="circle w-40 h-40 bg-pink-300"></div>
      <div className="circle w-28 h-28 bg-pink-200"></div>
      <div className="circle w-32 h-32 bg-pink-100"></div>
    </div>
  );
}
