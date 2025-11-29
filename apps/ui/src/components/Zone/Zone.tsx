import React from "react";

export const Zone = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`w-full h-full flex rounded-xl ${className}`}>{children}</div>;
};

export default Zone;
