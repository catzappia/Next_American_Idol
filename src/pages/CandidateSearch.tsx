import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Candidate[]>([]);

  useEffect(() => {
    searchGithub().then((data) => setResults(data.items));
  }, []);

  useEffect(() => {
    searchGithubUser('username').then((data) => console.log(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      <input value={query} onChange={handleSearch} />
      <ul>
        {results.map((candidate) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};
  

export default CandidateSearch;