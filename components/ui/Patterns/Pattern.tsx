import React from 'react';

export default function Pattern() {
  return (
    <div>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808013_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Capa de color radial más oscuro */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff0d,transparent)]" />
    </div>
  );
}
