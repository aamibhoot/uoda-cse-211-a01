import { motion, AnimatePresence } from "framer-motion";

const FormCard = ({ children, step }) => {
  return (
    <>
      <motion.div
        key={`${step}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "spring",
          bounce: 0.25,
          duration: 0.5,
        }}
        className="flex card w-8/12 h-80 rounded-xl px-6 py-5 justify-between items-center align-middle"
      >
        <b className="text-5xl sora-thin w-2/5 text-center">Step {step}:</b>
        <div className="w-full">{children}</div>
      </motion.div>
    </>
  );
};

export default FormCard;
