// src/components/ui/WaveDivider.tsx
type WaveDividerProps = {
  color?: string;
};

export default function WaveDivider({ color = "#fde2e4" }: WaveDividerProps) {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16"
      >
        <path
          fill={color}
          d="M0,64L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
