import apiClient from '@/lib/api-client';

export interface Location {
    id: string;
    name: string;
    image: string;
}

export const getLocations = async (): Promise<Location[]> => {
    try {
        const response = await apiClient.get('/api/v1/locations');
        if (response.data.success) {
            return response.data.data;
        }
        return [];
    } catch (error) {
        console.error('Error fetching locations:', error);
        return [];
    }
};
