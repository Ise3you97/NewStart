import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export function SolutionCard({ title, description, icon: Icon, image }: SolutionCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      </div>
      
      <div className="relative p-8 h-full flex flex-col justify-end">
        <motion.div 
          className="mb-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm w-fit"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
}