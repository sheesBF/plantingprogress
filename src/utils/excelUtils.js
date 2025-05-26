import { read, utils } from 'xlsx';

export const processExcelFile = async (file) => {
  try {
    const data = await file.arrayBuffer();
    const workbook = read(data);
    
    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert the worksheet to JSON
    const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
    
    // Extract headers and data
    const [headers, ...rows] = jsonData;
    
    // Convert to array of objects with proper keys
    const formattedData = rows.map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
    
    return {
      headers,
      data: formattedData
    };
  } catch (error) {
    console.error('Error processing Excel file:', error);
    throw new Error('Failed to process Excel file');
  }
};

export const validateExcelData = (data, requiredColumns) => {
  if (!data || !data.headers || !data.data || data.data.length === 0) {
    throw new Error('Invalid Excel data structure');
  }

  // Check if all required columns are present
  const missingColumns = requiredColumns.filter(
    col => !data.headers.includes(col)
  );

  if (missingColumns.length > 0) {
    throw new Error(`Missing required columns: ${missingColumns.join(', ')}`);
  }

  return true;
};

export const transformExcelToChartData = (data, config) => {
  const { xAxis, yAxis, groupBy } = config;
  
  if (groupBy) {
    // Group data by specified column
    const grouped = data.reduce((acc, row) => {
      const key = row[groupBy];
      if (!acc[key]) {
        acc[key] = {};
      }
      acc[key][row[xAxis]] = row[yAxis];
      return acc;
    }, {});
    
    // Transform to chart format
    return Object.keys(grouped).map(group => ({
      name: group,
      data: Object.entries(grouped[group]).map(([x, y]) => ({
        x,
        y: parseFloat(y)
      }))
    }));
  }
  
  // Simple transformation for non-grouped data
  return data.map(row => ({
    x: row[xAxis],
    y: parseFloat(row[yAxis])
  }));
};