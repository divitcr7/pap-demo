// src/contexts/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface User {
    name: string;
    email: string;
    profilePic: string;
}

interface UserContextType {
    user: User | null;
    loginUser: (user: User, token: string) => void;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user data and token from local storage on initial render
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        
        if (storedUser && token) {
            setUser(JSON.parse(storedUser));  // Load user from localStorage
        }
    }, []);

    const loginUser = (userData: User, token: string) => {
        // Store the user data and token in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);  // Update the user in state
    };

    const logoutUser = () => {
        // Remove user data and token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    
        // Immediately update the user state to null
        setUser(null);
    
        // Refresh the page by using window.location.reload() or window.location.href
        window.location.reload(); // This will reload the page
    };
    
    // Optional: if you want to handle side-effects in `useEffect` after logout
    useEffect(() => {
        console.log("User logged out");
    }, []);
    
    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access the user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
};
