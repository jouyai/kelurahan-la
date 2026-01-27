import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';


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
