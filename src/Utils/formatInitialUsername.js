export  const formatInitialsUsername = (username) => {
    if (!username) return ""; 
    return username
        .split(' ')
        .map(word => word.charAt(0).toUpperCase());
};
