const GenerateKey = ({ firstName, dob }) => {
  const generateKey = () => {
    if (!firstName || !dob) return '';
    
    const firstTwoLetters = firstName.slice(0, 2).toLowerCase();
    const date = new Date(dob);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${firstTwoLetters}${day}${month}${year}`;
  };

  return (
    <div className="key-section">
      <h3>Generated Key</h3>
      <p>{generateKey()}</p>
    </div>
  );
};

export default GenerateKey; 