import { motion } from 'framer-motion';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const circleStyle = {
  display: 'block',
  width: '3rem',
  height: '3rem',
  border: '0.5rem solid #e9e9e9',
  borderTop: '0.5rem solid #6259CF',
  borderRadius: '50%',
};

export default function Spinner() {
  return (
    <div className="absolute inset-0 flex h-full items-center justify-center bg-transparent">
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
