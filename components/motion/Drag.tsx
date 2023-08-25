'use client'

import { motion } from 'framer-motion'
import { ReactElement, useRef } from 'react';

export default function Drag({ children }: { children: ReactElement }) {
	const constraintsRef = useRef(null)

	return (
		<motion.div ref={constraintsRef} className=''>
			<motion.div
				initial={{ opacity: 0, }}
				animate={{ opacity: 1, }}
				transition={{
					duration: 300,
					type: "spring",
					stiffness: 800,
					damping: 20
				}}
				drag
				dragConstraints={constraintsRef}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}