import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

/**
 * Hook to fetch generic page content
 * @param {string} pageSlug 
 */
export const usePageContent = (pageSlug) => {
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                const { data, error: fetchError } = await supabase
                    .from('page_content')
                    .select('section_key, content')
                    .eq('page_slug', pageSlug);

                if (fetchError) throw fetchError;

                const contentMap = data.reduce((acc, item) => {
                    acc[item.section_key] = item.content;
                    return acc;
                }, {});

                setContent(contentMap);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [pageSlug]);

    return { content, loading, error };
};

/**
 * Hook to fetch structured data (layanan, staff, items, etc.)
 * @param {string} table 
 * @param {object} query - optional filter
 */
export const useData = (table, query = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let request = supabase.from(table).select('*');

                // Apply simple equality filters from query object
                Object.entries(query).forEach(([key, value]) => {
                    request = request.eq(key, value);
                });

                const { data: result, error: fetchError } = await request.order('created_at', { ascending: true });

                if (fetchError) throw fetchError;
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [table, JSON.stringify(query)]);

    return { data, loading, error };
};
