import { useState } from 'react';
import { motion } from 'framer-motion';
import { processExcelFile, validateExcelData } from '../../utils/excelUtils';

function ExcelUploader({ onDataProcessed, requiredColumns = [], className = '' }) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFile = async (file) => {
    try {
      setIsProcessing(true);
      setError(null);

      // Validate file type
      if (!file.name.match(/\.(xlsx|xls)$/)) {
        throw new Error('Please upload an Excel file (.xlsx or .xls)');
      }

      // Process the file
      const processedData = await processExcelFile(file);

      // Validate the data structure
      validateExcelData(processedData, requiredColumns);

      // Send data back to parent component
      onDataProcessed(processedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className={className}>
      <motion.div
        className={`relative rounded-lg border-2 border-dashed p-8 text-center ${
          isDragging
            ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
            : 'border-slate-300 dark:border-slate-700'
        } transition-colors duration-300`}
        animate={{
          scale: isDragging ? 1.02 : 1,
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept=".xlsx,.xls"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              handleFile(file);
            }
          }}
        />

        <div className="space-y-4">
          <div className="text-4xl">📊</div>
          <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
            {isProcessing ? (
              'Processing...'
            ) : (
              <>
                Drop your Excel file here or <span className="text-cyan-500">click to browse</span>
              </>
            )}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Supports .xlsx and .xls files
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-red-500 dark:text-red-400"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ExcelUploader;