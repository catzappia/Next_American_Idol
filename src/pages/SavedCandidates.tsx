const SavedCandidates = () => {
  let savedCandidatesArray = [];
  if (typeof window !== 'undefined') {
    const savedCandidates = localStorage.getItem('savedCandidates');
    console.log(savedCandidates);
    try {
      savedCandidatesArray = savedCandidates ? JSON.parse(savedCandidates) : [];
    } catch (error) {
      console.error('Error parsing saved candidates:', error);
    }
    console.log(savedCandidatesArray);
    if (savedCandidatesArray.length > 0) {
      savedCandidatesArray.forEach((candidate: any) => {
        console.log(candidate);
      });
    }
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <ul>
        {savedCandidatesArray.map((candidate: any) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SavedCandidates;