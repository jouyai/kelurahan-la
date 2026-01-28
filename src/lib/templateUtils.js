import { supabase } from './supabaseClient';
import { useState, useEffect } from 'react';

/**
 * Hook to manage template lookup and URLs
 */
export function useTemplates() {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTemplates() {
            try {
                const { data, error } = await supabase
                    .from('items')
                    .select('*')
                    .eq('type', 'dokument_template');

                if (!error) {
                    setTemplates(data || []);
                }
            } catch (err) {
                console.error('Error fetching templates:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchTemplates();
    }, []);

    const resolveTemplateUrl = (templatePathOrTitle) => {
        if (!templatePathOrTitle) return null;

        // 1. If it's already a full URL, return it
        if (templatePathOrTitle.startsWith('http')) {
            return templatePathOrTitle;
        }

        // 2. Try to find in the database list (by title or fileName)
        const found = templates.find(t =>
            t.title === templatePathOrTitle ||
            t.data?.fileName === templatePathOrTitle ||
            t.data?.originalName === templatePathOrTitle
        );

        if (found && found.data?.url) {
            return found.data.url;
        }

        // 3. Fallback to local public folder path
        return `/template/${templatePathOrTitle}`;
    };

    return { templates, resolveTemplateUrl, loading };
}

/**
 * Static utility to check if a string is likely a URL
 */
export const isPublicUrl = (path) => path && path.startsWith('http');
