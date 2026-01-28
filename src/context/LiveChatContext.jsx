import React, { createContext, useContext, useState } from 'react';

const LiveChatContext = createContext();

export const LiveChatProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHumanMode, setIsHumanMode] = useState(false);
    const [chatTopic, setChatTopic] = useState("");

    const openChat = (topic = "", humanMode = false) => {
        // Jika chat sudah terbuka dan ada topik baru yang berbeda, update state
        // Logic injeksi pesan ada di useEffect Widget yang listening perubahan chatTopic
        if (topic) setChatTopic(topic);
        if (humanMode) setIsHumanMode(true);
        setIsOpen(true);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    const toggleChat = () => {
        setIsOpen(prev => !prev);
    };

    const resetHumanMode = () => {
        setIsHumanMode(false);
    };

    return (
        <LiveChatContext.Provider value={{
            isOpen,
            setIsOpen, // Expose raw setter if needed
            openChat,
            closeChat,
            toggleChat,
            isHumanMode,
            setIsHumanMode, // Expose raw setter
            resetHumanMode,
            chatTopic,
            setChatTopic
        }}>
            {children}
        </LiveChatContext.Provider>
    );
};

export const useLiveChat = () => {
    const context = useContext(LiveChatContext);
    if (!context) {
        throw new Error('useLiveChat must be used within a LiveChatProvider');
    }
    return context;
};
