

import React from "react";
import { motion  } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}