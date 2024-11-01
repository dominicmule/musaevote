import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { UpdateProfile } from './pages/UpdateProfile';
import { TenderCandidacy } from './pages/TenderCandidacy';
import { Vote } from './pages/Vote';
import { Results } from './pages/Results';
import { VerifyCandidates } from './pages/VerifyCandidates';
import { CouncilCandidacy } from './pages/CouncilCandidacy';
import { CouncilVote } from './pages/CouncilVote';
import { CouncilResults } from './pages/CouncilResults';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/tender-candidacy" element={<TenderCandidacy />} />
              <Route path="/vote" element={<Vote />} />
              <Route path="/results" element={<Results />} />
              <Route path="/verify-candidates" element={<VerifyCandidates />} />
              <Route path="/council-candidacy" element={<CouncilCandidacy />} />
              <Route path="/council-vote" element={<CouncilVote />} />
              <Route path="/council-results" element={<CouncilResults />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}