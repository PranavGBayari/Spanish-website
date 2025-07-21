
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Word of the Day', path: '/word-of-the-day' },
    { name: 'Practice', path: '/practice' },
    { name: 'Grammar', path: '/grammar' },
    { name: 'Tenses', path: '/tenses' },
    { name: 'IGCSE', path: '/igcse' },
    { name: 'IB', path: '/ib' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };

  // Get user's display name
  const getUserDisplayName = () => {
    if (!user) return '';
    
    // Try to get full name from user metadata
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      // Return first name only
      return fullName.split(' ')[0];
    }
    
    // Fallback to email
    return user.email?.split('@')[0] || 'User';
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      const names = fullName.split(' ');
      if (names.length >= 2) {
        return names[0].charAt(0) + names[1].charAt(0);
      }
      return names[0].charAt(0);
    }
    
    return user.email?.charAt(0)?.toUpperCase() || 'U';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">¿Español o inglés?</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Authentication Section */}
            {!loading && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.user_metadata?.avatar_url} />
                          <AvatarFallback>
                            {getUserInitials()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                          <p className="font-medium">{getUserDisplayName()}</p>
                          <p className="w-[200px] truncate text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link to="/auth">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Sign In
                    </Button>
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Auth Section */}
              {!loading && (
                <div className="pt-2 border-t">
                  {user ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2">
                        <p className="text-sm font-medium text-gray-900">
                          {getUserDisplayName()}
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md flex items-center"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/auth"
                      className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
