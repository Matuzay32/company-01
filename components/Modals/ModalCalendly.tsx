import { InlineWidget } from "react-calendly";

interface ModalCalendlyProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const ModalCalendly: React.FC<ModalCalendlyProps> = ({
  isOpen,
  onClose,
  url,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            position: "absolute",
            top: "10px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </button>
        <InlineWidget url={url} />
      </div>
    </div>
  );
};

export default ModalCalendly;
