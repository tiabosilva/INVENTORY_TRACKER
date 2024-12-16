const BusinessBadge = ({ businessName }) => {
  if (!businessName) return null;
  
  return (
    <span className="ml-4 px-3 py-1 bg-[#33bbcf]/10 text-[#33bbcf] rounded-full text-sm">
      {businessName}
    </span>
  );
};

export default BusinessBadge;