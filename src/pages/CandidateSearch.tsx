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
    if (query) {
      searchGithubUser(query).then((data) => console.log(data));
    }
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      <input value={query} onChange={handleSearch} />
      <ul>
        {results.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar} alt={candidate.name} />
            <a href={candidate.html_url}>{candidate.name}</a>
            <p>{candidate.location}</p>
            <p>{candidate.company}</p>
            <p>{candidate.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
  

export default CandidateSearch;