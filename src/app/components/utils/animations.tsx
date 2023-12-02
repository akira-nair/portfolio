

import React from "react";
import { motion  } from "framer-motion";

export function FadeIn({ children, delay }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: delay || 0 }}
        >
            {children}
        </motion.div>
    );
}