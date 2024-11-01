import { useState, useEffect } from 'react';

interface Candidate {
  id: string;
  name: string;
}

const SavedCandidates = () => {
  const [savedCandidatesArray, setSavedCandidatesArray] = useState<Candidate[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCandidates = localStorage.getItem('savedCandidates');
      console.log(savedCandidates);
      try {
        const parsedCandidates = savedCandidates ? JSON.parse(savedCandidates) : [];
        setSavedCandidatesArray(parsedCandidates);
      } catch (error) {
        console.error('Error parsing saved candidates:', error);
      }
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <ul>
        {savedCandidatesArray.map((candidate: Candidate) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SavedCandidates;