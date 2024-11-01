import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Vote as VoteIcon, FileText, Users, BarChart } from 'lucide-react';

export function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            MUSA Elections
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/vote"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <VoteIcon className="h-5 w-5" />
              <span>Vote</span>
            </Link>

            <Link
              to="/tender-candidacy"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <FileText className="h-5 w-5" />
              <span>Tender Candidacy</span>
            </Link>

            <Link
              to="/results"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <BarChart className="h-5 w-5" />
              <span>Results</span>
            </Link>

            {user.isElectoralCommission && (
              <Link
                to="/verify-candidates"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              >
                <Users className="h-5 w-5" />
                <span>Verify Candidates</span>
              </Link>
            )}

            <button
              onClick={() => logout()}
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}